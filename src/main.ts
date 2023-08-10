import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setupThemesAndComponents } from 'kbfmf-libraries-beta'
import 'kbfmf-libraries-beta/dist/style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const DSLThemeConfig = {
  ssr: false,
}

setupThemesAndComponents(app, DSLThemeConfig)
app.mount('#app')
