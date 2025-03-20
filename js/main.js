document.addEventListener("DOMContentLoaded", function () {
  // Navigation links hover effect
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.color = "#33ff33";
    });

    link.addEventListener("mouseleave", function () {
      this.style.color = "#ffffff";
    });
  });

  // Start Mission button hover effect
  const startMissionBtn = document.querySelector(".start-mission-btn");
  startMissionBtn.addEventListener("mouseenter", function () {
    this.style.backgroundColor = "#66ff66";
  });

  startMissionBtn.addEventListener("mouseleave", function () {
    this.style.backgroundColor = "#33ff33";
  });

  // Start Mission button click effect
  startMissionBtn.addEventListener("click", function () {
    alert("Mission initiated. Welcome to Ghost Protocol.");
  });

  // Add a subtle scan line effect to the hero image
  const heroImage = document.querySelector(".hero-image-wrapper");
  const scanLines = document.createElement("div");
  scanLines.classList.add("scan-lines");
  heroImage.appendChild(scanLines);

  // Add a glitch effect to the title on hover
  const heroTitle = document.querySelector(".hero-title");
  heroTitle.addEventListener("mouseenter", function () {
    this.classList.add("glitch");
  });

  heroTitle.addEventListener("mouseleave", function () {
    this.classList.remove("glitch");
  });

  // Add these styles dynamically
  const style = document.createElement("style");
  style.textContent = `
        .scan-lines {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: repeating-linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.15),
                rgba(0, 0, 0, 0.15) 1px,
                transparent 1px,
                transparent 2px
            );
            pointer-events: none;
            z-index: 3;
        }

        .glitch {
            animation: glitch 0.3s infinite;
        }

        @keyframes glitch {
            0% {
                transform: translate(0);
            }
            20% {
                transform: translate(-2px, 2px);
            }
            40% {
                transform: translate(-2px, -2px);
            }
            60% {
                transform: translate(2px, 2px);
            }
            80% {
                transform: translate(2px, -2px);
            }
            100% {
                transform: translate(0);
            }
        }
    `;
  document.head.appendChild(style);
});
