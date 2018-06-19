import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router/index';
import store from './store/index';

Vue.use(VueRouter);

new Vue({
  store,
  router,
  template: `
    <div id="app">
      <router-view class="view"></router-view>
    </div>
  `,
  mounted: () => {
  }
}).$mount('#app')