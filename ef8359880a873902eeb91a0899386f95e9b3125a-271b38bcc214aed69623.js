(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/Rd+":function(t,e,n){"use strict";n("2Spj"),n("KKXr"),n("pIFo"),n("bWfx"),n("hHhE"),n("/SS/"),n("rE2o"),n("V+eJ"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("ioFf"),n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("EK0E"),n("HAE/"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==l(t)&&"function"!=typeof t)return{default:t};var e=o();if(e&&e.has(t))return e.get(t);var n={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var r=c?Object.getOwnPropertyDescriptor(t,i):null;r&&(r.get||r.set)?Object.defineProperty(n,i,r):n[i]=t[i]}n.default=t,e&&e.set(t,n);return n}(n("q1tI"));function o(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return o=function(){return t},t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){if(null==t)return{};var n,c,o=function(t,e){if(null==t)return{};var n,c,o={},i=Object.keys(t);for(c=0;c<i.length;c++)n=i[c],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(c=0;c<i.length;c++)n=i[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){for(var n=0;n<e.length;n++){var c=e[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function u(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=u(this,f(e).call(this,t))).state={humanInteraction:!1},n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,t),n=e,(o=[{key:"createContactLink",value:function(t){var e,n;if(t.email)e="mailto:".concat(t.email),t.headers&&(e+="?".concat((n=t.headers,Object.keys(n).map((function(t){return"".concat(t,"=").concat(encodeURIComponent(n[t]))})).join("&"))));else if(t.tel)e="tel:".concat(t.tel);else if(t.sms)e="sms:".concat(t.sms);else if(t.facetime)e="facetime:".concat(t.facetime);else if(t.href)e=t.href;else{if("object"===l(t.children))return"";e=t.children}return e}},{key:"handleClick",value:function(t){var e=this.props.onClick;!1===this.state.humanInteraction&&(t.preventDefault(),e&&"function"==typeof e&&e(),window.location.href=this.createContactLink(this.props))}},{key:"handleCopiability",value:function(){this.setState({humanInteraction:!0})}},{key:"reverse",value:function(t){if(void 0!==t)return t.split("").reverse().join("").replace("(",")").replace(")","(")}},{key:"render",value:function(){var t=this.state.humanInteraction,e=this.props,n=e.element,o=void 0===n?"a":n,i=e.children,a=e.tel,b=e.sms,u=e.facetime,f=e.email,p=e.href,m=(e.headers,e.obfuscate),d=e.obfuscateChildren,h=e.linkText,y=e.style,O=s(e,["element","children","tel","sms","facetime","email","href","headers","obfuscate","obfuscateChildren","linkText","style"]),v=i||a||b||u||f||p,j=r({},y||{},{unicodeBidi:"bidi-override",direction:!0===t||!1===m||!1===d?"ltr":"rtl"}),g=!0===t||!1===m||"object"===l(i)||!1===d?v:this.reverse(v),w="a"===o?{href:!0===t||!1===m?this.createContactLink(this.props):h||"obfuscated",onClick:this.handleClick.bind(this)}:{},k=r({onFocus:this.handleCopiability.bind(this),onMouseOver:this.handleCopiability.bind(this),onContextMenu:this.handleCopiability.bind(this)},O,{},w,{style:j});return c.default.createElement(o,k,g)}}])&&b(n.prototype,o),i&&b(n,i),e}(c.Component);e.default=m},"19Rp":function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Portfolio","email":"witkesam@gmail.com","siteKeywords":"Software developer, Full Stack Developer","siteDescription":"This cool App contains information about my work experience as a software developer.","social":{"gitHub":"SamuelWitke","twitter":"","stackOverflow":"7427118/sam","linkedIn":"in/samuelwitke/","resumeInPdf":"/CV-19.pdf"}}}}}')},"1dQK":function(t,e,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("/8Fb");var c=n("iYmT"),o=n("19Rp"),i=n("q1tI"),r=n.n(i),a=n("TJpk"),s=n.n(a),l=n("Wbzz"),b=n("qKvR"),u=n("/Rd+"),f=n.n(u),p=n("lV95"),m=n("N0KO"),d=Object(m.a)([{type:"max",size:"40"}])[0],h={wrapper:Object(b.b)(".contact{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;position:absolute;top:0;left:0;width:100%;}.page{width:100%;position:relative;perspective:1200px;perspective-origin:50% 0;",d,"{perspective-origin:50% -10%;}}.tab{transition:transform 1s;transition-timing-function:cubic-bezier(0.2,1,0.3,1);&:first-of-type{background:#3d3d3d;}&:nth-of-type(2){background:#848484;}&:nth-of-type(3){background:#bbbbbb;}}.page-move{pointer-events:none;.tab:first-of-type{transform:translate3d(0px,75vh,-300px);}.tab:nth-of-type(2){transform:translate3d(0px,75vh,-250px);}.tab:nth-of-type(3){transform:translate3d(0px,75vh,-200px);}.tab:nth-of-type(4){transform:translate3d(0px,75vh,-150px);}}.btn-contactme-close{pointer-events:none;font-size:2em;position:absolute;top:1.25em;right:1.25em;display:block;color:#fff;z-index:2;opacity:0;transform:scale3d(0.8,0.8,1);transition:opacity 0.5s,transform 0.5s;",d,"{font-size:1.25em;}}.contactme-open .btn-contactme-close{pointer-events:auto;}.contactme-open{pointer-events:auto;}.contactme-container{margin:5em 0;color:#fff;width:100%;}.contactme-info{font-size:1.5rem;display:block;width:75%;margin:0 auto;padding:0.85em 0;text-align:center;display:block;transform:translate3d(0,20px,0);p{margin-bottom:0;}",d,"{font-size:1.3rem;}}.contactme-open .btn-contactme-close{opacity:1;transform:scale3d(1,1,1);}.contactme-container,.contactme-info{opacity:0;transform:translate3d(0,150px,0);transition:opacity 1s,transform 1s;transition-timing-function:cubic-bezier(0.2,1,0.3,1);}.contactme-open .contactme-container,.contactme-open .contactme-info{opacity:1;transform:translate3d(0,0,0);}.contactme-open .contactme-info{transition-delay:0.35s;}"),pageTab:{name:"syr734",styles:"position:absolute;top:0;left:0;width:100%;height:100%;transform:translate3d(0);"},mainContainer:{name:"daf5db",styles:"overflow-y:auto;overflow-x:hidden;position:relative;display:flex;flex-direction:column;align-items:center;width:100%;min-height:100%;background-color:#fff;background-repeat:no-repeat;background-position:50% 10em;background-size:75% auto;"},layoutMagin:{name:"lwdzql",styles:"margin-bottom:1.45rem;"},pageContainer:{name:"28is78",styles:"min-width:100%;min-height:100%;"},contactContactme:Object(b.b)("position:absolute;top:1.15em;right:1.25em;z-index:1;",d,"{font-size:0.85em;position:absolute;top:2.15em;right:2em;}"),btn:{name:"19u1oz3",styles:"margin:0;padding:0;cursor:pointer;border:none;background:none;text-decoration:none;color:#000;outline:none;&:focus{outline:none;}"},btnContactme:{name:"3fuzg5",styles:"font-size:1.5em;"},contactMe:{name:"vnlmxs",styles:"font-size:1.8rem;font-weight:bold;line-height:1;display:inline-block;box-sizing:border-box;width:75%;max-width:900px;padding:3em 0 0.1em;"},whiteLink:{name:"156gtzw",styles:"color:#fff;display:inline-block;p;adding:10px;"}},y={name:"1w9e0s1",styles:".tl-edges{max-width:100%;overflow-x:inherit;}"};e.a=function(t){var e=t.children,n=t.bgClassName,a=Object(i.useState)(!1),u=a[0],m=a[1];function d(){m(!0)}function O(){m(!1)}function v(t,e){return Object(b.c)(r.a.Fragment,null,Object(b.c)("svg",{className:"hidden"},Object(b.c)("defs",null,Object(b.c)("symbol",{id:"icon-contact",viewBox:"0 0 483.3 483.3"},Object(b.c)("title",null,"contact"),Object(b.c)("g",null,Object(b.c)("g",null,Object(b.c)("path",{d:"M424.3,57.75H59.1c-32.6,0-59.1,26.5-59.1,59.1v249.6c0,32.6,26.5,59.1,59.1,59.1h365.1c32.6,0,59.1-26.5,59.1-59.1 v-249.5C483.4,84.35,456.9,57.75,424.3,57.75z M456.4,366.45c0,17.7-14.4,32.1-32.1,32.1H59.1c-17.7,0-32.1-14.4-32.1-32.1v-249.5 c0-17.7,14.4-32.1,32.1-32.1h365.1c17.7,0,32.1,14.4,32.1,32.1v249.5H456.4z"}),Object(b.c)("path",{d:"M304.8,238.55l118.2-106c5.5-5,6-13.5,1-19.1c-5-5.5-13.5-6-19.1-1l-163,146.3l-31.8-28.4c-0.1-0.1-0.2-0.2-0.2-0.3 c-0.7-0.7-1.4-1.3-2.2-1.9L78.3,112.35c-5.6-5-14.1-4.5-19.1,1.1c-5,5.6-4.5,14.1,1.1,19.1l119.6,106.9L60.8,350.95 c-5.4,5.1-5.7,13.6-0.6,19.1c2.7,2.8,6.3,4.3,9.9,4.3c3.3,0,6.6-1.2,9.2-3.6l120.9-113.1l32.8,29.3c2.6,2.3,5.8,3.4,9,3.4 c3.2,0,6.5-1.2,9-3.5l33.7-30.2l120.2,114.2c2.6,2.5,6,3.7,9.3,3.7c3.6,0,7.1-1.4,9.8-4.2c5.1-5.4,4.9-14-0.5-19.1L304.8,238.55z"})))),Object(b.c)("symbol",{id:"icon-cross",viewBox:"0 0 24 24"},Object(b.c)("title",null,"cross"),Object(b.c)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),Object(b.c)("symbol",{id:"icon-github",viewBox:"0 0 496 512"},Object(b.c)("title",null,"github"),Object(b.c)("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})),Object(b.c)("symbol",{id:"icon-twitter",viewBox:"0 0 512 512"},Object(b.c)("title",null,"twitter"),Object(b.c)("path",{fill:"currentColor",d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"})),Object(b.c)("symbol",{id:"icon-stackoverflow",viewBox:"0 0 384 512"},Object(b.c)("title",null,"stackoverflow"),Object(b.c)("path",{fill:"currentColor",d:"M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"})),Object(b.c)("symbol",{id:"icon-linkedin",viewBox:"0 0 448 512"},Object(b.c)("title",null,"linkedin"),Object(b.c)("path",{fill:"currentColor",d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"})),Object(b.c)("symbol",{id:"icon-cv",viewBox:"0 0 512 512"},Object(b.c)("title",null,"cv"),Object(b.c)("path",{d:"m220.814 268.591c11.357-10.699 26.21-16.591 41.824-16.591h97.362v-237c0-8.284-6.716-15-15-15h-330c-8.284 0-15 6.716-15 15v392c0 8.284 6.716 15 15 15h330c7.871 0 14.313-6.065 14.938-13.775-19.661-6.079-36.281-19.122-47-36.225h-50.938c-16.352 0-31.639-6.471-43.045-18.222-11.402-11.746-17.414-27.223-16.928-43.578.471-15.861 7.143-30.639 18.787-41.609zm-19.6-208.106c8.015-2.091 16.209 2.713 18.3 10.729l15.486 59.361 15.486-59.361c2.091-8.016 10.288-12.819 18.3-10.729 8.016 2.092 12.819 10.285 10.728 18.301l-30 115c-1.723 6.606-7.688 11.214-14.514 11.214s-12.791-4.608-14.514-11.214l-30-115c-2.091-8.015 2.712-16.209 10.728-18.301zm-121.214 34.515c0-19.299 15.701-35 35-35h20c19.299 0 35 15.701 35 35 0 8.284-6.716 15-15 15s-15-6.716-15-15c0-2.757-2.243-5-5-5h-20c-2.757 0-5 2.243-5 5v80c0 2.757 2.243 5 5 5h20c2.757 0 5-2.243 5-5 0-8.284 6.716-15 15-15s15 6.716 15 15c0 19.299-15.701 35-35 35h-20c-19.299 0-35-15.701-35-35zm85 295h-90c-8.284 0-15-6.716-15-15s6.716-15 15-15h90c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-60h-90c-8.284 0-15-6.716-15-15s6.716-15 15-15h90c8.284 0 15 6.716 15 15s-6.716 15-15 15zm30-60h-120c-8.284 0-15-6.716-15-15s6.716-15 15-15h120c8.284 0 15 6.716 15 15s-6.716 15-15 15z"}),Object(b.c)("path",{d:"m497 312h-48.787c-9.896 0-19.186-3.942-26.076-11.084-11.932-12.368-28.676-18.916-45.861-18.916h-113.638c-16.324 0-30.14 12.775-30.625 29.092-.503 16.954 13.143 30.908 29.987 30.908h70.096c6.547 23.057 27.777 40 52.904 40 1.765 0 3.452-.321 5.025-.881l-.025 25.881c0 15.934-8.332 29.95-20.86 37.948 8.043 10.21 12.86 23.075 12.86 37.052 0 10.925-2.949 21.167-8.072 30h1.859c17.598 0 34.412-7.066 46.896-19.47 6.786-6.742 15.962-10.53 25.531-10.53h48.786c8.284 0 15-6.716 15-15v-140c0-8.284-6.716-15-15-15z"}),Object(b.c)("path",{d:"m322 452h-70c-16.569 0-30 13.431-30 30 0 16.569 13.431 30 30 30h70c16.569 0 30-13.431 30-30 0-16.569-13.431-30-30-30z"})))),Object(b.c)("div",{className:"contact"+(u?" contactme-open":"")},Object(b.c)("button",{css:Object(c.a)([h.btn,h.blackPgColor]),className:"btn-contactme-close","aria-label":"Close contact me",title:"Close contact me","data-test":"contactmeClose",onClick:O},Object(b.c)("svg",{className:"icon"},Object(b.c)("use",{xlinkHref:"#icon-cross"}))),Object(b.c)("div",{className:"contactme-container"},Object(b.c)("div",{css:h.contactMe},"Let's Make Something Great Together"),Object(b.c)("div",{className:"contactme-info"},Object(b.c)("p",null,"Get in touch with me on"),Object(b.c)("p",null,Object.entries(t).map((function(t){var e,n,c,o=t[0],i=t[1];return"resumeInPdf"!==o?(e=("string"==typeof(c=o)?""+c.charAt(0).toUpperCase+c.slice():"")+" Account",n=o.toLocaleLowerCase()):(e="Download my CV",n="cv"),Object(b.c)("a",{key:i,target:"_blank",href:""+({gitHub:"https://github.com/",twitter:"https://twitter.com/",stackOverflow:"https://stackoverflow.com/users/",linkedIn:"https://www.linkedin.com/"}[o]||"")+i,css:h.whiteLink,rel:"noopener noreferrer",title:e},Object(b.c)("svg",{className:"icon"},Object(b.c)("use",{xlinkHref:"#icon-"+n})))}))),Object(b.c)("p",null,"Or drop me an email at"," ",Object(b.c)(f.a,{email:e,headers:{subject:"Come join us!",body:"We want you in our team, we have pizza friday"}}))))))}return Object(b.c)(r.a.Fragment,null,Object(b.c)(b.a,{styles:y}),Object(b.c)("div",{css:h.wrapper,className:"layout-wrapper "+(n||"white")},Object(b.c)(l.StaticQuery,{query:"2807180088",render:function(t){var o=t.site.siteMetadata,i=o.title,a=o.email,l=o.siteKeywords,f=o.siteDescription,m=o.social;return Object(b.c)(r.a.Fragment,null,Object(b.c)(s.a,{title:i,meta:[{name:"description",content:f},{name:"keywords",content:l},{charSet:"utf-8"}]},Object(b.c)("html",{lang:"en"})),v(m,a),Object(b.c)("div",{className:"page"+(u?" page-move":"")},Object(b.c)("div",{css:h.pageTab,className:"tab"}),Object(b.c)("div",{css:h.pageTab,className:"tab"}),Object(b.c)("div",{css:h.pageTab,className:"tab"}),Object(b.c)("div",{css:h.mainContainer,className:"tab"},Object(b.c)("div",{className:"layout-inner"},Object(b.c)("div",{css:h.layoutMagin},Object(b.c)(p.a,{bgClassName:n,numPoints:18,duration:600,delayPointsMax:300,delayPerPath:100,fixedMenuPosition:!1}),Object(b.c)("div",{css:h.contactContactme},Object(b.c)("button",{css:Object(c.a)([h.btn,h.btnContactme]),className:"btn-contact-color",onClick:d,title:"Contact me","data-test":"contactme"},Object(b.c)("svg",{className:"icon"},Object(b.c)("use",{xlinkHref:"#icon-contact"}))))),Object(b.c)("div",{css:h.pageContainer},e)))))},data:o})))}},WLL4:function(t,e,n){var c=n("XKFU");c(c.S+c.F*!n("nh4g"),"Object",{defineProperties:n("FJW5")})},jm62:function(t,e,n){var c=n("XKFU"),o=n("mQtv"),i=n("aCFj"),r=n("EemH"),a=n("8a7r");c(c.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,c=i(t),s=r.f,l=o(c),b={},u=0;l.length>u;)void 0!==(n=s(c,e=l[u++]))&&a(b,e,n);return b}})},mQtv:function(t,e,n){var c=n("kJMx"),o=n("JiEa"),i=n("y3w9"),r=n("dyZX").Reflect;t.exports=r&&r.ownKeys||function(t){var e=c.f(i(t)),n=o.f;return n?e.concat(n(t)):e}}}]);
//# sourceMappingURL=ef8359880a873902eeb91a0899386f95e9b3125a-271b38bcc214aed69623.js.map