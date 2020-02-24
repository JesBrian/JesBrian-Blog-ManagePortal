import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('../views/Pages/IndexPage/IndexPage.vue')
    },
    {
      path: '/edit/:id',
      component: () => import('../views/Pages/EditPage/EditPage.vue')
    },


    {
      path: '*',
      component: () => import('../views/Pages/ErrorPage/ErrorPage.vue')
    }
  ]
})
