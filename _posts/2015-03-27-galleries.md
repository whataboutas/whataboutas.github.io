<script src="/js/jquery-1.11.0.min.js"></script>
<script src="/js/lightbox.min.js"></script>
<link href="/css/lightbox.css" rel="stylesheet" />


<div class="nav1" style="height:120px;">
<a href="../img/images/01.jpg" class="images" data-lightbox="roadtrip" data-title="My caption"><img src="../img/images/01.jpg" height="100" /></a>
<a href="../img/images/02.jpg" class="images" data-lightbox="roadtrip" data-title="My caption"><img src="../img/images/02.jpg" height="100" /></a>
<a href="../img/images/03.jpg" class="images" data-lightbox="roadtrip" data-title="My caption"><img src="../img/images/03.jpg" height="100" /></a>
</div>


{% for gallery in site.data.galleries %}
  {% if gallery.id == page.galleryid %}
    <h1>{{ gallery.description }}</h1>
    <ol>
    {% for image in gallery.images %}
      <li>
        {{ image.text }}<br>
        <a href="{{ gallery.imagefolder }}/{{ image.name }}" data-lightbox="{{ gallery.id }}" title="{{ image.text }}">
          <img src="{{ gallery.imagefolder }}/{{ image.thumb }}">
        </a>
      </li>
    {% endfor %}
    </ol>
  {% endif %}
{% endfor %}