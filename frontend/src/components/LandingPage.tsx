"use client";

import { useState } from "react";
import LanguageToggle from "./LanguageToggle";
import landingContent from "../content/landing.json";

type Language = "en" | "es";

export default function LandingPage() {
  const [language, setLanguage] = useState<Language>("es");

  const content = landingContent[language];

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-6">
      <header className="absolute top-6 right-6">
        <LanguageToggle currentLanguage={language} onToggle={setLanguage} />
      </header>

      <main className="flex max-w-md flex-col items-center text-center">
        <div
          className="mb-8 text-5xl"
          role="img"
          aria-label="Rose"
        >
          🌹
        </div>

        <h1 className="mb-4 text-3xl font-light leading-snug tracking-tight text-stone-800 sm:text-4xl">
          {content.title}
        </h1>

        <p className="mb-10 text-lg leading-relaxed text-stone-500">
          {content.subtitle}
        </p>

        <button className="rounded-full bg-stone-800 px-10 py-4 text-lg font-medium text-white shadow-sm transition-colors hover:bg-stone-700 active:bg-stone-900">
          {content.startButton}
        </button>
      </main>
    </div>
  );
}
