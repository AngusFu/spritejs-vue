
import getBaseSpriteMixin from '../../util/getBaseSpriteMixin'

export default {
  name: 's-group',
  mixins: [getBaseSpriteMixin('Group')],
  provide () {
    return {
      $layer: { s__elem: this.s__elem }
    }
  }
}
