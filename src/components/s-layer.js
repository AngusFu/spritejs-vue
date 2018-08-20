export default {
  name: 's-layer',
  props: {
    id: String,
    config: {
      type: Object,
      default () {
        return {}
      }
    },
    layerStyle: {
      type: [Object, String]
    }
  },
  inject: ['$paper'],

  provide () {
    return {
      $layer: this
    }
  },

  data () {
    return {
      s__elem: null
    }
  },

  watch: {
    '$paper.s__elem': {
      handler (newScene, oldScene) {
        if (newScene && newScene !== oldScene) {
          this.destoryLayer()
          this.scene = newScene
          this.reInit()
        }
      },
      immediate: true
    },

    layerStyle: {
      deep: true,
      handler () {
        this.updateCanvas()
      }
    },

    config: {
      deep: true,
      handler (newVal) {
        const { layer } = this
        if (layer) {
          Object.assign(layer, newVal)
        }
      }
    },

    id () {
      this.destoryLayer()
      this.reInit()
    }
  },

  render (h) {
    return h('div', { attrs: { id: this.id } }, this.$slots.default)
  },

  methods: {
    reInit () {
      this.s__elem = this.scene.layer(this.id, this.config)
      this.updateCanvas()
    },
    destoryLayer () {
      const { scene, s__elem } = this
      if (scene && s__elem) {
        scene.removeLayer(s__elem)
        this.s__elem = null
      }
    },
    updateCanvas () {
      const { s__elem, layerStyle } = this

      if (s__elem && s__elem.canvas) {
        if (typeof layerStyle === 'string') {
          s__elem.canvas.style.cssText += layerStyle
        } else {
          Object.assign(s__elem.canvas.style, layerStyle)
        }
      }
    }
  },

  destroyed () {
    const { scene, s__elem } = this
    scene.removeChild(s__elem)
  }
}
