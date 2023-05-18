import './bootstrap';


import { createApp } from 'vue';
//importar layouts

// import app from './layouts/App.vue';
 import home from './layouts/Home.vue';
 import contacto from './layouts/Contacto.vue';

//  createApp(home).mount('#app');
const app = createApp({
    el:'#app'
})
 //Intalar vue vite
 //npm install vue@next vue-load@next