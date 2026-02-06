// Floating hearts
const heartsContainer = document.getElementById("hearts");

for (let i = 0; i < 20; i++) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 8 + Math.random() * 8 + "s";
  heart.style.opacity = 0.3 + Math.random() * 0.5;
  heartsContainer.appendChild(heart);
}

// No button moves
const noBtn = document.getElementById("noBtn");
const card = document.querySelector(".card");
const hint = document.getElementById("hint");

function moveNoButton() {
  const rect = card.getBoundingClientRect();

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * (rect.width - 90) + "px";
  noBtn.style.top = Math.random() * (rect.height - 50) + "px";

  hint.textContent = "Hehe 😜 try again";
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

// Confetti on YES (NEW)
const confettiLayer = document.getElementById("confetti");

function burstConfetti() {
  // Clear old confetti
  confettiLayer.innerHTML = "";

  const pieces = 55;

  for (let i = 0; i < pieces; i++) {
    const p = document.createElement("div");
    p.className = "confetti-piece";

    // Random horizontal position
    p.style.left = Math.random() * 100 + "vw";

    // Random fall duration & delay
    const duration = 2.6 + Math.random() * 2.2;
    const delay = Math.random() * 0.25;

    p.style.animationDuration = duration + "s";
    p.style.animationDelay = delay + "s";

    // Random scale
    const scale = 0.7 + Math.random() * 1.7;
    p.style.setProperty("--cs", scale);

    // Slight opacity variation
    p.style.opacity = String(0.7 + Math.random() * 0.3);

    confettiLayer.appendChild(p);
  }

  // Auto-clear after it finishes
  window.setTimeout(() => {
    confettiLayer.innerHTML = "";
  }, 4500);
}

// Modal
const yesBtn = document.getElementById("yesBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

yesBtn.addEventListener("click", () => {
  burstConfetti();
  modal.style.display = "grid";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
