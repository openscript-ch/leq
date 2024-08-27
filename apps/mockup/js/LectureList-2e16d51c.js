import{_ as t,a as e}from"./_rollupPluginBabelHelpers-56fbbc65.js";import"./web.dom-collections.iterator-c5b25a0f.js";import"./es.array.sort-03d37dea.js";import{B as a}from"./ui.mjs";import{u as s}from"./UpdatePagination-7c4aae14.js";import"./array-sort-a36e91b7.js";class i extends Error{constructor(t){super(t||"Promise was canceled"),this.name="CancelError"}get isCanceled(){return!0}}const n=Object.freeze({pending:Symbol("pending"),canceled:Symbol("canceled"),resolved:Symbol("resolved"),rejected:Symbol("rejected")});class r{static fn(t){return(...e)=>new r(((a,s,i)=>{e.push(i),t(...e).then(a,s)}))}#t=[];#e=!0;#a=n.pending;#s;#i;constructor(t){this.#s=new Promise(((e,a)=>{this.#i=a;const s=t=>{if(this.#a!==n.pending)throw new Error(`The \`onCancel\` handler was attached after the promise ${this.#a.description}.`);this.#t.push(t)};Object.defineProperties(s,{shouldReject:{get:()=>this.#e,set:t=>{this.#e=t}}}),t((t=>{this.#a===n.canceled&&s.shouldReject||(e(t),this.#n(n.resolved))}),(t=>{this.#a===n.canceled&&s.shouldReject||(a(t),this.#n(n.rejected))}),s)}))}then(t,e){return this.#s.then(t,e)}catch(t){return this.#s.catch(t)}finally(t){return this.#s.finally(t)}cancel(t){if(this.#a===n.pending){if(this.#n(n.canceled),this.#t.length>0)try{for(const t of this.#t)t()}catch(t){return void this.#i(t)}this.#e&&this.#i(new i(t))}}get isCanceled(){return this.#a===n.canceled}#n(t){this.#a===n.pending&&(this.#a=t)}}Object.setPrototypeOf(r.prototype,Promise.prototype);var o="asc",c="desc",l={ajax:!0},h=r.fn(((t,e)=>t));class d extends a{init(t){return this.el=t,this.on("click","[data-sort]",this.onSortClick),this.on("click",".js-Pagination--next, .js-Pagination--prev",this.onPrevNextClick),this.paginationPrevEl=this.el.querySelector(".js-Pagination--prev"),this.paginationNextEl=this.el.querySelector(".js-Pagination--next"),this.paginationCurEl=this.el.querySelector(".js-Pagination--current"),this.hasPagination()&&(this.paginationMax=Number(this.el.querySelector(".js-Pagination--max").innerText),this.updatePagination(1)),this}onSortClick(t){var e=t.delegateTarget||t.target,a=e.dataset.sort,s=this.getSortDirection(e);this.el.querySelectorAll("[data-sort]").forEach((t=>t.dataset.sortDir=null)),e.dataset.sortDir=s,this.sort="".concat(a," ").concat(s),this.updatePagination(1);var i=this.buildURL();this.load(i)}buildURL(){var e,a,{pageIndex:s,sort:i,href:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=this.el.querySelector(".js-LectureList--content"),o=s||this.pageIndex,c=i||this.sort,h=n||r.dataset.lectureListHref,d=(e=t(t({},l),{},{page:o,sort:c}),a=[],Object.entries(e).forEach((t=>{var[e,s]=t;null!=s&&a.push(encodeURIComponent(e)+"="+encodeURIComponent(s))})),a.join("&"));return"".concat(h).concat(h.includes("?")?"&":"?").concat(d)}load(t){var a=this;return e((function*(){a.request&&a.request.cancel(),a.el.classList.add("is-ajax-loading"),a.request=h(fetch(t,{method:"GET"}));var e=yield a.request,s=yield e.text();a.onLoadSuccess(s)}))()}onPrevNextClick(t){var e=t.delegateTarget||t.target;e.classList.contains("js-Pagination--prev")?this.updatePagination(this.pageIndex-1):e.classList.contains("js-Pagination--next")&&this.updatePagination(this.pageIndex+1);var a=this.buildURL();this.load(a)}hasPagination(){return!!this.paginationNextEl}updatePagination(t){this.hasPagination()&&(this.pageIndex=s({newIndex:t,maxIndex:this.paginationMax,curEl:this.paginationCurEl,prevEl:this.paginationPrevEl,nextEl:this.paginationNextEl}))}onLoadSuccess(t){var e=(new DOMParser).parseFromString(t,"text/html"),a=this.el.querySelector("tbody"),s=e.querySelector(".js-LectureList tbody");this.el.classList.remove("is-ajax-loading"),this.el.classList.add("is-ajax-loaded"),a&&s&&(a.innerHTML=s.innerHTML)}getSortDirection(t){if(t)return t.dataset.sortDir===o?c:o}}function u(){return new d}export{d as LectureList,u as default};
