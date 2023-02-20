const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: 'signin',
        name: 'signin',
        component: () => import('pages/auth/SignIn.vue'),
      },
    ],
  },
  {
    path: '/',
    name: 'main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('pages/Dashboard.vue'),
        children: [
          {
            path: '/table/success',
            name: 'table-success',
            component: () => import('pages/table/Success.vue')
          },
          {
            path: '/table/failure',
            name: 'table-failure',
            component: () => import('pages/table/Failure.vue')
          },
        ]
      },


      // Always leave this as last one,
      // but you can also remove it
      {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
      },
    ],
  },
];

export default routes;
