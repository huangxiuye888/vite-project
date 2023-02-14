import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { SketchRule } from 'vue3-sketch-ruler'
import 'vue3-sketch-ruler/lib/style.css'
const app = createApp(App)
app.use(store).use(router).use(ElementPlus).component('SketchRule', SketchRule).mount('#app')
