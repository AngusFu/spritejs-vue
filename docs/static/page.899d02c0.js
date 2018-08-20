__jsonpResolve(function(){var s={};return s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("article",{staticClass:"markdown-body"},[a("h1",[s._v("Sprite")]),s._v(" "),a("div",{staticClass:"vue-demo-block"},[a("VueApp0"),s._v(" "),s._m(0)],1),s._v(" "),a("div",{staticClass:"vue-demo-block"},[a("VueApp1"),s._v(" "),s._m(1)],1),s._v(" "),a("div",{staticClass:"vue-demo-block"},[a("VueApp2"),s._v(" "),s._m(2)],1)])},components:{VueApp0:function(){"use strict";var s,t,a,r,n,l=[{size:[100,100],pos:[100,100],border:[2,"#f77"],borderRadius:0},{size:[200,200],pos:[300,100],border:[4,"#7c7"],borderRadius:20},{size:[300,300],pos:[600,100],border:[6,"#77c"],borderRadius:50},{size:[400,400],pos:[1e3,100],border:[8,"#c7c"],borderRadius:200}],e={data:function(){return{sprites:l,sceneStyle:{width:"100%","padding-bottom":"39%"}}}},v=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"vue-demo"},[a("s-scene",{style:s.sceneStyle},[a("s-layer",s._l(s.sprites,function(s,t){return a("s-sprite",{key:t,attrs:{attrs:s}})}))],1)],1)};return v._withStripped=!0,a=void 0,r=!(s={render:v,staticRenderFns:[]}),(n=("function"==typeof(t=e)?t.options:t)||{}).__file="/Users/fujun/Documents/Code/sprite-vue/virtual.vue",n.render||(n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._compiled=!0,r&&(n.functional=!0)),n._scopeId=a,n}(),VueApp1:function(){"use strict";var s,t,a,r,n,l={data:function(){return{sceneStyle:{width:"100%","padding-bottom":"39%"},sprites:[{size:[100,100],pos:[100,100],bgcolor:"red"},{size:[200,200],pos:[300,100],bgcolor:"#7c7",borderRadius:20},{size:[300,300],pos:[600,100],bgcolor:"rgba(192, 128, 192, 0.5)",borderRadius:50},{size:[400,400],pos:[1e3,100],bgcolor:"hsl(180,50%,50%)",borderRadius:200}]}}},e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"vue-demo"},[a("s-scene",{style:s.sceneStyle},[a("s-layer",s._l(s.sprites,function(s,t){return a("s-sprite",{key:t,attrs:{attrs:s}})}))],1)],1)};return e._withStripped=!0,a=void 0,r=!(s={render:e,staticRenderFns:[]}),(n=("function"==typeof(t=l)?t.options:t)||{}).__file="/Users/fujun/Documents/Code/sprite-vue/virtual.vue",n.render||(n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._compiled=!0,r&&(n.functional=!0)),n._scopeId=a,n}(),VueApp2:function(){"use strict";var s,t,a,r,n,l="https://p5.ssl.qhimg.com/t01a2bd87890397464a.png",e=[{pos:[100,20],border:[2,"grey"],textures:[{src:l}]},{size:[190,269],border:[2,"grey"],pos:[500,20],textures:[{src:l}]},{textures:[{src:l,rect:[0,0,190,268]},{src:l,rect:[192,0,190,268]}],border:[2,"grey"],pos:[500,300]},{textures:[{src:l,rect:[0,0,190,268],srcRect:[0,0,190,268]},{src:l,rect:[200,278,190,268],srcRect:[191,269,190,268]},{src:l,rect:[0,278,190,268],srcRect:[0,269,190,268]},{src:l,rect:[200,0,190,268],srcRect:[191,0,190,268]}],border:[2,"grey"],pos:[1e3,20]}],v={data:function(){return{sprites:e,sceneStyle:{width:"100%","padding-bottom":"39%"}}}},_=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"vue-demo"},[a("s-scene",{style:s.sceneStyle},[a("s-layer",s._l(s.sprites,function(s,t){return a("s-sprite",{key:t,attrs:{attrs:s}})}))],1)],1)};return _._withStripped=!0,a=void 0,r=!(s={render:_,staticRenderFns:[]}),(n=("function"==typeof(t=v)?t.options:t)||{}).__file="/Users/fujun/Documents/Code/sprite-vue/virtual.vue",n.render||(n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._compiled=!0,r&&(n.functional=!0)),n._scopeId=a,n}()},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0,attrs:{class:"vue-demo-source-code"}},[a("code",{attrs:{class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lang")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"pug"')]),s._v(">")]),s._v('\ns-scene(:style="sceneStyle")\n  s-layer\n    s-sprite(\n      v-for="(sprite, index) in sprites"\n      :key="index"\n      :attrs="sprite"\n    )\n'),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" sprites = [\n  {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v("],\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v("],\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("border")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("'#f77'")]),s._v("],\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("borderRadius")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n  },\n  {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("200")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("200")]),s._v("],\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("300")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v("],\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("border")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("'#7c7'")]),s._v("],\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("borderRadius")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("20")]),s._v("\n  },\n  {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("300")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("300")]),s._v("],\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("600")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v("],\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("border")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("6")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("'#77c'")]),s._v("],\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("borderRadius")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("50")]),s._v("\n  },\n  {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("400")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("400")]),s._v("],\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v("],\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("border")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("8")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("'#c7c'")]),s._v("],\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("borderRadius")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("200")]),s._v("\n  }\n]\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      sprites,\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("sceneStyle")]),s._v(": {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v("'padding-bottom'")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'39%'")]),s._v("\n      }\n    }\n  }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0,attrs:{class:"vue-demo-source-code"}},[a("code",{attrs:{class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lang")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"pug"')]),s._v(">")]),s._v('\ns-scene(:style="sceneStyle")\n  s-layer\n    s-sprite(\n      v-for="(sprite, index) in sprites"\n      :key="index"\n      :attrs="sprite"\n    )\n'),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("sceneStyle")]),s._v(": {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v("'padding-bottom'")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'39%'")]),s._v("\n      },\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("sprites")]),s._v(": [\n        {\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v("],\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v("],\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("bgcolor")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v("\n        },\n        {\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("200")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("200")]),s._v("],\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("300")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v("],\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("bgcolor")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'#7c7'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("borderRadius")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("20")]),s._v("\n        },\n        {\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("300")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("300")]),s._v("],\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("600")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v("],\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("bgcolor")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'rgba(192, 128, 192, 0.5)'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("borderRadius")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("50")]),s._v("\n        },\n        {\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("400")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("400")]),s._v("],\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v("],\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("bgcolor")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'hsl(180,50%,50%)'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("borderRadius")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("200")]),s._v("\n        }\n      ]\n    }\n  }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0,attrs:{class:"vue-demo-source-code"}},[a("code",{attrs:{class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lang")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"pug"')]),s._v(">")]),s._v('\ns-scene(:style="sceneStyle")\n  s-layer\n    s-sprite(\n      v-for="(sprite, index) in sprites"\n      :key="index"\n      :attrs="sprite"\n    )\n'),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" texture = "),a("span",{attrs:{class:"hljs-string"}},[s._v("'https://p5.ssl.qhimg.com/t01a2bd87890397464a.png'")]),s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" sprites = [\n  {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("20")]),s._v("],\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("border")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("'grey'")]),s._v("],\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("textures")]),s._v(": [{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(": texture }]\n  },\n  {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("190")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("269")]),s._v("],\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("border")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("'grey'")]),s._v("],\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("500")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("20")]),s._v("],\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("textures")]),s._v(": [{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(": texture }]\n  },\n  {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("textures")]),s._v(": [\n      { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(": texture, "),a("span",{attrs:{class:"hljs-attr"}},[s._v("rect")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("190")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("268")]),s._v("] },\n      { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(": texture, "),a("span",{attrs:{class:"hljs-attr"}},[s._v("rect")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("192")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("190")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("268")]),s._v("] }\n    ],\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("border")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("'grey'")]),s._v("],\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("500")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("300")]),s._v("]\n  },\n  {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("textures")]),s._v(": [\n      { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(": texture, "),a("span",{attrs:{class:"hljs-attr"}},[s._v("rect")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("190")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("268")]),s._v("], "),a("span",{attrs:{class:"hljs-attr"}},[s._v("srcRect")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("190")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("268")]),s._v("] },\n      {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(": texture,\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("rect")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("200")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("278")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("190")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("268")]),s._v("],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("srcRect")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("191")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("269")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("190")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("268")]),s._v("]\n      },\n      {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(": texture,\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("rect")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("278")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("190")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("268")]),s._v("],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("srcRect")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("269")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("190")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("268")]),s._v("]\n      },\n      {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(": texture,\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("rect")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("200")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("190")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("268")]),s._v("],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("srcRect")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("191")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("190")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("268")]),s._v("]\n      }\n    ],\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("border")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("'grey'")]),s._v("],\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("20")]),s._v("]\n  }\n]\n\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      sprites,\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("sceneStyle")]),s._v(": {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v("'padding-bottom'")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'39%'")]),s._v("\n      }\n    }\n  }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])}]},s.exports.metaInfo=function(){return{title:"Sprite"}},s.exports.computed={$vars:function(){return{}},$page:function(){var t=this.$route.path;return this.$pages.filter(function(s){return s.path===t})[0]||{}}},s.exports}());