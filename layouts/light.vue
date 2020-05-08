<template>
  <v-app :dark="false" :light="true">
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>


<style >
#__layout:first-child {
  background-color: #f5f7f9;
}
</style>