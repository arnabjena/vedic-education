---
layout: page
title: Modern Applications
permalink: /modern-applications/
---

<div class="text-center om-symbol">🌟</div>

## Vedic Wisdom for Modern Life

Applying ancient Vedic wisdom to contemporary challenges - stress management, relationships, career, parenting, mental health, and daily living. Timeless principles for modern times.

<hr class="vedic-divider">

## All Articles in Modern Applications

<div class="post-list">
{% for doc in site.modern_applications %}
  <div>
    <span class="category-badge category-modern-applications">Modern Applications</span>
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

{% if site.modern_applications.size == 0 %}
<p class="text-center text-muted"><em>Content coming soon...</em></p>
{% endif %}
