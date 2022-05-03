<template>
  <section class="pricing-one" id="pricing">
    <div class="container">
      <div class="block-title text-center">
        <h3>Liste des<span> tarifs.</span></h3>
        <p id="profit-service">
          Profitez de services adaptés, au meilleur prix.
        </p>
      </div>
      <ul
        class="list-inline text-center switch-toggler-list"
        role="tablist"
        id="switch-toggle-tab"
      >
        <li :class="`${month ? 'month active' : 'month'}`">
          <a> Nos services</a>
        </li>
        <li>
          <label :class="`${year ? 'switch off' : 'switch on'}`">
            <span @click="handleToggle" class="slider round"></span>
          </label>
        </li>
        <li :class="`${year ? 'year active' : 'year'}`">
          <a>Vos données</a>
        </li>
      </ul>

      <div class="tabed-content">
        <div id="year" :style="`display: ${year ? 'block' : 'none'}`">
          <div class="row">
            <div class="col-lg-4 animated fadeInLeft">
              <div class="pricing-one__single">
                <div class="pricing-one__inner">
                  <p>Quelque données</p>
                  <h3>89€ TTC</h3>
                  <p>De 1 à 100 Go</p>
                  <ul class="list-unstyled pricing-one__list">
                    <li>
                      <i class="fa fa-check"></i>Extraction du disque +
                      récupération donnée
                    </li>
                    <li>
                      <i class="fa fa-check"></i>Mise à disposition des données
                      sur une clé USB
                    </li>
                  </ul>
                  <a
                    href="https://yedpro.appointlet.com/s/rdv-telephonique"
                    class="thm-btn pricing-one__btn"
                    ><span>Selectionner</span></a
                  >
                </div>
              </div>
            </div>
            <div class="col-lg-4 animated fadeInUp">
              <div class="pricing-one__single">
                <div class="pricing-one__inner">
                  <p>Méga données</p>
                  <h3>199€ TTC</h3>
                  <p>De 100 à 250 Go</p>
                  <ul class="list-unstyled pricing-one__list">
                    <li>
                      <i class="fa fa-check"></i>Copie des données sur un disque
                      externe
                    </li>
                    <li>
                      <i class="fa fa-check"></i>Mise à disposition des données
                      sur un disque dur
                    </li>
                  </ul>
                  <a
                    href="https://yedpro.appointlet.com/s/rdv-telephonique"
                    class="thm-btn pricing-one__btn"
                    ><span>Selectionner</span></a
                  >
                </div>
              </div>
            </div>
            <div class="col-lg-4 animated fadeInRight">
              <div class="pricing-one__single">
                <div class="pricing-one__inner">
                  <p>Giga données</p>
                  <h3>Sur devis</h3>
                  <p>De 250 go à +</p>
                  <ul class="list-unstyled pricing-one__list">
                    <li>
                      <i class="fa fa-check"></i>Récupération avancée des
                      fichiers perdus
                    </li>
                    <li>
                      <i class="fa fa-check"></i>Mise à disposition des données
                      sur un SSD
                    </li>
                  </ul>
                  <!-- /.list-unstyled pricing-one__list -->
                  <a
                    href="https://yedpro.appointlet.com/s/rdv-telephonique"
                    class="thm-btn pricing-one__btn"
                    ><span>Selectionner</span></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="month" :style="`display: ${month ? 'block' : 'none'}`">
          <div class="row">
            <div class="col-lg-4 animated fadeInLeft">
              <div class="pricing-one__single">
                <div class="pricing-one__inner">
                  <p>Intervention à distance en France, Belgique et Suisse</p>
                  <p
                    id="pricing-one-p"
                    style="margin-top: 15px; margin-bottom: -20px"
                  >
                    à partir de
                  </p>
                  <h3 style="margin-top: 30px">79€/h TTC</h3>
                  <br />
                  <a
                    href="https://yedpro.appointlet.com/s/rdv-telephonique"
                    class="thm-btn pricing-one__btn"
                    ><span>Selectionner</span></a
                  >
                </div>
              </div>
            </div>
            <div class="col-lg-4 animated fadeInUp">
              <div class="pricing-one__single">
                <div class="pricing-one__inner">
                  <p>Dépannage informatique <br />dans notre atelier</p>
                  <p
                    style="color: white; margin-top: 15px; margin-bottom: -20px"
                  >
                    à partir de
                  </p>
                  <h3 style="margin-top: 30px">89€/h TTC</h3>
                  <br />
                  <a
                    href="https://yedpro.appointlet.com/s/rdv-telephonique"
                    class="thm-btn pricing-one__btn"
                    ><span>Selectionner</span></a
                  >
                </div>
              </div>
            </div>
            <div class="col-lg-4 animated fadeInRight">
              <div class="pricing-one__single">
                <div class="pricing-one__inner">
                  <p>
                    Réparation à domicile,<br />
                    sur rendez-vous
                  </p>
                  <p
                    id="pricing-one-p"
                    style="margin-top: 15px; margin-bottom: -20px"
                  >
                    à partir de
                  </p>
                  <h3 style="margin-top: 30px">110€/h TTC</h3>
                  <br />
                  <a
                    href="https://yedpro.appointlet.com/s/rdv-telephonique"
                    class="thm-btn pricing-one__btn"
                    ><span>Selectionner</span></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Pricing",
  data() {
    return {
      month: true,
      year: false,
    };
  },
  methods: {
    handleToggle() {
      const month = this.month;
      const year = this.year;

      if (month) {
        this.year = true;
        this.month = false;
      }
      if (year) {
        this.year = false;
        this.month = true;
      }
    },
  },
};
</script>

<style scoped>
</style>
