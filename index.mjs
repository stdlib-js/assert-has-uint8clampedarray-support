// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint8clampedarray@v0.1.1-esm/index.mjs";var r="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;function n(){var n,e;if("function"!=typeof r)return!1;try{e=new r([-1,0,1,3.14,4.99,255,256]),n=t(e)&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(t){n=!1}return n}export{n as default};
//# sourceMappingURL=index.mjs.map
