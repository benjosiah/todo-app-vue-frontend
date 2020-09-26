import Vue from 'vue'
import Router from 'vue-router'
import {store} from '../store/store'
import Todo from '@/components/Todos'
import Login from '@/components/login'
import Register from '@/components/register'
Vue.use(Router)
const router = new Router({
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
router.beforeEach((to, from, next)=>{
  if(to.matched.some(records=> records.meta.requiresAuth)){
    if (store.state.token===null) {
      next('/login')
    }else{
      next()
    }
    
  }
  else if(to.matched.some(records=> records.meta.requiresvisitor)){
    if (store.state.token!==null) {
      next('/')
    }else{
      next()
    }
  }
  
})

export default router
