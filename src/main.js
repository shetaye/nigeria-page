import Vue from "vue";
import App from "./App.vue";
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify, {
  theme: {
    primary: '#9E9E9E',
    secondary: '#616161',
    primary_text: '#212121',
    secondary_text: '#757575',
    accent: '#4CAF50'
  },
  iconfont: 'md'
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
