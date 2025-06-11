"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OTP() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [resendMessage, setResendMessage] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);

  const router = useRouter();

  const handleVerify = () => {
    if (otp.length === 6) {
      router.push("/Dashboard"); // Redirect after OTP verification
    } else {
      setError("Enter a valid 6-digit OTP");
    }
  };

  const handleResend = () => {
    setResendMessage("OTP has been resent to your email.");
    setResendDisabled(true);

    setTimeout(() => {
      setResendDisabled(false);
      setResendMessage("");
    }, 10000); // Allow resend again after 10 seconds
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
          type="text"
          value={otp}
          onChange={(e) => {
            setOtp(e.target.value);
            setError("");
          }}
          placeholder="Enter OTP"
          className="w-full p-2 mt-4 border rounded text-center"
          maxLength={6}
        />
        {error && <p className="text-red-500 text-sm text-center mt-1">{error}</p>}

        <button
          onClick={handleVerify}
          className="w-full bg-fixnix-lightpurple text-white py-2 rounded mt-4 hover:bg-fixnix-darkpurple transition"
        >
          Verify OTP
        </button>

        <div className="flex justify-between items-center mt-4 text-sm">
          <button
            onClick={handleResend}
            disabled={resendDisabled}
            className={`${
              resendDisabled ? "text-gray-400 cursor-not-allowed" : "text-fixnix-darkpurple"
            } font-medium transition`}
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
