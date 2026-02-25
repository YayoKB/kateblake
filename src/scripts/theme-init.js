// Apply theme immediately to prevent flash
const mode = localStorage.getItem("mode");
if (mode === "light" || mode === "dark") {
  document.documentElement.style.setProperty("color-scheme", mode);
}
