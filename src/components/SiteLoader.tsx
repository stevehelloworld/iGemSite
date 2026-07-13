"use client";

import { useEffect, useState } from "react";
import CadMascot from "./CadMascot";

/** Short first-visit splash; respects reduced motion */
export default function SiteLoader() {
  const [show, setShow] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("cadarmor-loader") === "1";
    if (seen || reduced) {
      setShow(false);
      return;
    }
    const t1 = setTimeout(() => setHide(true), 900);
    const t2 = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("cadarmor-loader", "1");
    }, 1200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FFF8F6] transition-opacity duration-300 ${
        hide ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden
    >
      <div className="animate-bounce-soft">
        <CadMascot size={100} mood="hero" />
      </div>
      <p className="mt-4 font-display text-lg font-bold text-primary-dark">Cadture loading…</p>
      <div className="mt-3 h-2 w-40 overflow-hidden rounded-full bg-[#f0c4ce]">
        <div className="loader-bar h-full rounded-full bg-primary" />
      </div>
    </div>
  );
}
