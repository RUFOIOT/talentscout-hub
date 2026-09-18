import { createContext, useContext, useEffect, useState } from "react";
import { STRINGS } from "../i18n/strings";

const LangCtx = createContext(null);
export function useLanguage() { return useContext(LangCtx); }

const STORAGE_KEY = "ts-hub-lang";

function readStored() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "en" || v === "es" ? v : "en";
  } catch (e) { return "en"; }
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStored);

  function setLang(next) {
    setLangState(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* localStorage unavailable */ }
  }

  const t = STRINGS[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangCtx.Provider value={{ lang, setLang, t }}>
      {children}
    </LangCtx.Provider>
  );
}
