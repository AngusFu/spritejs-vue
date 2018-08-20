---
title: 'Sprite'
route: /
index: 1
---

# Sprite

```html
<template lang="pug">
s-scene(:style="sceneStyle")
  s-layer
    s-sprite(
      v-for="(sprite, index) in sprites"
      :key="index"
      :attrs="sprite"
    )
</template>

<script>
const sprites = [
  {
    size: [100, 100],
    pos: [100, 100],
    border: [2, '#f77'],
    borderRadius: 0
  },
  {
    size: [200, 200],
    pos: [300, 100],
    border: [4, '#7c7'],
    borderRadius: 20
  },
  {
    size: [300, 300],
    pos: [600, 100],
    border: [6, '#77c'],
    borderRadius: 50
  },
  {
    size: [400, 400],
    pos: [1000, 100],
    border: [8, '#c7c'],
    borderRadius: 200
  }
]
export default {
  data () {
    return {
      sprites,
      sceneStyle: {
        width: '100%',
        'padding-bottom': '39%'
      }
    }
  }
}
</script>
```

```html
<template lang="pug">
s-scene(:style="sceneStyle")
  s-layer
    s-sprite(
      v-for="(sprite, index) in sprites"
      :key="index"
      :attrs="sprite"
    )
</template>

<script>
export default {
  data () {
    return {
      sceneStyle: {
        width: '100%',
        'padding-bottom': '39%'
      },
      sprites: [
        {
          size: [100, 100],
          pos: [100, 100],
          bgcolor: 'red'
        },
        {
          size: [200, 200],
          pos: [300, 100],
          bgcolor: '#7c7',
          borderRadius: 20
        },
        {
          size: [300, 300],
          pos: [600, 100],
          bgcolor: 'rgba(192, 128, 192, 0.5)',
          borderRadius: 50
        },
        {
          size: [400, 400],
          pos: [1000, 100],
          bgcolor: 'hsl(180,50%,50%)',
          borderRadius: 200
        }
      ]
    }
  }
}
</script>
```


```html
<template lang="pug">
s-scene(:style="sceneStyle")
  s-layer
    s-sprite(
      v-for="(sprite, index) in sprites"
      :key="index"
      :attrs="sprite"
    )
</template>

<script>
const texture = 'https://p5.ssl.qhimg.com/t01a2bd87890397464a.png'
const sprites = [
  {
    pos: [100, 20],
    border: [2, 'grey'],
    textures: [{ src: texture }]
  },
  {
    size: [190, 269],
    border: [2, 'grey'],
    pos: [500, 20],
    textures: [{ src: texture }]
  },
  {
    textures: [
      { src: texture, rect: [0, 0, 190, 268] },
      { src: texture, rect: [192, 0, 190, 268] }
    ],
    border: [2, 'grey'],
    pos: [500, 300]
  },
  {
    textures: [
      { src: texture, rect: [0, 0, 190, 268], srcRect: [0, 0, 190, 268] },
      {
        src: texture,
        rect: [200, 278, 190, 268],
        srcRect: [191, 269, 190, 268]
      },
      {
        src: texture,
        rect: [0, 278, 190, 268],
        srcRect: [0, 269, 190, 268]
      },
      {
        src: texture,
        rect: [200, 0, 190, 268],
        srcRect: [191, 0, 190, 268]
      }
    ],
    border: [2, 'grey'],
    pos: [1000, 20]
  }
]

export default {
  data () {
    return {
      sprites,
      sceneStyle: {
        width: '100%',
        'padding-bottom': '39%'
      }
    }
  }
}
</script>
```

