import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { copy, type Lang } from "@/lib/content";

type Copy = (typeof copy)[Lang];

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Copy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("hu");

  useEffect(() => {
    const saved = window.localStorage.getItem("coffeein-lang");
    if (saved === "hu" || saved === "en") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("coffeein-lang", next);
    document.documentElement.lang = next;
  };

  const value = useMemo(() => ({ lang, setLang, t: copy[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
