import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createKPThemes } from 'kbfmf-libraries-beta'
import 'kbfmf-libraries-beta/dist/style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const KPThemesConfig = {
  ssr: false,
}

app.use(createPinia())
app.use(router)
createKPThemes(app, KPThemesConfig)
app.mount('#app')

