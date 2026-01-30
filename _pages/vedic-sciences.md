---
layout: page
title: Vedic Sciences
permalink: /vedic-sciences/
---

<div class="text-center om-symbol">🔬</div>

## Explore Vedic Sciences

Ancient Indian sciences - Ayurveda, Jyotisha, Yoga, Vastu Shastra, Mathematics, and more. Discover the scientific knowledge embedded in Vedic tradition.

<hr class="vedic-divider">

## All Articles in Vedic Sciences

<div class="post-list">
{% for doc in site.vedic_sciences %}
  <div>
    <span class="category-badge category-vedic-sciences">Vedic Sciences</span>
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

{% if site.vedic_sciences.size == 0 %}
<p class="text-center text-muted"><em>Content coming soon...</em></p>
{% endif %}
