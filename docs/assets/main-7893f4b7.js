(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&c(t)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();console.log(["z","a","b","c"].sort());function u(o){function n(e,r){[o[e],o[r]]=[o[r],o[e]]}function i(){for(let e=0;e<o.length-1;e++)if(o[e]>o[e+1])return n(e,e+1),!1;return!0}function c(){let e=0;for(let r=0;r<o.length;r++)for(let t=r+1;t<o.length;t++)o[r]>o[t]&&e++;return e}for(;;)if(console.log(`Problem count = ${c()}`),i())return o}window.philSort=u;console.log("Try philSort([1,9,2,8,4,7]);");