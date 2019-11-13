import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from "../components/TodoListColomn1";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: TodoList
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/TodoListColomn1.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
