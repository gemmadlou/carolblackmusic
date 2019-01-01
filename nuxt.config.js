const pkg = require('./package')
const postcssSVG = require('postcss-svg')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'zh-Hant'
    },
    title: 'Carol Black Music',
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
        content: 'Professional singer, songwriter, performer and vocal coach'
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
  css: [],

  // 'https://vky0aszbp6.execute-api.eu-west-1.amazonaws.com/production/content'

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:5000'
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/assets/scss/style.scss', '~/plugins/youtube.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    ['nuxt-sass-resources-loader', ['@/assets/scss/style.scss']],
    [
      '@nuxtjs/google-tag-manager',
      {
        id: 'GTM-NMX64TH'
      }
    ]
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
    extend(config, ctx) {},
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
