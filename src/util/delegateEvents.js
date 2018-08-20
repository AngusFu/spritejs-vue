export function delegate (vueInst) {
  const events = Object.keys(vueInst.$listeners)
  events.forEach(event => {
    vueInst.spriteElem.on(event, e => vueInst.$emit(event, e))
  })
}

export function undelegate (vueInst) {
  vueInst.spriteElem.off()
}
