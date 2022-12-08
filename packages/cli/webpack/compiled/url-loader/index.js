(()=>{"use strict";var e={306:(e,t,r)=>{const n=r(888);e.exports=n.default;e.exports.raw=n.raw},888:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t["default"]=loader;t.raw=void 0;var n=_interopRequireDefault(r(17));var i=r(300);var o=r(297);var a=_interopRequireDefault(r(486));var s=_interopRequireDefault(r(631));var u=_interopRequireDefault(r(224));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function shouldTransform(e,t){if(typeof e==="boolean"){return e}if(typeof e==="string"){return t<=parseInt(e,10)}if(typeof e==="number"){return t<=e}return true}function getMimetype(e,t){if(typeof e==="boolean"){if(e){const e=a.default.contentType(n.default.extname(t));if(!e){return""}return e.replace(/;\s+charset/i,";charset")}return""}if(typeof e==="string"){return e}const r=a.default.contentType(n.default.extname(t));if(!r){return""}return r.replace(/;\s+charset/i,";charset")}function getEncoding(e){if(typeof e==="boolean"){return e?"base64":""}if(typeof e==="string"){return e}return"base64"}function getEncodedData(e,t,r,n,i){if(e){return e(n,t,r,i)}return`data:${t}${r?`;${r}`:""},${n.toString(r||undefined)}`}function loader(e){const t=(0,i.getOptions)(this)||{};(0,o.validate)(u.default,t,{name:"URL Loader",baseDataPath:"options"});if(shouldTransform(t.limit,e.length)){const{resourcePath:r}=this;const n=getMimetype(t.mimetype,r);const i=getEncoding(t.encoding);if(typeof e==="string"){e=Buffer.from(e)}const o=getEncodedData(t.generator,n,i,e,r);const a=typeof t.esModule!=="undefined"?t.esModule:true;return`${a?"export default":"module.exports ="} ${JSON.stringify(o)}`}const{loader:r,options:n}=(0,s.default)(t.fallback,t);const a=require(r);const l=Object.assign({},this,{query:n});return a.call(l,e)}const l=true;t.raw=l},631:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t["default"]=normalizeFallback;var n=_interopRequireDefault(r(300));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function normalizeFallback(e,t){let r=require.resolve("../file-loader");let i={};if(typeof e==="string"){r=e;const t=e.indexOf("?");if(t>=0){r=e.substr(0,t);i=n.default.parseQuery(e.substr(t))}}if(e!==null&&typeof e==="object"){({loader:r,options:i}=e)}i=Object.assign({},t,i);delete i.fallback;return{loader:r,options:i}}},300:e=>{e.exports=require("../loader-utils2")},486:e=>{e.exports=require("@modern-js/utils/mime-types")},17:e=>{e.exports=require("path")},297:e=>{e.exports=require("schema-utils")},224:e=>{e.exports=JSON.parse('{"type":"object","properties":{"limit":{"description":"Enables/Disables transformation target file into base64 URIs (https://github.com/webpack-contrib/url-loader#limit).","type":["boolean","number","string"]},"encoding":{"description":"Specify the encoding which the file will be in-lined with.","oneOf":[{"type":"boolean"},{"enum":["utf8","utf16le","latin1","base64","hex","ascii","binary","ucs2"]}]},"mimetype":{"description":"The MIME type for the file to be transformed (https://github.com/webpack-contrib/url-loader#mimetype).","oneOf":[{"type":"boolean"},{"type":"string"}]},"generator":{"description":"Adding custom implementation for encoding files.","instanceof":"Function"},"fallback":{"description":"An alternative loader to use when a target file\'s size exceeds the limit set in the limit option (https://github.com/webpack-contrib/url-loader#fallback).","anyOf":[{"type":"string"},{"additionalProperties":false,"properties":{"loader":{"description":"Fallback loader name.","type":"string"},"options":{"description":"Fallback loader options.","anyOf":[{"type":"object"},{"type":"string"}]}},"type":"object"}]},"esModule":{"description":"By default, url-loader generates JS modules that use the ES modules syntax.","type":"boolean"}},"additionalProperties":true}')}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var i=t[r]={exports:{}};var o=true;try{e[r](i,i.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return i.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r=__nccwpck_require__(306);module.exports=r})();