(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const s=""+new URL("typescript-f6ead1af.svg",import.meta.url).href,l=""+new URL("../vite.svg",import.meta.url).href;function u(r){let o=0;const c=i=>{o=i,r.innerHTML=`count is ${o}`};r.addEventListener("click",()=>c(o+1)),c(0)}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${l}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${s}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;u(document.querySelector("#counter"));console.log(["z","a","b","c"].sort());function a(r){function o(e,t){[r[e],r[t]]=[r[t],r[e]]}function c(){for(let e=0;e<r.length-1;e++)if(r[e]>r[e+1])return o(e,e+1),!1;return!0}function i(){let e=0;for(let t=0;t<r.length;t++)for(let n=t+1;n<r.length;n++)r[t]>r[n]&&e++;return e}for(;;)if(console.log(`Problem count = ${i()}`),c())return r}window.philSort=a;console.log("Try philSort([1,9,2,8,4,7]);");
