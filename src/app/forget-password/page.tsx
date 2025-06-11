"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type ForgotPasswordInputs = {
  email: string;
};

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordInputs>();

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data: ForgotPasswordInputs) => {
    setLoading(true);
    console.log("Reset link sent to:", data.email);

    // Simulate backend call delay
    setTimeout(() => {
      // After sending reset link, navigate to OTP screen
      router.push("/otp");
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-center text-2xl font-semibold text-fixnix-lightpurple mb-4">
          Forgot Password
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <label className="block">
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none"
            />
          </label>
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-fixnix-lightpurple text-white py-2 rounded hover:bg-fixnix-darkpurple transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Back to{" "}
          <Link href="/login" className="text-fixnix-darkpurple font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
