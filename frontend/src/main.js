import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes';
import { appAxios } from './api'

const app = createApp(App);

app.use(router);
app.config.globalProperties.$appAxios = appAxios
app.config.globalProperties.$uploadUrl = 'http://localhost:3000/uploads'
app.mount('#app')