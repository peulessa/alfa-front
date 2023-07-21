const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  {
    path: "/painel",
    component: () => import("layouts/PainelLayout.vue"),
    meta: { requiresAuth: true },
    children: [{ path: "", component: () => import("pages/PainelPage.vue") }],

    beforeEnter: (to, from, next) => {
      const authToken = localStorage.getItem("authToken");
      if (authToken) {
        next();
      } else {
        next("/");
      }
    },
  },

  {
    path: "/modulos",
    component: () => import("layouts/PainelLayout.vue"),
    children: [{ path: "", component: () => import("pages/ModulosPage.vue") }],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
