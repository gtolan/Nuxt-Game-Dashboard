<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">Welcome to the Vuetify + Nuxt.js template {{ name }}</v-card-title>
        <v-card-text>
          <p>
            USERS: {{userNumber}}
            Vuetify is a progressive Material Design component framework for
            Vue.js. It was designed to empower developers to create amazing
            applications.
            <v-btn color="primary" @click="increment">Increment USers</v-btn>
          </p>
          <p>
            For more information on Vuetify, check out the
            <a
              href="https://vuetifyjs.com"
              target="_blank"
            >documentation</a>.
          </p>
          <p>
            If you have questions, please join the official
            <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              title="chat"
            >discord</a>.
          </p>
          <p>
            Find a bug? Report it on the github
            <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              title="contribute"
            >issue board</a>.
          </p>
          <p>
            Thank you for developing with Vuetify and I look forward to bringing
            more exciting features in the future.
          </p>
          <div class="text-xs-right">
            <em>
              <small>&mdash; John Leider</small>
            </em>
          </div>
          <hr class="my-3" />
          <a href="https://nuxtjs.org/" target="_blank">Nuxt Documentation</a>
          <br />
          <a href="https://github.com/nuxt/nuxt.js" target="_blank">Nuxt GitHub</a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
// import fireDb from '@nuxtjs/firebase'
import { mapMutations } from 'vuex'

import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      name: ''
    }
  },
  computed: {
    userNumber() {
      return this.$store.state.users.userCounter
    }
  },
  methods: {
    ...mapMutations({
      increment: 'users/increment'
    }),
    fetchNames() {
      let usersRef = this.$fireDb.ref('users')
      // console.log(this.$fireDb)
      usersRef.on(
        'value',
        (snapshot) => {
          // function(snapshot) {
          console.log(snapshot.val())
          let str = JSON.stringify(snapshot.val())

          console.log(str[0])
          console.log(str)
          console.log(this, 'THOS')
          this.name = str
          return
        },
        function(error) {
          console.log('Error: ' + error.code)
        }
      )
    }
  },
  created() {
    console.log('created-1')
    this.fetchNames()
  }
}
</script>
