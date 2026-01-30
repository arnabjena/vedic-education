---
layout: page
title: Puranic Literature
permalink: /puranas/
---

<div class="text-center om-symbol">📖</div>

## Explore Puranic Literature

The great epics and Puranas - Ramayana, Mahabharata, and the 18 Mahapuranas. Stories, history, and philosophy interwoven in magnificent narratives.

<hr class="vedic-divider">

## All Articles in Puranic Literature

<div class="post-list">
{% for doc in site.puranas %}
  <div>
    <span class="category-badge category-puranas">Puranic Literature</span>
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

{% if site.puranas.size == 0 %}
<p class="text-center text-muted"><em>Content coming soon...</em></p>
{% endif %}
