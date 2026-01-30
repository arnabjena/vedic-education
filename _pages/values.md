---
layout: page
title: Values & Ethics
permalink: /values/
---

<div class="text-center om-symbol">💎</div>

## Explore Vedic Values & Ethics

Universal principles for righteous living - Dharma, Karma, the Purusharthas, virtues, and ethical guidelines. Learn how to live a meaningful, purposeful life.

<hr class="vedic-divider">

## All Articles in Values & Ethics

<div class="post-list">
{% for doc in site.values %}
  <div>
    <span class="category-badge category-values">Values & Ethics</span>
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

{% if site.values.size == 0 %}
<p class="text-center text-muted"><em>Content coming soon...</em></p>
{% endif %}
