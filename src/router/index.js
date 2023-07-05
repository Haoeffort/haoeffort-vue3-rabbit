import { createRouter, createWebHistory } from "vue-router";
const Login = () => import("@/views/Login/index.vue");
const Layout = () => import("@/views/Layout/index.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/home/index.vue"),
        },
        {
          path: 'category',
          component: () => import("@/views/category/index.vue"),
        }
      ]
    },
    {
      path: "/login",
      component: Login,
    },
  ],
});

export default router;
