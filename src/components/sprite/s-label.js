import getBaseSpriteMixin from '../../util/getBaseSpriteMixin'

const mixin = getBaseSpriteMixin('Label')

export default {
  mixins: [mixin],
  name: 's-label',
  render (h) {
    const text = getChildrenTextContent(this.$slots.default)
    text && this.spriteElem.attr('text', text)
    return h('span', { attrs: { id: this.id } }, text)
  }
}

// SEE https://cn.vuejs.org/v2/guide/render-function.html#%E5%AE%8C%E6%95%B4%E7%A4%BA%E4%BE%8B
function getChildrenTextContent (children = '') {
  return !Array.isArray(children) ? String(children) : children
    .map(function (node) {
      return node.children ? getChildrenTextContent(node.children) : node.text
    })
    .join('')
}
