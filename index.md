---
layout: default
title: Solo Travel Society
---

<div class="container-md">
  <div class="wrapper">
    <div class="content">
      <header>
        <div class="site-logo my-4">
          <a href="{{ '/' | relative_url }}">
            <img src="{{ '/assets/images/logo.png' | relative_url }}" alt="Solo Travel Society" height="48">
          </a>
        </div>
        <nav class="main-nav text-center my-4">
        <ul class="nav-menu list-inline">
          <li class="list-inline-item active"><a href="{{ '/' | relative_url }}">Home</a></li>
          <li class="list-inline-item"><a href="{{ '/blog/' | relative_url }}">Blog</a></li>
        </ul>
        </nav>
      </header>
      <p>
        The Solo Travel Society is for those who love and dream of travelling alone. Here, solo travelers can connect and share valuable tips, safety advice, and personal stories from their journeys. This space not only fosters a sense of belonging but also encourages members to embrace the freedom and empowerment that comes with solo travel. Whether you're seeking inspiration for your next adventure or looking to share your experiences, the Solo Travel Society is the perfect place to find like-minded individuals who understand the unique joys of traveling alone.
      </p>
      <div class="btn-group">
        <a href="https://www.solotraveler.org/" class="btn btn-primary">Blog</a>
        <a href="https://www.facebook.com/groups/thesolotravelsociety/" class="btn btn-secondary">Facebook Group</a>
        <a href="https://www.facebook.com/thesolotravelsociety/" class="btn btn-info" aria-current="page">Facebook Page</a>
      </div>
      <!--<p><a href="https://www.digitalnomadsweekly.com/#/portal/signup" title="Join Digital Nomads Weekly" target="_blank">Subscribe</a> to the Digital Nomads Weekly <a href="https://www.digitalnomadsweekly.com/" title="Digital Nomads Weekly" target="_blank">newsletter</a>.</p>-->
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
