import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  // 映射关系：path -> component
  routes: [
    {
      path: "/",
      redirect: "tik-tool"
    },
    {
      path: "/tik-tool",
      // 懒加载
      component: () => import("@/views/tik-tool/tik-tool.vue")
    },
    {
      path: "/other",
      component: () => import("@/views/other/other.vue")
    }
  ]
})

export default router