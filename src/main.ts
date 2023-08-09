import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setupThemeAndComponents } from 'kbfmf-libraries-beta-2';
import 'kbfmf-libraries-beta-2/dist/style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

setupThemeAndComponents(app, {ssr:false});
app.mount('#app')
