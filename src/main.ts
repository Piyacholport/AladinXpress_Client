import { createApp } from 'vue'
import { createPinia } from "pinia";
import VueCookies from 'vue-cookies';
import App from "./App.vue";
import router from "./router";
import "./assets/css/app.css";
import Vue from 'vue'




createApp(App).use(router).use(createPinia()).use(VueCookies).mount('#app')



