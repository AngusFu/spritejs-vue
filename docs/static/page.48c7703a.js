__jsonpResolve(function(){var s={};return s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("article",{staticClass:"markdown-body"},[a("h1",[s._v("Labels")]),s._v(" "),a("div",{staticClass:"vue-demo-block"},[a("VueApp0"),s._v(" "),s._m(0)],1)])},components:{VueApp0:function(){"use strict";var s,t,a,n,r,l=[{text:"SpriteJS.org",pos:[100,40],fillColor:"#707",font:"oblique small-caps bold 56px Arial",border:[2.5,"#ccc"]},{text:"从前有座\n灵剑山",pos:[500,40],fillColor:"#077",font:'64px "宋体"',lineHeight:112,textAlign:"center",padding:[0,30],border:[2.5,"#ccc"]},{text:"Hello",pos:[100,240],strokeColor:"#fc7",font:"bold italic 70px Microsoft Yahei",textAlign:"center",padding:[0,30],border:[2.5,"#ccc"]}],e=function(s,t,a){for(var n=s.length,r=[],l=0;l<n;l++){var e=s.charAt(l);r.push([e,{anchor:[.5,4.5],pos:[t,a],font:"bold 44px Arial",fillColor:"#37c",rotate:360*l/n}])}return r}("Sprite.js JavaScript Canvas...",1200,300),v={data:function(){return{sceneStyle:{width:"100%","padding-bottom":"39%"},labels:l,textClocks:e}}},_=function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("div",{staticClass:"vue-demo"},[n("s-scene",{style:a.sceneStyle,attrs:{id:"app"}},[n("s-layer",[a._l(a.labels,function(s){return n("s-label",{key:s.text,attrs:{attrs:s}})}),a._l(a.textClocks,function(s,t){return n("s-label",{key:t,attrs:{attrs:s[1]}},[a._v(a._s(s[0]))])})],2)],1)],1)};return _._withStripped=!0,a=void 0,n=!(s={render:_,staticRenderFns:[]}),(r=("function"==typeof(t=v)?t.options:t)||{}).__file="/Users/fujun/Documents/Code/sprite-vue/virtual.vue",r.render||(r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._compiled=!0,n&&(r.functional=!0)),r._scopeId=a,r}()},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0,attrs:{class:"vue-demo-source-code"}},[a("code",{attrs:{class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lang")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"pug"')]),s._v(">")]),s._v('\ns-scene(:style="sceneStyle" id="app")\n  s-layer\n    s-label(\n      v-for="label in labels"\n      :key="label.text"\n      :attrs="label"\n    )\n    s-label(\n      v-for="(item, index) in textClocks"\n      :key="index"\n      :attrs="item[1]"\n    ) {{item[0]}}\n'),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" labels = [\n    {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'SpriteJS.org'")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("40")]),s._v("],\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'#707'")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("font")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'oblique small-caps bold 56px Arial'")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("border")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("2.5")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("'#ccc'")]),s._v("]\n    },\n    {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'从前有座\\n灵剑山'")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("500")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("40")]),s._v("],\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'#077'")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("font")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'64px \"宋体\"'")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lineHeight")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("112")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("textAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("padding")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("30")]),s._v("],\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("border")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("2.5")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("'#ccc'")]),s._v("]\n    },\n    {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Hello'")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("240")]),s._v("],\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("strokeColor")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'#fc7'")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("font")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'bold italic 70px Microsoft Yahei'")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("textAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("padding")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("30")]),s._v("],\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("border")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("2.5")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("'#ccc'")]),s._v("]\n    }\n  ]\n\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" textClocks = createClockTexts("),a("span",{attrs:{class:"hljs-string"}},[s._v("'Sprite.js JavaScript Canvas...'")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("1200")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("300")]),s._v(")\n\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("sceneStyle")]),s._v(": {\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-string"}},[s._v("'padding-bottom'")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'39%'")]),s._v("\n        },\n        labels,\n        textClocks\n      }\n    }\n  }\n\n  "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"hljs-title"}},[s._v("createClockTexts")]),s._v(" ("),a("span",{attrs:{class:"hljs-params"}},[s._v("text, x, y")]),s._v(") ")]),s._v("{\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" len = text.length\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" arr = []\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" i = "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < len; i++) {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" char = text.charAt(i)\n      arr.push([\n        char,\n        {\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("anchor")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("4.5")]),s._v("],\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": [x, y],\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("font")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'bold 44px Arial'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'#37c'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("rotate")]),s._v(": i * "),a("span",{attrs:{class:"hljs-number"}},[s._v("360")]),s._v(" / len\n        }\n      ])\n    }\n\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" arr\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])}]},s.exports.metaInfo=function(){return{title:"Labels"}},s.exports.computed={$vars:function(){return{}},$page:function(){var t=this.$route.path;return this.$pages.filter(function(s){return s.path===t})[0]||{}}},s.exports}());