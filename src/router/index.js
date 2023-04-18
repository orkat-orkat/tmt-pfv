import { createRouter, createWebHistory } from 'vue-router'
import About from '../pages/About.vue';
import Pjt1 from '../components/Pjt1.vue';
import Home from '../components/Home.vue';
import MainInput from '../components/MainInput.vue'


const router = createRouter({
    history: createWebHistory(),

 routes:[
  {
   path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/Pjt1',
    name: 'Pjt1',
    component: Pjt1
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
   path: '/MainInput',
    name: 'Main',
    component: MainInput
  }
]   
})



export default router