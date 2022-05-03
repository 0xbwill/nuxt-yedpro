<template>
  <section class="faq-one faq-price">
    <img src="/assets/images/shapes/faq-bg-1-1.png" class="faq-one__bg-shape-1" alt="">
    <div class="container">
      <div class="block-title text-center">
        <p>Retrouvez ici les interventions annexes que nous <br> pouvons effectuer sur votre machine. </p>
      </div><!-- /.block-title -->
      <div class="accrodion-grp wow fadeIn" data-wow-duration="1500ms" data-grp-name="faq-accrodion">
        <div class="row">

          <div class="col-lg-6">
            <div class="accordion-container-one">
              <div class="ac">
                <h2 class="ac-q accordion__title-text" tabIndex="0">Stockage : sauvegarde & maintenance</h2>
                <div class="ac-a accordion__content">
                  <p class="accordion__content-desc">
                  Installation d'un nouveau disque dur ou SSD : 35€ <br>
                  Installation d'un nouveau disque dur ou SSD : 35€ <br>
                  Installation d'un nouveau disque dur ou SSD : 35€ <br>
                  Installation d'un nouveau disque dur ou SSD : 35€ <br>
                  </p>
                </div>
              </div>

              <div class="ac accordion__content">
                <h2 class="ac-q accordion__title-text" tabIndex="0">Boostup your application traffic is just a step away</h2>
                <div class="ac-a">
                  <p class="accordion__content-desc">There are many variations of passages of available but majority have alteration
                    in some by inject humour or random words. Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>

              <div class="ac">
                <h2 class="ac-q accordion__title-text" tabIndex="0">How to update application new features</h2>
                <div class="ac-a accordion__content">
                  <p class="accordion__content-desc">There are many variations of passages of available but majority have alteration
                    in some by inject humour or random words. Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div class="ac">
                <h2 class="ac-q accordion__title-text" tabIndex="0">How to connect with the support to improve app experience</h2>
                <div class="ac-a accordion__content">
                  <p class="accordion__content-desc">There are many variations of passages of available but majority have alteration
                    in some by inject humour or random words. Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div class="col-lg-6">
            <div class="accordion-container-two">
              <div class="ac">
                <h2 class="ac-q accordion__title-text" tabIndex="0">Pre and post launch mobile app marketing pitfalls to avoid</h2>
                <div class="ac-a accordion__content">
                  <p class="accordion__content-desc">There are many variations of passages of available but majority have alteration
                    in some by inject humour or random words. Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>

              <div class="ac accordion__content">
                <h2 class="ac-q accordion__title-text" tabIndex="0">Boostup your application traffic is just a step away</h2>
                <div class="ac-a">
                  <p class="accordion__content-desc">There are many variations of passages of available but majority have alteration
                    in some by inject humour or random words. Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>

              <div class="ac">
                <h2 class="ac-q accordion__title-text" tabIndex="0">How to update application new features</h2>
                <div class="ac-a accordion__content">
                  <p class="accordion__content-desc">There are many variations of passages of available but majority have alteration
                    in some by inject humour or random words. Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div class="ac">
                <h2 class="ac-q accordion__title-text" tabIndex="0">How to connect with the support to improve app experience</h2>
                <div class="ac-a accordion__content">
                  <p class="accordion__content-desc">There are many variations of passages of available but majority have alteration
                    in some by inject humour or random words. Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div><!-- /.container -->
  </section>
</template>

<script>
    export default {
      name: "FaqPrice",
      mounted() {
        new Accordion('.accordion-container-one');
        new Accordion('.accordion-container-two');
      }
    }
</script>

<style scoped>
  .ac {
    margin-top: 10px;
    padding: 10px;
    background: #F4F0F9;
    box-sizing: border-box;
  }

  .ac>.ac-q {
    font: bold 15px Arial, sans-serif;
    font-size: 20px;
    color: #444;
    padding: 10px 30px 10px 10px;
    margin: 0;
    text-decoration: none;
    display: block;
    cursor: pointer;
    position: relative;
    font-weight: 700;
  }

  .ac.is-active .ac-q {
    color: #3f1473 !important;
  }
  .ac>.ac-q::after {
    content: '+';
    text-align: center;
    width: 15px;
    right: 10px;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    position: absolute
  }

  .ac>.ac-a {
    overflow: hidden;
    -webkit-transition-property: all;
    transition-property: all;
    -webkit-transition-timing-function: ease;
    transition-timing-function: ease
  }

  .ac>.ac-a p {
    font: 16px/1.5 Arial, sans-serif;
    color: #8b7f9a;
    margin: 0;
    padding: 10px;
    font-size: 18px;
    font-weight: 600;
  }

  .ac.js-enabled>.ac-a {
    visibility: hidden
  }

  .ac.is-active>.ac-a {
    visibility: visible
  }

  .ac.is-active>.ac-q::after {
    content: '\2013';
    color: #3f1473;
  }
</style>
