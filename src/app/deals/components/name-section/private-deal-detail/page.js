"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import Overview from "../../customnavbarsection/overview/overview";
import Business from "../../customnavbarsection/business/Business";
import Industry from "../../customnavbarsection/industry/industry";
import Keyfinancials from "../../customnavbarsection/keyfinancials/keyfinancials";
import Shareholding from "../../customnavbarsection/fundraise/Shareholding";
import Documentation from "../../customnavbarsection/documentation/page";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "business", label: "Business" },
  { id: "financial", label: "Financial Highlights" },
  { id: "industry", label: "Industry Overview" },
  { id: "fundraise", label: "Fundraise/Future Plans" },
  { id: "documentation", label: "Documentation" }
];

const sectionComponents = {
  overview: Overview,
  business: Business,
  financial: Keyfinancials,
  industry: Industry,
  fundraise: Shareholding,
  documentation: Documentation
};

export default function PrivateDealDetails({ isPrivateDeal }) {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const sectionRefs = useRef({});
  const manualScrollRef = useRef(false); // when true, ignore scroll-based detection
  const rafRef = useRef(null); // for global scroll handler throttling
  const manualRafRef = useRef(null); // for monitoring smooth-scroll completion
  const cancelListenersRef = useRef(null); // to remove user-interaction listeners
  const manualMaxTimeoutRef = useRef(null);

  // helper: compute sticky menu offset
  const getTriggerOffset = () => {
    const menuEl = document.querySelector(`.${styles.respectedMenu}`);
    if (menuEl) {
      const styleTop = parseFloat(getComputedStyle(menuEl).top) || 0;
      return styleTop + 50; // small padding
    }
    return 100;
  };

  // normal scroll handler (used for manual scroll)
  useEffect(() => {
    const handleScroll = () => {
      if (manualScrollRef.current) return; // locked during programmatic smooth scroll

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const offset = getTriggerOffset();
        let current = sections[0].id;

        for (let i = 0; i < sections.length; i++) {
          const s = sections[i];
          const el = sectionRefs.current[s.id];
          if (!el) continue;
          const top = el.getBoundingClientRect().top;
          if (top - offset <= 0) {
            current = s.id;
          } else {
            break;
          }
        }

        // if we're at the bottom, make the last section active
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
          current = sections[sections.length - 1].id;
        }

        setActiveSection((prev) => (prev !== current ? current : prev));
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll(); // initial run

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // update yellow indicator position when active changes
  useEffect(() => {
    const ul = document.querySelector(`.${styles.respectedMenu} ul`);
    const li = ul?.querySelector(`.${styles.active}`);
    if (li && ul) {
      ul.style.setProperty("--indicator-top", `${li.offsetTop}px`);
      ul.style.setProperty("--indicator-height", `${li.offsetHeight}px`);
    }
  }, [activeSection]);

  // helper: cleanup any existing manual-monitoring (keeps manualScrollRef as-is or resets it)
  const _removeManualListeners = () => {
    if (cancelListenersRef.current) {
      try {
        cancelListenersRef.current();
      } catch (e) {
        /* ignore */
      }
      cancelListenersRef.current = null;
    }
  };

  const _stopManualMonitor = (allowScrollDetection = true) => {
    // cancel RAF loop
    if (manualRafRef.current) {
      cancelAnimationFrame(manualRafRef.current);
      manualRafRef.current = null;
    }

    _removeManualListeners();

    if (manualMaxTimeoutRef.current) {
      clearTimeout(manualMaxTimeoutRef.current);
      manualMaxTimeoutRef.current = null;
    }

    // allow normal scroll detection again (unless caller wants it locked)
    manualScrollRef.current = !allowScrollDetection ? true : false;
    if (!allowScrollDetection) {
      // remain locked
      return;
    }
    // unlock
    manualScrollRef.current = false;
  };

  // start monitoring the smooth scroll to detect when we reached the clicked target
  const _startManualMonitor = (el, scrollTarget, offset, targetId) => {
    // cleanup any previous monitor
    if (manualRafRef.current) {
      cancelAnimationFrame(manualRafRef.current);
      manualRafRef.current = null;
    }
    _removeManualListeners();
    if (manualMaxTimeoutRef.current) {
      clearTimeout(manualMaxTimeoutRef.current);
      manualMaxTimeoutRef.current = null;
    }

    // if user interacts (wheel/touch/keydown), cancel monitor and unlock so normal detection resumes
    const onUserInteract = () => {
      _stopManualMonitor(true); // user interrupted → unlock
    };

    window.addEventListener("wheel", onUserInteract, { passive: true });
    window.addEventListener("touchstart", onUserInteract, { passive: true });
    // keydown can also indicate space/arrow page navigation
    window.addEventListener("keydown", onUserInteract, { passive: true });

    cancelListenersRef.current = () => {
      window.removeEventListener("wheel", onUserInteract);
      window.removeEventListener("touchstart", onUserInteract);
      window.removeEventListener("keydown", onUserInteract);
    };

    const checkFinish = () => {
      // small tolerances to account for device differences
      const currentY = window.scrollY || window.pageYOffset;
      const dist = Math.abs(currentY - scrollTarget);
      const elTopNow = el.getBoundingClientRect().top;
      const topDiff = Math.abs(elTopNow - offset);

      const isLastSection = targetId === sections[sections.length - 1].id;
      const nearBottom = isLastSection && (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2);

      // consider finished if close enough to target OR element aligns with offset OR reached bottom (for last)
      if (dist <= 3 || topDiff <= 3 || nearBottom) {
        // ensure clicked section remains active
        setActiveSection(targetId);
        _stopManualMonitor(true); // unlock and stop monitoring
        return;
      }

      // otherwise keep checking
      manualRafRef.current = requestAnimationFrame(checkFinish);
    };

    // safety max timeout — if smooth scroll takes too long, unlock anyway
    manualMaxTimeoutRef.current = setTimeout(() => {
      // attempt to set clicked active, then unlock
      setActiveSection(targetId);
      _stopManualMonitor(true);
    }, 3000);

    // start loop
    manualRafRef.current = requestAnimationFrame(checkFinish);
  };

  // smooth scroll to section with robust lock/monitoring
  const scrollToSection = (id) => {
    const el = sectionRefs.current[id];
    if (!el) return;

    // compute scroll target and offset
    const offset = getTriggerOffset();
    const elementTop = el.getBoundingClientRect().top + window.scrollY;
    const scrollTarget = Math.max(0, elementTop - offset + 30);

    // lock manual detection immediately and set UI highlight
    manualScrollRef.current = true;
    setActiveSection(id);

    // start programmatic smooth scroll
    window.scrollTo({
      top: scrollTarget,
      behavior: "smooth"
    });

    // start monitoring to know when smooth scroll finished
    _startManualMonitor(el, scrollTarget, offset, id);
  };

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (manualRafRef.current) cancelAnimationFrame(manualRafRef.current);
      _removeManualListeners();
      if (manualMaxTimeoutRef.current) clearTimeout(manualMaxTimeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <h2 className={styles.detailslabel}>{section.label}</h2>
              {Component ? (
                <Component isPrivateDeal={isPrivateDeal} />
              ) : (
                <p>Missing component for {section.label}</p>
              )}
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
