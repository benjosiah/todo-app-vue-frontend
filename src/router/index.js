import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todos'
import Login from '@/components/login'
import Register from '@/components/register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todo',
      component: Todo,
      meta:{requiresAuth: true}
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{requiresvisitor: true}
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta:{requiresvisitor: true}
    }
  ],
  mode:'history'
})
