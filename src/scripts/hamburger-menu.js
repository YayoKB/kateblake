const hamburger = document.querySelector(".hamburger");

if (hamburger) {
  const anim1 = document.getElementById("hamburger-anim-1");
  const anim2 = document.getElementById("hamburger-anim-2");
  const anim3 = document.getElementById("hamburger-anim-3");
  const animSet = document.getElementById("hamburger-set");

  const anim1Reverse = document.getElementById("hamburger-anim-1-reverse");
  const anim2Reverse = document.getElementById("hamburger-anim-2-reverse");
  const anim3Reverse = document.getElementById("hamburger-anim-3-reverse");
  const animSetReverse = document.getElementById("hamburger-set-reverse");

  hamburger.addEventListener("click", () => {
    const isPressed = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!isPressed));

    if (!isPressed) {
      // Opening: trigger forward animations
      if (anim1 && anim2 && anim3 && animSet) {
        anim1.beginElement();
        anim2.beginElement();
        anim3.beginElement();
        animSet.beginElement();
      }
    } else {
      // Closing: trigger reverse animations
      if (anim1Reverse && anim2Reverse && anim3Reverse && animSetReverse) {
        anim1Reverse.beginElement();
        anim2Reverse.beginElement();
        anim3Reverse.beginElement();
        animSetReverse.beginElement();
      }
    }
  });
}
