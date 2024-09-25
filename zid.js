function e(){return new URL(document.location).searchParams}const t=({deleteParams:e,addParams:t,updateParams:i})=>{let r=new URL(document.location),a=new URLSearchParams(r.search);if(e)for(let t of e)a.delete(t);if(t)for(let[e,i]of t)a.append(e,i);if(i)for(let[e,t]of i)a.set(e,t);return r.search=a.toString(),r};function i(e,t){e.appendChild(new DOMParser().parseFromString(t,"text/html").body.firstChild)}const r=()=>{let e=new URL(document.location).searchParams,t={};return e.forEach((e,i)=>{t[i]=e}),t},a=(e,t,i)=>{var r;return function(){var a=this,n=arguments,o=i&&!r;clearTimeout(r),r=setTimeout(function(){r=null,i||e.apply(a,n)},t),o&&e.apply(a,n)}},n=Object.freeze({categories:{en:"Categories",ar:"*5FJA'*"},noResults:{en:"No results!",ar:"DE J*E 'D9+H1 9DI F*'&,"},submit:{en:"Submit",ar:"*7(JB"},clear:{en:"Clear",ar:"E3-"},from:{en:"From",ar:"EF"},to:{en:"To",ar:"'DI"},price:{en:"Price",ar:"'D391"},error_priceRange:{en:"Please select price range",ar:"'D1,'! *-/J/ 'DF7'B 'D391J"},error_maxShouldBeSmallerThanMin:{en:"Price from should be less than to",ar:"J,( #F JCHF 'D391 'D#B5I #BD EF 'D391 'D#/FI"},prev:{en:"Prev",ar:"'D3'(B"},next:{en:"Next",ar:"'D*'DJ"},search:{en:"Search",ar:"'D(-+"},matchingCategories:{en:"Matching categories",ar:"'DA&'* 'DE7'(B)"},sortBy:{en:"Sort by",ar:"*1*J( -3(  "},default:{en:"Default",ar:"'D#A*1'6J"},newest:{en:"Newest",ar:"'D#-/+"},oldest:{en:"Oldest",ar:"'D'B/E"},highestPrice:{en:"Highest price",ar:"'D'9DI 391'"},lowestPrice:{en:"Lowest price",ar:"'D'BD 391'"},productsFound:{en:"{{num}} products found",ar:"*E 'J,'/ {{num}} EF*,"}}),o=(e,t,i)=>{let r=n[e]?.[t];if(!r)return e;if(i)for(let[e,t]of Object.entries(i))r=r.replace(`{{${e}}}`,t);return r},l=`<div class="skeleton-label-container">
              <div class="skeleton skeleton-text skeleton-checkbox"></div>
              <div class="skeleton skeleton-text"></div>
          </div>`,s=`
          <div class='fehris-product__card fehris-product__card--loading'>
            
              <div class='fehris-product__card-image'>
                <div class="skeleton skeleton-block"></div>
              </div>

              <div class='fehris-product__card__content'>
                      <div class="fehris-product__card__content__body">
                          <div class="skeleton skeleton-text"></div>
                          <div class="skeleton skeleton-text skeleton-footer"></div>
                          <div class="skeleton skeleton-text skeleton-text__body"></div>
                      </div>
                      
                      <div class='fehris-product__card__content__footer'>
                          <div class="skeleton skeleton-text skeleton-footer"></div>
                          <div class="skeleton skeleton-text skeleton-text__body"></div>
                      </div>
              </div>
            </div>`,d={getFilterSection:(e,t)=>`<div class="fehris-filter" id="${e}"><h3 class="name">${t}</h3></div>`,getFilterLoader:()=>`
      <div class="skeleton skeleton-text skeleton-text__body" style="height: 20px;"></div>${l}${l}${l}${l}<hr style='border-top: 1px solid #ccc' />
      <div class="skeleton skeleton-text skeleton-text__body" style="height: 20px;"></div>${l}${l}${l}${l}<hr style='border-top: 1px solid #ccc' />
      <div class="skeleton skeleton-text skeleton-text__body" style="height: 20px;"></div>${l}${l}${l}${l}<hr style='border-top: 1px solid #ccc' />
    `},c=({fromId:e,toId:t,id:i,language:r})=>`
  <div class='fehrisFiltersPrice mt-4' id="${i}">
    <h3 class="name">${o("price",r)}</h3>
    <div class='fehrisFiltersPrice_inputs'>
      <div class='fehrisFiltersPrice_inputs_input' id='${e}'>
        <div>${o("from",r)}</div>
      </div>
      <div class='fehrisFiltersPrice_inputs_input' id='${t}'>
        <div>${o("to",r)}</div>
      </div>
    </div>
  </div>
  `,u=e=>`<div class='fehrisFiltersPrice__error' id='${e}'></div>`,g={getProductsListContainer:({id:e})=>`<div id="${e}" class="fehris-products-list"></div>`,getProductCard:({name:e,img:t,id:i,formatted_price:r,html_url:a})=>`
    <div class="fehris-product__card">
      <a class="fehris-product__card--link" href="${a}">
          <div class="fehris-product__card-image">
              <img id="${i}" src="${t}" alt="${e}">    
          </div>
          <div class="fehris-product__card__content">
              <div class="fehris-product__card__content__body">
                  <div class="fehris-product__card__content__body-title">
                      ${e}
                  </div>
                  <div class="fehris-product__card__content__body-subTitle">
                      <span>${r}</span>
                  </div>
              </div>
              <div class="fehris-product__card__content__footer">
                  <span>\u{645}\u{62A}\u{648}\u{641}\u{631} \u{628}\u{639}\u{62F}\u{629} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}</span>
              </div>
          </div>
      </a>
    </div>`,getProductLoader:()=>{let e="";for(let t=0;t<12;t++)e+=s;return`<div class='fehris-products-list'>${e}</div>`},getTopBarContainer:({id:e,productsCount:t,language:i})=>`
        <div class="fehrisPlpTopbar" id="${e}">
          <p>${o("productsFound",i,{num:t})}</p>
        </div>`,getSortingContainer:({id:e,language:t})=>`
        <div class='fehrisPlpTopbar__sort' id='${e}'>
          <span>${o("sortBy",t)}</span>
        </div>`},p={getContainer:e=>`<nav class="fehris-pagination"><ul id='${e}'></ul></nav>`,getItem:({pageNum:e,href:t,active:i,disabled:r})=>`<li class='fehris-pagination_item ${r?"disabled":""}'>
      <a 
          class="fehris-pagination_link 
          ${i?"active":""}" 
          href="${r?"javascript:void(0)":t}">
            ${e}
        </a>
    </li>`},m={getSearch:({searchContainerId:e,searchId:t,autocompleteId:i,language:r})=>`
      <div class='fehris-search' id="${e}">
        <input 
          type="text"
          id="${t}"
          class='search-input fehris-header-search--input'
          placeholder="${o("search",r)}"
        />

        <img src='https://i.gifer.com/ZKZg.gif' class='loader'/>

        <div id="${i}" class='fehris-autocomplete'></div>
      </div>`,getAutocompleteNoResults:({language:e})=>`
      <div class='fehris-autoComplete__no-results'>
        <img src='https://static.thenounproject.com/png/744760-200.png' />
        <p> ${o("noResults",e)} </p>
      </div>`,getAutocompleteContainer:({id:e,keywordsId:t,categoriesId:i,productsId:r})=>`
      <div id="${e}" class='fehris-autocomplete__container'>
          <div class='fehris-autocomplete__layout'>
              <div id="${t}" class="fehris-autocomplete__list"></div>
              <div id="${i}" class='fehris-autocomplete__list'></div>
          </div>
          <div id="${r}" class='fehris-autocomplete__products'></div>
      </div>`,getCategoriesHead:({language:e})=>`
      <h5 class='fehris-autocomplete__section-title'>
        ${o("matchingCategories",e)}
      </h5>`,getKeywordItem:({href:e,keyword:t})=>`<p class='item'> <a href="${e}"> ${t} </a> </p>`,getProductItem:({avatar:e,name:t,url:i})=>`
      <div class='fehris-autocomplete__product-card'>
        <a class='fehris-autocomplete__card--link' href="${i}">
          <div class='fehris-autocomplete__card-image'>
              <img src="${e}" alt="${t}" loading="lazy" />
          </div>
          <div class='fehris-autocomplete__card__content'>
              <div class='fehris-autocomplete__card__content__body'>
                  <div class='fehris-autocomplete__card__content__body-title'>
                    ${t}
                  </div>
              </div>
          </div>
        </a>
      </div>`};function h({textContent:e,onClick:t}){let i=document.createElement("button");return i.textContent=e,i.onclick=t,i}function _({name:e,id:t,value:i,placeholder:r="",onChange:a,min:n,max:o}){let l=document.createElement("input");return l.type="number",l.value=i,l.placeholder=r,e&&(l.name=e),t&&(l.id=t),"number"==typeof n&&(l.min=n),"number"==typeof o&&(l.max=o),a&&l.addEventListener("change",a),l}const f=Object.freeze({FROM_PRICE:"from_price",To_PRICE:"to_price",SEARCH:"search",CATEGORY:"category",SORTING_FIELD:"sorting_field",SORTING_ORDER:"sorting_order",PAGE:"page"}),v=[f.SEARCH,f.CATEGORY,f.FROM_PRICE,f.To_PRICE,f.SORTING_FIELD,f.SORTING_ORDER,f.PAGE],E={OPTIONS:{DEFAULT:"default",NEWEST:"newest",OLDEST:"oldest",PRICE_HIGH:"price_high",PRICE_LOW:"price_low"},FIELDS:{CREATED_AT:"created_at",PRICE:"price"},ORDER:{ASC:"asc",DESC:"desc"}},I=18;!function(n,l){let s=()=>"ltr"===window.appDirection?"en":"ar",y=r(),P=(e,t,r)=>{let a=document.getElementById(e);t.forEach(e=>{let{type:t,name:n,id:o,value:l,checked:s,count:d,onChange:c}=e,u=r||c,g=document.createElement("input");g.type=t,g.name=n,g.id=o,g.value=l,g.checked=s||!1,g.addEventListener("change",function(){u(g.name,g.id,g.checked)});let p=document.createElement("label");p.classList.add("fehris-filter__checkbox"),"radio"===t&&p.classList.add("fehris-filter__radio"),a.appendChild(p),p.appendChild(g),i(p,'<span class="check"></span>'),i(p,`<div><span>${l} </span> <span> (${d})</span></div>`)})},S=()=>{let t=e(),i={};v.forEach(e=>{let r=t.get(e);r&&(i[e]=r),t.delete(e)});let r=[];for(let[e,i]of t){let t=i.split(","),a={name:e,choices:t.map((e,i)=>({choice:e,...i===t.length-1?{last_choice:!0}:{}}))};r.push(a)}return r.length&&(r[r.length-1]={...r[r.length-1],last_option:!0}),{...i,options:r.length?r:void 0}},O=i=>{let r=i?.options,a=i?.categories,n=e(),o=(e,i,r)=>{let a=t({updateParams:[["category",i]],deleteParams:[f.PAGE]});window.location=a},l=(e,i,r)=>{let a=n.get(e),o=a?a.split(","):[];r?o.push(i):o=o.filter(e=>e!=i);let l=o.length?t({updateParams:[[e,o]],deleteParams:[f.PAGE]}):t({deleteParams:[e,f.PAGE]});window.location=l};return{categories:a.map(e=>{let t=e.key,i=e.name,r=n.get("category")===t;return{type:"radio",id:t,value:i,name:"category",count:e.doc_count,checked:r,onChange:o}}),filters:r.map(e=>{let t=e.key,i=e.doc_count,r=n.get(t),a=e.buckets.map(e=>({type:"checkbox",id:e.key,value:e.key,name:t,count:e.doc_count,checked:!!r&&r.includes(e.key),onChange:l}));return{filterTitle:t,filterCount:i,filterOptions:a}})}},C={getSelectedSort:()=>{let e=y[f.SORTING_FIELD],t=y[f.SORTING_ORDER];if(e===E.FIELDS.CREATED_AT){if(t===E.ORDER.ASC)return E.OPTIONS.OLDEST;if(t===E.ORDER.DESC)return E.OPTIONS.NEWEST}if(e===E.FIELDS.PRICE){if(t===E.ORDER.ASC)return E.OPTIONS.PRICE_LOW;if(t===E.ORDER.DESC)return E.OPTIONS.PRICE_HIGH}return E.OPTIONS.DEFAULT},getSortingOptions:({language:e})=>{let t=C.getSelectedSort();return[{label:o("default",e),value:E.OPTIONS.DEFAULT,isSelected:t===E.OPTIONS.DEFAULT},{label:o("newest",e),value:E.OPTIONS.NEWEST,isSelected:t===E.OPTIONS.NEWEST},{label:o("oldest",e),value:E.OPTIONS.OLDEST,isSelected:t===E.OPTIONS.OLDEST},{label:o("highestPrice",e),value:E.OPTIONS.PRICE_HIGH,isSelected:t===E.OPTIONS.PRICE_HIGH},{label:o("lowestPrice",e),value:E.OPTIONS.PRICE_LOW,isSelected:t===E.OPTIONS.PRICE_LOW}]}},T=e=>`${window.location.origin+window.location.pathname}?${f.SEARCH}=${e}`,R=async(e,t,i="POST")=>await fetch(`https://proxy-zid.api.fehris.io/${t}?store_id=348281`,{method:i,headers:{"Content-Type":"application/json",accept:"*/*"},body:e}),$=async({search:e,language:t,category:i,sorting_field:r,sorting_order:a,from_price:n,to_price:o,options:l})=>{let s={language:t,query:e,category_id:i,price_gte:n,price_lte:o,sorting_field:r,sorting_order:a,options:l};JSON.stringify({filter:!0,...s}),JSON.stringify({post_filter:!0,...s});let d=await R(JSON.stringify(s),"filters"),c=await d.json();return{filter:c?.[0],postFilter:c?.[1]}},k=async function({language:e,query:t}){JSON.stringify({size:4,from:0,query:t,language:e}),JSON.stringify({size:10,from:0,query:t,language:e});let i=JSON.stringify({query:t,language:e}),r=await R(i,"autocomplete"),a=await r.json();return{products:a?.[0]?.records||[],categories:a?.[1]?.records||[],keywords:a?.[2]?.records||[]}},L=async({search:e,language:t,category:i,sorting_field:r,sorting_order:a,from_price:n,to_price:o,options:l,size:s=I,from:d=0})=>{let c=JSON.stringify({language:t,query:e,category_id:i,price_gte:n,price_lte:o,sorting_field:r,sorting_order:a,options:l,size:s,from:d}),u=await R(c,"listing"),g=await u.json();return{products:g?.[0]?.records,total:g?.[0]?.total}},w=({language:e,containerId:t,filter:r,postFilter:a})=>{let n=document.getElementById(t),{filters:l,categories:s}=O(r);if(l.length||s.length||n.append(o("noResults",e)),s.length>0){let t=o("categories",e),r="filtersCategoris";i(n,d.getFilterSection(r,t)),P(r,s)}l.map((e,t)=>{let r=`options-${t}`;i(n,d.getFilterSection(r,e.filterTitle)),P(r,e.filterOptions)})},N=({containerId:e,language:r})=>{let a=document.getElementById(e),n=y[f.FROM_PRICE],l=y[f.To_PRICE],s="fehrisPriceContainer",d="fehrisPriceError",g="fehrisPriceFrom",p="fehrisPriceTo";i(a,c({fromId:g,toId:p,id:s,language:r}));let m=document.getElementById(s);i(m,u(d)),document.getElementById(g).appendChild(_({value:n,min:0,onChange:e=>n=e.target.value})),document.getElementById(p).appendChild(_({value:l,min:0,onChange:e=>l=e.target.value})),m.appendChild(h({textContent:o("submit",r),onClick:()=>{let e=document.getElementById(d);return(e.innerHTML="",n&&l)?+n>+l?e.innerHTML=o("error_maxShouldBeSmallerThanMin",r):void(window.location=t({deleteParams:[f.PAGE],updateParams:[[f.FROM_PRICE,n],[f.To_PRICE,l]]})):e.innerHTML=o("error_priceRange",r)}})),m.appendChild(h({textContent:o("clear",r),onClick:()=>{window.location=t({deleteParams:[f.PAGE,f.FROM_PRICE,f.To_PRICE]})}}))},b=({products:e,containerId:t,language:r})=>{let a="products-list";i(document.getElementById(t),g.getProductsListContainer({id:a}));let n=document.getElementById(a);e.forEach(e=>{let{name:t,id:a,html_url:o,formatted_price:l,images:s}=e??{};i(n,g.getProductCard({name:t[r],id:a,html_url:o,formatted_price:l[r],img:s[0].image.thumbnail}))})},A=({containerId:e,totalRecords:r,language:a})=>{let n=document.getElementById(e),l="fehrisPagination";i(n,p.getContainer(l));let s=document.getElementById(l),d=Math.ceil((r??0)/I),c=y[f.PAGE]??1,u=e=>t({updateParams:[[f.PAGE,e]]}).href;i(s,p.getItem({pageNum:o("prev",a),href:u(c-1||1),disabled:1==c}));for(let e=1;e<=d;e++)i(s,p.getItem({pageNum:e,href:u(e),active:e==c}));i(s,p.getItem({pageNum:o("next",a),href:u(+c+1),disabled:c==d}))},D=({containerId:e,language:t,products:r,categories:a,keywords:n})=>{let o=document.getElementById(e),l="fehrisAutoCompleteContainer",s="fehrisAutoCompleteKeywordsList",d="fehrisAutoCompleteCategoriesList",c="fehrisAutoCompleteProductsList";o.innerHTML=m.getAutocompleteContainer({id:l,keywordsId:s,categoriesId:d,productsId:c});let u=document.getElementById(l);if(!n?.length){u.innerHTML=m.getAutocompleteNoResults({language:t});return}let g=o.querySelector(`#${s}`),p=o.querySelector(`#${d}`),h=o.querySelector(`#${c}`);n.forEach(e=>{let t=e.option;i(g,m.getKeywordItem({keyword:t,href:T(encodeURI(t))}))}),a.forEach((e,r)=>{let{flat_name:a,url:n}=e||{};a&&n&&(0===r&&i(p,m.getCategoriesHead({language:t})),i(p,m.getKeywordItem({keyword:a[t],href:n})))}),r.forEach(e=>{let r=e?.name?.[t],a=e?.html_url,n=e?.images?.[0]?.image?.thumbnail||e?.images?.[0]?.image?.full_size;i(h,m.getProductItem({name:r,url:a,avatar:n}))})},F=({containerId:e,language:r=s()})=>{let a=document.getElementById(e),n="fehrisSorting";i(a,g.getSortingContainer({id:n,language:r}));let o=a.querySelector(`#${n}`),l=C.getSortingOptions({language:r});o.appendChild(function(e,t){let i=document.createElement("select");return e.forEach(e=>{let t=document.createElement("option");t.value=e.value,t.textContent=e.label,t.selected=e.isSelected,i.appendChild(t)}),i.addEventListener("change",function(e){t(e.target.value)}),i}(l,e=>{if(e===E.OPTIONS.DEFAULT){let e=t({deleteParams:[f.SORTING_FIELD,f.SORTING_ORDER]});window.location=e.href}else{let i=e===E.OPTIONS.PRICE_HIGH||e===E.OPTIONS.PRICE_LOW?E.FIELDS.PRICE:e===E.OPTIONS.NEWEST||e===E.OPTIONS.OLDEST?E.FIELDS.CREATED_AT:void 0,r=e===E.OPTIONS.NEWEST||e===E.OPTIONS.PRICE_HIGH?E.ORDER.DESC:E.ORDER.ASC,a=t({updateParams:[[f.SORTING_FIELD,i],[f.SORTING_ORDER,r]]});window.location=a.href}}))},x=async function({containerId:e,language:t=s()}){let i=document.getElementById(e),r=S();i.innerHTML=d.getFilterLoader();let{filter:a,postFilter:n}=await $({...r,language:t});i.innerHTML="",w({language:t,containerId:e,filter:a,postFilter:n}),N({containerId:e,language:t})},H=async function({containerId:e,language:t=s()}){let r="fehrisProductsTopBar",a=document.getElementById(e),n=S(),l=n[f.PAGE]||1;a.innerHTML=g.getProductLoader();let{products:d,total:c}=await L({...n,from:(l-1)*I,language:t});if(a.innerHTML="",!d?.length)return a.append(o("noResults",t));i(a,g.getTopBarContainer({id:r,productsCount:c,language:t})),F({containerId:r,language:t}),b({products:d,containerId:e,language:t}),A({containerId:e,language:t,totalRecords:c})},G=async function({containerId:e,language:t=s()}){let i="fehrisSearchContainer",r="fehrisSearch",n="fehrisAutoComplete";document.getElementById(e).innerHTML=m.getSearch({searchContainerId:i,searchId:r,autocompleteId:n,language:t});let o=document.getElementById(i),l=document.getElementById(r),d=document.getElementById(n);document.addEventListener("click",t=>{let i=t.target.closest(`#${e}`);return!i&&d.firstChild?o.classList.add("hide"):i?o.classList.remove("hide"):void 0}),l.addEventListener("keyup",e=>{let t=e.target.value;"Enter"===e.key&&t?.trim()?.length&&(window.location=T(encodeURI(t)))}),l.addEventListener("input",e=>c(e.target.value));let c=a(async function(e){if(!e||e.trim().length<=0)return d.innerHTML="";o.classList.add("loading");let i=await k({language:t,query:e});o.classList.remove("loading"),D({containerId:n,language:t,...i})},300)};n.api={filtersApi:$,autocompleteApi:k,productsApi:L},n.appendFilters=x,n.appendProducts=H,n.appendSearch=G}(window.fehrisNameSpace=window.fehrisNameSpace||{});
//# sourceMappingURL=main.js.map
