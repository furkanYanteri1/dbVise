import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'


createApp(App).use(store,axios).mount('#app')
