import{S as q,i as v,a as $}from"./assets/vendor-CctE18Lr.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();let A=new q(".gallery a");function E(t){return t.map(({webformatURL:r,largeImageURL:i,tags:n,likes:e,views:o,comments:a,downloads:P})=>`<li class="gallery-item">
 <a class="gallery-link" href="${i}">
 <img class="gallery-img" src="${r}" alt ="${n}" width="360" height="200"/>
 </a>
<ul class="gallery-info">
<li class="gallery-info-item">
<h3 class="gallery-info-title">Likes</h3>
<p class="gallery-info-text">${e}</p>
</li>
<li class="gallery-info-item">
<h3 class="gallery-info-title">Views</h3>
<p class="gallery-info-text">${o}</p>
</li>
<li class="gallery-info-item">
<h3 class="gallery-info-title">Comments</h3>
<p class="gallery-info-text">${a}</p>
</li>
<li class="gallery-info-item">
<h3 class="gallery-info-title">Downloads</h3>
<p class="gallery-info-text">${P}</p>
</li>
</ul>
</li>`).join("")}function y(t){b.insertAdjacentHTML("beforeend",E(t)),A.refresh()}function M(){b.innerHTML=""}function g(){S.classList.remove("hide")}function d(){S.classList.add("hide")}function m(){s.classList.remove("hide")}function u(){s.classList.add("hide")}function O(){x.classList.remove("hide")}function B(){x.classList.add("hide")}function p(t){v.error({message:t,messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",icon:"material-icons"})}function f(){p("Sorry, there are no images matching your search query. Please try again!")}function C(){p("Please enter the correct name!")}const I="54745176-88cc855ad5905fcb142882934",H="https://pixabay.com/api/",L=15,w=async(t,r=1)=>(await $.get(H,{params:{key:I,q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:L}})).data,T=document.querySelector(".form"),b=document.querySelector(".gallery"),S=document.querySelector(".loader"),s=document.querySelector(".gallery-btn"),x=document.querySelector(".nav-btn");T.addEventListener("submit",z);s.addEventListener("click",D);let c="",l=1,h=0;async function z(t){if(t.preventDefault(),u(),c=t.target.elements["search-text"].value.trim(),!c.length)return C();M(),g();try{l=1;const r=await w(c,l);if(r.hits.length===0)return f();y(r.hits),m(),h=Math.ceil(r.totalHits/L),l>=h&&(u(),(void 0)())}catch{f()}finally{d(),t.target.reset()}}async function D(){g(),u(),s.disabled=!0,B();try{l+=1;const t=await w(c,l);l>=h?(u(),(void 0)()):(m(),s.disabled=!1),O(),y(t.hits),d();const i=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:i*2,behavior:"smooth"})}catch{f()}finally{d()}}
//# sourceMappingURL=index.js.map
