"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, Suspense } from "react";
import styles from './otp.module.css'
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import Loader from "../components/Loader";

function OtpPageContent() {
  const params = useSearchParams();
  const router = useRouter();
  const email = params.get("email") || "";
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const [seconds, setSeconds] = useState(60);
  const [canResend, setCanResend] = useState(false);

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
    if (!/^\d?$/.test(value)) return; // allow only single digit

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").replace(/\D/g, ""); // only digits
    if (!pasteData) return;

    const newOtp = [...otp];
    for (let i = 0; i < 6; i++) {
      newOtp[i] = pasteData[i] || "";
    }
    setOtp(newOtp);

    // move focus to last filled input
    const lastIndex = Math.min(pasteData.length, 6) - 1;
    if (lastIndex >= 0 && inputRefs.current[lastIndex]) {
      inputRefs.current[lastIndex].focus();
    }
  };

  const handleProceed = async (e) => {
    e.preventDefault();
    if (!isValidOtp) return;

    const otpString = otp.join("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_USER_BASE}investor/api/investor/verify-email-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, otp: otpString }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Something went wrong. Please try again.");
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const token = data?.data?.data?.accessToken;
      const investor = data?.data?.data?.investor;

      localStorage.removeItem("registerFormData");

      if (token) {
        Cookies.set("accessToken", token);
      }

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
    }
  };

  const handleResendOtp = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_USER_BASE}investor/api/investor/resend-email-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Failed to resend OTP. Please try again.");
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setSeconds(60);
      setCanResend(false);
      toast.success("OTP has been resent to your email");
    } catch (error) {
      console.error("Resend OTP error:", error);
    }
  };

  return (
    <section className={styles.wrapper}>
      <button
        type="button"
        className={styles.backBtn}
        onClick={() => router.push("/sign-in")}
        aria-label="Go back"
      >
        {/* Back Arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M18.6513 9.12663H3.10696L8.10144 4.13215C8.41172 3.82187 8.41172 3.32034 8.10144 3.01006C7.79096 2.69977 7.28944 2.69977 6.97915 3.01006L0.630009 9.35844C0.556866 9.43215 0.498961 9.52034 0.45858 9.61711C0.37839 9.81082 0.37839 10.0299 0.45858 10.2236C0.498961 10.3203 0.556866 10.4083 0.630009 10.4822L6.97915 16.8306C7.13382 16.9855 7.33706 17.0632 7.5403 17.0632C7.74334 17.0632 7.94658 16.9855 8.10144 16.8306C8.41172 16.5203 8.41172 16.0188 8.10144 15.7083L3.10696 10.7141H18.6513C19.0894 10.7141 19.4451 10.3584 19.4451 9.92034C19.4451 9.48225 19.0894 9.12663 18.6513 9.12663Z"
            fill="#1E293B"
          />
        </svg>
      </button>
      <img src="/logo.png" alt="Preqt Logo" className={styles.logo} />
      <h1 className={styles.title}>Enter OTP To Verify</h1>
      <p className={styles.subtitle}>Enter 6 digit OTP sent to you on {email}</p>

      <form className={styles.form} onSubmit={handleProceed}>
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
                onPaste={handlePaste} // ✅ paste support
                ref={(el) => (inputRefs.current[i] = el)}
                className={styles.otpInput}
              />
            ))}
          </div>
        </div>

        <div className={styles.resendRow}>
          {canResend ? (
            <div className={styles.resendButtonDiv}>
              <span className={styles.resendButton} onClick={handleResendOtp}>
                Resend OTP
              </span>
            </div>
          ) : (
            <>
              Resend OTP in{" "}
              <span className={styles.timer}>
                00:{String(seconds).padStart(2, "0")}
              </span>{" "}
              seconds
            </>
          )}
        </div>

        <button
          type="submit"
          className={`${styles.button} ${!isValidOtp ? styles.buttonDisabled : ""}`}
          disabled={!isValidOtp}
        >
          Proceed
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
