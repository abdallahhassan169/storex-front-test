import { createApp, VueElement } from 'vue'
import App from './App.vue'
import Navbar from './views/Navbar.vue'


import router from './router'


const app = createApp(App)
app.component('navbar',Navbar);

app.use(router)

app.mount('#app')
