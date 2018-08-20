import { ResizeObserver } from 'vue-resize'
import staticStyle from './static-style'

export default {
  name: 's-scene',
  components: { ResizeObserver },
  props: {},
  provide () {
    return {
      $paper: this
    }
  },
  data () {
    return { spriteElem: null }
  },
  methods: {
    handleResize () {
      this.spriteElem.updateViewport()
    }
  },
  render (h) {
    return h('div', { staticClass: 'spritejs-scene' }, [
      h('resize-observer', { staticStyle, onNotify: this.handleResize }),
      this.$slots.default
    ])
  },
  mounted () {
    const { Scene } = this.$spritejs
    this.spriteElem = new Scene(this.$el, {
      viewport: ['auto', 'auto'],
      resolution: [1520, 600]
    })
  },
  destroyed () {
    this.spriteElem.off()
    this.spriteElem = null
  }
}
