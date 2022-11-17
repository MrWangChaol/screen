import {
    createApp
} from 'vue'
import './style.css'
import App from './App.vue'
import {
    createPinia
} from 'pinia'
import DataVVue3 from '@kjgl77/datav-vue3'
const app = createApp(App)
app.use(createPinia())
app.use(DataVVue3)
app.mount('#app')
