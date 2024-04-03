import { createApp } from 'vue'
/*
    Element Plus
    please refer to https://element-plus.org/en-US/
*/
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'  //Element Plus icons
import './style.css'
import router from './router/index'
import App from './App.vue'

const app = createApp(App)

//use icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus)
app.use(router)

app.mount('#app')
