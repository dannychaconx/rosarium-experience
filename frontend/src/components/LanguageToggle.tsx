"use client";

type Language = "en" | "es";

interface LanguageToggleProps {
  currentLanguage: Language;
  onToggle: (lang: Language) => void;
}

export default function LanguageToggle({
  currentLanguage,
  onToggle,
}: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-stone-300 p-1">
      <button
        onClick={() => onToggle("en")}
        className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
          currentLanguage === "en"
            ? "bg-stone-800 text-white"
            : "text-stone-500 hover:text-stone-700"
        }`}
        aria-label="Switch to English"
      >
        English
      </button>
      <button
        onClick={() => onToggle("es")}
        className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
          currentLanguage === "es"
            ? "bg-stone-800 text-white"
            : "text-stone-500 hover:text-stone-700"
        }`}
        aria-label="Cambiar a Español"
      >
        Español
      </button>
    </div>
  );
}
