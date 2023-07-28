import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import "normalize.css"
import "./assets/css/index.css"
createApp(App).use(ElementPlus).mount('#app')
