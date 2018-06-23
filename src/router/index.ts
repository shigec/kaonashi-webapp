import VueRouter from 'vue-router';
import Dashboard from '../components/dashboard/Dashboard';
import Members from '../components/members/Members';
import Projects from '../components/projects/Projects';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      component: Dashboard
    },
    {
      path: '/members',
      component: Members
    },
    {
      path: '/projects',
      component: Projects
    },
    {
      path: '*',
      redirect: '/dashboard'
    }
  ]
});

export default router;