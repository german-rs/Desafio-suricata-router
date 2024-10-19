import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductosView.vue'),
    props: () => {
      return{
        rutaImagen: '/desayunos.jpg',
        titulo: 'Desayunos',
        descripcion: 'Contamos con desayunos nutritivos y deliciosos.',
        precio: '$2000',
        cantidad: 'Para dos personas'
      }
    } 
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
