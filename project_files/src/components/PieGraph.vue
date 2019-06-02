<template>
  <v-flex xs5>
      <canvas :ref="name" width="400" height="400"></canvas>
      <div class="text-xs-center subheading py-5">{{description}}</div>
  </v-flex>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: "PieGraph",
  data() {
    return {
      chart: null,
    }
  },
  props: {
      name: String,
      data: Array,
      labels: Array,
      description: String,
  },
  mounted() {
    const ctx = this.$refs[this.name].getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: this.labels,
        datasets: [{
            data: this.data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
        }]
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
