<template>
  <div>
    <Nav />
    <HeaderPrice />
    <Pricing />
    <PricingRest />
    <Footer />
  </div>
</template>

<script>
  import Nav from "../components/Nav";
  import HeaderPrice from "../components/HeaderPrice";
  import Pricing from "../components/Pricing";
  import PricingRest from "../components/PricingRest";
  import Footer from "../components/Footer";
  export default {
    components: {
      Nav,
      HeaderPrice,
      Pricing,
      PricingRest,
      Footer,
    }
  }
</script>
