import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todos'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todo',
      component: Todo
    }
  ],
  mode:'history'
})
