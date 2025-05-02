// Button click event
document.getElementById("specialBtn").addEventListener("click", () => {
  alert("💖 You are beautiful just the way you are!");
});

// Hover effect
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "#ffe4e1";
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "#fffaf0";
});

// Keypress detection
document.getElementById("searchInput").addEventListener("keypress", (e) => {
  console.log(`Searching: ${e.key}`);
});

// Secret double-click
document.getElementById("specialBtn").addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "#fce4ec";
  alert("🎉 Secret glow mode activated!");
});

// Image gallery
const images = [
  "false_lashes_001.jpg",
  "foundatio.jpg",
  "listick.jpg",
  "blush.jpg",
  "mirror.jpg",
];
let currentImg = 0;
document.getElementById("nextImage").addEventListener("click", () => {
  currentImg = (currentImg + 1) % images.length;
  document.getElementById("galleryImage").src = images[currentImg];
});

// Tab switching
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.style.display = "none";
    });
    document.getElementById(tab.dataset.target).style.display = "block";
  });
});

// Form validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("formFeedback");

  if (!email.includes("@") || password.length < 8) {
    feedback.textContent =
      "Please enter a valid email and password with at least 8 characters.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "🎉 Welcome to the Glow Club!";
    feedback.style.color = "green";
  }
});

// Real-time password feedback
document.getElementById("password").addEventListener("input", () => {
  const feedback = document.getElementById("formFeedback");
  if (password.value.length < 8) {
    feedback.textContent = "Password too short.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Strong password 💪";
    feedback.style.color = "green";
  }
});
