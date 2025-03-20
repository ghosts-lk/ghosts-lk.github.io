document.addEventListener("DOMContentLoaded", function () {
  // Start Mission button click effect
  const startMissionBtn = document.querySelector(".start-mission-btn");
  if (startMissionBtn) {
    startMissionBtn.addEventListener("click", function () {
      alert("Mission initiated. Welcome to Ghost Protocol.");
    });
  }

  // Add a subtle scan line effect to the hero image
  const heroImage = document.querySelector(".hero-image-wrapper");
  if (heroImage) {
    const scanLines = document.createElement("div");
    scanLines.classList.add("scan-lines");
    heroImage.appendChild(scanLines);
  }

  // Add a glitch effect to the title on hover
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    heroTitle.addEventListener("mouseenter", function () {
      this.classList.add("glitch");
    });

    heroTitle.addEventListener("mouseleave", function () {
      this.classList.remove("glitch");
    });
  }
});
