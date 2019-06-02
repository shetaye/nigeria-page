<template>
  <v-flex xs5>
      <div v-if="description_top" class="text-xs-center subheading">{{description_top}}</div>
      <div class="text-xs-center display-4">{{number}}</div>
      <div class="text-xs-center subheading">{{description}}</div>
  </v-flex>
</template>

<script>
export default {
  name: "NumberBig",
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
