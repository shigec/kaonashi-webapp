import Sample from '../components/sample/Sample';
import VueRouter from 'vue-router';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/sample',
      component: Sample
    },
    {
      path: '*',
      redirect: '/sample'
    }
  ]
});

export default router;