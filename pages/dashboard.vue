<template>
  <div light>
    <v-app-bar color="black" dense dark fixed>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-container style="min-height: 1000px;background-color:#f5f7f9" class="screen-wide">
      <v-layout class="mt-n5" row justify-center style="background-color:#f5f7f9">
        <!-- Jumbotron -->
        <v-flex xs12 sm12 md12 class="ma-0 black" style="min-height:200px"></v-flex>
        <!-- END; JUMBOTRON -->

        <!-- Add Project -->
        <v-flex xs9 sm8 md4 class="ma-5">
          <v-card class="mx-auto first-row--card" style="z-index:1" :dark="false" light sm4>
            <v-card-text dark class="justify-center d-flex pa-0">
              <v-icon :size="48" color="amber darken-2">mdi-plus</v-icon>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn text color="amber darken-2">Add Project</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <!-- END: Add Project -->

        <!--  Recent Project -->
        <v-flex xs9 sm8 md4 class="ma-5">
          <v-card
            to="/inspire"
            :img="cardImage"
            class="mx-auto first-row--card card-two"
            :style="cardBG"
            :dark="false"
            light
          >
            <v-card-text dark>
              <div>Recent Project</div>
              <p class="display-1 text--primary">be•nev•o•lent</p>
              <p>adjective</p>
              <div class="text--primary">
                well meaning and kindly.
                <br />"a benevolent smile"
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="amber darken-2">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <!-- END: Recent Project -->
      </v-layout>
      <v-divider light class="ma-10"></v-divider>

      <!--  Other Projects -->
      <v-layout class row justify-center style="background-color:#f5f7f9">
        <v-flex xs9 sm8 md4 class="ma-5" v-for="item in cardImages" :key="item.id">
          <!-- //:style= "[condition ? {styleA} : {styleB}]" -->
          <v-card
            to="/inspire"
            v-cloak
            class="mx-auto"
            :style="[item.download_url ? {zIndex:1, background: 'linear-gradient(to right top, rgba(19, 84, 122, 0.5), rgba(128, 208, 199, 0.8)), url(' + item.download_url + ')', backgroundPosition: 'center center'} : {} ]"
            :dark="false"
            light
            sm4
          >
            <v-card-text dark>
              <div></div>
              <p class="display-1 text--primary">{{item.author}}</p>
              <p>adjective</p>
              <div class="text--primary">
                well meaning and kindly.
                <br />"a benevolent smile"
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="amber darken-2">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <!-- END: Other Projects -->

      <!-- Last Card -->
      <v-layout row justify-center class="last-card">
        <v-flex xs9 sm8 md8 class>
          <v-card class="mx-auto" :dark="false" light>
            <v-card-text dark>
              <div>Word of the Day</div>
              <p class="display-1 text--primary">be•nev•o•lent</p>
              <p>adjective</p>
              <div class="text--primary">
                well meaning and kindly.
                <br />"a benevolent smile"
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="amber darken-2">Learn More</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <!-- END:Last Card -->
      <!-- Banner -->
      <v-layout>
        <v-banner two-line dark>
          <v-avatar slot="icon" color="amber darken-2" size="40">
            <v-icon icon="mdi-lock" color="white">mdi-lock</v-icon>
          </v-avatar>Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.
          <template
            v-slot:actions
          >
            <v-btn text color="amber darken-2">Action</v-btn>
            <v-btn text color="amber darken-2">Action</v-btn>
          </template>
        </v-banner>
      </v-layout>
      <!-- END: Banner -->
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'light',
  name: 'Dashboard',
  data() {
    return {
      valid: true,
      cardImages: [
        { download_url: '' },
        { download_url: '' },
        { download_url: '' }
      ],
      cardImage: 'https://picsum.photos/1920/1080?random',
      cardBG:
        "z-index:1; background: linear-gradient(to right top, rgba(19, 84, 122, 0.5), rgba(128, 208, 199, 0.8)), url('https://picsum.photos/1920/1080?random'); background-position: center center;"
    }
  },
  methods: {
    name() {}
  },
  beforeCreate() {
    this.$vuetify.theme.themes.light
    fetch('https://picsum.photos/v2/list?limit=4')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        data.forEach((element) => {
          console.log(element.url)
        })
        this.cardImages = data
        console.log(this.cardImages[0].url, 'fi')
      })
  },
  created() {
    // console.log('on create', this.cardImages)
  }
}
</script>

<style lang="scss" scoped>
div.v-card.no-border-radius {
  border-radius: 0;
}
.container.screen-wide {
  max-width: 100vw;
}
.first-row--card {
  margin-top: -100px !important;
}
.first-row--card:not(.card-two) {
  height: auto;
  height: 244px;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: column;
}
.last-card {
  margin-bottom: 100px;
  div.flex.md8 {
    min-width: calc(66.667% + 40px);
  }
}

#__layout:first-child {
  background-color: #f5f7f9;
}
@media only screen and (max-width: 960px) {
  .first-row--card {
    margin-top: -50px !important;
    margin-bottom: 50px;
  }
  .first-row--card.card-two {
    margin-bottom: 0px;
  }
  .first-row--card:not(.card-two) {
    height: 100px;
  }
  .last-card {
    div.flex.md8 {
      min-width: 0;
    }
  }
}
</style>