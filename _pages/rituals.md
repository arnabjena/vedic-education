---
layout: page
title: Rituals & Practices
permalink: /rituals/
---

<div class="text-center om-symbol">🕉️</div>

## Explore Vedic Rituals & Practices

Daily practices, puja procedures, festival celebrations, mantras, samskaras (life rituals), and meditation techniques. Learn how to incorporate Vedic practices into your life.

<hr class="vedic-divider">

## All Articles in Rituals & Practices

<div class="post-list">
{% for doc in site.rituals %}
  <div>
    <span class="category-badge category-rituals">Rituals & Practices</span>
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

{% if site.rituals.size == 0 %}
<p class="text-center text-muted"><em>Content coming soon...</em></p>
{% endif %}
