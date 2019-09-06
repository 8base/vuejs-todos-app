import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Callback from "./views/Callback.vue";

/**
 * Import the state for determining current auth state.
 */
import store from "@/store"
  
Vue.use(Router);

/**
 * Let's impliment router based on example: 
 *   https://scotch.io/tutorials/vue-authentication-and-route-handling-using-vue-router#toc-updating-the-vue-router-file
 */
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/profile",
      name: "profile",
      component: () =>
        import(/* webpackChunkName: "profile" */ "./views/Profile.vue"),
      // a meta field
      meta: { requiresAuth: true }
    },
    {
      path: "/auth/callback",
      name: "callback",
      component: Callback
    }
  ]
});

/**
 * Impliment router guards 
 * for protected routes.
 */
router.beforeEach((to, from, next) => {
  /* If the route requires auth */
  if (to.meta.requiresAuth) {
    store.getters.authenticated ? next() : next({ name: 'home' })
  } 
  /* If the route is public */
  else {
    next()
  }
})

export default router;
