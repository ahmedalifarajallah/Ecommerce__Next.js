"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useWixClient from "@/hooks/useWixClient";

const VerificationPage = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const wixClient = useWixClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const res = await wixClient.auth.processVerification({
        verificationCode: code,
      });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Enter Verification Code
        </h2>

        <p className="text-sm text-gray-600 text-center mb-4">
          We&apos;ve sent a 6-digit verification code to your email. Please
          enter it below.
        </p>

        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 p-2 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            inputMode="numeric"
            maxLength={6}
            placeholder="Enter 6-digit code"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-center tracking-widest text-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary/90 transition flex items-center justify-center"
          >
            {isSubmitting ? "Verifying..." : "Verify"}
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-500">
          Didn&apos;t receive the code?{" "}
          <button
            type="button"
            className="text-primary font-medium hover:underline"
            onClick={() => alert("Resend code logic here")}
          >
            Resend Code
          </button>
        </p>
      </div>
    </div>
  );
};

export default VerificationPage;
