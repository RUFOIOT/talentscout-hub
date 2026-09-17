import { createContext, useContext, useState } from "react";
import { STRINGS } from "../i18n/strings";

const LangCtx = createContext(null);
export function useLanguage() { return useContext(LangCtx); }

const STORAGE_KEY = "ts-hub-lang";

function readStored() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "en" || v === "es" ? v : "es";
  } catch (e) { return "es"; }
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStored);

  function setLang(next) {
    setLangState(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* localStorage unavailable */ }
  }

  const t = STRINGS[lang];

  return (
    <LangCtx.Provider value={{ lang, setLang, t }}>
      {children}
    </LangCtx.Provider>
  );
}
