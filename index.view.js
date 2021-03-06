
// 引入 Vue
import Vue from 'vue';

// 引入 VueRouter
import router from './src/router';

// 引入 Vuex
import store from './src/store';

// 引入 axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

// 引入 localForage
import localForage from 'localforage';
Vue.prototype.$localForage = localForage;

// 引入 VueLazyload
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  error: import('@/assets/image/loading.svg'),
  loading: import('@/assets/image/loading.svg')
});

import PageLink from './src/components/PageLink/PageLink.vue';
Vue.component('page-link', PageLink);

import JesNotification from './src/components/JesNotification/JesNotification.vue';
Vue.component('jes-notification', JesNotification);

import JesButton from './src/components/JesButton/JesButton.vue';
Vue.component('jes-button', JesButton);


// 引入 App 根组件
import App from './src/App.vue';

new Vue({
  router,
  store,
  data: {
    eventHub: new Vue()
  },
  render: h => h(App),
}).$mount('#app');
