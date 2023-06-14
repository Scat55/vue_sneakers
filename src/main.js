import { createApp } from 'vue';
import App from './App.vue';
import store from './vuex/store.js';
import styles from './assets/styles/styles.scss';
import router from './router';

createApp(App).use(router).use(store).mount('#app');
