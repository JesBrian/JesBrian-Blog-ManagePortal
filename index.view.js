
// 引入 Vue
import Vue from 'vue';

// 引入 VueRouter
import router from './src/router';

// 引入 Vuex
import store from './src/store';

// 引入 App 根组件
import App from './src/App.vue';

import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  error: import('@/assets/image/loading.svg'),
  loading: import('@/assets/image/loading.svg')
});

import PageLink from './src/components/PageLink/PageLink.vue';
Vue.component('page-link', PageLink);

import JesButton from './src/components/JesButton/JesButton.vue';
Vue.component('jes-button', JesButton);

new Vue({
  router,
  store,
  data: {
    eventHub: new Vue()
  },
  render: h => h(App),
}).$mount('#app');
