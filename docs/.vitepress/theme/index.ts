import Theme from 'vitepress/theme'
import './style.css'
import Test from './test.vue'

export default {
  ...Theme,
  enhanceApp(ctx: any) {
    ctx.app.component('Test', Test)
  }
}
