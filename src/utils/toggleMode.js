export function toggleDarkMode(isDark, setIsDark) {
  const newMode = isDark ? "light" : "dark";
  localStorage.setItem("mode", newMode);
  document.documentElement.classList.toggle("dark");
  setIsDark((prev) => !prev);
}
