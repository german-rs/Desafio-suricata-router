import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'modern-normalize/modern-normalize.css';
import './style.css'

createApp(App).use(router).mount('#app')
