<template>
  <section class="banner-one" id="home">
    <img
      src="/assets/images/shapes/banner-shape-1-3.png"
      class="banner-one__bg-shape-1"
      alt=""
    />
    <img
      src="/assets/images/shapes/banner-shape-1-2.png"
      class="banner-one__bg-shape-2"
      alt=""
    />
    <img
      src="/assets/images/shapes/banner-shape-1-3.png"
      class="banner-one__bg-shape-3"
      alt=""
    />
    <img
      src="/assets/images/shapes/banner-shape-1-1.png"
      class="banner-one__bg-shape-4"
      alt=""
    />
    <img
      src="/assets/images/shapes/banner-shape-1-5.png"
      class="banner-one__bg-shape-5"
      alt=""
    />

    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex">
          <div class="my-auto">
            <div class="banner-one__content animated fadeInLeft">
              <h3>
                Dépannage informatique à <br />
                Lille Métropole.
              </h3>
              <p>Services & solutions pour votre informatique.</p>
              <a href="#features" class="thm-btn banner-one__btn"
                ><span>En savoir plus</span></a
              >
            </div>
          </div>
        </div>
        <div
          class="col-lg-6 d-flex justify-content-end wow fadeInUp"
          data-wow-duration="1500ms"
        >
          <div class="banner-one__image animated fadeInRight">
            <img src="/assets/images/startup.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "HeaderHome",
};
</script>

<style scoped>
</style>
