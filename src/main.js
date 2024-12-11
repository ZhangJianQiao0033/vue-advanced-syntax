import { createApp } from 'vue'
import App from './01_自定义指令/App.vue'
import directives from './01_自定义指令/directives'

const app = createApp(App)
app.use(directives)

app.mount('#app')
