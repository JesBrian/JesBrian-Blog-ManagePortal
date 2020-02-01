
// 引入 Vue
import Vue from 'vue';

// 引入 VueRouter
import router from './src/router';

// 引入 Vuex
import store from './src/store';

// 引入 App 根组件
import App from './App.vue';

new Vue({
  router,
  store,
  data: {
    eventHub: new Vue()
  },
  render: h => h(App),
}).$mount('#app');
