<template>
  <header
    :class="`site-header-one stricky site-header-one__fixed-top ${
      sticky ? 'stricked-menu stricky-fixed' : ''
    }`"
  >
    <div class="container-fluid">
      <div class="site-header-one__logo">
        <a href="/">
          <img src="/assets/images/logo2.png" width="136" alt="" />
        </a>
        <span @click="mobileToggle = !mobileToggle" class="side-menu__toggler"
          ><i class="fa fa-bars"></i></span
        ><!-- /.side-menu__toggler -->
      </div>
      <!-- /.site-header-one__logo -->
      <div class="main-nav__main-navigation one-page-scroll-menu">
        <ul class="main-nav__navigation-box">
          <li class="scrollToLink">
            <nuxt-link to="/">Accueil</nuxt-link>
          </li>
          <li class="scrollToLink">
            <nuxt-link to="/tarifs">Tarifs</nuxt-link>
          </li>
          <li class="scrollToLink">
            <a
              href="mailto:contact@yedpro.com?subject=Mail envoy%C3%A9 depuis le site internet yedpro.com&authuser=0"
              target="_blank"
              >Contact</a
            >
          </li>
          <li class="scrollToLink">
            <a href="https://yedpro.organilog.com/client/">Espace client</a>
          </li>
        </ul>
        <!-- /.main-nav__navigation-box -->
      </div>
      <!-- /.main-nav__main-navigation -->
      <div class="main-nav__right">
        <a class="thm-btn" href="https://yedpro.appointlet.com/s/rdv-telephonique" target="_blank"><span style="color: white">Prendre rendez-vous</span></a>
          
          
        </li>
      </div>
      <!-- /.main-nav__right -->
    </div>
    <!-- /.container-fluid -->

    <nav class="mobile-nav__container">
      <!-- content is loading via js -->

      <ul
        :style="`display: ${mobileToggle ? 'block' : 'none'}`"
        class="main-nav__navigation-box one-page-scroll-menu"
      >
        <li class="scrollToLink">
          <nuxt-link to="/">Accueil</nuxt-link>
        </li>
        <li class="scrollToLink"><nuxt-link to="/tarifs">Tarifs</nuxt-link></li>
        <li class="scrollToLink">
          <a
            href="mailto:contact@yedpro.com?subject=Mail envoy%C3%A9 depuis le site internet yedpro.com&authuser=0"
            >Contact</a
          >
        </li>
        <li class="scrollToLink">
          <a href="https://yedpro.organilog.com/client/">Espace client</a>
        </li>
        <li class="scrollToLink"> 
          <a class="thm-btn btn-rdv" href="https://yedpro.appointlet.com/s/rdv-telephonique" target="_blank"><span style="color: white">Prendre rendez-vous</span></a>
        </li>
      </ul>
      <!-- /.main-nav__navigation-box -->
    </nav>
  </header>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      sticky: false,
      mobileToggle: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 70) {
        this.sticky = true;
      } else if (window.scrollY < 70) {
        this.sticky = false;
      }
    },
  },
};
</script>

<style scoped>
</style>
