<template>
  <section class="video-one">
    <div class="container">
      <div class="video-one__box wow fadeInUp" data-wow-duration="1500ms"
           style="background-image: url(/assets/images/backgrounds/video-bg-1-1.jpg);">
        <div class="video-one__content">
          <a href="https://www.youtube.com/watch?v=aitb---aDYM" class="mediabox video-popup"><i
            class="fa fa-play"></i></a>
          <h3>Watch Our Video</h3>
        </div><!-- /.video-one__content -->
      </div><!-- /.video-one__box -->
    </div><!-- /.container -->
  </section>
</template>

<script>
    export default {
      name: "Video",
      mounted() {
        new GLightbox({
          selector: '.mediabox',
          touchNavigation: true,
          loop: true,
          autoplayVideos: true
        });
      }

    }
</script>

<style scoped>

</style>
