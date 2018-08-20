import cloneDeep from 'lodash/cloneDeep'

let spritejs = {}
let queue = []
let initialized = false

export function registerSpritejsInterfaces (obj) {
  if (!initialized) {
    initialized = true
    spritejs = obj
    queue.forEach(pool => pool.init())
    queue = null
  }
}

export default class ObjectPool {
  constructor ({ limit, type }) {
    this.type = type
    this.maxCount = limit

    if (initialized) {
      this.init()
    } else {
      queue.push(this)
    }
  }

  init () {
    const Type = spritejs[this.type]
    const pool = [new Type()]
    this.Ctor = Type
    this.pool = pool
    this.defautls = cloneDeep(pool[0].attr())
  }

  get defaultAttrs () {
    return cloneDeep(this.defautls)
  }

  getInstance () {
    const { Ctor, pool } = this
    // return pool.length ? pool.pop() : new Ctor()
    return pool.length
      ? Ctor.call(pool.pop()) // reset attrs
      : new Ctor()
  }

  recycle (inst) {
    inst.remove()
    const { pool, maxCount } = this
    pool.push(inst)
    // inst.attr(this.defaultAttrs)
    if (pool.length > maxCount) {
      pool.splice(0, pool.length - maxCount)
    }
  }
}
