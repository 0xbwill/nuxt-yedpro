<template>
  <div>
    <Nav />
    <HeaderHome />
    <Service />
    <CallToActionFour />
    <FunFact />
    <Brands />
    <Footer />
  </div>
</template>

<script>
  import Nav from "../components/Nav";
  import HeaderHome from "../components/HeaderHome";
  import Service from "../components/Service";
  import CallToActionFour from "../components/CallToActionFour";
  import Brands from "../components/Brands";
  import FunFact from "../components/FunFact";
  import Footer from "../components/Footer";
  export default {
    components: {
      Footer,
      FunFact,
      Brands,
      CallToActionFour,
      Service,
      HeaderHome,
      Nav,
    }
  }
</script>
