import { createApp } from 'vue'
import './style.css'
//@ts-ignore
import App from './App.vue'

import { createRouter , createWebHistory} from 'vue-router'
//@ts-ignore
import { routes } from './routes'

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
  .use(router)
  .mount('#app')
