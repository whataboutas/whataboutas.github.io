---
layout: page
title: Einträge
---
<div>
<ul>
{% for post in site.posts %}
<li>
<!-- Whitespace added for readability -->
{% assign m = post.date | date: "%-m" %}
{{ post.date | date: "%-d" }}
{% case m %}
  {% when '1' %}Januar
  {% when '2' %}Februar
  {% when '3' %}M&auml;rz
  {% when '4' %}April
  {% when '5' %}Mai
  {% when '6' %}Juni
  {% when '7' %}Juli
  {% when '8' %}August
  {% when '9' %}September
  {% when '10' %}Oktober
  {% when '11' %}November
  {% when '12' %}Dezember
{% endcase %}
{{ post.date | date: "%Y" }}
&raquo;
<a href="{{ post.url }}">{{ post.title }}</a> 
<!-- &middot; <a href="{{ post.url }}index.html#disqus_thread" data-disqus-identifier="{{post.url}}"></a> -->
</li>
{% endfor %}
</ul>
</div>