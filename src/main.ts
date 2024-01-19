import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/md-light-indigo/theme.css'
import './styles/global.css'
import './styles/typography.css'
import './styles/prime-button.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.mount('#app')
