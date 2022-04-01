// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint8clampedarray@esm/index.mjs";var r="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,n=t,e=r;var a=function(){var t,r;if("function"!=typeof e)return!1;try{r=new e([-1,0,1,3.14,4.99,255,256]),t=n(r)&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){t=!1}return t};export{a as default};
//# sourceMappingURL=index.mjs.map
