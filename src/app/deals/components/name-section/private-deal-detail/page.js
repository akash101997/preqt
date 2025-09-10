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
  // add more if needed
];

const sectionComponents = {
  overview: Overview,
  business: Business,
  financial: Keyfinancials,
  industry: Industry,
};

export default function PrivateDealDetails() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const sectionRefs = useRef({});
  const rafRef = useRef(null);
  const manualScrollRef = useRef(false);
  const manualTimeoutRef = useRef(null);

  // helper: compute trigger offset (the vertical line where we consider a section "at top")
  const getTriggerOffset = () => {
    // If your .respectedMenu has `top: 100px`, we want trigger a bit below the viewport top.
    // We compute the menu top if available, otherwise fallback to 100px.
    const menuEl = document.querySelector(`.${styles.respectedMenu}`);
    if (menuEl) {
      const styleTop = parseFloat(getComputedStyle(menuEl).top) || 0;
      // add a small padding so the section aligns nicely
      return styleTop + 8;
    }
    return 100;
  };

  // compute active section based on section top positions and trigger offset
  const computeActiveFromScroll = () => {
    const offset = getTriggerOffset();
    let active = sections[0].id;

    // iterate in order and pick the last whose top is <= offset
    for (let i = 0; i < sections.length; i++) {
      const s = sections[i];
      const el = sectionRefs.current[s.id];
      if (!el) continue;
      const top = el.getBoundingClientRect().top;
      if (top <= offset) {
        active = s.id;
      } else {
        // as soon as top > offset, further sections will also be > offset
        break;
      }
    }

    // If we're at the very bottom of the document, ensure last section is active
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      active = sections[sections.length - 1].id;
    }

    return active;
  };

  // scroll handler (throttled with rAF)
  useEffect(() => {
    const handleScroll = () => {
      if (manualScrollRef.current) return; // skip while manual scroll lock is active

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const active = computeActiveFromScroll();
        setActiveSection((prev) => (prev !== active ? active : prev));
      });
    };

    // initial run
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on mount

  // Move yellow indicator line when activeSection changes
  useEffect(() => {
    const ul = document.querySelector(`.${styles.respectedMenu} ul`);
    const li = ul?.querySelector(`.${styles.active}`);
    if (li && ul) {
      // use offsetTop/offsetHeight relative to ul for consistent behavior
      const top = li.offsetTop;
      const height = li.offsetHeight;
      ul.style.setProperty("--indicator-top", `${top}px`);
      ul.style.setProperty("--indicator-height", `${height}px`);
    }
  }, [activeSection]);

  // smooth scroll to section when clicking menu item
  const scrollToSection = (id) => {
    manualScrollRef.current = true;      // lock scroll handler during manual scroll
    setActiveSection(id);               // immediately update the UI highlight

    const el = sectionRefs.current[id];
    if (el) {
      // use smooth scroll
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // release lock after the smooth scroll finishes (adjust duration if needed)
    clearTimeout(manualTimeoutRef.current);
    manualTimeoutRef.current = setTimeout(() => {
      manualScrollRef.current = false;
    }, 700); // 700ms should cover most smooth scroll durations
  };

  // cleanup manual timer on unmount
  useEffect(() => {
    return () => {
      clearTimeout(manualTimeoutRef.current);
    };
  }, []);

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
                <h2>{section.label}</h2>
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
