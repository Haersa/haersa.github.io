// ── PARTICLES (home page only) ──
const hero = document.getElementById("hero-particles");
if (hero) {
  const colors = ["#00D4FF", "#B8FF00", "#FF2D55"];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement("div");
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      opacity: ${Math.random() * 0.4 + 0.1};
      pointer-events: none;
      animation: floatUp ${Math.random() * 14 + 8}s linear ${Math.random() * 8}s infinite;
      --drift: ${(Math.random() - 0.5) * 160}px;
    `;
    hero.appendChild(p);
  }
}

// ── CONTACT FORM ──
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.style.display = "none";
    document.getElementById("form-success").style.display = "block";
  });
}
