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

// Modal
const yesBtn = document.getElementById("yesBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

yesBtn.addEventListener("click", () => {
  modal.style.display = "grid";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
