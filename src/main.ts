import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/md-light-indigo/theme.css'
import Tooltip from 'primevue/tooltip'

import './styles/global.css'
import './styles/typography.css'
import './styles/prime-button.css'
import './styles/prime-accordion.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.directive('tooltip', Tooltip)

app.mount('#app')
