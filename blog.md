---
layout: default
title: Blog
permalink: /blog/
---

<div class="container-md">
  <div class="wrapper">
    <div class="content">
      <header>
        <h1 id="awesome-ghost-" class="mb-4 border-bottom">Solo Travel Society</h1>
      </header>
      <h2 class="mb-4">Latest Posts</h2>
        {% for post in site.posts %}
            <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
            <small class="text-muted">{{ post.date | date: "%B %d, %Y" }}</small>
            <p>{{ post.excerpt }}</p>
        {% endfor %}
     <hr class="my-4">
      <div class="social-icons">
        <a href="https://www.facebook.com/thesolotravelsociety/" class="social-icon facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.facebook.com/groups/thesolotravelsociety/" class="social-icon facebook"><i class="fab fa-facebook-f"></i></a>
      </div>
    </div>
  </div>
</div>
