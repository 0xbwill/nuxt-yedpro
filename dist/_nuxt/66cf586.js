(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{152:function(t,e,n){"use strict";var r={name:"Nav",data:function(){return{sticky:!1,mobileToggle:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)}}},l=n(19),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{class:"site-header-one stricky site-header-one__fixed-top "+(t.sticky?"stricked-menu stricky-fixed":"")},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"site-header-one__logo"},[t._m(0),t._v(" "),n("span",{staticClass:"side-menu__toggler",on:{click:function(e){t.mobileToggle=!t.mobileToggle}}},[n("i",{staticClass:"fa fa-bars"})])]),t._v(" "),n("div",{staticClass:"main-nav__main-navigation one-page-scroll-menu"},[n("ul",{staticClass:"main-nav__navigation-box"},[n("li",{staticClass:"scrollToLink"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("Accueil")])],1),t._v(" "),n("li",{staticClass:"scrollToLink"},[n("nuxt-link",{attrs:{to:"/tarifs"}},[t._v("Tarifs")])],1),t._v(" "),t._m(1),t._v(" "),t._m(2)])]),t._v(" "),t._m(3)]),t._v(" "),n("nav",{staticClass:"mobile-nav__container"},[n("ul",{staticClass:"main-nav__navigation-box one-page-scroll-menu",style:"display: "+(t.mobileToggle?"block":"none")},[n("li",{staticClass:"scrollToLink"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("Accueil")])],1),t._v(" "),n("li",{staticClass:"scrollToLink"},[n("nuxt-link",{attrs:{to:"/tarifs"}},[t._v("Tarifs")])],1),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"/"}},[e("img",{attrs:{src:"/assets/images/logo2.png",width:"136",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"scrollToLink"},[e("a",{attrs:{href:"mailto:contact@yedpro.com?subject=Mail envoy%C3%A9 depuis le site internet yedpro.com&authuser=0",target:"_blank"}},[this._v("Contact")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"scrollToLink"},[e("a",{attrs:{href:"https://yedpro.organilog.com/client/"}},[this._v("Espace client")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-nav__right"},[e("a",{staticClass:"thm-btn",attrs:{href:"https://yedpro.appointlet.com/s/rdv-telephonique",target:"_blank"}},[e("span",{staticStyle:{color:"white"}},[this._v("Prendre rendez-vous")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"scrollToLink"},[e("a",{attrs:{href:"mailto:contact@yedpro.com?subject=Mail envoy%C3%A9 depuis le site internet yedpro.com&authuser=0"}},[this._v("Contact")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"scrollToLink"},[e("a",{attrs:{href:"https://yedpro.organilog.com/client/"}},[this._v("Espace client")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"scrollToLink"},[e("a",{staticClass:"thm-btn btn-rdv",attrs:{href:"https://yedpro.appointlet.com/s/rdv-telephonique",target:"_blank"}},[e("span",{staticStyle:{color:"white"}},[this._v("Prendre rendez-vous")])])])}],!1,null,"0466081d",null);e.a=component.exports},153:function(t,e,n){"use strict";var r={name:"Footer",data:function(){return{scrollBtn:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.scrollBtn=!0:window.scrollY<70&&(this.scrollBtn=!1)},scrollTop:function(){window.scrollTo(0,0)}}},l=n(19),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("footer",{staticClass:"site-footer"},[n("div",{staticClass:"site-footer__upper"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-xl-2 col-lg-6"},[n("div",{staticClass:"footer-widget footer-widget__links"},[n("h3",{staticClass:"footer-widget__title"},[t._v("Infos légales")]),t._v(" "),n("ul",{staticClass:"list-unstyled footer-widget__links-list"},[n("li",[n("nuxt-link",{attrs:{to:"/mentions-legales"}},[t._v("Mentions légales")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/confidentialite"}},[t._v("Confidentialité")])],1)])])]),t._v(" "),t._m(1),t._v(" "),t._m(2)])])]),t._v(" "),t._m(3)]),t._v(" "),n("a",{staticClass:"scroll-to-target scroll-to-top",style:"display: "+(t.scrollBtn?"inline":"none"),attrs:{href:"#"},on:{click:t.scrollTop}},[n("i",{staticClass:"fa fa-angle-up"})])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-xl-4 col-lg-6"},[e("div",{staticClass:"footer-widget footer-widget__about"},[e("a",{staticClass:"logo",attrs:{href:"/"}},[e("img",{attrs:{src:"/assets/images/logo-purple.png",width:"136",alt:""}})]),this._v(" "),e("p",[this._v("\n                Assistance et Dépannage informatique "),e("br"),this._v("\n                à Lille Métropole & Hauts-de-France.\n              ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-xl-2 col-lg-6"},[n("div",{staticClass:"footer-widget footer-widget__contact"},[n("h3",{staticClass:"footer-widget__title"},[t._v("Contact")]),t._v(" "),n("ul",{staticClass:"footer-widget__contact-list list-unstyled"},[n("li",[n("i",{staticClass:"fa fa-envelope"}),t._v(" "),n("a",{attrs:{href:"mailto:contact@yedpro.com"}},[t._v("contact@yedpro.com")])]),t._v(" "),n("li",[n("i",{staticClass:"fa fa-map-marker"}),t._v(" "),n("a",{attrs:{id:"google-map-redirect",href:"https://goo.gl/maps/w7E5Ciuayy7vTQou8",target:"_blank"}},[t._v("58 Rue Brûle Maison "),n("br"),t._v("\n                    Lille, 59000")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-xl-4 col-lg-6"},[e("div",{staticClass:"footer-widget footer-widget__newsletter"},[e("h3",{staticClass:"footer-widget__title"},[this._v("Newsletter")]),this._v(" "),e("form",{staticClass:"footer-widget__newsletter-form",attrs:{action:"#"}},[e("input",{attrs:{type:"text",placeholder:"Adresse email",name:"email"}}),this._v(" "),e("button",{attrs:{type:"submit"}},[e("i",{staticClass:"fa fa-envelope"})])]),this._v(" "),e("p",[this._v("\n                Abonnez-vous, et profitez de 5€ de réduction sur votre 1ère\n                intervention chez YEDPRO.\n              ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"site-footer__bottom"},[e("div",{staticClass:"container"},[e("div",{staticClass:"inner-container"},[e("p",[this._v("\n            Tous droits réservés YEDPRO 2021\n          ")])])])])}],!1,null,"2cefb07e",null);e.a=component.exports},161:function(t,e,n){"use strict";n.r(e);var r=n(152),l={name:"HeaderHome"},o=n(19),c=Object(o.a)(l,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"banner-one",attrs:{id:"home"}},[n("img",{staticClass:"banner-one__bg-shape-1",attrs:{src:"/assets/images/shapes/banner-shape-1-3.png",alt:""}}),t._v(" "),n("img",{staticClass:"banner-one__bg-shape-2",attrs:{src:"/assets/images/shapes/banner-shape-1-2.png",alt:""}}),t._v(" "),n("img",{staticClass:"banner-one__bg-shape-3",attrs:{src:"/assets/images/shapes/banner-shape-1-3.png",alt:""}}),t._v(" "),n("img",{staticClass:"banner-one__bg-shape-4",attrs:{src:"/assets/images/shapes/banner-shape-1-1.png",alt:""}}),t._v(" "),n("img",{staticClass:"banner-one__bg-shape-5",attrs:{src:"/assets/images/shapes/banner-shape-1-5.png",alt:""}}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6 d-flex"},[n("div",{staticClass:"my-auto"},[n("div",{staticClass:"banner-one__content animated fadeInLeft"},[n("h3",[t._v("\n              Dépannage informatique à "),n("br"),t._v("\n              Lille Métropole.\n            ")]),t._v(" "),n("p",[t._v("Services & solutions pour votre informatique.")]),t._v(" "),n("a",{staticClass:"thm-btn banner-one__btn",attrs:{href:"#features"}},[n("span",[t._v("En savoir plus")])])])])]),t._v(" "),n("div",{staticClass:"col-lg-6 d-flex justify-content-end wow fadeInUp",attrs:{"data-wow-duration":"1500ms"}},[n("div",{staticClass:"banner-one__image animated fadeInRight"},[n("img",{attrs:{src:"/assets/images/startup.png",alt:""}})])])])])])}],!1,null,"20a351f4",null).exports,d={name:"Service"},v=Object(o.a)(d,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"service-one",attrs:{id:"features"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"block-title text-center"},[n("h3",[t._v("Services &"),n("span",[t._v(" Solutions.")])]),t._v(" "),n("p",{attrs:{id:"profit-service"}},[t._v("Pour tous les PC & périphériques.")])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp",attrs:{"data-wow-duration":"1500ms","data-wow-delay":"0ms"}},[n("div",{staticClass:"service-one__single"},[n("h3",[t._v("\n            Récupération de"),n("br"),t._v("\n            données\n          ")]),t._v(" "),n("p",[t._v("Sauvegarde, nettoyage & optimisation.")]),t._v(" "),n("div",{staticClass:"service-one__icon"},[n("i",{staticClass:"oapee-icon-presentation"})])])]),t._v(" "),n("div",{staticClass:"col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp",attrs:{"data-wow-duration":"1500ms","data-wow-delay":"100ms"}},[n("div",{staticClass:"service-one__single"},[n("h3",[t._v("Protection contre "),n("br"),t._v("les virus")]),t._v(" "),n("p",[t._v("Stabilité & sécurité de votre ordinateur.")]),t._v(" "),n("div",{staticClass:"service-one__icon"},[n("i",{staticClass:"oapee-icon-target"})])])]),t._v(" "),n("div",{staticClass:"col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp",attrs:{"data-wow-duration":"1500ms","data-wow-delay":"200ms"}},[n("div",{staticClass:"service-one__single"},[n("h3",[t._v("\n            Optimisation "),n("br"),t._v("\n            & Accélération\n          ")]),t._v(" "),n("p",[t._v("Amélioration de votre expérience utilisateur.")]),t._v(" "),n("div",{staticClass:"service-one__icon"},[n("i",{staticClass:"oapee-icon-laptop"})])])]),t._v(" "),n("div",{staticClass:"col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp",attrs:{"data-wow-duration":"1500ms","data-wow-delay":"300ms"}},[n("div",{staticClass:"service-one__single"},[n("h3",[t._v("Initiation & "),n("br"),t._v("Formations")]),t._v(" "),n("p",[t._v("Outils, équipements et solutions logicielles.")]),t._v(" "),n("div",{staticClass:"service-one__icon"},[n("i",{staticClass:"oapee-icon-visualization"})])])])])])])}],!1,null,"f67f2056",null).exports,_={name:"CallToActionFour"},m=Object(o.a)(_,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"cta-four"},[n("img",{staticClass:"cta-four__bg-shape-2",attrs:{src:"/assets/images/shapes/cta-4-shape-1-1.png",alt:""}}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"cta-four__images"},[n("img",{staticClass:"wow fadeInUp",attrs:{src:"/assets/images/resources/cta-4-moc-1-1.png","data-wow-duration":"1500ms",alt:""}}),t._v(" "),n("img",{staticClass:"wow fadeInUp",attrs:{src:"/assets/images/resources/cta-4-moc-1-2.png","data-wow-duration":"1500ms",alt:""}}),t._v(" "),n("img",{staticClass:"wow fadeInUp",attrs:{src:"/assets/images/resources/cta-4-moc-1-3.png","data-wow-duration":"1500ms",alt:""}})])]),t._v(" "),n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"cta-four__content"},[n("div",{staticClass:"block-title-priserdv"},[n("h3",[t._v("\n              Vous souhaitez obtenir un devis, nous envoyer un message,\n              réaliser un diagnostic, faire une demande de dépannage\n              informatique, planifiez un rendez-vous téléphonique, ...\n            ")])]),t._v(" "),n("div",{staticClass:"cta-four__text"},[n("p",[t._v("\n              Pour contacter YEDPRO c'est simple, planifiez un rendez-vous\n              téléphonique pour réaliser un 1er diagnostic par téléphone, vous\n              obtiendrez des réponses à toutes vos questions et un tarif clair\n              et transparent avant toutes interventions, et si vous remplissez\n              les conditions d'une assistance informatique à distance, vous\n              n'aurez qu'à cliquer sur le lien que nous vous enverrons par\n              mail pour télécharger notre module de téléassistance.\n            ")])]),t._v(" "),n("a",{staticClass:"thm-btn cta-four__btn",attrs:{href:"/tarifs"}},[n("span",[t._v("En savoir plus")])])])])])])])}],!1,null,"16c38c97",null).exports,f=n(155),h=(n(156),{name:"Brands",components:{Swiper:f.Swiper,SwiperSlide:f.SwiperSlide},directives:{swiper:f.directive},data:function(){return{swiperOptions:{slidesPerView:5,loop:!0,speed:1e3,spaceBetween:30,autoplay:{delay:3e3,disableOnInteraction:!1},breakpoints:{1024:{slidesPerView:5},768:{slidesPerView:4},640:{slidesPerView:3},320:{slidesPerView:2}}}}}}),C=Object(o.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"brand-one"},[n("div",{staticClass:"container"},[n("div",{staticClass:"brand-one__carousel"},[n("swiper",{attrs:{options:t.swiperOptions}},[n("swiper-slide",[n("div",{staticClass:"item"},[n("img",{attrs:{src:"/assets/images/brands/google.png",alt:""}})])]),t._v(" "),n("swiper-slide",[n("div",{staticClass:"item"},[n("img",{attrs:{src:"/assets/images/brands/intel.png",alt:""}})])]),t._v(" "),n("swiper-slide",[n("div",{staticClass:"item"},[n("img",{attrs:{src:"/assets/images/brands/synology.png",alt:""}})])]),t._v(" "),n("swiper-slide",[n("div",{staticClass:"item"},[n("img",{attrs:{src:"/assets/images/brands/lenovo.png",alt:""}})])]),t._v(" "),n("swiper-slide",[n("div",{staticClass:"item"},[n("img",{attrs:{src:"/assets/images/brands/microsoft.png",alt:""}})])]),t._v(" "),n("swiper-slide",[n("div",{staticClass:"item"},[n("img",{attrs:{src:"/assets/images/brands/seagate.png",alt:""}})])]),t._v(" "),n("swiper-slide",[n("div",{staticClass:"item"},[n("img",{attrs:{src:"/assets/images/brands/amazon.png",alt:""}})])]),t._v(" "),n("swiper-slide",[n("div",{staticClass:"item"},[n("img",{attrs:{src:"/assets/images/brands/hp.png",alt:""}})])]),t._v(" "),n("swiper-slide",[n("div",{staticClass:"item"},[n("img",{attrs:{src:"/assets/images/brands/dell.png",alt:""}})])]),t._v(" "),n("swiper-slide",[n("div",{staticClass:"item"},[n("img",{attrs:{src:"/assets/images/brands/asus.png",alt:""}})])]),t._v(" "),n("swiper-slide",[n("div",{staticClass:"item"},[n("img",{attrs:{src:"/assets/images/brands/apple.png",alt:""}})])])],1)],1)])])}),[],!1,null,"62378767",null).exports,w=n(158),y=n.n(w),k=n(159),E={name:"FunFact",components:{countTo:y.a},directives:{ObserveVisibility:k.a},data:function(){return{startCounter:!1}},methods:{onVisibilityChange:function(t){t&&(this.startCounter=!0)}}},x=Object(o.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.onVisibilityChange,expression:"onVisibilityChange"}],staticClass:"funfact-one"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-3 col-md-6 col-sm-12 wow fadeInUp",attrs:{"data-wow-duration":"1000ms","data-wow-delay":"100ms"}},[n("div",{staticClass:"funfact-one__single"},[n("h3",{staticClass:"counter"},[t._v("+ de "),n("countTo",{attrs:{startVal:0,endVal:t.startCounter?50:38,duration:2e3}}),t._v("To")],1),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"col-lg-3 col-md-6 col-sm-12 wow fadeInUp",attrs:{"data-wow-duration":"1000ms","data-wow-delay":"100ms"}},[n("div",{staticClass:"funfact-one__single"},[n("h3",{staticClass:"counter"},[t._v("+ de "),n("countTo",{attrs:{startVal:0,endVal:t.startCounter?250:199,duration:2e3}})],1),t._v(" "),n("p",[t._v("PC remis en état de fonctionnement")])])]),t._v(" "),n("div",{staticClass:"col-lg-3 col-md-6 col-sm-12 wow fadeInUp",attrs:{"data-wow-duration":"1000ms","data-wow-delay":"100ms"}},[n("div",{staticClass:"funfact-one__single"},[n("h3",{staticClass:"counter"},[n("countTo",{attrs:{startVal:0,endVal:t.startCounter?7230:3400,duration:2e3}}),t._v("km")],1),t._v(" "),t._m(1)])]),t._v(" "),n("div",{staticClass:"col-lg-3 col-md-6 col-sm-12 wow fadeInUp",attrs:{"data-wow-duration":"1000ms","data-wow-delay":"100ms"}},[n("div",{staticClass:"funfact-one__single"},[n("h3",{staticClass:"counter"},[n("countTo",{attrs:{startVal:0,endVal:t.startCounter?2840:2300,duration:2e3}})],1),t._v(" "),t._m(2)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("de données "),e("br"),this._v(" récupérées")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("parcourus pour vous "),e("br"),this._v("rendre service")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("cafés consommés "),e("br"),this._v(" depuis notre lancement")])}],!1,null,"004b6976",null).exports,T={components:{Footer:n(153).a,FunFact:x,Brands:C,CallToActionFour:m,Service:v,HeaderHome:c,Nav:r.a}},$=Object(o.a)(T,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Nav"),this._v(" "),e("HeaderHome"),this._v(" "),e("Service"),this._v(" "),e("CallToActionFour"),this._v(" "),e("FunFact"),this._v(" "),e("Brands"),this._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=$.exports}}]);