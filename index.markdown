---
layout: page
title: Welcome to Vedic Wisdom for Families
---

<div class="text-center om-symbol">ॐ</div>

## Share Ancient Indian Wisdom with Your Family

Welcome to a comprehensive platform for learning **authentic Vedic knowledge in English**. Explore timeless wisdom from the Vedas, Upanishads, Puranas, Bhagavad Gita, and more - all explained clearly for modern families.

<hr class="vedic-divider">

## Explore by Category

<div class="category-grid">
  <a href="{{ '/vedic-literature/' | relative_url }}" class="category-card vedic-literature" style="text-decoration: none; color: inherit;">
    <h3>📚 Vedic Literature</h3>
    <p>The Four Vedas, Upanishads, and foundational texts</p>
  </a>

  <a href="{{ '/puranas/' | relative_url }}" class="category-card puranas" style="text-decoration: none; color: inherit;">
    <h3>📖 Puranic Literature</h3>
    <p>Ramayana, Mahabharata, and 18 Mahapuranas</p>
  </a>

  <a href="{{ '/philosophy/' | relative_url }}" class="category-card philosophy" style="text-decoration: none; color: inherit;">
    <h3>🧘 Philosophy</h3>
    <p>Bhagavad Gita, Six Darshanas, Yoga Sutras</p>
  </a>

  <a href="{{ '/vedic-sciences/' | relative_url }}" class="category-card vedic-sciences" style="text-decoration: none; color: inherit;">
    <h3>🔬 Vedic Sciences</h3>
    <p>Ayurveda, Jyotisha, Yoga, Mathematics</p>
  </a>

  <a href="{{ '/rituals/' | relative_url }}" class="category-card rituals" style="text-decoration: none; color: inherit;">
    <h3>🕉️ Rituals & Practices</h3>
    <p>Puja, Festivals, Mantras, Samskaras</p>
  </a>

  <a href="{{ '/values/' | relative_url }}" class="category-card values" style="text-decoration: none; color: inherit;">
    <h3>💎 Values & Ethics</h3>
    <p>Dharma, Karma, Purusharthas, Virtues</p>
  </a>

  <a href="{{ '/stories/' | relative_url }}" class="category-card stories" style="text-decoration: none; color: inherit;">
    <h3>📚 Stories</h3>
    <p>Epic tales and Puranic stories with morals</p>
  </a>

  <a href="{{ '/modern-applications/' | relative_url }}" class="category-card modern" style="text-decoration: none; color: inherit;">
    <h3>🌟 Modern Applications</h3>
    <p>Applying Vedic wisdom to daily life</p>
  </a>
</div>

<hr class="vedic-divider">

## Featured Content

<div class="post-list">
  {% for collection in site.collections %}
    {% if collection.label != 'posts' %}
      {% for document in collection.docs limit:1 %}
        <div>
          <span class="category-badge category-{{ collection.label | replace: '_', '-' }}">{{ collection.label | replace: '_', ' ' | capitalize }}</span>
          <h3><a href="{{ document.url | relative_url }}">{{ document.title }}</a></h3>
          <p class="text-muted">{{ document.description }}</p>
        </div>
      {% endfor %}
    {% endif %}
  {% endfor %}
</div>

<hr class="vedic-divider">

## Why Learn Vedic Knowledge?

<div class="featured-box">
  <h3>Timeless Wisdom for Modern Life</h3>
  <p>The Vedic tradition offers profound insights into:</p>
  <ul>
    <li><strong>Purpose & Meaning</strong> - Understanding life's deeper questions</li>
    <li><strong>Values & Ethics</strong> - Living with integrity and righteousness</li>
    <li><strong>Health & Wellness</strong> - Holistic approaches to wellbeing</li>
    <li><strong>Relationships</strong> - Building harmonious connections</li>
    <li><strong>Spiritual Growth</strong> - Evolving consciousness and self-realization</li>
  </ul>
</div>

## Our Approach

- ✅ **Authentic** - Based on original sources and traditional interpretations
- ✅ **Accessible** - Complex concepts explained in clear, modern English
- ✅ **Family-Friendly** - Content suitable for all ages
- ✅ **Practical** - Wisdom you can apply in daily life
- ✅ **Comprehensive** - Covering all major aspects of Vedic knowledge

---

<div class="text-center text-muted">
  <p><em>Begin your journey into Vedic wisdom. Explore at your own pace, question freely, and discover timeless truths.</em></p>
  <p class="om-symbol" style="font-size: 1.5rem;">🙏</p>
</div>
