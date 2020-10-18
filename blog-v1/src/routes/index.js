import Vue from "vue";
import VueRouter from "vue-router";

import MainPage from "../pages/MainPage";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: MainPage,
    },
  ],
});
