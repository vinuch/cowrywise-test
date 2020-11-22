import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'

Vue.use(VueRouter)

const routes = [
  { name: 'Home', path: '/', component: Home },
  { path: '/search', component: Home },
]

const router = new VueRouter({
  mode: "history",
  routes // short for `routes: routes`
})

export default router;