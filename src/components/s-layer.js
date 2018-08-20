import staticStyle from './static-style'
import * as Events from '../util/delegateEvents'

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
      spriteElem: null
    }
  },

  watch: {
    '$paper.spriteElem': {
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

  methods: {
    reInit () {
      this.spriteElem = this.scene.layer(this.id, this.config)
      Events.delegate(this)
      this.updateCanvas()
    },

    destoryLayer () {
      const { scene, spriteElem } = this
      if (scene && spriteElem) {
        Events.undelegate(this)
        scene.removeLayer(spriteElem)
        this.spriteElem = null
      }
    },

    updateCanvas () {
      const { spriteElem, layerStyle } = this

      if (spriteElem && spriteElem.canvas) {
        if (typeof layerStyle === 'string') {
          spriteElem.canvas.style.cssText += layerStyle
        } else {
          Object.assign(spriteElem.canvas.style, layerStyle)
        }
      }
    }
  },

  render (h) {
    return h('div', {
      staticStyle,
      staticClass: 'spritejs-layer',
      attrs: { id: this.id }
    }, this.$slots.default)
  },

  destroyed () {
    const { scene, spriteElem } = this
    scene.removeChild(spriteElem)
    Events.undelegate(this)
  }
}
