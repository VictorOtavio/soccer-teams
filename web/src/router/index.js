import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ "@/views/" + view + ".vue");
}

const routes = [
  {
    path: "/",
    name: "teams",
    component: loadView("Teams")
  },
  {
    path: "/new-team",
    name: "new-team",
    component: loadView("NewTeam")
  }
];

const router = new VueRouter({
  routes
});

export default router;
