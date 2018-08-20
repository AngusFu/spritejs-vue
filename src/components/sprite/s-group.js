
import getBaseSpriteMixin from '../../util/getBaseSpriteMixin'

export default {
  name: 's-group',
  mixins: [getBaseSpriteMixin('Group')],
  provide () {
    return {
      $layer: { spriteElem: this.spriteElem }
    }
  }
}
