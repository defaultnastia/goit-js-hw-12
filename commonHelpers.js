import{i as g,a as L,s as v}from"./assets/vendor-36533292.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function S(e,o){const s=q(e);o.insertAdjacentHTML("beforeend",s)}function c(e){e.toString()==="400"&&(e="Tell support there is a parameter error."),e.toString()==="404"&&(e="Tell support there is an endpoint error."),e.toString()==="500"&&(e="Try again later."),e.toString()==="missing_keyword"&&(e="Enter the keyword."),e.toString()==="no_images_found"&&(e="Sorry, there are no images matching your search query. Please try again!"),g.show({title:"Oops!",message:`${e}`,position:"bottomLeft",color:"red",displayMode:"replace"})}function _(e){e==="no_more_results"&&(e="We are sorry, but you have reached the end of search results."),g.show({title:"ⓘ",message:`${e}`,position:"bottomLeft",color:"blue",displayMode:"replace"})}function b(e){e?d.classList.remove("visually-hidden"):d.classList.add("visually-hidden")}function q(e){if(e.length===0)return"";let o="";return e.forEach(s=>{o+=`<li><a href="${s.largeImageURL}"><img src="${s.webformatURL.replace("_640","_340")}" alt="${s.tags}"/></a>${M(s)}
</li>`}),o}function M(e){return`<div class="stats-box"><p>Likes<br><span>${e.likes}</span></p><p>Views<br><span>${e.views}</span></p><p>Comments<br><span>${e.comments}</span></p><p>Downloads<br><span>${e.downloads}</span></p></div>`}L.defaults.baseURL="https://pixabay.com/api/";const P="43979459-cb9029671f39809d08984a919",f=15;let u,n=1;async function $(e){var s;const o={params:{q:e,key:P,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:f,page:n}};try{const t=(await L.get("",o)).data;if(t.totalHits===0){c("no_images_found");return}return n+=1,u=Math.ceil(t.totalHits/f),u>=n?b(!0):_("no_more_results"),t.hits}catch(a){const t=(s=a==null?void 0:a.response)!=null&&s.status?a.response.status:a;c(t)}}function k(){n=1,u=15}const d=document.querySelector(".load-more-js"),i=document.querySelector(".gallery"),I=document.querySelector(".search-wrapper"),T=".gallery a",m=document.querySelector(".loader"),y=document.querySelector(".nothing-fetched"),O=new v(T,{captionDelay:250,captionsData:"alt"});let p="";I.addEventListener("submit",async e=>{if(e.preventDefault(),p=e.target.elements.searchbox.value.trim(),p===""){c("missing_keyword");return}i.innerHTML="",k(),await w()});d.addEventListener("click",async e=>{await w(),x(2)});async function w(){h(!1),m.classList.remove("visually-hidden"),b(!1);const e=await $(p);m.classList.add("visually-hidden"),Array.isArray(e)&&(S(e,i),O.refresh(),i.hasChildNodes()||h(!0))}function h(e){e?y.classList.remove("visually-hidden"):y.classList.add("visually-hidden")}function x(e){const s=i.querySelector("li").getBoundingClientRect();window.scrollBy({top:e*s.height,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map