import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import FoodMenuOverview from '../components/FoodMenuOverview.vue';
import FoodGroup from '../components/FoodGroup.vue';
import FoodItem from '../components/FoodItem.vue';
import UserAccount from '../components/UserAccount.vue';
import AboutUs from '../components/AboutUs.vue';
import Gallery from '../components/PhotoGallery.vue';

const routes = [
  { path: '/', component: HomePage },
  {path:'/gallery', component: Gallery},
  { path: '/menu', name: 'FoodMenuOverview', component: FoodMenuOverview },
  { path: '/menu/:groupName', name: 'FoodGroup', component: FoodGroup },
  { path: '/menu/:groupName/:itemName', name: 'FoodItem', component: FoodItem },
  { path: '/account', component: UserAccount },
  { path: '/about', component: AboutUs }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
