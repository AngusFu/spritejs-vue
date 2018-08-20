import cloneDeep from 'lodash/cloneDeep'
import ObjectPool from './ObjectPool'
import * as Events from './delegateEvents'

export default Ctor => ({
  props: {
    id: String,
    attrs: Object
  },
  inject: ['$layer'],

  objectPool: new ObjectPool({ limit: 20, type: Ctor }),

  data () {
    const { objectPool } = this.$options
    this.objectPool = objectPool

    return {
      layer: null,
      spriteElem: objectPool.getInstance()
    }
  },

  watch: {
    '$layer.spriteElem': {
      handler (newLayer, oldLayer) {
        if (newLayer && newLayer !== oldLayer) {
          this.layer = newLayer
          oldLayer && oldLayer.removeChild(this.spriteElem)
          newLayer.appendChild(this.spriteElem)
          this.updateAttrs(this.attrs)
        }
      },
      immediate: true
    },
    attrs: {
      deep: true,
      immediate: true,
      handler (newVal) {
        this.updateAttrs(newVal)
      }
    }
  },

  methods: {
    updateAttrs (attrs) {
      this.spriteElem.attr(cloneDeep(attrs))
    },
    animate (...args) {
      this.anims = this.anims || []
      this.anims.push(this.spriteElem.animate(...args))
    }
  },

  render (h) {
    return h('div', {
      staticClass: `spritejs-${Ctor.toLowerCase()}`,
      attrs: { id: this.id }
    }, this.$slots.default)
  },

  created () {
    Events.delegate(this)
  },

  destroyed () {
    if (this.anims) {
      this.anims.forEach(ani => {
        ani.cancel()
      })
    }

    Events.undelegate(this)
    this.objectPool.recycle(this.spriteElem)
    this.spriteElem = null
    this.anims = null
  }
})
