import { createApp } from 'vue'
import App from './App'
import  { WebGLRenderer } from 'three'

createApp(App).use(WebGLRenderer).mount('#app');

