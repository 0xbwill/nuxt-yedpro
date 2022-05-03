<template>
  <div>
    <footer class="site-footer">
      <div class="site-footer__upper">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-6">
              <div class="footer-widget footer-widget__about">
                <a href="/" class="logo">
                  <img
                    src="/assets/images/logo-purple.png"
                    width="136"
                    alt=""
                  />
                </a>
                <p>
                  Assistance et Dépannage informatique <br />
                  à Lille Métropole & Hauts-de-France.
                </p>
              </div>
            </div>
            <div class="col-xl-2 col-lg-6">
              <div class="footer-widget footer-widget__links">
                <h3 class="footer-widget__title">Infos légales</h3>
                <ul class="list-unstyled footer-widget__links-list">
                  <li>
                    <nuxt-link to="/mentions-legales"
                      >Mentions légales</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link to="/confidentialite">Confidentialité</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-2 col-lg-6">
              <div class="footer-widget footer-widget__contact">
                <h3 class="footer-widget__title">Contact</h3>
                <ul class="footer-widget__contact-list list-unstyled">
                  <li>
                    <i class="fa fa-envelope"></i>
                    <a href="mailto:contact@yedpro.com">contact@yedpro.com</a>
                  </li>
                  <li>
                    <i class="fa fa-map-marker"></i>
                    <a
                      id="google-map-redirect"
                      href="https://goo.gl/maps/w7E5Ciuayy7vTQou8"
                      target="_blank"
                      >58 Rue Brûle Maison <br />
                      Lille, 59000</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6">
              <div class="footer-widget footer-widget__newsletter">
                <h3 class="footer-widget__title">Newsletter</h3>
                <form action="#" class="footer-widget__newsletter-form">
                  <input type="text" placeholder="Adresse email" name="email" />
                  <button type="submit"><i class="fa fa-envelope"></i></button>
                </form>
                <p>
                  Abonnez-vous, et profitez de 5€ de réduction sur votre 1ère
                  intervention chez YEDPRO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="site-footer__bottom">
        <div class="container">
          <div class="inner-container">
            <p>
              Tous droits réservés YEDPRO 2021
            </p>
          </div>
        </div>
      </div>
    </footer>

    <a
      @click="scrollTop"
      class="scroll-to-target scroll-to-top"
      :style="`display: ${scrollBtn ? 'inline' : 'none'}`"
      href="#"
      ><i class="fa fa-angle-up"></i
    ></a>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      scrollBtn: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      if (window.scrollY > 70) {
        this.scrollBtn = true;
      } else if (window.scrollY < 70) {
        this.scrollBtn = false;
      }
    },

    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
</style>
