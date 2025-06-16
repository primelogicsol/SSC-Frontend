"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();

  const onSubmit = async (data: LoginFormInputs) => {
    setLoading(true);
    try {
      await login(data.email, data.password);
      
      // Get return URL if exists
      const returnUrl = searchParams?.get('redirect') || '/';
      router.push(returnUrl);
      
      toast.success('Login successful!');
    } catch (error: any) {
      toast.error(error.message || 'Login failed. Please try again.');
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-center text-2xl font-semibold text-fixnix-lightpurple">
          Login to SSC
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          {/* Email Field */}
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
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          {/* Password Field */}
          <label className="relative block">
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "At least 6 characters" },
              })}
              type="password"
              placeholder=" "
              className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none peer"
            />
            <span className="absolute left-2 top-2 text-gray-500 transition-opacity transform scale-100 opacity-50 peer-placeholder-shown:opacity-50 peer-placeholder-shown:scale-100 peer-focus:opacity-100 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:-translate-x-1 peer-focus:text-fixnix-lightpurple peer-focus:bg-white">
              Password
            </span>
          </label>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link
              href="/forget-password"
              className="text-sm text-fixnix-darkpurple hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-fixnix-lightpurple text-white py-2 rounded hover:bg-fixnix-darkpurple transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Processing..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <Link href="/Register" className="text-fixnix-darkpurple font-bold">
            Register
          </Link>
        </p>

        {/* Social Login Buttons */}
        <p className="text-sm sm:text-md text-center text-gray-600 mt-4">
          Sign In With
        </p>
        <div className="flex items-center justify-center py-2 space-x-3 text-center">
          <Link
            href="#"
            className="flex items-center justify-center h-9 w-9 bg-fixnix-lightpurple text-white rounded-full text-sm transition-all duration-300 hover:bg-fixnix-lightpurple hover:text-fixnix-white"
          >
            <i className="fab fa-google"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
