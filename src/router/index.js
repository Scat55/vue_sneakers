import { createRouter, createWebHistory } from 'vue-router';
import appStore from '../components/appStore';
import appCart from '../components/appCart';

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: appStore,
  },
  {
    path: '/cart',
    name: 'cart',
    component: appCart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
