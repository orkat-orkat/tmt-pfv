import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router) //routerをアプリケーション全体で使えるようにする
app.mount('#app')
//createApp(App).use(router).mount('#app')