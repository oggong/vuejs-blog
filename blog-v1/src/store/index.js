import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import vuex_test from "./vuex_test/vuex_test";

export default new Vuex.Store({
  modules: {
    vuex_test: vuex_test,
  },
});
