import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/newuser',
        name: 'newuser',
        component: () => import('./views/NewUser.vue')
      },
      {
        path: '/edituser',
        name: 'edituser',
        component: () => import('./views/EditUser.vue')
      },
      {
        path: '/paymentintent',
        name: 'paymentintent',
        component: () => import('./views/PaymentIntent.vue')
      },
      {
        path: '/datostarjeta',
        name: 'datostarjeta',
        component: () => import('./views/DatosTarjeta.vue')
      },
      {
        path: '/subirarchivo',
        name: 'subirarchivo',
        component: () => import('./views/SubirArchivos.vue')
      },
    ]
  })

  