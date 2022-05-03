
export default {
  mode: 'universal',
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes:'180x180', type: 'image/x-icon', href: '/assets/images/favicons/apple-touch-icon.png' },
      { rel: 'icon', sizes:'32x32', type: 'image/png', href: '/assets/images/favicons/favicon-32x32.png' },
      { rel: 'icon', sizes:'16x16', type: 'image/png', href: '/assets/images/favicons/favicon-16x16.png' },

      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" },
      { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/assets/css/animate.min.css" },
      { rel: "stylesheet", href: "/assets/css/bootstrap-select.min.css" },
      { rel: "stylesheet", href: "/assets/css/bootstrap-datepicker.min.css" },
      { rel: "stylesheet", href: "/assets/plugins/glightbox/glightbox.min.css" },
      { rel: "stylesheet", href: "/assets/css/fontawesome-all.min.css" },
      { rel: "stylesheet", href: "/assets/css/oapee-icons.css" },
      { rel: "stylesheet", href: "/assets/css/style.css" },
      { rel: "stylesheet", href: "/assets/css/responsive.css" }
    ],

    script: [
      { src: "/assets/plugins/glightbox/glightbox.min.js", body: true },
      { src: "/assets/plugins/accordion/accordion.min.js", body: true }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#e867ff', height: '4px' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: 'plugins/owl.js', ssr: false},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
