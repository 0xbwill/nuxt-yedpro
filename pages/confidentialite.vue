<template>
  <div>
    <Nav />
    <Confidentialite />
    <Footer />
  </div>
</template>

<script>
  import Nav from "../components/Nav";
  import Footer from "../components/Footer";
  import Confidentialite from "../components/Confidentialite"
  export default {
    components: {
      Footer,
      Nav,
      Confidentialite

    }
  }
</script>
