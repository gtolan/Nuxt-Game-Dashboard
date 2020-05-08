<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app color="#2f3f5a">
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <v-btn
        height="48"
        width="48"
        :fab="true"
        color="#334969"
        class="left-side--drawer"
        @click.stop="drawer = !drawer"
      >
        <hamburger
          :type="buttonType"
          :active="isActive"
          :size="size"
          :color="color"
          :active-color="activeColor"
          v-on:toggle="onToggle"
        />
      </v-btn>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- " :mini-variant.sync="mini"-->
    <v-navigation-drawer
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      class
      v-model="drawer"
      :clipped="clipped"
      fixed
      :hide-overlay="overlayLeft"
      app
      :mini-variant="miniVariant"
      permanent
    >
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container>
        <nuxt :isActive="isActive" />
      </v-container>
    </v-content>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>mdi-repeat</v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Hamburger from '../shared/Hamburger'

export default {
  components: { Hamburger },
  created() {
    console.log('creeted Nav', this.isActive)
  },
  data() {
    return {
      buttonType: 'arrowturn',
      isActive: true,
      overlayLeft: true,
      size: 's',
      color: 'white',
      activeColor: 'white',
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods: {
    onToggle(active) {
      // Toggle menu
      console.log('toggle menu')
      this.miniVariant = !this.miniVariant
    }
  }
}
</script>

<style >
main {
  max-width: 100vw !important;
}
.left-side--drawer {
  justify-content: center;
  align-content: center;
  display: flex;
  padding: 10px;
}
/* .top-nav-adjust {
  top: 56px !important;
} */
.container {
  padding: 0;
}
div.v-navigation-drawer__image .v-image__image.v-image__image--cover {
  opacity: 0.2;
}
</style>
