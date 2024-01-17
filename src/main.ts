import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primeicons/primeicons.css'
import './styles/global.css'
import './styles/typography.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.mount('#app')
