---
layout: default
title: Solo Travel Society
---

<div class="container-md">
  <div class="wrapper">
    <div class="content">
      <header>
        <h1 id="awesome-ghost-" class="mb-4 border-bottom">Solo Travel Society</h1>
      </header>
      <p>
        The Solo Travel Society is for those who love and dream of travelling alone. Here, solo travelers can connect and share valuable tips, safety advice, and personal stories from their journeys. This space not only fosters a sense of belonging but also encourages members to embrace the freedom and empowerment that comes with solo travel. Whether you're seeking inspiration for your next adventure or looking to share your experiences, the Solo Travel Society is the perfect place to find like-minded individuals who understand the unique joys of traveling alone.
      </p>
      <p><a href="https://www.digitalnomadsweekly.com/#/portal/signup" title="Join Digital Nomads Weekly" target="_blank">Subscribe</a> to the Digital Nomads Weekly <a href="https://www.digitalnomadsweekly.com/" title="Digital Nomads Weekly" target="_blank">newsletter</a>.</p>
      <hr class="my-4">
      <h2>Latest Posts</h2>
        {% for post in site.posts limit:5 %}
          <h5><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h5>
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
