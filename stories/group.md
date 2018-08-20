---
title: 'Group'
route: /group
index: 4
---

# Group

```html
<template lang="pug">
s-scene(:style="sceneStyle" id="app")
  s-layer
    s-group(:attrs="groupAttrs" ref="group")
      s-path(
        v-for="(sprite, index) in sprites"
        :key="index"
        :attrs="sprite"
      )
</template>

<script>
export default {
  data () {
    const arr = []
    const arcD = 'M0 0L 50 0A50 50 0 0 1 43.3 25z'
    for (let i = 0; i < 6; i++) {
      arr.push({
        path: {
          d: arcD,
          transform: {scale: 3, rotate: -15},
          trim: true
        },
        pos: [150, 150],
        anchor: [0, 0.5],
        strokeColor: 'red',
        rotate: i * 60,
        fillColor: `rgb(${i * 139 % 255}, 0, 0)`
      })
    }

    return {
      sceneStyle: {
        width: '100%',
        'padding-bottom': '39%'
      },
      groupAttrs: {
        size: [300, 300],
        pos: [770, 300],
        anchor: [0.5, 0.5]
      },
      sprites: arr
    }
  },
  mounted () {
    this.$refs.group.animate(
      [
        {rotate: 0},
        {rotate: 360}
      ],
      {
        duration: 3000,
        iterations: Infinity
      }
    )
  }
}
</script>
```


```html
<template lang="pug">
s-scene(:style="sceneStyle" id="app2")
  s-layer
    s-group(:attrs="groupAttrs" ref="group")
      s-sprite(:attrs="groupSpriteAttrs")
</template>

<script>
const imgUrl = 'https://p4.ssl.qhimg.com/t01423053c4cb748581.jpg'

export default {
  data () {
    return {
      sceneStyle: {
        width: '100%',
        'padding-bottom': '39%'
      },
      groupAttrs: {
        pos: [770, 300],
        anchor: [0.5, 0.5],
        clip: {
          d:
            'M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z',
          transform: { scale: 15 }
        }
      },
      groupSpriteAttrs: {
        textures: [{ src: imgUrl }],
        pos: [-10, 0],
        scale: 0.75
      }
    }
  }
}
</script>
```
