// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var r=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var a=t&&"symbol"==typeof Symbol.toStringTag?function(t){var a,e,l,y,c;if(null==t)return r.call(t);e=t[o],c=o,a=null!=(y=t)&&n.call(y,c);try{t[o]=void 0}catch(n){return r.call(t)}return l=r.call(t),a?t[o]=e:delete t[o],l}:function(t){return r.call(t)},e="function"==typeof Uint8ClampedArray;var l="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;function y(){var t,r,n;if("function"!=typeof l)return!1;try{r=new l([-1,0,1,3.14,4.99,255,256]),n=r,t=(e&&n instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===a(n))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){t=!1}return t}export{y as default};
//# sourceMappingURL=mod.js.map