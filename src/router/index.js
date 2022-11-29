import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ParentComp from "../components/ParentComp";
import CoachComp from "../components/CoachComp";
import ParentLesson from "../components/ParentLesson";
import ParentTryout from "../components/ParentTryout";
import CoachLesson from "../components/CoachLesson";
import CoachTryout from "../components/CoachTryout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/parentcomp",
    name: "parentpn",
    component: ParentComp,
  },
  {
    path: "/coachcomp",
    name: "coachcomp",
    component: CoachComp,
  },
  {
    path: "/parentlesson",
    name: "parentlesson",
    component: ParentLesson,
  },
  {
    path: "/parenttryout",
    name: "parenttryout",
    component: ParentTryout,
  },
  {
    path: "/coachlesson",
    name: "coachlesson",
    component: CoachLesson,
  },
  {
    path: "/coachtryout",
    name: "coachtryout",
    component: CoachTryout,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
