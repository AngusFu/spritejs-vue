---
title: 'Labels'
route: /label
index: 3
---

# Labels

```html
<template lang="pug">
s-scene(:style="sceneStyle" id="app")
  s-layer
    s-label(
      v-for="label in labels"
      :key="label.text"
      :attrs="label"
    )
    s-label(
      v-for="(item, index) in textClocks"
      :key="index"
      :attrs="item[1]"
    ) {{item[0]}}
</template>

<script>
  const labels = [
    {
      text: 'SpriteJS.org',
      pos: [100, 40],
      fillColor: '#707',
      font: 'oblique small-caps bold 56px Arial',
      border: [2.5, '#ccc']
    },
    {
      text: '从前有座\n灵剑山',
      pos: [500, 40],
      fillColor: '#077',
      font: '64px "宋体"',
      lineHeight: 112,
      textAlign: 'center',
      padding: [0, 30],
      border: [2.5, '#ccc']
    },
    {
      text: 'Hello',
      pos: [100, 240],
      strokeColor: '#fc7',
      font: 'bold italic 70px Microsoft Yahei',
      textAlign: 'center',
      padding: [0, 30],
      border: [2.5, '#ccc']
    }
  ]

  const textClocks = createClockTexts('Sprite.js JavaScript Canvas...', 1200, 300)

  export default {
    data () {
      return {
        sceneStyle: {
          width: '100%',
          'padding-bottom': '39%'
        },
        labels,
        textClocks
      }
    }
  }

  function createClockTexts (text, x, y) {
    const len = text.length
    const arr = []
    for (let i = 0; i < len; i++) {
      const char = text.charAt(i)
      arr.push([
        char,
        {
          anchor: [0.5, 4.5],
          pos: [x, y],
          font: 'bold 44px Arial',
          fillColor: '#37c',
          rotate: i * 360 / len
        }
      ])
    }

    return arr
  }
</script>
```
