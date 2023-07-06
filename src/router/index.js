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
          path: "category/:id", // :id 动态接受分类id参数
          name: "category",
          component: () =>
            import("@/views/category/index.vue"),
        },
        {
          path: "category/sub/:id",
          name: "sub",
          component: () =>
            import("@/views/SubCategory/index.vue"),
        },
      ],
    },
    {
      path: "/login",
      component: Login,
    },
  ],
  // 切换不同路由的时候，自动滚到顶部
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;