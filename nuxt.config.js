const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyCtCKE7S8v8L-jc95r6BSgGG0Cf5QPUqYo",
          authDomain: "gamedash-cbcdd.firebaseapp.com",
          databaseURL: "https://gamedash-cbcdd.firebaseio.com",
          projectId: "gamedash-cbcdd",
          storageBucket: "gamedash-cbcdd.appspot.com",
          messagingSenderId: "141398773451",
          appId: "1:141398773451:web:5ec42980c5843e14e1554e",
          measurementId: '<measurementId>'
        },
        services: {
         // auth: true, // Just as example. Can be any other service.
          functions: true,
          storage: true,
          realtimeDb: true,
          messaging: true,
          performance: true,
          auth: {
            persistence: 'local', // default
          
            // it is recommended to configure either a mutation or action but you can set both
            initialize: {
              onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
              // onAuthStateChangedAction: 'onAuthStateChangedAction'
            },
          
            ssr: true // default
          }
        }
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: colors.purple,
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: colors.red.accent3,
        }
      }
    }
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
