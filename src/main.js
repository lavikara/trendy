import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/Index'

import './assets/styles/tailwind/tailwind.css'
import './assets/styles/main.scss'

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
