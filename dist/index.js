"use strict";var t=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var n=t(function(m,i){
var l=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;i.exports=l
});var u=t(function(d,s){
var o=require('@stdlib/assert-is-uint8clampedarray/dist'),p=n();function y(){var a,r;if(typeof p!="function")return!1;try{r=new p([-1,0,1,3.14,4.99,255,256]),a=o(r)&&r[0]===0&&r[1]===0&&r[2]===1&&r[3]===3&&r[4]===5&&r[5]===255&&r[6]===255}catch(e){a=!1}return a}s.exports=y
});var c=u();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
