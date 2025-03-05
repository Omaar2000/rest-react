import i18n from "../i18n";

export const loadInitialStates = (setDir) => {
  const mode = localStorage.getItem("mode");
  const lang = localStorage.getItem("lang");
  if (mode === "dark") {
    document.documentElement.classList.add("dark");
  }
  if (lang === "ar") {
    i18n.changeLanguage("ar");
    setDir("rtl");
  }
};
