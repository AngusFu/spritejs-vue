import { ResizeObserver } from 'vue-resize'
import 'vue-resize/dist/vue-resize.css'

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
    return { s__elem: null }
  },
  methods: {
    handleResize () {
      this.s__elem.updateViewport()
    }
  },
  render (h) {
    return h('div', { staticClass: 'spritejs-scene' }, [
      h('resize-observer', { onNotify: this.handleResize }),
      this.$slots.default
    ])
  },
  mounted () {
    const { Scene } = this.$spritejs
    this.s__elem = new Scene(this.$el, {
      viewport: ['auto', 'auto'],
      resolution: [1520, 600]
    })
  },
  destroyed () {
    this.s__elem.off()
    this.s__elem = null
  }
}
