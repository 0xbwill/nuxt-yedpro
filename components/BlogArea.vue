<template>
  <section class="blog-one" id="blog">
    <img src="/assets/images/shapes/blog-shape-1-1.png" class="blog-one__bg-shape-1" alt="">
    <img src="/assets/images/shapes/blog-shape-1-2.png" class="blog-one__bg-shape-2" alt="">
    <div class="container">
      <div class="block-title text-center">
        <h3>Latest From the <span>Blog Posts</span></h3>
        <p>Lorem ipsum is are many variations of pass of majority.</p>
      </div><!-- /.block-title text-center -->
      <div class="row">
        <div class="col-lg-4 ">
          <div class="blog-one__single">
            <div class="blog-one__image">
              <img src="/assets/images/blog/blog-1-1.jpg" alt="">
            </div><!-- /.blog-one__image -->
            <div class="blog-one__content">
              <div class="blog-one__meta">
                <a href="#"><i class="far fa-clock"></i> 20 Feb</a>
                <a href="#"><i class="far fa-comments"></i> 2 Comments</a>
              </div><!-- /.blog-one__meta -->
              <h3><nuxt-link to="/blog-details">Leverage agile frame works to provide a synopsis</nuxt-link>
              </h3>
            </div><!-- /.blog-one__content -->
          </div><!-- /.blog-one__single -->
        </div><!-- /.col-lg-4 col-md-6 -->
        <div class="col-lg-4 ">
          <div class="blog-one__single">
            <div class="blog-one__image">
              <img src="/assets/images/blog/blog-1-2.jpg" alt="">
            </div><!-- /.blog-one__image -->
            <div class="blog-one__content">
              <div class="blog-one__meta">
                <a href="#"><i class="far fa-clock"></i> 20 Feb</a>
                <a href="#"><i class="far fa-comments"></i> 2 Comments</a>
              </div><!-- /.blog-one__meta -->
              <h3><nuxt-link to="/blog-details">Launch New Mobile App Marketing Pitfalls To Avoid</nuxt-link>
              </h3>
            </div><!-- /.blog-one__content -->
          </div><!-- /.blog-one__single -->
        </div><!-- /.col-lg-4 col-md-6 -->
        <div class="col-lg-4 ">
          <div class="blog-one__single">
            <div class="blog-one__image">
              <img src="/assets/images/blog/blog-1-3.jpg" alt="">
            </div><!-- /.blog-one__image -->
            <div class="blog-one__content">
              <div class="blog-one__meta">
                <a href="#"><i class="far fa-clock"></i> 20 Feb</a>
                <a href="#"><i class="far fa-comments"></i> 2 Comments</a>
              </div><!-- /.blog-one__meta -->
              <h3><nuxt-link to="/blog-details">Bring to the table win-win survival strategies.</nuxt-link></h3>
            </div><!-- /.blog-one__content -->
          </div><!-- /.blog-one__single -->
        </div><!-- /.col-lg-4 col-md-6 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section>
</template>

<script>
    export default {
        name: "BlogArea"
    }
</script>

<style scoped>

</style>
