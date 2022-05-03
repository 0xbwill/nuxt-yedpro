<template>
  <div>
    <Nav />
    <PageHeader title="News" />
    <Blog />
    <Footer />
  </div>
</template>
<script>
  import Nav from "../components/Nav";
  import PageHeader from "../components/PageHeader";
  import Blog from "../components/Blog";
  import Footer from "../components/Footer";
  export default {
    components: {Footer, Blog, PageHeader, Nav},
    head(){
      return {
        title: "Oapee | Blog"
      }
    }
  }
</script>
