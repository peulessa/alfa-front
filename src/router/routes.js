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
    children: [
      { path: "", component: () => import("pages/PainelPage.vue") },
      { path: "/modulos", component: () => import("pages/ModulosPage.vue") },
      {
        path: "/gerenciar",
        component: () => import("pages/GerenciarModulosPage.vue"),
      },
    ],

    beforeEnter: (to, from, next) => {
      const authToken = sessionStorage.getItem("authToken");
      if (authToken) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
