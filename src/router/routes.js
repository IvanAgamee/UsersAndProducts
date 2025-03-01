const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },

      // Rutas de productos
      { path: 'products', component: () => import('pages/products/IndexPage.vue') }, // Table de usuarios
      { path: 'product/:id', component: () => import('src/pages/products/ProductDetail.vue') }, // Detalle de UN usuario

      // Rutas de usuarios
      { path: 'users', component: () => import('pages/users/indexPage.vue') },
      { path: 'user/:id', component: () => import('src/pages/users/UserDetail.vue') }, // Detalle de UN usuario
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
