---
title: 'Paths'
route: /path
---

# Paths

```html
<template lang="pug">
s-scene(:style="sceneStyle")
  s-layer
    s-path(:attrs="heart1" ref="heart1")
    s-path(:attrs="heart2" ref="heart2")
</template>

<script>
const d = 'M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z'
const heart1 = {
  anchor: [0.5, 0.5],
  path: {
    d,
    transform: {
      rotate: 45
    },
    trim: true
  },
  fillColor: '#f33',
  pos: [300, 300]
}
const heart2 = {
  anchor: [0.5, 0.5],
  path: {
    d,
    transform: {
      rotate: 45
    },
    trim: true
  },
  fillColor: '#f33',
  pos: [900, 300]
}

export default {
  data () {
    return {
      sceneStyle: {
        width: '100%',
        'padding-bottom': '39%'
      },
      heart1,
      heart2
    }
  },
  mounted () {
    const { heart1, heart2 } = this.$refs

    heart1.animate(
      [
        {scale: 1},
        {scale: 10}
      ],
      {
        duration: 5000,
        iterations: Infinity,
        direction: 'alternate'
      }
    )
    heart2.animate([
      {path: {d, trim: true, transform: {rotate: 45, scale: 1}}},
      {path: {d, trim: true, transform: {rotate: 45, scale: 10}}}
    ], {
      duration: 5000,
      iterations: Infinity,
      direction: 'alternate'
    })
  }
}
</script>
```


```html
<template lang="pug">
s-scene(:style="sceneStyle")
  s-layer
    s-path(
      v-for="(path, index) in paths"
      :key="index"
      :attrs="path"
    )
</template>

<script>
const paths = [
  {
    path: {
      d: 'M280,250A200,200,0,1,1,680,250A200,200,0,1,1,280,250Z',
      transform: {
        scale: 0.5
      },
      trim: true
    },
    strokeColor: '#033',
    fillColor: '#839',
    lineWidth: 12,
    pos: [100, 50]
  },
  {
    path: {
      d: 'M480,50L423.8,182.6L280,194.8L389.2,289.4L356.4,430L480,355.4L480,355.4L603.6,430L570.8,289.4L680,194.8L536.2,182.6Z',
      transform: {
        rotate: 45
      },
      trim: true
    },
    fillColor: '#ed8',
    pos: [450, 100]
  },
  {
    path: {
      d: 'M480,437l-29-26.4c-103-93.4-171-155-171-230.6c0-61.6,48.4-110,110-110c34.8,0,68.2,16.2,90,41.8C501.8,86.2,535.2,70,570,70c61.6,0,110,48.4,110,110c0,75.6-68,137.2-171,230.8L480,437z',
      trim: true
    },
    strokeColor: '#f37',
    lineWidth: 20,
    lineJoin: 'round',
    lineCap: 'round',
    pos: [1000, 100]
  }
]

export default {
  data () {
    return {
      sceneStyle: {
        width: '100%',
        'padding-bottom': '39%'
      },
      paths
    }
  }
}
</script>
```
