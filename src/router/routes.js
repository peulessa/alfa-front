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
        path: "/gerenciarmodulos",
        component: () => import("pages/GerenciarModulosPage.vue"),
      },
      {
        path: "/adicionar-aluno",
        component: () => import("pages/AdicionarAlunoPage.vue"),
      },
      {
        path: "/adicionar-modulo",
        component: () => import("pages/AdicionarModuloPage.vue"),
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
