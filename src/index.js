import Scene from './components/s-scene'
import Layer from './components/s-layer'
import Group from './components/sprite/s-group'
import Sprite from './components/sprite/s-sprite'
import Label from './components/sprite/s-label'
import Path from './components/sprite/s-path'

import { registerSpritejsInterfaces } from './util/ObjectPool'

export default {
  install (Vue, options) {
    options = options || {}

    if (!options.spritejs && typeof window !== 'undefined') {
      options.spritejs = window.spritejs
    }

    registerSpritejsInterfaces(options.spritejs)
    Object.defineProperty(Vue.prototype, '$spritejs', {
      value: options.spritejs,
      configurable: false,
      writable: false,
      enumerable: false
    })

    const comps = [
      Scene,
      Layer,
      Group,
      Sprite,
      Label,
      Path
    ]

    if (options.globalSpriteRefMixin) {
      Vue.mixin(spriteRefMixin)
    }

    comps.forEach(comp => {
      Vue.component(comp.name, comp)
    })
  }
}

const spriteRefMixin = {
  computed: {
    $spritesRefs () {
      const obj = {}
      const { $refs } = this
      const props = Object.keys($refs).reduce((acc, key) => {
        acc[key] = {
          get () {
            const ref = $refs[key]
            if (ref && ref.spriteElem) {
              return ref.spriteElem
            }
            return null
          }
        }
        return acc
      }, {})

      return Object.defineProperties(obj, props)
    }
  }
}
