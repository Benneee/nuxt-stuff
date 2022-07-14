const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Blogggr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A cool webdev blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070', height: '4px', duration: 5000 },
  loadingIndicator: {
    name: 'circle',
    color: 'fa923f'
  },

  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
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
    extend(config, ctx) {

    }
  },

  env: {
    baseUrl: process.env.BASE_URL || 'https://blogggr-1ddbc-default-rtdb.firebaseio.com/'
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
