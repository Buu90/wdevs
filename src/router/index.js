import Vue from 'vue'
import VueRouter from 'vue-router'
import Scheme from '../components/scheme/index-scheme.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Scheme',
    component: Scheme
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
