import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { STR } from "../i18n/strings";

const LangCtx = createContext({ lang: "en", setLang: () => {}, t: (k) => k });

const detect = () => {
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  if (["en","nl","fr"].includes(urlLang)) return urlLang;
  const saved = localStorage.getItem("lang");
  if (saved) return saved;
  const n = (navigator.language || "en").slice(0, 2).toLowerCase();
  return ["en", "nl", "fr"].includes(n) ? n : "en";
};

const get = (obj, path) => path.split(".").reduce((o, k) => (o && o[k] != null ? o[k] : undefined), obj);

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(detect);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = (key) => {
    const cur = get(STR[lang] || {}, key);
    if (cur != null) return cur;
    const en = get(STR.en || {}, key);
    return en != null ? en : key;
  };

  const value = useMemo(() => ({
    lang,
    setLang: (l) => {
      setLangState(l);
      try {
        const u = new URL(window.location.href);
        u.searchParams.set("lang", l);
        window.history.replaceState({}, "", u);
      } catch {}
    },
    t
  }), [lang]);
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);