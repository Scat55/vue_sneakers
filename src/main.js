import { createApp } from 'vue';
import App from './App.vue';
import store from './vuex/store.js';
import styles from './assets/styles/styles.scss';

createApp(App).use(store).mount('#app');
