<template>
  <v-container>
    <v-flex class="text-center jumbrotron">
      <!-- <img src="/v.png" alt="Vuetify.js" class="mb-5" /> -->
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>

    <v-flex md10 sm10 class="ma-5 pa-4 text-center release-card">
      <v-row class="fill-height" align="center" justify="center">
        <template v-for="(item, i) in itemsRel">
          <v-col :key="i" cols="12" md="4" sm="4">
            <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
                <v-img :src="item.img" height="225px">
                  <v-card-title class="title white--text">
                    <v-row class="fill-height flex-column" justify="space-between">
                      <p class="mt-4 subheading text-left">{{ item.title }}</p>

                      <div>
                        <p
                          class="ma-0 body-1 font-weight-bold font-italic text-left"
                        >{{ item.text }}</p>
                        <p
                          class="caption font-weight-medium font-italic text-left"
                        >{{ item.subtext }}</p>
                      </div>

                      <div class="align-self-center">
                        <v-btn
                          v-for="(icon, index) in icons"
                          :key="index"
                          :class="{ 'show-btns': hover }"
                          color="transparent"
                          icon
                        >
                          <v-icon :class="{ 'show-btns': hover }" color="transparent">{{ icon }}</v-icon>
                        </v-btn>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-flex>

    <v-flex :class="{'small-drawer-margin': isActive }">
      <v-layout row justify-center>
        <v-flex md10 sm10 class="ma-5">
          <v-card class="mx-auto" max-width="434" tile>
            <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
              <v-row align="end" class="fill-height">
                <v-col align-self="start" class="pa-0" cols="12">
                  <v-avatar class="profile" color="grey" size="164" tile>
                    <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                  </v-avatar>
                </v-col>
                <v-col class="py-0">
                  <v-list-item color="rgba(0, 0, 0, .4)" dark>
                    <v-list-item-content>
                      <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
                      <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-img>
          </v-card>
        </v-flex>

        <v-flex md10 sm10 class="ma-5">
          <!-- <v-card class="mx-auto rounded" dark outlined :elevation="8" :tile="true">
            <GChart
              dark
              type="ColumnChart"
              :resizeDebounce="500"
              :data="chartData"
              :options="chartOptions"
            />
          </v-card>-->
          <v-card class="mt-4 mx-auto">
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="cyan"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
              <v-sparkline
                :labels="labels"
                :value="valueSpark"
                color="white"
                line-width="2"
                padding="16"
              ></v-sparkline>
            </v-sheet>

            <v-card-text class="pt-0">
              <div class="title font-weight-light mb-2">User Registrations</div>
              <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
              <v-divider class="my-2"></v-divider>
              <v-icon class="mr-2" small>mdi-clock</v-icon>
              <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md10 sm10 class="ma-5">
          <v-card class="mx-auto text-center" color="cyan" dark>
            <v-card-text>
              <v-sheet color="rgba(0, 0, 0, .12)">
                <v-sparkline
                  :value="valueSales"
                  color="rgba(255, 255, 255, .7)"
                  height="100"
                  padding="24"
                  stroke-linecap="round"
                  smooth
                >
                  <template v-slot:label="item">${{ item.value }}</template>
                </v-sparkline>
              </v-sheet>
            </v-card-text>

            <v-card-text>
              <div class="display-1 font-weight-thin">Sales Last 24h</div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="justify-center">
              <v-btn block text>Go to Report</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex :class="{'small-drawer-margin': isActive }">
      <v-layout row justify-center>
        <v-flex md10 sm10 class="ma-5">
          <v-card class="mx-auto">
            <v-card-title class="blue-grey white--text">
              <span class="title">Logs</span>
              <v-spacer></v-spacer>
              <v-btn
                :outlined="interval == null"
                :color="interval == null ? 'white' : 'primary'"
                dark
                depressed
                @click="interval == null ? start() : stop()"
              >Realtime Logging</v-btn>
            </v-card-title>
            <v-card-text class="py-0">
              <v-timeline dense>
                <v-slide-x-reverse-transition group hide-on-leave>
                  <v-timeline-item
                    v-for="item in items"
                    :key="item.id"
                    :color="item.color"
                    small
                    fill-dot
                  >
                    <v-alert
                      :value="true"
                      :color="item.color"
                      :icon="item.icon"
                      class="white--text"
                    >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-alert>
                  </v-timeline-item>
                </v-slide-x-reverse-transition>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md10 sm10 class="ma-5">
          <v-timeline>
            <v-timeline-item v-for="n in 3" :key="n" color="red lighten-2" large>
              <template v-slot:opposite>
                <span>Tus eu perfecto</span>
              </template>
              <v-card class="elevation-2">
                <v-card-title class="headline">Lorem ipsum</v-card-title>
                <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-flex>
      </v-layout>
      <v-layout row justify-space-around>
        <v-flex md10 sm10>
          <v-timeline dense clipped>
            <v-timeline-item fill-dot class="white--text mb-12" color="orange" large>
              <template v-slot:icon>
                <span>JL</span>
              </template>
              <v-text-field
                v-model="input"
                hide-details
                flat
                label="Leave a comment..."
                solo
                @keydown.enter="comment"
              >
                <template v-slot:append>
                  <v-btn class="mx-0" depressed @click="comment">Post</v-btn>
                </template>
              </v-text-field>
            </v-timeline-item>

            <v-slide-x-transition group>
              <v-timeline-item
                v-for="event in timeline"
                :key="event.id"
                class="mb-4"
                color="pink"
                small
              >
                <v-row justify="space-between">
                  <v-col cols="7" v-text="event.text"></v-col>
                  <v-col class="text-right" cols="5" v-text="event.time"></v-col>
                </v-row>
              </v-timeline-item>
            </v-slide-x-transition>

            <v-timeline-item class="mb-6" hide-dot>
              <span>TODAY</span>
            </v-timeline-item>

            <v-timeline-item class="mb-4" color="grey" icon-color="grey lighten-2" small>
              <v-row justify="space-between">
                <v-col cols="7">This order was archived.</v-col>
                <v-col class="text-right" cols="5">15:26 EDT</v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item class="mb-4" small>
              <v-row justify="space-between">
                <v-col cols="7">
                  <v-chip class="white--text ml-0" color="purple" label small>APP</v-chip>Digital Downloads fulfilled 1 item.
                </v-col>
                <v-col class="text-right" cols="5">15:25 EDT</v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item class="mb-4" color="grey" small>
              <v-row justify="space-between">
                <v-col
                  cols="7"
                >Order confirmation email was sent to John Leider (john@vuetifyjs.com).</v-col>
                <v-col class="text-right" cols="5">15:25 EDT</v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item class="mb-4" hide-dot>
              <v-btn class="mx-0" color="white">Resend Email</v-btn>
            </v-timeline-item>

            <v-timeline-item class="mb-4" color="grey" small>
              <v-row justify="space-between">
                <v-col cols="7">A $15.00 USD payment was processed on PayPal Express Checkout</v-col>
                <v-col class="text-right" cols="5">15:25 EDT</v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item color="grey" small>
              <v-row justify="space-between">
                <v-col
                  cols="7"
                >John Leider placed this order on Online Store (checkout #1937432132572).</v-col>
                <v-col class="text-right" cols="5">15:25 EDT</v-col>
              </v-row>
            </v-timeline-item>
          </v-timeline>
        </v-flex>
        <v-flex md10 sm10 class="ma-5">
          <v-sheet class="mx-auto" elevation="8" max-width="800">
            <v-slide-group
              v-model="model"
              class="pa-4"
              :prev-icon="prevIcon ? 'mdi-minus' : undefined"
              :next-icon="nextIcon ? 'mdi-plus' : undefined"
              :multiple="multiple"
              :mandatory="mandatory"
              :show-arrows="showArrows"
              :center-active="centerActive"
            >
              <v-slide-item v-for="n in 15" :key="n" v-slot:default="{ active, toggle }">
                <v-card
                  :color="active ? 'primary' : 'grey lighten-1'"
                  class="ma-4"
                  height="200"
                  width="100"
                  @click="toggle"
                >
                  <v-row class="fill-height" align="center" justify="center">
                    <v-scale-transition>
                      <v-icon
                        v-if="active"
                        color="white"
                        size="48"
                        v-text="'mdi-close-circle-outline'"
                      ></v-icon>
                    </v-scale-transition>
                  </v-row>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-flex>

        <v-flex md10 sm10 class="ma-5">
          <v-card flat tile>
            <v-window v-model="onboarding" vertical>
              <v-window-item v-for="n in length" :key="`card-${n}`">
                <v-card color="grey" height="200">
                  <v-row class="fill-height" align="center" justify="center" tag="v-card-text">
                    <h1 style="font-size: 5rem;" class="white--text">Slide {{ n }}</h1>
                  </v-row>
                </v-card>
              </v-window-item>
            </v-window>

            <v-card-actions class="justify-space-between">
              <v-btn text @click="prev">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-item-group v-model="onboarding" class="text-center" mandatory>
                <v-item v-for="n in length" :key="`btn-${n}`" v-slot:default="{ active, toggle }">
                  <v-btn :input-value="active" icon @click="toggle">
                    <v-icon>mdi-record</v-icon>
                  </v-btn>
                </v-item>
              </v-item-group>
              <v-btn text @click="next">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex md10 sm10 class="ma-5">
          <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-sheet :color="colors[i]" height="100%">
                <v-row class="fill-height" align="center" justify="center">
                  <div class="display-3">{{ slide }} Slide</div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-flex>

        <v-flex md10 sm10 class="ma-5">
          <v-stepper v-model="e1">
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="3">Name of step 3</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

                <v-btn color="primary" @click="e1 = 2">Continue</v-btn>

                <v-btn text>Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

                <v-btn color="primary" @click="e1 = 3">Continue</v-btn>

                <v-btn text>Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

                <v-btn color="primary" @click="e1 = 1">Continue</v-btn>

                <v-btn text>Cancel</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-flex>

        <v-flex md10 sm10 class="ma-5">
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="desserts"
            :single-select="singleSelect"
            item-key="name"
            show-select
            class="elevation-1"
          >
            <template v-slot:top>
              <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>
const COLORS = ['info', 'warning', 'error', 'success']
const ICONS = {
  info: 'mdi-information',
  warning: 'mdi-alert',
  error: 'mdi-alert-circle',
  success: 'mdi-check-circle'
}

import { GChart } from 'vue-google-charts'
export default {
  components: {
    GChart
  },
  computed: {
    timeline() {
      return this.events.slice().reverse()
    }
  },

  beforeCreate() {
    this.$vuetify.theme.dark = true
  },
  created() {
    // console.log(isActive, 'isActive')
  },
  updated() {
    // console.log(isActive, 'updated')
  },
  beforeDestroy() {
    this.stop()
  },
  data() {
    return {
      icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
      itemsRel: [
        {
          title: 'New Releases',
          text: "It's New Release Friday",
          subtext: 'Newly released songs. Updated daily.',
          img: 'http://lorempixel.com/output/nightlife-q-c-640-480-5.jpg'
        },
        {
          title: 'Rock',
          text: 'Greatest Rock Hits',
          subtext: 'Lose yourself in rock tunes.',
          img:
            'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
        },
        {
          title: 'Mellow Moods',
          text: 'Ambient Bass',
          subtext: 'Chill beats to mellow you out.',
          img: 'http://lorempixel.com/output/abstract-q-c-640-480-6.jpg'
        }
      ],
      transparent: 'rgba(255, 255, 255, 0)',
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ],
      e1: 1,
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4'
      ],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
      length: 3,
      onboarding: 0,
      isActive: false,
      model: null,
      multiple: false,
      mandatory: false,
      showArrows: true,
      prevIcon: false,
      nextIcon: false,
      centerActive: false,
      valueSales: [423, 446, 675, 510, 590, 610, 760],
      labels: ['12am', '3am', '6am', '9am', '12pm', '3pm', '6pm', '9pm'],
      valueSpark: [200, 675, 410, 390, 310, 460, 250, 240],
      interval: null,
      items: [
        {
          id: 1,
          color: 'info',
          icon: ICONS['info']
        }
      ],
      nonce: 2,
      events: [],
      input: null,
      nonceComment: 0,
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        },
        chartArea: {
          backgroundColor: {
            fill: '#F4F4F4',
            opacity: 100
          }
        }
      },

      chartDataBubble: [
        ['ID', 'X', 'Y', 'Temperature'],
        ['', 80, 167, 120],
        ['', 79, 136, 130],
        ['', 78, 184, 50],
        ['', 72, 278, 230],
        ['', 81, 200, 210],
        ['', 72, 170, 100],
        ['', 68, 477, 80]
      ],
      chartOptionsBubble: {
        colorAxis: { colors: ['yellow', 'red'] }
      }
    }
  },
  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1
    },
    comment() {
      const time = new Date().toTimeString()
      this.events.push({
        id: this.nonceComment++,
        text: this.input,
        time: time.replace(
          /:\d{2}\sGMT-\d{4}\s\((.*)\)/,
          (match, contents, offset) => {
            return ` ${contents
              .split(' ')
              .map((v) => v.charAt(0))
              .join('')}`
          }
        )
      })

      this.input = null
    },
    addEvent() {
      let { color, icon } = this.genAlert()

      const previousColor = this.items[0].color

      while (previousColor === color) {
        color = this.genColor()
      }

      this.items.unshift({
        id: this.nonce++,
        color,
        icon
      })

      if (this.nonce > 6) {
        this.items.pop()
      }
    },
    genAlert() {
      const color = this.genColor()

      return {
        color,
        icon: this.genIcon(color)
      }
    },
    genColor() {
      return COLORS[Math.floor(Math.random() * 3)]
    },
    genIcon(color) {
      return ICONS[color]
    },
    start() {
      this.interval = setInterval(this.addEvent, 3000)
    },
    stop() {
      clearInterval(this.interval)
      this.interval = null
    },
    onChartReady(chart, google) {
      const query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1qhyJnMpiuuwKLCY3t6W4bp6XKnixTFekAPlCpR8AcK0/edit?usp=sharing'
      )
      query.send((response) => {
        const options = {
          title: 'Creating a Chart from a Separate Spreadsheet'
        }
        const data = response.getDataTable()
        chart.draw(data, options)
      })
    }
  }
}
</script>

<style scoped>
.rounded {
  border-radius: 10px;
  overflow: hidden;
}
.jumbrotron {
  background-color: #314a5b;
  background-image: url(https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg);
  background-image: linear-gradient(rgba(59, 73, 95, 0.85), #333942de),
    url(https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg);
}
.container {
  padding: 0;
}
.small-drawer-margin {
  margin-left: 56px;
}
.v-sheet--offset {
  top: -24px;
  position: relative;
}
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
