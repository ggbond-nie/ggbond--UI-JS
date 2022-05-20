import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GUI from '../packages/index'
const app = createApp(App)
app.use(router).use(GUI)

app.mount('#app')
