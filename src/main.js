import Vue from 'vue';
import Notifications from 'vue-notification';
import VuePortal from 'portal-vue';

import App from './App.vue';
import './font-awesome';
import './vue-bootstrap';

import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VuePortal);
Vue.use(Notifications);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
