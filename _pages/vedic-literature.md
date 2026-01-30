---
layout: page
title: Vedic Literature
permalink: /vedic-literature/
---

<div class="text-center om-symbol">📚</div>

## Explore Vedic Literature

The foundational sacred texts of the Vedic tradition - the Four Vedas, Upanishads, Brahmanas, Aranyakas, and Vedangas. Discover the oldest wisdom of humanity.

<hr class="vedic-divider">

## All Articles in Vedic Literature

<div class="post-list">
{% for doc in site.vedic_literature %}
  <div>
    <span class="category-badge category-vedic-literature">Vedic Literature</span>
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

{% if site.vedic_literature.size == 0 %}
<p class="text-center text-muted"><em>Content coming soon...</em></p>
{% endif %}
