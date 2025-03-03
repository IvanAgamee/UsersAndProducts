const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },

      // Rutas de productos
      { path: 'products', component: () => import('pages/products/IndexPage.vue'), name: 'productsTable' }, // Listado de productos
      { path: 'product/:id', component: () => import('src/pages/products/ProductDetail.vue'), name: 'productDetail' }, // Detalle de UN producto
      { path: 'product/create', component: () => import('src/pages/products/AddProduct.vue'), name: 'addProduct' }, // Agregar un producto

      // Rutas de usuarios
      { path: 'users', component: () => import('src/pages/users/indexPage.vue'), name: 'usersTable'  },
      { path: 'user/:id', component: () => import('src/pages/users/UserDetail.vue'), name: 'userDetail'  }, // Detalle de UN usuario
      { path: 'user/create', component: () => import('src/pages/users/AddUser.vue'), name: 'addUser' },
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
