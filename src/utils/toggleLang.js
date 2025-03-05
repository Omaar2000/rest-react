import i18n from "../i18n";

export function toggleLanguage(setDir) {
  if (i18n.language === "ar") {
    i18n.changeLanguage("en");
    localStorage.setItem("lang", "en");
    setDir("ltr");
  } else {
    i18n.changeLanguage("ar");
    setDir("rtl");
    localStorage.setItem("lang", "ar");
  }
}
