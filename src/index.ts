import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router/index';
import store from './store/index';
import Menu from './components/menu/Menu';
import Information from './components/information/Information';

Vue.use(VueRouter);

new Vue({
  store,
  router,
  components: {
    Menu,
    Information
  },
  template: `
    <div id="app">
      <Information id="information"/>
      <Menu id="menu"/>
      <div id="main">
        <router-view class="view"></router-view>
      </div>
    </div>
  `,
  mounted: () => {
  }
}).$mount('#app')