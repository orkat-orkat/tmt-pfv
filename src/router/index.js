import { createRouter, createWebHistory } from 'vue-router'
//import About from '../pages/About.vue';
//import Pjt1 from '../components/Pjt1.vue';
//import MainInput from '../components/MainInput.vue'
// const routes = [
 // {
//    path: '/',
//    name: 'About',
//    component: About
//  },
//  {
//    path: '../components/Pjt1',
//    name: 'Pjt1',
//    component: Pjt1
//  },
//  {
//    path: '../components/MainInput',
//    name: 'Main',
//    component: MainInput
//  }
//] 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router