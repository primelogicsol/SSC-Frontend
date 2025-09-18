"use client";

import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Cookies from "js-cookie";

import { Button } from "@/components/ui/button";
import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperTrigger,
} from "@/components/ui/stepper";
import { CardHeader, CardTitle } from "@/components/ui/s-card";
import { ArrowLeft, LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// ✅ Custom form input components
import { FormInput } from "@/components/form-input";
import { FormCheckbox } from "@/components/form-checkbox";
import { VendorFormValues, vendorRegistrationSchema } from "./Schema";
import { registerVendor } from "@/hooks/vendorRegistration";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { FormDatePicker } from "@/components/datepicker";

export default function StepperProgress({
  defaultValues,
}: {
  defaultValues: VendorFormValues;
}) {
  const steps = [1, 2, 3, 4];

  // 👇 Initialize with cookie value (if available)
  const [currentStep, setCurrentStep] = useState(() => {
    const stepCookie = Cookies.get("vendorStep");
    return stepCookie ? Number(stepCookie) : 1;
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const methods = useForm<VendorFormValues>({
    defaultValues: defaultValues,
    resolver: zodResolver(vendorRegistrationSchema),
    mode: "all",
  });

  const { handleSubmit, trigger } = methods;

  // ✅ Whenever currentStep changes, update cookie
  useEffect(() => {
    Cookies.set("vendorStep", currentStep.toString());
  }, [currentStep]);

  const handleNextStep = async () => {
    let fieldsToValidate: (keyof VendorFormValues)[] = [];

    if (currentStep === 1) fieldsToValidate = ["fullName", "email", "password"];
    if (currentStep === 2)
      fieldsToValidate = [
        "businessName",
        "businessType",
        "einNumber",
        "tinNumber",
      ];
    if (currentStep === 3)
      fieldsToValidate = [
        "contactPerson",
        "phone",
        "bankName",
        "accountNumber",
        "routingNumber",
        "bankAddress",
      ];
    if (currentStep === 4)
      fieldsToValidate = ["signatoryName", "signatureDate", "vendoraccepted"];

    // ✅ Validate current step
    const isValid = await trigger(fieldsToValidate);
    if (!isValid) return;

    // ✅ Build object with key-value pairs
    const stepData: any = {};
    fieldsToValidate.forEach((field) => {
      stepData[field] = methods.getValues(field);
    });

    // ✅ If step 4, add isCompleted
    if (currentStep === 4) {
      stepData.isCompleted = true;
    }

    console.log(stepData);
    // Output example:
    // { fullName: "Adi", email: "wiviton805@poesd.com", password: "adminadmin" }
    // Step 4 will include isCompleted: true

    try {
      setLoading(true);
      await registerVendor(stepData); // create or update
      if (currentStep !== 4) {
        setCurrentStep((prev) => prev + 1);
      }
      Cookies.set("vendorStep", "1");
      toast.success(
        currentStep < 4
          ? `Step ${currentStep} completed`
          : "Request has been submitted",
        {
          position: "top-center",
          richColors: true,
        }
      );
      if (currentStep === 4) {
        methods.reset();
        setTimeout(() => {
          router.push("/");
        }, 500);
      }
    } catch (error) {
      toast.error(
        (error instanceof Error && error.message) || "Something went wrong",
        {
          position: "top-center",
          richColors: true,
        }
      );
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        // onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col min-h-[500px] max-h-max"
        aria-disabled={loading}
      >
        <Stepper value={currentStep} onValueChange={setCurrentStep}>
          {/* Progress nav */}
          <StepperNav>
            {steps.map((step) => (
              <StepperItem
                key={step}
                step={step}
                className="flex-1 first:rounded-s-full last:rounded-e-full overflow-hidden transition-all duration-300"
              >
                <StepperTrigger
                  className="w-full flex-col items-start gap-2"
                  asChild
                >
                  <StepperIndicator className="bg-border h-2 w-full rounded-none">
                    <span className="sr-only">{step}</span>
                  </StepperIndicator>
                </StepperTrigger>
              </StepperItem>
            ))}
          </StepperNav>

          {/* Step counter */}
          <div className="flex items-center justify-between gap-2.5 py-2">
            <div className="text-sm font-medium">
              <span className="text-foreground">{currentStep}</span>{" "}
              <span className="text-muted-foreground/60">/ {steps.length}</span>
            </div>
          </div>

          {/* Panels */}
          <StepperPanel className="text-sm py-2">
            {/* Step 1: Personal Info */}
            <StepperContent value={1} className="w-full flex justify-center">
              <div className="w-full max-w-2xl">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Enter your personal details to create your account.
                  </p>
                </CardHeader>
                <div className="grid gap-4 px-6">
                  <FormInput name="fullName" label="Full Name" />
                  <FormInput name="email" label="Email" type="email" />
                  <FormInput name="password" label="Password" type="password" />
                </div>
              </div>
            </StepperContent>

            {/* Step 2: Business Info */}
            <StepperContent value={2} className="w-full flex justify-center">
              <div className="w-full max-w-2xl">
                <CardHeader>
                  <CardTitle>Business Information</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Provide details about your business for verification.
                  </p>
                </CardHeader>
                <div className="grid md:grid-cols-2 gap-4 px-6">
                  <FormInput name="businessName" label="Business Name" />
                  <FormInput name="businessType" label="Business Type" />
                  <FormInput name="einNumber" label="EIN Number" />
                  <FormInput name="tinNumber" label="TIN Number" />
                </div>
              </div>
            </StepperContent>

            {/* Step 3: Contact & Banking */}
            <StepperContent value={3} className="w-full flex justify-center">
              <div className="w-full max-w-2xl">
                <CardHeader>
                  <CardTitle>Banking & Contact</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Securely provide your contact and bank details for payouts.
                  </p>
                </CardHeader>
                <div className="grid md:grid-cols-2 gap-4 px-6">
                  <FormInput name="contactPerson" label="Contact Person" />
                  <FormInput name="phone" label="Phone" />
                  <FormInput name="bankName" label="Bank Name" />
                  <FormInput name="accountNumber" label="Account Number" />
                  <div className="col-span-2">
                    <FormInput name="routingNumber" label="Routing Number" />
                  </div>
                  <div className="col-span-2">
                    <FormInput name="bankAddress" label="Bank Address" />
                  </div>
                </div>
              </div>
            </StepperContent>

            {/* Step 4: Agreement */}
            <StepperContent value={4} className="w-full flex justify-center">
              <div className="w-full max-w-2xl">
                <CardHeader>
                  <CardTitle>Agreement & Confirmation</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Review and sign to confirm your details.
                  </p>
                </CardHeader>
                <div className="grid gap-4 px-6">
                  <FormInput name="signatoryName" label="Signatory Name" />
                  <FormDatePicker
                    name="signatureDate"
                    control={methods.control}
                    label="Signature Date"
                  />

                  <FormCheckbox
                    name="vendoraccepted"
                    label="I agree to the terms & conditions"
                  />
                </div>
              </div>
            </StepperContent>
          </StepperPanel>

          {/* Footer nav */}
          <div className="flex items-center justify-end gap-2.5 py-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setCurrentStep((prev) => prev - 1)}
              className={cn(
                currentStep === 1 && "pointer-events-none opacity-0"
              )}
            >
              <ArrowLeft className="mr-1 h-4 w-4" /> Back
            </Button>
            {currentStep < steps.length ? (
              <Button
                disabled={loading}
                type="button"
                variant="outline"
                onClick={handleNextStep}
              >
                {loading ? <LoaderCircle className="animate-spin" /> : "Next"}
              </Button>
            ) : (
              <Button
                disabled={loading}
                type="button"
                onClick={handleNextStep}
                className="bg-fixnix-lightpurple hover:bg-fixnix-darkpurple"
              >
                {loading ? <LoaderCircle className="animate-spin" /> : "Submit"}
              </Button>
            )}
          </div>
        </Stepper>
      </form>
    </FormProvider>
  );
}
