// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol:void 0,r="function"==typeof o?o.toStringTag:"",l=t&&"symbol"==typeof Symbol.toStringTag?function(t){var o,l,i,f,a;if(null==t)return e.call(t);l=t[r],a=r,o=null!=(f=t)&&n.call(f,a);try{t[r]=void 0}catch(n){return e.call(t)}return i=e.call(t),o?t[r]=l:delete t[r],i}:function(t){return e.call(t)},i="function"==typeof Uint8ClampedArray,f="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;return function(){var t,e,n;if("function"!=typeof f)return!1;try{e=new f([-1,0,1,3.14,4.99,255,256]),n=e,t=(i&&n instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===l(n))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){t=!1}return t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).hasUint8ClampedArraySupport=e();
//# sourceMappingURL=index.js.map