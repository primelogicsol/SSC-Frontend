"use client";

import React, { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema, CheckoutFormValues } from "./Schema";
import { FormInput } from "@/components/form-input"; // ✅ use the one you made
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { checkoutSubmit } from "@/hooks/cart";
import { toast } from "sonner";

interface Props {
  onSuccess: (value: boolean) => void;
}

const CheckoutForm: FC<Props> = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const methods = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: { country: "4" },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: CheckoutFormValues) => {
    setLoading(true);
    try {
      const res = await checkoutSubmit(data);
      console.log(res.data);
      toast.success("Thanks for your order we'll get back to you soon");
      onSuccess(true);
    } catch (err: any) {
      console.error("Checkout error:", err);
      toast.error("Error processing request");
      onSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl font-semibold text-fixnix-darkpurple mb-6">
        Shipping Details
      </h2>

      <FormProvider {...methods}>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Country Select */}
          <div>
            <select
              {...methods.register("country")}
              className="w-full h-12 rounded-lg bg-gray-50 border border-gray-200 px-4 text-gray-700 text-sm focus:outline-none focus:border-fixnix-lightpurple focus:ring-1 focus:ring-fixnix-lightpurple transition-all"
            >
              <option value="">Select a country</option>
              <option value="1">Canada</option>
              <option value="2">England</option>
              <option value="3">Australia</option>
              <option value="4">USA</option>
            </select>
          </div>

          {/* First & Last Name */}
          <FormInput name="fullName" label="Full Name" />
          {/* <FormInput name="lastName" label="Last Name" /> */}
          {/* Email */}
          <FormInput name="email" label="Email Address" type="email" />
          <FormInput name="phone" label="Phone" type="tel" />
          {/* Address */}
          <FormInput name="shippingAddress" label="Address" />
          {/* <FormInput
            name="apartment"
            label="Apartment, suite, unit (optional)"
          />

          <div className="grid grid-cols-2 gap-4">
            <FormInput name="city" label="City" />
            <FormInput name="state" label="State" />
          </div> */}

          {/* ZIP & Phone */}
          <FormInput
            name="zip"
            label="ZIP Code"
            type="number"
            min={4}
            max={5}
          />

          {/* Submit */}
          <div className="relative w-full">
            <Button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg shadow-lg overflow-hidden relative bg-fixnix-lightpurple"
            >
              <span className="relative z-10">
                {loading ? "Processing..." : `Confirm Order`}
              </span>
              <motion.span
                className="absolute top-0 left-0 h-full w-full pointer-events-none"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 1.5,
                  ease: "linear",
                }}
                style={{
                  background:
                    "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)",
                  width: "60%",
                  opacity: 0.7,
                  filter: "blur(1px)",
                }}
              />
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CheckoutForm;
