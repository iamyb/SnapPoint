import DefaultTheme from 'vitepress/theme'
import './custom.css'
import SnapButtonPreview from './components/SnapButtonPreview.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('SnapButtonPreview', SnapButtonPreview)
  }
}
