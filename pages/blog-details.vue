<template>
  <div>
    <Nav />
    <PageHeader title="News Details" />
    <BlogDetails />
    <Footer />
  </div>
</template>
<script>
  import Nav from "../components/Nav";
  import PageHeader from "../components/PageHeader";
  import BlogDetails from "../components/BlogDetails";
  import Footer from "../components/Footer";
  export default {
    components: {Footer, BlogDetails, PageHeader, Nav},
    head(){
      return {
        title: "Oapee | News Details"
      }
    }
  }
</script>
