if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const l=e=>i(e,o),t={module:{uri:o},exports:c,require:l};s[o]=Promise.all(n.map((e=>t[e]||l(e)))).then((e=>(r(...e),c)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"dragonfly"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.c19c30ce.css",revision:null},{url:"/img/Logo.a1dbcae2.svg",revision:null},{url:"/img/ham_menu.bbc4b050.svg",revision:null},{url:"/index.html",revision:"36ac19f2718c0d1ddd4445c7bacbc2bd"},{url:"/js/app.5ce3e414.js",revision:null},{url:"/js/chunk-vendors.b899eb13.js",revision:null},{url:"/manifest.json",revision:"d076fbc8bc4ba226c08b366e18894d99"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
