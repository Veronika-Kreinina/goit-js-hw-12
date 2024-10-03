import{a as w,S,i as l}from"./assets/vendor-D73Uttp0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();function m(e){e.insertAdjacentHTML("afterend",`
    <div class="loader-container">
    <span class="loader-text">Loading images, please wait...</span>
    </div>
  `)}function p(){const e=document.querySelector(".loader-container");e&&e.remove()}function b(e){return e.hits.map(({webformatURL:o,largeImageURL:a,tags:s,likes:t,views:r,comments:i,downloads:L})=>`
            <li class="gallery-item">
              <a class="gallery-link" href="${a}">
                <img
                  class="gallery-image"
                  src="${o}"
                  alt="${s}"
                  loading="lazy"
                  
                />
              </a>
              <ul class="img-wrapper">
                <li class="img-descr">Likes<span>${t}</span></li>
                <li class="img-descr">Views<span>${r}</span></li>
                <li class="img-descr">Comments<span>${i}</span></li>
                <li class="img-descr">Downloads<span>${L}</span></li>
              </ul>
            </li>
      `).join("")}function q(){document.querySelector(".js-btn-wrapper").classList.remove("is-hidden")}function u(){document.querySelector(".js-btn-wrapper").classList.add("is-hidden")}const E="https://pixabay.com/api/",M="46105893-c3619f828e66c5e4a4f6c6159";async function g(e,o=15,a=15){return(await w.get(E,{params:{key:M,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:a}})).data}const v=document.querySelector(".js-search-form");document.querySelector(".js-gallery");const n=document.querySelector(".gallery");document.querySelector(".loader");const B=document.querySelector(".js-btn-wrapper");let h=new S(".gallery a",{captionsData:"alt",captionDelay:250}),c="",d=1,f=0;v.addEventListener("submit",$);B.addEventListener("click",D);u();function j(){n.innerHTML="",u(),d=1,f=0}async function $(e){e.preventDefault();const o=new FormData(e.target),{search:a}=Object.fromEntries(o.entries());if(c=a.trim(),!c){l.error({title:"Error",message:"The search query is empty.",position:"topRight"});return}j(),m(n);try{const s=await g(c,d);if(f=s.totalHits,s.hits.length===0){l.info({position:"topRight",title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"});return}y(s),h.refresh(),s.hits.length<15?u():q()}catch(s){l.error({title:"Error",message:`Error: ${s.message}`,position:"topRight"})}finally{p()}}async function D(){d+=1,m(n);try{const e=await g(c,d);y(e),h.refresh(),O(),(n.children.length>=f||e.hits.length<15)&&(u(),l.info({position:"topRight",title:"Info",message:"We're sorry, but you've reached the end of search results."}))}catch(e){l.error({title:"Error",message:`Error: ${e.message}`,position:"topRight"})}finally{p()}}function y(e){const o=b(e);n.insertAdjacentHTML("beforeend",o)}function O(){const{height:e}=n.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
