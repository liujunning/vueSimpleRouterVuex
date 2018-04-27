// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import { powerRouter } from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false;

router.beforeEach((to,from,next)=>{
  if(store.getters.role){
    if(store.getters.newrouter.length!==0){
      next()
    }else{
      let newrouter;
      if(store.getters.role == 'A'){
        newrouter = powerRouter
      }else{
        let newchildren = powerRouter[0].children.filter(route=>{
          if(route.meta){
            if(route.meta.role == store.getters.role){
              return true
            }
            return false
          }else{
            return true
          }
        });
        newrouter = powerRouter;
        newrouter[0].children = newchildren;
      }
      router.addRoutes(newrouter);
      store.dispatch('Roles',newrouter).then(res=>{
        next({...to})
      }).catch(()=>{

      })
     // router.addRoutes(newrouter)
      next()
    }
   
  }else{
    if(['/login'].indexOf(to.path)!==-1){
      next()
    }else{
      //next() 
      next('/login')
    }
    
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




