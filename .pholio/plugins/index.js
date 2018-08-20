import SpriteVue from '../../src'
import '../styles/theme.css'
import '../styles/index.css'

export default {
  install (Vue) {
    Vue.use(SpriteVue, { spritejs: window.spritejs })
  }
}
