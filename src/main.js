// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {store} from './store/store'

window.eventBus = new Vue()


Vue.config.productionTip = false
router.beforeEach((to, from, next)=>{
  if(to.matched.some(records=> records.meta.requiresAuth)){
    if (!store.getters.LoggedIn) {
      next({
        name: 'login'
      })
    }else{
      next()
    }
    
  }else if(to.matched.some(records=> records.meta.requiresvisitor)){
    if (store.getters.LoggedIn) {
      next({
        name: 'todo'
      })
    }else{
      next()
    }
  }else{
    next()
  }
  
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
