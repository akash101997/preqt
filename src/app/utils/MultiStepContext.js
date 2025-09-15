"use client";
import { createContext, useContext, useState, useEffect } from "react";

const MultiStepContext = createContext();

const initialFormData = {
  investor_type: "",
  full_name: "",
  email: "",
  organization: "",
  designation: "",
};

export function MultiStepProvider({ children }) {
  const [registerFormData, setRegisterFormData] = useState(initialFormData);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("registerFormData");
    if (saved) {
      try {
        setRegisterFormData(JSON.parse(saved));
      } catch (error) {
        console.error("Error parsing saved form data:", error);
      }
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("registerFormData", JSON.stringify(registerFormData));
  }, [registerFormData]);

  const updateFormData = (field, value) => {
    setRegisterFormData((prev) => ({ ...prev, [field]: value }));
  };

  const clearFormData = () => {
    setRegisterFormData(initialFormData);
    localStorage.removeItem("registerFormData");
  };

  return (
    <MultiStepContext.Provider
      value={{ registerFormData, updateFormData, clearFormData }}
    >
      {children}
    </MultiStepContext.Provider>
  );
}

export const useMultiStepContext = () => {
  const context = useContext(MultiStepContext);
  if (!context) {
    throw new Error(
      "useMultiStepContext must be used within a MultiStepProvider"
    );
  }
  return context;
};
