<template>
  <div>
    <Nav />
    <Mentions />
    <Footer />
  </div>
</template>

<script>
  import Nav from "../components/Nav";
  import Footer from "../components/Footer";
  import Mentions from "../components/Mentions.vue"
  export default {
    components: {
      Footer,
      Nav,
      Mentions

    }
  }
</script>
