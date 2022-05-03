<template>
  <section class="funfact-one" v-observe-visibility="onVisibilityChange">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="100ms">
          <div class="funfact-one__single">
            <h3 class="counter">+ de <countTo :startVal='0' :endVal='startCounter ? 50:38' :duration='2000'></countTo>To</h3><!-- /.counter -->
            <p>de données <br> récupérées</p>
          </div><!-- /.funfact-one__single -->
        </div><!-- /.col-lg-3 col-md-6 col-sm-12 -->
        <div class="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="100ms">
          <div class="funfact-one__single">
            <h3 class="counter">+ de <countTo :startVal='0' :endVal='startCounter ? 250 : 199' :duration='2000'></countTo></h3><!-- /.counter -->
            <p>PC remis en état de fonctionnement</p>
          </div><!-- /.funfact-one__single -->
        </div><!-- /.col-lg-3 col-md-6 col-sm-12 -->
        <div class="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="100ms">
          <div class="funfact-one__single">
            <h3 class="counter"><countTo :startVal='0' :endVal='startCounter ? 7230 : 3400' :duration='2000'></countTo>km</h3><!-- /.counter -->
            <p>parcourus pour vous <br>rendre service</p>
          </div><!-- /.funfact-one__single -->
        </div><!-- /.col-lg-3 col-md-6 col-sm-12 -->
        <div class="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="100ms">
          <div class="funfact-one__single">
            <h3 class="counter"><countTo :startVal='0' :endVal='startCounter ? 2840 : 2300' :duration='2000'></countTo></h3><!-- /.counter -->
            <p>cafés consommés <br> depuis notre lancement</p>
          </div><!-- /.funfact-one__single -->
        </div><!-- /.col-lg-3 col-md-6 col-sm-12 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section>
</template>

<script>
  import countTo from 'vue-count-to';
  import { ObserveVisibility } from 'vue-observe-visibility'

  export default {
    name: "FunFact",
    components: { countTo },
    directives: {
      ObserveVisibility
    },
    data() {
      return{
        startCounter: false
      }
    },
    methods: {
      onVisibilityChange (isVisible) {
        if (isVisible){
          this.startCounter = true;
        }

      },
    },
  }
</script>


<style scoped>

</style>
