import Vue from 'vue';
import Router from 'vue-router';

// COMPONENTS
import Home from 'components/Home';
import Login from 'components/Login';
import Auth from 'components/Auth';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/',
      redirect: '/login',
    },
  ],
  mode: 'history',
});
