(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},7517:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>l.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>m,tree:()=>d}),t(9573),t(1506),t(5866);var o=t(3191),n=t(8716),s=t(7922),l=t.n(s),a=t(5231),i={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>a[e]);t.d(r,i);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,9573)),"C:\\Users\\innon\\Documents\\Data-Collection-Website\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,1506)),"C:\\Users\\innon\\Documents\\Data-Collection-Website\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\innon\\Documents\\Data-Collection-Website\\app\\page.tsx"],p="/page",u={require:t,loadChunk:()=>Promise.resolve()},m=new o.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8311:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,2994,23)),Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23))},2686:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,9404,23))},3887:()=>{},1506:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a,metadata:()=>l});var o=t(9510),n=t(6701),s=t.n(n);t(7272);let l={title:"בית הספר לרפואה",description:"מצוינות בחינוך רפואי, מחקר וטיפול בחולים."};function a({children:e}){return o.jsx("html",{lang:"he",dir:"rtl",children:o.jsx("body",{className:s().className,children:e})})}},9573:(e,r,t)=>{"use strict";let o,n;t.r(r),t.d(r,{default:()=>em});var s=t(9510),l=t(1812),a=t.n(l),i=t(1159),d=i.forwardRef((e,r)=>{let{children:t,...o}=e,n=i.Children.toArray(t),l=n.find(u);if(l){let e=l.props.children,t=n.map(r=>r!==l?r:i.Children.count(e)>1?i.Children.only(null):i.isValidElement(e)?e.props.children:null);return(0,s.jsx)(c,{...o,ref:r,children:i.isValidElement(e)?i.cloneElement(e,void 0,t):null})}return(0,s.jsx)(c,{...o,ref:r,children:t})});d.displayName="Slot";var c=i.forwardRef((e,r)=>{let{children:t,...o}=e;if(i.isValidElement(t)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(t);return i.cloneElement(t,{...function(e,r){let t={...r};for(let o in r){let n=e[o],s=r[o];/^on[A-Z]/.test(o)?n&&s?t[o]=(...e)=>{s(...e),n(...e)}:n&&(t[o]=n):"style"===o?t[o]={...n,...s}:"className"===o&&(t[o]=[n,s].filter(Boolean).join(" "))}return{...e,...t}}(o,t.props),ref:r?function(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}(r,e):e})}return i.Children.count(t)>1?i.Children.only(null):null});c.displayName="SlotClone";var p=({children:e})=>(0,s.jsx)(s.Fragment,{children:e});function u(e){return i.isValidElement(e)&&e.type===p}function m(){for(var e,r,t=0,o="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var s=r.length;for(t=0;t<s;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o)}else for(o in r)r[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=r);return o}let b=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,x=e=>{let r=v(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),f(t,r)||g(e)},getConflictingClassGroupIds:(e,r)=>{let n=t[e]||[];return r&&o[e]?[...n,...o[e]]:n}}},f=(e,r)=>{if(0===e.length)return r.classGroupId;let t=e[0],o=r.nextPart.get(t),n=o?f(e.slice(1),o):void 0;if(n)return n;if(0===r.validators.length)return;let s=e.join("-");return r.validators.find(({validator:e})=>e(s))?.classGroupId},h=/^\[(.+)\]$/,g=e=>{if(h.test(e)){let r=h.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},v=e=>{let{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return N(Object.entries(e.classGroups),t).forEach(([e,t])=>{y(t,o,e,r)}),o},y=(e,r,t,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:w(r,e)).classGroupId=t;return}if("function"==typeof e){if(j(e)){y(e(o),r,t,o);return}r.validators.push({validator:e,classGroupId:t});return}Object.entries(e).forEach(([e,n])=>{y(n,w(r,e),t,o)})})},w=(e,r)=>{let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t},j=e=>e.isThemeGetter,N=(e,r)=>r?e.map(([e,t])=>[e,t.map(e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,t])=>[r+e,t])):e)]):e,k=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,o=new Map,n=(n,s)=>{t.set(n,s),++r>e&&(r=0,o=t,t=new Map)};return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):n(e,r)}}},z=e=>{let{separator:r,experimentalParseClassName:t}=e,o=1===r.length,n=r[0],s=r.length,l=e=>{let t;let l=[],a=0,i=0;for(let d=0;d<e.length;d++){let c=e[d];if(0===a){if(c===n&&(o||e.slice(d,d+s)===r)){l.push(e.slice(i,d)),i=d+s;continue}if("/"===c){t=d;continue}}"["===c?a++:"]"===c&&a--}let d=0===l.length?e:e.substring(i),c=d.startsWith("!"),p=c?d.substring(1):d;return{modifiers:l,hasImportantModifier:c,baseClassName:p,maybePostfixModifierPosition:t&&t>i?t-i:void 0}};return t?e=>t({className:e,parseClassName:l}):l},C=e=>{if(e.length<=1)return e;let r=[],t=[];return e.forEach(e=>{"["===e[0]?(r.push(...t.sort(),e),t=[]):t.push(e)}),r.push(...t.sort()),r},P=e=>({cache:k(e.cacheSize),parseClassName:z(e),...x(e)}),_=/\s+/,R=(e,r)=>{let{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:n}=r,s=[],l=e.trim().split(_),a="";for(let e=l.length-1;e>=0;e-=1){let r=l[e],{modifiers:i,hasImportantModifier:d,baseClassName:c,maybePostfixModifierPosition:p}=t(r),u=!!p,m=o(u?c.substring(0,p):c);if(!m){if(!u||!(m=o(c))){a=r+(a.length>0?" "+a:a);continue}u=!1}let b=C(i).join(":"),x=d?b+"!":b,f=x+m;if(s.includes(f))continue;s.push(f);let h=n(m,u);for(let e=0;e<h.length;++e){let r=h[e];s.push(x+r)}a=r+(a.length>0?" "+a:a)}return a};function E(){let e,r,t=0,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=G(e))&&(o&&(o+=" "),o+=r);return o}let G=e=>{let r;if("string"==typeof e)return e;let t="";for(let o=0;o<e.length;o++)e[o]&&(r=G(e[o]))&&(t&&(t+=" "),t+=r);return t},M=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},S=/^\[(?:([a-z-]+):)?(.+)\]$/i,O=/^\d+\/\d+$/,W=new Set(["px","full","screen"]),q=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,D=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,A=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,$=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,V=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,I=e=>U(e)||W.has(e)||O.test(e),T=e=>et(e,"length",eo),U=e=>!!e&&!Number.isNaN(Number(e)),B=e=>et(e,"number",U),H=e=>!!e&&Number.isInteger(Number(e)),F=e=>e.endsWith("%")&&U(e.slice(0,-1)),L=e=>S.test(e),Z=e=>q.test(e),X=new Set(["length","size","percentage"]),J=e=>et(e,X,en),K=e=>et(e,"position",en),Q=new Set(["image","url"]),Y=e=>et(e,Q,el),ee=e=>et(e,"",es),er=()=>!0,et=(e,r,t)=>{let o=S.exec(e);return!!o&&(o[1]?"string"==typeof r?o[1]===r:r.has(o[1]):t(o[2]))},eo=e=>D.test(e)&&!A.test(e),en=()=>!1,es=e=>$.test(e),el=e=>V.test(e);Symbol.toStringTag;let ea=function(e,...r){let t,o,n;let s=function(a){return o=(t=P(r.reduce((e,r)=>r(e),e()))).cache.get,n=t.cache.set,s=l,l(a)};function l(e){let r=o(e);if(r)return r;let s=R(e,t);return n(e,s),s}return function(){return s(E.apply(null,arguments))}}(()=>{let e=M("colors"),r=M("spacing"),t=M("blur"),o=M("brightness"),n=M("borderColor"),s=M("borderRadius"),l=M("borderSpacing"),a=M("borderWidth"),i=M("contrast"),d=M("grayscale"),c=M("hueRotate"),p=M("invert"),u=M("gap"),m=M("gradientColorStops"),b=M("gradientColorStopPositions"),x=M("inset"),f=M("margin"),h=M("opacity"),g=M("padding"),v=M("saturate"),y=M("scale"),w=M("sepia"),j=M("skew"),N=M("space"),k=M("translate"),z=()=>["auto","contain","none"],C=()=>["auto","hidden","clip","visible","scroll"],P=()=>["auto",L,r],_=()=>[L,r],R=()=>["",I,T],E=()=>["auto",U,L],G=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],S=()=>["solid","dashed","dotted","double","none"],O=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],W=()=>["start","end","center","between","around","evenly","stretch"],q=()=>["","0",L],D=()=>["auto","avoid","all","avoid-page","page","left","right","column"],A=()=>[U,L];return{cacheSize:500,separator:":",theme:{colors:[er],spacing:[I,T],blur:["none","",Z,L],brightness:A(),borderColor:[e],borderRadius:["none","","full",Z,L],borderSpacing:_(),borderWidth:R(),contrast:A(),grayscale:q(),hueRotate:A(),invert:q(),gap:_(),gradientColorStops:[e],gradientColorStopPositions:[F,T],inset:P(),margin:P(),opacity:A(),padding:_(),saturate:A(),scale:A(),sepia:q(),skew:A(),space:_(),translate:_()},classGroups:{aspect:[{aspect:["auto","square","video",L]}],container:["container"],columns:[{columns:[Z]}],"break-after":[{"break-after":D()}],"break-before":[{"break-before":D()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...G(),L]}],overflow:[{overflow:C()}],"overflow-x":[{"overflow-x":C()}],"overflow-y":[{"overflow-y":C()}],overscroll:[{overscroll:z()}],"overscroll-x":[{"overscroll-x":z()}],"overscroll-y":[{"overscroll-y":z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[x]}],"inset-x":[{"inset-x":[x]}],"inset-y":[{"inset-y":[x]}],start:[{start:[x]}],end:[{end:[x]}],top:[{top:[x]}],right:[{right:[x]}],bottom:[{bottom:[x]}],left:[{left:[x]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",H,L]}],basis:[{basis:P()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",L]}],grow:[{grow:q()}],shrink:[{shrink:q()}],order:[{order:["first","last","none",H,L]}],"grid-cols":[{"grid-cols":[er]}],"col-start-end":[{col:["auto",{span:["full",H,L]},L]}],"col-start":[{"col-start":E()}],"col-end":[{"col-end":E()}],"grid-rows":[{"grid-rows":[er]}],"row-start-end":[{row:["auto",{span:[H,L]},L]}],"row-start":[{"row-start":E()}],"row-end":[{"row-end":E()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",L]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",L]}],gap:[{gap:[u]}],"gap-x":[{"gap-x":[u]}],"gap-y":[{"gap-y":[u]}],"justify-content":[{justify:["normal",...W()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...W(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...W(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[g]}],px:[{px:[g]}],py:[{py:[g]}],ps:[{ps:[g]}],pe:[{pe:[g]}],pt:[{pt:[g]}],pr:[{pr:[g]}],pb:[{pb:[g]}],pl:[{pl:[g]}],m:[{m:[f]}],mx:[{mx:[f]}],my:[{my:[f]}],ms:[{ms:[f]}],me:[{me:[f]}],mt:[{mt:[f]}],mr:[{mr:[f]}],mb:[{mb:[f]}],ml:[{ml:[f]}],"space-x":[{"space-x":[N]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[N]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",L,r]}],"min-w":[{"min-w":[L,r,"min","max","fit"]}],"max-w":[{"max-w":[L,r,"none","full","min","max","fit","prose",{screen:[Z]},Z]}],h:[{h:[L,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[L,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[L,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[L,r,"auto","min","max","fit"]}],"font-size":[{text:["base",Z,T]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",B]}],"font-family":[{font:[er]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",L]}],"line-clamp":[{"line-clamp":["none",U,B]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",I,L]}],"list-image":[{"list-image":["none",L]}],"list-style-type":[{list:["none","disc","decimal",L]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...S(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",I,T]}],"underline-offset":[{"underline-offset":["auto",I,L]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:_()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",L]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",L]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...G(),K]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",J]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Y]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...S(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:S()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...S()]}],"outline-offset":[{"outline-offset":[I,L]}],"outline-w":[{outline:[I,T]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:R()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[I,T]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Z,ee]}],"shadow-color":[{shadow:[er]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...O(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":O()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[i]}],"drop-shadow":[{"drop-shadow":["","none",Z,L]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[p]}],saturate:[{saturate:[v]}],sepia:[{sepia:[w]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[i]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[w]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",L]}],duration:[{duration:A()}],ease:[{ease:["linear","in","out","in-out",L]}],delay:[{delay:A()}],animate:[{animate:["none","spin","ping","pulse","bounce",L]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[y]}],"scale-x":[{"scale-x":[y]}],"scale-y":[{"scale-y":[y]}],rotate:[{rotate:[H,L]}],"translate-x":[{"translate-x":[k]}],"translate-y":[{"translate-y":[k]}],"skew-x":[{"skew-x":[j]}],"skew-y":[{"skew-y":[j]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",L]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",L]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":_()}],"scroll-mx":[{"scroll-mx":_()}],"scroll-my":[{"scroll-my":_()}],"scroll-ms":[{"scroll-ms":_()}],"scroll-me":[{"scroll-me":_()}],"scroll-mt":[{"scroll-mt":_()}],"scroll-mr":[{"scroll-mr":_()}],"scroll-mb":[{"scroll-mb":_()}],"scroll-ml":[{"scroll-ml":_()}],"scroll-p":[{"scroll-p":_()}],"scroll-px":[{"scroll-px":_()}],"scroll-py":[{"scroll-py":_()}],"scroll-ps":[{"scroll-ps":_()}],"scroll-pe":[{"scroll-pe":_()}],"scroll-pt":[{"scroll-pt":_()}],"scroll-pr":[{"scroll-pr":_()}],"scroll-pb":[{"scroll-pb":_()}],"scroll-pl":[{"scroll-pl":_()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",L]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[I,T,B]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}});function ei(...e){return ea(m(e))}let ed=(o="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",n={variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}},e=>{var r;if((null==n?void 0:n.variants)==null)return m(o,null==e?void 0:e.class,null==e?void 0:e.className);let{variants:t,defaultVariants:s}=n,l=Object.keys(t).map(r=>{let o=null==e?void 0:e[r],n=null==s?void 0:s[r];if(null===o)return null;let l=b(o)||b(n);return t[r][l]}),a=e&&Object.entries(e).reduce((e,r)=>{let[t,o]=r;return void 0===o||(e[t]=o),e},{});return m(o,l,null==n?void 0:null===(r=n.compoundVariants)||void 0===r?void 0:r.reduce((e,r)=>{let{class:t,className:o,...n}=r;return Object.entries(n).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...s,...a}[r]):({...s,...a})[r]===t})?[...e,t,o]:e},[]),null==e?void 0:e.class,null==e?void 0:e.className)}),ec=i.forwardRef(({className:e,variant:r,size:t,asChild:o=!1,...n},l)=>{let a=o?d:"button";return s.jsx(a,{className:ei(ed({variant:r,size:t,className:e})),ref:l,...n})});ec.displayName="Button";let ep=i.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:ei("rounded-xl border bg-card text-card-foreground shadow",e),...r}));ep.displayName="Card",i.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:ei("flex flex-col space-y-1.5 p-6",e),...r})).displayName="CardHeader",i.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:ei("font-semibold leading-none tracking-tight",e),...r})).displayName="CardTitle",i.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:ei("text-sm text-muted-foreground",e),...r})).displayName="CardDescription";let eu=i.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:ei("p-6 pt-0",e),...r}));function em(){return(0,s.jsxs)("div",{className:"flex flex-col min-h-screen bg-black text-white",dir:"rtl",children:[s.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black"}),(0,s.jsxs)("div",{className:"relative",children:[s.jsx("header",{className:"fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-red-800",children:(0,s.jsxs)("div",{className:"container flex h-12 items-center justify-between px-4",children:[s.jsx(a(),{className:"flex items-center justify-center",href:"#",children:s.jsx(eb,{className:"h-6 w-6"})}),(0,s.jsxs)("nav",{className:"hidden md:flex space-x-8",children:[s.jsx(a(),{className:"text-sm text-gray-300 hover:text-red-500 transition-colors",href:"#",children:"תוכניות"}),s.jsx(a(),{className:"text-sm text-gray-300 hover:text-red-500 transition-colors",href:"#",children:"קבלה"}),s.jsx(a(),{className:"text-sm text-gray-300 hover:text-red-500 transition-colors",href:"#",children:"מחקר"}),s.jsx(a(),{className:"text-sm text-gray-300 hover:text-red-500 transition-colors",href:"#",children:"אודות"})]}),s.jsx("div",{className:"flex items-center space-x-4",children:s.jsx(ec,{variant:"ghost",size:"sm",className:"text-gray-300 hover:text-red-500",children:s.jsx(a(),{href:"/sign-up",children:"הרשמה "})})})]})}),(0,s.jsxs)("main",{className:"flex-1",children:[(0,s.jsxs)("section",{className:"relative h-screen flex items-center justify-center overflow-hidden",children:[s.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-red-900/50 to-black/90"}),(0,s.jsxs)("div",{className:"relative container px-4 md:px-6 text-center",children:[s.jsx("h1",{className:"text-4xl md:text-6xl font-bold tracking-tighter mb-4 bg-gradient-to-l from-white to-red-500 bg-clip-text text-transparent",children:"עתיד הרפואה"}),s.jsx("p",{className:"text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto",children:"מצוינות בחינוך רפואי"}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[s.jsx(ec,{asChild:!0,size:"lg",className:"rounded-full bg-red-600 hover:bg-red-500 text-white",children:s.jsx(a(),{href:"/personal-info",children:"מידע אישי"})}),s.jsx(ec,{asChild:!0,variant:"outline",size:"lg",className:"rounded-full border-red-600 text-white hover:bg-red-600",children:s.jsx(a(),{href:"/team-teaching",children:"ניסיון בהוראת צוות"})})]})]})]}),s.jsx("section",{className:"py-24 md:py-32",children:(0,s.jsxs)("div",{className:"container px-4 md:px-6",children:[s.jsx("h2",{className:"text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-l from-white to-red-500 bg-clip-text text-transparent",children:"למה לבחור בנו"}),(0,s.jsxs)("div",{className:"grid md:grid-cols-3 gap-8",children:[s.jsx(ep,{className:"bg-white/5 border-red-800",children:(0,s.jsxs)(eu,{className:"p-6",children:[s.jsx("h3",{className:"text-xl font-semibold mb-2 text-red-500",children:"חדשנות"}),s.jsx("p",{className:"text-gray-400",children:"חינוך רפואי מתקדם המשתמש בטכנולוגיה ומחקר עדכניים."})]})}),s.jsx(ep,{className:"bg-white/5 border-red-800",children:(0,s.jsxs)(eu,{className:"p-6",children:[s.jsx("h3",{className:"text-xl font-semibold mb-2 text-red-500",children:"מצוינות"}),s.jsx("p",{className:"text-gray-400",children:"סגל עולמי המחויב לעיצוב עתיד הבריאות."})]})}),s.jsx(ep,{className:"bg-white/5 border-red-800",children:(0,s.jsxs)(eu,{className:"p-6",children:[s.jsx("h3",{className:"text-xl font-semibold mb-2 text-red-500",children:"השפעה"}),s.jsx("p",{className:"text-gray-400",children:"יצירת שינוי בבריאות באמצעות מחקר וטיפול בחולים."})]})})]})]})}),(0,s.jsxs)("section",{className:"relative py-24 md:py-32 overflow-hidden",children:[s.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-red-900/20 to-black"}),(0,s.jsxs)("div",{className:"relative container px-4 md:px-6 text-center",children:[s.jsx("h2",{className:"text-3xl md:text-5xl font-bold mb-16 bg-gradient-to-l from-white to-red-500 bg-clip-text text-transparent",children:"סיפורי סטודנטים"}),(0,s.jsxs)("div",{className:"max-w-3xl mx-auto",children:[s.jsx("blockquote",{className:"text-xl md:text-2xl text-gray-300 italic",children:"“הגישה החדשנית לחינוך רפואי כאן שינתה את הבנתי לגבי בריאות והכינה אותי לעתיד הרפואה.”"}),s.jsx("p",{className:"mt-6 text-red-500",children:"מחזור 2024"})]})]})]})]}),s.jsx("footer",{className:"border-t border-red-800",children:(0,s.jsxs)("div",{className:"container px-4 py-6 flex flex-col md:flex-row justify-between items-center",children:[s.jsx("p",{className:"text-sm text-gray-400",children:"\xa9 2024 בית הספר לרפואה. כל הזכויות שמורות."}),(0,s.jsxs)("nav",{className:"flex gap-6 mt-4 md:mt-0",children:[s.jsx(a(),{className:"text-sm text-gray-400 hover:text-red-500 transition-colors",href:"#",children:"פרטיות"}),s.jsx(a(),{className:"text-sm text-gray-400 hover:text-red-500 transition-colors",href:"#",children:"תנאים"}),s.jsx(a(),{className:"text-sm text-gray-400 hover:text-red-500 transition-colors",href:"#",children:"צור קשר"})]})]})})]})]})}function eb(e){return(0,s.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M8 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"}),s.jsx("path",{d:"M8 19a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2H8Z"}),s.jsx("path",{d:"M9.5 11h.01"}),s.jsx("path",{d:"M14.5 11h.01"}),s.jsx("path",{d:"M12 15h.01"}),s.jsx("path",{d:"M12 8v1"})]})}eu.displayName="CardContent",i.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:ei("flex items-center p-6 pt-0",e),...r})).displayName="CardFooter"},1812:(e,r,t)=>{"use strict";let{createProxy:o}=t(8570);e.exports=o("C:\\Users\\innon\\Documents\\Data-Collection-Website\\node_modules\\next\\dist\\client\\link.js")},7481:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});var o=t(6621);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,o.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[948,7,621,404],()=>t(7517));module.exports=o})();