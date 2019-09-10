import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },

    // Styles
    {
      path: '/styles/elevation',
      name: 'elevation',
      component: () => import('./views/styles/Elevation.vue'),
    },
    {
      path: '/styles/shadow',
      name: 'shadow',
      component: () => import('./views/styles/Shadow.vue'),
    },
    {
      path: '/styles/surface',
      name: 'surface',
      component: () => import('./views/styles/Surface.vue'),
    },
    {
      path: '/styles/typography',
      name: 'typography',
      component: () => import('./views/styles/Typography.vue'),
    },

    // Components
    {
      path: '/components/button',
      name: 'button',
      component: () => import('./views/components/Button.vue'),
    },
    {
      path: '/components/divider',
      name: 'divider',
      component: () => import('./views/components/Divider.vue'),
    },
    {
      path: '/components/icon',
      name: 'icon',
      component: () => import('./views/components/Icon.vue'),
    },
    {
      path: '/components/icon-button',
      name: 'icon-button',
      component: () => import('./views/components/IconButton.vue'),
    },
    {
      path: '/components/top-app-bar',
      name: 'top-app-bar',
      component: () => import('./views/components/TopAppBar.vue'),
    },
  ],
});
