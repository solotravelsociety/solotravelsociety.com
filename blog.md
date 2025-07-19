---
layout: default
title: Blog
permalink: /blog/
---

<h2 class="mb-4">Latest Posts</h2>
<ul class="list-unstyled">
  {% for post in site.posts %}
    <li class="mb-4">
      <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
      <small class="text-muted">{{ post.date | date: "%B %d, %Y" }}</small>
      <p>{{ post.excerpt }}</p>
    </li>
  {% endfor %}
</ul>
