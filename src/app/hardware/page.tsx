import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContentLayout from "@/components/ContentLayout";
import Callout from "@/components/Callout";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Hardware",
};

const toc = [
  { id: "vision", label: "Vision" },
  { id: "esp32", label: "ESP32 Role" },
  { id: "block", label: "Block Diagram" },
  { id: "mvp", label: "Hardware MVP" },
];

export default function HardwarePage() {
  return (
    <>
      <PageHero
        tone="cream"
        mascotMood="hero"
        eyebrow="Dry Lab"
        title="Hardware"
        subtitle="A bioreactor-adjacent control stack: decide what the microcontroller actually does before soldering the story."
      />
      <ContentLayout toc={toc}>
        <Section id="vision" title="Vision">
          <p>
            CadArmor&apos;s software-hardware story is a compact demo reactor: monitor culture
            state, log sensor signals, and eventually actuate feed (media / urea / wastewater
            simulant) under safe lab conditions.
          </p>
        </Section>

        <Section id="esp32" title="ESP32 — Defining the Job">
          <p>
            Early meetings exposed a classic ambiguity: is the ESP32 for{" "}
            <strong>flow control of Cd-containing water</strong>, or for{" "}
            <strong>optical GFP sensing</strong>? Those are different products.
          </p>
          <Callout title="Decision framework" tone="accent">
            We split the roadmap. MVP focuses on sensing + logging (OD proxy / fluorescence /
            pH). Actuated valves for closed Cd loops only after containment and waste SOPs are
            locked.
          </Callout>
        </Section>

        <Section id="block" title="Logical Block Diagram">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Inputs", "pH probe, optional fluorescence photodiode + blue LED, temp, user UI"],
              ["Controller", "ESP32: sample, filter, threshold, log to serial/SD"],
              ["Outputs", "Status LEDs, OLED, pump PWM (non-Cd fluids first)"],
              ["Safety", "Interlocks, secondary containment, no unsupervised Cd pumping"],
            ].map(([t, d]) => (
              <div key={t} className="sticker p-4">
                <div className="text-sm font-bold text-primary">{t}</div>
                <div className="mt-1 text-sm text-muted">{d}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="mvp" title="Hardware MVP Checklist">
          <ul>
            <li>Breadboard prototype with ESP32 + OLED + one analog sensor path</li>
            <li>Calibration routine and CSV logging</li>
            <li>Fluorescence demo path inspired by low-cost LED + camera/photodiode setups</li>
            <li>Documented failure modes and lab safety integration</li>
          </ul>
        </Section>
      </ContentLayout>
    </>
  );
}
