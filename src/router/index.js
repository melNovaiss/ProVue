import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/clientes",
    name: "clientes",
    component: () => import("../views/ClientesView.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/funcionarios",
    name: "funcionarios",
    component: () => import("../views/ClientesView.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/login/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("user");

  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login");
    alert("Faça o login para acessar a página.");
  } else {
    next();
  }
});

export default router;
