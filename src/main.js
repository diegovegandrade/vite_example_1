import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './plugins/router'
import 'add-to-calendar-button';


createApp(App).use(router).mount('#app')
