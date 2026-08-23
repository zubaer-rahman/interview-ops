import { useState, useEffect } from "react";

const DEFAULT_PREFS = {
  theme: "dark",
  bodyFont: "'Inter', sans-serif",
  fontSize: 14.5,
  lineHeight: 1.75,
  contentWidth: 680
};

export function usePreferences() {
  const [prefs, setPrefs] = useState(DEFAULT_PREFS);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("io-preferences");
      if (saved) {
        setPrefs({ ...DEFAULT_PREFS, ...JSON.parse(saved) });
      }
    } catch (e) {
      console.error("Failed to load preferences", e);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("io-preferences", JSON.stringify(prefs));
    } catch (e) {
      console.error("Failed to save preferences", e);
    }

    // Apply to document
    const root = document.documentElement;
    if (prefs.theme === "light") {
      root.classList.add("theme-light");
    } else {
      root.classList.remove("theme-light");
    }
    root.style.setProperty("--font-body", prefs.bodyFont);
    root.style.setProperty("--font-size-base", `${prefs.fontSize}px`);
    root.style.fontSize = `${prefs.fontSize}px`;
    root.style.setProperty("--line-height-base", prefs.lineHeight);
    root.style.setProperty("--content-width", `${prefs.contentWidth}px`);
  }, [prefs, isLoaded]);

  const updatePrefs = (updates) => {
    setPrefs((prev) => ({ ...prev, ...updates }));
  };

  const resetPrefs = () => {
    setPrefs(DEFAULT_PREFS);
  };

  return { prefs, updatePrefs, resetPrefs };
}
