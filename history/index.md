---
layout: page
title: Hindu History
permalink: /history/
---

# Hindu Civilization Through the Ages

Discover the true history of Hindu civilization - from ancient glory through persecution to modern resilience.

## Our History Articles

<div class="post-list">
{% for post in site.history %}
  <div class="post-item">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p>{{ post.description | default: post.excerpt | strip_html | truncate: 200 }}</p>
  </div>
{% endfor %}
</div>

---

**Why This History Matters:**
- Learn about your ancestors' achievements and resilience
- Understand persecution by Islamic invaders and British colonizers
- Know the truth that schools don't teach
- Build pride in Hindu heritage
- Never forget, but move forward with strength
