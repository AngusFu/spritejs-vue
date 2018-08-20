---
title: 'Events'
route: /event
index: 5
---

# Sprite

```html
<template lang="pug">
s-scene(:style="sceneStyle")
  s-layer(@mousemove="onmousemove")
    s-sprite(
      ref="square"
      :attrs="square"
      @mouseenter="onmouseenter"
      @mouseleave="onmouseleave"
    )
    s-path(:attrs="anchorCross" ref="anchorCross")
    s-label(:attrs="label" ref="label")
</template>

<script>
export default {
  data () {
    return {
      sceneStyle: {
        width: '100%',
        'padding-bottom': '39%'
      },
      square: {
        anchor: [0.5, 0.5],
        pos: [770, 300],
        size: [300, 300],
        rotate: 45,
        bgcolor: '#3c7'
      },
      anchorCross: {
        d: 'M0,10H10,20M10,0V10,20',
        anchor: [0.5, 0.5],
        pos: [770, 300],
        strokeColor: 'red',
        rotate: 45,
        lineWidth: 4
      },
      label: {
        text: '鼠标位置：',
        pos: [20, 50],
        font: '32px Arial',
        lineHeight: 56
      }
    }
  },
  methods: {
    onmousemove (event) {
      const { targetSprites, x = 0, y = 0 } = event

      this.label.text = `鼠标位置：\n相对于 layer: ${Math.round(x)}, ${Math.round(y)}`
      const { square } = this.$spritesRefs

      if (targetSprites.length && targetSprites.includes(square)) {
        const [offsetX, offsetY] = square.pointToOffset(x, y).map(Math.round)
        this.label.text += `\n相对于元素：${offsetX}, ${offsetY}`
      }
    },
    onmouseenter (e) {
      this.$set(this.square, 'border', [4, 'blue'])
    },
    onmouseleave (e) {
      this.$set(this.square, 'border', [0, ''])
    }
  }
}

</script>
```


```html
<template lang="pug">
s-scene(:style="sceneStyle")
  s-layer(@mousemove="onlayermousemove")
    s-sprite(
      ref="square"
      :attrs="square"
      @mousemove="onmousemove"
      @mouseenter="onmouseenter"
      @mouseleave="onmouseleave"
    )
    s-path(:attrs="anchorCross" ref="anchorCross")
    s-label(:attrs="label" ref="label")
</template>

<script>
export default {
  data () {
    return {
      sceneStyle: {
        width: '100%',
        'padding-bottom': '39%'
      },
      square: {
        anchor: [0.5, 0.5],
        pos: [770, 300],
        size: [300, 300],
        rotate: 45,
        bgcolor: '#3c7'
      },
      anchorCross: {
        d: 'M0,10H10,20M10,0V10,20',
        anchor: [0.5, 0.5],
        pos: [770, 300],
        strokeColor: 'red',
        rotate: 45,
        lineWidth: 4
      },
      label: {
        text: '鼠标位置：',
        pos: [20, 50],
        font: '32px Arial',
        lineHeight: 56
      }
    }
  },
  methods: {
    onlayermousemove ({ x, y }) {
      console.log('2222')
      this.label.text = `鼠标位置：\n相对于 layer: ${Math.round(x)}, ${Math.round(y)}`
    },
    onmousemove (event) {
      const {x, y, offsetX, offsetY} = event
      this.label.text = `鼠标位置：\n相对于 layer: ${Math.round(x)}, ${Math.round(y)}\n相对于元素：${Math.round(offsetX)}, ${Math.round(offsetY)}`
      event.stopDispatch()
    },
    onmouseenter (e) {
      this.$set(this.square, 'border', [4, 'blue'])
    },
    onmouseleave (e) {
      this.$set(this.square, 'border', [0, ''])
    }
  }
}

</script>
```

```html
<template lang="pug">
s-scene(:style="sceneStyle")
  s-layer(@mousemove="onlayermousemove")
    s-sprite(:attrs="s1" ref="s1")
    s-sprite(:attrs="s2" ref="s2")
    s-sprite(:attrs="s3" ref="s3")
</template>

<script>
export default {
  data () {
    return {
      sceneStyle: {
        width: '100%',
        'padding-bottom': '39%',
        cursor: 'default'
      },
      s1: {
        anchor: [0.5, 0.5],
        pos: [770, 300],
        size: [200, 200],
        rotate: 45,
        bgcolor: '#3c7'
      },
      s2: {
        anchor: [0.5, 0.5],
        pos: [270, 300],
        size: [200, 200],
        bgcolor: '#c37'
      },
      s3: {
        anchor: [0.5, 0.5],
        pos: [1270, 300],
        size: [200, 200],
        bgcolor: '#73c'
      }
    }
  },
  methods: {
    onlayermousemove (evt) {
      if (evt.targetSprites.some(target => target.isDraggable)) {
        this.sceneStyle.cursor = 'move'
      } else {
        this.sceneStyle.cursor = 'default'
      }
    }
  },
  mounted () {
    const { s1, s2, s3 } = this.$spritesRefs;
    [s1, s2, s3].map(draggable)
  }
}

let zIndex = 1
function draggable (sprite) {
  if (sprite.isDraggable) return

  sprite.isDraggable = true

  let x0, y0, startPos

  function onMouseMove (evt) {
    const dx = evt.x - x0,
      dy = evt.y - y0

    sprite.attr('pos', [startPos[0] + dx, startPos[1] + dy])
    evt.stopDispatch()
  }

  sprite.on('mouseenter', (evt) => {
    sprite.attr('border', {width: 6, color: 'blue'})
  })
  sprite.on('mouseleave', (evt) => {
    sprite.attr('border', {width: 0})
  })

  sprite.on('mousedown', (evt) => {
    x0 = evt.x
    y0 = evt.y
    startPos = sprite.attr('pos')
    sprite.attr('zIndex', zIndex++)
    sprite.off('mousemove', onMouseMove)
    sprite.setMouseCapture()
    sprite.on('mousemove', onMouseMove)
    evt.stopDispatch()
  }).on('mouseup', (evt) => {
    sprite.off('mousemove', onMouseMove)
    sprite.releaseMouseCapture()
  })

  return sprite
}

</script>
```
