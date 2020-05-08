<template>
  <v-container class="pa-0">
    <video
      class="min-h-full min-w-full"
      playsinline
      autoplay
      muted
      preload="none"
      loop
      poster="https://www.digitgaming.com/wp-content/uploads/2018/11/digit-game-studios-home.jpg"
    >
      <source
        src="https://1t6ewtcy8py28zcyj104yivj-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/startrek-trailer.mp4"
        type="video/mp4"
      />
    </video>
    <img
      class="digit-logo"
      src="https://1t6ewtcy8py28zcyj104yivj-wpengine.netdna-ssl.com/wp-content/themes/digit-4/assets/img/logo/digit.svg"
      alt="DIGIT"
    />
    <h1 class="title-text">Game Studio</h1>
    <v-row class="justify-center align-stretch full-screen-height flex-column" height="100vh">
      <v-card color="#FAFAFA" class="mx-auto pa-5 justify-center card-lg-device" height="auto">
        <v-form @submit.prevent="submit" ref="form" v-model="valid" :lazy-validation="lazy">
          <!-- <v-tabs>
          <v-tab>Item One</v-tab>
          <v-tab>Item Two</v-tab>
          </v-tabs>-->
          <v-tabs-items v-model="tab" light>
            <v-tab-item key="0">
              <v-text-field
                class="black-text"
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                light
                @input="validate"
                required
              ></v-text-field>
            </v-tab-item>
            <v-tab-item key="1">
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Password"
                light
                required
              ></v-text-field>
            </v-tab-item>
          </v-tabs-items>

          <!-- <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn> -->
          <div class="mt-2 mb-2">
            <v-btn
              min-width="200px"
              width="100%"
              class="mx-auto light-blue darken-2"
              type="submit"
            >{{loginEmailStage}}</v-btn>

            <!-- <v-btn
            min-width="200px"
            width="100%"
            color="error"
            class="mx-auto"
            @click="reset"
            >Reset Form</v-btn>-->
          </div>
          <div>
            <v-row class="justify-center">
              <v-divider light class="mt-2 mb-2"></v-divider>
              <p class="pb-0 mb-0 black--text caption px-2">OR</p>
              <v-divider light class="mt-2 mb-2"></v-divider>
            </v-row>
          </div>
          <div class="mt-2 mb-2">
            <v-btn min-width="200px" width="100%" class="mx-auto blue-grey darken-4">
              <v-icon right dark>mdi-cloud-upload</v-icon>
              <v-divider class="mx-4" vertical dark></v-divider>Digit Studios Login
            </v-btn>
            <!-- <v-btn class="signIn mb-2" primary @click.native="googleSignUp">Google Sign In</v-btn> -->
            <!-- <v-btn
            min-width="200px"
            width="100%"
            color="warning"
            class="mx-auto"
            @click="resetValidation"
            >Reset Validation</v-btn>-->
          </div>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>





<script>
import { mapActions } from 'vuex'

export default {
  layout: 'login',
  name: 'Register',
  data: () => ({
    tab: 0,
    loginEmailStage: 'Login with Email',
    email: '',
    password: '',
    formEmail: '',
    formPassword: '',
    timerInProcess: false,
    showPasswordField: false,
    valid: true,
    inValid: false,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) =>
        v.length < 7 ||
        (v.length > 7 && /.+@.+\..+/.test(v)) ||
        'E-mail must be valid'
    ],
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false,
    lazy: true
  }),
  middleware: ['authenticated'],
  methods: {
    validate() {
      if (this.tab == 0) {
        var isVal = this.$refs.form.validate()

        if (isVal == true) {
          this.loginEmailStage = 'Next'
        } else {
          this.loginEmailStage = 'Login with Email'
        }
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    emailHandler(e) {
      console.log(e, 'chnage')
    },
    ...mapActions('modules/user', ['login']),
    submit() {
      if (this.email && this.name == '') {
        this.tab = 1
        this.loginEmailStage = 'Login'
        console.log('chnage tab')
        this.validate()
      } else {
        console.log('submit it', this.email, this.name)
        this.$fireAuth
          .signInWithEmailAndPassword(this.email, this.name)
          .then((firebaseUser) => {
            return this.login(firebaseUser.uid)
          })
          .then(() => {
            this.$router.push('/dashboard')
          })
          .catch((error) => {
            console.log(error.message)
          })
      }
    },
    async fbGoogleLogin() {
      const { user } = await this.$fireAuth.signInWithPopup(googleProvider)
      await this.login(user)
      this.$router.push('/dashboard')
    },
    async fbGoogleLogout() {
      await this.logout()
      this.$router.push('/')
    },
    emailLogin() {
      this.$store
        .dispatch('users/signInWithEmail', {
          email: this.formEmail,
          password: this.formPassword
        })
        .then(() => {
          this.formEmail = ''
          this.formPassword = ''
        })
        .catch((e) => {
          console.log(e.message)
        })
    },
    googleSignUp() {
      this.$store
        .dispatch('users/signInWithGoogle')
        .then(() => {
          console.log('inside then statement on login')
        })
        .catch((e) => {
          console.log(e.message, 'error google sign up')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
video {
  position: absolute;
}
.digit-logo {
  position: absolute;
  width: auto;
  top: 51vh;
  height: 4rem;
  left: 4%;
  transition: 0.3s ease-in-out;
}
h1.title-text {
  font-family: 'Open Sans', sans-serif;
  z-index: 10;
  position: absolute;
  text-transform: uppercase;
  top: calc(65.5vh - 1.2rem);
  font-size: 2.4rem;
  left: 5%;
  transition: 0.3s ease-in-out;
}

.full-screen-height {
  height: 100vh;

  .card-lg-device {
    margin-left: 60% !important;
    margin-top: 0vh !important;
    transition: 0.3s ease-in-out;
  }
}

@media only screen and (max-width: 880px) {
  .full-screen-height .card-lg-device {
    margin-left: auto !important;
    margin-top: 86vh !important;
  }
  h1.title-text {
    left: calc(50vw - 150px) !important;
    top: calc(45.5vh - 1.2rem);
  }
  .digit-logo {
    left: calc(49vw - 150px) !important;

    top: calc(32.5vh - 1.2rem);
  }
}
</style>