"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import Overview from "../../customnavbarsection/overview/overview";
import Business from "../../customnavbarsection/business/Business";
import Fundamentals from "../../customnavbarsection/fundamentals/fundamentals";
import Industry from "../../customnavbarsection/industry/industry";
import Keyfinancials from "../../customnavbarsection/keyfinancials/keyfinancials";


const sections = [
  { id: "overview", label: "Overview" },
  { id: "business", label: "Business" },
  { id: "financial", label: "Financial Highlights" },
  { id: "industry", label: "Industry Overview" },
//   { id: "fundraise", label: "Fundraise/Future Plans" },
//   { id: "docs", label: "Documentation" },
];

const sectionComponents = {
    overview: Overview,
    business: Business,
    financial: Keyfinancials,
    industry: Industry,
    // fundraise: Fundraise,
    // docs: Documentation,
}

export default function PrivateDealDetails() {
    const [activeSection, setActiveSection] = useState(sections[0].id);
    const sectionRefs = useRef({});
    const isManualScroll = useRef(false); // track if user clicked
  
    // Track visible section
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (isManualScroll.current) return; // 🔥 skip updates during manual scroll
  
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.6 }
      );
  
      sections.forEach((section) => {
        if (sectionRefs.current[section.id]) {
          observer.observe(sectionRefs.current[section.id]);
        }
      });
  
      return () => observer.disconnect();
    }, []);
  
    // Move yellow indicator line
    useEffect(() => {
      const ul = document.querySelector(`.${styles.respectedMenu} ul`);
      const li = ul?.querySelector(`.${styles.active}`);
      if (li && ul) {
        const rect = li.offsetTop;
        const height = li.offsetHeight;
  
        ul.style.setProperty("--indicator-top", `${rect}px`);
        ul.style.setProperty("--indicator-height", `${height}px`);
      }
    }, [activeSection]);
  
    const scrollToSection = (id) => {
      isManualScroll.current = true; // mark manual scroll
      setActiveSection(id); // 🔥 immediately highlight clicked item
  
      sectionRefs.current[id].scrollIntoView({ behavior: "smooth", block: "start" });
  
      // Reset manual flag after scroll finishes
      setTimeout(() => {
        isManualScroll.current = false;
      }, 800); // adjust timeout for smooth scroll duration
    };
  
    return (
      <div className={styles.privateDealDetails}>
        {/* Left Content */}
        <div className={styles.respectedDetails}>
          {sections.map((section) => {
            const Component = sectionComponents[section.id];
            return (
              <div
                key={section.id}
                id={section.id}
                ref={(el) => (sectionRefs.current[section.id] = el)}
                className={styles.section}
              >
                {Component ? <Component /> : <p>Missing component for {section.label}</p>}
              </div>
            );
          })}
        </div>
  
        {/* Right Sticky Menu */}
        <div className={styles.respectedMenu}>
          <ul>
            {sections.map((section) => (
              <li
                key={section.id}
                className={activeSection === section.id ? styles.active : ""}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
