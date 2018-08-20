!function(){"use strict";var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var r=e(function(t,e){var r;r=function(){var t,e,r={version:"0.2.0"},n=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function i(t,e,r){return t<e?e:t>r?r:t}function o(t){return 100*(-1+t)}r.configure=function(t){var e,r;for(e in t)void 0!==(r=t[e])&&t.hasOwnProperty(e)&&(n[e]=r);return this},r.status=null,r.set=function(t){var e=r.isStarted();t=i(t,n.minimum,1),r.status=1===t?null:t;var c=r.render(!e),u=c.querySelector(n.barSelector),l=n.speed,f=n.easing;return c.offsetWidth,a(function(e){""===n.positionUsing&&(n.positionUsing=r.getPositioningCSS()),s(u,function(t,e,r){var i;i="translate3d"===n.positionUsing?{transform:"translate3d("+o(t)+"%,0,0)"}:"translate"===n.positionUsing?{transform:"translate("+o(t)+"%,0)"}:{"margin-left":o(t)+"%"};return i.transition="all "+e+"ms "+r,i}(t,l,f)),1===t?(s(c,{transition:"none",opacity:1}),c.offsetWidth,setTimeout(function(){s(c,{transition:"all "+l+"ms linear",opacity:0}),setTimeout(function(){r.remove(),e()},l)},l)):setTimeout(e,l)}),this},r.isStarted=function(){return"number"==typeof r.status},r.start=function(){r.status||r.set(0);var t=function(){setTimeout(function(){r.status&&(r.trickle(),t())},n.trickleSpeed)};return n.trickle&&t(),this},r.done=function(t){return t||r.status?r.inc(.3+.5*Math.random()).set(1):this},r.inc=function(t){var e=r.status;return e?("number"!=typeof t&&(t=(1-e)*i(Math.random()*e,.1,.95)),e=i(e+t,0,.994),r.set(e)):r.start()},r.trickle=function(){return r.inc(Math.random()*n.trickleRate)},t=0,e=0,r.promise=function(n){return n&&"resolved"!==n.state()?(0===e&&r.start(),t++,e++,n.always(function(){0==--e?(t=0,r.done()):r.set((t-e)/t)}),this):this},r.render=function(t){if(r.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var e=document.createElement("div");e.id="nprogress",e.innerHTML=n.template;var i,a=e.querySelector(n.barSelector),c=t?"-100":o(r.status||0),l=document.querySelector(n.parent);return s(a,{transition:"all 0 linear",transform:"translate3d("+c+"%,0,0)"}),n.showSpinner||(i=e.querySelector(n.spinnerSelector))&&p(i),l!=document.body&&u(l,"nprogress-custom-parent"),l.appendChild(e),e},r.remove=function(){l(document.documentElement,"nprogress-busy"),l(document.querySelector(n.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&p(t)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var a=function(){var t=[];function e(){var r=t.shift();r&&r(e)}return function(r){t.push(r),1==t.length&&e()}}(),s=function(){var t=["Webkit","O","Moz","ms"],e={};function r(r){return r=r.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()}),e[r]||(e[r]=function(e){var r=document.body.style;if(e in r)return e;for(var n,i=t.length,o=e.charAt(0).toUpperCase()+e.slice(1);i--;)if((n=t[i]+o)in r)return n;return e}(r))}function n(t,e,n){e=r(e),t.style[e]=n}return function(t,e){var r,i,o=arguments;if(2==o.length)for(r in e)void 0!==(i=e[r])&&e.hasOwnProperty(r)&&n(t,r,i);else n(t,o[1],o[2])}}();function c(t,e){return("string"==typeof t?t:f(t)).indexOf(" "+e+" ")>=0}function u(t,e){var r=f(t),n=r+e;c(r,e)||(t.className=n.substring(1))}function l(t,e){var r,n=f(t);c(t,e)&&(r=n.replace(" "+e+" "," "),t.className=r.substring(1,r.length-1))}function f(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function p(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return r},t.exports=r()});var n=void 0;function i(){i.init||(i.init=!0,n=-1!==function(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return parseInt(t.substring(e+5,t.indexOf(".",e)),10);if(t.indexOf("Trident/")>0){var r=t.indexOf("rv:");return parseInt(t.substring(r+3,t.indexOf(".",r)),10)}var n=t.indexOf("Edge/");return n>0?parseInt(t.substring(n+5,t.indexOf(".",n)),10):-1}())}var o={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"resize-observer",attrs:{tabindex:"-1"}})},staticRenderFns:[],_scopeId:"data-v-b329ee4c",name:"resize-observer",methods:{notify:function(){this.$emit("notify")},addResizeHandlers:function(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.notify),this._w===this.$el.offsetWidth&&this._h===this.$el.offsetHeight||this.notify()},removeResizeHandlers:function(){this._resizeObject&&this._resizeObject.onload&&(!n&&this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.removeEventListener("resize",this.notify),delete this._resizeObject.onload)}},mounted:function(){var t=this;i(),this.$nextTick(function(){t._w=t.$el.offsetWidth,t._h=t.$el.offsetHeight});var e=document.createElement("object");this._resizeObject=e,e.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"),e.setAttribute("aria-hidden","true"),e.setAttribute("tabindex",-1),e.onload=this.addResizeHandlers,e.type="text/html",n&&this.$el.appendChild(e),e.data="about:blank",n||this.$el.appendChild(e)},beforeDestroy:function(){this.removeResizeHandlers()}};var a={version:"0.4.4",install:function(t){t.component("resize-observer",o)}},s=null;"undefined"!=typeof window?s=window.Vue:"undefined"!=typeof global&&(s=global.Vue),s&&s.use(a);var c={position:"absolute",top:"0",left:"0","z-index":"-1",width:"100%",height:"100%",border:"none","background-color":"transparent","pointer-events":"none",display:"block",overflow:"hidden",opacity:"0"},u={name:"s-scene",components:{ResizeObserver:o},props:{},provide:function(){return{$paper:this}},data:function(){return{spriteElem:null}},methods:{handleResize:function(){this.spriteElem.updateViewport()}},render:function(t){return t("div",{staticClass:"spritejs-scene"},[t("resize-observer",{staticStyle:c,onNotify:this.handleResize}),this.$slots.default])},mounted:function(){var t=this.$spritejs.Scene;this.spriteElem=new t(this.$el,{viewport:["auto","auto"],resolution:[1520,600]})},destroyed:function(){this.spriteElem.off(),this.spriteElem=null}};function l(t){Object.keys(t.$listeners).forEach(function(e){t.spriteElem.on(e,function(r){return t.$emit(e,r)})})}function f(t){t.spriteElem.off()}var p={name:"s-layer",props:{id:String,config:{type:Object,default:function(){return{}}},layerStyle:{type:[Object,String]}},inject:["$paper"],provide:function(){return{$layer:this}},data:function(){return{spriteElem:null}},watch:{"$paper.spriteElem":{handler:function(t,e){t&&t!==e&&(this.destoryLayer(),this.scene=t,this.reInit())},immediate:!0},layerStyle:{deep:!0,handler:function(){this.updateCanvas()}},config:{deep:!0,handler:function(t){var e=this.layer;e&&Object.assign(e,t)}},id:function(){this.destoryLayer(),this.reInit()}},methods:{reInit:function(){this.spriteElem=this.scene.layer(this.id,this.config),l(this),this.updateCanvas()},destoryLayer:function(){var t=this.scene,e=this.spriteElem;t&&e&&(f(this),t.removeLayer(e),this.spriteElem=null)},updateCanvas:function(){var t=this.spriteElem,e=this.layerStyle;t&&t.canvas&&("string"==typeof e?t.canvas.style.cssText+=e:Object.assign(t.canvas.style,e))}},render:function(t){return t("div",{staticStyle:c,staticClass:"spritejs-layer",attrs:{id:this.id}},this.$slots.default)},destroyed:function(){var t=this.scene,e=this.spriteElem;t.removeChild(e),f(this)}};var d=function(){this.__data__=[],this.size=0};var v=function(t,e){return t===e||t!=t&&e!=e};var h=function(t,e){for(var r=t.length;r--;)if(v(t[r][0],e))return r;return-1},y=Array.prototype.splice;var b=function(t){var e=this.__data__,r=h(e,t);return!(r<0||(r==e.length-1?e.pop():y.call(e,r,1),--this.size,0))};var m=function(t){var e=this.__data__,r=h(e,t);return r<0?void 0:e[r][1]};var j=function(t){return h(this.__data__,t)>-1};var g=function(t,e){var r=this.__data__,n=h(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function _(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}_.prototype.clear=d,_.prototype.delete=b,_.prototype.get=m,_.prototype.has=j,_.prototype.set=g;var w=_;var O=function(){this.__data__=new w,this.size=0};var E=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};var S=function(t){return this.__data__.get(t)};var A=function(t){return this.__data__.has(t)},x="object"==typeof t&&t&&t.Object===Object&&t,z="object"==typeof self&&self&&self.Object===Object&&self,k=x||z||Function("return this")(),$=k.Symbol,C=Object.prototype,P=C.hasOwnProperty,I=C.toString,M=$?$.toStringTag:void 0;var T=function(t){var e=P.call(t,M),r=t[M];try{t[M]=void 0;var n=!0}catch(t){}var i=I.call(t);return n&&(e?t[M]=r:delete t[M]),i},U=Object.prototype.toString;var R=function(t){return U.call(t)},F="[object Null]",B="[object Undefined]",D=$?$.toStringTag:void 0;var L=function(t){return null==t?void 0===t?B:F:D&&D in Object(t)?T(t):R(t)};var V=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},W="[object AsyncFunction]",N="[object Function]",q="[object GeneratorFunction]",H="[object Proxy]";var G,J=function(t){if(!V(t))return!1;var e=L(t);return e==N||e==q||e==W||e==H},K=k["__core-js_shared__"],Q=(G=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"";var X=function(t){return!!Q&&Q in t},Y=Function.prototype.toString;var Z=function(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""},tt=/^\[object .+?Constructor\]$/,et=Function.prototype,rt=Object.prototype,nt=et.toString,it=rt.hasOwnProperty,ot=RegExp("^"+nt.call(it).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var at=function(t){return!(!V(t)||X(t))&&(J(t)?ot:tt).test(Z(t))};var st=function(t,e){return null==t?void 0:t[e]};var ct=function(t,e){var r=st(t,e);return at(r)?r:void 0},ut=ct(k,"Map"),lt=ct(Object,"create");var ft=function(){this.__data__=lt?lt(null):{},this.size=0};var pt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},dt="__lodash_hash_undefined__",vt=Object.prototype.hasOwnProperty;var ht=function(t){var e=this.__data__;if(lt){var r=e[t];return r===dt?void 0:r}return vt.call(e,t)?e[t]:void 0},yt=Object.prototype.hasOwnProperty;var bt=function(t){var e=this.__data__;return lt?void 0!==e[t]:yt.call(e,t)},mt="__lodash_hash_undefined__";var jt=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=lt&&void 0===e?mt:e,this};function gt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}gt.prototype.clear=ft,gt.prototype.delete=pt,gt.prototype.get=ht,gt.prototype.has=bt,gt.prototype.set=jt;var _t=gt;var wt=function(){this.size=0,this.__data__={hash:new _t,map:new(ut||w),string:new _t}};var Ot=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Et=function(t,e){var r=t.__data__;return Ot(e)?r["string"==typeof e?"string":"hash"]:r.map};var St=function(t){var e=Et(this,t).delete(t);return this.size-=e?1:0,e};var At=function(t){return Et(this,t).get(t)};var xt=function(t){return Et(this,t).has(t)};var zt=function(t,e){var r=Et(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function kt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}kt.prototype.clear=wt,kt.prototype.delete=St,kt.prototype.get=At,kt.prototype.has=xt,kt.prototype.set=zt;var $t=kt,Ct=200;var Pt=function(t,e){var r=this.__data__;if(r instanceof w){var n=r.__data__;if(!ut||n.length<Ct-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new $t(n)}return r.set(t,e),this.size=r.size,this};function It(t){var e=this.__data__=new w(t);this.size=e.size}It.prototype.clear=O,It.prototype.delete=E,It.prototype.get=S,It.prototype.has=A,It.prototype.set=Pt;var Mt=It;var Tt=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t},Ut=function(){try{var t=ct(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var Rt=function(t,e,r){"__proto__"==e&&Ut?Ut(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r},Ft=Object.prototype.hasOwnProperty;var Bt=function(t,e,r){var n=t[e];Ft.call(t,e)&&v(n,r)&&(void 0!==r||e in t)||Rt(t,e,r)};var Dt=function(t,e,r,n){var i=!r;r||(r={});for(var o=-1,a=e.length;++o<a;){var s=e[o],c=n?n(r[s],t[s],s,r,t):void 0;void 0===c&&(c=t[s]),i?Rt(r,s,c):Bt(r,s,c)}return r};var Lt=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n};var Vt=function(t){return null!=t&&"object"==typeof t},Wt="[object Arguments]";var Nt=function(t){return Vt(t)&&L(t)==Wt},qt=Object.prototype,Ht=qt.hasOwnProperty,Gt=qt.propertyIsEnumerable,Jt=Nt(function(){return arguments}())?Nt:function(t){return Vt(t)&&Ht.call(t,"callee")&&!Gt.call(t,"callee")},Kt=Array.isArray;var Qt=function(){return!1},Xt=e(function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,i=n&&n.exports===r?k.Buffer:void 0,o=(i?i.isBuffer:void 0)||Qt;t.exports=o}),Yt=9007199254740991,Zt=/^(?:0|[1-9]\d*)$/;var te=function(t,e){var r=typeof t;return!!(e=null==e?Yt:e)&&("number"==r||"symbol"!=r&&Zt.test(t))&&t>-1&&t%1==0&&t<e},ee=9007199254740991;var re=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=ee},ne={};ne["[object Float32Array]"]=ne["[object Float64Array]"]=ne["[object Int8Array]"]=ne["[object Int16Array]"]=ne["[object Int32Array]"]=ne["[object Uint8Array]"]=ne["[object Uint8ClampedArray]"]=ne["[object Uint16Array]"]=ne["[object Uint32Array]"]=!0,ne["[object Arguments]"]=ne["[object Array]"]=ne["[object ArrayBuffer]"]=ne["[object Boolean]"]=ne["[object DataView]"]=ne["[object Date]"]=ne["[object Error]"]=ne["[object Function]"]=ne["[object Map]"]=ne["[object Number]"]=ne["[object Object]"]=ne["[object RegExp]"]=ne["[object Set]"]=ne["[object String]"]=ne["[object WeakMap]"]=!1;var ie=function(t){return Vt(t)&&re(t.length)&&!!ne[L(t)]};var oe=function(t){return function(e){return t(e)}},ae=e(function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,i=n&&n.exports===r&&x.process,o=function(){try{var t=n&&n.require&&n.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=o}),se=ae&&ae.isTypedArray,ce=se?oe(se):ie,ue=Object.prototype.hasOwnProperty;var le=function(t,e){var r=Kt(t),n=!r&&Jt(t),i=!r&&!n&&Xt(t),o=!r&&!n&&!i&&ce(t),a=r||n||i||o,s=a?Lt(t.length,String):[],c=s.length;for(var u in t)!e&&!ue.call(t,u)||a&&("length"==u||i&&("offset"==u||"parent"==u)||o&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||te(u,c))||s.push(u);return s},fe=Object.prototype;var pe=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||fe)};var de=function(t,e){return function(r){return t(e(r))}},ve=de(Object.keys,Object),he=Object.prototype.hasOwnProperty;var ye=function(t){if(!pe(t))return ve(t);var e=[];for(var r in Object(t))he.call(t,r)&&"constructor"!=r&&e.push(r);return e};var be=function(t){return null!=t&&re(t.length)&&!J(t)};var me=function(t){return be(t)?le(t):ye(t)};var je=function(t,e){return t&&Dt(e,me(e),t)};var ge=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e},_e=Object.prototype.hasOwnProperty;var we=function(t){if(!V(t))return ge(t);var e=pe(t),r=[];for(var n in t)("constructor"!=n||!e&&_e.call(t,n))&&r.push(n);return r};var Oe=function(t){return be(t)?le(t,!0):we(t)};var Ee=function(t,e){return t&&Dt(e,Oe(e),t)},Se=e(function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,i=n&&n.exports===r?k.Buffer:void 0,o=i?i.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var r=t.length,n=o?o(r):new t.constructor(r);return t.copy(n),n}});var Ae=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e};var xe=function(t,e){for(var r=-1,n=null==t?0:t.length,i=0,o=[];++r<n;){var a=t[r];e(a,r,t)&&(o[i++]=a)}return o};var ze=function(){return[]},ke=Object.prototype.propertyIsEnumerable,$e=Object.getOwnPropertySymbols,Ce=$e?function(t){return null==t?[]:(t=Object(t),xe($e(t),function(e){return ke.call(t,e)}))}:ze;var Pe=function(t,e){return Dt(t,Ce(t),e)};var Ie=function(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t},Me=de(Object.getPrototypeOf,Object),Te=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Ie(e,Ce(t)),t=Me(t);return e}:ze;var Ue=function(t,e){return Dt(t,Te(t),e)};var Re=function(t,e,r){var n=e(t);return Kt(t)?n:Ie(n,r(t))};var Fe=function(t){return Re(t,me,Ce)};var Be=function(t){return Re(t,Oe,Te)},De=ct(k,"DataView"),Le=ct(k,"Promise"),Ve=ct(k,"Set"),We=ct(k,"WeakMap"),Ne=Z(De),qe=Z(ut),He=Z(Le),Ge=Z(Ve),Je=Z(We),Ke=L;(De&&"[object DataView]"!=Ke(new De(new ArrayBuffer(1)))||ut&&"[object Map]"!=Ke(new ut)||Le&&"[object Promise]"!=Ke(Le.resolve())||Ve&&"[object Set]"!=Ke(new Ve)||We&&"[object WeakMap]"!=Ke(new We))&&(Ke=function(t){var e=L(t),r="[object Object]"==e?t.constructor:void 0,n=r?Z(r):"";if(n)switch(n){case Ne:return"[object DataView]";case qe:return"[object Map]";case He:return"[object Promise]";case Ge:return"[object Set]";case Je:return"[object WeakMap]"}return e});var Qe=Ke,Xe=Object.prototype.hasOwnProperty;var Ye=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&Xe.call(t,"index")&&(r.index=t.index,r.input=t.input),r},Ze=k.Uint8Array;var tr=function(t){var e=new t.constructor(t.byteLength);return new Ze(e).set(new Ze(t)),e};var er=function(t,e){var r=e?tr(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)},rr=/\w*$/;var nr=function(t){var e=new t.constructor(t.source,rr.exec(t));return e.lastIndex=t.lastIndex,e},ir=$?$.prototype:void 0,or=ir?ir.valueOf:void 0;var ar=function(t){return or?Object(or.call(t)):{}};var sr=function(t,e){var r=e?tr(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)},cr="[object Boolean]",ur="[object Date]",lr="[object Map]",fr="[object Number]",pr="[object RegExp]",dr="[object Set]",vr="[object String]",hr="[object Symbol]",yr="[object ArrayBuffer]",br="[object DataView]",mr="[object Float32Array]",jr="[object Float64Array]",gr="[object Int8Array]",_r="[object Int16Array]",wr="[object Int32Array]",Or="[object Uint8Array]",Er="[object Uint8ClampedArray]",Sr="[object Uint16Array]",Ar="[object Uint32Array]";var xr=function(t,e,r){var n=t.constructor;switch(e){case yr:return tr(t);case cr:case ur:return new n(+t);case br:return er(t,r);case mr:case jr:case gr:case _r:case wr:case Or:case Er:case Sr:case Ar:return sr(t,r);case lr:return new n;case fr:case vr:return new n(t);case pr:return nr(t);case dr:return new n;case hr:return ar(t)}},zr=Object.create,kr=function(){function t(){}return function(e){if(!V(e))return{};if(zr)return zr(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();var $r=function(t){return"function"!=typeof t.constructor||pe(t)?{}:kr(Me(t))},Cr="[object Map]";var Pr=function(t){return Vt(t)&&Qe(t)==Cr},Ir=ae&&ae.isMap,Mr=Ir?oe(Ir):Pr,Tr="[object Set]";var Ur=function(t){return Vt(t)&&Qe(t)==Tr},Rr=ae&&ae.isSet,Fr=Rr?oe(Rr):Ur,Br=1,Dr=2,Lr=4,Vr="[object Arguments]",Wr="[object Function]",Nr="[object GeneratorFunction]",qr="[object Object]",Hr={};Hr[Vr]=Hr["[object Array]"]=Hr["[object ArrayBuffer]"]=Hr["[object DataView]"]=Hr["[object Boolean]"]=Hr["[object Date]"]=Hr["[object Float32Array]"]=Hr["[object Float64Array]"]=Hr["[object Int8Array]"]=Hr["[object Int16Array]"]=Hr["[object Int32Array]"]=Hr["[object Map]"]=Hr["[object Number]"]=Hr[qr]=Hr["[object RegExp]"]=Hr["[object Set]"]=Hr["[object String]"]=Hr["[object Symbol]"]=Hr["[object Uint8Array]"]=Hr["[object Uint8ClampedArray]"]=Hr["[object Uint16Array]"]=Hr["[object Uint32Array]"]=!0,Hr["[object Error]"]=Hr[Wr]=Hr["[object WeakMap]"]=!1;var Gr=function t(e,r,n,i,o,a){var s,c=r&Br,u=r&Dr,l=r&Lr;if(n&&(s=o?n(e,i,o,a):n(e)),void 0!==s)return s;if(!V(e))return e;var f=Kt(e);if(f){if(s=Ye(e),!c)return Ae(e,s)}else{var p=Qe(e),d=p==Wr||p==Nr;if(Xt(e))return Se(e,c);if(p==qr||p==Vr||d&&!o){if(s=u||d?{}:$r(e),!c)return u?Ue(e,Ee(s,e)):Pe(e,je(s,e))}else{if(!Hr[p])return o?e:{};s=xr(e,p,c)}}a||(a=new Mt);var v=a.get(e);if(v)return v;if(a.set(e,s),Fr(e))return e.forEach(function(i){s.add(t(i,r,n,i,e,a))}),s;if(Mr(e))return e.forEach(function(i,o){s.set(o,t(i,r,n,o,e,a))}),s;var h=l?u?Be:Fe:u?keysIn:me,y=f?void 0:h(e);return Tt(y||e,function(i,o){y&&(i=e[o=i]),Bt(s,o,t(i,r,n,o,e,a))}),s},Jr=1,Kr=4;var Qr=function(t){return Gr(t,Jr|Kr)};function Xr(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var Yr={},Zr=[],tn=!1;var en=function(){function t(e){var r=e.limit,n=e.type;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.type=n,this.maxCount=r,tn?this.init():Zr.push(this)}var e,r,n;return e=t,(r=[{key:"init",value:function(){var t=Yr[this.type],e=[new t];this.Ctor=t,this.pool=e,this.defautls=Qr(e[0].attr())}},{key:"getInstance",value:function(){var t=this.Ctor,e=this.pool;return e.length?t.call(e.pop()):new t}},{key:"recycle",value:function(t){t.remove();var e=this.pool,r=this.maxCount;e.push(t),e.length>r&&e.splice(0,e.length-r)}},{key:"defaultAttrs",get:function(){return Qr(this.defautls)}}])&&Xr(e.prototype,r),n&&Xr(e,n),t}(),rn=function(t){return{props:{id:String,attrs:Object},inject:["$layer"],objectPool:new en({limit:20,type:t}),data:function(){var t=this.$options.objectPool;return this.objectPool=t,{layer:null,spriteElem:t.getInstance()}},watch:{"$layer.spriteElem":{handler:function(t,e){t&&t!==e&&(this.layer=t,e&&e.removeChild(this.spriteElem),t.appendChild(this.spriteElem),this.updateAttrs(this.attrs))},immediate:!0},attrs:{deep:!0,immediate:!0,handler:function(t){this.updateAttrs(t)}}},methods:{updateAttrs:function(t){this.spriteElem.attr(Qr(t))},animate:function(){var t;this.anims=this.anims||[],this.anims.push((t=this.spriteElem).animate.apply(t,arguments))}},render:function(e){return e("div",{staticClass:"spritejs-".concat(t.toLowerCase()),attrs:{id:this.id}},this.$slots.default)},created:function(){l(this)},destroyed:function(){this.anims&&this.anims.forEach(function(t){t.cancel()}),f(this),this.objectPool.recycle(this.spriteElem),this.spriteElem=null,this.anims=null}}},nn={name:"s-group",mixins:[rn("Group")],provide:function(){return{$layer:{spriteElem:this.spriteElem}}}},on={name:"s-sprite",mixins:[rn("Sprite")]},an={mixins:[rn("Label")],name:"s-label",render:function(t){var e=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Array.isArray(e)?e.map(function(e){return e.children?t(e.children):e.text}).join(""):String(e)}(this.$slots.default);return e&&this.spriteElem.attr("text",e),t("span",{attrs:{id:this.id}},e)}};var sn,cn,un={name:"s-path",mixins:[rn("Path")]},ln={install:function(t,e){var r;(e=e||{}).spritejs||"undefined"==typeof window||(e.spritejs=window.spritejs),r=e.spritejs,tn||(tn=!0,Yr=r,Zr.forEach(function(t){return t.init()}),Zr=null),Object.defineProperty(t.prototype,"$spritejs",{value:e.spritejs,configurable:!1,writable:!1,enumerable:!1});var n=[u,p,nn,on,an,un];e.globalSpriteRefMixin&&t.mixin(fn),n.forEach(function(e){t.component(e.name,e)})}},fn={computed:{$spritesRefs:function(){var t=this.$refs,e=Object.keys(t).reduce(function(e,r){return e[r]={get:function(){var e=t[r];return e&&e.spriteElem?e.spriteElem:null}},e},{});return Object.defineProperties({},e)}}},pn={install:function(t){t.use(ln,{spritejs:window.spritejs,globalSpriteRefMixin:!0})}},dn={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app",style:t.style},[r("div",{staticClass:"navbar"},[r("router-link",{staticClass:"site-title",attrs:{tag:"div",to:"/"}},[t._v("SpriteVue")]),t._l(t.pages,function(e,n){return r("router-link",{key:n,staticClass:"navbar__item",attrs:{to:e.path}},[t._v(t._s(e.title))])})],2),r("div",{staticClass:"main"},[r("router-view")],1)])},staticRenderFns:[],data:function(){return{style:null}},computed:{currentPage:function(){var t=this.$route.path;return this.pages.filter(function(e){return e.path===t})[0]}},created:function(){this.pages=this.$pages.sort(function(t,e){return t.index-e.index})}},vn=Object.assign({name:"error"},dn),hn=(sn={"./index.js":pn},(cn=function(t){return sn[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}).keys=function(){return Object.keys(sn)},cn),yn=function(){var t={"./default.vue":dn,"./error.vue":vn},e=function(e){return t[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()};return e.keys=function(){return Object.keys(t)},e}(),bn=function(t){return t.__esModule&&t.default||t},mn={install:function(t){t.prototype.$nprogress=r,hn.keys().forEach(function(e){t.use(bn(hn(e)))}),yn.keys().forEach(function(e){var r=bn(yn(e)),n=r.name;if(!n){var i=e.split(/\/|\\/);n=i[i.length-1].replace(/\.vue$/,"")}t.component("layout-".concat(n),r)}),t.component("layout-default")||t.component("layout-default",{render:function(t){return t("router-view")}})}};"undefined"!=typeof window&&window.createApp&&window.createApp.use(mn),"undefined"!=typeof module&&(module.exports=mn)}();