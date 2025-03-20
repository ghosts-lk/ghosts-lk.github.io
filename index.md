---
layout: default
title: Home
---

<!-- Hero Section -->
<section class="hero-section">
  <div class="hero-content">
    <h2 class="hero-title">Secure. Stealthy. Digital.</h2>
    <p class="hero-description">
      Enter the digital realm where security meets style.
    </p>
    <button class="start-mission-btn">START MISSION</button>
  </div>
  <div class="hero-image-container">
    <div class="hero-image-wrapper">
      <img
        src="{{ '/assets/images/hero-image.jpg' | relative_url }}"
        alt="Ghost Protocol Hero Image"
        class="hero-image"
      />
      <div class="classified-label">CLASSIFIED</div>
    </div>
  </div>
</section>

<!-- Features Section -->
<section class="features-section" id="features">
  {% assign sorted_features = site.features | sort: 'order' %}
  {% for feature in sorted_features %}
    <div class="feature-card">
      <img
        src="{{ '/assets/images/' | append: feature.icon | relative_url }}"
        alt="{{ feature.title }} Icon"
        class="feature-icon"
      />
      <h3 class="feature-title">{{ feature.title }}</h3>
      <p class="feature-description">{{ feature.content }}</p>
    </div>
  {% endfor %}
</section>
