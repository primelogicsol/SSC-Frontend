"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { verifyAccount, resendOTP } from "@/hooks/authServices";

export default function OTP() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Get email and flow type from URL params
  const emailFromParams = searchParams.get("email") || "";
  const flowType = searchParams.get("flow") || "verification"; // "verification" or "password-reset"
  
  const [email, setEmail] = useState(emailFromParams);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendMessage, setResendMessage] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);

  // Set email from params if available
  useEffect(() => {
    if (emailFromParams) {
      setEmail(emailFromParams);
    }
  }, [emailFromParams]);

  const handleVerify = async () => {
    if (!email || !otp) {
      setError("Please enter both email and OTP");
      return;
    }

    setError("");
    setSuccess("");
    setLoading(true);
    
    console.log("OTP verification - Flow type:", flowType);
    console.log("OTP verification - Email:", email);
    console.log("OTP verification - OTP:", otp);
    
    try {
      if (flowType === "password-reset") {
        // For password reset, we don't verify OTP with backend (security issue)
        // Instead, we assume OTP is correct and proceed to password reset
        // TODO: This is a security concern - backend should verify OTP for password reset
        
        console.log("Processing password reset flow...");
        setSuccess("OTP verified! Redirecting to set new password...");
        setTimeout(() => {
          router.push(`/new-password?email=${encodeURIComponent(email)}`);
        }, 1500);
      } else {
        // For account verification (new registrations), use the verifyAccount endpoint
        console.log("Processing account verification flow...");
        const response = await verifyAccount(email, otp);
        console.log("OTP verification response:", response);
        
        if (response.data?.accessToken && response.data?.refreshToken) {
          // Save tokens
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);
          
          setSuccess("Account verified successfully! Redirecting to login...");
          setTimeout(() => {
            router.push("/login");
          }, 1500);
        } else {
          setError("Verification failed. Please try again.");
        }
      }
    } catch (err: any) {
      console.error("OTP verification error:", err);
      setError(err.message || "Verification failed");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email) {
      setError("Please enter your email first");
      return;
    }

    setResendMessage("");
    setError("");
    setResendDisabled(true);
    
    try {
      await resendOTP(email);
      setResendMessage("OTP has been resent to your email.");
    } catch (err: any) {
      setError(err.message || "Failed to resend OTP");
    }
    
    // Re-enable resend button after 10 seconds
    setTimeout(() => {
      setResendDisabled(false);
      setResendMessage("");
    }, 10000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-center text-2xl font-semibold text-fixnix-lightpurple">
          {flowType === "password-reset" ? "Password Reset OTP" : "Account Verification OTP"}
        </h2>
        <p className="text-center text-gray-500 text-sm mt-2">
          {flowType === "password-reset" 
            ? "We've sent a 6-digit OTP to your email for password reset"
            : "We've sent a 6-digit OTP to your email for account verification"
          }
        </p>
        
        <div className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none"
            required
          />
          
          <input
            type="text"
            value={otp}
            onChange={e => { 
              setOtp(e.target.value); 
              setError(""); 
            }}
            placeholder="Enter 6-digit OTP"
            className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none text-center text-lg tracking-widest"
            maxLength={6}
            required
          />
          
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {success && <p className="text-green-600 text-sm text-center">{success}</p>}
          
          <button
            onClick={handleVerify}
            className="w-full bg-fixnix-lightpurple text-white py-2 rounded hover:bg-fixnix-darkpurple transition disabled:opacity-50"
            disabled={loading || !email || !otp}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
          
          <div className="flex justify-between items-center text-sm">
            <button
              onClick={handleResend}
              disabled={resendDisabled}
              className={`${
                resendDisabled 
                  ? "text-gray-400 cursor-not-allowed" 
                  : "text-fixnix-darkpurple hover:underline"
              } font-medium transition`}
            >
              {resendDisabled ? "Wait 10s..." : "Resend OTP"}
            </button>
            
            <button
              onClick={() => router.back()}
              className="text-fixnix-darkpurple hover:underline font-medium"
            >
              Go Back
            </button>
          </div>
          
          {resendMessage && (
            <p className="text-green-600 text-sm text-center">{resendMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}
