const hamburger = document.querySelector(".hamburger");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    const isPressed = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!isPressed));
  });
}
