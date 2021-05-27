import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '../views/TodoList.vue'
import UpComingTask from '../views/UpComingTask.vue'
import AllDayTask from '../views/AllDayTask.vue'
import CheckingTask from '../views/CheckingTask.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/todolist',
    name: 'TodoList',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/TodoList.vue')
    }
  },
  {
    path: '/upcomingtask',
    name: 'UpComingTask',
    component: UpComingTask,
  },
  {
    path: '/alldaytask',
    name: 'AllDayTask',
    component: AllDayTask,
  },
  {
    path: '/checkingTask',
    name: 'CheckingTask',
    component: CheckingTask,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
