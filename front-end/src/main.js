import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'semantic-ui-css/semantic.min.css'; // Import Semantic UI CSS
import FlashMessage from '@smartweb/vue-flash-message';

Vue.config.productionTip = false;

// Use FlashMessage for alerts
Vue.use(FlashMessage);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
