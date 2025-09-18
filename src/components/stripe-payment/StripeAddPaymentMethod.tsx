"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
  LinkAuthenticationElement,
  Elements,
} from "@stripe/react-stripe-js";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { CreditCardIcon } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import { config } from "@/lib/config";
import { useRouter } from "next/navigation";
import { ScrollArea } from "../ui/scroll-area";
import { setDefaultPaymentMethod } from "@/hooks/stripeServices";
const stripePromise = loadStripe(config.STRIPE_PUBLIC_KEY!);

interface Props {
  clientSecret: string;
  customerId?: string;
  show: boolean;
  setShow: (value: boolean) => void;
}

const StripePaymentMethod: React.FC<Props> = ({
  clientSecret,
  customerId,
  show,
  setShow,
}) => {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        loader: "auto",
        // mode: "setup",
        currency: "usd",
        clientSecret: clientSecret,
      }}
    >
      <StripePaymentElementForm
        show={show}
        setShow={setShow}
        clientSecret={clientSecret}
      />
    </Elements>
  );
};

const StripePaymentElementForm: React.FC<Props> = ({
  clientSecret,
  show,
  setShow,
}) => {
  const stripe = useStripe();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const elements = useElements();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!stripe || !elements) {
      setError("Stripe is not initialized.");
      setLoading(false);
      return;
    }
    try {
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setError(submitError.message || "Validation failed.");
        setLoading(false);
        return;
      }
      //  Confirm Setup Intent (Correctly handling result)
      const result = await stripe?.confirmSetup({
        elements: elements ?? undefined,
        clientSecret,
        confirmParams: {
          return_url: window.location.href, // Use current URL to avoid page reload
        },
        redirect: "if_required", // Prevents automatic redirection
      });

      // Check for error properly
      if (result && result.error) {
        setError(result.error.message || "Failed to set up payment method.");
        setLoading(false);
        return;
      }

      //  Ensure setupIntent exists and check its status
      if (result && result.error) {
        setError("Setup Intent failed.");
      } else {
        const paymentMethodId = result.setupIntent.payment_method as string;
        await setDefaultPaymentMethod(paymentMethodId);
        setSuccess(true);
        router.refresh();
        setShow(false);
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setError(null);
    setSuccess(false);
  }, [show]);

  return (
    <Dialog open={show} onOpenChange={setShow}>
      <ScrollArea className="">
        <DialogContent className="bg-white max-w-[90%] md:w-[700px] md:max-w-[700px] max-h-[80%] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add a Card</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit}>
            <LinkAuthenticationElement />
            <PaymentElement />
            {stripe && (
              <Button
                disabled={loading || !stripe}
                // loading={loading}
                id="submit"
                type="submit"
                className="ml-auto mt-3 block"
              >
                Add
              </Button>
            )}
            {error && <p className="mt-2 text-red-500">{error}</p>}
            {success && (
              <p className="mt-2 text-green-500">
                Payment method added successfully!
              </p>
            )}
          </form>
        </DialogContent>
      </ScrollArea>
    </Dialog>
  );
};

export default StripePaymentMethod;
