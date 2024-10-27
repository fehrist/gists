function $f66fdc2e8eaf2d73$export$f654b28f82155665() {
    return window.location.origin + window.location.pathname;
}
function $f66fdc2e8eaf2d73$export$e2de15bbd9edf9c6() {
    return new URL(document.location).searchParams;
}
function $f66fdc2e8eaf2d73$export$ba1b94ff70383687() {
    return new URL(document.location).pathname;
}
const $f66fdc2e8eaf2d73$export$88f1fdfae738af54 = ({ deleteParams: deleteParams, addParams: addParams, updateParams: updateParams })=>{
    const url = new URL(document.location);
    const params = new URLSearchParams(url.search);
    if (deleteParams) for (const key of deleteParams)params.delete(key);
    if (addParams) for (const [key, value] of addParams)params.append(key, value);
    if (updateParams) for (const [key, value] of updateParams)params.set(key, value);
    url.search = decodeURIComponent(params).toString();
    return url;
};
function $f66fdc2e8eaf2d73$var$stringToHTML(str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    return doc.body.firstChild;
}
function $f66fdc2e8eaf2d73$export$d8a0fc79d6aedf2e(elementNode, string) {
    elementNode.appendChild($f66fdc2e8eaf2d73$var$stringToHTML(string));
}
const $f66fdc2e8eaf2d73$export$a1c95a8abb4ece3a = ()=>{
    const queryParams = new URL(document.location).searchParams;
    const results = {};
    queryParams.forEach((value, key)=>{
        results[key] = value;
    });
    return results;
};
const $f66fdc2e8eaf2d73$export$61fc7d43ac8f84b0 = (func, wait, immediate)=>{
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


const $4034d5d0b756f7c9$var$fehris_trans = Object.freeze({
    categories: {
        en: "Categories",
        ar: "\u062A\u0635\u0646\u064A\u0641\u0627\u062A"
    },
    noResults: {
        en: "No results!",
        ar: "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0646\u062A\u0627\u0626\u062C"
    },
    submit: {
        en: "Submit",
        ar: "\u062A\u0637\u0628\u064A\u0642"
    },
    clear: {
        en: "Clear",
        ar: "\u0645\u0633\u062D"
    },
    from: {
        en: "From",
        ar: "\u0645\u0646"
    },
    to: {
        en: "To",
        ar: "\u0627\u0644\u0649"
    },
    price: {
        en: "Price",
        ar: "\u0627\u0644\u0633\u0639\u0631"
    },
    error_priceRange: {
        en: "Please select price range",
        ar: "\u0627\u0644\u0631\u062C\u0627\u0621 \u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u0633\u0639\u0631\u064A"
    },
    error_maxShouldBeSmallerThanMin: {
        en: "Price from should be less than to",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0623\u0642\u0635\u0649 \u0623\u0642\u0644 \u0645\u0646 \u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0623\u062F\u0646\u0649"
    },
    prev: {
        en: "Prev",
        ar: "\u0627\u0644\u0633\u0627\u0628\u0642"
    },
    next: {
        en: "Next",
        ar: "\u0627\u0644\u062A\u0627\u0644\u064A"
    },
    search: {
        en: "Search",
        ar: "\u0627\u0644\u0628\u062D\u062B"
    },
    matchingCategories: {
        en: "Matching categories",
        ar: "\u0627\u0644\u0641\u0626\u0627\u062A \u0627\u0644\u0645\u0637\u0627\u0628\u0642\u0629"
    },
    sortBy: {
        en: "Sort by",
        ar: "\u062A\u0631\u062A\u064A\u0628 \u062D\u0633\u0628  "
    },
    default: {
        en: "Default",
        ar: "\u0627\u0644\u0623\u0641\u062A\u0631\u0627\u0636\u064A"
    },
    newest: {
        en: "Newest",
        ar: "\u0627\u0644\u0623\u062D\u062F\u062B"
    },
    oldest: {
        en: "Oldest",
        ar: "\u0627\u0644\u0627\u0642\u062F\u0645"
    },
    highestPrice: {
        en: "Highest price",
        ar: "\u0627\u0644\u0627\u0639\u0644\u0649 \u0633\u0639\u0631\u0627"
    },
    lowestPrice: {
        en: "Lowest price",
        ar: "\u0627\u0644\u0627\u0642\u0644 \u0633\u0639\u0631\u0627"
    },
    productsFound: {
        en: "{{num}} products found",
        ar: "\u062A\u0645 \u0627\u064A\u062C\u0627\u062F {{num}} \u0645\u0646\u062A\u062C"
    },
    availableInSeveralOptions: {
        en: "Available in several options",
        ar: "\u0645\u062A\u0648\u0641\u0631 \u0628\u0639\u062F\u0629 \u062E\u064A\u0627\u0631\u0627\u062A"
    }
});
const $4034d5d0b756f7c9$export$633e2868f66ac64c = (key, lang, options)=>{
    let text = $4034d5d0b756f7c9$var$fehris_trans[key]?.[lang];
    if (!text) return key;
    if (options) for (const [key, value] of Object.entries(options))text = text.replace(`{{${key}}}`, value);
    return text;
};


const $9ea3a24d21594cd9$var$filterLabelLoader = `<div class="filters-skeleton-option">
        <span class="skeleton-rect skeleton-size-16"></span>
        <div class="skeleton-text"></div>
      </div>`;
const $9ea3a24d21594cd9$var$productCardLoader = `
  <div class='col-12 col-sm-6 col-md-4 col-lg-3'>
    <div class="product-card-skeleton">
      <div class="skeleton-rect mb-xs"></div>
      <div class="skeleton-text skeleton-w-20 mb-xs"></div>

      <div class="mb-md">
        <div class="skeleton-text mb-2xs"></div>
        <div class="skeleton-text skeleton-w-40"></div>
      </div>

      <div class="skeleton-text skeleton-w-70"></div>
    </div>
  </div>`;
const $9ea3a24d21594cd9$export$3bf9b68e29fed608 = {
    getFilterSection: (id, text)=>`<div class="fehris-filter" id="${id}"><h3 class="fehris-text-md mb-md">${text}</h3></div>`,
    getFilterLoader: ()=>`
      <div class="filters-skeleton">
        <div class="skeleton-text filters-skeleton-title"></div>
        ${$9ea3a24d21594cd9$var$filterLabelLoader}${$9ea3a24d21594cd9$var$filterLabelLoader}${$9ea3a24d21594cd9$var$filterLabelLoader}${$9ea3a24d21594cd9$var$filterLabelLoader}
      </div>
      <div class="filters-skeleton"><div class="skeleton-text filters-skeleton-title"></div>${$9ea3a24d21594cd9$var$filterLabelLoader}${$9ea3a24d21594cd9$var$filterLabelLoader}${$9ea3a24d21594cd9$var$filterLabelLoader}${$9ea3a24d21594cd9$var$filterLabelLoader}</div>
      <div class="filters-skeleton"><div class="skeleton-text filters-skeleton-title"></div>${$9ea3a24d21594cd9$var$filterLabelLoader}${$9ea3a24d21594cd9$var$filterLabelLoader}${$9ea3a24d21594cd9$var$filterLabelLoader}${$9ea3a24d21594cd9$var$filterLabelLoader}</div>
    `
};
const $9ea3a24d21594cd9$export$8bf845e2f4b482c7 = {
    getPriceContainer2: ({ fromId: fromId, toId: toId, id: id, language: language })=>`
  <div class='fehrisFiltersPrice mt-4' id="${id}">
    <h3 class="name">${(0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("price", language)}</h3>
    <div class='fehrisFiltersPrice_inputs'>
      <div class='fehrisFiltersPrice_inputs_input' id='${fromId}'>
        <div>${(0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("from", language)}</div>
      </div>
      <div class='fehrisFiltersPrice_inputs_input' id='${toId}'>
        <div>${(0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("to", language)}</div>
      </div>
    </div>
  </div>
  `,
    getPriceContainer: ({ fromId: fromId, toId: toId, id: id, actionsId: actionsId, language: language })=>`
    <div class="fehris-price-filter mt-4" id="${id}">
      <h3 class="fehris-heading-md mb-md">${(0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("price", language)}</h3>

      <div class="fehris-price-filter__inputs">
        <div class="fehris-price-filter__inputs--input" id='${fromId}'>
        <div>${(0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("from", language)}</div>
        </div>

        <div class="fehris-price-filter__inputs--input" id='${toId}'>
        <div>${(0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("to", language)}</div>
        </div>
      </div>

      <div id="${actionsId}" class="fehris-price-filter__actions"></div>
    </div>
  `,
    getPriceError: (id)=>`<div class='fehrisFiltersPrice__error' id='${id}'></div>`
};
const $9ea3a24d21594cd9$var$priceWithSale = (formatted_price, formatted_sale_price)=>{
    if (formatted_sale_price) return `
    <div class="fehrisVerticalCard__prices">
      <span class="fehrisVerticalCard__price">
        ${formatted_sale_price ? formatted_sale_price : formatted_price}
      </span>
      <span class="fehrisVerticalCard__oldPrice">${formatted_price}</span>
    </div>
  `;
    return ` <div class="fehrisVerticalCard__prices">
      <span class="fehrisVerticalCard__price">
        ${formatted_price}
      </span>
    </div>`;
};
const $9ea3a24d21594cd9$var$getBadge = (text)=>{
    if (!text) return "";
    return `<span style='position: absolute;top: 10px;inset-inline-start: 10px;z-index: 99;background: #f4f4f4;font-size: 12px;padding: 2px 8px;border-radius: 21px;'>${text}</span>`;
};
const $9ea3a24d21594cd9$export$490f559806196b34 = {
    getProductsListContainer: ({ id: id })=>`<div id="${id}" class="grid g-2 py-xl"></div>`,
    getProductCard: ({ name: name, img: img, id: id, formatted_price: formatted_price, html_url: html_url, categoryName: categoryName, ratingAvg: ratingAvg, numberTotalCount: numberTotalCount, formatted_sale_price: formatted_sale_price, language: language, hasVariants: hasVariants, badge: badge })=>`
       
        <a href="${html_url}" class="col-12 col-sm-6 col-md-4 col-lg-3 fehrisVerticalCard">
          ${$9ea3a24d21594cd9$var$getBadge(badge)}
          <div class="fehrisVerticalCard__image">
            <img id="${id}" src="${img}" alt="${name}">
          </div>

          <div class="fehrisVerticalCard__content">
            <span class="fehrisVerticalCard__category"> ${categoryName} </span>
            
            <h3 class="fehrisVerticalCard__title"> ${name} </h3>

            <div class="fehrisVerticalCard__reviews">
              <div class="fehrisVerticalCard__stars__singlestar ${ratingAvg > 0 && "checked"}"></div>
              <div class="fehrisVerticalCard__stars__singlestar ${ratingAvg > 1 && "checked"}"></div>
              <div class="fehrisVerticalCard__stars__singlestar ${ratingAvg > 2 && "checked"}"></div>
              <div class="fehrisVerticalCard__stars__singlestar ${ratingAvg > 3 && "checked"}"></div>
              <div class="fehrisVerticalCard__stars__singlestar ${ratingAvg > 4 && "checked"}"></div>
              ${numberTotalCount ? "(" + numberTotalCount + ")" : ""}
            </div>

            ${$9ea3a24d21594cd9$var$priceWithSale(formatted_price, formatted_sale_price)}
          </div>
          
          <span>${hasVariants ? (0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("availableInSeveralOptions", language) : ""}</span>
        </a>
    `,
    getProductLoader: ()=>{
        let skeletons = "";
        for(let i = 0; i < 12; i++)skeletons += $9ea3a24d21594cd9$var$productCardLoader;
        return `<div class='grid'>${skeletons}</div>`;
    },
    getTopBarContainer: ({ id: id, productsCount: productsCount, language: language })=>`
        <div class="fehris-plpTopBar" id="${id}">
          <p class="fehris-text-md"> ${(0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("productsFound", language, {
            num: productsCount
        })}</p>
        </div>`,
    getSortingContainer: ({ id: id, language: language })=>`
        <div class='fehris-plpTopBar__sort' id='${id}'>
          <span>${(0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("sortBy", language)}</span>
        </div>`
};
const $9ea3a24d21594cd9$export$8222c5965ba78e3b = {
    getContainer: (id)=>`<nav class="fehris-pagination"><ul id='${id}'></ul></nav>`,
    getItem: ({ pageNum: pageNum, href: href, active: active, disabled: disabled })=>`<li class='fehris-pagination__item ${disabled ? "disabled" : ""} ${active ? "active" : ""}'>
      <a  href="${disabled ? "javascript:void(0)" : href}">
            ${pageNum}
        </a>
    </li>`
};
const $9ea3a24d21594cd9$export$4ecf3d552dae87fb = {
    getSearch: ({ searchContainerId: searchContainerId, searchId: searchId, autocompleteId: autocompleteId, language: language })=>`
      <div class='fehris-search' id="${searchContainerId}">
        <input 
          type="text"
          id="${searchId}"
          class='search-input'
          placeholder="${(0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("search", language)}"
        />

        <img src='https://i.gifer.com/ZKZg.gif' class='loader'/>

        <div id="${autocompleteId}" class='fehris-autocomplete'></div>
      </div>`,
    getAutocompleteNoResults: ({ language: language })=>`
      <div class='fehris-autocomplete__noResults'>
        <img src='https://static.thenounproject.com/png/744760-200.png' />
        <p> ${(0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("noResults", language)} </p>
      </div>`,
    getAutocompleteContainer: ({ id: id, keywordsId: keywordsId, categoriesId: categoriesId, productsId: productsId })=>`
      <div id="${id}" class='fehris-autocomplete__container'>
          <div class='fehris-autocomplete__layout'>
              <div id="${keywordsId}" class="fehris-autocomplete__list"></div>
              <div id="${categoriesId}" class='fehris-autocomplete__list'></div>
          </div>
          <div id="${productsId}" class='fehris-autocomplete__products'></div>
      </div>`,
    getCategoriesHead: ({ language: language })=>`
      <h5 class='fehris-heading-md mb-sm'>
        ${(0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("matchingCategories", language)}
      </h5>`,
    getKeywordItem: ({ href: href, keyword: keyword })=>`<p class='item'> <a href="${href}"> ${keyword} </a> </p>`,
    getProductItem: ({ avatar: avatar, name: name, url: url })=>`
      <div class='fehris-autocomplete__products-card'>
        <a href="${url}">
          <div class='fehris-autocomplete__products-card__image'>
              <img src="${avatar}" alt="${name}" loading="lazy" />
          </div>
          <div class='fehris-autocomplete__products-card__title'>
            <p>${name}</p>
          </div>
        </a>
      </div>`
};
function $9ea3a24d21594cd9$export$9b6d6ca62970729f({ textContent: textContent, onClick: onClick, classList: classList = "" }) {
    const button = document.createElement("button");
    button.textContent = textContent;
    button.onclick = onClick;
    button.classList = classList;
    return button;
}
function $9ea3a24d21594cd9$export$7fdf0141ba218660({ name: name, id: id, value: value, placeholder: placeholder = "", onChange: onChange, min: min, max: max }) {
    const input = document.createElement("input");
    input.type = "number";
    input.value = value;
    input.placeholder = placeholder;
    if (name) input.name = name;
    if (id) input.id = id;
    if (typeof min === "number") input.min = min;
    if (typeof max === "number") input.max = max;
    if (onChange) input.addEventListener("change", onChange);
    return input;
}
function $9ea3a24d21594cd9$export$1554685ffdbf3107(options, onChange) {
    const select = document.createElement("select");
    options.forEach((option)=>{
        const optionElement = document.createElement("option");
        optionElement.value = option.value;
        optionElement.textContent = option.label;
        optionElement.selected = option.isSelected;
        select.appendChild(optionElement);
    });
    select.addEventListener("change", function(event) {
        const selectedValue = event.target.value;
        onChange(selectedValue);
    });
    return select;
}


const $8c7805431dea922a$export$e0ccd3062f6ffe3d = Object.freeze({
    FROM_PRICE: "from_price",
    To_PRICE: "to_price",
    SEARCH: "search",
    CATEGORY: "category",
    SORTING_FIELD: "sorting_field",
    SORTING_ORDER: "sorting_order",
    PAGE: "page"
});
const $8c7805431dea922a$export$9ff7e571356ed022 = [
    $8c7805431dea922a$export$e0ccd3062f6ffe3d.SEARCH,
    $8c7805431dea922a$export$e0ccd3062f6ffe3d.CATEGORY,
    $8c7805431dea922a$export$e0ccd3062f6ffe3d.FROM_PRICE,
    $8c7805431dea922a$export$e0ccd3062f6ffe3d.To_PRICE,
    $8c7805431dea922a$export$e0ccd3062f6ffe3d.SORTING_FIELD,
    $8c7805431dea922a$export$e0ccd3062f6ffe3d.SORTING_ORDER,
    $8c7805431dea922a$export$e0ccd3062f6ffe3d.PAGE
];
const $8c7805431dea922a$export$75081ca35b4dae45 = {
    OPTIONS: {
        DEFAULT: "default",
        NEWEST: "newest",
        OLDEST: "oldest",
        PRICE_HIGH: "price_high",
        PRICE_LOW: "price_low"
    },
    FIELDS: {
        CREATED_AT: "created_at",
        PRICE: "price"
    },
    ORDER: {
        ASC: "asc",
        DESC: "desc"
    }
};
const $8c7805431dea922a$export$8ec3d08588d2eeda = 18;



function $c33c35699540777b$var$removeWrongFilters({ params: params, facets: facets }) {
    if (!params || params.length === 0) return [];
    if (!facets || facets.length === 0) return params;
    return params.filter((param)=>facets.some((facet)=>facet.key === param.name));
}
function $c33c35699540777b$export$79d5f2e8761c14d9({ filters: filters, postFilters: postFilters, params: params }) {
    const filteredParams = $c33c35699540777b$var$removeWrongFilters({
        params: params.options,
        facets: postFilters.options
    });
    const results = {
        ...filters
    };
    if (!filteredParams?.length) results.categories = postFilters.categories;
    let newRes = [];
    if (filteredParams?.length === 1) {
        const facet = filteredParams[0];
        const facetName = facet.name;
        const optionsFromPostFilters = postFilters?.options?.find((ele)=>ele.key === facetName);
        results.options.forEach((ele)=>{
            if (ele.key === facetName) return newRes.push(optionsFromPostFilters);
            newRes.push(ele);
        });
        results.options = newRes;
    }
    return results;
}


(function(fehrisNameSpace, undefined) {
    const getLang = ()=>window.appDirection === "ltr" ? "en" : "ar";
    const initialQueryParams = (0, $f66fdc2e8eaf2d73$export$a1c95a8abb4ece3a)();
    const createFilterInputs = (element, inputs, handleChange)=>{
        const targetElement = document.getElementById(element);
        inputs.forEach((inputInfo)=>{
            const { type: type, name: name, id: id, value: value, inputLabel: inputLabel, checked: checked, count: count, onChange: onChange } = inputInfo;
            const changeFn = handleChange || onChange;
            const input = document.createElement("input");
            input.type = type;
            input.name = name;
            input.id = id;
            input.value = value;
            input.checked = checked || false;
            input.addEventListener("change", function() {
                changeFn(input.name, input.value, input.checked);
            });
            // Create a label for the input
            const label = document.createElement("label");
            label.classList.add("fehris-filter__checkbox");
            if (type === "radio") label.classList.add("fehris-filter__radio");
            // Append the input and label to the target element
            targetElement.appendChild(label);
            label.appendChild(input);
            (0, $f66fdc2e8eaf2d73$export$d8a0fc79d6aedf2e)(label, '<span class="check"></span>');
            (0, $f66fdc2e8eaf2d73$export$d8a0fc79d6aedf2e)(label, `<div><span>${inputLabel} </span> <span> (${count})</span></div>`);
        });
    };
    function extractOptionNameIfValid(str) {
        if (str.startsWith("attribute_values")) {
            const match = str.match(/\[(.*?)\]/);
            return match ? match[1] : null;
        }
    }
    const getFiltersParams = ()=>{
        const queryParams = (0, $f66fdc2e8eaf2d73$export$e2de15bbd9edf9c6)();
        const pathName = (0, $f66fdc2e8eaf2d73$export$ba1b94ff70383687)();
        const hasSalePriceProp = pathName === "/products/sales" ? {
            has_sale_price: true
        } : {};
        const obj = {
            ...hasSalePriceProp
        };
        (0, $8c7805431dea922a$export$9ff7e571356ed022).forEach((key)=>{
            const value = queryParams.get(key);
            if (value) obj[key] = value;
            queryParams.delete(key);
        });
        const options = [];
        for (const [key, value] of queryParams){
            const validOptionName = extractOptionNameIfValid(key);
            if (validOptionName) {
                const values = value.split(",");
                let obj = {
                    name: validOptionName,
                    choices: values.map((v, i)=>({
                            choice: v,
                            ...i === values.length - 1 ? {
                                last_choice: true
                            } : {}
                        }))
                };
                options.push(obj);
            }
        }
        if (options.length) options[options.length - 1] = {
            ...options[options.length - 1],
            last_option: true
        };
        return {
            ...obj,
            options: options.length ? options : undefined
        };
    };
    const getRandomNumber = (max = 100)=>Math.floor(Math.random() * max);
    const formatFiltersResults = (data)=>{
        const options = data?.options;
        const categories = data?.categories;
        const queryParams = (0, $f66fdc2e8eaf2d73$export$e2de15bbd9edf9c6)();
        const handleCategoryChange = (name, value, checked)=>{
            const url = (0, $f66fdc2e8eaf2d73$export$88f1fdfae738af54)({
                updateParams: [
                    [
                        (0, $8c7805431dea922a$export$e0ccd3062f6ffe3d).CATEGORY,
                        value
                    ]
                ],
                deleteParams: [
                    (0, $8c7805431dea922a$export$e0ccd3062f6ffe3d).PAGE
                ]
            });
            window.location = url;
        };
        const handleFilterChange = (facetName, value, checked)=>{
            const name = `attribute_values[${facetName}]`;
            const currentValue = queryParams.get(name);
            let valueArr = currentValue ? currentValue.split(",") : [];
            if (!checked) valueArr = valueArr.filter((ele)=>ele != value);
            else valueArr.push(value);
            const url = valueArr.length ? (0, $f66fdc2e8eaf2d73$export$88f1fdfae738af54)({
                updateParams: [
                    [
                        name,
                        valueArr
                    ]
                ],
                deleteParams: [
                    (0, $8c7805431dea922a$export$e0ccd3062f6ffe3d).PAGE
                ]
            }) : (0, $f66fdc2e8eaf2d73$export$88f1fdfae738af54)({
                deleteParams: [
                    name,
                    (0, $8c7805431dea922a$export$e0ccd3062f6ffe3d).PAGE
                ]
            });
            window.location = url;
        };
        const categoryNameSuffix = getRandomNumber();
        const filteredCategories = categories.map((category)=>{
            const id = category.key;
            const checked = queryParams.get("category") === id ? true : false;
            return {
                type: "radio",
                id: `${id}${getRandomNumber()}`,
                value: category.key,
                name: `category-${categoryNameSuffix}`,
                count: category.doc_count,
                checked: checked,
                inputLabel: category.name,
                onChange: handleCategoryChange
            };
        });
        const filteredFilters = options.map((option)=>{
            const filterTitle = option.key;
            const filterCount = option.doc_count;
            const urlValue = queryParams.get(`attribute_values[${filterTitle}]`);
            const filterOptions = option.buckets.map((o)=>({
                    type: "checkbox",
                    id: `${o.key}${getRandomNumber()}`,
                    value: o.key,
                    name: filterTitle,
                    count: o.doc_count,
                    inputLabel: o.key,
                    checked: urlValue ? urlValue.includes(o.key) : false,
                    onChange: handleFilterChange
                }));
            return {
                filterTitle: filterTitle,
                filterCount: filterCount,
                filterOptions: filterOptions
            };
        });
        return {
            categories: filteredCategories,
            filters: filteredFilters
        };
    };
    const sortHelpers = {
        getSelectedSort: ()=>{
            let sorting_field = initialQueryParams[(0, $8c7805431dea922a$export$e0ccd3062f6ffe3d).SORTING_FIELD];
            let sorting_order = initialQueryParams[(0, $8c7805431dea922a$export$e0ccd3062f6ffe3d).SORTING_ORDER];
            if (sorting_field === (0, $8c7805431dea922a$export$75081ca35b4dae45).FIELDS.CREATED_AT) {
                if (sorting_order === (0, $8c7805431dea922a$export$75081ca35b4dae45).ORDER.ASC) return (0, $8c7805431dea922a$export$75081ca35b4dae45).OPTIONS.OLDEST;
                if (sorting_order === (0, $8c7805431dea922a$export$75081ca35b4dae45).ORDER.DESC) return (0, $8c7805431dea922a$export$75081ca35b4dae45).OPTIONS.NEWEST;
            }
            if (sorting_field === (0, $8c7805431dea922a$export$75081ca35b4dae45).FIELDS.PRICE) {
                if (sorting_order === (0, $8c7805431dea922a$export$75081ca35b4dae45).ORDER.ASC) return (0, $8c7805431dea922a$export$75081ca35b4dae45).OPTIONS.PRICE_LOW;
                if (sorting_order === (0, $8c7805431dea922a$export$75081ca35b4dae45).ORDER.DESC) return (0, $8c7805431dea922a$export$75081ca35b4dae45).OPTIONS.PRICE_HIGH;
            }
            return (0, $8c7805431dea922a$export$75081ca35b4dae45).OPTIONS.DEFAULT;
        },
        getSortingOptions: ({ language: language })=>{
            const selected = sortHelpers.getSelectedSort();
            return [
                {
                    label: (0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("default", language),
                    value: (0, $8c7805431dea922a$export$75081ca35b4dae45).OPTIONS.DEFAULT,
                    isSelected: selected === (0, $8c7805431dea922a$export$75081ca35b4dae45).OPTIONS.DEFAULT
                },
                {
                    label: (0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("newest", language),
                    value: (0, $8c7805431dea922a$export$75081ca35b4dae45).OPTIONS.NEWEST,
                    isSelected: selected === (0, $8c7805431dea922a$export$75081ca35b4dae45).OPTIONS.NEWEST
                },
                {
                    label: (0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("oldest", language),
                    value: (0, $8c7805431dea922a$export$75081ca35b4dae45).OPTIONS.OLDEST,
                    isSelected: selected === (0, $8c7805431dea922a$export$75081ca35b4dae45).OPTIONS.OLDEST
                },
                {
                    label: (0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("highestPrice", language),
                    value: (0, $8c7805431dea922a$export$75081ca35b4dae45).OPTIONS.PRICE_HIGH,
                    isSelected: selected === (0, $8c7805431dea922a$export$75081ca35b4dae45).OPTIONS.PRICE_HIGH
                },
                {
                    label: (0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("lowestPrice", language),
                    value: (0, $8c7805431dea922a$export$75081ca35b4dae45).OPTIONS.PRICE_LOW,
                    isSelected: selected === (0, $8c7805431dea922a$export$75081ca35b4dae45).OPTIONS.PRICE_LOW
                }
            ];
        }
    };
    function updateQueryStringParameter(uri, key, value) {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf("?") !== -1 ? "&" : "?";
        if (uri.match(re)) return uri.replace(re, "$1" + key + "=" + value + "$2");
        else return uri + separator + key + "=" + value;
    }
    const getSearchPageHref = (query)=>`${window.location.origin}/products?${(0, $8c7805431dea922a$export$e0ccd3062f6ffe3d).SEARCH}=${query}`;
    /*
   ************************************
   ************ API CALLS *************
   ************************************
   */ const BASE_API_URL = "https://proxy-zid.api.fehris.io/";
    const callApi = async (body, endpoint, method = "POST")=>{
        return await fetch(`${BASE_API_URL}${endpoint}?store_id=348281`, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                accept: "*/*"
            },
            body: body
        });
    };
    const filtersApi = async ({ search: search, language: language, category: category, sorting_field: sorting_field, sorting_order: sorting_order, from_price: from_price, to_price: to_price, has_sale_price: has_sale_price, options: options })=>{
        const sharedParams = {
            language: language,
            query: search,
            category_id: category,
            price_gte: from_price,
            price_lte: to_price,
            sorting_field: sorting_field,
            sorting_order: sorting_order,
            has_sale_price: has_sale_price,
            options: options
        };
        const filtersParams = JSON.stringify({
            filter: true,
            ...sharedParams
        });
        const postFiltersparams = JSON.stringify({
            post_filter: true,
            ...sharedParams
        });
        const res = await callApi(JSON.stringify(sharedParams), "filters");
        // Need to take the selected filter from the first one and the rest in the second one
        const results = await res.json();
        return {
            filter: results?.[0],
            postFilter: results?.[1]
        };
    };
    const autocompleteApi = async function({ language: language, query: query }) {
        const keywordsParams = JSON.stringify({
            query: query,
            language: language
        });
        let results;
        try {
            const res = await callApi(keywordsParams, "autocomplete");
            results = await res.json();
        } catch (e) {
            throw new Error(e);
        }
        return {
            products: results?.[0]?.records || [],
            categories: results?.[1]?.records || [],
            keywords: results?.[2]?.records || []
        };
    };
    const productsApi = async ({ search: search, language: language, category: category, sorting_field: sorting_field, sorting_order: sorting_order, from_price: from_price, to_price: to_price, options: options, has_sale_price: has_sale_price, size: size = (0, $8c7805431dea922a$export$8ec3d08588d2eeda), from: from = 0 })=>{
        const params = JSON.stringify({
            language: language,
            query: search,
            category_id: category,
            price_gte: from_price,
            price_lte: to_price,
            sorting_field: sorting_field,
            sorting_order: sorting_order,
            options: options,
            size: size,
            has_sale_price: has_sale_price,
            from: from
        });
        const res = await callApi(params, "listing");
        const results = await res.json();
        // const results = LISTING[0];
        return {
            products: results?.[0]?.records,
            total: results?.[0]?.total
        };
    };
    /* ########## END OF API CALLS ########## */ /*
   ************************************
   ******** APPEND COMPONENTS *********
   ************************************
   */ const appendFilterToElement = ({ language: language, containerId: containerId, filter: filter })=>{
        const container = document.getElementById(containerId);
        const { filters: filters, categories: categories } = formatFiltersResults(filter);
        // const { categories } = formatFiltersResults(postFilter);
        if (!filters.length && !categories.length) container.append((0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("noResults", language));
        if (categories.length > 0) {
            const titleString = (0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("categories", language);
            const FILTERS_CATEGORIES_ID = `${containerId}-filtersCategories`;
            (0, $f66fdc2e8eaf2d73$export$d8a0fc79d6aedf2e)(container, (0, $9ea3a24d21594cd9$export$3bf9b68e29fed608).getFilterSection(FILTERS_CATEGORIES_ID, titleString));
            createFilterInputs(FILTERS_CATEGORIES_ID, categories);
        }
        filters.sort(function(a, b) {
            var keyA = a.filterTitle, keyB = b.filterTitle;
            if (keyA > keyB) return -1;
            if (keyA < keyB) return 1;
            return 0;
        });
        filters.map((ele, i)=>{
            const id = `${containerId}-options-${i}`;
            (0, $f66fdc2e8eaf2d73$export$d8a0fc79d6aedf2e)(container, (0, $9ea3a24d21594cd9$export$3bf9b68e29fed608).getFilterSection(id, ele.filterTitle));
            createFilterInputs(id, ele.filterOptions);
        });
    };
    const appendPricesToElement = ({ containerId: containerId, language: language })=>{
        const container = document.getElementById(containerId);
        let fromValue = initialQueryParams[(0, $8c7805431dea922a$export$e0ccd3062f6ffe3d).FROM_PRICE];
        let toValue = initialQueryParams[(0, $8c7805431dea922a$export$e0ccd3062f6ffe3d).To_PRICE];
        const PRICE_CONTAINER_ID = `fehrisPriceContainer-${getRandomNumber()}`;
        const PRICE_ERROR_ID = `fehrisPriceError-${getRandomNumber()}`;
        const FROM_CONTAINER_ID = `fehrisPriceFrom-${getRandomNumber()}`;
        const TO_CONTAINER_ID = `fehrisPriceTo-${getRandomNumber()}`;
        const PRICE_ACTIONS_CONTAINER = `fehrisPriceActionsContainer-${getRandomNumber()}`;
        const priceHTML = (0, $9ea3a24d21594cd9$export$8bf845e2f4b482c7).getPriceContainer({
            fromId: FROM_CONTAINER_ID,
            toId: TO_CONTAINER_ID,
            id: PRICE_CONTAINER_ID,
            actionsId: PRICE_ACTIONS_CONTAINER,
            language: language
        });
        (0, $f66fdc2e8eaf2d73$export$d8a0fc79d6aedf2e)(container, priceHTML);
        const priceContainerNode = document.getElementById(PRICE_CONTAINER_ID);
        // Append error container and price inputs
        (0, $f66fdc2e8eaf2d73$export$d8a0fc79d6aedf2e)(priceContainerNode, (0, $9ea3a24d21594cd9$export$8bf845e2f4b482c7).getPriceError(PRICE_ERROR_ID));
        document.getElementById(FROM_CONTAINER_ID).appendChild((0, $9ea3a24d21594cd9$export$7fdf0141ba218660)({
            value: fromValue,
            min: 0,
            onChange: (e)=>fromValue = e.target.value
        }));
        document.getElementById(TO_CONTAINER_ID).appendChild((0, $9ea3a24d21594cd9$export$7fdf0141ba218660)({
            value: toValue,
            min: 0,
            onChange: (e)=>toValue = e.target.value
        }));
        // END Append price inputs
        // Buttons actions
        const onApply = ()=>{
            const errorNode = document.getElementById(PRICE_ERROR_ID);
            errorNode.innerHTML = "";
            if (!fromValue || !toValue) return errorNode.innerHTML = (0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("error_priceRange", language);
            if (+fromValue > +toValue) return errorNode.innerHTML = (0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("error_maxShouldBeSmallerThanMin", language);
            window.location = (0, $f66fdc2e8eaf2d73$export$88f1fdfae738af54)({
                deleteParams: [
                    (0, $8c7805431dea922a$export$e0ccd3062f6ffe3d).PAGE
                ],
                updateParams: [
                    [
                        (0, $8c7805431dea922a$export$e0ccd3062f6ffe3d).FROM_PRICE,
                        fromValue
                    ],
                    [
                        (0, $8c7805431dea922a$export$e0ccd3062f6ffe3d).To_PRICE,
                        toValue
                    ]
                ]
            });
        };
        const onClear = ()=>{
            window.location = (0, $f66fdc2e8eaf2d73$export$88f1fdfae738af54)({
                deleteParams: [
                    (0, $8c7805431dea922a$export$e0ccd3062f6ffe3d).PAGE,
                    (0, $8c7805431dea922a$export$e0ccd3062f6ffe3d).FROM_PRICE,
                    (0, $8c7805431dea922a$export$e0ccd3062f6ffe3d).To_PRICE
                ]
            });
        };
        // END: Buttons actions
        const priceActionsContainerNode = document.getElementById(PRICE_ACTIONS_CONTAINER);
        // // Append clear button
        priceActionsContainerNode.appendChild((0, $9ea3a24d21594cd9$export$9b6d6ca62970729f)({
            classList: "fehris-btn--ghost-gray fehris-btn--sm",
            textContent: (0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("clear", language),
            onClick: onClear
        }));
        // Append submit button
        priceActionsContainerNode.appendChild((0, $9ea3a24d21594cd9$export$9b6d6ca62970729f)({
            classList: "fehris-btn--gray fehris-btn--sm",
            textContent: (0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("submit", language),
            onClick: onApply
        }));
    };
    const appendProductsToElement = ({ products: products, containerId: containerId, language: language })=>{
        const PRODUCTS_LIST_ID = "products-list";
        const container = document.getElementById(containerId);
        (0, $f66fdc2e8eaf2d73$export$d8a0fc79d6aedf2e)(container, (0, $9ea3a24d21594cd9$export$490f559806196b34).getProductsListContainer({
            id: PRODUCTS_LIST_ID
        }));
        const plContainer = document.getElementById(PRODUCTS_LIST_ID);
        products.forEach((p)=>{
            const { name: name, id: id, html_url: html_url, formatted_price: formatted_price, images: images, categories: categories, rating: rating, formatted_sale_price: formatted_sale_price, variants: variants, badge: badge } = p ?? {};
            const productHtml = (0, $9ea3a24d21594cd9$export$490f559806196b34).getProductCard({
                name: name[language],
                id: id,
                html_url: html_url,
                formatted_price: formatted_price[language],
                img: images?.[0]?.["image"]?.["thumbnail"],
                categoryName: categories?.[0]?.name?.[language] || "",
                ratingAvg: rating.average,
                numberTotalCount: rating.total_count,
                formatted_sale_price: formatted_sale_price[language],
                language: language,
                hasVariants: variants?.length >= 1,
                badge: badge?.body?.[language]
            });
            (0, $f66fdc2e8eaf2d73$export$d8a0fc79d6aedf2e)(plContainer, productHtml);
        });
    };
    const appendPaginationToElement = ({ containerId: containerId, totalRecords: totalRecords, language: language })=>{
        const container = document.getElementById(containerId);
        const PAGINATION_ID = "fehrisPagination";
        (0, $f66fdc2e8eaf2d73$export$d8a0fc79d6aedf2e)(container, (0, $9ea3a24d21594cd9$export$8222c5965ba78e3b).getContainer(PAGINATION_ID));
        const paginationNode = document.getElementById(PAGINATION_ID);
        const totalPages = Math.ceil((totalRecords ?? 0) / (0, $8c7805431dea922a$export$8ec3d08588d2eeda));
        const currentPage = initialQueryParams[(0, $8c7805431dea922a$export$e0ccd3062f6ffe3d).PAGE] ?? 1;
        const getUpdatedUrl = (pageNum)=>{
            const url = (0, $f66fdc2e8eaf2d73$export$88f1fdfae738af54)({
                updateParams: [
                    [
                        (0, $8c7805431dea922a$export$e0ccd3062f6ffe3d).PAGE,
                        pageNum
                    ]
                ]
            });
            return url.href;
        };
        // Append previous button
        (0, $f66fdc2e8eaf2d73$export$d8a0fc79d6aedf2e)(paginationNode, (0, $9ea3a24d21594cd9$export$8222c5965ba78e3b).getItem({
            pageNum: (0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("prev", language),
            href: getUpdatedUrl(currentPage - 1 || 1),
            disabled: currentPage == 1
        }));
        // APPEND PAGES
        for(let i = 1; i <= totalPages; i++)(0, $f66fdc2e8eaf2d73$export$d8a0fc79d6aedf2e)(paginationNode, (0, $9ea3a24d21594cd9$export$8222c5965ba78e3b).getItem({
            pageNum: i,
            href: getUpdatedUrl(i),
            active: i == currentPage
        }));
        // APPEND NEXT BUTTON
        (0, $f66fdc2e8eaf2d73$export$d8a0fc79d6aedf2e)(paginationNode, (0, $9ea3a24d21594cd9$export$8222c5965ba78e3b).getItem({
            pageNum: (0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("next", language),
            href: getUpdatedUrl(+currentPage + 1),
            disabled: currentPage == totalPages
        }));
    //
    };
    const appendAutocompleteToElement = ({ containerId: containerId, language: language, products: products, categories: categories, keywords: keywords })=>{
        const container = document.getElementById(containerId);
        const AUTOCOMPLETE_CONTAINER_ID = "fehrisAutoCompleteContainer";
        const KEYWORDS_ID = "fehrisAutoCompleteKeywordsList";
        const CATEGORIES_ID = "fehrisAutoCompleteCategoriesList";
        const PRODUCTS_ID = "fehrisAutoCompleteProductsList";
        container.innerHTML = (0, $9ea3a24d21594cd9$export$4ecf3d552dae87fb).getAutocompleteContainer({
            id: AUTOCOMPLETE_CONTAINER_ID,
            keywordsId: KEYWORDS_ID,
            categoriesId: CATEGORIES_ID,
            productsId: PRODUCTS_ID
        });
        const autocompleteResultsNode = document.getElementById(AUTOCOMPLETE_CONTAINER_ID);
        // NO RESULTS
        if (!keywords?.length && !products?.length && !categories?.length) {
            autocompleteResultsNode.innerHTML = (0, $9ea3a24d21594cd9$export$4ecf3d552dae87fb).getAutocompleteNoResults({
                language: language
            });
            return;
        }
        // FOUND RESULTS
        const keywordsNode = container.querySelector(`#${KEYWORDS_ID}`);
        const categoriesNode = container.querySelector(`#${CATEGORIES_ID}`);
        const productsNode = container.querySelector(`#${PRODUCTS_ID}`);
        keywords.forEach((k)=>{
            const keyword = k.keyword;
            (0, $f66fdc2e8eaf2d73$export$d8a0fc79d6aedf2e)(keywordsNode, (0, $9ea3a24d21594cd9$export$4ecf3d552dae87fb).getKeywordItem({
                keyword: keyword,
                href: getSearchPageHref(encodeURI(keyword))
            }));
        });
        categories.forEach((category, i)=>{
            const { flat_name: flat_name, url: url } = category || {};
            if (!flat_name || !url) return;
            if (i === 0) (0, $f66fdc2e8eaf2d73$export$d8a0fc79d6aedf2e)(categoriesNode, (0, $9ea3a24d21594cd9$export$4ecf3d552dae87fb).getCategoriesHead({
                language: language
            }));
            (0, $f66fdc2e8eaf2d73$export$d8a0fc79d6aedf2e)(categoriesNode, (0, $9ea3a24d21594cd9$export$4ecf3d552dae87fb).getKeywordItem({
                keyword: flat_name[language],
                href: url
            }));
        });
        products.forEach((product)=>{
            const name = product?.name?.[language];
            const url = product?.html_url;
            const avatar = product?.images?.[0]?.image?.thumbnail || product?.images?.[0]?.image?.full_size;
            (0, $f66fdc2e8eaf2d73$export$d8a0fc79d6aedf2e)(productsNode, (0, $9ea3a24d21594cd9$export$4ecf3d552dae87fb).getProductItem({
                name: name,
                url: url,
                avatar: avatar
            }));
        });
    };
    const appendSortingToElement = ({ containerId: containerId, language: language = getLang() })=>{
        const container = document.getElementById(containerId);
        const SORTING_ID = "fehrisSorting";
        (0, $f66fdc2e8eaf2d73$export$d8a0fc79d6aedf2e)(container, (0, $9ea3a24d21594cd9$export$490f559806196b34).getSortingContainer({
            id: SORTING_ID,
            language: language
        }));
        const sortingNode = container.querySelector(`#${SORTING_ID}`);
        const options = sortHelpers.getSortingOptions({
            language: language
        });
        const handleOnChange = (value)=>{
            if (value === (0, $8c7805431dea922a$export$75081ca35b4dae45).OPTIONS.DEFAULT) {
                const url = (0, $f66fdc2e8eaf2d73$export$88f1fdfae738af54)({
                    deleteParams: [
                        (0, $8c7805431dea922a$export$e0ccd3062f6ffe3d).SORTING_FIELD,
                        (0, $8c7805431dea922a$export$e0ccd3062f6ffe3d).SORTING_ORDER
                    ]
                });
                window.location = url.href;
            } else {
                const field = value === (0, $8c7805431dea922a$export$75081ca35b4dae45).OPTIONS.PRICE_HIGH || value === (0, $8c7805431dea922a$export$75081ca35b4dae45).OPTIONS.PRICE_LOW ? (0, $8c7805431dea922a$export$75081ca35b4dae45).FIELDS.PRICE : value === (0, $8c7805431dea922a$export$75081ca35b4dae45).OPTIONS.NEWEST || value === (0, $8c7805431dea922a$export$75081ca35b4dae45).OPTIONS.OLDEST ? (0, $8c7805431dea922a$export$75081ca35b4dae45).FIELDS.CREATED_AT : undefined;
                const order = value === (0, $8c7805431dea922a$export$75081ca35b4dae45).OPTIONS.NEWEST || value === (0, $8c7805431dea922a$export$75081ca35b4dae45).OPTIONS.PRICE_HIGH ? (0, $8c7805431dea922a$export$75081ca35b4dae45).ORDER.DESC : (0, $8c7805431dea922a$export$75081ca35b4dae45).ORDER.ASC;
                const url = (0, $f66fdc2e8eaf2d73$export$88f1fdfae738af54)({
                    updateParams: [
                        [
                            (0, $8c7805431dea922a$export$e0ccd3062f6ffe3d).SORTING_FIELD,
                            field
                        ],
                        [
                            (0, $8c7805431dea922a$export$e0ccd3062f6ffe3d).SORTING_ORDER,
                            order
                        ]
                    ]
                });
                window.location = url.href;
            }
        };
        sortingNode.appendChild((0, $9ea3a24d21594cd9$export$1554685ffdbf3107)(options, handleOnChange));
    };
    /* ########## END OF APPEND COMPONENTS ########## */ /*
   ************************************
   ******** EXPOSED FUNCTIONS *********
   ************************************
   */ const appendFilters = async function({ containerId: containerId, language: language = getLang() }) {
        const container = document.getElementById(containerId);
        const qParams = getFiltersParams();
        container.innerHTML = (0, $9ea3a24d21594cd9$export$3bf9b68e29fed608).getFilterLoader();
        const { filter: filter, postFilter: postFilter } = await filtersApi({
            ...qParams,
            language: language
        });
        container.innerHTML = "";
        const results = (0, $c33c35699540777b$export$79d5f2e8761c14d9)({
            filters: filter,
            postFilters: postFilter,
            params: qParams
        });
        appendFilterToElement({
            language: language,
            containerId: containerId,
            filter: results
        });
        appendPricesToElement({
            containerId: containerId,
            language: language
        });
    };
    const appendProducts = async function({ containerId: containerId, language: language = getLang() }) {
        const TOP_BAR_ID = "fehrisProductsTopBar";
        const container = document.getElementById(containerId);
        const qParams = getFiltersParams();
        const pageNumber = qParams[(0, $8c7805431dea922a$export$e0ccd3062f6ffe3d).PAGE] || 1;
        const from = (pageNumber - 1) * (0, $8c7805431dea922a$export$8ec3d08588d2eeda);
        container.innerHTML = (0, $9ea3a24d21594cd9$export$490f559806196b34).getProductLoader();
        const { products: products, total: total } = await productsApi({
            ...qParams,
            from: from,
            language: language
        });
        container.innerHTML = "";
        if (!products?.length) return container.append((0, $4034d5d0b756f7c9$export$633e2868f66ac64c)("noResults", language));
        (0, $f66fdc2e8eaf2d73$export$d8a0fc79d6aedf2e)(container, (0, $9ea3a24d21594cd9$export$490f559806196b34).getTopBarContainer({
            id: TOP_BAR_ID,
            productsCount: total,
            language: language
        }));
        appendSortingToElement({
            containerId: TOP_BAR_ID,
            language: language
        });
        appendProductsToElement({
            products: products,
            containerId: containerId,
            language: language
        });
        appendPaginationToElement({
            containerId: containerId,
            language: language,
            totalRecords: total
        });
    };
    const appendSearch = async function({ containerId: containerId, language: language = getLang() }) {
        const SEARCH_CONTAINER_ID = "fehrisSearchContainer";
        const SEARCH_ID = "fehrisSearch";
        const AUTOCOMPLETE_ID = "fehrisAutoComplete";
        const container = document.getElementById(containerId);
        container.innerHTML = (0, $9ea3a24d21594cd9$export$4ecf3d552dae87fb).getSearch({
            searchContainerId: SEARCH_CONTAINER_ID,
            searchId: SEARCH_ID,
            autocompleteId: AUTOCOMPLETE_ID,
            language: language
        });
        const searchContainerNode = document.getElementById(SEARCH_CONTAINER_ID);
        const searchNode = document.getElementById(SEARCH_ID);
        const autocompleteNode = document.getElementById(AUTOCOMPLETE_ID);
        // HIDE DROPDOWN WHEN CLICK OUTSIDE
        document.addEventListener("click", (e)=>{
            const closestSearch = e.target.closest(`#${containerId}`);
            if (!closestSearch && !!autocompleteNode.firstChild) return searchContainerNode.classList.add("hide");
            if (closestSearch) return searchContainerNode.classList.remove("hide");
        });
        // GO TO SEARCH PAGE ON ENTER CLICKED
        searchNode.addEventListener("keyup", (e)=>{
            const value = e.target.value;
            if (e.key === "Enter" && value?.trim()?.length) window.location = getSearchPageHref(encodeURI(value));
        });
        // TRIGGER AUTOCOMPLETE ON INPUT CHANGE
        searchNode.addEventListener("input", (e)=>fetchAutocomplete(e.target.value));
        const fetchAutocomplete = (0, $f66fdc2e8eaf2d73$export$61fc7d43ac8f84b0)(async function(query) {
            if (!query || query.trim().length <= 0) return autocompleteNode.innerHTML = "";
            searchContainerNode.classList.add("loading");
            try {
                const results = await autocompleteApi({
                    language: language,
                    query: query
                });
                searchContainerNode.classList.remove("loading");
                appendAutocompleteToElement({
                    containerId: AUTOCOMPLETE_ID,
                    language: language,
                    ...results
                });
            } catch (err) {
                // Add error handling
                searchContainerNode.classList.remove("loading");
            }
        }, 300);
    };
    /* ########## END OF EXPOSED FUNCTIONS ########## */ fehrisNameSpace.api = {
        filtersApi: filtersApi,
        autocompleteApi: autocompleteApi,
        productsApi: productsApi
    };
    fehrisNameSpace.appendFilters = appendFilters;
    fehrisNameSpace.appendProducts = appendProducts;
    fehrisNameSpace.appendSearch = appendSearch;
// fehrisNameSpace.appendSorting = appendSorting;
})(window.fehrisNameSpace = window.fehrisNameSpace || {}); // ///////////////////////////////////////////////////////////////////
 // (function () {
 //   this.diagnose = function () {
 //     return "diagnosis";
 //   };
 // }).apply(fehrisNameSpace);


//# sourceMappingURL=main.js.map
