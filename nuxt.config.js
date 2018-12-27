const pkg = require('./package')
const postcssSVG = require('postcss-svg')

module.exports = {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'zh-Hant',
    },
    title: "Carol Black Music: Website Relaunched",
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,700,900|David+Libre'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [

  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/assets/scss/style.scss',
    '@/plugins/youtube.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    [
      'nuxt-sass-resources-loader',
      [
        '@/assets/scss/style.scss',
      ]
    ],
    ['@nuxtjs/google-tag-manager', {
      id: 'GTM-NMX64TH'
    }],
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    },
    extractCSS: {
      allChunks: true
    },
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        'postcss-encode-background-svgs': {},
        'postcss-svgo': {}
      }
    }
  }
}
