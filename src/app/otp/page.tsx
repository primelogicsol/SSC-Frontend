"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { verifyAccount, resendOTP } from "@/hooks/authServices";

export default function OTP() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendMessage, setResendMessage] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);

  const router = useRouter();

  const handleVerify = async () => {
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      await verifyAccount(email, otp);
      setSuccess("OTP verified! Redirecting to set new password...");
      setTimeout(() => router.push(`/new-password?email=${encodeURIComponent(email)}`), 1500);
    } catch (err: any) {
      setError(err.message || "Verification failed");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResendMessage("");
    setError("");
    setResendDisabled(true);
    try {
      await resendOTP(email);
      setResendMessage("OTP has been resent to your email.");
    } catch (err: any) {
      setError(err.message || "Failed to resend OTP");
    }
    setTimeout(() => {
      setResendDisabled(false);
      setResendMessage("");
    }, 10000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-center text-2xl font-semibold text-fixnix-lightpurple">
          Enter OTP
        </h2>
        <p className="text-center text-gray-500 text-sm mt-2">
          We've sent a 6-digit OTP to your email
        </p>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-2 mt-4 border rounded text-center"
        />
        <input
          type="text"
          value={otp}
          onChange={e => { setOtp(e.target.value); setError(""); }}
          placeholder="Enter OTP"
          className="w-full p-2 mt-2 border rounded text-center"
          maxLength={6}
        />
        {error && <p className="text-red-500 text-sm text-center mt-1">{error}</p>}
        {success && <p className="text-green-600 text-sm text-center mt-1">{success}</p>}
        <button
          onClick={handleVerify}
          className="w-full bg-fixnix-lightpurple text-white py-2 rounded mt-4 hover:bg-fixnix-darkpurple transition"
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
        <div className="flex justify-between items-center mt-4 text-sm">
          <button
            onClick={handleResend}
            disabled={resendDisabled}
            className={`${resendDisabled ? "text-gray-400 cursor-not-allowed" : "text-fixnix-darkpurple"} font-medium transition`}
          >
            Resend OTP
          </button>
          <button
            onClick={() => router.back()}
            className="text-fixnix-darkpurple font-medium"
          >
            Go Back
          </button>
        </div>
        {resendMessage && (
          <p className="text-green-600 text-sm text-center mt-2">{resendMessage}</p>
        )}
      </div>
    </div>
  );
}
