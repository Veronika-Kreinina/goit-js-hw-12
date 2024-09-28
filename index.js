import{S as u,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function m(t){const s=new URLSearchParams({key:API_KEY,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${API_URL}?${s}`).then(o=>{if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);return o.json()}).catch(o=>{throw console.error("Error:",o),o})}function f(t){t.insertAdjacentHTML("beforebegin",`
    <div class="loader-container">
      <span class="loader-text">Loading images, please wait...</span>
    </div>
  `)}function d(){const t=document.querySelector(".loader-container");t&&t.remove()}function p(t){return t.hits.map(({webformatURL:s,largeImageURL:o,tags:a,likes:e,views:r,comments:i,downloads:c})=>`
            <li class="gallery-item">
              <a class="gallery-link" href="${o}">
                <img
                  class="gallery-image"
                  src="${s}"
                  alt="${a}"
                />
              </a>
              <ul class="img-wrapper">
                <li class="img-descr">Likes<span>${e}</span></li>
                <li class="img-descr">Views<span>${r}</span></li>
                <li class="img-descr">Comments<span>${i}</span></li>
                <li class="img-descr">Downloads<span>${c}</span></li>
              </ul>
            </li>
      `).join("")}const g=document.querySelector(".search-form"),l=document.querySelector(".gallery");let h=new u(".gallery a",{captionsData:"alt",captionDelay:250});g.addEventListener("submit",y);function y(t){t.preventDefault();const s=new FormData(t.target),{search:o}=Object.fromEntries(s.entries()),a=o.trim();if(!a){n.error({title:"Error",message:"The search query is empty.",position:"topRight"});return}l.innerHTML="",f(l),m(a).then(e=>{if(e.hits.length===0){n.info({position:"topRight",title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"});return}const r=p(e);l.insertAdjacentHTML("beforeend",r),h.refresh()}).catch(e=>{n.error({title:"Error",message:`Error: ${e.message}`,position:"topRight"})}).finally(()=>{d()})}
//# sourceMappingURL=index.js.map
