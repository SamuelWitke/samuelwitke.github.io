(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{C331:function(t,e,n){"use strict";n("2Spj"),n("HAE/"),n("pIFo");var i="bfred-it:object-fit-images",o=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,r="undefined"==typeof Image?{style:{"object-position":1}}:new Image,a="object-fit"in r.style,c="object-position"in r.style,s="background-size"in r.style,l="string"==typeof r.currentSrc,u=r.getAttribute,d=r.setAttribute,f=!1;function m(t,e,n){var i="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(e||1)+"' height='"+(n||0)+"'%3E%3C/svg%3E";u.call(t,"src")!==i&&d.call(t,"src",i)}function p(t,e){t.naturalWidth?e(t):setTimeout(p,100,t,e)}function b(t){var e=function(t){for(var e,n=getComputedStyle(t).fontFamily,i={};null!==(e=o.exec(n));)i[e[1]]=e[2];return i}(t),n=t[i];if(e["object-fit"]=e["object-fit"]||"fill",!n.img){if("fill"===e["object-fit"])return;if(!n.skipTest&&a&&!e["object-position"])return}if(!n.img){n.img=new Image(t.width,t.height),n.img.srcset=u.call(t,"data-ofi-srcset")||t.srcset,n.img.src=u.call(t,"data-ofi-src")||t.src,d.call(t,"data-ofi-src",t.src),t.srcset&&d.call(t,"data-ofi-srcset",t.srcset),m(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{!function(t){var e={get:function(e){return t[i].img[e||"src"]},set:function(e,n){return t[i].img[n||"src"]=e,d.call(t,"data-ofi-"+n,e),b(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}(t)}catch(r){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(t){if(t.srcset&&!l&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}(n.img),t.style.backgroundImage='url("'+(n.img.currentSrc||n.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=e["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(e["object-fit"])?p(n.img,(function(){n.img.naturalWidth>t.width||n.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"})):t.style.backgroundSize=e["object-fit"].replace("none","auto").replace("fill","100% 100%"),p(n.img,(function(e){m(t,e.naturalWidth,e.naturalHeight)}))}function g(t,e){var n=!f&&!t;if(e=e||{},t=t||"img",c&&!e.skipTest||!s)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var o=0;o<t.length;o++)t[o][i]=t[o][i]||{skipTest:e.skipTest},b(t[o]);n&&(document.body.addEventListener("load",(function(t){"IMG"===t.target.tagName&&g(t.target,{skipTest:e.skipTest})}),!0),f=!0,t="img"),e.watchMQ&&window.addEventListener("resize",g.bind(null,t,{skipTest:e.skipTest}))}g.supportsObjectFit=a,g.supportsObjectPosition=c,function(){function t(t,e){return t[i]&&t[i].img&&("src"===e||"srcset"===e)?t[i].img:t}c||(HTMLImageElement.prototype.getAttribute=function(e){return u.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,n){return d.call(t(this,e),e,String(n))})}(),t.exports=g},GC46:function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return z}));var i=n("q1tI"),o=n.n(i),r=n("Wbzz"),a=n("TJpk"),c=n.n(a),s=n("qKvR"),l=n("N0KO"),u=Object(l.a)([{type:"max",size:"45"}])[0],d={jobtitle:{name:"1gnftdf",styles:"width:100%;background-color:#6c5b7b;h1,h3{color:#FFF;}h3{margin-bottom:0;}"},jobtitleContent:{name:"4pzkgp",styles:"padding:1.2rem 3rem 1.2rem 3rem;max-width:1600px;margin:0 auto;"},contentText:Object(s.b)("max-width:1600px;position:relative;column-count:2;column-gap:3rem;text-align:justify;margin:0 auto;padding:2rem 3rem;p,li{font-size:1.15rem;line-height:1.3;color:#a7a7a7;}p{margin:0 0 1em;}",u,"{font-size:0.85em;column-count:auto;column-gap:initial;text-align:justify;margin:0 auto;padding:0.7rem 1rem;}")},f=(n("91GP"),n("f3/d"),n("dRSK"),n("YmA7")),m=n("kOA+"),p=n.n(m),b=n("nQg3"),g=n("ciIH"),h=n.n(g),y=n("EgnG"),j={layout1:{out:{translateX:{next:"-100%",previous:"100%"},rotateZ:{next:function(){return y.a.random(-15,0)},previous:function(){return y.a.random(0,15)}},opacity:0,duration:1200,easing:"easeOutQuint",itemsDelay:80},in:{resetProps:{translateX:{next:"100%",previous:"-100%"},rotateZ:{next:function(){return y.a.random(0,15)},previous:function(){return y.a.random(-15,0)}},opacity:0},translateX:"0%",rotateZ:0,opacity:1,duration:700,easing:"easeOutQuint",itemsDelay:80}},layout2:{out:{translateX:{next:function(){return y.a.random(-50,50)+"%"},previous:function(){return y.a.random(-50,50)+"%"}},translateY:{next:function(){return y.a.random(-50,50)+"%"},previous:function(){return y.a.random(-50,50)+"%"}},opacity:0,duration:1200,easing:"easeOutQuint",itemsDelay:10},in:{resetProps:{translateX:{next:"100%",previous:"-100%"},rotateZ:{next:function(){return y.a.random(0,90)},previous:function(){return y.a.random(-90,0)}},opacity:0},translateX:"0%",rotateZ:0,opacity:1,duration:900,easing:"easeOutExpo",itemsDelay:30}},layout3:{out:{translateY:{next:"60%",previous:"-60%"},opacity:0,duration:700,easing:"easeOutQuint",itemsDelay:50},in:{resetProps:{translateY:{next:"-60%",previous:"60%"},opacity:0},translateY:"0%",opacity:1,duration:700,easing:"easeOutQuint",itemsDelay:50,delay:250}},layout4:{out:{scale:.5,opacity:0,duration:300,easing:"easeInBack",itemsDelay:20},in:{resetProps:{scale:.5,opacity:0},opacity:1,scale:1,duration:1e3,easing:"easeOutElastic",itemsDelay:50,delay:400}},layout5:{out:{translateX:{next:"-100%",previous:"100%"},opacity:0,duration:1200,easing:"easeOutQuint",itemsDelay:40},in:{resetProps:{translateX:{next:"100%",previous:"-100%"},rotateZ:{next:function(){return y.a.random(0,25)},previous:function(){return y.a.random(-25,0)}},opacity:0},translateX:"0%",rotateZ:0,opacity:1,duration:700,easing:"easeOutQuint",itemsDelay:40,delay:250}}},v=Object(l.a)([{type:"max",size:"45"}])[0],O={job:Object(s.b)("background:#355c7d;a{text-decoration:none;outline:none;}h1,h2,h3{color:#fff;}",v,"{a{color:#fff;}}"),arrowBack:Object(s.b)("right:0;bottom:0;position:fixed;margin:0 1.5em 1.25em 0;background:none;border:4px solid;padding:0;display:block;width:3em;height:3em;font-size:1.25em;border-radius:50%;cursor:pointer;opacity:0;transition:opacity 0.5s;z-index:1001;background:#0f4c81;border-color:#0f4c81;color:#fff;box-shadow:0 14px 59px -7px rgba(0,0,0,0.85);&:focus{outline:none;}&:hover{background:inherit;color:#1568dd;}",v,"{margin:0 0.25em 0.75em 0;background:#1568dd;border-color:#1568dd;}"),iconJob:{name:"cppeux",styles:"display:block;width:1.8em;height:1.8em;margin:0 auto;fill:currentColor;height:3.1em;"},slideshow:Object(s.b)("position:relative;width:100%;max-width:1600px;margin:0 auto;height:100vh;max-height:1000px;pointer-events:none;&:focus{outline:none;}",v,"{padding-top:7em;height:calc(100vh - 40px);}"),slideshowNav:Object(s.b)("position:absolute;pointer-events:none;z-index:2;font-size:5em;right:0.1em;bottom:1em;",v,"{font-size:4em;right:auto;bottom:0em;left:0em;}"),btnjob:{name:"602od1",styles:"display:inline-block;margin:0;padding:0;cursor:pointer;pointer-events:auto;color:#ffe4b3;border:none;background:none;font-size:1.5em;display:block;.icon{height:0.5em;}&:focus{outline:none;}&:hover{color:#1568dd;}&:nth-of-type(2){margin:0 0 0 0.5em;}"},gradient:Object(s.b)(),slide:Object(s.b)("width:100%;margin:0 0 1em 0;padding:3em 0;position:absolute;top:0;left:0;height:100%;margin:0;pointer-events:none;opacity:0;.slide-img-inner{position:absolute;object-fit:cover;width:100%;height:100%;transform:rotateZ(0deg);backface-visibility:hidden;will-change:tranform,opacity;background-position:50% 50%;background-size:cover;}",v,"{padding:6em 0;}"),slideCurrent:{name:"12m0k8p",styles:"pointer-events:auto;"},slideImgCaption:Object(s.b)('font-family:"Gochi Hand",cursive;position:absolute;width:100%;top:83%;text-align:center;margin:0;padding:1em;font-size:1.25em;color:#25303b;font-weight:normal;',v,"{font-size:0.75em;}"),animationContainer:{name:"18lnl7p",styles:"position:absolute;overflow:hidden;width:100%;height:100%;"},slideTitle:Object(s.b)("position:absolute;bottom:0;left:0;width:calc(100% - 11em);max-width:800px;padding:2em;color:#e8e8e8;z-index:2;pointer-events:none;opacity:0;font-weight:500;opacity:0;",v,"{width:calc(100% - 2em);margin:0 0 4em 0;padding:1.5em;}"),slideTitleMain:Object(s.b)("font-size:6em;line-height:0.8;display:inline-block;margin:0;",v,"{font-size:4em;}"),slideTitleSub:Object(s.b)("font-size:1.55em;line-height:1.5;margin:1em 0 0 0;padding:8px;color:#faf4ff;a{border-bottom:1px solid;}",v,"{font-size:1.3em;line-height:1;}"),slideImgwrap:Object(s.b)("position:relative;width:calc(80% - 6em);height:60%;margin:0 auto;",v,"{width:calc(100% - 1em);}"),slideLayout1:{name:"nqr83j",styles:".slide-img{position:absolute;width:calc(50% - 1em);}.slide-img:first-of-type{left:0.5em;height:100%;}.slide-img:nth-of-type(n + 2){left:calc(50% + 0.5em);height:calc(50% - 0.5em);}.slide-img:nth-of-type(3){top:calc(50% + 0.5em);}"},slideLayout2:Object(s.b)(".slide-img{position:absolute;top:50%;left:50%;}.slide-img:not(:last-child){width:300px;height:300px;}.slide-img:not(:last-child) .slide-img-inner{border:5px solid #fff;}.slide-img:first-of-type{transform:translate3d(-50%,-50%,0) translate3d(-60%,-40%,0) rotate(-16deg);}.slide-img:nth-of-type(2){transform:translate3d(-50%,-50%,0) translate3d(60%,-40%,0) rotate(10deg);}.slide-img:nth-of-type(3){transform:translate3d(-50%,-50%,0) translate3d(60%,40%,0) rotate(-15deg);}.slide-img:nth-of-type(4){transform:translate3d(-50%,-50%,0) translate3d(-60%,40%,0) rotate(10deg);}.slide-img:last-child{transform:translate3d(-50%,-50%,0);width:450px;height:400px;}.slide-img:last-child .slide-img-inner{border:10px solid #fff;border-bottom-width:65px;}",v,"{.slide-img:not(:last-child){width:100px;height:100px;}.slide-img:last-child .slide-img-inner{border-bottom-width:40px;}.slide-img:last-child{width:160px;height:160px;}}"),slideLayout3:{name:"gb4wtq",styles:".slide-img{position:absolute;}.slide-img:nth-of-type(2){top:15%;left:15%;width:30%;height:50%;}.slide-img:first-of-type{top:40%;left:5%;width:80%;height:60%;}.slide-img:nth-of-type(3){top:0;left:40%;width:40%;height:60%;}.slide-img:nth-of-type(4){top:50%;left:75%;width:22.5%;height:42.5%;}"},slideLayout4:{name:"xzmas3",styles:".slide-img{position:absolute;top:50%;left:50%;width:45%;padding-bottom:45%;transform:translate3d(-50%,-50%,0);}.slide-img-inner{border-radius:50%;}.slide-img:first-of-type{transform:translate3d(0%,-40%,0) scale(0.6);}.slide-img:nth-of-type(3){transform:translate3d(-100%,-60%,0) scale(0.75);}"},slideLayout5:{name:"r63zlt",styles:'.slide-img{position:absolute;top:10%;width:40%;height:80%;}.slide-img:nth-of-type(2){left:30%;}.slide-img:nth-of-type(3){left:60%;}.slide-img-inner{-webkit-clip-path:polygon(0% 100%,30% 0%,100% 0%,70% 100%);clip-path:polygon(0% 100%,30% 0%,100% 0%,70% 100%);-webkit-clip-path:url("#polygon-clip-rhomboid");clip-path:url("/#polygon-clip-rhomboid");}'}},w=function(t){var e=t.active,n=t.title,o=t.description,r=t.layout,a=t.files,c=t.dimentions,l=t.direction,u=t.onEndAnimating,d=t.caption,f=void 0===d?null:d,m=Object(b.b)(e),p=Object(i.useRef)(),g=Object(i.useRef)(),v=Object(i.useRef)(a.map(i.createRef));Object(i.useEffect)((function(){var t;function n(t,e){var n={},o="";return[{property:"translateX",dimention:"width"},{property:"translateY",dimention:"height"},{property:"rotateZ",dimention:!1},{property:"scale",dimention:!1}].forEach((function(r){var a=r.property,c=function(e){var n,o=e.property,r=e.dimention;return void 0!==t[o]&&(n=!1!==r?"object"==typeof t[o]?function(){return"function"==typeof t[o][l]?i(t[o][l](),r):i(t[o][l],r)}:i(t[o],r):"object"==typeof t[o]?function(){return"function"==typeof t[o][l]?t[o][l]():t[o][l]}:t[o]),n}({property:a,dimention:r.dimention});if(void 0!==c)if(e){var s;switch(a){case"rotateZ":s="deg";break;case"scale":s="";break;default:s="px"}o+=(o?" ":"")+a+"("+("function"==typeof c?c():c)+s+")"}else n[a]=c})),e||void 0===n.opacity||(n.opacity=t.opacity),e?o:n}function i(t,e){return"string"==typeof t&&-1!==t.indexOf("%")?parseFloat(t)/100*c[e]:t}function o(t){g.current.style.opacity=!0===t?0:1;var e=!0===t?{opacity:1,duration:500}:{opacity:0,duration:200};Object(y.a)({targets:g.current,opacity:e.opacity,duration:e.duration,easing:"easeOutExpo"})}function a(t,e){var i=n(t,!1);return i=Object.assign({targets:e,duration:t.duration,easing:t.easing,opacity:t.opacity,delay:function(n,i){return"next"===l?i*t.itemsDelay:(e.length-1-i)*t.itemsDelay}},i)}return e&&e!==m?function(){p.current.style.opacity=1;var e=(j["layout"+r]||[]).in;if(e){var i={transform:n(e.resetProps,!0),opacity:0},c=a(e,v.current.map((function(t){return t.current.style.opacity=i.opacity,t.current.style.transform=i.transform,t.current})));t=setTimeout((function(){Object(y.a)(c)}),e.delay),o(!0)}}():e||void 0===m||e===m||function(){var t=(j["layout"+r]||[]).out;if(t){var e=a(t,v.current.map((function(t){return t.current})));e.complete=function(){p.current.style.opacity=0,u()},Object(y.a)(e),o(!1)}}(),function(){!e&&t&&clearTimeout(t)}}),[e,c,l,r,u,m,n]);var w=[O.slide];O["slideLayout"+r]&&w.push(O["slideLayout"+r]);var x=[O.slideTitle];return e&&(w.push(O.slideCurrent),x.push(O.slideCurrent)),Object(s.c)("div",{css:w,ref:p,"aria-hidden":e},Object(s.c)("div",{css:O.slideImgwrap},a.map((function(t,e){var i=t.image;return Object(s.c)("div",{key:e,className:"slide-img"},Object(s.c)("div",{ref:v.current[e],css:O.animationContainer},Object(s.c)(h.a,{className:"slide-img-inner",fluid:i.childImageSharp.fluid,style:{position:"absolute"},objectPosition:"top left",alt:n}),f&&4===e&&Object(s.c)("h4",{css:O.slideImgCaption},f)))}))),Object(s.c)("div",{css:x,ref:g},Object(s.c)("h3",{css:O.slideTitleMain},n),Object(s.c)("p",{css:O.slideTitleSub},o)))};function x(){return(x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var k=function(t){var e=t.images,n=t.children,r=Object(i.useRef)(),a=Object(b.c)(r,10),l=Object(i.useState)(0),u=l[0],d=l[1],m=Object(i.useState)(!1),g=m[0],h=m[1],y=Object(i.useState)("next"),j=y[0],v=y[1],k=e.length-1;function T(){h(!1)}var z=f.data.site.siteMetadata,S=z.basePath,E=z.menuLinks.find((function(t){return"experience"===t.name})),P=E?E.color:"#3a3d98";return Object(s.c)(o.a.Fragment,null,Object(s.c)(c.a,{link:[{href:"https://fonts.googleapis.com/css?family=Gochi+Hand",rel:"stylesheet"}]}),Object(s.c)("section",null,Object(s.c)("svg",{className:"hidden"},Object(s.c)("defs",null,Object(s.c)("symbol",{id:"icon-prev",viewBox:"0 0 100 50"},Object(s.c)("title",null,"prev"),Object(s.c)("polygon",{points:"5.4,25 18.7,38.2 22.6,34.2 16.2,27.8 94.6,27.8 94.6,22.2 16.2,22.2 22.6,15.8 18.7,11.8"})),Object(s.c)("symbol",{id:"icon-next",viewBox:"0 0 100 50"},Object(s.c)("title",null,"next"),Object(s.c)("polygon",{points:"81.3,11.8 77.4,15.8 83.8,22.2 5.4,22.2 5.4,27.8 83.8,27.8 77.4,34.2 81.3,38.2 94.6,25 "})),Object(s.c)("symbol",{id:"icon-arrowback",viewBox:"0 0 24 24"},Object(s.c)("title",null,"arrow-back"),Object(s.c)("path",{d:"M7.839 17.296a.847.847 0 0 0 1.21 0 .853.853 0 0 0 0-1.198L2.914 9.965h20.238A.843.843 0 0 0 24 9.118a.852.852 0 0 0-.847-.86H2.915l6.133-6.12a.868.868 0 0 0 0-1.21.847.847 0 0 0-1.21 0L.255 8.513a.833.833 0 0 0 0 1.197l7.585 7.586z"})),Object(s.c)("clippath",{id:"polygon-clip-rhomboid",clipPathUnits:"objectBoundingBox"},Object(s.c)("polygon",{points:"0 1, 0.3 0, 1 0, 0.7 1"})))),Object(s.c)("main",{css:O.job},Object(s.c)("header",null,Object(s.c)(p.a,{cover:!0,to:S+"/experience",css:O.arrowBack,direction:"right","data-test":"goback",bg:P,style:{opacity:1}},Object(s.c)("svg",{css:O.iconJob},Object(s.c)("use",{xlinkHref:"#icon-arrowback"})))),Object(s.c)("div",{css:O.slideshow,"data-test":"slideshow",ref:r},a&&e.map((function(t,e){return Object(s.c)(w,x({},t,{active:u===e,key:t.title,dimentions:a,direction:j,onEndAnimating:T}))})),Object(s.c)("nav",{css:O.slideshowNav},Object(s.c)("button",{onClick:function(){g||(h(!0),v("previous"),d(u>0?u-1:k))},css:O.btnjob,"aria-label":"Previous slide","data-test":"previous"},Object(s.c)("svg",{className:"icon"},Object(s.c)("use",{xlinkHref:"#icon-prev"}))),Object(s.c)("button",{onClick:function(){g||(h(!0),v("next"),d(u<k?u+1:0))},css:O.btnjob,"aria-label":"Next slide","data-test":"next"},Object(s.c)("svg",{className:"icon"},Object(s.c)("use",{xlinkHref:"#icon-next"})))),Object(s.c)("div",{css:O.gradient})),n)))},T=n("xcB0"),z=(e.default=function(t){var e=t.data.markdownRemark;return Object(i.useLayoutEffect)((function(){if(!e)return Object(r.navigate)("/404"),Object(s.c)(o.a.Fragment,null)}),[e]),e?Object(s.c)(o.a.Fragment,null,Object(s.c)(a.Helmet,null,Object(s.c)("meta",{charSet:"utf-8"}),Object(s.c)("title",null,e.frontmatter.jobTitle," ","on"," ",e.frontmatter.company)),Object(s.c)(k,{images:e.frontmatter.images},Object(s.c)("div",{css:d.jobtitle},Object(s.c)("div",{css:d.jobtitleContent,"data-test":"content"},Object(s.c)("h1",null,e.frontmatter.company),Object(s.c)("h3",null,e.frontmatter.jobTitle,","," ",e.frontmatter.dateFrom," ",e.frontmatter.dateTo?" to "+e.frontmatter.dateTo:" Present"))),Object(s.c)("div",{css:d.contentText,dangerouslySetInnerHTML:{__html:e.html}})),Object(s.c)(T.a,{skills:e.frontmatter.skills,type:"static",title:"Tools used",showLoadingAnimation:!1})):Object(s.c)(o.a.Fragment,null)},"4212215841")},YmA7:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"basePath":"","menuLinks":[{"color":"#000","name":"home"},{"color":"#3a3d98","name":"experience"},{"color":"#d52d43","name":"skills"},{"color":"#fff","name":"aboutMe"},{"color":"#fff","name":"featured"}]}}}}')},cMmx:function(t,e,n){"use strict";var i="undefined"==typeof window;e.a=i},ciIH:function(t,e,n){"use strict";n("VRzm"),n("Btvt");var i=n("284h"),o=n("TqRt");e.__esModule=!0,e.default=void 0;var r=o(n("pVnL")),a=o(n("8OQS")),c=o(n("284h")),s=o(n("PJYZ")),l=o(n("VbXa")),u=o(n("lSNA")),d=i(n("q1tI")),f=o(n("17x9")),m=o(n("9eSz")),p=function(t){function e(){for(var e,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i))||this,(0,u.default)((0,s.default)(e),"imageRef",e.props.innerRef||(0,d.createRef)()),e}(0,l.default)(e,t);var i=e.prototype;return i.componentDidMount=function(){var t=this,e=document.createElement("img");void 0!==e.style.objectFit&&void 0!==e.style.objectPosition||Promise.resolve().then((function(){return(0,c.default)(n("C331"))})).then((function(e){return(0,e.default)(t.imageRef.current.imageRef.current)}))},i.render=function(){var t=this.props,e=t.objectFit,n=t.objectPosition,i=(0,a.default)(t,["objectFit","objectPosition"]);return d.default.createElement(m.default,(0,r.default)({ref:this.imageRef},i,{imgStyle:(0,r.default)({},i.imgStyle,{objectFit:e,objectPosition:n,fontFamily:'"object-fit: '+e+"; object-position: "+n+'"'})}))},e}(d.Component);p.propTypes={objectFit:f.default.string,objectPosition:f.default.string},p.defaultProps={objectFit:"cover",objectPosition:"50% 50%"};var b=(0,d.forwardRef)((function(t,e){return d.default.createElement(p,(0,r.default)({},t,{innerRef:e}))}));e.default=b},nQg3:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return s}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var i=n("q1tI");function o(t,e,n){void 0===n&&(n={});var o=n.maxWait,r=Object(i.useRef)(null),a=Object(i.useRef)([]),c=n.leading,s=void 0===n.trailing||n.trailing,l=Object(i.useRef)(!1),u=Object(i.useRef)(null),d=Object(i.useRef)(!1),f=Object(i.useRef)(t);f.current=t;var m=Object(i.useCallback)((function(){clearTimeout(u.current),clearTimeout(r.current),r.current=null,a.current=[],u.current=null,l.current=!1}),[]);Object(i.useEffect)((function(){return function(){d.current=!0}}),[]);var p=Object(i.useCallback)((function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];a.current=t,clearTimeout(u.current),l.current&&(l.current=!1),u.current||!c||l.current||(f.current.apply(f,t),l.current=!0),u.current=setTimeout((function(){var e=!0;c&&l.current&&(e=!1),m(),!d.current&&s&&e&&f.current.apply(f,t)}),e),o&&!r.current&&s&&(r.current=setTimeout((function(){var t=a.current;m(),d.current||f.current.apply(null,t)}),o))}),[o,e,m,c,s]),b=Object(i.useCallback)((function(){u.current&&(f.current.apply(null,a.current),m())}),[m]);return[p,m,b]}var r=n("cMmx");var a=function(t){var e=Object(i.useState)(null),n=e[0],a=e[1],c=Object(i.useRef)(Object.keys(t)),s=Object(i.useCallback)((function(){var e=c.current.reduce((function(e,n){return e[n]=!!window.matchMedia(t[n]).matches,e}),{});a(e)}),[t]),l=o((function(){s()}),500)[0];return Object(i.useEffect)((function(){return!r.a&&window.matchMedia&&(window.addEventListener("resize",l),s()),function(){!r.a&&window.matchMedia&&window.removeEventListener("resize",l)}}),[s,t,l]),n};var c=function(t,e){void 0===t&&(t=!1),void 0===e&&(e=500);var n=Object(i.useState)(null),a=n[0],c=n[1],s=Object(i.useCallback)((function(){c({width:!1===t?window.innerWidth:t.current.offsetWidth,height:!1===t?window.innerHeight:t.current.offsetHeight})}),[t]),l=o((function(){s()}),e)[0];return Object(i.useEffect)((function(){return r.a||(window.addEventListener("resize",l),s()),function(){!r.a&&window.removeEventListener("resize",l)}}),[l,t,s]),a};var s=function(t){var e=Object(i.useRef)();return Object(i.useEffect)((function(){e.current=t})),e.current}}}]);
//# sourceMappingURL=component---src-templates-job-js-ffe0f62d31974528e790.js.map