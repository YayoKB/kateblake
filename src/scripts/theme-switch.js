const html = document.querySelector("html");
const themeToggle = document.querySelector('#themeToggle');
const toggleText = themeToggle.querySelector('span');
let mode = localStorage.getItem("mode");

// Initialize theme on load
if (mode === "light") {
  setLight();
} else if (mode === "dark") {
  setDark();
} else {
  // Default to dark if no preference is set
  mode = "dark";
  setDark();
}

async function transitionTheme(updateTheme) {
  // Check if View Transitions API is supported
  if (!document.startViewTransition) {
    updateTheme();
    return;
  }

  // Use view transition with a crossfade
  await document.startViewTransition(() => {
    updateTheme();
  }).ready;
}

function setLight() {
  html.style.setProperty("color-scheme", "light");
  localStorage.setItem("mode", "light");
  themeToggle.setAttribute("aria-pressed", "true");
  toggleText.textContent = "Activate dark mode";
}

function setDark() {
  html.style.setProperty("color-scheme", "dark");
  localStorage.setItem("mode", "dark");
  themeToggle.setAttribute("aria-pressed", "false");
  toggleText.textContent = "Activate light mode";
}

function toggleTheme() {
  transitionTheme(() => {
    if (mode === "light") {
      mode = "dark";
      setDark();
    } else {
      mode = "light";
      setLight();
    }
  });
}

themeToggle.addEventListener("click", toggleTheme);

console.log("theme switch");