"use client";
// CursorEffects: mouse-যুক্ত device-এ custom cursor দেখায়; ভারী fluid trail শুধু reduced-motion বন্ধ থাকলে।

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const FluidCursor = dynamic(() => import("./FluidCursor"), { ssr: false });
const CustomCursor = dynamic(() => import("./CustomCursor"), { ssr: false });

export default function CursorEffects() {
  const [finePointer, setFinePointer] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setFinePointer(fine.matches);
      setReducedMotion(reduced.matches);
    };
    update();
    fine.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  // System cursor শুধু তখনই লুকাই যখন custom cursor আসলেই render হচ্ছে।
  useEffect(() => {
    document.documentElement.classList.toggle("custom-cursor", finePointer);
    return () => document.documentElement.classList.remove("custom-cursor");
  }, [finePointer]);

  if (!finePointer) return null;
  return (
    <>
      {!reducedMotion && <FluidCursor />}
      <CustomCursor />
    </>
  );
}
