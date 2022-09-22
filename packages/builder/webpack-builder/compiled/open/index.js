(()=>{var e={34:e=>{"use strict";e.exports=(e,r,t)=>{const define=t=>Object.defineProperty(e,r,{value:t,enumerable:true,writable:true});Object.defineProperty(e,r,{configurable:true,enumerable:true,get(){const e=t();define(e);return e},set(e){define(e)}});return e}},148:(e,r,t)=>{"use strict";const o=t(147);let n;function hasDockerEnv(){try{o.statSync("/.dockerenv");return true}catch(e){return false}}function hasDockerCGroup(){try{return o.readFileSync("/proc/self/cgroup","utf8").includes("docker")}catch(e){return false}}e.exports=()=>{if(n===undefined){n=hasDockerEnv()||hasDockerCGroup()}return n}},272:(e,r,t)=>{"use strict";const o=t(37);const n=t(147);const s=t(148);const isWsl=()=>{if(process.platform!=="linux"){return false}if(o.release().toLowerCase().includes("microsoft")){if(s()){return false}return true}try{return n.readFileSync("/proc/version","utf8").toLowerCase().includes("microsoft")?!s():false}catch(e){return false}};if(process.env.__IS_WSL_TEST__){e.exports=isWsl}else{e.exports=isWsl()}},537:(e,r,t)=>{const o=t(17);const n=t(81);const{promises:s,constants:i}=t(147);const a=t(272);const c=t(148);const u=t(34);const f=t.ab+"xdg-open";const{platform:p,arch:l}=process;const d=(()=>{const e="/mnt/";let r;return async function(){if(r){return r}const t="/etc/wsl.conf";let o=false;try{await s.access(t,i.F_OK);o=true}catch{}if(!o){return e}const n=await s.readFile(t,{encoding:"utf8"});const a=/(?<!#.*)root\s*=\s*(?<mountPoint>.*)/g.exec(n);if(!a){return e}r=a.groups.mountPoint.trim();r=r.endsWith("/")?r:`${r}/`;return r}})();const pTryEach=async(e,r)=>{let t;for(const o of e){try{return await r(o)}catch(e){t=e}}throw t};const baseOpen=async e=>{e={wait:false,background:false,newInstance:false,allowNonzeroExitCode:false,...e};if(Array.isArray(e.app)){return pTryEach(e.app,(r=>baseOpen({...e,app:r})))}let{name:r,arguments:o=[]}=e.app||{};o=[...o];if(Array.isArray(r)){return pTryEach(r,(r=>baseOpen({...e,app:{name:r,arguments:o}})))}let u;const l=[];const m={};if(p==="darwin"){u="open";if(e.wait){l.push("--wait-apps")}if(e.background){l.push("--background")}if(e.newInstance){l.push("--new")}if(r){l.push("-a",r)}}else if(p==="win32"||a&&!c()){const t=await d();u=a?`${t}c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe`:`${process.env.SYSTEMROOT}\\System32\\WindowsPowerShell\\v1.0\\powershell`;l.push("-NoProfile","-NonInteractive","–ExecutionPolicy","Bypass","-EncodedCommand");if(!a){m.windowsVerbatimArguments=true}const n=["Start"];if(e.wait){n.push("-Wait")}if(r){n.push(`"\`"${r}\`""`,"-ArgumentList");if(e.target){o.unshift(e.target)}}else if(e.target){n.push(`"${e.target}"`)}if(o.length>0){o=o.map((e=>`"\`"${e}\`""`));n.push(o.join(","))}e.target=Buffer.from(n.join(" "),"utf16le").toString("base64")}else{if(r){u=r}else{const e=!__dirname||__dirname==="/";let r=false;try{await s.access(t.ab+"xdg-open",i.X_OK);r=true}catch{}const o=process.versions.electron||p==="android"||e||!r;u=o?"xdg-open":f}if(o.length>0){l.push(...o)}if(!e.wait){m.stdio="ignore";m.detached=true}}if(e.target){l.push(e.target)}if(p==="darwin"&&o.length>0){l.push("--args",...o)}const w=n.spawn(u,l,m);if(e.wait){return new Promise(((r,t)=>{w.once("error",t);w.once("close",(o=>{if(e.allowNonzeroExitCode&&o>0){t(new Error(`Exited with code ${o}`));return}r(w)}))}))}w.unref();return w};const open=(e,r)=>{if(typeof e!=="string"){throw new TypeError("Expected a `target`")}return baseOpen({...r,target:e})};const openApp=(e,r)=>{if(typeof e!=="string"){throw new TypeError("Expected a `name`")}const{arguments:t=[]}=r||{};if(t!==undefined&&t!==null&&!Array.isArray(t)){throw new TypeError("Expected `appArguments` as Array type")}return baseOpen({...r,app:{name:e,arguments:t}})};function detectArchBinary(e){if(typeof e==="string"||Array.isArray(e)){return e}const{[l]:r}=e;if(!r){throw new Error(`${l} is not supported`)}return r}function detectPlatformBinary({[p]:e},{wsl:r}){if(r&&a){return detectArchBinary(r)}if(!e){throw new Error(`${p} is not supported`)}return detectArchBinary(e)}const m={};u(m,"chrome",(()=>detectPlatformBinary({darwin:"google chrome",win32:"chrome",linux:["google-chrome","google-chrome-stable","chromium"]},{wsl:{ia32:"/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",x64:["/mnt/c/Program Files/Google/Chrome/Application/chrome.exe","/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe"]}})));u(m,"firefox",(()=>detectPlatformBinary({darwin:"firefox",win32:"C:\\Program Files\\Mozilla Firefox\\firefox.exe",linux:"firefox"},{wsl:"/mnt/c/Program Files/Mozilla Firefox/firefox.exe"})));u(m,"edge",(()=>detectPlatformBinary({darwin:"microsoft edge",win32:"msedge",linux:["microsoft-edge","microsoft-edge-dev"]},{wsl:"/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"})));open.apps=m;open.openApp=openApp;e.exports=open},81:e=>{"use strict";e.exports=require("child_process")},147:e=>{"use strict";e.exports=require("fs")},37:e=>{"use strict";e.exports=require("os")},17:e=>{"use strict";e.exports=require("path")}};var r={};function __nccwpck_require__(t){var o=r[t];if(o!==undefined){return o.exports}var n=r[t]={exports:{}};var s=true;try{e[t](n,n.exports,__nccwpck_require__);s=false}finally{if(s)delete r[t]}return n.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var t=__nccwpck_require__(537);module.exports=t})();