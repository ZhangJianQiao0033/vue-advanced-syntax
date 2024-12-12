import { createApp } from 'vue'
import App from './04_动画过渡/01_transition动画过渡.vue'
import directives from './01_自定义指令/directives'

const app = createApp(App)
app.use(directives)

app.mount('#app')
