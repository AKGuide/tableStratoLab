import Vue from 'vue';
import Router from 'vue-router';
import FormAuth from './components/Auth/FormAuth.vue';
import Zeplin from './components/Zeplin/Zeplin.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: FormAuth,
      meta: { layout: 'auth' },
    },
    {
      path: '/home',
      name: 'home',
      component: Zeplin,
      meta: { layout: 'zeplin' },
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
