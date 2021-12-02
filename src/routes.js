import Home from "./views/Home.vue";
import People from "./views/People.vue";
import Me from "./views/Me.vue";
import NotFound from "./views/NotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home, meta: { title: "Home" } },
  {
    path: "/people",
    meta: { title: "People" },
    component: People,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: "/me",
    meta: { title: "Me" },
    component: Me,
  },
  { path: "/:path(.*)", component: NotFound },
];
