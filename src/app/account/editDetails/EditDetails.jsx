"use client";
import styles from "./page.module.css";
import { useState } from "react";

export default function EditDetails({ isOpen, onClose }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    investorType: "Retail Investor",
    organization: "",
    location: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.headar}>
       
        <h3 className={styles.title}>Edit Account Detail</h3>

         <button className={styles.closeBtn} onClick={onClose}>
          <img src="/otp modal/x.svg" alt="" />
        </button>
        
</div>
 <div className={styles.line}></div>
        {/* First Name */}
        <div className={styles.main}>
        <div className={styles.inputGroup}>
         
          <label className={styles.label}>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={form.firstName}
            onChange={handleChange}
          />
        </div>

        {/* Last Name */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Last Name</label>
          <input
            
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={form.lastName}
            onChange={handleChange}
          />
        </div>

        {/* Investor Type */}
        <div className={styles.inputGroup}>
          <label>Investor Type</label>
          <div className={styles.radioGroup}>
            <label >
              <input
                className={styles.radioBtn}
                type="radio"
                style={{ accentColor: " rgba(177, 140, 7, 1)" }} 
                name="investorType"
                value="Retail Investor"
                checked={form.investorType === "Retail Investor"}
                onChange={handleChange}
              />
              Retail Investor
            </label>
            <label>
              <input
                className={styles.radioBtn}
                type="radio"
                style={{ accentColor: " rgba(177, 140, 7, 1)" }} 

                name="investorType"
                value="UHNI"
                checked={form.investorType === "UHNI"}
                onChange={handleChange}
              />
              UHNI | Ultra High Net Worth Individuals
            </label>
            <label>
              <input

                  className={styles.radioBtn}
                type="radio"
                style={{ accentColor: " rgba(177, 140, 7, 1)" }} 
                name="investorType"
                value="Family Office"
                checked={form.investorType === "Family Office"}
                onChange={handleChange}
              />
              Family Office
            </label>
          </div>
        </div>

        {/* Organization */}
        <div className={styles.inputGroup}>
          <label className={styles.label} >Organization</label>
          <input
            type="text"
            name="organization"
            placeholder="Enter your organisation name"
            value={form.organization}
            onChange={handleChange}
          />
        </div>

        {/* Location */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Location</label>
          <select
            name="location"
            value={form.location}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Noida">Noida</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>

        {/* Save Button */}
        <button className={styles.saveBtn}>Save</button>
        </div>
      </div>
    </div>
  );
}
