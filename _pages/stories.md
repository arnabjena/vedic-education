---
layout: page
title: Stories
permalink: /stories/
---

<div class="text-center om-symbol">📚</div>

## Explore Vedic Stories

Epic tales from the Ramayana, Mahabharata, Puranas, and other sacred texts. Stories that teach timeless values and wisdom through engaging narratives.

<hr class="vedic-divider">

## All Stories

<div class="post-list">
{% for doc in site.stories %}
  <div>
    <span class="category-badge category-stories">Stories</span>
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

{% if site.stories.size == 0 %}
<p class="text-center text-muted"><em>Content coming soon...</em></p>
{% endif %}
