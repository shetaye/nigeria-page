<template>
  <v-flex>
      <div v-if="description_top" class="text-xs-center subheading">{{description_top}}</div>
      <div class="text-xs-center display-2">{{number}}</div>
      <div class="text-xs-center subheading">{{description}}</div>
  </v-flex>
</template>

<script>
export default {
  name: "Number",
  props: {
      number: String,
      description: String,
      description_top: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
