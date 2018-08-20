import cloneDeep from 'lodash/cloneDeep'
import ObjectPool from './ObjectPool'

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
      s__elem: objectPool.getInstance()
    }
  },

  watch: {
    '$layer.s__elem': {
      handler (newLayer, oldLayer) {
        if (newLayer && newLayer !== oldLayer) {
          this.layer = newLayer
          oldLayer && oldLayer.removeChild(this.s__elem)
          newLayer.append(this.s__elem)
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
      this.s__elem.attr(cloneDeep(attrs))
    },
    animate (...args) {
      this.anims = this.anims || []
      this.anims.push(this.s__elem.animate(...args))
    }
  },

  render (h) {
    return h('div', { attrs: { id: this.id } }, this.$slots.default)
  },

  destroyed () {
    if (this.anims) {
      this.anims.forEach(ani => {
        ani.cancel()
      })
    }

    this.objectPool.recycle(this.s__elem)
    this.s__elem = null
    this.anims = null
  }
})
