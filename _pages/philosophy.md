---
layout: page
title: Philosophy
permalink: /philosophy/
---

<div class="text-center om-symbol">🧘</div>

## Explore Vedic Philosophy

Deep philosophical insights from the Bhagavad Gita, Upanishads, Six Darshanas, Yoga Sutras, and great Acharyas. Discover timeless wisdom about reality, consciousness, and the path to liberation.

<hr class="vedic-divider">

## All Articles in Philosophy

<div class="post-list">
{% for doc in site.philosophy %}
  <div>
    <span class="category-badge category-philosophy">Philosophy</span>
    <h3><a href="{{ doc.url | relative_url }}">{{ doc.title }}</a></h3>
    <p class="post-meta">{{ doc.date | date: "%B %-d, %Y" }}</p>
    {% if doc.description %}
      <p class="text-muted">{{ doc.description }}</p>
    {% endif %}
    {% if doc.tags %}
      <div class="tags">
        {% for tag in doc.tags %}
          <span class="tag">{{ tag }}</span>
        {% endfor %}
      </div>
    {% endif %}
  </div>
{% endfor %}
</div>

{% if site.philosophy.size == 0 %}
<p class="text-center text-muted"><em>Content coming soon...</em></p>
{% endif %}
