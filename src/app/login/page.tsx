"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import { resendOTP } from "@/hooks/authServices";

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const { login, googleLogin, loading: authLoading } = useAuth();
  const [error, setError] = useState<string | React.ReactElement | null>(null);
  const [googleError, setGoogleError] = useState<string | null>(null);
  const [resendLoading, setResendLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (data: LoginFormInputs) => {
    setError(null);
    setGoogleError(null);
    setSuccessMessage(null);
    
    try {
      await login(data.email, data.password);
      const returnUrl = localStorage.getItem("returnUrl") || "/";
      localStorage.removeItem("returnUrl");
      router.push(returnUrl);
    } catch (err: any) {
      // Check if this is a verification error
      if (err.message && err.message.includes("Please verify your email address first")) {
        setError(
          <div className="text-center">
            <p className="text-amber-600 mb-2">{err.message}</p>
            <p className="text-sm text-gray-600 mb-2">
              Didn't receive the email?{" "}
              <button 
                type="button" 
                onClick={() => handleResendOTP(data.email)}
                disabled={resendLoading}
                className="text-fixnix-darkpurple hover:underline font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {resendLoading ? "Sending..." : "Resend verification email"}
              </button>
            </p>
            <p className="text-sm text-gray-600">
              Or{" "}
              <Link 
                href={`/otp?email=${encodeURIComponent(data.email)}`}
                className="text-fixnix-darkpurple hover:underline font-medium"
              >
                go to verification page
              </Link>
            </p>
          </div>
        );
      } else {
        setError(err.message || "Login failed. Please check your credentials.");
      }
    }
  };

  // ✅ Google Auth Initialization
  useEffect(() => {
    // Check if Google API is available
    if (typeof window !== "undefined" && (window as any).google?.accounts?.id) {
      const google = (window as any).google;
      google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        callback: handleGoogleResponse,
      });
      google.accounts.id.renderButton(document.getElementById("google-btn"), {
        theme: "outline",
        size: "large",
      });
    }
  }, []);

  const handleGoogleResponse = async (response: any) => {
    try {
      setGoogleError(null);
      const user = decodeJwt(response.credential);
      await googleLogin(user.email, user.name);
      router.push("/");
    } catch (err: any) {
      setGoogleError(err.message || "Google login failed");
    }
  };

  const handleResendOTP = async (email: string) => {
    try {
      setResendLoading(true);
      setError(null);
      setSuccessMessage(null);
      await resendOTP(email);
      setSuccessMessage("Verification email sent successfully! Please check your inbox.");
      // Clear success message after 5 seconds
      setTimeout(() => setSuccessMessage(null), 5000);
    } catch (err: any) {
      setError(err.message || "Failed to resend OTP. Please try again.");
    } finally {
      setResendLoading(false);
    }
  };

  const decodeJwt = (token: string) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(c => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      throw new Error("Invalid Google token");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        {/* Back Button */}
        <button
          type="button"
          onClick={() => router.back()}
          className="mb-4 text-fixnix-darkpurple hover:underline text-sm"
        >
          ← Back
        </button>

        <h2 className="text-center text-2xl font-semibold text-fixnix-lightpurple">
          Login to SSC
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          {/* Email */}
          <label className="relative block">
            <input
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              type="email"
              placeholder=" "
              className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none peer"
            />
            <span className="absolute left-2 top-2 text-gray-500 transition-opacity transform scale-100 opacity-50 peer-placeholder-shown:opacity-50 peer-placeholder-shown:scale-100 peer-focus:opacity-100 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:-translate-x-1 peer-focus:text-fixnix-lightpurple peer-focus:bg-white">
              Email
            </span>
          </label>
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          {/* Password */}
          <label className="relative block">
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" },
              })}
              type="password"
              placeholder=" "
              className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none peer"
            />
            <span className="absolute left-2 top-2 text-gray-500 transition-opacity transform scale-100 opacity-50 peer-placeholder-shown:opacity-50 peer-placeholder-shown:scale-100 peer-focus:opacity-100 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:-translate-x-1 peer-focus:text-fixnix-lightpurple peer-focus:bg-white">
              Password
            </span>
          </label>
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          {/* Forgot Password */}
          <div className="text-right">
            <Link href="/forget-password" className="text-sm text-fixnix-darkpurple hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Error Messages */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {googleError && <p className="text-red-500 text-sm text-center">{googleError}</p>}
          {successMessage && <p className="text-green-600 text-sm text-center">{successMessage}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-fixnix-lightpurple text-white py-2 rounded hover:bg-fixnix-darkpurple transition-colors duration-200 disabled:opacity-50"
            disabled={authLoading}
          >
            {authLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <Link href="/Register" className="text-fixnix-darkpurple font-bold">
            Register
          </Link>
        </p>

        {/* Google Login */}
        <div className="mt-4">
          <p className="text-center text-gray-600 mb-2">Or </p>
          <div id="google-btn" className="flex justify-center"></div>
        </div>
      </div>
    </div>
  );
}
