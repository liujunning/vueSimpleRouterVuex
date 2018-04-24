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

// router.beforeEach( (to,from,next)=>{
//   let newrouter;
//   newrouter = powerRouter;
 
//   router.addRoutes(newrouter)
//   console.log(newrouter)
//   console.log(router)
//   next()

// } )

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
