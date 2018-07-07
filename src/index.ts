import Vue from 'vue';
import VueRouter from 'vue-router';
import Information from './components/information/Information';
import Menu from './components/menu/Menu';
import router from './router/index';
import store from './store/index';

Vue.use(VueRouter);

new Vue({
  store,
  router,
  components: {
    Menu,
    Information,
  },
  template: `
    <div id="app">
      <Information id="header"/>
      <Menu id="aside"/>
      <div id="main">
        <router-view class="view"></router-view>
      </div>
    </div>
  `,
  // mounted: () => {
  // },
}).$mount('#app');
