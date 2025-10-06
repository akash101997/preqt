"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, Suspense } from "react";
import styles from "./otp.module.css";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import Loader from "../components/Loader";
import { showErrorToast, showSuccessToast } from "../components/ToastProvider";

function OtpPageContent() {
  const params = useSearchParams();
  const router = useRouter();
  const email = params.get("email") || "";
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const [seconds, setSeconds] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [loading, setLoading] = useState(false); // 🔹 new state

  // countdown
  useEffect(() => {
    if (seconds <= 0) {
      setCanResend(true);
      return;
    }
    const t = setTimeout(() => setSeconds(seconds - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  const isValidOtp = useMemo(() => otp.every((digit) => /^\d$/.test(digit)), [otp]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return; // only single digit allowed
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) inputRefs.current[index + 1].focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").replace(/\D/g, "");
    if (!pasteData) return;
    const newOtp = [...otp];
    for (let i = 0; i < 6; i++) newOtp[i] = pasteData[i] || "";
    setOtp(newOtp);
    const lastIndex = Math.min(pasteData.length, 6) - 1;
    if (lastIndex >= 0 && inputRefs.current[lastIndex]) {
      inputRefs.current[lastIndex].focus();
    }
  };

  const handleProceed = async (e) => {
    e.preventDefault();
    if (!isValidOtp || loading) return;

    setLoading(true); // 🔹 start loader
    const otpString = otp.join("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_USER_BASE}investor/api/investor/verify-email-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, otp: otpString }),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        showErrorToast(data.message || "Something went wrong. Please try again.");
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const token = data?.data?.data?.accessToken;
      const investor = data?.data?.data?.investor;
      localStorage.removeItem("registerFormData");

      if (token) Cookies.set("accessToken", token);
      if (investor) {
        const simplifiedInvestor = {
          id: investor.id,
          name: investor.full_name,
          username: investor.user_name,
          email: investor.email,
          emailVerified: investor.email_verification_status,
          phone: investor.phone_number,
          type: investor.investor_type,
          organization: investor.organization,
          designation: investor.designation,
          location: investor.location,
        };
        Cookies.set("investor", JSON.stringify(simplifiedInvestor));
      }
      Cookies.remove("verifyOtp");
      window.location.replace("/");
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false); // 🔹 stop loader
    }
  };

  const handleResendOtp = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_USER_BASE}investor/api/investor/resend-email-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        showErrorToast(data.message || "Failed to resend OTP. Please try again.");
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setSeconds(60);
      setCanResend(false);
      showSuccessToast("OTP has been resent to your email");
    } catch (error) {
      console.error("Resend OTP error:", error);
    }
  };

  return (
    <section className={styles.wrapper}>
      {/* Back Button */}
      <button type="button" className={styles.backBtn} onClick={() => router.push("/sign-in")}>
        ←
      </button>

      <img src="/logo.png" alt="Preqt Logo" className={styles.logo} />
      <h1 className={styles.title}>Enter OTP To Verify</h1>
      <p className={styles.subtitle}>Enter 6 digit OTP sent to {email}</p>

      <form className={styles.form} onSubmit={handleProceed}>
        {/* OTP Inputs */}
        <div className={styles.formGroup}>
          <div className={styles.otpInputs}>
            {otp.map((digit, i) => (
              <input
                key={i}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                onPaste={handlePaste}
                ref={(el) => (inputRefs.current[i] = el)}
                className={styles.otpInput}
              />
            ))}
          </div>
        </div>

        {/* Resend Section */}
        <div className={styles.resendRow}>
          {canResend ? (
            <span className={styles.resendButton} onClick={handleResendOtp}>
              Resend OTP
            </span>
          ) : (
            <>Resend OTP in <span className={styles.timer}>00:{String(seconds).padStart(2, "0")}</span> sec</>
          )}
        </div>

        {/* Proceed Button with loader */}
        <button
          type="submit"
          className={`${styles.button} ${(!isValidOtp || loading) ? styles.buttonDisabled : ""}`}
          disabled={!isValidOtp || loading}
        >
          {loading ? (
            <div className={styles.loaderWrapper}>
              <span className={styles.loader}></span>
              <span>Verifying...</span>
            </div>
          ) : (
            "Proceed"
          )}
        </button>
      </form>
    </section>
  );
}

export default function OtpPage() {
  return (
    <Suspense fallback={<Loader />}>
      <OtpPageContent />
    </Suspense>
  );
}
