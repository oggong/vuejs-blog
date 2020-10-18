import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import { router } from "./routes/index.js";

// vuex
import store from "./store";
import Vuex from "vuex";
Vue.use(Vuex);

// bootstrap-vue 불러오기
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
