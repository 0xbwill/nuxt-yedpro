<template>
  <section class="testimonials-one" id="testimonials">

    <div class="container">
      <img src="/assets/images/shapes/testi-map-1-1.png" alt="Awesome Image"
           class="testimonials-one__bg-shape-1" />
      <div class="row">
        <div class="col-lg-6 d-flex">
          <div class="my-auto">
            <div id="testimonials-slider-pager">
              <div class="testimonials-slider-pager-one">
                <a href="#" class="pager-item active" data-slide-index="0"><img
                  src="/assets/images/testimonials/testi-1-1.jpg" alt="Awesome Image" /></a>
                <a href="#" class="pager-item" data-slide-index="1"><img
                  src="/assets/images/testimonials/testi-1-2.jpg" alt="Awesome Image" /></a>
                <a href="#" class="pager-item" data-slide-index="2"><img
                  src="/assets/images/testimonials/testi-1-3.jpg" alt="Awesome Image" /></a>
                <a href="#" class="pager-item" data-slide-index="3"><img
                  src="/assets/images/testimonials/testi-1-4.jpg" alt="Awesome Image" /></a>
                <a href="#" class="pager-item" data-slide-index="4"><img
                  src="/assets/images/testimonials/testi-1-5.jpg" alt="Awesome Image" /></a>
                <a href="#" class="pager-item" data-slide-index="5"><img
                  src="/assets/images/testimonials/testi-1-6.jpg" alt="Awesome Image" /></a>
              </div><!-- /.testimonials-slider-pager-one -->
              <div class="testimonials-slider-pager-two">
                <a href="#" class="pager-item active" data-slide-index="0"><img
                  src="/assets/images/testimonials/testi-1-1.jpg" alt="Awesome Image" /></a>
                <a href="#" class="pager-item" data-slide-index="1"><img
                  src="/assets/images/testimonials/testi-1-2.jpg" alt="Awesome Image" /></a>
                <a href="#" class="pager-item" data-slide-index="2"><img
                  src="/assets/images/testimonials/testi-1-3.jpg" alt="Awesome Image" /></a>
                <a href="#" class="pager-item" data-slide-index="3"><img
                  src="/assets/images/testimonials/testi-1-4.jpg" alt="Awesome Image" /></a>
                <a href="#" class="pager-item" data-slide-index="4"><img
                  src="/assets/images/testimonials/testi-1-5.jpg" alt="Awesome Image" /></a>
                <a href="#" class="pager-item" data-slide-index="5"><img
                  src="/assets/images/testimonials/testi-1-6.jpg" alt="Awesome Image" /></a>
              </div><!-- /.testimonials-slider-pager-two -->
            </div><!-- /#testimonials-slider-pager -->
          </div><!-- /.my-auto -->
        </div><!-- /.col-lg-6 -->
        <div class="col-lg-6">
          <div class="block-title text-left">
            <h3>What Our Customers Are <br>Talking <span>About Us</span></h3>
          </div><!-- /.block-title text-center -->
          

          <div class="slider testimonials-slider swiper-wrapper">
            <swiper :options="swiperOptions">
              <swiper-slide>
            <div class="slide-item">
              <div class="testimonials-one__single">
                <p>This is due to their excellent service, competitive pricing and customer support.
                  It’s throughly refresing to get such a personal touch. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <h3>Delila Rayam</h3>
                <span>CEO - Layerdrops</span>
              </div><!-- /.testimonials-one__single -->
            </div>
              </swiper-slide>
              <swiper-slide>
            <div class="slide-item">
              <div class="testimonials-one__single">
                <p>This is due to their excellent service, competitive pricing and customer support.
                  It’s throughly refresing to get such a personal touch. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <h3>Terrilyn Werme</h3>
                <span>CEO - Layerdrops</span>
              </div><!-- /.testimonials-one__single -->
            </div>
              </swiper-slide>
              <swiper-slide>
            <div class="slide-item">
              <div class="testimonials-one__single">
                <p>This is due to their excellent service, competitive pricing and customer support.
                  It’s throughly refresing to get such a personal touch. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <h3>Kyle Demayo</h3>
                <span>CEO - Layerdrops</span>
              </div><!-- /.testimonials-one__single -->
            </div>
              </swiper-slide>
              <swiper-slide>
            <div class="slide-item">
              <div class="testimonials-one__single">
                <p>This is due to their excellent service, competitive pricing and customer support.
                  It’s throughly refresing to get such a personal touch. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <h3>Minta Hadad</h3>
                <span>CEO - Layerdrops</span>
              </div><!-- /.testimonials-one__single -->
            </div>
              </swiper-slide>
              <swiper-slide>
            <div class="slide-item">
              <div class="testimonials-one__single">
                <p>This is due to their excellent service, competitive pricing and customer support.
                  It’s throughly refresing to get such a personal touch. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <h3>Sherman Cibrian</h3>
                <span>CEO - Layerdrops</span>
              </div><!-- /.testimonials-one__single -->
            </div>
              </swiper-slide>
              <swiper-slide>
            <div class="slide-item">
              <div class="testimonials-one__single">
                <p>This is due to their excellent service, competitive pricing and customer support.
                  It’s throughly refresing to get such a personal touch. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <h3>Adrianne Hagans</h3>
                <span>CEO - Layerdrops</span>
              </div><!-- /.testimonials-one__single -->
            </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
        </div><!-- /.col-lg-6 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: "Testimonial",
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
        swiperOptions: {
          slidesPerView : 1,
          loop: true,
          speed: 1000,
          spaceBetween : 30,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },
        }

      }
    },
  }
</script>

<style scoped>

</style>
