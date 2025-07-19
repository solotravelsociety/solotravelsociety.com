---
layout: default
title: Blog
permalink: /blog/
---

<div class="container-md">
  <div class="wrapper">
    <div class="content">
      <header>
        <h1 id="awesome-ghost-" class="mb-4">Solo Travel Society</h1>
        <nav class="main-nav text-center my-4">
        <ul class="nav-menu list-inline">
          <li class="list-inline-item"><a href="{{ '/' | relative_url }}">Home</a></li>
          <li class="list-inline-item active"><a href="{{ '/blog/' | relative_url }}">Blog</a></li>
        </ul>
        </nav>
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
