"use client";

import { useEffect, useState } from "react";
import LanguageToggle from "./LanguageToggle";
import RoseIcon from "./RoseIcon";
import landingContent from "../content/landing.json";

type Language = "en" | "es";

export default function LandingPage() {
  const [language, setLanguage] = useState<Language>("es");

  const content = landingContent[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-6">
      <header className="absolute top-6 right-6">
        <LanguageToggle currentLanguage={language} onToggle={setLanguage} />
      </header>

      <main className="flex max-w-lg flex-col items-center text-center">
        <RoseIcon className="mb-12 h-20 w-20 text-stone-400" />

        <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl">
          {content.title}
        </h1>

        <p className="mb-14 text-lg leading-relaxed font-light text-stone-400 sm:text-xl">
          {content.subtitle}
        </p>

        <button className="rounded-full bg-stone-900 px-12 py-5 text-lg font-medium tracking-wide text-white shadow-md transition-all hover:bg-stone-800 hover:shadow-lg active:bg-stone-950 active:shadow-sm">
          {content.startButton}
        </button>
      </main>
    </div>
  );
}
