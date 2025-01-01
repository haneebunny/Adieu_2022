"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31],{1998:function(t,e,r){r.d(e,{Z:function(){return d}});var a=r(7294);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t}).apply(this,arguments)}var o=r(5042),n=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,s=(0,o.Z)(function(t){return n.test(t)||111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&91>t.charCodeAt(2)}),i=r(2443),l=r(444),c=r(8137),m=r(7278),testOmitPropsOnComponent=function(t){return"theme"!==t},getDefaultShouldForwardProp=function(t){return"string"==typeof t&&t.charCodeAt(0)>96?s:testOmitPropsOnComponent},composeShouldForwardProps=function(t,e,r){var a;if(e){var o=e.shouldForwardProp;a=t.__emotion_forwardProp&&o?function(e){return t.__emotion_forwardProp(e)&&o(e)}:o}return"function"!=typeof a&&r&&(a=t.__emotion_forwardProp),a},Insertion=function(t){var e=t.cache,r=t.serialized,a=t.isStringTag;return(0,l.hC)(e,r,a),(0,m.L)(function(){return(0,l.My)(e,r,a)}),null},f=(function createStyled(t,e){var r,o,n=t.__emotion_real===t,s=n&&t.__emotion_base||t;void 0!==e&&(r=e.label,o=e.target);var m=composeShouldForwardProps(t,e,n),f=m||getDefaultShouldForwardProp(s),d=!f("as");return function(){var p=arguments,y=n&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==r&&y.push("label:"+r+";"),null==p[0]||void 0===p[0].raw)y.push.apply(y,p);else{y.push(p[0][0]);for(var u=p.length,g=1;g<u;g++)y.push(p[g],p[0][g])}var h=(0,i.w)(function(t,e,r){var n=d&&t.as||s,p="",u=[],g=t;if(null==t.theme){for(var h in g={},t)g[h]=t[h];g.theme=(0,a.useContext)(i.T)}"string"==typeof t.className?p=(0,l.fp)(e.registered,u,t.className):null!=t.className&&(p=t.className+" ");var b=(0,c.O)(y.concat(u),e.registered,g);p+=e.key+"-"+b.name,void 0!==o&&(p+=" "+o);var k=d&&void 0===m?getDefaultShouldForwardProp(n):f,v={};for(var x in t)(!d||"as"!==x)&&k(x)&&(v[x]=t[x]);return v.className=p,v.ref=r,(0,a.createElement)(a.Fragment,null,(0,a.createElement)(Insertion,{cache:e,serialized:b,isStringTag:"string"==typeof n}),(0,a.createElement)(n,v))});return h.displayName=void 0!==r?r:"Styled("+("string"==typeof s?s:s.displayName||s.name||"Component")+")",h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=s,h.__emotion_styles=y,h.__emotion_forwardProp=m,Object.defineProperty(h,"toString",{value:function(){return"."+o}}),h.withComponent=function(t,r){return createStyled(t,_extends({},e,r,{shouldForwardProp:composeShouldForwardProps(h,r,!0)})).apply(void 0,y)},h}}).bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(t){f[t]=f(t)});var d=f},4415:function(t,e){/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.server_context"),m=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy");Symbol.for("react.offscreen"),Symbol.for("react.module.reference"),e.isFragment=function(t){return function(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case r:switch(t=t.type){case o:case s:case n:case f:case d:return t;default:switch(t=t&&t.$$typeof){case c:case l:case m:case y:case p:case i:return t;default:return e}}case a:return e}}}(t)===o}},4954:function(t,e,r){t.exports=r(4415)},1009:function(t,e,r){r.d(e,{ZP:function(){return Reveal}});var a=r(6811),o=r(7294);r(8417);var n=r(2443);r(8679);var s=r(444),i=r(8137),l=r(7278);function css(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return(0,i.O)(e)}var keyframes=function(){var t=css.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},classnames=function classnames(t){for(var e=t.length,r=0,a="";r<e;r++){var o=t[r];if(null!=o){var n=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))n=classnames(o);else for(var s in n="",o)o[s]&&s&&(n&&(n+=" "),n+=s);break;default:n=o}n&&(a&&(a+=" "),a+=n)}}return a},Insertion=function(t){var e=t.cache,r=t.serializedArr;return(0,l.L)(function(){for(var t=0;t<r.length;t++)(0,s.My)(e,r[t],!1)}),null},c=(0,n.w)(function(t,e){var r=[],css=function(){for(var t=arguments.length,a=Array(t),o=0;o<t;o++)a[o]=arguments[o];var n=(0,i.O)(a,e.registered);return r.push(n),(0,s.hC)(e,n,!1),e.key+"-"+n.name},a={css:css,cx:function(){for(var t,r,a,o,n=arguments.length,i=Array(n),l=0;l<n;l++)i[l]=arguments[l];return t=e.registered,r=classnames(i),a=[],o=(0,s.fp)(t,a,r),a.length<2?r:o+css(a)},theme:(0,o.useContext)(n.T)},l=t.children(a);return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(Insertion,{cache:e,serializedArr:r}),l)}),m=Object.defineProperty,__defNormalProp=(t,e,r)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,__publicField=(t,e,r)=>__defNormalProp(t,"symbol"!=typeof e?e+"":e,r),f=new Map,d=new WeakMap,p=0,y=void 0;function observe(t,e,r={},a=y){if(void 0===window.IntersectionObserver&&void 0!==a){let o=t.getBoundingClientRect();return e(a,{isIntersecting:a,target:t,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}let{id:o,observer:n,elements:s}=function(t){let e=Object.keys(t).sort().filter(e=>void 0!==t[e]).map(e=>{var r;return`${e}_${"root"===e?(r=t.root)?(d.has(r)||(p+=1,d.set(r,p.toString())),d.get(r)):"0":t[e]}`}).toString(),r=f.get(e);if(!r){let a;let o=new Map,n=new IntersectionObserver(e=>{e.forEach(e=>{var r;let n=e.isIntersecting&&a.some(t=>e.intersectionRatio>=t);t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=n),null==(r=o.get(e.target))||r.forEach(t=>{t(n,e)})})},t);a=n.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:e,observer:n,elements:o},f.set(e,r)}return r}(r),i=s.get(t)||[];return s.has(t)||s.set(t,i),i.push(e),n.observe(t),function(){i.splice(i.indexOf(e),1),0===i.length&&(s.delete(t),n.unobserve(t)),0===s.size&&(n.disconnect(),f.delete(o))}}var u=class extends o.Component{constructor(t){super(t),__publicField(this,"node",null),__publicField(this,"_unobserveCb",null),__publicField(this,"handleNode",t=>{!this.node||(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),__publicField(this,"handleChange",(t,e)=>{t&&this.props.triggerOnce&&this.unobserve(),"function"!=typeof this.props.children||this.setState({inView:t,entry:e}),this.props.onChange&&this.props.onChange(t,e)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;let{threshold:t,root:e,rootMargin:r,trackVisibility:a,delay:o,fallbackInView:n}=this.props;this._unobserveCb=observe(this.node,this.handleChange,{threshold:t,root:e,rootMargin:r,trackVisibility:a,delay:o},n)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){let{children:t}=this.props;if("function"==typeof t){let{inView:e,entry:r}=this.state;return t({inView:e,entry:r,ref:this.handleNode})}let{as:e,triggerOnce:r,threshold:a,root:n,rootMargin:s,onChange:i,skip:l,trackVisibility:c,delay:m,initialInView:f,fallbackInView:d,...p}=this.props;return o.createElement(e||"div",{ref:this.handleNode,...p},t)}};function useInView({threshold:t,delay:e,trackVisibility:r,rootMargin:a,root:n,triggerOnce:s,skip:i,initialInView:l,fallbackInView:c,onChange:m}={}){var f;let[d,p]=o.useState(null),y=o.useRef(m),[u,g]=o.useState({inView:!!l,entry:void 0});y.current=m,o.useEffect(()=>{let o;if(!i&&d)return o=observe(d,(t,e)=>{g({inView:t,entry:e}),y.current&&y.current(t,e),e.isIntersecting&&s&&o&&(o(),o=void 0)},{root:n,rootMargin:a,threshold:t,trackVisibility:r,delay:e},c),()=>{o&&o()}},[Array.isArray(t)?t.toString():t,d,n,a,s,i,r,c,e]);let h=null==(f=u.entry)?void 0:f.target,b=o.useRef(void 0);d||!h||s||i||b.current===h||(b.current=h,g({inView:!!l,entry:void 0}));let k=[p,u.inView,u.entry];return k.ref=k[0],k.inView=k[1],k.entry=k[2],k}var g=r(4954);keyframes`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,keyframes`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,keyframes`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,keyframes`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,keyframes`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,keyframes`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,keyframes`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,keyframes`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,keyframes`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;let h=keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function matchIfOrNull(t){var e;return e=()=>null,r=>r?t():e()}function hideWhen(t){return matchIfOrNull(()=>({opacity:0}))(t)}keyframes`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,keyframes`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;let Reveal=t=>{let{cascade:e=!1,damping:r=.5,delay:n=0,duration:s=1e3,fraction:i=0,keyframes:l=h,triggerOnce:m=!1,className:f,style:d,childClassName:p,childStyle:y,children:b,onVisibilityChange:k}=t,v=(0,o.useMemo)(()=>(function({duration:t=1e3,delay:e=0,timingFunction:r="ease",keyframes:a=h,iterationCount:o=1}){return css`
    animation-duration: ${t}ms;
    animation-timing-function: ${r};
    animation-delay: ${e}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `})({keyframes:l,duration:s}),[s,l]);return void 0==b?null:"string"==typeof b||"number"==typeof b||"boolean"==typeof b?(0,a.tZ)(TextReveal,{...t,animationStyles:v,children:String(b)}):(0,g.isFragment)(b)?(0,a.tZ)(FragmentReveal,{...t,animationStyles:v}):(0,a.tZ)(a.HY,{children:o.Children.map(b,(l,g)=>{if(!(0,o.isValidElement)(l))return null;let h=n+(e?g*s*r:0);switch(l.type){case"ol":case"ul":return(0,a.tZ)(c,{children:({cx:e})=>(0,a.tZ)(l.type,{...l.props,className:e(f,l.props.className),style:Object.assign({},d,l.props.style),children:(0,a.tZ)(Reveal,{...t,children:l.props.children})})});case"li":return(0,a.tZ)(u,{threshold:i,triggerOnce:m,onChange:k,children:({inView:t,ref:e})=>(0,a.tZ)(c,{children:({cx:r})=>(0,a.tZ)(l.type,{...l.props,ref:e,className:r(p,l.props.className),css:matchIfOrNull(()=>v)(t),style:Object.assign({},y,l.props.style,hideWhen(!t),{animationDelay:h+"ms"})})})});default:return(0,a.tZ)(u,{threshold:i,triggerOnce:m,onChange:k,children:({inView:t,ref:e})=>(0,a.tZ)("div",{ref:e,className:f,css:matchIfOrNull(()=>v)(t),style:Object.assign({},d,hideWhen(!t),{animationDelay:h+"ms"}),children:(0,a.tZ)(c,{children:({cx:t})=>(0,a.tZ)(l.type,{...l.props,className:t(p,l.props.className),style:Object.assign({},y,l.props.style)})})})})}})})},b={display:"inline-block",whiteSpace:"pre"},TextReveal=t=>{var e,r;let{animationStyles:o,cascade:n=!1,damping:s=.5,delay:i=0,duration:l=1e3,fraction:c=0,triggerOnce:m=!1,className:f,style:d,children:p,onVisibilityChange:y}=t,{ref:u,inView:g}=useInView({triggerOnce:m,threshold:c,onChange:y});return(e=()=>(0,a.tZ)("div",{ref:u,className:f,style:Object.assign({},d,b),children:p.split("").map((t,e)=>(0,a.tZ)("span",{css:matchIfOrNull(()=>o)(g),style:{animationDelay:i+e*l*s+"ms"},children:t},e))}),r=()=>(0,a.tZ)(FragmentReveal,{...t,children:p}),r=>r?e():r())(n)},FragmentReveal=t=>{let{animationStyles:e,fraction:r=0,triggerOnce:o=!1,className:n,style:s,children:i,onVisibilityChange:l}=t,{ref:c,inView:m}=useInView({triggerOnce:o,threshold:r,onChange:l});return(0,a.tZ)("div",{ref:c,className:n,css:matchIfOrNull(()=>e)(m),style:Object.assign({},s,hideWhen(!m)),children:i})};keyframes`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,keyframes`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,keyframes`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,keyframes`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,keyframes`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,keyframes`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`,keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`,keyframes`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,keyframes`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,keyframes`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,keyframes`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,keyframes`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`,keyframes`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,keyframes`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,keyframes`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,keyframes`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,keyframes`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,keyframes`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,keyframes`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`,keyframes`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,keyframes`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`,keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,keyframes`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,keyframes`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,keyframes`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,keyframes`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,keyframes`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`}}]);