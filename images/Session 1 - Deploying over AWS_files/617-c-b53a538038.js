(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[617],{"+/1D":function(e,n,t){e.exports=t.p+"cf6697b803818c9ee716b25d48f88f82.svg"},"/4op":function(e,n,t){"use strict"
t.r(n)
var o=t("q1tI")
var a={attributes:true,characterData:true,subtree:true,childList:true}
function r(e,n,t=a){Object(o["useEffect"])(()=>{if(e.current){const o=new MutationObserver(n)
o.observe(e.current,t)
return()=>{o.disconnect()}}},[n,t])}n["default"]=r},"5D9J":function(e,n,t){"use strict"
t.r(n)
var o=t("lSNA")
var a=t.n(o)
var r=t("q1tI")
var i=t("9uj6")
var _=t("qKvR")
var s=t("SIPS")
var c=t("MiSq")
var u=i["a"]
var d=function(e){return"theme"!==e&&"innerRef"!==e}
var l=function(e){return"string"===typeof e&&e.charCodeAt(0)>96?u:d}
function f(e,n){var t=Object.keys(e)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))
t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{}
n%2?f(t,true).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v=function e(n,t){false
var o
var a
var i
if(void 0!==t){o=t.label
i=t.target
a=n.__emotion_forwardProp&&t.shouldForwardProp?function(e){return n.__emotion_forwardProp(e)&&t.shouldForwardProp(e)}:t.shouldForwardProp}var u=n.__emotion_real===n
var d=u&&n.__emotion_base||n
"function"!==typeof a&&u&&(a=n.__emotion_forwardProp)
var f=a||l(d)
var v=!f("as")
return function(){var m=arguments
var b=u&&void 0!==n.__emotion_styles?n.__emotion_styles.slice(0):[]
void 0!==o&&b.push("label:"+o+";")
if(null==m[0]||void 0===m[0].raw)b.push.apply(b,m)
else{false
b.push(m[0][0])
var h=m.length
var g=1
for(;g<h;g++){false
b.push(m[g],m[0][g])}}var y=Object(_["withEmotionCache"])((function(e,n,t){return Object(r["createElement"])(_["ThemeContext"].Consumer,null,(function(o){var _=v&&e.as||d
var u=""
var p=[]
var m=e
if(null==e.theme){m={}
for(var h in e)m[h]=e[h]
m.theme=o}"string"===typeof e.className?u=Object(s["a"])(n.registered,p,e.className):null!=e.className&&(u=e.className+" ")
var g=Object(c["a"])(b.concat(p),n.registered,m)
Object(s["b"])(n,g,"string"===typeof _)
u+=n.key+"-"+g.name
void 0!==i&&(u+=" "+i)
var y=v&&void 0===a?l(_):f
var k={}
for(var w in e){if(v&&"as"===w)continue
y(w)&&(k[w]=e[w])}k.className=u
k.ref=t||e.innerRef
false
var C=Object(r["createElement"])(_,k)
return C}))}))
y.displayName=void 0!==o?o:"Styled("+("string"===typeof d?d:d.displayName||d.name||"Component")+")"
y.defaultProps=n.defaultProps
y.__emotion_real=y
y.__emotion_base=d
y.__emotion_styles=b
y.__emotion_forwardProp=a
Object.defineProperty(y,"toString",{value:function(){if(void 0===i&&false)return"NO_COMPONENT_SELECTOR"
return"."+i}})
y.withComponent=function(n,o){return e(n,void 0!==o?p({},t||{},{},o):t).apply(void 0,b)}
return y}}
var m=v
var b=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]
var h=m.bind()
b.forEach((function(e){h[e]=h(e)}))
n["default"]=h},"5DjV":function(e,n,t){e.exports=t.p+"fd610a276ec8f1276dc1a6363f79e47d.svg"},"6PP4":function(e,n,t){e.exports=t.p+"5ba951c11e1c94c06f6336cbdcc82c8b.svg"},"6jBc":function(e,n,t){e.exports=t.p+"5a1df149ed3ba137b0748a7d5c0165ef.svg"},"74md":function(e,n,t){e.exports=t.p+"cafb6a6790be5cd5a6c8e14a0c8eb229.svg"},"7YPn":function(e,n,t){var o,a,r
i=function(){var e=/(auto|scroll)/
var n=function(e,t){if(null===e.parentNode)return t
return n(e.parentNode,t.concat([e]))}
var t=function(e,n){return getComputedStyle(e,null).getPropertyValue(n)}
var o=function(e){return t(e,"overflow")+t(e,"overflow-y")+t(e,"overflow-x")}
var a=function(n){return e.test(o(n))}
var r=function(e){if(!(e instanceof HTMLElement||e instanceof SVGElement))return
var t=n(e.parentNode,[])
for(var o=0;o<t.length;o+=1)if(a(t[o]))return t[o]
return document.scrollingElement||document.documentElement}
return r},a=[],o=i,r="function"===typeof o?o.apply(n,a):o,void 0!==r&&(e.exports=r)
var i},"8+nF":function(e,n,t){e.exports=t.p+"d7c260585415c3675df8f11ed1eb192e.svg"},"8t0o":function(e,n,t){"use strict"
t.d(n,"a",(function(){return P}))
var o=t("rePB")
var a=t("Ff2n")
var r=t("1OyB")
var i=t("vuIU")
var _=t("JX7q")
var s=t("Ji7U")
var c=t("LK+K")
t("DEX3")
var u=t("q1tI")
var d=t.n(u)
var l=t("17x9")
var f=t.n(l)
var p=t("TSYQ")
var v=t.n(p)
var m=t("n12J")
var b=t("J2CL")
var h=t("rW8M")
var g=t("/UXv")
var y=t("kR0I")
var k=t("nAyT")
var w=t("E+IV")
var C=t("jtGx")
var j=t("4Awi")
var S=t("tCl5")
var O=t("KgFQ")
var x=t("oXx0")
var H=t("o4+2")
function A(e){var n=e.colors,t=e.typography,o=e.borders,a=e.spacing
return{fontFamily:t.fontFamily,fontWeight:t.fontWeightNormal,color:n.textLink,textDecorationWithinText:"underline",hoverTextDecorationWithinText:"none",textDecorationOutsideText:"none",hoverTextDecorationOutsideText:"underline",focusOutlineWidth:o.widthMedium,focusOutlineColor:n.borderBrand,focusOutlineStyle:o.style,hoverColor:Object(H["a"])(n.textLink,10),colorInverse:n.textLight,focusInverseOutlineColor:n.borderLightest,focusInverseIconOutlineColor:n.borderLightest,iconSize:"1.125em",iconPlusTextMargin:a.xxSmall}}A["canvas"]=function(e){return{color:e["ic-link-color"],focusOutlineColor:e["ic-brand-primary"],hoverColor:Object(H["a"])(e["ic-link-color"],10)}}
A["canvas-high-contrast"]=function(e){return{textDecorationOutsideText:"underline",hoverTextDecorationOutsideText:"none"}}
var T,z,R,q,I,B
var E={componentId:"fbyHH",template:function(e){return"\n\n.fbyHH_bGBk,a.fbyHH_bGBk,button.fbyHH_bGBk{box-sizing:border-box;font-family:".concat(e.fontFamily||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";outline-color:transparent;outline-offset:0.25rem;outline-style:").concat(e.focusOutlineStyle||"inherit",";outline-width:").concat(e.focusOutlineWidth||"inherit",";transition:outline-color 0.2s;vertical-align:baseline}\n\n.fbyHH_bGBk:focus,a.fbyHH_bGBk:focus,button.fbyHH_bGBk:focus{outline-color:").concat(e.focusOutlineColor||"inherit","}\n\n.fbyHH_bGBk[aria-disabled],a.fbyHH_bGBk[aria-disabled],button.fbyHH_bGBk[aria-disabled]{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.fbyHH_bGBk::-moz-focus-inner,a.fbyHH_bGBk::-moz-focus-inner,button.fbyHH_bGBk::-moz-focus-inner{border:0}\n\na.fbyHH_bGBk,button.fbyHH_bGBk{color:").concat(e.color||"inherit",";cursor:pointer}\n\na.fbyHH_bGBk.fbyHH_vIby,button.fbyHH_bGBk.fbyHH_vIby{-webkit-text-decoration:").concat(e.textDecorationWithinText||"inherit",";text-decoration:").concat(e.textDecorationWithinText||"inherit","}\n\na.fbyHH_bGBk.fbyHH_bSMN,button.fbyHH_bGBk.fbyHH_bSMN{-webkit-text-decoration:").concat(e.textDecorationOutsideText||"inherit",";text-decoration:").concat(e.textDecorationOutsideText||"inherit","}\n\na.fbyHH_bGBk:focus,button.fbyHH_bGBk:focus{color:").concat(e.color||"inherit","}\n\na.fbyHH_bGBk:active,a.fbyHH_bGBk:hover,button.fbyHH_bGBk:active,button.fbyHH_bGBk:hover{color:").concat(e.hoverColor||"inherit","}\n\na.fbyHH_bGBk:active.fbyHH_vIby,a.fbyHH_bGBk:hover.fbyHH_vIby,button.fbyHH_bGBk:active.fbyHH_vIby,button.fbyHH_bGBk:hover.fbyHH_vIby{-webkit-text-decoration:").concat(e.hoverTextDecorationWithinText||"inherit",";text-decoration:").concat(e.hoverTextDecorationWithinText||"inherit","}\n\na.fbyHH_bGBk:active.fbyHH_bSMN,a.fbyHH_bGBk:hover.fbyHH_bSMN,button.fbyHH_bGBk:active.fbyHH_bSMN,button.fbyHH_bGBk:hover.fbyHH_bSMN{-webkit-text-decoration:").concat(e.hoverTextDecorationOutsideText||"inherit",";text-decoration:").concat(e.hoverTextDecorationOutsideText||"inherit","}\n\n.fbyHH_bGBk.fbyHH_dQmH,a.fbyHH_bGBk.fbyHH_dQmH:link,a.fbyHH_bGBk.fbyHH_dQmH:visited,button.fbyHH_bGBk.fbyHH_dQmH{color:").concat(e.colorInverse||"inherit","}\n\n.fbyHH_bGBk.fbyHH_dQmH:focus,a.fbyHH_bGBk.fbyHH_dQmH:link:focus,a.fbyHH_bGBk.fbyHH_dQmH:visited:focus,button.fbyHH_bGBk.fbyHH_dQmH:focus{outline-color:").concat(e.focusInverseOutlineColor||"inherit","}\n\n.fbyHH_bGBk.fbyHH_dQmH:active,.fbyHH_bGBk.fbyHH_dQmH:focus,.fbyHH_bGBk.fbyHH_dQmH:hover,a.fbyHH_bGBk.fbyHH_dQmH:link:active,a.fbyHH_bGBk.fbyHH_dQmH:link:focus,a.fbyHH_bGBk.fbyHH_dQmH:link:hover,a.fbyHH_bGBk.fbyHH_dQmH:visited:active,a.fbyHH_bGBk.fbyHH_dQmH:visited:focus,a.fbyHH_bGBk.fbyHH_dQmH:visited:hover,button.fbyHH_bGBk.fbyHH_dQmH:active,button.fbyHH_bGBk.fbyHH_dQmH:focus,button.fbyHH_bGBk.fbyHH_dQmH:hover{color:").concat(e.colorInverse||"inherit","}\n\nbutton.fbyHH_bGBk{-moz-appearance:none;-ms-user-select:text;-webkit-appearance:none;-webkit-user-select:text;appearance:none;background:none;border:none;cursor:pointer;font-size:1em;margin:0;padding:0;text-align:inherit;user-select:text}\n\n[dir=ltr] button.fbyHH_bGBk,[dir=rtl] button.fbyHH_bGBk{text-align:inherit}\n\n.fbyHH_dnnz{box-sizing:border-box;font-size:").concat(e.iconSize||"inherit","}\n\n.fbyHH_ddMx .fbyHH_dnnz{-webkit-padding-end:").concat(e.iconPlusTextMargin||"inherit",";-webkit-padding-start:0;padding-inline-end:").concat(e.iconPlusTextMargin||"inherit",";padding-inline-start:0}\n\n[dir=ltr] .fbyHH_ddMx .fbyHH_dnnz{padding-left:0;padding-right:").concat(e.iconPlusTextMargin||"inherit","}\n\n[dir=rtl] .fbyHH_ddMx .fbyHH_dnnz{padding-left:").concat(e.iconPlusTextMargin||"inherit",";padding-right:0}\n\n.fbyHH_bkXt .fbyHH_dnnz{-webkit-padding-end:0;-webkit-padding-start:").concat(e.iconPlusTextMargin||"inherit",";padding-inline-end:0;padding-inline-start:").concat(e.iconPlusTextMargin||"inherit","}\n\n[dir=ltr] .fbyHH_bkXt .fbyHH_dnnz{padding-left:").concat(e.iconPlusTextMargin||"inherit",";padding-right:0}\n\n[dir=rtl] .fbyHH_bkXt .fbyHH_dnnz{padding-left:0;padding-right:").concat(e.iconPlusTextMargin||"inherit","}\n\n.fbyHH_FcDy.fbyHH_bkXt,.fbyHH_FcDy.fbyHH_ddMx{align-items:center}")},root:"fbyHH_bGBk",isWithinText:"fbyHH_vIby",isOutsideText:"fbyHH_bSMN","color--link-inverse":"fbyHH_dQmH",icon:"fbyHH_dnnz","iconPlacement--start":"fbyHH_ddMx","iconPlacement--end":"fbyHH_bkXt",truncates:"fbyHH_FcDy"}
var P=(T=Object(k["a"])("8.0.0",{linkRef:"elementRef",variant:"color"}),z=Object(x["a"])(),R=Object(b["l"])(A,E),T(q=z(q=R(q=(B=I=function(e){Object(s["a"])(t,e)
var n=Object(c["a"])(t)
function t(){var e
Object(r["a"])(this,t)
for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i]
e=n.call.apply(n,[this].concat(a))
e.state={hasFocus:false}
e.handleElementRef=function(n){var t=e.props,o=t.elementRef,a=t.linkRef
e._link=n
"function"===typeof a&&a(n)
"function"===typeof o&&o(n)}
e.handleClick=function(n){var t=e.props.onClick
var o=Object(_["a"])(e),a=o.interaction
if("disabled"===a){n.preventDefault()
n.stopPropagation()}else"function"===typeof t&&t(n)}
e.handleFocus=function(n){e.setState({hasFocus:true})
"function"===typeof e.props.onFocus&&e.props.onFocus(n)}
e.handleBlur=function(n){e.setState({hasFocus:false})
"function"===typeof e.props.onBlur&&e.props.onBlur(n)}
return e}Object(i["a"])(t,[{key:"focus",value:function(){this._link&&this._link.focus()}},{key:"renderIcon",value:function(){this.props.display
return d.a.createElement("span",{className:E.icon},Object(w["a"])(this.props.renderIcon))}},{key:"render",value:function(){var e
var n=this.props,t=n.children,r=n.onClick,i=n.color,_=n.href,s=n.margin,c=n.renderIcon,u=n.iconPlacement,l=n.isWithinText,f=n.variant,p=Object(a["a"])(n,["children","onClick","color","href","margin","renderIcon","iconPlacement","isWithinText","variant"])
var b=(e={},Object(o["a"])(e,E.root,true),Object(o["a"])(e,E["color--link-inverse"],"inverse"===f||"link-inverse"===i),Object(o["a"])(e,E["iconPlacement--".concat(u)],c&&this.hasVisibleChildren),Object(o["a"])(e,E.truncates,this.containsTruncateText),Object(o["a"])(e,E["is".concat(l?"Within":"Outside","Text")],true),e)
var h=this.interaction
var g="disabled"===h
var y=r&&"button"!==this.element?"button":null
var k="button"===this.element||"input"===this.element?"button":null
var w="button"!==y||g?null:"0"
return d.a.createElement(m["a"],Object.assign({},Object(C["b"])(p),{elementRef:this.handleElementRef,as:this.element,display:this.display,margin:s,href:_,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,"aria-disabled":g?"true":null,role:y,type:k,tabIndex:w,className:v()(b)}),c&&"start"===u&&this.renderIcon(),t,c&&"end"===u&&this.renderIcon())}},{key:"containsTruncateText",get:function(){var e=false
d.a.Children.forEach(this.props.children,(function(n){n&&Object(j["a"])(n,["TruncateText"])&&(e=true)}))
!e||this.props.display
return e}},{key:"display",get:function(){if(this.props.display)return this.props.display
var e=this.containsTruncateText
return this.props.renderIcon?e?"inline-flex":"inline-block":e?"block":"auto"}},{key:"interaction",get:function(){return Object(S["a"])({props:this.props,interactionTypes:["disabled"]})}},{key:"element",get:function(){return Object(O["a"])(t,this.props)}},{key:"focused",get:function(){return Object(g["a"])(this._link)}},{key:"focusable",get:function(){return Object(y["a"])(this._link)}},{key:"hasVisibleChildren",get:function(){return Object(h["a"])(this.props.children)}}])
t.displayName="Link"
return t}(u["Component"]),I.propTypes={children:f.a.node.isRequired,href:f.a.string,color:f.a.oneOf(["link","link-inverse"]),elementRef:f.a.func,as:f.a.elementType,interaction:f.a.oneOf(["enabled","disabled"]),margin:b["c"].spacing,renderIcon:f.a.oneOfType([f.a.func,f.a.node]),iconPlacement:f.a.oneOf(["start","end"]),display:f.a.oneOf(["auto","block","inline-block","flex","inline-flex"]),isWithinText:f.a.bool,onClick:f.a.func,onFocus:f.a.func,onBlur:f.a.func,linkRef:f.a.func,variant:f.a.oneOf(["default","inverse"])},I.defaultProps={href:void 0,elementRef:void 0,interaction:void 0,margin:void 0,renderIcon:void 0,display:void 0,color:"link",as:void 0,iconPlacement:"start",isWithinText:true,onClick:void 0,onFocus:void 0,onBlur:void 0},B))||q)||q)||q)},"9/5/":function(e,n,t){(function(n){var t="Expected a function"
var o=NaN
var a="[object Symbol]"
var r=/^\s+|\s+$/g
var i=/^[-+]0x[0-9a-f]+$/i
var _=/^0b[01]+$/i
var s=/^0o[0-7]+$/i
var c=parseInt
var u="object"==typeof n&&n&&n.Object===Object&&n
var d="object"==typeof self&&self&&self.Object===Object&&self
var l=u||d||Function("return this")()
var f=Object.prototype
var p=f.toString
var v=Math.max,m=Math.min
var b=function(){return l.Date.now()}
function h(e,n,o){var a,r,i,_,s,c,u=0,d=false,l=false,f=true
if("function"!=typeof e)throw new TypeError(t)
n=w(n)||0
if(g(o)){d=!!o.leading
l="maxWait"in o
i=l?v(w(o.maxWait)||0,n):i
f="trailing"in o?!!o.trailing:f}function p(n){var t=a,o=r
a=r=void 0
u=n
_=e.apply(o,t)
return _}function h(e){u=e
s=setTimeout(C,n)
return d?p(e):_}function y(e){var t=e-c,o=e-u,a=n-t
return l?m(a,i-o):a}function k(e){var t=e-c,o=e-u
return void 0===c||t>=n||t<0||l&&o>=i}function C(){var e=b()
if(k(e))return j(e)
s=setTimeout(C,y(e))}function j(e){s=void 0
if(f&&a)return p(e)
a=r=void 0
return _}function S(){void 0!==s&&clearTimeout(s)
u=0
a=c=r=s=void 0}function O(){return void 0===s?_:j(b())}function x(){var e=b(),t=k(e)
a=arguments
r=this
c=e
if(t){if(void 0===s)return h(c)
if(l){s=setTimeout(C,n)
return p(c)}}void 0===s&&(s=setTimeout(C,n))
return _}x.cancel=S
x.flush=O
return x}function g(e){var n=typeof e
return!!e&&("object"==n||"function"==n)}function y(e){return!!e&&"object"==typeof e}function k(e){return"symbol"==typeof e||y(e)&&p.call(e)==a}function w(e){if("number"==typeof e)return e
if(k(e))return o
if(g(e)){var n="function"==typeof e.valueOf?e.valueOf():e
e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e
e=e.replace(r,"")
var t=_.test(e)
return t||s.test(e)?c(e.slice(2),t?2:8):i.test(e)?o:+e}e.exports=h}).call(this,t("yLpj"))},AqF9:function(e,n,t){e.exports=t.p+"46568d8df9dc242547938dcbde1df0a4.svg"},DQGf:function(e,n,t){e.exports=t.p+"f0a93d0fe2e466f71130bf2fec27f7e2.svg"},DUc8:function(e,n,t){"use strict"
t.r(n)
t.d(n,"AutoFocusInside",(function(){return rn}))
t.d(n,"MoveFocusInside",(function(){return sn}))
t.d(n,"FreeFocusInside",(function(){return un}))
t.d(n,"InFocusGuard",(function(){return m}))
t.d(n,"FocusLockUI",(function(){return H}))
var o=t("zLVn")
var a=t("wx14")
var r=t("q1tI")
var i=t.n(r)
t("17x9")
var _="data-focus-lock"
var s="data-focus-lock-disabled"
var c="data-no-focus-lock"
var u="data-autofocus-inside"
function d(e,n){var t=Object(r["useState"])((function(){return{value:e,callback:n,facade:{get current(){return t.value},set current(e){var n=t.value
if(n!==e){t.value=e
t.callback(e,n)}}}}}))[0]
t.callback=n
return t.facade}function l(e,n){"function"===typeof e?e(n):null!=e&&(e.current=n)
return e}function f(e,n){return d(n,(function(n){return e.forEach((function(e){return l(e,n)}))}))}var p={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"}
var v=function(e){var n=e.children
return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{key:"guard-first","data-focus-guard":true,"data-focus-auto-guard":true,style:p}),n,n&&i.a.createElement("div",{key:"guard-last","data-focus-guard":true,"data-focus-auto-guard":true,style:p}))}
v.propTypes={}
v.defaultProps={children:null}
var m=v
var b=t("mrSG")
function h(e){return e}function g(e,n){void 0===n&&(n=h)
var t=[]
var o=false
var a={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.")
if(t.length)return t[t.length-1]
return e},useMedium:function(e){var a=n(e,o)
t.push(a)
return function(){t=t.filter((function(e){return e!==a}))}},assignSyncMedium:function(e){o=true
while(t.length){var n=t
t=[]
n.forEach(e)}t={push:function(n){return e(n)},filter:function(){return t}}},assignMedium:function(e){o=true
var n=[]
if(t.length){var a=t
t=[]
a.forEach(e)
n=t}var r=function(){var t=n
n=[]
t.forEach(e)}
var i=function(){return Promise.resolve().then(r)}
i()
t={push:function(e){n.push(e)
i()},filter:function(e){n=n.filter(e)
return t}}}}
return a}function y(e,n){void 0===n&&(n=h)
return g(e,n)}function k(e){void 0===e&&(e={})
var n=g(null)
n.options=b["__assign"]({async:true,ssr:false},e)
return n}var w=y({},(function(e){var n=e.target,t=e.currentTarget
return{target:n,currentTarget:t}}))
var C=y()
var j=y()
var S=k({async:true})
var O=[]
var x=i.a.forwardRef((function(e,n){var t
var o=Object(r["useState"])(),c=o[0],u=o[1]
var d=Object(r["useRef"])()
var l=Object(r["useRef"])(false)
var v=Object(r["useRef"])(null)
var m=e.children,b=e.disabled,h=e.noFocusGuards,g=e.persistentFocus,y=e.autoFocus,k=(e.allowTextSelection,e.group),j=e.className,x=e.whiteList,H=e.shards,A=void 0===H?O:H,T=e.as,z=void 0===T?"div":T,R=e.lockProps,q=void 0===R?{}:R,I=e.sideCar,B=e.returnFocus,E=e.onActivation,P=e.onDeactivation
var N=Object(r["useState"])({}),F=N[0]
var G=Object(r["useCallback"])((function(){v.current=v.current||document&&document.activeElement
d.current&&E&&E(d.current)
l.current=true}),[E])
var D=Object(r["useCallback"])((function(){l.current=false
P&&P(d.current)}),[P])
var L=Object(r["useCallback"])((function(e){var n=v.current
if(Boolean(B)&&n&&n.focus){var t="object"===typeof B?B:void 0
v.current=null
e?Promise.resolve().then((function(){return n.focus(t)})):n.focus(t)}}),[B])
var M=Object(r["useCallback"])((function(e){l.current&&w.useMedium(e)}),[])
var K=C.useMedium
var V=Object(r["useCallback"])((function(e){if(d.current!==e){d.current=e
u(e)}}),[])
false
var W=Object(a["a"])((t={},t[s]=b&&"disabled",t[_]=k,t),q)
var Q=true!==h
var U=Q&&"tail"!==h
var Y=f([n,V])
return i.a.createElement(i.a.Fragment,null,Q&&[i.a.createElement("div",{key:"guard-first","data-focus-guard":true,tabIndex:b?-1:0,style:p}),i.a.createElement("div",{key:"guard-nearest","data-focus-guard":true,tabIndex:b?-1:1,style:p})],!b&&i.a.createElement(I,{id:F,sideCar:S,observed:c,disabled:b,persistentFocus:g,autoFocus:y,whiteList:x,shards:A,onActivation:G,onDeactivation:D,returnFocus:L}),i.a.createElement(z,Object(a["a"])({ref:Y},W,{className:j,onBlur:K,onFocus:M}),m),U&&i.a.createElement("div",{"data-focus-guard":true,tabIndex:b?-1:0,style:p}))}))
x.propTypes={}
x.defaultProps={children:void 0,disabled:false,returnFocus:false,noFocusGuards:false,autoFocus:true,persistentFocus:false,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0}
var H=x
var A=t("dI71")
var T=t("rePB")
function z(e,n){false
function t(e){return e.displayName||e.name||"Component"}return function(o){false
var a=[]
var _
function s(){_=e(a.map((function(e){return e.props})))
n(_)}var c=function(e){Object(A["a"])(n,e)
function n(){return e.apply(this,arguments)||this}n.peek=function(){return _}
var t=n.prototype
t.componentDidMount=function(){a.push(this)
s()}
t.componentDidUpdate=function(){s()}
t.componentWillUnmount=function(){var e=a.indexOf(this)
a.splice(e,1)
s()}
t.render=function(){return i.a.createElement(o,this.props)}
return n}(r["PureComponent"])
Object(T["a"])(c,"displayName","SideEffect("+t(o)+")")
return c}}var R=z
var q=function(e){var n=Array(e.length)
for(var t=0;t<e.length;++t)n[t]=e[t]
return n}
var I=function(e,n){return e.filter((function(e){return e===n}))[0]}
var B=function(e){return Array.isArray(e)?e:[e]}
var E=function(){return document&&q(document.querySelectorAll("["+c+"]")).some((function(e){return e.contains(document.activeElement)}))}
var P=E
var N="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
var F=function e(n){var t=n.length
for(var o=0;o<t;o+=1){var a=function(t){if(o!==t&&n[o].contains(n[t]))return{v:e(n.filter((function(e){return e!==n[t]})))}}
for(var r=0;r<t;r+=1){var i=a(r)
if("object"===("undefined"===typeof i?"undefined":N(i)))return i.v}}return n}
var G=function e(n){return n.parentNode?e(n.parentNode):n}
var D=function(e){var n=B(e)
return n.filter(Boolean).reduce((function(e,n){var t=n.getAttribute(_)
e.push.apply(e,t?F(q(G(n).querySelectorAll("["+_+'="'+t+'"]:not(['+s+'="disabled"])'))):[n])
return e}),[])}
var L=D
var M=function(e){return e===document.activeElement}
var K=function(e){return!!I(q(e.querySelectorAll("iframe")),M)}
var V=function(e){var n=document&&document.activeElement
if(!n||n.dataset&&n.dataset.focusGuard)return false
return L(e).reduce((function(e,t){return e||t.contains(n)||K(t)}),false)}
var W=V
var Q=function(e,n){var t=e.tabIndex-n.tabIndex
var o=e.index-n.index
if(t){if(!e.tabIndex)return 1
if(!n.tabIndex)return-1}return t||o}
var U=function(e,n,t){return q(e).map((function(e,n){return{node:e,index:n,tabIndex:t&&-1===e.tabIndex?(e.dataset||{}).focusGuard?0:-1:e.tabIndex}})).filter((function(e){return!n||e.tabIndex>=0})).sort(Q)}
var Y=["button:enabled:not([readonly])","select:enabled:not([readonly])","textarea:enabled:not([readonly])","input:enabled:not([readonly])","a[href]","area[href]","iframe","object","embed","[tabindex]","[contenteditable]","[autofocus]"]
var J=Y.join(",")
var X=J+", [data-focus-guard]"
var Z=function(e,n){return e.reduce((function(e,t){return e.concat(q(t.querySelectorAll(n?X:J)),t.parentNode?q(t.parentNode.querySelectorAll(Y.join(","))).filter((function(e){return e===t})):[])}),[])}
var $=function(e){var n=e.querySelectorAll("["+u+"]")
return q(n).map((function(e){return Z([e])})).reduce((function(e,n){return e.concat(n)}),[])}
var ee=function(e){if(!e||!e.getPropertyValue)return false
return"none"===e.getPropertyValue("display")||"hidden"===e.getPropertyValue("visibility")}
var ne=function e(n){return!n||n===document||n.nodeType===Node.DOCUMENT_NODE||!ee(window.getComputedStyle(n,null))&&e(n.parentNode)}
var te=function(e){return!(("INPUT"===e.tagName||"BUTTON"===e.tagName)&&("hidden"===e.type||e.disabled))}
var oe=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
t.push(n)
n.parentNode&&e(n.parentNode,t)
return t}
var ae=function(e,n){var t=oe(e)
var o=oe(n)
for(var a=0;a<t.length;a+=1){var r=t[a]
if(o.indexOf(r)>=0)return r}return false}
var re=function(e){return q(e).filter((function(e){return ne(e)})).filter((function(e){return te(e)}))}
var ie=function(e,n){return U(re(Z(e,n)),true,n)}
var _e=function(e){return U(re(Z(e)),false)}
var se=function(e){return re($(e))}
var ce=function(e){return"INPUT"===e.tagName&&"radio"===e.type}
var ue=function(e,n){return n.filter(ce).filter((function(n){return n.name===e.name})).filter((function(e){return e.checked}))[0]||e}
var de=function(e){if(e[0]&&e.length>1&&ce(e[0])&&e[0].name)return ue(e[0],e)
return e[0]}
var le=de
var fe=function(e){return function(n){return!!n.autofocus||n.dataset&&!!n.dataset.autofocus||e.indexOf(n)>=0}}
var pe=function(e){return e.dataset&&e.dataset.focusGuard}
var ve=function(e){return!pe(e)}
var me=function(e,n,t,o,a){var r=e.length
var i=e[0]
var _=e[r-1]
if(e.indexOf(t)>=0)return
var s=n.indexOf(t)
var c=n.indexOf(o||s)
var u=e.indexOf(o)
var d=s-c
var l=n.indexOf(i)
var f=n.indexOf(_)
if(-1===s||-1===u)return e.indexOf(a.length?le(a):le(e))
if(!d&&u>=0)return u
if(s<=l&&pe(t)&&Math.abs(d)>1)return 0
if(d&&Math.abs(d)>1)return u
if(s<=l)return r-1
if(s>f)return 0
if(d){if(Math.abs(d)>1)return u
return(r+u+d)%r}return}
var be=function(e,n,t){var o=B(e)
var a=B(n)
var r=o[0]
var i=null
a.filter(Boolean).forEach((function(e){i=ae(i||e,e)||i
t.filter(Boolean).forEach((function(e){var n=ae(r,e)
n&&(i=!i||n.contains(i)?n:ae(n,i))}))}))
return i}
var he=function(e){return e.reduce((function(e,n){return e.concat(se(n))}),[])}
var ge=function(e,n){var t=new Map
n.forEach((function(e){return t.set(e.node,e)}))
return e.map((function(e){return t.get(e)})).filter(Boolean)}
var ye=function(e){var n=L(e).filter(ve)
var t=be(e,e,n)
var o=ie([t],true)
var a=ie(n).filter((function(e){var n=e.node
return ve(n)})).map((function(e){var n=e.node
return n}))
return o.map((function(e){var n=e.node,t=e.index
return{node:n,index:t,lockItem:a.indexOf(n)>=0,guard:pe(n)}}))}
var ke=function(e,n){var t=document&&document.activeElement
var o=L(e).filter(ve)
var a=be(t||e,e,o)
var r=ie(o).filter((function(e){var n=e.node
return ve(n)}))
if(!r[0]){r=_e(o).filter((function(e){var n=e.node
return ve(n)}))
if(!r[0])return}var i=ie([a]).map((function(e){var n=e.node
return n}))
var _=ge(i,r)
var s=_.map((function(e){var n=e.node
return n}))
var c=me(s,i,t,n,s.filter(fe(he(o))))
if(void 0===c)return c
return _[c]}
var we=ke
var Ce=function(e){e.focus()
e.contentWindow&&e.contentWindow.focus()}
var je=0
var Se=false
var Oe=function(e,n){var t=we(e,n)
if(Se)return
if(t){if(je>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting")
Se=true
setTimeout((function(){Se=false}),1)
return}je++
Ce(t.node)
je--}}
var xe=Oe
function He(e){var n=window,t=n.setImmediate
"undefined"!==typeof t?t(e):setTimeout(e,1)}var Ae=function(e,n){var t={}
t[e]=n
return t}
var Te=function(){return document&&document.activeElement===document.body}
var ze=function(){return Te()||P()}
var Re=null
var qe=null
var Ie=null
var Be=false
var Ee=function(){return true}
var Pe=function(e){return(Re.whiteList||Ee)(e)}
var Ne=function(e,n){Ie={observerNode:e,portaledElement:n}}
var Fe=function(e){return Ie&&Ie.portaledElement===e}
function Ge(e,n,t,o){var a=null
var r=e
do{var i=o[r]
if(i.guard)i.node.dataset.focusAutoGuard&&(a=i)
else{if(!i.lockItem)break
if(r!==e)return
a=null}}while((r+=t)!==n)
a&&(a.node.tabIndex=0)}var De=function(e){return e&&"current"in e?e.current:e}
var Le=function(){var e=false
if(Re){var n=Re,t=n.observed,o=n.persistentFocus,a=n.autoFocus,r=n.shards
var i=t||Ie&&Ie.portaledElement
var _=document&&document.activeElement
if(i){var s=[i].concat(r.map(De).filter(Boolean))
if((!_||Pe(_))&&(o||Be||!ze()||!qe&&a)){if(i&&!(W(s)||Fe(_,i)))if(document&&!qe&&_&&!a){_.blur()
document.body.focus()}else{e=xe(s,qe)
Ie={}}Be=false
qe=document&&document.activeElement}if(document){var c=document&&document.activeElement
var u=ye(s)
var d=u.find((function(e){var n=e.node
return n===c}))
if(d){u.filter((function(e){var n=e.guard,t=e.node
return n&&t.dataset.focusAutoGuard})).forEach((function(e){var n=e.node
return n.removeAttribute("tabIndex")}))
var l=u.indexOf(d)
Ge(l,u.length,1,u)
Ge(l,-1,-1,u)}}}}return e}
var Me=function(e){if(Le()&&e){e.stopPropagation()
e.preventDefault()}}
var Ke=function(){return He(Le)}
var Ve=function(e){var n=e.target
var t=e.currentTarget
t.contains(n)||Ne(t,n)}
var We=function(){return null}
var Qe=function(e){var n=e.children
return i.a.createElement("div",{onBlur:Ke,onFocus:Ve},n)}
Qe.propTypes={}
var Ue=function(){Be=true}
var Ye=function(){document.addEventListener("focusin",Me,true)
document.addEventListener("focusout",Ke)
window.addEventListener("blur",Ue)}
var Je=function(){document.removeEventListener("focusin",Me,true)
document.removeEventListener("focusout",Ke)
window.removeEventListener("blur",Ue)}
function Xe(e){return e.filter((function(e){var n=e.disabled
return!n}))}function Ze(e){var n=e.slice(-1)[0]
n&&!Re&&Ye()
var t=Re
var o=t&&n&&n.id===t.id
Re=n
if(t&&!o){t.onDeactivation()
e.filter((function(e){var n=e.id
return n===t.id})).length||t.returnFocus(!n)}if(n){qe=null
o&&t.observed===n.observed||n.onActivation()
Le(true)
He(Le)}else{Je()
qe=null}}w.assignSyncMedium(Ve)
C.assignMedium(Ke)
j.assignMedium((function(e){return e({moveFocusInside:xe,focusInside:W})}))
var $e=R(Xe,Ze)(We)
var en=i.a.forwardRef((function(e,n){return i.a.createElement(H,Object(a["a"])({sideCar:$e,ref:n},e))}))
var nn=H.propTypes||{},tn=(nn.sideCar,Object(o["a"])(nn,["sideCar"]))
en.propTypes=tn
var on=en
var an=function(e){var n=e.disabled,t=e.children,o=e.className
return i.a.createElement("div",Object(a["a"])({},Ae(u,!n),{className:o}),t)}
an.propTypes={}
an.defaultProps={disabled:false,className:void 0}
var rn=an
function _n(e){var n=e.disabled,t=e.className,o=e.children
var r=i.a.useRef(null)
var _=i.a.useRef(n)
var s=function(){var e=r.current
j.useMedium((function(n){!_.current&&e&&(n.focusInside(e)||n.moveFocusInside(e,null))}))}
i.a.useEffect((function(){_.current=n
s()}),[n])
return i.a.createElement("div",Object(a["a"])({},Ae(u,!n),{ref:r,className:t}),o)}_n.propTypes={}
_n.defaultProps={disabled:false,className:void 0}
var sn=_n
var cn=function(e){var n=e.children,t=e.className
return i.a.createElement("div",Object(a["a"])({},Ae(c,true),{className:t}),n)}
cn.propTypes={}
cn.defaultProps={className:void 0}
var un=cn
n["default"]=on},EtU4:function(e,n,t){e.exports=t.p+"3b7f416a36ea3b3e1db4e0525b73aadf.svg"},IGeh:function(e,n,t){"use strict"
t.r(n)
var o=t("ODXe")
var a=t("An8g")
var r=t("q1tI")
var i=t.n(r)
var _=t("RDWv")
var s=t.n(_)
var c=t("HGxv")
var u=t("8WeW")
Object(u["a"])(JSON.parse('{"ar":{"access_canvas_training_videos_and_courses_ea43173a":"الوصول إلى مقاطع فيديو ومساقات التدريب في Canvas","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"قم بالوصول إلى مساقاتك ومجموعاتك باستخدام أي جهاز محمول بنظام iOS أو Android واعثر على المزيد من المعلومات في قائمة المساعدة.","add_people_and_courses_to_canvas_5c4bfff9":"إضافة أشخاص ومساقات إلى Canvas","admin_tour_36d89fbb":"جولة المسؤول","canvas_course_tutorial_video_5205c1c1":"فيديو توضيحي لمساقات Canvas","canvas_notifications_tutorial_video_79b8e768":"فيديو توضيحي لإعلامات Canvas","click_on_the_account_navigation_button_to_access_n_fbe82181":"انقر فوق زر تنقل الحساب للوصول إلى إعدادات الإعلامات.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"انقر فوق زر تنقل المساقات للوصول إلى المساقات.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"انقر فوق زر تنقل المسؤول للوصول إلى إعدادات الحساب.","close_d634289d":"إغلاق","come_back_later_5eab7dba":"ارجع لاحقاً!","current_of_totalsteps_19d7ee37":"%{current} من %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"لا تفوت الإعلامات الواردة من طلابك.","done_54e3d4b6":"تم","download_canvas_android_app_60b5595f":"تنزيل تطبيق Canvas بنظام Android","download_canvas_ios_app_11c8651b":"تنزيل تطبيق Canvas بنظام iOS","find_training_resources_and_more_help_f148612c":"العثور على موارد التدريب والمزيد من المساعدة","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"يمكنك الوصول إلى صفوفك أو موادك الدراسية في لوحة المعلومات...","get_your_content_online_9546ecff":"الوصول إلى المحتوى عبر الإنترنت","get_your_content_online_quickly_41fd925b":"الوصول بسرعة إلى المحتوى عبر الإنترنت","hello_name_cabdd4ce":"مرحبًا%{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"هذه بعض التلميحات السريعة لتبدأ في Canvas!","how_do_i_contact_my_instructor_184e35ed":"كيف أتواصل معي معلمي؟","how_do_i_download_the_student_app_4a4b8a63":"كيف أقوم بتنزيل تطبيق المعلم؟","how_do_i_download_the_student_app_and_get_addition_3604c207":"كيف أقوم بتنزيل تطبيق المعلم وأحصل على مساعدة إضافية؟","how_do_i_find_my_courses_b826e4ce":"كيف أجد مساقاتي؟","learn_more_about_using_commons_and_blueprints_3df953f6":"اعرف المزيد عن استخدام Commons والمخططات.","learn_more_about_video_conferencing_5f0e76e4":"معرفة المزيد عن مؤتمرات الفيديو","more_video_conferencing_tools_f55088d5":"المزيد من أدوات مؤتمرات الفيديو","next_40e12421":"التالي","not_now_afa29fa7":"ليس الآن","or_in_the_courses_list_6201030":"...أو في قائمة المساقات.","previous_bd2ac015":"السابق","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"مشاركة محتويات وقوالب المساق بسرعة مع المعلمين","quickly_share_course_content_and_templates_with_te_c70a5eeb":"مشاركة محتويات وقوالب المساق بسرعة مع المعلمين","set_up_video_conferencing_and_other_tools_1a94a350":"إعداد مؤتمرات الفيديو والأدوات الأخرى","set_up_video_conferencing_c0049abe":"إعداد مؤتمرات الفيديو","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"قم بإعداد مساق Canvas الخاص بك خلال 30 دقيقة أو أقل.","set_up_your_notifications_568ecf91":"إعداد الإعلامات","set_up_your_notifications_9c005279":"إعداد الإعلامات","star_2d27c137":"نجمة","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"ابدأ محادثة مع معلمك في علبة الوارد في Canvas.","start_tour_29787099":"بدء الجولة","student_tour_38b735c8":"جولة الطالب","teacher_tour_26282921":"جولة المعلم","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"لإضافة مستخدمين ومساقات وتسجيلات بشكل مجمع، انقر فوق عمليات استيراد SIS","to_add_individual_courses_click_courses_c5355180":"لإضافة مساق فردي، انقر فوق المساقات.","to_add_individual_users_click_people_4d6de56a":"لإضافة مستخدم فردي، انقر فوق الأشخاص.","video_conferencing_tools_enable_face_to_face_conne_144420a5":"تمكّن أدوات مؤتمرات الفيديو الاتصال وجهاً لوجه بين المعلمين والطلاب.","we_know_getting_your_courses_online_quickly_during_40424e8":"نعلم أن الوصول السريع إلى مساقاتك على الإنترنت أثناء تلك الفترة أولوية بالنسبة لك. ستظهر لك هذه الجولة السريعة طريقة:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"نعلم أن من أولوياتك نقل مؤسستك للتعلم عبر الإنترنت خلال تلك الفترة. ستظهر لك هذه الجولة السريعة طريقة:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"يمكنك الوصول إلى جولة الترحيب من هنا في أي وقت بالإضافة إلى الموارد الجديدة."},"ca":{"access_canvas_training_videos_and_courses_ea43173a":"Accedir al vídeos i cursos de formació del Canvas","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Accediu als vostres cursos i grups des de qualsevol dispositiu mòbil iOS o Android i cerqueu més informació al menú Ajuda.","add_people_and_courses_to_canvas_5c4bfff9":"Afegir persones i cursos al Canvas","admin_tour_36d89fbb":"Visita guiada per a administradors","canvas_course_tutorial_video_5205c1c1":"Vídeo tutorial sobre els cursos del Canvas","canvas_notifications_tutorial_video_79b8e768":"Vídeo tutorial sobre les notificacions del Canvas","click_on_the_account_navigation_button_to_access_n_fbe82181":"Feu clic al botó de navegació del compte per accedir a les preferències de notificació.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Feu clic al botó de navegació dels cursos per accedir als cursos.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Feu clic al botó de navegació de l\'administrador per accedir a la configuració del compte.","close_d634289d":"Tanca","come_back_later_5eab7dba":"Torneu més tard!","current_of_totalsteps_19d7ee37":"%{current} de %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"No us perdeu les notificacions dels vostres estudiants.","done_54e3d4b6":"Fet","download_canvas_android_app_60b5595f":"Baixa l\'aplicació Canvas per a Android","download_canvas_ios_app_11c8651b":"Baixa l\'aplicació Canvas per a iOS","find_training_resources_and_more_help_f148612c":"Cercar recursos de formació i més ajuda","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Cerqueu les vostres classes o temes al tauler...","get_your_content_online_9546ecff":"Posar el vostre contingut en línia","get_your_content_online_quickly_41fd925b":"Posar el vostre contingut en línia ràpidament","hello_name_cabdd4ce":"Hola, %{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Us oferim alguns consells ràpids per iniciar-vos al Canvas!","how_do_i_contact_my_instructor_184e35ed":"Com puc posar-me en contacte amb el meu instructor?","how_do_i_download_the_student_app_4a4b8a63":"Com puc baixar l\'aplicació per a estudiants?","how_do_i_download_the_student_app_and_get_addition_3604c207":"Com puc baixar l\'aplicació per a estudiants i obtenir ajuda addicional?","how_do_i_find_my_courses_b826e4ce":"Com puc trobar els meus cursos?","learn_more_about_using_commons_and_blueprints_3df953f6":"Obteniu més informació sobre com s\'utilitzen Commons i les plantilles.","learn_more_about_video_conferencing_5f0e76e4":"Més informació quant a les videoconferències","more_video_conferencing_tools_f55088d5":"Més eines de videoconferències","next_40e12421":"Següent","not_now_afa29fa7":"Ara no","or_in_the_courses_list_6201030":"...o a la llista de cursos.","previous_bd2ac015":"Anterior","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Compartir ràpidament el contingut del curs i les plantilles amb els professors","quickly_share_course_content_and_templates_with_te_c70a5eeb":"Compartir ràpidament el contingut del curs i les plantilles amb els professors","set_up_video_conferencing_and_other_tools_1a94a350":"Configurar les videoconferències i altres eines","set_up_video_conferencing_c0049abe":"Configurar les videoconferències","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Configureu el vostre curs del Canvas en menys de 30 minuts.","set_up_your_notifications_568ecf91":"Configurar les vostres notificacions","set_up_your_notifications_9c005279":"Configurar les vostres notificacions","star_2d27c137":"marca amb una estrella","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Inicieu una conversa amb el vostre instructor a la safata d\'entrada del Canvas.","start_tour_29787099":"Comença la visita guiada","student_tour_38b735c8":"Visita guiada per a estudiants","teacher_tour_26282921":"Visita guiada per a professors","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"Per afegir usuaris, cursos i inscripcions en massa, feu clic a Importacions del SIS.","to_add_individual_courses_click_courses_c5355180":"Per afegir cursos individuals, feu clic a Cursos.","to_add_individual_users_click_people_4d6de56a":"Per afegir usuaris individuals, feu clic a Persones.","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Les eines de videoconferències permeten la connexió cara a cara entre professors i estudiants.","we_know_getting_your_courses_online_quickly_during_40424e8":"Sabem que actualment necessiteu fer que els vostres cursos estiguin disponibles en línia ràpidament de manera prioritària. Aquesta visita guiada ràpida us mostrarà com:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"Sabem que actualment fer la transició de la vostra institució per a l\'aprenentatge en línia és una prioritat. Aquesta visita guiada ràpida us mostrarà com:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"Aquí podeu accedir en qualsevol moment a la Visita guiada de benvinguda i a altres recursos nous."},"cy":{"access_canvas_training_videos_and_courses_ea43173a":"Mynediad at fideos a chyrsiau hyfforddi Canvas","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Gallwch chi gael mynediad at eich cyrsiau a’ch grwpiau yn ddefnyddio unrhyw iOS neu ddyfais symudol Android a dod o hyd i ragor o wybodaeth yn y ddewislen Help.","add_people_and_courses_to_canvas_5c4bfff9":"Ychwanegu Pobl a Chyrsiau i Canvas","admin_tour_36d89fbb":"Taith Gweinyddwyr","canvas_course_tutorial_video_5205c1c1":"Fideo Tiwtorial Cwrs Canvas","canvas_notifications_tutorial_video_79b8e768":"Fideo Tiwtorial Hysbysiadau Canvas","click_on_the_account_navigation_button_to_access_n_fbe82181":"Clicio’r botwm crwydro’r cyfrif i gael mynediad at eich dewisiadau hysbysiadau.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Clicio’r botwm crwydro’r cwrs i gael mynediad at eich cyrsiau.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Cliciwch y botwm crwydro gweinyddwr i gael mynediad at osodiadau cyfrif.","close_d634289d":"Cau","come_back_later_5eab7dba":"Dewch yn ôl rywbryd eto!","current_of_totalsteps_19d7ee37":"%{current} o %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Peidiwch â cholli hysbysiadau gan eich myfyrwyr.","done_54e3d4b6":"Wedi gorffen","download_canvas_android_app_60b5595f":"Llwytho ap Canvas Android i lawr","download_canvas_ios_app_11c8651b":"Llwytho ap Canvas iOS i lawr","find_training_resources_and_more_help_f148612c":"Dod o hyd i Adnoddau Hyfforddi a Rhagor o Help","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Dewch o hyd i’ch dosbarthiadau neu eich pynciau yn y Dangosfwrdd...","get_your_content_online_9546ecff":"Cael eich Cynnwys ar-lein","get_your_content_online_quickly_41fd925b":"Cael eich Cynnwys Ar-lein yn Gyflym","hello_name_cabdd4ce":"Helo%{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Dyma awgrymiadau cyflym i’ch helpu chi i ddechrau arni yn Canvas!","how_do_i_contact_my_instructor_184e35ed":"Sut ydw i’n cysylltu â fy addysgwr?","how_do_i_download_the_student_app_4a4b8a63":"Sut ydw i’n llwytho’r Ap Myfyrwyr i lawr?","how_do_i_download_the_student_app_and_get_addition_3604c207":"Sut ydw i’n llwytho’r Ap Myfyrwyr i lawr a chael cymorth ychwanegol?","how_do_i_find_my_courses_b826e4ce":"Sut ydw i’n dod o hyd i fy nghyrsiau?","learn_more_about_using_commons_and_blueprints_3df953f6":"Dysgu mwy am ddefnyddio Commons a Glasbrintiau.","learn_more_about_video_conferencing_5f0e76e4":"Dysgu mwy am Fideo-gynadledda","more_video_conferencing_tools_f55088d5":"Rhagor o Adnoddau Fideo-gynadledda","next_40e12421":"Nesaf","not_now_afa29fa7":"Dim Nawr","or_in_the_courses_list_6201030":"...neu yn y rhestr Cyrsiau.","previous_bd2ac015":"Blaenorol","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Rhannu Cynnwys Cyrsiau a Thempledi’n Gyflym gydag Athrawon","quickly_share_course_content_and_templates_with_te_c70a5eeb":"Rhannu Cynnwys Cyrsiau a Thempledi’n Gyflym gydag Athrawon","set_up_video_conferencing_and_other_tools_1a94a350":"Gosod Fideo-gynadledda ac Adnoddau Eraill","set_up_video_conferencing_c0049abe":"Gosod Fideo-gynadledda","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Gosod eich cwrs Canvas mewn 30 munud neu lai","set_up_your_notifications_568ecf91":"Gosod eich Hysbysiadau","set_up_your_notifications_9c005279":"Gosod eich Hysbysiadau","star_2d27c137":"seren","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Dechreuwch sgwrs â’ch addysgwr ym Mlwch Derbyn Canvas.","start_tour_29787099":"Dechrau Taith","student_tour_38b735c8":"Taith Myfyrwyr","teacher_tour_26282921":"Taith Athrawon","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"I ychwanegu defnyddwyr, cyrsiau ac ymrestriadau swp, cliciwch Mewgludo SIS.","to_add_individual_courses_click_courses_c5355180":"I ychwanegu cyrsiau unigol, cliciwch Cyrsiau.","to_add_individual_users_click_people_4d6de56a":"I ychwanegu defnyddwyr unigol, cliciwch Pobl.","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Mae adnoddau fideo-gynadledda yn galluogi cysylltiad wyneb yn wyneb rhwng athrawon a myfyrwyr.","we_know_getting_your_courses_online_quickly_during_40424e8":"Rydyn ni’n ymwybodol fod cael eich cyrsiau ar-lein yn gyflyn yn flaenoriaeth yn ystod y cyfnod hwn. Bydd y daith gyflym hon yn dangos i chi sut i:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"Rydyn ni’n ymwybodol ei bod yn flaenoriaeth i newid eich sefydliad ar gyfer dysgu ar-lein dros y cyfnod hwn. Bydd y daith gyflym hon yn dangos i chi sut i:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"Gallwch chi ddod o hyd i’r Daith Groeso yma ar unrhyw adeg ynghyd ag adnoddau newydd eraill."},"da":{"access_canvas_training_videos_and_courses_ea43173a":"Få adgang til træningsvideoer og -kurser på Canvas","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Få adgang til dine fag og grupper ved hjælp af en hvilken som helst iOS- eller Android-mobilenhed og find mere information i menuen Hjælp.","add_people_and_courses_to_canvas_5c4bfff9":"tilføjer deltagere og fag til Canvas","admin_tour_36d89fbb":"Tour for admin","canvas_course_tutorial_video_5205c1c1":"Selvstudiumvideo om Canvas-fag","canvas_notifications_tutorial_video_79b8e768":"Selvstudiumvideo om Canvas-meddelelser","click_on_the_account_navigation_button_to_access_n_fbe82181":"Klik på konto-navigationsknappen for at få adgang til meddelelses-indstillinger.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Klik på fag-navigationsknappen for at få adgang til dine fag.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Klik på admin-navigationsknappen for at få adgang til kontoindstillinger.","close_d634289d":"Luk","come_back_later_5eab7dba":"Kom tilbage senere!","current_of_totalsteps_19d7ee37":"%{current} af %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Gå ikke glip af meddelelser fra dine studerende.","done_54e3d4b6":"Udført","download_canvas_android_app_60b5595f":"Download Canvas-Android-appen","download_canvas_ios_app_11c8651b":"Download Canvas-iOS-appen","find_training_resources_and_more_help_f148612c":"finder uddannelsesressourcer og mere hjælp","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Find dine klasser eller fag i oversigten ...","get_your_content_online_9546ecff":"Få dit indhold online","get_your_content_online_quickly_41fd925b":"Få dit indhold hurtigt online","hello_name_cabdd4ce":"Hej%{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Her er nogle hurtige tip, så du kan komme i gang i Canvas!","how_do_i_contact_my_instructor_184e35ed":"Hvordan finder jeg min instruktør?","how_do_i_download_the_student_app_4a4b8a63":"Hvordan downloader jeg appen til studerende?","how_do_i_download_the_student_app_and_get_addition_3604c207":"Hvordan downloader jeg appen til studerende? og får yderligere hjælp?","how_do_i_find_my_courses_b826e4ce":"Hvordan finder jeg mine fag?","learn_more_about_using_commons_and_blueprints_3df953f6":"Få mere at vide om brug af Commons og Blueprints","learn_more_about_video_conferencing_5f0e76e4":"Lær mere om videokonferencer","more_video_conferencing_tools_f55088d5":"Flere videokonferenceværktøjer","next_40e12421":"Næste","not_now_afa29fa7":"Ikke nu","or_in_the_courses_list_6201030":"... eller i listen Fag.","previous_bd2ac015":"Forrige","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Del hurtigt fagindhold og skabeloner med lærerne","quickly_share_course_content_and_templates_with_te_c70a5eeb":"hurtigt deler fagindhold og skabeloner med lærerne","set_up_video_conferencing_and_other_tools_1a94a350":"konfigurerer videokonferencer og andre værktøjer","set_up_video_conferencing_c0049abe":"Konfigurer videokonferencer","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Opsæt dit Canvas-fag på 30 minutter eller mindre.","set_up_your_notifications_568ecf91":"Indstil dine meddelelser","set_up_your_notifications_9c005279":"Indstil dine meddelelser","star_2d27c137":"giver stjerner","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Start en diskussion med din instruktør i Canvas-indbakke.","start_tour_29787099":"Start tour","student_tour_38b735c8":"Tour for studerende","teacher_tour_26282921":"Tour for lærere","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"For at tilføje flere brugere, fag og tilmeldinger på en gang skal du klikke på SIS-import.","to_add_individual_courses_click_courses_c5355180":"Klik på Fag for at tilføje individuelle fag.","to_add_individual_users_click_people_4d6de56a":"Klik på Deltagere for at tilføje individuelle brugere.","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Videokonferenceværktøjer muliggør ansigt til ansigt-forbindelse mellem lærere og studerende.","we_know_getting_your_courses_online_quickly_during_40424e8":"Vi ved, at det er en prioritet at få dine fag online hurtigt i løbet af denne periode. Denne hurtige tour viser dig, hvordan du:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"Vi ved, at det er en prioritet at overføre din institution til online-læring i denne periode. Denne hurtige tour viser dig, hvordan du:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"Du kan få adgang til velkomst-touren samt andre nye ressourcer her, når du vil."},"da-x-k12":{"access_canvas_training_videos_and_courses_ea43173a":"Få adgang til træningsvideoer og -fag på Canvas","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Få adgang til dine fag og grupper ved hjælp af en hvilken som helst iOS- eller Android-mobilenhed, og find mere information i menuen Hjælp.","add_people_and_courses_to_canvas_5c4bfff9":"Tilføjer deltagere og fag til Canvas","admin_tour_36d89fbb":"Tour for admins","canvas_course_tutorial_video_5205c1c1":"Selvstudiumvideo om Canvas-fag","canvas_notifications_tutorial_video_79b8e768":"Selvstudiumvideo om Canvas-meddelelser","click_on_the_account_navigation_button_to_access_n_fbe82181":"Klik på konto-navigationsknappen for at få adgang til meddelelses-indstillinger.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Klik på fag-navigationsknappen for at få adgang til dine fag.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Klik på admin-navigationsknappen for at få adgang til kontoindstillinger.","close_d634289d":"Luk","come_back_later_5eab7dba":"Kom tilbage senere!","current_of_totalsteps_19d7ee37":"%{current} af %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Gå ikke glip af meddelelser fra dine elever.","done_54e3d4b6":"Udført","download_canvas_android_app_60b5595f":"Download Canvas-Android-appen","download_canvas_ios_app_11c8651b":"Download Canvas-iOS-appen","find_training_resources_and_more_help_f148612c":"finder uddannelsesressourcer og mere hjælp","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Find dine klasser eller fag i oversigten ...","get_your_content_online_9546ecff":"Få dit indhold online","get_your_content_online_quickly_41fd925b":"Få dit indhold hurtigt online","hello_name_cabdd4ce":"Hej%{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Her er nogle hurtige tip, så du kan komme i gang i Canvas!","how_do_i_contact_my_instructor_184e35ed":"Hvordan finder jeg min instruktør?","how_do_i_download_the_student_app_4a4b8a63":"Hvordan downloader jeg elev-appen?","how_do_i_download_the_student_app_and_get_addition_3604c207":"Hvordan downloader jeg elev-appen og får yderligere hjælp?","how_do_i_find_my_courses_b826e4ce":"Hvordan finder jeg mine fag?","learn_more_about_using_commons_and_blueprints_3df953f6":"Få mere at vide om brug af Commons og Blueprints","learn_more_about_video_conferencing_5f0e76e4":"Lær mere om videokonferencer","more_video_conferencing_tools_f55088d5":"Flere videokonferenceværktøjer","next_40e12421":"Næste","not_now_afa29fa7":"Ikke nu","or_in_the_courses_list_6201030":"... eller i listen Fag.","previous_bd2ac015":"Forrige","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Del hurtigt fagindhold og skabeloner med lærerne","quickly_share_course_content_and_templates_with_te_c70a5eeb":"hurtigt deler fagindhold og skabeloner med lærerne","set_up_video_conferencing_and_other_tools_1a94a350":"konfigurerer videokonferencer og andre værktøjer","set_up_video_conferencing_c0049abe":"Konfigurer videokonferencer","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Opsæt dit Canvas-fag på 30 minutter eller mindre.","set_up_your_notifications_568ecf91":"Indstil dine meddelelser","set_up_your_notifications_9c005279":"Indstil dine meddelelser","star_2d27c137":"giver stjerner","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Start en diskussion med din instruktør i Canvas-indbakke.","start_tour_29787099":"Start tour","student_tour_38b735c8":"Tour for elever","teacher_tour_26282921":"Tour for lærere","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"For at tilføje flere brugere, fag og tilmeldinger på en gang skal du klikke på SIS-import.","to_add_individual_courses_click_courses_c5355180":"Klik på Fag for at tilføje individuelle fag.","to_add_individual_users_click_people_4d6de56a":"Klik på Deltagere for at tilføje individuelle brugere.","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Videokonferenceværktøjer muliggør ansigt til ansigt-forbindelse mellem lærere og elever.","we_know_getting_your_courses_online_quickly_during_40424e8":"Vi ved, at det er en prioritet at få dine fag online hurtigt i løbet af denne periode. Denne hurtige tour viser dig, hvordan du:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"Vi ved, at det er en prioritet at overføre din institution til online-læring i denne periode. Denne hurtige tour viser dig, hvordan du:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"Du kan få adgang til velkomst-touren samt andre nye ressourcer her, når du vil."},"de":{"access_canvas_training_videos_and_courses_ea43173a":"Auf Canvas-Schulungsvideos und Kurse zugreifen","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Greifen Sie auf Ihre Kurse und Gruppen mithilfe eines iOS- oder Android-Mobiltelefons zu, um weitere Informationen im Hilfe-Menü zu finden.","add_people_and_courses_to_canvas_5c4bfff9":"Personen und Kurse zu Canvas hinzufügen","admin_tour_36d89fbb":"Admin-Tour","canvas_course_tutorial_video_5205c1c1":"Lehrvideo über Canvas-Kurse","canvas_notifications_tutorial_video_79b8e768":"Lehrvideo über Canvas-Benachrichtigungen","click_on_the_account_navigation_button_to_access_n_fbe82181":"Klicken Sie auf die Kontonavigationsschaltfläche, um auf die Benachrichtigungseinstellungen zuzugreifen.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Klicken Sie auf die Kursnavigationsschaltfläche, um auf Ihre Kurse zuzugreifen.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Klicken Sie auf die Schaltfläche „Admin-Navigation“, um auf die Kontoeinstellungen zuzugreifen.","close_d634289d":"Schließen","come_back_later_5eab7dba":"Kommen Sie später wieder!","current_of_totalsteps_19d7ee37":"%{current} von insgesamt %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Verpassen Sie keine Benachrichtigungen von Ihren Studenten.","done_54e3d4b6":"Fertig","download_canvas_android_app_60b5595f":"Canvas-Android-App herunterladen","download_canvas_ios_app_11c8651b":"Canvas-iOS-App herunterladen","find_training_resources_and_more_help_f148612c":"Schulungsressourcen suchen sowie weitere Hilfen","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Klassen oder Themen auf dem Dashboard finden ...","get_your_content_online_9546ecff":"Ihre Inhalte online erhalten","get_your_content_online_quickly_41fd925b":"Ihre Inhalte schnell online erhalten","hello_name_cabdd4ce":"Hallo %{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Hier einige schnelle Tipps, um in Canvas zu starten!","how_do_i_contact_my_instructor_184e35ed":"Wie wende ich mich an meinen Lehrer?","how_do_i_download_the_student_app_4a4b8a63":"Wie lade ich die Studenten-App herunter?","how_do_i_download_the_student_app_and_get_addition_3604c207":"Wie lade ich die Studenten-App herunter und erhalte zusätzliche Hilfe?","how_do_i_find_my_courses_b826e4ce":"Wie finde ich meine Kurse?","learn_more_about_using_commons_and_blueprints_3df953f6":"Weitere Informationen zur Verwendung von Commons und Mustern","learn_more_about_video_conferencing_5f0e76e4":"Weitere Informationen über Videokonferenzen","more_video_conferencing_tools_f55088d5":"Weitere Videokonferenz-Tools","next_40e12421":"Weiter","not_now_afa29fa7":"Nicht jetzt","or_in_the_courses_list_6201030":"... oder in der Liste der Kurse.","previous_bd2ac015":"Vorherige/r/s","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Schnell Kursinhalte und Vorlagen mit Lehrern teilen","quickly_share_course_content_and_templates_with_te_c70a5eeb":"Schnell Kursinhalte und Vorlagen mit Lehrern teilen","set_up_video_conferencing_and_other_tools_1a94a350":"Einrichten von Videokonferenzen und anderen Tools","set_up_video_conferencing_c0049abe":"Einrichten von Videokonferenzen","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Richten Sie Ihren Canvas-Kurs in höchstens 30 Minuten ein.","set_up_your_notifications_568ecf91":"EInrichten Ihrer Benachrichtigungen","set_up_your_notifications_9c005279":"EInrichten Ihrer Benachrichtigungen","star_2d27c137":"Mit einem Sternchen versehen","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Beginnen Sie ein Gespräch mit Ihrem Kursleiter im Canvas-Posteingang.","start_tour_29787099":"Tour starten","student_tour_38b735c8":"Studententour","teacher_tour_26282921":"Lehrertour","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"Um Benutzergruppen, Kurse und Anmeldungen hinzuzufügen, klicken Sie auf SIS-Importe.","to_add_individual_courses_click_courses_c5355180":"Um einzelne Kurse hinzuzufügen, klicken Sie auf „Kurse“.","to_add_individual_users_click_people_4d6de56a":"Um einzelne Benutzer hinzuzufügen, klicken Sie auf Personen.","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Videokonferenz-Tools ermöglichen eine Vis-a-vis-Verbindung zwischen Lehrer und Schüler.","we_know_getting_your_courses_online_quickly_during_40424e8":"Wir wissen, dass es zurzeit Priorität hat, online schnell zu ihren Kursen zu gelangen. Auf dieser schnellen Tour erfahren Sie, wie:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"Wir wissen, dass es dieses Mal für Ihre Institution Priorität hat zum Online-Lernen zu wechseln. Auf dieser schnellen Tour erfahren Sie, wie:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"Sie können hier jederzeit auf die Begrüßungstour sowie andere neue Ressourcen zugreifen."},"el":{"close_d634289d":"Κλείσιμο","done_54e3d4b6":"Ολοκληρώθηκε","next_40e12421":"Επόμενη","previous_bd2ac015":"Προηγούμενο"},"en-AU":{"access_canvas_training_videos_and_courses_ea43173a":"Access Canvas training videos and courses","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Access your courses and groups using any iOS or Android mobile device and find more information in the Help menu.","add_people_and_courses_to_canvas_5c4bfff9":"Add People and Courses to Canvas","admin_tour_36d89fbb":"Admin Tour","canvas_course_tutorial_video_5205c1c1":"Canvas Course Tutorial Video","canvas_notifications_tutorial_video_79b8e768":"Canvas Notifications Tutorial Video","click_on_the_account_navigation_button_to_access_n_fbe82181":"Click on the account navigation button to access notification preferences.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Click on the courses navigation button to access your courses.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Click the admin navigation button to access account settings.","close_d634289d":"Close","come_back_later_5eab7dba":"Come back later!","current_of_totalsteps_19d7ee37":"%{current} of %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Don\'t miss notifications from your students.","done_54e3d4b6":"Done","download_canvas_android_app_60b5595f":"Download Canvas Android app","download_canvas_ios_app_11c8651b":"Download Canvas iOS app","find_training_resources_and_more_help_f148612c":"Find Training Resources and More Help","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Find your classes or subjects in the Dashboard...","get_your_content_online_9546ecff":"Get your Content online","get_your_content_online_quickly_41fd925b":"Get Your Content Online Quickly","hello_name_cabdd4ce":"Hello%{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Here\'s some quick tips to get you started in Canvas!","how_do_i_contact_my_instructor_184e35ed":"How do I contact my instructor?","how_do_i_download_the_student_app_4a4b8a63":"How do I download the Student App?","how_do_i_download_the_student_app_and_get_addition_3604c207":"How do I download the Student App and get additional help?","how_do_i_find_my_courses_b826e4ce":"How do I find my courses?","learn_more_about_using_commons_and_blueprints_3df953f6":"Learn more about using Commons and Blueprints.","learn_more_about_video_conferencing_5f0e76e4":"Learn more about Video Conferencing","more_video_conferencing_tools_f55088d5":"More Video Conferencing Tools","next_40e12421":"Next","not_now_afa29fa7":"Not Now","or_in_the_courses_list_6201030":"...or in the Courses list.","previous_bd2ac015":"Previous","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Quickly Share Course Content and Templates with Teachers","quickly_share_course_content_and_templates_with_te_c70a5eeb":"Quickly share Course Content and Templates with Teachers","set_up_video_conferencing_and_other_tools_1a94a350":"Set up Video Conferencing and Other Tools","set_up_video_conferencing_c0049abe":"Set up Video Conferencing","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Set up your Canvas course in 30 minutes or less.","set_up_your_notifications_568ecf91":"Set Up Your Notifications","set_up_your_notifications_9c005279":"Set up your Notifications","star_2d27c137":"star","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Start a conversation with your instructor in the Canvas Inbox.","start_tour_29787099":"Start Tour","student_tour_38b735c8":"Student Tour","teacher_tour_26282921":"Teacher Tour","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"To add bulk users, courses, and enrolments, click SIS Imports.","to_add_individual_courses_click_courses_c5355180":"To add individual courses, click Courses.","to_add_individual_users_click_people_4d6de56a":"To add individual users, click People.","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Video conferencing tools enable face-to-face connection between teachers and students.","we_know_getting_your_courses_online_quickly_during_40424e8":"We know getting your courses online quickly during this time is priority. This quick tour will show you how to:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"We know it\'s a priority to transition your institution for online learning during this time. This quick tour will show you how to:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"You can access the Welcome Tour here any time as well as other new resources."},"en-AU-x-unimelb":{"access_canvas_training_videos_and_courses_ea43173a":"Access Canvas training videos and subjects","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Access your subjects and groups using any iOS or Android mobile device and find more information in the Help menu.","add_people_and_courses_to_canvas_5c4bfff9":"Add People and Subjects to Canvas","admin_tour_36d89fbb":"Admin Tour","canvas_course_tutorial_video_5205c1c1":"Canvas Subject Tutorial Video","canvas_notifications_tutorial_video_79b8e768":"Canvas Notifications Tutorial Video","click_on_the_account_navigation_button_to_access_n_fbe82181":"Click on the account navigation button to access notification preferences.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Click on the subjects navigation button to access your subjects.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Click the admin navigation button to access account settings.","close_d634289d":"Close","come_back_later_5eab7dba":"Come back later!","current_of_totalsteps_19d7ee37":"%{current} of %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Don\'t miss notifications from your students.","done_54e3d4b6":"Done","download_canvas_android_app_60b5595f":"Download Canvas Android app","download_canvas_ios_app_11c8651b":"Download Canvas iOS app","find_training_resources_and_more_help_f148612c":"Find Training Resources and More Help","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Find your classes or topics in the Dashboard...","get_your_content_online_9546ecff":"Get your Content online","get_your_content_online_quickly_41fd925b":"Get Your Content Online Quickly","hello_name_cabdd4ce":"Hello%{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Here\'s some quick tips to get you started in Canvas!","how_do_i_contact_my_instructor_184e35ed":"How do I contact my instructor?","how_do_i_download_the_student_app_4a4b8a63":"How do I download the Student App?","how_do_i_download_the_student_app_and_get_addition_3604c207":"How do I download the Student App and get additional help?","how_do_i_find_my_courses_b826e4ce":"How do I find my subjects?","learn_more_about_using_commons_and_blueprints_3df953f6":"Learn more about using Commons and Blueprints.","learn_more_about_video_conferencing_5f0e76e4":"Learn more about Video Conferencing","more_video_conferencing_tools_f55088d5":"More Video Conferencing Tools","next_40e12421":"Next","not_now_afa29fa7":"Not Now","or_in_the_courses_list_6201030":"...or in the Subjects list.","previous_bd2ac015":"Previous","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Quickly Share Subject Content and Templates with Instructors","quickly_share_course_content_and_templates_with_te_c70a5eeb":"Quickly share Subject Content and Templates with Instructors","set_up_video_conferencing_and_other_tools_1a94a350":"Set up Video Conferencing and Other Tools","set_up_video_conferencing_c0049abe":"Set up Video Conferencing","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Set up your Canvas subject in 30 minutes or less.","set_up_your_notifications_568ecf91":"Set Up Your Notifications","set_up_your_notifications_9c005279":"Set up your Notifications","star_2d27c137":"star","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Start a conversation with your instructor in the Canvas Inbox.","start_tour_29787099":"Start Tour","student_tour_38b735c8":"Student Tour","teacher_tour_26282921":"Instructor Tour","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"To add bulk users, subjects, and enrolments, click SIS Imports.","to_add_individual_courses_click_courses_c5355180":"To add individual subjects, click Subjects.","to_add_individual_users_click_people_4d6de56a":"To add individual users, click People.","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Video conferencing tools enable face-to-face connection between instructors and students.","we_know_getting_your_courses_online_quickly_during_40424e8":"We know getting your subjects online quickly during this time is priority. This quick tour will show you how to:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"We know it\'s a priority to transition your institution for online learning during this time. This quick tour will show you how to:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"You can access the Welcome Tour here any time as well as other new resources."},"en-CA":{"access_canvas_training_videos_and_courses_ea43173a":"Access Canvas training videos and courses","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Access your courses and groups using any iOS or Android mobile device and find more information in the Help menu.","add_people_and_courses_to_canvas_5c4bfff9":"Add People and Courses to Canvas","admin_tour_36d89fbb":"Admin Tour","canvas_course_tutorial_video_5205c1c1":"Canvas Course Tutorial Video","canvas_notifications_tutorial_video_79b8e768":"Canvas Notifications Tutorial Video","click_on_the_account_navigation_button_to_access_n_fbe82181":"Click on the account navigation button to access notification preferences.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Click on the courses navigation button to access your courses.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Click the admin navigation button to access account settings.","close_d634289d":"Close","come_back_later_5eab7dba":"Come back later!","current_of_totalsteps_19d7ee37":"%{current} of %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Don\'t miss notifications from your students.","done_54e3d4b6":"Done","download_canvas_android_app_60b5595f":"Download Canvas Android app","download_canvas_ios_app_11c8651b":"Download Canvas iOS app","find_training_resources_and_more_help_f148612c":"Find Training Resources and More Help","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Find your classes or subjects in the Dashboard...","get_your_content_online_9546ecff":"Get your Content online","get_your_content_online_quickly_41fd925b":"Get Your Content Online Quickly","hello_name_cabdd4ce":"Hello%{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Here\'s some quick tips to get you started in Canvas!","how_do_i_contact_my_instructor_184e35ed":"How do I contact my instructor?","how_do_i_download_the_student_app_4a4b8a63":"How do I download the Student App?","how_do_i_download_the_student_app_and_get_addition_3604c207":"How do I download the Student App and get additional help?","how_do_i_find_my_courses_b826e4ce":"How do I find my courses?","learn_more_about_using_commons_and_blueprints_3df953f6":"Learn more about using Commons and Blueprints.","learn_more_about_video_conferencing_5f0e76e4":"Learn more about Video Conferencing","more_video_conferencing_tools_f55088d5":"More Video Conferencing Tools","next_40e12421":"Next","not_now_afa29fa7":"Not Now","or_in_the_courses_list_6201030":"...or in the Courses list.","previous_bd2ac015":"Previous","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Quickly Share Course Content and Templates with Teachers","quickly_share_course_content_and_templates_with_te_c70a5eeb":"Quickly share Course Content and Templates with Teachers","set_up_video_conferencing_and_other_tools_1a94a350":"Set up Video Conferencing and Other Tools","set_up_video_conferencing_c0049abe":"Set up Video Conferencing","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Set up your Canvas course in 30 minutes or less.","set_up_your_notifications_568ecf91":"Set Up Your Notifications","set_up_your_notifications_9c005279":"Set up your Notifications","star_2d27c137":"star","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Start a conversation with your instructor in the Canvas Inbox.","start_tour_29787099":"Start Tour","student_tour_38b735c8":"Student Tour","teacher_tour_26282921":"Teacher Tour","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"To add bulk users, courses, and enrollments, click SIS Imports.","to_add_individual_courses_click_courses_c5355180":"To add individual courses, click Courses.","to_add_individual_users_click_people_4d6de56a":"To add individual users, click People.","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Video conferencing tools enable face-to-face connection between teachers and students.","we_know_getting_your_courses_online_quickly_during_40424e8":"We know getting your courses online quickly during this time is priority. This quick tour will show you how to:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"We know it\'s a priority to transition your institution for online learning during this time. This quick tour will show you how to:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"You can access the Welcome Tour here any time as well as other new resources."},"en-GB":{"access_canvas_training_videos_and_courses_ea43173a":"Access Canvas training videos and courses","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Access your courses and groups using any iOS or Android mobile device and find more information in the Help menu.","add_people_and_courses_to_canvas_5c4bfff9":"Add People and Courses to Canvas","admin_tour_36d89fbb":"Admin Tour","canvas_course_tutorial_video_5205c1c1":"Canvas Course Tutorial Video","canvas_notifications_tutorial_video_79b8e768":"Canvas Notifications Tutorial Video","click_on_the_account_navigation_button_to_access_n_fbe82181":"Click on the account navigation button to access notification preferences.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Click on the courses navigation button to access your courses.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Click the admin navigation button to access account settings.","close_d634289d":"Close","come_back_later_5eab7dba":"Come back later!","current_of_totalsteps_19d7ee37":"%{current} of %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Don\'t miss notifications from your students.","done_54e3d4b6":"Done","download_canvas_android_app_60b5595f":"Download Canvas Android app","download_canvas_ios_app_11c8651b":"Download Canvas iOS app","find_training_resources_and_more_help_f148612c":"Find Training Resources and More Help","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Find your classes or subjects in the Dashboard...","get_your_content_online_9546ecff":"Get your Content online","get_your_content_online_quickly_41fd925b":"Get Your Content Online Quickly","hello_name_cabdd4ce":"Hello%{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Here\'s some quick tips to get you started in Canvas!","how_do_i_contact_my_instructor_184e35ed":"How do I contact my instructor?","how_do_i_download_the_student_app_4a4b8a63":"How do I download the Student App?","how_do_i_download_the_student_app_and_get_addition_3604c207":"How do I download the Student App and get additional help?","how_do_i_find_my_courses_b826e4ce":"How do I find my courses?","learn_more_about_using_commons_and_blueprints_3df953f6":"Learn more about using Commons and Blueprints.","learn_more_about_video_conferencing_5f0e76e4":"Learn more about Video Conferencing","more_video_conferencing_tools_f55088d5":"More Video Conferencing Tools","next_40e12421":"Next","not_now_afa29fa7":"Not Now","or_in_the_courses_list_6201030":"...or in the Courses list.","previous_bd2ac015":"Previous","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Quickly Share Course Content and Templates with Teachers","quickly_share_course_content_and_templates_with_te_c70a5eeb":"Quickly share Course Content and Templates with Teachers","set_up_video_conferencing_and_other_tools_1a94a350":"Set up Video Conferencing and Other Tools","set_up_video_conferencing_c0049abe":"Set up Video Conferencing","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Set up your Canvas course in 30 minutes or less.","set_up_your_notifications_568ecf91":"Set Up Your Notifications","set_up_your_notifications_9c005279":"Set up your Notifications","star_2d27c137":"star","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Start a conversation with your instructor in the Canvas Inbox.","start_tour_29787099":"Start Tour","student_tour_38b735c8":"Student Tour","teacher_tour_26282921":"Teacher Tour","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"To add bulk users, courses, and enrolments, click SIS Imports.","to_add_individual_courses_click_courses_c5355180":"To add individual courses, click Courses.","to_add_individual_users_click_people_4d6de56a":"To add individual users, click People.","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Video conferencing tools enable face-to-face connection between teachers and students.","we_know_getting_your_courses_online_quickly_during_40424e8":"We know getting your courses online quickly during this time is priority. This quick tour will show you how to:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"We know it\'s a priority to transition your institution for online learning during this time. This quick tour will show you how to:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"You can access the Welcome Tour here any time as well as other new resources."},"en-GB-x-lbs":{"close_d634289d":"Close","done_54e3d4b6":"Done","next_40e12421":"Next","previous_bd2ac015":"Previous"},"en-GB-x-ukhe":{"access_canvas_training_videos_and_courses_ea43173a":"Access Canvas training videos and modules","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Access your modules and groups using any iOS or Android mobile device and find more information in the Help menu.","add_people_and_courses_to_canvas_5c4bfff9":"Add People and Modules to Canvas","admin_tour_36d89fbb":"Admin Tour","canvas_course_tutorial_video_5205c1c1":"Canvas Module Tutorial Video","canvas_notifications_tutorial_video_79b8e768":"Canvas Notifications Tutorial Video","click_on_the_account_navigation_button_to_access_n_fbe82181":"Click on the account navigation button to access notification preferences.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Click on the modules navigation button to access your modules.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Click the admin navigation button to access account settings.","close_d634289d":"Close","come_back_later_5eab7dba":"Come back later!","current_of_totalsteps_19d7ee37":"%{current} of %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Don\'t miss notifications from your students.","done_54e3d4b6":"Done","download_canvas_android_app_60b5595f":"Download Canvas Android app","download_canvas_ios_app_11c8651b":"Download Canvas iOS app","find_training_resources_and_more_help_f148612c":"Find Training Resources and More Help","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Find your classes or subjects in the Dashboard...","get_your_content_online_9546ecff":"Get your Content online","get_your_content_online_quickly_41fd925b":"Get Your Content Online Quickly","hello_name_cabdd4ce":"Hello%{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Here\'s some quick tips to get you started in Canvas!","how_do_i_contact_my_instructor_184e35ed":"How do I contact my instructor?","how_do_i_download_the_student_app_4a4b8a63":"How do I download the Student App?","how_do_i_download_the_student_app_and_get_addition_3604c207":"How do I download the Student App and get additional help?","how_do_i_find_my_courses_b826e4ce":"How do I find my modules?","learn_more_about_using_commons_and_blueprints_3df953f6":"Learn more about using Commons and Blueprints.","learn_more_about_video_conferencing_5f0e76e4":"Learn more about Video Conferencing","more_video_conferencing_tools_f55088d5":"More Video Conferencing Tools","next_40e12421":"Next","not_now_afa29fa7":"Not Now","or_in_the_courses_list_6201030":"...or in the Modules list.","previous_bd2ac015":"Previous","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Quickly Share Module Content and Templates with Teachers","quickly_share_course_content_and_templates_with_te_c70a5eeb":"Quickly share Module Content and Templates with Teachers","set_up_video_conferencing_and_other_tools_1a94a350":"Set up Video Conferencing and Other Tools","set_up_video_conferencing_c0049abe":"Set up Video Conferencing","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Set up your Canvas module in 30 minutes or less.","set_up_your_notifications_568ecf91":"Set Up Your Notifications","set_up_your_notifications_9c005279":"Set up your Notifications","star_2d27c137":"star","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Start a conversation with your instructor in the Canvas Inbox.","start_tour_29787099":"Start Tour","student_tour_38b735c8":"Student Tour","teacher_tour_26282921":"Teacher Tour","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"To add bulk users, modules, and enrolments, click SIS Imports.","to_add_individual_courses_click_courses_c5355180":"To add individual modules, click Modules.","to_add_individual_users_click_people_4d6de56a":"To add individual users, click People.","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Video conferencing tools enable face-to-face connection between teachers and students.","we_know_getting_your_courses_online_quickly_during_40424e8":"We know getting your modules online quickly during this time is priority. This quick tour will show you how to:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"We know it\'s a priority to transition your institution for online learning during this time. This quick tour will show you how to:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"You can access the Welcome Tour here any time as well as other new resources."},"es":{"access_canvas_training_videos_and_courses_ea43173a":"Acceda a videos y cursos de capacitación de Canvas","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Acceda a sus cursos y grupos usando cualquier dispositivo móvil iOS o Android, y encuentre más información en el menú de ayuda.","add_people_and_courses_to_canvas_5c4bfff9":"Agregar personas y cursos a Canvas","admin_tour_36d89fbb":"Recorrido del administrador","canvas_course_tutorial_video_5205c1c1":"Video tutorial sobre los cursos de Canvas","canvas_notifications_tutorial_video_79b8e768":"Video tutorial sobre las notificaciones de Canvas","click_on_the_account_navigation_button_to_access_n_fbe82181":"Haga clic en el botón de navegación de la cuenta para acceder a las preferencias de notificación.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Haga clic en el botón de navegación de los cursos para acceder a sus cursos.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Hacer clic en el botón de navegación del administrador para acceder a las configuraciones de la cuenta.","close_d634289d":"Cerrar","come_back_later_5eab7dba":"¡Vuelva más tarde!","current_of_totalsteps_19d7ee37":"%{current} de %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"No pase por alto las notificaciones de sus estudiantes.","done_54e3d4b6":"Listo","download_canvas_android_app_60b5595f":"Descargar aplicación de Canvas para Android","download_canvas_ios_app_11c8651b":"Descargar aplicación de Canvas para iOS","find_training_resources_and_more_help_f148612c":"Buscar recursos de capacitación y más ayuda","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Encuentre sus clases o materias en el Tablero...","get_your_content_online_9546ecff":"Cargar su contenido en línea","get_your_content_online_quickly_41fd925b":"Cargue rápidamente su contenido en línea","hello_name_cabdd4ce":"¡Hola, %{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"¡Estos son algunos consejos rápidos para comenzar a utilizar Canvas!","how_do_i_contact_my_instructor_184e35ed":"¿Cómo contacto a mi profesor?","how_do_i_download_the_student_app_4a4b8a63":"¿Cómo descargo la aplicación para estudiantes Student App?","how_do_i_download_the_student_app_and_get_addition_3604c207":"¿Cómo descargo la aplicación Student App y obtengo ayuda adicional?","how_do_i_find_my_courses_b826e4ce":"¿Cómo encuentro mis cursos?","learn_more_about_using_commons_and_blueprints_3df953f6":"Obtenga más información sobre cómo utilizar Commons y plantillas.","learn_more_about_video_conferencing_5f0e76e4":"Obtener más información sobre las videoconferencias","more_video_conferencing_tools_f55088d5":"Más herramientas de videoconferencia","next_40e12421":"Siguiente","not_now_afa29fa7":"Ahora no","or_in_the_courses_list_6201030":"... o en la lista de cursos.","previous_bd2ac015":"Anterior","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Comparta rápidamente contenido del curso y plantillas con los profesores","quickly_share_course_content_and_templates_with_te_c70a5eeb":"Compartir rápidamente contenido del curso y plantillas con los profesores","set_up_video_conferencing_and_other_tools_1a94a350":"Configurar las videoconferencias y otras herramientas","set_up_video_conferencing_c0049abe":"Configure las videoconferencias","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Configure su curso de Canvas en 30 minutos o menos.","set_up_your_notifications_568ecf91":"Configure sus notificaciones","set_up_your_notifications_9c005279":"Configurar sus notificaciones","star_2d27c137":"estrella","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Inicie una conversación con su profesor en la bandeja de entrada de Canvas.","start_tour_29787099":"Comenzar recorrido","student_tour_38b735c8":"Recorrido del estudiante","teacher_tour_26282921":"Recorrido del profesor","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"Para agregar usuarios, cursos e inscripciones de forma masiva, haga clic en importaciones de SIS (SIS Imports).","to_add_individual_courses_click_courses_c5355180":"Para agregar cursos individuales, haga clic en Cursos (Courses).","to_add_individual_users_click_people_4d6de56a":"Para agregar usuarios individuales, haga clic en Personas (People).","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Las herramientas de videoconferencia permiten que los profesores y los estudiantes se conecten cara a cara.","we_know_getting_your_courses_online_quickly_during_40424e8":"Somos conscientes de que en este momento es una prioridad que sus cursos estén disponibles en línea rápidamente. Este recorrido breve le enseñará a hacer lo siguiente:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"Sabemos que la transición de su institución para brindar enseñanza en línea es una prioridad en este momento. Este recorrido breve le enseñará a hacer lo siguiente:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"Puede acceder en cualquier momento a este Recorrido de bienvenida, así como a otros recursos nuevos."},"fa":{"access_canvas_training_videos_and_courses_ea43173a":"دسترسی به درس‌ها و ویدئوهای آموزشی کانوس","close_d634289d":"بستن","done_54e3d4b6":"انجام شد","next_40e12421":"بعدی","previous_bd2ac015":"قبلی"},"fi":{"access_canvas_training_videos_and_courses_ea43173a":"Käytä Canvas-koulutusvideoita ja -kursseja","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Käytä kurssejasi ja ryhmiäsi missä tahansa iOS- tai Android-mobiililaitteessa ja hae lisätietoja Ohje-valikon kautta.","add_people_and_courses_to_canvas_5c4bfff9":"lisätä ihmisiä ja kursseja Canvasiin","admin_tour_36d89fbb":"Järjestelmäkäyttäjäkierros","canvas_course_tutorial_video_5205c1c1":"Canvasin kurssin opetusvideo","canvas_notifications_tutorial_video_79b8e768":"Canvasin ilmoitusten opetusvideo","click_on_the_account_navigation_button_to_access_n_fbe82181":"Pääset ilmoitusten asetuksiin napsauttamalla tilin navigointipainiketta.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Pääset kursseihin napsauttamalla kurssien navigointipainiketta.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Pääset tilin asetuksiin napsauttamalla järjestelmäkäyttäjän navigointipainiketta.","close_d634289d":"Sulje","come_back_later_5eab7dba":"Palaa takaisin myöhemmin!","current_of_totalsteps_19d7ee37":"%{current}/%{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Älä jätä huomaamatta ilmoituksia opiskelijoiltasi.","done_54e3d4b6":"Valmis","download_canvas_android_app_60b5595f":"Lataa Canvas Android -sovellus","download_canvas_ios_app_11c8651b":"Lataa Canvas iOS -sovellus","find_training_resources_and_more_help_f148612c":"löytää koulutusresursseja ja lisäohjeita","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Löydä luokkasi tai aiheesi koontitaulussa...","get_your_content_online_9546ecff":"saada sisältö verkkoon","get_your_content_online_quickly_41fd925b":"Saa sisältösi verkkoon nopeasti","hello_name_cabdd4ce":"Hei%{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Tässä on pikavihjeitä Canvasin käytön aloittamiseen!","how_do_i_contact_my_instructor_184e35ed":"Miten otan yhteyttä ohjaajaani?","how_do_i_download_the_student_app_4a4b8a63":"Kuinka lataan opiskelijasovelluksen","how_do_i_download_the_student_app_and_get_addition_3604c207":"Kuinka lataan opiskelijan sovelluksen ja saan lisäohjeita?","how_do_i_find_my_courses_b826e4ce":"Miten löydän kurssini?","learn_more_about_using_commons_and_blueprints_3df953f6":"Lue lisää kuvatekstien Commonsin ja Blueprintsin käytöstä","learn_more_about_video_conferencing_5f0e76e4":"oppia lisää videokonferensseista","more_video_conferencing_tools_f55088d5":"Lisää videokonferenssityökaluja","next_40e12421":"Seuraava","not_now_afa29fa7":"Ei nyt","or_in_the_courses_list_6201030":"...tai kurssien listassa.","previous_bd2ac015":"Edellinen","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Jaa nopeasti kurssin sisältöä ja malleja opettajien kanssa","quickly_share_course_content_and_templates_with_te_c70a5eeb":"jakaa nopeasti kurssin sisältöä ja malleja opettajien kanssa","set_up_video_conferencing_and_other_tools_1a94a350":"määrittää videokokoukset ja muut työkalut","set_up_video_conferencing_c0049abe":"Määritä videokonferessit","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Määritä Canvasin kurssi 30 minuutissa tai tätä lyhyemmässä ajassa.","set_up_your_notifications_568ecf91":"määrittää ilmoituksesi","set_up_your_notifications_9c005279":"määrittää ilmoituksesi","star_2d27c137":"tähti","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Aloita keskustelu ohjaajasi kanssa Canvasin tulevien laatikossa.","start_tour_29787099":"Aloita kierros","student_tour_38b735c8":"Opiskelijakierros","teacher_tour_26282921":"Opettajakierros","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"Voit lisätä massakäyttäjiä, -kursseja ja rekisteröitymisiä napsauttamalla SIS-tuonnit.","to_add_individual_courses_click_courses_c5355180":"Voit lisätä yksilöllisiä kursseja napsauttamalla Kurssit.","to_add_individual_users_click_people_4d6de56a":"Voit lisätä yksilöllisiä käyttäjiä napsauttamalla Ihmiset.","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Videokonferenssityökalu mahdollistaa yhteyden kasvoista kasvoihin opettajien ja oppilaiden välillä.","we_know_getting_your_courses_online_quickly_during_40424e8":"Tiedämme, että kurssiesi saaminen verkkoon nopeasti tänä aikana on prioriteetti. Tämä nopea kierros näyttää sinulle, miten tehdä seuraavaa:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"Tiedämme, että on prioriteetti siirtää laitoksesi verkko-oppimiseen tänä aikana. Tämä nopea kierros näyttää sinulle, miten tehdä seuraavaa:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"Pääset tervetulokierrokselle täällä milloin tahansa samoin kuin muihin uusiin resursseihin."},"fr":{"access_canvas_training_videos_and_courses_ea43173a":"Accéder aux cours et vidéos de formation à Canvas","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Accédez à vos groupes et à vos cours à l’aide de n\'importe quel appareil Android ou iOS ; vous trouverez plus d\'informations dans le menu d\'aide.","add_people_and_courses_to_canvas_5c4bfff9":"Ajouter des personnes et des cours à Canvas","admin_tour_36d89fbb":"Visite pour l\'administrateur","canvas_course_tutorial_video_5205c1c1":"Vidéo didacticielle Canvas sur les cours","canvas_notifications_tutorial_video_79b8e768":"Vidéo didacticielle Canvas sur les notifications","click_on_the_account_navigation_button_to_access_n_fbe82181":"Cliquez sur le bouton de navigation de compte pour accéder aux paramètres des notifications.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Cliquez sur le bouton de navigation de cours pour accéder à vos cours.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Cliquez sur le bouton de navigation de l\'administrateur pour accéder aux paramètres du compte.","close_d634289d":"Fermer","come_back_later_5eab7dba":"Revenez quand vous voulez !","current_of_totalsteps_19d7ee37":"%{current} de %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Ne ratez pas de notifications provenant de vos élèves.","done_54e3d4b6":"Terminé","download_canvas_android_app_60b5595f":"Télécharger l’application Canvas pour Android","download_canvas_ios_app_11c8651b":"Télécharger l’application Canvas pour iOS","find_training_resources_and_more_help_f148612c":"Trouver des ressources de formation et de l’aide supplémentaire","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Trouver vos cours ou vos matières sur le Tableau de bord...","get_your_content_online_9546ecff":"Mettre votre contenu en ligne","get_your_content_online_quickly_41fd925b":"Mettre votre contenu en ligne rapidement","hello_name_cabdd4ce":"Bonjour, %{name} !","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Voici quelques conseils pour bien démarrer sous Canvas.","how_do_i_contact_my_instructor_184e35ed":"Comment contacter mon instructeur ?","how_do_i_download_the_student_app_4a4b8a63":"Comment télécharger l\'application Élèves ?","how_do_i_download_the_student_app_and_get_addition_3604c207":"Comment télécharger l’application Élèves et obtenir de l’aide supplémentaire ?","how_do_i_find_my_courses_b826e4ce":"Comment trouver mes cours ?","learn_more_about_using_commons_and_blueprints_3df953f6":"En savoir plus sur l’utilisation de Commons et des projets de cours.","learn_more_about_video_conferencing_5f0e76e4":"En savoir plus sur la visioconférence","more_video_conferencing_tools_f55088d5":"Plus d\'outils de visioconférence","next_40e12421":"Suivant","not_now_afa29fa7":"Pas maintenant","or_in_the_courses_list_6201030":"... ou dans la liste des cours.","previous_bd2ac015":"Précédent","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Partager rapidement des contenus de cours et des modèles avec les enseignants","quickly_share_course_content_and_templates_with_te_c70a5eeb":"Partager rapidement du contenu de cours et des modèles avec les enseignants","set_up_video_conferencing_and_other_tools_1a94a350":"Paramétrer la visioconférence et d\'autres outils","set_up_video_conferencing_c0049abe":"Paramétrer la visioconférence","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Mettez en place un cours Canvas en 30 minutes maxi.","set_up_your_notifications_568ecf91":"Paramétrer vos notifications","set_up_your_notifications_9c005279":"Paramétrer vos notifications","star_2d27c137":"étoile","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Démarrer une conversation avec votre instructeur dans la Boîte de réception Canvas.","start_tour_29787099":"Démarrer la visite","student_tour_38b735c8":"Visite pour l’élève","teacher_tour_26282921":"Visite pour l’enseignant","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"Pour ajouter en masse des utilisateurs, des cours et des inscriptions, cliquez sur Importations SIS.","to_add_individual_courses_click_courses_c5355180":"Pour ajouter des cours individuels, cliquez sur Cours.","to_add_individual_users_click_people_4d6de56a":"Pour ajouter des utilisateurs individuels, cliquez sur Personnes.","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Les outils de visioconférence permettent une connexion en face à face entre les enseignants et les élèves.","we_know_getting_your_courses_online_quickly_during_40424e8":"Nous savons à quel point il est urgent pour vous de mettre en ligne rapidement vos cours dans le contexte actuel. Cette petite visite guidée vous montre comment :","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"Nous comprenons combien il est urgent pour votre établissement de passer à l’enseignement en ligne dans le contexte actuel. Cette petite visite guidée vous montre comment :","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"Vous pouvez accéder ici à cette visite guidée quand vous le souhaitez, ainsi qu\'à d\'autres nouvelles ressources."},"fr-CA":{"access_canvas_training_videos_and_courses_ea43173a":"Accéder aux vidéos de formation et aux cours sur Canvas","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Accédez à vos cours et groupes à l’aide de n’importe quel dispositif mobile iOS ou Android et trouvez plus d’informations dans le menu Aide.","add_people_and_courses_to_canvas_5c4bfff9":"Ajouter des personnes et des cours à Canvas","admin_tour_36d89fbb":"Visite de l’administrateur","canvas_course_tutorial_video_5205c1c1":"Tutoriel vidéo de cours Canvas","canvas_notifications_tutorial_video_79b8e768":"Tutoriel vidéo de notifications Canvas","click_on_the_account_navigation_button_to_access_n_fbe82181":"Cliquez sur le bouton de navigation du compte pour accéder aux préférences de notification.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Cliquez sur le bouton de navigation des cours pour accéder à vos cours.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Cliquez sur le bouton de navigation administrateur pour accéder aux paramètres du compte.","close_d634289d":"Fermer","come_back_later_5eab7dba":"Revenez plus tard!","current_of_totalsteps_19d7ee37":"%{current} sur %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Ne manquez pas les notifications de vos étudiants.","done_54e3d4b6":"Terminé","download_canvas_android_app_60b5595f":"Télécharger l’application Canvas Android","download_canvas_ios_app_11c8651b":"Télécharger l’application Canvas iOS","find_training_resources_and_more_help_f148612c":"Trouver des ressources de formation et plus d’aide","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Trouvez vos cours ou sujets dans le tableau de bord…","get_your_content_online_9546ecff":"Obtenir votre contenu en ligne","get_your_content_online_quickly_41fd925b":"Publiez rapidement votre contenu en ligne","hello_name_cabdd4ce":"Bonjour %{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Voici quelques conseils pour vous aider à démarrer dans Canvas!","how_do_i_contact_my_instructor_184e35ed":"Comment puis-je contacter mon instructeur?","how_do_i_download_the_student_app_4a4b8a63":"Comment puis-je télécharger l’application Étudiant?","how_do_i_download_the_student_app_and_get_addition_3604c207":"Comment puis-je télécharger l’application Étudiant et obtenir de l’aide supplémentaire?","how_do_i_find_my_courses_b826e4ce":"Comment puis-je trouver mes cours?","learn_more_about_using_commons_and_blueprints_3df953f6":"En apprendre davantage sur l’utilisation de Commons et les modèles.","learn_more_about_video_conferencing_5f0e76e4":"En apprendre davantage sur la vidéoconférence","more_video_conferencing_tools_f55088d5":"D’autres outils de vidéoconférence","next_40e12421":"Suivant","not_now_afa29fa7":"Pas maintenant","or_in_the_courses_list_6201030":"… ou dans la liste des cours.","previous_bd2ac015":"Précédent","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Partager rapidement le contenu et les modèles de cours avec les enseignants","quickly_share_course_content_and_templates_with_te_c70a5eeb":"Partager rapidement le contenu et les modèles de cours avec les enseignants","set_up_video_conferencing_and_other_tools_1a94a350":"Configurer la vidéoconférence et d’autres outils","set_up_video_conferencing_c0049abe":"Configurer la vidéoconférence","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Configurez votre cours Canvas en 30 minutes ou moins.","set_up_your_notifications_568ecf91":"Configurer vos notifications","set_up_your_notifications_9c005279":"Configurer vos notifications","star_2d27c137":"Marquer d’un astérisque","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Démarrer une conversation avec votre instructeur dans la boîte de réception Canvas.","start_tour_29787099":"Début de la tournée","student_tour_38b735c8":"Visite de l’étudiant","teacher_tour_26282921":"Visite de l’enseignant","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"Pour ajouter des utilisateurs, des cours et des inscriptions en bloc, cliquez sur Importations SIS.","to_add_individual_courses_click_courses_c5355180":"Pour ajouter des cours individuels, cliquez sur Cours.","to_add_individual_users_click_people_4d6de56a":"Pour ajouter des utilisateurs individuels, cliquez sur Personnes.","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Les outils de vidéoconférence permettent une connexion directe entre les enseignants et les étudiants.","we_know_getting_your_courses_online_quickly_during_40424e8":"Nous savons que la mise en ligne rapide de vos cours pendant cette période est prioritaire. Cette visite rapide vous montrera comment :","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"Nous savons qu’il est prioritaire de faire la transition entre votre institution et l’apprentissage en ligne pendant ce temps. Cette visite rapide vous montrera comment :","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"Vous pouvez accéder à la visite de bienvenue ici à tout moment ainsi qu’à d’autres nouvelles ressources."},"he":{"close_d634289d":"סגירה","done_54e3d4b6":"בוצע","next_40e12421":"הבא","previous_bd2ac015":"קודם"},"ht":{"access_canvas_training_videos_and_courses_ea43173a":"Ale sou videyo ak kou fòmasyon Canvas yo","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Ale sou kou ak nan gwoup oswa kou sou nenpòt aparèy iOS oswa Android epi jwenn plis enfòmasyon nan meni Èd la.","add_people_and_courses_to_canvas_5c4bfff9":"Ajoute Kontak ak Kou sou Canvas","admin_tour_36d89fbb":"Vizit Admin","canvas_course_tutorial_video_5205c1c1":"Videyo Titoryèl sou Kou Canvas","canvas_notifications_tutorial_video_79b8e768":"Videyo Titoryèl sou Notifikasyon Canvas","click_on_the_account_navigation_button_to_access_n_fbe82181":"Klike sou bouton navigasyon kont lan pou ka gen aksè a preferans notifikasyon ou yo.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Klike sou bouton navigasyon kou yo pou ka gen aksè a kou yo.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Klike sou bouton navigasyon administratè a pou w ka ale sou paramèt kont yo.","close_d634289d":"Fèmen","come_back_later_5eab7dba":"Retounen pita!","current_of_totalsteps_19d7ee37":"%{current} de %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Piga rate notifikasyon elèv ou yo.","done_54e3d4b6":"Fini","download_canvas_android_app_60b5595f":"Telechaje app Android Canvas la","download_canvas_ios_app_11c8651b":"Telechaje app iOS Canvas la","find_training_resources_and_more_help_f148612c":"Jwenn Resous Fòmasyon ak Plis Èd","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Jwenn kouw yo oswa matyè yo nan Tablo a...","get_your_content_online_9546ecff":"Jwenn kontni w yo sou entènèt","get_your_content_online_quickly_41fd925b":"Jwenn Kontni w Yo Sou Entènèt Byen Rapid","hello_name_cabdd4ce":"Bonjou%{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Men kèk konsèy rapid k ap ede w demare ak Canvas!","how_do_i_contact_my_instructor_184e35ed":"Kijan mwen ka kontakte pwofesè mwen?","how_do_i_download_the_student_app_4a4b8a63":"Kijan pou mwen konfigire Student App la?","how_do_i_download_the_student_app_and_get_addition_3604c207":"Kijan pou mwen telechaje Student App la epi jwenn plis èd?","how_do_i_find_my_courses_b826e4ce":"Kijan mwen kapab jwenn kou mwen yo?","learn_more_about_using_commons_and_blueprints_3df953f6":"Aprann plis sou kijan pou itilize Commons ak Blueprints.","learn_more_about_video_conferencing_5f0e76e4":"Aprann plis sou Videyo Konferans","more_video_conferencing_tools_f55088d5":"Lòt Zouti Videyo Konferans","next_40e12421":"Pwochen","not_now_afa29fa7":"Pa  Kounye a","or_in_the_courses_list_6201030":"...Oswa nan lis Kou yo.","previous_bd2ac015":"Anvan","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Pataje rapidman Kontni ak Modèl Kou yo ak Pwofesè yo","quickly_share_course_content_and_templates_with_te_c70a5eeb":"Pataje rapidman Kontni ak Modèl Kou yo ak Pwofesè yo","set_up_video_conferencing_and_other_tools_1a94a350":"Enstalasyon Videyo Konferans ak Lòt Zouti","set_up_video_conferencing_c0049abe":"Konfigire Videyo  konferans","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Òganize kou Canvas ou a nan 30 minit pou pi plis.","set_up_your_notifications_568ecf91":"Konfigire Notifikasyon Ou Yo","set_up_your_notifications_9c005279":"Konfigire Notifikasyon ou yo","star_2d27c137":"etwal","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Kòmanse yon konvèsasyon ak pwofesè w nan Bwat Resepsyon Canvas la.","start_tour_29787099":"Kòmanse Vizit","student_tour_38b735c8":"Vizit Elèv","teacher_tour_26282921":"Vizit Pwofesè","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"Pou ajoute itilizatè, kou ak enskripsyon an mas klike sou enpòtasyon SIS.","to_add_individual_courses_click_courses_c5355180":"Klike sou Kou pou ajoute kou pèsonèl yo.","to_add_individual_users_click_people_4d6de56a":"Klike sou Kontak pou ajoute kou itilizatè pèsonèl yo.","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Zouti videyo konferans yo pèmèt yon koneksyon fas a fas avèk pwofesè e elèv yo.","we_know_getting_your_courses_online_quickly_during_40424e8":"Nou konnen se yon priyorite pou mete kou w yo sou entènèt nan moman sa a. Nan ti vizit rapid sa a w ap aprann kijan pou:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"Nou konnen se yon priyorite pou nou asire transizyon enstitisyon ou an pou yon aprantisaj an liy pandan peryòd sa a. Nan ti vizit rapid sa a w ap aprann kijan pou:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"Isit la ou ka ale sou Vizit Byenvini an menm jan tou ou ka ale sou nouvo resous yo."},"hu":{"access_canvas_training_videos_and_courses_ea43173a":"Canvas képzési videók és kurzusok elérése","close_d634289d":"Bezárás","done_54e3d4b6":"Kész","next_40e12421":"Következő","previous_bd2ac015":"Előző"},"hy":{"close_d634289d":"Փակել","done_54e3d4b6":"Պատրաստ է","next_40e12421":"Հաջորդը"},"is":{"access_canvas_training_videos_and_courses_ea43173a":"Fáðu aðgang að þjálfunarmyndböndum og námskeiðum Canvas","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Opnaðu námskeiðin þín og hópa með iOS eða Android snjalltæki og finndu meiri upplýsingar í hjálparvalmyndinni.","add_people_and_courses_to_canvas_5c4bfff9":"Bætir fólki og námskeiðum við Canvas","admin_tour_36d89fbb":"Stjórnandakynning","canvas_course_tutorial_video_5205c1c1":"Kynningarmyndband fyrir Canvas námskeið","canvas_notifications_tutorial_video_79b8e768":"Kynningarmyndband fyrir Canvas tilkynningar","click_on_the_account_navigation_button_to_access_n_fbe82181":"Smelltu á reikningsyfirlitshnappinn til að opna kjörstillingar tilkynninga.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Smelltu á námskeiðayfirlitshnappinn til að opna námskeiðin þín.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Smelltu á hnappinn fyrir stjórnandaskoðun til að fá aðgang að reikningsstillingum","close_d634289d":"Loka","come_back_later_5eab7dba":"Koma aftur síðar!","current_of_totalsteps_19d7ee37":"%{current} af %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Ekki missa að tilkynningum frá nemendum þínum.","done_54e3d4b6":"Lokið","download_canvas_android_app_60b5595f":"Náðu í Canvas Android appið","download_canvas_ios_app_11c8651b":"Náðu í Canvas iOS appið","find_training_resources_and_more_help_f148612c":"Finnur þjálfunarefni og meiri hjálp","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Finndu námskeiðin þín eða námsefni á stjórnborðinu…","get_your_content_online_9546ecff":"Nærð í efnið á netinu","get_your_content_online_quickly_41fd925b":"Náðu í efnið þitt á netinu","hello_name_cabdd4ce":"Halló%{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Hérna eru nokkrar ábendingar til að koma þér af stað í Canvas!","how_do_i_contact_my_instructor_184e35ed":"Hvernig hef ég samband við kennarann minn?","how_do_i_download_the_student_app_4a4b8a63":"Hvernig næ ég í nemendaappið?","how_do_i_download_the_student_app_and_get_addition_3604c207":"Hvernig næ ég í nemendaappið og fæ meiri hjálp?","how_do_i_find_my_courses_b826e4ce":"Hvernig finn ég námskeiðin mín?","learn_more_about_using_commons_and_blueprints_3df953f6":"Lærðu meira um notkun Commons og Blueprint.","learn_more_about_video_conferencing_5f0e76e4":"Færð að vita meira um myndbandsráðstefnur","more_video_conferencing_tools_f55088d5":"Fleiri myndbandsráðstefnu verkfæri","next_40e12421":"Næsti","not_now_afa29fa7":"Ekki núna","or_in_the_courses_list_6201030":"…eða í lista yfir námskeið.","previous_bd2ac015":"Fyrri","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Deildu efni námskeiðs og forsniða með kennurum","quickly_share_course_content_and_templates_with_te_c70a5eeb":"Deilir efni námskeiðs og forsniða með kennurum","set_up_video_conferencing_and_other_tools_1a94a350":"Setur upp myndbandsráðstefnur og önnur verkfæri","set_up_video_conferencing_c0049abe":"Settu upp myndbandsráðstefnu","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Settu upp Canvas námskeið á 30 mínútum eða minna.","set_up_your_notifications_568ecf91":"Settu upp tilkynningar","set_up_your_notifications_9c005279":"Setur upp tilkynningar","star_2d27c137":"stjörnumerkja","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Byrjaðu samræður við kennarann þinn í Canvas Skilaboð.","start_tour_29787099":"Hefja kynningu","student_tour_38b735c8":"Nemandakynning","teacher_tour_26282921":"Kennarakynning","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"Til að bæta við mörgum notendum, námskeiðum, og innritunum, skaltu smella á SIS-innflutninga.","to_add_individual_courses_click_courses_c5355180":"Smelltu á námskeið til að bæta við einstökum námskeiðum.","to_add_individual_users_click_people_4d6de56a":"Smelltu á fólk til að bæta við einstökum notendum.","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Myndbandsráðstefnuverkfæri gera augliti til auglitis tengingu á milli kennara og nemenda möguleg.","we_know_getting_your_courses_online_quickly_during_40424e8":"Við vitum að á þessum tíma er það að koma námskeiðunum þínum hratt á netið í forgangi. Þessi stutta kynning sýnir þér hvernig þú:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"Við vitum að á þessum tíma er það í forgangi hjá þér að færa stofnunina yfir í netkennslu. Þessi stutta kynning sýnir þér hvernig þú:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"Þú getur farið í kynninguna hvenær sem er auk annars nýs hjálparefnis."},"it":{"access_canvas_training_videos_and_courses_ea43173a":"Accedi ai video di formazione e ai corsi Canvas","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Accedi ai corsi e ai gruppi usando qualsiasi dispositivo mobile iOS o Android e trova altre informazioni nel menu Guida.","add_people_and_courses_to_canvas_5c4bfff9":"Aggiungere le persone e i corsi a Canvas","admin_tour_36d89fbb":"Tour amministratore","canvas_course_tutorial_video_5205c1c1":"Video tutorial sui corsi Canvas","canvas_notifications_tutorial_video_79b8e768":"Video tutorial sulle notifiche Canvas","click_on_the_account_navigation_button_to_access_n_fbe82181":"Fai clic sul pulsante di navigazione account per accedere alle preferenze di notifica.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Fai clic sul pulsante di navigazione corsi per accedere ai corsi.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Fare clic sul pulsante di navigazione amministratore per accedere alle impostazioni account.","close_d634289d":"Chiudi","come_back_later_5eab7dba":"Torna più tardi!","current_of_totalsteps_19d7ee37":"%{current} di %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Non perdere le notifiche dei tuoi studenti.","done_54e3d4b6":"Fatto","download_canvas_android_app_60b5595f":"Scarica l’app Canvas per Android","download_canvas_ios_app_11c8651b":"Scarica l’app Canvas per iOS","find_training_resources_and_more_help_f148612c":"Trovare le risorse di formazione e un’ulteriore guida","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Trova i tuoi corsi o argomenti nella Dashboard...","get_your_content_online_9546ecff":"Arrivare al contenuto online","get_your_content_online_quickly_41fd925b":"Arriva al contenuto online rapidamente","hello_name_cabdd4ce":"Ciao %{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Ecco alcuni rapidi consigli per iniziare in Canvas!","how_do_i_contact_my_instructor_184e35ed":"Come posso contattare il mio istruttore?","how_do_i_download_the_student_app_4a4b8a63":"Come posso scaricare l’app Student?","how_do_i_download_the_student_app_and_get_addition_3604c207":"Come posso scaricare l’app Student e ottenere un’ulteriore guida?","how_do_i_find_my_courses_b826e4ce":"Come posso trovare i miei corsi?","learn_more_about_using_commons_and_blueprints_3df953f6":"Scopri di più sull’uso di Commons e Blueprints.","learn_more_about_video_conferencing_5f0e76e4":"Scoprire di più sulla videoconferenza","more_video_conferencing_tools_f55088d5":"Altri strumenti di videoconferenza","next_40e12421":"Successivo","not_now_afa29fa7":"Non adesso","or_in_the_courses_list_6201030":"...o nell’elenco dei Corsi.","previous_bd2ac015":"Precedente","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Condividi rapidamente il contenuto del corso e i modelli con gli insegnanti","quickly_share_course_content_and_templates_with_te_c70a5eeb":"Condividere rapidamente il contenuto del corso e i modelli con gli insegnanti","set_up_video_conferencing_and_other_tools_1a94a350":"Impostare le videoconferenze e altri strumenti","set_up_video_conferencing_c0049abe":"Imposta videoconferenze","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Imposta il tuo corso Canvas in 30 minuti o meno.","set_up_your_notifications_568ecf91":"Impostare le Notifiche","set_up_your_notifications_9c005279":"Impostare le Notifiche","star_2d27c137":"aggiungi a Speciali","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Avvia una conversazione con il tuo istruttore nella posta in arrivo Canvas.","start_tour_29787099":"Avvia tour","student_tour_38b735c8":"Tour studente","teacher_tour_26282921":"Tour insegnante","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"Per aggiungere utenti, corsi e iscrizioni in blocco, fai clic su Importazioni SIS.","to_add_individual_courses_click_courses_c5355180":"Per aggiungere corsi individuali, fai clic su Corsi.","to_add_individual_users_click_people_4d6de56a":"Per aggiungere utenti individuali, fai clic su Persone.","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Gli strumenti di videoconferenza abilitano la connessione faccia a faccia tra gli insegnanti e gli studenti.","we_know_getting_your_courses_online_quickly_during_40424e8":"Sappiamo che avere rapidamente i corsi online in questo periodo è fondamentale. Questo rapido tour ti mostrerà come:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"Sappiamo che è fondamentale eseguire la transizione del tuo istituto per l’apprendimento online durante questo periodo. Questo rapido tour ti mostrerà come:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"Da qui puoi accedere in qualsiasi momento al tour di benvenuto e alle nuove risorse."},"ja":{"access_canvas_training_videos_and_courses_ea43173a":"Canvas のトレーニングビデオとコースにアクセスする","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"iOS または Android モバイルデバイスを使ってコースおよびグループにアクセスし、ヘルプメニューからより多くの情報を見つけてください。","add_people_and_courses_to_canvas_5c4bfff9":"Canvas に人とコースを追加する","admin_tour_36d89fbb":"管理者ツアー","canvas_course_tutorial_video_5205c1c1":"Canvas コースチュートリアルビデオ","canvas_notifications_tutorial_video_79b8e768":"Canvas 通知チュートリアルビデオ","click_on_the_account_navigation_button_to_access_n_fbe82181":"アカウントナビゲーションボタンをクリックして、通知設定にアクセスします。","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"コースナビゲーションボタンをクリックして、コースにアクセスします。","click_the_admin_navigation_button_to_access_accoun_38d881bf":"管理ナビゲーションボタンをクリックして、アカウント設定にアクセスします。","close_d634289d":"閉じる","come_back_later_5eab7dba":"また後でアクセスしてください！","current_of_totalsteps_19d7ee37":"%{totalSteps}中の%{current}","don_t_miss_notifications_from_your_students_900e9e30":"受講生からの通知を見逃さないようにしましょう。","done_54e3d4b6":"完了","download_canvas_android_app_60b5595f":"Canvas Android アプリをダウンロードする","download_canvas_ios_app_11c8651b":"Canvas iOS アプリをダウンロードする","find_training_resources_and_more_help_f148612c":"トレーニングリソースと追加のヘルプ情報を見つける","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"クラスまたは科目は、ダッシュボード…","get_your_content_online_9546ecff":"コンテンツをオンライン化する","get_your_content_online_quickly_41fd925b":"コンテンツを素早くオンライン化する","hello_name_cabdd4ce":"%{name}さん、こんにちは！","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"以下は、Canvas の使用を開始するための簡単なヒントです！","how_do_i_contact_my_instructor_184e35ed":"講師にはどのように連絡すればよいですか？","how_do_i_download_the_student_app_4a4b8a63":"受講生アプリはどのようにダウンロードするのですか？","how_do_i_download_the_student_app_and_get_addition_3604c207":"受講生アプリをダウンロードして、追加のサポートを得るにはどうすればよいですか？","how_do_i_find_my_courses_b826e4ce":"コースはどのように見つけるのですか？","learn_more_about_using_commons_and_blueprints_3df953f6":"Commons と青写真の使用に関する詳細について学びます。","learn_more_about_video_conferencing_5f0e76e4":"ビデオ会議の詳細について学ぶ","more_video_conferencing_tools_f55088d5":"追加のビデオ会議ツール","next_40e12421":"次","not_now_afa29fa7":"今は実行しない","or_in_the_courses_list_6201030":"…またはコースリストで見つけてください。","previous_bd2ac015":"前へ","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"コースコンテンツとテンプレートを講師と素早く共有する","quickly_share_course_content_and_templates_with_te_c70a5eeb":"コースコンテンツとテンプレートを講師と素早く共有する","set_up_video_conferencing_and_other_tools_1a94a350":"ビデオ会議とその他ツールをセットアップする","set_up_video_conferencing_c0049abe":"ビデオ会議をセットアップする","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Canvas コースを 30 分以下でセットアップしましょう。","set_up_your_notifications_568ecf91":"通知をセットアップする","set_up_your_notifications_9c005279":"通知をセットアップする","star_2d27c137":"スター","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Canvas 受信トレイで講師との会話を始めましょう。","start_tour_29787099":"ツアーを開始する","student_tour_38b735c8":"受講生ツアー","teacher_tour_26282921":"講師ツアー","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"ユーザー、コース、および登録を一括で追加するには、「SIS インポート」をクリックします。","to_add_individual_courses_click_courses_c5355180":"個々のコースを追加するには、「コース」をクリックします。","to_add_individual_users_click_people_4d6de56a":"個々のユーザーを追加するには、「人」をクリックします。","video_conferencing_tools_enable_face_to_face_conne_144420a5":"ビデオ会議ツールは、講師と受講者間における直接顔を合わせたつながりを可能にします。","we_know_getting_your_courses_online_quickly_during_40424e8":"Canvas では、この時期にコースを素早くオンライン化することが最優先事項であることを理解しています。このクイックツアーでは、以下を実行する方法について説明します。","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"Canvas では、この時期に学校をオンライン学習に移行させることが最優先事項であることを理解しています。このクイックツアーでは、以下を実行する方法について説明します。","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"ウェルカムツアーはもちろん、他の新しいリソースにも、いつでもアクセスすることができます。"},"ko":{"close_d634289d":"닫기","next_40e12421":"다음"},"mi":{"access_canvas_training_videos_and_courses_ea43173a":"Whakauru Canvas whakako ataata me nga akoranga","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Whakauru i ō ākoranga me nga rōpu e mahai ana IOS me Android taputapu haerere me te rapu pūrongo atu i roto i te Āwhina tāhua","add_people_and_courses_to_canvas_5c4bfff9":"Tāpiri Tāngata me ngā Akoranga ki Canvas","admin_tour_36d89fbb":"Whakahaere Haerenga","canvas_course_tutorial_video_5205c1c1":"Canvas Akoranga Ako Ataata","canvas_notifications_tutorial_video_79b8e768":"Canvas Ngā Whakamōhiotanga Ako Ataata","click_on_the_account_navigation_button_to_access_n_fbe82181":"Pāwhiri i runga i te pūkete whakatere pātene ki te whakauru whakamōhio hiahiatanga","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Pāwhiri i runga i te akoranga whakatere pātene ki te whakauru whakamōhio hiahiatangai ō akoranga","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Pāwhiri te whakahaere whakatere pātene ki te whakauru pūkete tautuhinga.","close_d634289d":"Katia","come_back_later_5eab7dba":"Hoki mai a muri atu","current_of_totalsteps_19d7ee37":"%{current} ō %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Kaua e ngaro ngā whakamōhiotanga mai i ō ākonga.","done_54e3d4b6":"Kua mahia","download_canvas_android_app_60b5595f":"Tikiake Canvas Android taupānga","download_canvas_ios_app_11c8651b":"Tikiake Canvas iOS taupānga","find_training_resources_and_more_help_f148612c":"Kimihia Whakaako Rauemi me te Āwhina Nui Atu","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Kimihia ō karaihe me ngā kaupapa rānei i runga i te Papatohu","get_your_content_online_9546ecff":"Tīkina tō Ihirangi i runga i te ipurangi","get_your_content_online_quickly_41fd925b":"Tīkina Tō Ihirangi i runga i te ipurangi Tere Tonu","hello_name_cabdd4ce":"Kia ora %{name}","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Ānei he tohutohu tere ki te tīmata i rotot i Canvas","how_do_i_contact_my_instructor_184e35ed":"Me pehea e whakapā ai e ahau taku kaitohutohu?","how_do_i_download_the_student_app_4a4b8a63":"Me pehea e tikiake e ahau te Ākonga taupānga?","how_do_i_download_the_student_app_and_get_addition_3604c207":"Me pehea e tikiake ai ahau i te Ākonga Taupānga me te tiki āwhina atu.","how_do_i_find_my_courses_b826e4ce":"Me pehea e kitea ai e ahau taku akoranga?","learn_more_about_using_commons_and_blueprints_3df953f6":"Ako anō i te mahi ngā Noa me ngā Blueprints","learn_more_about_video_conferencing_5f0e76e4":"Ako nui atu mo te ataata huihuinga","more_video_conferencing_tools_f55088d5":"Nui atu Ataata Huihuinga Taputapu","next_40e12421":"E haere ake nei","not_now_afa29fa7":"Kaore i tēnei wā","or_in_the_courses_list_6201030":"... ara i roto i te rārangi Ākoranga rānei","previous_bd2ac015":"ō muri","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Tere teTuari Ihirangi Akoranga me ngā Tauira ki ngā Kaiako","quickly_share_course_content_and_templates_with_te_c70a5eeb":"Tere te tuari Ihirangi Akoranga me ngā Tauira ki ngā Kaiako","set_up_video_conferencing_and_other_tools_1a94a350":"Whakatau Ataata Huihuinga me ētahi atu Taonga","set_up_video_conferencing_c0049abe":"Whakatau Ataata Huihuinga","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Whakatau tō Canvas akornaga i roto i te 30 meniti iti ake rānei","set_up_your_notifications_568ecf91":"Whakatau i Ō Whakamōhiotanga","set_up_your_notifications_9c005279":"Whakatau i ō Whakamōhiotanga","star_2d27c137":"whetū","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Tīmata he kōrerorero me tō kaitohutohu i roto i te Canvas pouakauru.","start_tour_29787099":"Tīmata te Haerenga","student_tour_38b735c8":"Ākonga Haerenga","teacher_tour_26282921":"Kaiako Haerenga","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"Ki te tāpiri ngā kaiwhakamahi nui atu. ngā akoranga, ngā whakaurutanga, pāwhiri SIS Kawemai","to_add_individual_courses_click_courses_c5355180":"Ki te tāpiri ngā akoranga takitahi, pāwhiri ngā Akoranga","to_add_individual_users_click_people_4d6de56a":"Ki te tāpiri ngā kaiwhakamahi takitahi, pāwhiri Tangata","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Ngā ataata huihuinga taonga kanohi ki te kanohi hononga i waenganui kaiako me nga ākonga","we_know_getting_your_courses_online_quickly_during_40424e8":"E mōhio ana mātou t etiki i ō akoranga i rung a i te ipurangi tere tonu he kaupapa matua tēnei i tēnei wā. Ko tēnei haerenga tere ka whākātu ki a koe te","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"E mōhio ana mātou he mea nui te whakawhiti ki tō wharenohanga mo ngā ako i runga i te iopurangi i tēnei wā Ko tēnei haerenga tere ka whākātu ki a koe te","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"Ka taea e koe te whakauru i te Nau Mai Haerenga i kōnei i ngā wā katoa me ētahi atu rauemi hou"},"nb":{"access_canvas_training_videos_and_courses_ea43173a":"Tilgang til Canvas opplæringsvideoer og emner","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Få tilgang til emnene og gruppene dine ved hjelp av en iOS eller Android mobilenhet og finn mer informasjon i Hjelpemenyen.","add_people_and_courses_to_canvas_5c4bfff9":"Legge til personer og emner på Canvas","admin_tour_36d89fbb":"Adminrundtur","canvas_course_tutorial_video_5205c1c1":"Opplæringsvideo for Canvas-emne","canvas_notifications_tutorial_video_79b8e768":"Opplæringsvideo for Canvas-varslinger","click_on_the_account_navigation_button_to_access_n_fbe82181":"Klikk på kontonavigering-knappen for å få tilgang til varslingsinnstillinger.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Klikk på emnenavigering-knappen for å få tilgang til emnene dine.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Klikk på admin-navigasjonsknappen for å gå til kontoinnstillinger.","close_d634289d":"Lukk","come_back_later_5eab7dba":"Kom igjen senere!","current_of_totalsteps_19d7ee37":"%{current} av %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Ikke gå glipp av varslinger fra studentene dine.","done_54e3d4b6":"Ferdig","download_canvas_android_app_60b5595f":"Last ned Canvas Android-applikasjonen","download_canvas_ios_app_11c8651b":"Last ned Canvas iOS-applikasjonen","find_training_resources_and_more_help_f148612c":"Finne opplæringsressurser og mer hjelp","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Finn fagene eller emnene dine på hovedmenyen...","get_your_content_online_9546ecff":"Få innholdet ditt på nett","get_your_content_online_quickly_41fd925b":"Få innholdet ditt raskt på nett","hello_name_cabdd4ce":"Hei%{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Her er noen raske tips for å komme i gang med Canvas!","how_do_i_contact_my_instructor_184e35ed":"Hvordan kontakter jeg instruktøren min?","how_do_i_download_the_student_app_4a4b8a63":"Hvordan laster jeg ned studentapplikasjonen?","how_do_i_download_the_student_app_and_get_addition_3604c207":"Hvordan laster jeg ned studentapplikasjonen og får ekstra hjelp?","how_do_i_find_my_courses_b826e4ce":"Hvordan finner jeg emnene mine?","learn_more_about_using_commons_and_blueprints_3df953f6":"Lær mer om hvordan du bruker mal og blueprint.","learn_more_about_video_conferencing_5f0e76e4":"Lære mer om videokonferanser","more_video_conferencing_tools_f55088d5":"Flere videokonferanseverktøy","next_40e12421":"Neste","not_now_afa29fa7":"Ikke nå","or_in_the_courses_list_6201030":"...eller i emnelisten.","previous_bd2ac015":"Forrige","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Del emneinnhold og maler raskt med lærere","quickly_share_course_content_and_templates_with_te_c70a5eeb":"Raskt dele emneinnhold og maler med lærere","set_up_video_conferencing_and_other_tools_1a94a350":"Sette opp videokonferanser og andre verktøy","set_up_video_conferencing_c0049abe":"Sett opp videokonferanse.","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Sett opp Canvas-emnet ditt på 30 minutter eller mindre.","set_up_your_notifications_568ecf91":"Sette opp varslingene dine","set_up_your_notifications_9c005279":"Sette opp varslingene dine","star_2d27c137":"stjerne","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Start en samtale med instruktøren din i Canvas-innboksen.","start_tour_29787099":"Start rundtur","student_tour_38b735c8":"Studentrundtur","teacher_tour_26282921":"Lærerrundtur","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"For å legge til brukere i grupper, og påmeldinger, klikker du SIS-import.","to_add_individual_courses_click_courses_c5355180":"For å legge til individuelle emner, klikker du på Emner.","to_add_individual_users_click_people_4d6de56a":"For å legge til individuelle brukere, klikker du på Personer","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Videokonferanseverktøyene gjør det mulig å ha forbindelse ansikt til ansikt mellom lærere og studenter.","we_know_getting_your_courses_online_quickly_during_40424e8":"Vi vet det er en prioritet å få emnene dine raskt på nett i disse tider. Denne raske rundturen vil vise deg hvordan du kan:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"Vi vet det er en prioritet å overføre institusjonen din for læring på nett i disse tider. Denne raske rundturen vil vise deg hvordan du kan:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"Du kan få tilgang til rundturen her når som helst, samt andre nye ressurser."},"nb-x-k12":{"access_canvas_training_videos_and_courses_ea43173a":"Tilgang til Canvas opplæringsvideoer og fag","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Få tilgang til fagene og gruppene dine ved hjelp av en iOS eller Android mobilenhet og finn mer informasjon i Hjelpemenyen.","add_people_and_courses_to_canvas_5c4bfff9":"Legge til deltakere og fag på Canvas","admin_tour_36d89fbb":"Adminrundtur","canvas_course_tutorial_video_5205c1c1":"Opplæringsvideo for Canvas-fag","canvas_notifications_tutorial_video_79b8e768":"Opplæringsvideo for Canvas-varslinger","click_on_the_account_navigation_button_to_access_n_fbe82181":"Klikk på kontonavigering-knappen for å få tilgang til varslingsinnstillinger.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Klikk på fagnavigering-knappen for å få tilgang til fagene dine.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Klikk på admin-navigasjonsknappen for å gå til kontoinnstillinger.","close_d634289d":"Lukk","come_back_later_5eab7dba":"Kom igjen senere!","current_of_totalsteps_19d7ee37":"%{current} av %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Ikke gå glipp av varslinger fra elevene dine.","done_54e3d4b6":"Ferdig","download_canvas_android_app_60b5595f":"Last ned Canvas Android-applikasjonen","download_canvas_ios_app_11c8651b":"Last ned Canvas iOS-applikasjonen","find_training_resources_and_more_help_f148612c":"Finne opplæringsressurser og mer hjelp","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Finn fagene eller emnene dine på Oversikt...","get_your_content_online_9546ecff":"Få innholdet ditt på nett","get_your_content_online_quickly_41fd925b":"Få innholdet ditt raskt på nett","hello_name_cabdd4ce":"Hei%{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Her er noen raske tips for å komme i gang med Canvas!","how_do_i_contact_my_instructor_184e35ed":"Hvordan kontakter jeg instruktøren min?","how_do_i_download_the_student_app_4a4b8a63":"Hvordan laster jeg ned Elev-appen?","how_do_i_download_the_student_app_and_get_addition_3604c207":"Hvordan laster jeg ned Elev-appen og får ekstra hjelp?","how_do_i_find_my_courses_b826e4ce":"Hvordan finner jeg fagene mine?","learn_more_about_using_commons_and_blueprints_3df953f6":"Lær mer om hvordan du bruker mal og blueprint.","learn_more_about_video_conferencing_5f0e76e4":"Lære mer om videokonferanser","more_video_conferencing_tools_f55088d5":"Flere videokonferanseverktøy","next_40e12421":"Neste","not_now_afa29fa7":"Ikke nå","or_in_the_courses_list_6201030":"...eller i faglisten.","previous_bd2ac015":"Forrige","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Del faginnhold og maler raskt med lærere","quickly_share_course_content_and_templates_with_te_c70a5eeb":"Raskt dele faginnhold og maler med lærere","set_up_video_conferencing_and_other_tools_1a94a350":"Sette opp videokonferanser og andre verktøy","set_up_video_conferencing_c0049abe":"Sett opp videokonferanse.","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Sett opp Canvas-fag ditt på 30 minutter eller mindre.","set_up_your_notifications_568ecf91":"Sette opp varslingene dine","set_up_your_notifications_9c005279":"Sette opp varslingene dine","star_2d27c137":"stjerne","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Start en samtale med instruktøren din i Canvas-innboksen.","start_tour_29787099":"Start rundtur","student_tour_38b735c8":"Elevrundtur","teacher_tour_26282921":"Lærerrundtur","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"For å legge til brukere i grupper, fag, og påmeldinger, klikker du SIS-import.","to_add_individual_courses_click_courses_c5355180":"For å legge til individuelle fag, klikker du på Fag.","to_add_individual_users_click_people_4d6de56a":"For å legge til individuelle brukere, klikker du på Deltakere","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Videokonferanseverktøyene gjør det mulig å ha forbindelse ansikt til ansikt mellom lærere og elever.","we_know_getting_your_courses_online_quickly_during_40424e8":"Vi vet det er en prioritet å få fagene dine raskt på nett i disse tider. Denne raske rundturen vil vise deg hvordan du kan:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"Vi vet det er en prioritet å overføre institusjonen din for læring på nett i disse tider. Denne raske rundturen vil vise deg hvordan du kan:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"Du kan få tilgang til rundturen her når som helst, samt andre nye ressurser."},"nl":{"access_canvas_training_videos_and_courses_ea43173a":"Toegang tot Canvas-trainingsvideo’s en -cursussen","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Open je cursussen en groepen met een mobiel iOS- of Android-apparaat en ga voor meer informatie naar het Help-menu.","add_people_and_courses_to_canvas_5c4bfff9":"Personen en cursussen toevoegen aan Canvas","admin_tour_36d89fbb":"Rondleiding voor beheerder","canvas_course_tutorial_video_5205c1c1":"Instructievideo over Canvas-cursussen","canvas_notifications_tutorial_video_79b8e768":"Instructievideo over meldingen in Canvas","click_on_the_account_navigation_button_to_access_n_fbe82181":"Klik op de knop voor accountnavigatie voor toegang tot meldingsvoorkeuren.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Klik op de knop voor cursusnavigatie voor toegang tot je cursussen.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Klik op de knop voor beheerdersnavigatie voor toegang tot accountinstellingen.","close_d634289d":"Sluiten","come_back_later_5eab7dba":"Kom later terug!","current_of_totalsteps_19d7ee37":"%{current} van %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Loop geen meldingen van je cursisten mis.","done_54e3d4b6":"Gereed","download_canvas_android_app_60b5595f":"Download de Canvas Android-app","download_canvas_ios_app_11c8651b":"Download de Canvas iOS-app","find_training_resources_and_more_help_f148612c":"Trainingsbronnen en andere hulpbronnen zoeken","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Vind je lessen of taken in het Dashboard...","get_your_content_online_9546ecff":"Je content online zetten","get_your_content_online_quickly_41fd925b":"Je content snel online zetten","hello_name_cabdd4ce":"Hallo %{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Hier zijn enkele tips om snel aan de slag te gaan met Canvas!","how_do_i_contact_my_instructor_184e35ed":"Hoe neem ik contact op met mijn cursusleider?","how_do_i_download_the_student_app_4a4b8a63":"Hoe kan ik de Student App downloaden?","how_do_i_download_the_student_app_and_get_addition_3604c207":"Hoe kan ik de Student App downloaden en extra hulp krijgen?","how_do_i_find_my_courses_b826e4ce":"Hoe vind ik mijn cursussen?","learn_more_about_using_commons_and_blueprints_3df953f6":"Meer informatie over gebruik van Commons en blauwdrukken.","learn_more_about_video_conferencing_5f0e76e4":"Meer informatie over videoconferencing","more_video_conferencing_tools_f55088d5":"Meer tools voor videoconferencing","next_40e12421":"Volgende","not_now_afa29fa7":"Niet nu","or_in_the_courses_list_6201030":"...of in de lijst Cursussen.","previous_bd2ac015":"Vorige","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Cursusinhoud en -sjablonen snel delen met cursusleiders","quickly_share_course_content_and_templates_with_te_c70a5eeb":"Cursusinhoud en -sjablonen snel delen met cursusleiders","set_up_video_conferencing_and_other_tools_1a94a350":"Videoconferencing- en andere tools installeren","set_up_video_conferencing_c0049abe":"Videoconferencing instellen","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Stel je Canvas-cursus in 30 minuten of minder in.","set_up_your_notifications_568ecf91":"Je meldingen instellen","set_up_your_notifications_9c005279":"Je meldingen instellen","star_2d27c137":"ster","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Begin een gesprek met je cursusleider in de Canvas-inbox.","start_tour_29787099":"Rondleiding starten","student_tour_38b735c8":"Rondleiding voor cursist","teacher_tour_26282921":"Rondleiding voor cursusleider","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"Klik op SIS-imports om gebruikers, cursussen en inschrijvingen in bulkvorm toe te voegen.","to_add_individual_courses_click_courses_c5355180":"Klik op Cursussen om afzonderlijke cursussen toe te voegen.","to_add_individual_users_click_people_4d6de56a":"Klik op Personen om afzonderlijke personen toe te voegen.","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Met tools voor videoconferencing kunnen directe beeldverbindingen tussen cursusleiders en cursisten worden ingesteld.","we_know_getting_your_courses_online_quickly_during_40424e8":"We weten dat het alle prioriteit heeft om in deze tijden je cursussen snel online te kunnen zetten. Deze korte rondleiding laat zien hoe je het volgende kunt doen:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"We weten dat de overstap van je organisatie naar online leren nu alle prioriteit heeft. Deze korte rondleiding laat zien hoe je het volgende kunt doen:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"Je kunt de Rondleiding en andere nieuwe resources op elk gewenst moment hier openen."},"nn":{"access_canvas_training_videos_and_courses_ea43173a":"Gå til Canvas sine opplæringsvideoar og -emne","admin_tour_36d89fbb":"Adminvegvisar","click_on_the_account_navigation_button_to_access_n_fbe82181":"Klikk på kontonavigering for å få tilgang til varslingsvala.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Klikk på knappen for emne for å sjå emna dine.","close_d634289d":"Lukk","done_54e3d4b6":"Fullført","download_canvas_android_app_60b5595f":"Last ned Canvas-app for Android","get_your_content_online_9546ecff":"Få innhaldet ditt på nett","get_your_content_online_quickly_41fd925b":"Få innhaldet ditt raskt på nett","hello_name_cabdd4ce":"Hei %{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Her er nokre tips til korleis du kan komme i gang med Canvas! ","how_do_i_contact_my_instructor_184e35ed":"Korleis tar eg kontakt med faglærar?","how_do_i_download_the_student_app_4a4b8a63":"Korleis lastar eg ned studentappen?","how_do_i_download_the_student_app_and_get_addition_3604c207":"Korleis lastar eg ned studentappen for få meir hjelp? ","how_do_i_find_my_courses_b826e4ce":"Korleis finn eg emna mine?","learn_more_about_using_commons_and_blueprints_3df953f6":"Lær meir om Commons og Blueprintemne.","next_40e12421":"Neste","previous_bd2ac015":"Førre","set_up_video_conferencing_and_other_tools_1a94a350":"Sett opp videomøter og andre verktøy","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Set opp Canvas-emnet på mindre enn 30 minutt.","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Start ein samtale med faglæraren din i meldingar.","start_tour_29787099":"Start turen","student_tour_38b735c8":"Studentvegvisar","teacher_tour_26282921":"Faglærarvegvisar","to_add_individual_courses_click_courses_c5355180":"For å legge til individuelle emne, klikk på Emne.","to_add_individual_users_click_people_4d6de56a":"For å legge til individuelle brukarar klikker du på Personar.","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"Du får tilgang til \\"Welcome Tour\\" og andre nye funksjonar her."},"pl":{"access_canvas_training_videos_and_courses_ea43173a":"Uzyskaj dostęp do nagrań szkoleniowych i kursów Canvas","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Uzyskaj dostęp do kursów i grup, korzystając z urządzenia przenośnego z systemem iOS lub Android, oraz znajdź więcej informacji w menu Pomoc.","add_people_and_courses_to_canvas_5c4bfff9":"Dodawać osoby i kursy do Canvas","admin_tour_36d89fbb":"Samouczek dla administratora","canvas_course_tutorial_video_5205c1c1":"Samouczek wideo dot. kursów w Canvas","canvas_notifications_tutorial_video_79b8e768":"Samouczek wideo dot. powiadomień w Canvas","click_on_the_account_navigation_button_to_access_n_fbe82181":"Kliknij przycisk nawigacji w koncie, aby uzyskać dostęp do preferencji powiadomień.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Kliknij przycisk nawigacji w kursach, aby uzyskać dostęp do kursów.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Kliknij przycisk nawigacji administratora, aby uzyskać dostęp do ustawień konta.","close_d634289d":"Zamknij","come_back_later_5eab7dba":"Powróć później!","current_of_totalsteps_19d7ee37":"%{current} z %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Nie przegap powiadomień od uczestników szkoleń.","done_54e3d4b6":"Gotowe","download_canvas_android_app_60b5595f":"Pobierz aplikację Canvas na system Android","download_canvas_ios_app_11c8651b":"Pobierz aplikację Canvas na system iOS","find_training_resources_and_more_help_f148612c":"Wyszukać materiały do nauki i uzyskać więcej pomocy","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Znajdź swoje klasy lub przedmioty w Panelu nawigacyjnym...","get_your_content_online_9546ecff":"Przenieś zawartość kursów online","get_your_content_online_quickly_41fd925b":"Przenieś szybko zawartość kursów online","hello_name_cabdd4ce":"Witaj%{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Oto niektóre wskazówki, które ułatwią Ci korzystanie z Canvas!","how_do_i_contact_my_instructor_184e35ed":"Jak skontaktować się z instruktorem?","how_do_i_download_the_student_app_4a4b8a63":"Jak pobrać aplikację Student?","how_do_i_download_the_student_app_and_get_addition_3604c207":"Jak pobrać aplikację Student i uzyskać dodatkową pomoc?","how_do_i_find_my_courses_b826e4ce":"Jak odnaleźć swoje kursy?","learn_more_about_using_commons_and_blueprints_3df953f6":"Uzyskaj więcej informacji na temat zasobów Commons i kursów Blueprint.","learn_more_about_video_conferencing_5f0e76e4":"Uzyskaj więcej informacji na temat wideokonferencji","more_video_conferencing_tools_f55088d5":"Więcej narzędzi do wideokonferencji","next_40e12421":"Następny","not_now_afa29fa7":"Nie teraz","or_in_the_courses_list_6201030":"...lub na liście kursów.","previous_bd2ac015":"Poprzedni","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Szybko udostępniać zawartość kursu i szablony nauczycielom","quickly_share_course_content_and_templates_with_te_c70a5eeb":"Szybko udostępniać zawartość kursu i szablony nauczycielom","set_up_video_conferencing_and_other_tools_1a94a350":"Skonfigurować wideokonferencję i inne narzędzia","set_up_video_conferencing_c0049abe":"Skonfiguruj wideokonferencję","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Skonfiguruj kurs Canvas w niecałe 30 minut.","set_up_your_notifications_568ecf91":"Skonfiguruj powiadomienia","set_up_your_notifications_9c005279":"Skonfiguruj powiadomienia","star_2d27c137":"gwiazdka","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Rozpocznij rozmowę z instruktorem w Skrzynce odbiorczej Canvas.","start_tour_29787099":"Rozpocznij samouczek","student_tour_38b735c8":"Samouczek dla uczestników","teacher_tour_26282921":"Samouczek dla nauczycieli","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"Aby dodać wielu użytkowników, kursy i zapisy, kliknij Importy SIS.","to_add_individual_courses_click_courses_c5355180":"Aby dodać poszczególne kursy, kliknij Kursy.","to_add_individual_users_click_people_4d6de56a":"Aby dodać poszczególnych użytkowników, kliknij Ludzie.","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Narzędzia do wideokonferencji umożliwiają interakcję nauczycieli z uczestnikami szkoleń.","we_know_getting_your_courses_online_quickly_during_40424e8":"Wiemy, że szybkie przeniesienie kursów online jest teraz priorytetem. Dzięki temu krótkiemu samouczkowi dowiesz się, jak:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"Wiemy, że przejście do nauki online jest obecnie dla Twojej instytucji priorytetem. Dzięki temu krótkiemu samouczkowi dowiesz się, jak:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"Tutaj możesz w dowolnej chwili uzyskać dostęp do samouczka, a także do innych nowych zasobów."},"pt":{"access_canvas_training_videos_and_courses_ea43173a":"Aceder a vídeos e disciplinas de formação no Canvas","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Aceda às suas disciplinas e grupos utilizando qualquer dispositivo móvel iOS ou Android e encontre mais informações no menu Ajuda.","add_people_and_courses_to_canvas_5c4bfff9":"Adicionar Pessoas e Disciplinas ao Canvas","admin_tour_36d89fbb":"Visita Administrativa","canvas_course_tutorial_video_5205c1c1":"Vídeo Tutorial da Disciplina no Canvas","canvas_notifications_tutorial_video_79b8e768":"Vídeo Tutorial de Notificações no Canvas","click_on_the_account_navigation_button_to_access_n_fbe82181":"Clicar no botão de navegação da conta para aceder às preferências de notificação.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Clicar no botão de navegação dos cursos para aceder aos seus cursos.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Clique no botão de navegação administrativa para aceder às definições da conta.","close_d634289d":"Fechar","come_back_later_5eab7dba":"Volte mais tarde!","current_of_totalsteps_19d7ee37":"%{current} de %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Não perca as notificações dos seus alunos.","done_54e3d4b6":"Concluído","download_canvas_android_app_60b5595f":"Descarregar a aplicação Android Canvas","download_canvas_ios_app_11c8651b":"Descarregar a aplicação Canvas iOS","find_training_resources_and_more_help_f148612c":"Encontrar Recursos de Formação e Mais Ajuda","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Encontre as suas aulas ou disciplinas no Painel...","get_your_content_online_9546ecff":"Colocar o seu conteúdo online","get_your_content_online_quickly_41fd925b":"Obter o seu conteúdo online de forma rápida","hello_name_cabdd4ce":"Olá%{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Aqui ficam algumas dicas rápidas para começar no Canvas!","how_do_i_contact_my_instructor_184e35ed":"Como posso contactar o meu instrutor?","how_do_i_download_the_student_app_4a4b8a63":"Como descarrego a aplicação para alunos?","how_do_i_download_the_student_app_and_get_addition_3604c207":"Como faço para descarregar a aplicação do aluno e obter ajuda adicional?","how_do_i_find_my_courses_b826e4ce":"Como posso encontrar as minhas disciplinas?","learn_more_about_using_commons_and_blueprints_3df953f6":"Saiba mais sobre a utilização de Commons e Blueprints.","learn_more_about_video_conferencing_5f0e76e4":"Saiba mais sobre a Videoconferência","more_video_conferencing_tools_f55088d5":"Mais ferramentas de videoconferência","next_40e12421":"Próximo","not_now_afa29fa7":"Agora não","or_in_the_courses_list_6201030":"...ou na lista de Disciplinas.","previous_bd2ac015":"Anterior","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Partilhe rapidamente o conteúdo e os modelos das disciplinas com os professores","quickly_share_course_content_and_templates_with_te_c70a5eeb":"Partilhar rapidamente os Conteúdos e Modelos da Disciplina com os Professores","set_up_video_conferencing_and_other_tools_1a94a350":"Configurar Videoconferência e Outras Ferramentas","set_up_video_conferencing_c0049abe":"Configure a Videoconferência","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Configurar a sua disciplina Canvas em 30 minutos ou menos.","set_up_your_notifications_568ecf91":"Preparar as suas Notificações","set_up_your_notifications_9c005279":"Preparar as suas Notificações","star_2d27c137":"estrela","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Comece uma conversa com o seu instrutor na Caixa de Entrada do Canvas.","start_tour_29787099":"Iniciar Visita","student_tour_38b735c8":"Visita de Aluno","teacher_tour_26282921":"Visita do Professor","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"Para adicionar utilizadores em massa, disciplinas e inscrições, clique em Importações SIS.","to_add_individual_courses_click_courses_c5355180":"Para adicionar disciplinas individuais, clique em Disciplinas.","to_add_individual_users_click_people_4d6de56a":"Para adicionar utilizadores individuais, clique em Pessoas.","video_conferencing_tools_enable_face_to_face_conne_144420a5":"As ferramentas de videoconferência permitem uma ligação presencial entre professores e alunos.","we_know_getting_your_courses_online_quickly_during_40424e8":"Sabemos que colocar as suas disciplinas online rapidamente durante este tempo é prioritário. Esta visita rápida irá mostrar-lhe como fazê-lo:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"Sabemos que a transição da sua instituição para a aprendizagem online é uma prioridade durante este período. Esta visita rápida irá mostrar-lhe como fazê-lo:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"Pode aceder ao Welcome Tour aqui em qualquer altura, bem como a outros novos recursos."},"pt-BR":{"access_canvas_training_videos_and_courses_ea43173a":"Acessar vídeos de treinamento e cursos do Canvas","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Acesse seus cursos e grupos usando qualquer dispositivo móvel com iOS ou Android e encontre mais informações no menu de Ajuda.","add_people_and_courses_to_canvas_5c4bfff9":"Adicionar pessoas e cursos ao Canvas","admin_tour_36d89fbb":"Tour do admin","canvas_course_tutorial_video_5205c1c1":"Vídeo tutorial de cursos do Canvas","canvas_notifications_tutorial_video_79b8e768":"Vídeo tutorial de notificações do Canvas","click_on_the_account_navigation_button_to_access_n_fbe82181":"Clique no botão de navegação da conta para acessar as preferências de notificação.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Clique no botão de navegação dos cursos para acessar os seus cursos.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Clique no botão de navegação do admin para acessar as configurações da conta.","close_d634289d":"Fechar","come_back_later_5eab7dba":"Volte mais tarde!","current_of_totalsteps_19d7ee37":"%{current} de %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Não perca notificações dos seus alunos.","done_54e3d4b6":"Feito","download_canvas_android_app_60b5595f":"Baixar o app Canvas Android","download_canvas_ios_app_11c8651b":"Baixar o app Canvas iOS","find_training_resources_and_more_help_f148612c":"Encontrar recursos de treinamento e mais ajuda","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Encontre suas aulas ou matérias no Painel...","get_your_content_online_9546ecff":"Deixe seu conteúdo on-line","get_your_content_online_quickly_41fd925b":"Deixe seu conteúdo on-line rapidamente","hello_name_cabdd4ce":"Olá%{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Aqui estão algumas dicas rápidas para começar no Canvas!","how_do_i_contact_my_instructor_184e35ed":"Como encontrar meu instrutor?","how_do_i_download_the_student_app_4a4b8a63":"Como baixar o Student App?","how_do_i_download_the_student_app_and_get_addition_3604c207":"Como baixar o Student App e obter ajuda adicional?","how_do_i_find_my_courses_b826e4ce":"Como encontrar meus cursos?","learn_more_about_using_commons_and_blueprints_3df953f6":"Saiba mais sobre o uso do Commons e Blueprints.","learn_more_about_video_conferencing_5f0e76e4":"Saiba mais sobre conferência de vídeo","more_video_conferencing_tools_f55088d5":"Mais ferramentas de conferência de vídeo","next_40e12421":"Próximo","not_now_afa29fa7":"Agora não","or_in_the_courses_list_6201030":"... ou na lista de Cursos.","previous_bd2ac015":"Anterior","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Rapidamente compartilhar conteúdo do curso e modelos com professores","quickly_share_course_content_and_templates_with_te_c70a5eeb":"Rapidamente compartilhar conteúdo do curso e modelos com professores","set_up_video_conferencing_and_other_tools_1a94a350":"Configurar conferência de vídeo e outras ferramentas","set_up_video_conferencing_c0049abe":"Configurar conferência de vídeo","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Configure seu curso do Canvas em 30 minutos ou menos.","set_up_your_notifications_568ecf91":"Configurar suas notificações","set_up_your_notifications_9c005279":"Configurar suas notificações","star_2d27c137":"favoritar","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Inicie uma conversa com o seu instrutor no Canvas Inbox.","start_tour_29787099":"Iniciar tour","student_tour_38b735c8":"Tour do aluno","teacher_tour_26282921":"Tour do professor","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"Para adicionar usuários, cursos e matrículas em massa, clique em Importações de SIS.","to_add_individual_courses_click_courses_c5355180":"Para adicionar cursos individuais, clique em Cursos.","to_add_individual_users_click_people_4d6de56a":"Para adicionar usuários individuais, clique em Pessoas.","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Ferramentas de conferência de vídeo habilitam conexão pessoal entre professores e alunos.","we_know_getting_your_courses_online_quickly_during_40424e8":"Sabemos que deixar os seus cursos on-line rapidamente durante este momento é prioridade. Este tour rápido mostrará como:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"Sabemos que é prioridade fazer a transição da sua instituição para o aprendizado on-line durante este momento. Este tour rápido mostrará como:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"É possível acessar o Tour de Boas-Vindas aqui em qualquer momento, bem como outros recursos novos."},"ru":{"access_canvas_training_videos_and_courses_ea43173a":"Доступ к обучающим видеоматериалам и курсам Canvas","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Осуществляйте доступ к своим курсам и группам с помощью любого мобильного устройства на базе iOS или Android. Дополнительную информацию можно найти в меню \\"Справка\\".","add_people_and_courses_to_canvas_5c4bfff9":"Добавлять людей и курсы в Canvas","admin_tour_36d89fbb":"Тур для администратора","canvas_course_tutorial_video_5205c1c1":"Учебное видео о курсах Canvas","canvas_notifications_tutorial_video_79b8e768":"Учебное видео об уведомлениях в Canvas","click_on_the_account_navigation_button_to_access_n_fbe82181":"Нажмите на навигационную кнопку учетной записи для получения доступа к настройкам уведомлений.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Нажмите на кнопку просмотра курсов для получения доступа к своим курсам.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Для доступа к настройкам учетной записи нажмите навигационную кнопку администратора.","close_d634289d":"Закрыть","come_back_later_5eab7dba":"Вернуться позже!","current_of_totalsteps_19d7ee37":"%{current} из %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Не пропустите уведомления от своих студентов.","done_54e3d4b6":"Готово","download_canvas_android_app_60b5595f":"Скачать приложение Canvas для Android","download_canvas_ios_app_11c8651b":"Скачать приложение Canvas для iOS","find_training_resources_and_more_help_f148612c":"Найти учебные средства и дополнительную помощь","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Найдите свои классы или предметы на панели инструментов...","get_your_content_online_9546ecff":"Получить доступ к своему контенту онлайн","get_your_content_online_quickly_41fd925b":"Быстро получить доступ к своему контенту онлайн","hello_name_cabdd4ce":"Привет%{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Несколько советов, которые помогут вам начать работать в Canvas!","how_do_i_contact_my_instructor_184e35ed":"Как мне связаться со своим преподавателем?","how_do_i_download_the_student_app_4a4b8a63":"Как скачать студенческое приложение?","how_do_i_download_the_student_app_and_get_addition_3604c207":"Как скачать студенческое приложение и получить дополнительную помощь?","how_do_i_find_my_courses_b826e4ce":"Как мне найти свои курсы?","learn_more_about_using_commons_and_blueprints_3df953f6":"Узнать более подробные сведения об использовании Commons и Blueprints.","learn_more_about_video_conferencing_5f0e76e4":"Подробнее о видеоконференциях","more_video_conferencing_tools_f55088d5":"Больше инструментов для видеоконференций","next_40e12421":"Далее","not_now_afa29fa7":"Не сейчас","or_in_the_courses_list_6201030":"...или в списке курсов.","previous_bd2ac015":"Предыдущий","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Быстро поделиться содержанием курса и шаблонами с учителями","quickly_share_course_content_and_templates_with_te_c70a5eeb":"Быстро поделиться содержанием курса и шаблонами с учителями","set_up_video_conferencing_and_other_tools_1a94a350":"Настроить видеоконференции и другие инструменты","set_up_video_conferencing_c0049abe":"Настроить видеоконференции","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Настройте свой курс в Canvas менее чем за 30 минут.","set_up_your_notifications_568ecf91":"Настроить свои уведомления","set_up_your_notifications_9c005279":"Настроить свои уведомления","star_2d27c137":"звездочка","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Начните беседу с преподавателем в папке Входящие в Canvas.","start_tour_29787099":"Начать обзор","student_tour_38b735c8":"Тур для студента","teacher_tour_26282921":"Тур для преподавателя","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"Для добавления групп пользователей, курсов и регистраций нажмите «Импорт SIS».","to_add_individual_courses_click_courses_c5355180":"Чтобы добавить отдельные курсы, нажмите кнопку «Курсы».","to_add_individual_users_click_people_4d6de56a":"Чтобы добавить отдельных пользователей, нажмите кнопку «Люди».","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Инструменты для организации видеоконференций позволяют установить индивидуальную связь между учителями и учащимися.","we_know_getting_your_courses_online_quickly_during_40424e8":"Мы знаем, что для вас прежде всего важен доступ к вашим курсам онлайн в течение этого времени. В рамках данного краткого обзора вы узнаете как:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"Мы знаем, что в это время приоритетным является переход вашего учебного заведения на обучение через Интернет. В рамках данного краткого обзора вы узнаете как:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"Вы можете получить доступ к ознакомительному туру здесь в любое время, а также к другим новым ресурсам."},"sl":{"close_d634289d":"Zapri","done_54e3d4b6":"Dokončano","next_40e12421":"Naprej","previous_bd2ac015":"Nazaj"},"sv":{"access_canvas_training_videos_and_courses_ea43173a":"Få åtkomst till Canvas-utbildningsvideor och -kurser.","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Öppna dina kurser och grupper med valfri mobil iOS- eller Apple-enhet och hitta ytterligare information i hjälpmenyn.","add_people_and_courses_to_canvas_5c4bfff9":"Lägger till personer och kurser i Canvas","admin_tour_36d89fbb":"Administratörsgenomgång","canvas_course_tutorial_video_5205c1c1":"Handledningsvideo för kurser i Canvas","canvas_notifications_tutorial_video_79b8e768":"Handledningsvideo för aviseringar i Canvas","click_on_the_account_navigation_button_to_access_n_fbe82181":"Klicka på navigeringsknappen för kontot för att öppna aviseringsinställningarna.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Klicka på navigeringsknappen för kurser för att öppna dina kurser.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Klicka på navigeringsknappen för administratören för att få åtkomst till kontoinställningarna.","close_d634289d":"Stäng","come_back_later_5eab7dba":"Kom tillbaka senare!","current_of_totalsteps_19d7ee37":"%{current} av %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Missa inga aviseringar från dina studenter.","done_54e3d4b6":"Klar","download_canvas_android_app_60b5595f":"Ladda ned Canvas Android-app","download_canvas_ios_app_11c8651b":"Ladda ned Canvas iOS-app","find_training_resources_and_more_help_f148612c":"Hittar utbildningsresurser och mer hjälp","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Hitta dina klasser eller ämnen i översikten ...","get_your_content_online_9546ecff":"Hämtar ditt innehåll online","get_your_content_online_quickly_41fd925b":"Få upp ditt innehåll online snabbt","hello_name_cabdd4ce":"Hej %{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Här får du några snabba tips om hur du börjar använda Canvas!","how_do_i_contact_my_instructor_184e35ed":"Hur kontaktar jag min instruktör?","how_do_i_download_the_student_app_4a4b8a63":"Hur laddar jag ned studentappen?","how_do_i_download_the_student_app_and_get_addition_3604c207":"Hur laddar jag ned studentappen och får ytterligare hjälp?","how_do_i_find_my_courses_b826e4ce":"Hur hittar jag mina kurser?","learn_more_about_using_commons_and_blueprints_3df953f6":"Läs mer om att använda Commons och Blueprint-kurser","learn_more_about_video_conferencing_5f0e76e4":"Lär dig mer om videokonferenser","more_video_conferencing_tools_f55088d5":"Fler videokonferensverktyg","next_40e12421":"Nästa","not_now_afa29fa7":"Inte nu","or_in_the_courses_list_6201030":"... eller i kurslistan.","previous_bd2ac015":"Föregående","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Dela snabbt kursinnehåll och mallar med lärare","quickly_share_course_content_and_templates_with_te_c70a5eeb":"Snabbt delar kursinnehåll och mallar med lärare","set_up_video_conferencing_and_other_tools_1a94a350":"Konfigurerar videokonferenser och andra verktyg","set_up_video_conferencing_c0049abe":"Konfigurerar videokonferenser","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Konfigurera din Canvas-kurs på 30 minuter eller mindre.","set_up_your_notifications_568ecf91":"Konfigurerar dina aviseringar","set_up_your_notifications_9c005279":"Konfigurerar dina aviseringar","star_2d27c137":"stjärna","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Starta ett samtal med din instruktör i Canvas-inkorgen.","start_tour_29787099":"Starta genomgång","student_tour_38b735c8":"Studentgenomgång","teacher_tour_26282921":"Lärargenomgång","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"Klicka på SIS-import för att lägga till många användare, kurser och registreringar.","to_add_individual_courses_click_courses_c5355180":"Klicka på Kurser för att lägga till enskilda kurser.","to_add_individual_users_click_people_4d6de56a":"Klicka på personer för att lägga till enskilda personer.","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Med videokonferensverktyg möjliggörs en personlig anslutning mellan lärare och studenter.","we_know_getting_your_courses_online_quickly_during_40424e8":"Vi vet att det är viktigt för dig att snabbt komma igång med dina onlinekurser. Den här snabbgenomgången visar dig hur du:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"Vi vet att onlineutbildning är viktigt för din institution under dessa tider. Den här snabbgenomgången visar dig hur du:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"Du hittar välkomstgenomgången eller andra nya resurser här när du vill."},"sv-x-k12":{"access_canvas_training_videos_and_courses_ea43173a":"Få åtkomst till Canvas-utbildningsvideor och -kurser.","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"Öppna dina kurser och grupper med valfri mobil iOS- eller Apple-enhet och hitta ytterligare information i hjälpmenyn.","add_people_and_courses_to_canvas_5c4bfff9":"Lägger till personer och kurser i Canvas","admin_tour_36d89fbb":"Administratörsgenomgång","canvas_course_tutorial_video_5205c1c1":"Handledningsvideo för kurser i Canvas","canvas_notifications_tutorial_video_79b8e768":"Handledningsvideo för aviseringar i Canvas","click_on_the_account_navigation_button_to_access_n_fbe82181":"Klicka på navigeringsknappen för kontot för att öppna aviseringsinställningarna.","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"Klicka på navigeringsknappen för kurser för att öppna dina kurser.","click_the_admin_navigation_button_to_access_accoun_38d881bf":"Klicka på navigeringsknappen för administratören för att få åtkomst till kontoinställningarna.","close_d634289d":"Stäng","come_back_later_5eab7dba":"Kom tillbaka senare!","current_of_totalsteps_19d7ee37":"%{current} av %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"Missa inga aviseringar från dina elever.","done_54e3d4b6":"Klar","download_canvas_android_app_60b5595f":"Ladda ned Canvas Android-app","download_canvas_ios_app_11c8651b":"Ladda ned Canvas iOS-app","find_training_resources_and_more_help_f148612c":"Hittar utbildningsresurser och mer hjälp","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"Hitta dina klasser eller ämnen i översikten ...","get_your_content_online_9546ecff":"Hämtar ditt innehåll online","get_your_content_online_quickly_41fd925b":"Få upp ditt innehåll online snabbt","hello_name_cabdd4ce":"Hej %{name}!","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"Här får du några snabba tips om hur du börjar använda Canvas!","how_do_i_contact_my_instructor_184e35ed":"Hur kontaktar jag min instruktör?","how_do_i_download_the_student_app_4a4b8a63":"Hur laddar jag ned elevappen?","how_do_i_download_the_student_app_and_get_addition_3604c207":"Hur laddar jag ned elevappen och får ytterligare hjälp?","how_do_i_find_my_courses_b826e4ce":"Hur hittar jag mina kurser?","learn_more_about_using_commons_and_blueprints_3df953f6":"Läs mer om att använda Commons och Blueprint-kurser","learn_more_about_video_conferencing_5f0e76e4":"Lär dig mer om videokonferenser","more_video_conferencing_tools_f55088d5":"Fler videokonferensverktyg","next_40e12421":"Nästa","not_now_afa29fa7":"Inte nu","or_in_the_courses_list_6201030":"... eller i kurslistan.","previous_bd2ac015":"Föregående","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"Dela snabbt kursinnehåll och mallar med lärare","quickly_share_course_content_and_templates_with_te_c70a5eeb":"Snabbt delar kursinnehåll och mallar med lärare","set_up_video_conferencing_and_other_tools_1a94a350":"Konfigurerar videokonferenser och andra verktyg","set_up_video_conferencing_c0049abe":"Konfigurerar videokonferenser","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"Konfigurera din Canvas-kurs på 30 minuter eller mindre.","set_up_your_notifications_568ecf91":"Konfigurerar dina aviseringar","set_up_your_notifications_9c005279":"Konfigurerar dina aviseringar","star_2d27c137":"stjärna","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"Starta ett samtal med din instruktör i Canvas-inkorgen.","start_tour_29787099":"Starta genomgång","student_tour_38b735c8":"Elevgenomgång","teacher_tour_26282921":"Lärargenomgång","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"Klicka på Import av elevinformation (SIS Import) för att lägga till många användare, kurser och registreringar.","to_add_individual_courses_click_courses_c5355180":"Klicka på Kurser för att lägga till enskilda kurser.","to_add_individual_users_click_people_4d6de56a":"Klicka på personer för att lägga till enskilda personer.","video_conferencing_tools_enable_face_to_face_conne_144420a5":"Med videokonferensverktyg möjliggörs en personlig anslutning mellan lärare och elever.","we_know_getting_your_courses_online_quickly_during_40424e8":"Vi vet att det är viktigt för dig att snabbt komma igång med dina onlinekurser. Den här snabbgenomgången visar dig hur du:","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"Vi vet att onlineutbildning är viktigt för din institution under dessa tider. Den här snabbgenomgången visar dig hur du:","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"Du hittar välkomstgenomgången eller andra nya resurser här när du vill."},"tr":{"access_canvas_training_videos_and_courses_ea43173a":"Canvas eğitim videoları ve derslerine erişin","close_d634289d":"Kapat","done_54e3d4b6":"Tamam","next_40e12421":"Sonraki","previous_bd2ac015":"Önceki"},"uk":{"close_d634289d":"Закрити","done_54e3d4b6":"Готово","next_40e12421":"Наступний","previous_bd2ac015":"Попередній"},"zh-Hans":{"access_canvas_training_videos_and_courses_ea43173a":"访问 Canvas 培训视频和课程","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"使用任何 iOS 或 Android 移动设备访问您的课程和小组并在帮助菜单中查找更多信息。","add_people_and_courses_to_canvas_5c4bfff9":"在 Canvas 中添加人员和课程","admin_tour_36d89fbb":"管理员导览","canvas_course_tutorial_video_5205c1c1":"Canvas 课程教程视频","canvas_notifications_tutorial_video_79b8e768":"Canvas 通知教程视频","click_on_the_account_navigation_button_to_access_n_fbe82181":"点击帐户导航按钮以访问通知首选项。","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"点击课程导航按钮以访问您的课程。","click_the_admin_navigation_button_to_access_accoun_38d881bf":"点击管理员导航按钮以访问账户设置。","close_d634289d":"关闭","come_back_later_5eab7dba":"稍后回来！","current_of_totalsteps_19d7ee37":"%{current}/%{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"避免错过学生的通知。","done_54e3d4b6":"完成","download_canvas_android_app_60b5595f":"下载 Canvas Android 应用程序","download_canvas_ios_app_11c8651b":"下载 Canvas iOS 应用程序","find_training_resources_and_more_help_f148612c":"查找培训资源和更多帮助","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"在控制面板中...","get_your_content_online_9546ecff":"在线获取内容","get_your_content_online_quickly_41fd925b":"快速在线获取内容","hello_name_cabdd4ce":"您好，%{name}！","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"这里提供了如何开始使用 Canvas 的一些快速提示！","how_do_i_contact_my_instructor_184e35ed":"如何联系我的讲师？","how_do_i_download_the_student_app_4a4b8a63":"如何下载学生应用程序？","how_do_i_download_the_student_app_and_get_addition_3604c207":"如何下载学生应用程序并获得更多帮助？","how_do_i_find_my_courses_b826e4ce":"如何查找我的课程？","learn_more_about_using_commons_and_blueprints_3df953f6":"详细了解如何使用 Commons 和 Blueprints。","learn_more_about_video_conferencing_5f0e76e4":"详细了解视频会议","more_video_conferencing_tools_f55088d5":"更多视频会议工具","next_40e12421":"下一步","not_now_afa29fa7":"现在不","or_in_the_courses_list_6201030":"...或在课程列表中查找您的班级或科目。","previous_bd2ac015":"先前","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"和教师快速共享课程内容和模板","quickly_share_course_content_and_templates_with_te_c70a5eeb":"和教师快速共享课程内容和模板","set_up_video_conferencing_and_other_tools_1a94a350":"设置视频会议和其他工具","set_up_video_conferencing_c0049abe":"设置视频会议","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"在 30 分钟内设置好您的 Canvas 课程。","set_up_your_notifications_568ecf91":"设置您的通知","set_up_your_notifications_9c005279":"设置您的通知","star_2d27c137":"星","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"在 Canvas 收件箱中开始和您的讲师对话。","start_tour_29787099":"开始导览","student_tour_38b735c8":"学生导览","teacher_tour_26282921":"教师导览","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"要批量添加用户、课程和注册学生，请点击 SIS 导入。","to_add_individual_courses_click_courses_c5355180":"要添加个别课程，请点击课程。","to_add_individual_users_click_people_4d6de56a":"要添加个别用户，请点击人员。","video_conferencing_tools_enable_face_to_face_conne_144420a5":"通过视频会议工具，教师和学生可以面对面进行沟通。","we_know_getting_your_courses_online_quickly_during_40424e8":"我们知道快速在线获取课程是当前的优先任务。此快速导览将向您介绍如何：","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"我们知道让您的机构过渡到在线学习模式是当前的优先任务。此快速导览将向您介绍如何：","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"您可以随时访问欢迎导览以及其他新资源。"},"zh-Hant":{"access_canvas_training_videos_and_courses_ea43173a":"存取 Canvas 訓練影片及課程","access_your_courses_and_groups_using_any_ios_or_an_cdb6ad63":"您可以使用任何 iOS 或 Android 流動裝置存取您的課程和小組，並在支援選單中了解更多有關資訊。","add_people_and_courses_to_canvas_5c4bfff9":"添加成員及課程到 Canvas","admin_tour_36d89fbb":"管理員導覽","canvas_course_tutorial_video_5205c1c1":"Canvas 課程教程影片","canvas_notifications_tutorial_video_79b8e768":"Canvas 通知教程影片","click_on_the_account_navigation_button_to_access_n_fbe82181":"點擊帳戶導航工具按鈕以存取通知偏好設定。","click_on_the_courses_navigation_button_to_access_y_138d4dfb":"點擊課程導航工具按鈕以存取您的課程。","click_the_admin_navigation_button_to_access_accoun_38d881bf":"點擊管理員導航工具按鈕以存取帳戶設定。","close_d634289d":"關閉","come_back_later_5eab7dba":"之後再回來！","current_of_totalsteps_19d7ee37":"%{current} / %{totalSteps}","don_t_miss_notifications_from_your_students_900e9e30":"不再錯過任何來自學生的通知。","done_54e3d4b6":"已完成","download_canvas_android_app_60b5595f":"下載 Canvas Android 應用程式","download_canvas_ios_app_11c8651b":"下載 Canvas iOS 應用程式","find_training_resources_and_more_help_f148612c":"尋找訓練資源及其他支援","find_your_classes_or_subjects_in_the_dashboard_72e1ed47":"在控制面板...","get_your_content_online_9546ecff":"把內容轉移到網上","get_your_content_online_quickly_41fd925b":"快速把內容轉移到網上","hello_name_cabdd4ce":"您好，%{name}！","here_s_some_quick_tips_to_get_you_started_in_canva_72425979":"這裡的貼士能助您開始使用 Canvas！","how_do_i_contact_my_instructor_184e35ed":"怎樣聯絡我的導師？","how_do_i_download_the_student_app_4a4b8a63":"怎樣下載學生應用程式？","how_do_i_download_the_student_app_and_get_addition_3604c207":"我該如何下載學生應用程式，並獲得額外支援？","how_do_i_find_my_courses_b826e4ce":"怎樣找到我的課程？","learn_more_about_using_commons_and_blueprints_3df953f6":"了解更多有關使用公用區及藍圖資訊。","learn_more_about_video_conferencing_5f0e76e4":"更深入了解視像會議","more_video_conferencing_tools_f55088d5":"更多視像會議工具","next_40e12421":"下一個","not_now_afa29fa7":"現在不要","or_in_the_courses_list_6201030":"...或課程列表中尋找您的課程或科目。","previous_bd2ac015":"上一個","quickly_share_course_content_and_templates_with_te_1cf3dc6f":"快速與教師分享課程內容及範本","quickly_share_course_content_and_templates_with_te_c70a5eeb":"快速與教師分享課程內容及範本","set_up_video_conferencing_and_other_tools_1a94a350":"設置視像會議及其他工具","set_up_video_conferencing_c0049abe":"設置視像會議","set_up_your_canvas_course_in_30_minutes_or_less_94817b6d":"30 分鐘以內完成設置課程。","set_up_your_notifications_568ecf91":"設置通知","set_up_your_notifications_9c005279":"設置通知","star_2d27c137":"星號","start_a_conversation_with_your_instructor_in_the_c_50c9b8d5":"在 Canvs 收件匣內與您的考試開始交談。","start_tour_29787099":"開始導覽","student_tour_38b735c8":"學生導覽","teacher_tour_26282921":"教師導覽","to_add_bulk_users_courses_and_enrollments_click_si_4395c26":"如需批量添加使用者、課程及註冊學生，請點擊「SIS 匯入」。","to_add_individual_courses_click_courses_c5355180":"如需添加個別課程，請點擊「課程」。","to_add_individual_users_click_people_4d6de56a":"如需添加個別使用者，請點擊「成員」。","video_conferencing_tools_enable_face_to_face_conne_144420a5":"視像會議工具讓教師和學生可以進行面對面溝通。","we_know_getting_your_courses_online_quickly_during_40424e8":"我們明白您需要盡快把課程轉移到網上。本導覽將讓您了解如何：","we_know_it_s_a_priority_to_transition_your_institu_9a5bed0c":"我們明白在目前情況下，需要盡快讓您的所屬機構適應網上教學環境。本導覽將讓您了解如何：","you_can_access_the_welcome_tour_here_any_time_as_w_95b44855":"您可以隨時在這裡查看歡迎導覽以及其他新資源。"}}'))
t("jQeR")
t("0sPK")
var d=c["default"].scoped("TourPoints")
var l=t("zSOE")
var f=t("n12J")
var p=t("TstA")
var v=t("Mmr1")
var m=t("Xx/m")
const b=({current:e,totalSteps:n,gotoStep:t,close:o,firstLabel:r,softClose:_=o,content:s})=>{const c=i.a.useRef()
const u=i.a.useRef()
i.a.useEffect(()=>{const e=document.getElementById("___reactour")
e&&e.setAttribute("aria-hidden",false)
c.current&&c.current.focus()})
return Object(a["a"])("div",{role:"none",onClick:e=>{e.stopPropagation()}},void 0,Object(a["a"])(f["a"],{as:"div",padding:"medium",elementRef:e=>u.current=e,position:"relative",borderRadius:"small",shadow:"topmost"},void 0,Object(a["a"])(f["a"],{className:"tour-close-button"},void 0,Object(a["a"])(v["a"],{elementRef:e=>c.current=e,placement:"end",offset:"small",screenReaderLabel:d.t("Close"),onClick:o})),s,Object(a["a"])(p["a"],{margin:"medium 0 0 0"},void 0,Object(a["a"])(p["a"].Item,{shouldGrow:true},void 0,0===e?r:Object(a["a"])("p",{},void 0,d.t("%{current} of %{totalSteps}",{current:e,totalSteps:n-1}))),Object(a["a"])(p["a"].Item,{},void 0,e>0&&Object(a["a"])(m["a"],{margin:"0 small 0 0",onClick:()=>t(e-1)},void 0,d.t("Previous")),e>0&&e<n-1?Object(a["a"])(m["a"],{variant:"primary",onClick:()=>t(e+1)},void 0,d.t("Next")):null,e===n-1&&Object(a["a"])(m["a"],{variant:"primary",onClick:()=>o({forceClose:true})},void 0,d.t("Done")),0===e&&n>1&&Object(a["a"])(m["a"],{margin:"0 small 0 0",onClick:_},void 0,d.t("Not Now")),0===e&&n>1&&Object(a["a"])(m["a"],{variant:"primary",onClick:()=>t(1)},void 0,d.t("Start Tour"))))))}
var h=b
var g=t("msMH")
function y(e,n){const t=i.a.useState(()=>{const t=window.localStorage.getItem(e)
try{return t?JSON.parse(t):n}catch(e){return t}}),a=Object(o["a"])(t,2),r=a[0],_=a[1]
const s=n=>{try{const t=n instanceof Function?n(r):n
_(t)
window.localStorage.setItem(e,JSON.stringify(t))}catch(e){}}
return[r,s]}var k=y
var w=t("8t0o")
var C=t("ZbPE")
var j=t("6SzX")
async function S(e){await new Promise(n=>{let t=false
let o
const a=l["a"].subscribe("navigation-tray-opened",r=>{if(t)return
if(r===e){const e=document.getElementById("nav-tray-portal")
e&&e.setAttribute("aria-hidden",true)
const t=document.getElementById("___reactour")
t&&t.setAttribute("aria-hidden",false)
clearTimeout(o)
a()
n()}})
l["a"].publish("navigation-tray-open",{type:e,noFocus:true})
o=setTimeout(()=>{t=true
a()
n()},5e3)})}var O=t("XcDt")
var x
var H=[{selector:"#global_nav_help_link",content:()=>{var e,n,t,o
return Object(a["a"])("section",{},void 0,x||(x=Object(a["a"])("style",{},void 0,"#___reactour svg rect {\n            opacity:0;\n          }")),Object(a["a"])(g["a"],{level:"h3"},void 0,d.t("Hello%{name}!",{name:null!==(e=window.ENV)&&void 0!==e&&null!==(n=e.current_user)&&void 0!==n&&n.display_name?", "+(null===(t=window.ENV)||void 0===t||null===(o=t.current_user)||void 0===o?void 0:o.display_name):""})),Object(a["a"])("p",{},void 0,d.t("We know it's a priority to transition your institution for online learning during this time. This quick tour will show you how to:")),Object(a["a"])("ol",{},void 0,Object(a["a"])("li",{},void 0,d.t("Add People and Courses to Canvas")),Object(a["a"])("li",{},void 0,d.t("Quickly share Course Content and Templates with Teachers")),Object(a["a"])("li",{},void 0,d.t("Set up Video Conferencing and Other Tools")),Object(a["a"])("li",{},void 0,d.t("Find Training Resources and More Help"))),Object(a["a"])("div",{className:"tour-star-image","aria-hidden":true},void 0,Object(a["a"])("img",{src:Object(O["a"])("star"),alt:d.t("star")})))}},{selector:".navigation-tray-container",content:Object(a["a"])("section",{},void 0,Object(a["a"])(g["a"],{level:"h3"},void 0,d.t("Add People and Courses to Canvas")),Object(a["a"])(j["a"],{},void 0,d.t("Click the admin navigation button to access account settings.")),Object(a["a"])(C["a"],{as:"p"},void 0,Object(a["a"])(w["a"],{as:"a",href:"https://community.canvaslms.com/t5/Admin-Guide/How-do-I-add-a-course-in-an-account-as-an-admin/ta-p/158",target:"_blank",rel:"noopener noreferrer"},void 0,d.t("To add individual courses, click Courses."))),Object(a["a"])(C["a"],{as:"p"},void 0,Object(a["a"])(w["a"],{as:"a",href:"https://community.canvaslms.com/t5/Admin-Guide/How-do-I-add-users-to-an-account/ta-p/90",target:"_blank",rel:"noopener noreferrer"},void 0,d.t("To add individual users, click People."))),Object(a["a"])(C["a"],{as:"p"},void 0,Object(a["a"])(w["a"],{as:"a",href:"https://community.canvaslms.com/t5/Admin-Guide/How-do-I-import-SIS-data-to-a-Canvas-account/ta-p/98",target:"_blank",rel:"noopener noreferrer"},void 0,d.t("To add bulk users, courses, and enrollments, click SIS Imports.")))),actionBefore:async()=>{await S("accounts")}},{selector:".navigation-tray-container",content:Object(a["a"])("section",{},void 0,Object(a["a"])(g["a"],{level:"h3"},void 0,d.t("Quickly Share Course Content and Templates with Teachers")),Object(a["a"])(C["a"],{as:"p"},void 0,Object(a["a"])(w["a"],{as:"a",href:"https://community.canvaslms.com/t5/Resource-Documents/Blueprint-Courses-and-Canvas-Commons-Comparison-PDF/ta-p/387051",target:"_blank",rel:"noopener noreferrer"},void 0,d.t("Learn more about using Commons and Blueprints.")))),actionBefore:async()=>{await S("accounts")}},{selector:".navigation-tray-container",content:Object(a["a"])("section",{},void 0,Object(a["a"])(g["a"],{level:"h3"},void 0,d.t("Set up Video Conferencing")),Object(a["a"])(C["a"],{as:"p"},void 0,Object(a["a"])(w["a"],{as:"a",href:"https://community.canvaslms.com/t5/Contingency-Planning/Web-Conferencing-Resources/ba-p/262674",target:"_blank",rel:"noopener noreferrer"},void 0,d.t("Video conferencing tools enable face-to-face connection between teachers and students.")))),actionBefore:async()=>{await S("accounts")}},{selector:".navigation-tray-container",content:Object(a["a"])("section",{},void 0,Object(a["a"])(g["a"],{level:"h3"},void 0,d.t("Find Training Resources and More Help")),Object(a["a"])(C["a"],{as:"p"},void 0,Object(a["a"])(w["a"],{as:"a",href:"https://community.canvaslms.com/t5/Admin-Guide/How-do-I-use-the-Training-Services-Portal-as-an-admin/ta-p/198",target:"_blank",rel:"noopener noreferrer"},void 0,d.t("Access Canvas training videos and courses")))),actionBefore:async()=>{await S("help")}}]
var A,T
var z=[{selector:"#global_nav_help_link",content:()=>{var e,n,t,o
return Object(a["a"])("section",{},void 0,A||(A=Object(a["a"])("style",{},void 0,"#___reactour svg rect {\n            opacity:0;\n          }")),Object(a["a"])(g["a"],{level:"h3"},void 0,d.t("Hello%{name}!",{name:null!==(e=window.ENV)&&void 0!==e&&null!==(n=e.current_user)&&void 0!==n&&n.display_name?", "+(null===(t=window.ENV)||void 0===t||null===(o=t.current_user)||void 0===o?void 0:o.display_name):""})),Object(a["a"])(C["a"],{as:"p"},void 0,d.t("We know getting your courses online quickly during this time is priority. This quick tour will show you how to:")),Object(a["a"])("ol",{},void 0,Object(a["a"])("li",{},void 0,Object(a["a"])(w["a"],{as:"a",href:"https://community.canvaslms.com/t5/Instructor-Guide/How-do-I-set-my-Canvas-notification-preferences-as-an-instructor/ta-p/1222",target:"_blank",rel:"noopener noreferrer"},void 0,d.t("Set up your Notifications"))),Object(a["a"])("li",{},void 0,Object(a["a"])(w["a"],{as:"a",href:"https://community.canvaslms.com/t5/Contingency-Planning/Set-Up-Your-Canvas-Course-in-30-minutes-or-Less/ba-p/258437",target:"_blank",rel:"noopener noreferrer"},void 0,d.t("Get your Content online"))),Object(a["a"])("li",{},void 0,Object(a["a"])(w["a"],{as:"a",href:"https://community.canvaslms.com/t5/Instructor-Guide/How-do-I-create-a-conference-in-a-course/ta-p/1156",target:"_blank",rel:"noopener noreferrer"},void 0,d.t("Learn more about Video Conferencing")),T||(T=Object(a["a"])("ul",{},void 0,Object(a["a"])("li",{},void 0,Object(a["a"])(w["a"],{as:"a",href:"https://community.canvaslms.com/t5/Admin-Group/Using-Zoom-with-Canvas-FAQ/ba-p/261826",target:"_blank",rel:"noopener noreferrer"},void 0,"Zoom")),Object(a["a"])("li",{},void 0,Object(a["a"])(w["a"],{as:"a",href:"https://community.canvaslms.com/t5/Admin-Group/Google-Hangouts-Meet-LTI/ba-p/257649",target:"_blank",rel:"noopener noreferrer"},void 0,"Google Meet")),Object(a["a"])("li",{},void 0,Object(a["a"])(w["a"],{as:"a",href:"https://www.youtube.com/watch?v=zUXXeiRCFfY",target:"_blank",rel:"noopener noreferrer"},void 0,"Microsoft Teams")))))),Object(a["a"])("div",{className:"tour-star-image","aria-hidden":true},void 0,Object(a["a"])("img",{src:Object(O["a"])("star"),alt:d.t("star")})))}},{observe:".profile-tab-notifications",selector:".profile-tab-notifications",content:Object(a["a"])("section",{},void 0,Object(a["a"])(g["a"],{level:"h3"},void 0,d.t("Set Up Your Notifications")),Object(a["a"])(j["a"],{},void 0,d.t("Click on the account navigation button to access notification preferences.")),Object(a["a"])(C["a"],{as:"p"},void 0,Object(a["a"])(w["a"],{as:"a",href:"https://community.canvaslms.com/t5/Instructor-Guide/How-do-I-set-my-Canvas-notification-preferences-as-an-instructor/ta-p/1222",target:"_blank",rel:"noopener noreferrer"},void 0,d.t("Don't miss notifications from your students."))),Object(a["a"])("iframe",{title:d.t("Canvas Notifications Tutorial Video"),src:"https://player.vimeo.com/video/75514816?title=0&byline=0&portrait=0",width:"100%",height:"277px",style:{marginTop:"1rem"},frameBorder:"0",allow:"autoplay; fullscreen",allowFullScreen:true})),actionBefore:async()=>{await S("profile")}},{selector:".navigation-tray-container",content:Object(a["a"])("section",{},void 0,Object(a["a"])(g["a"],{level:"h3"},void 0,d.t("Get Your Content Online Quickly")),Object(a["a"])(j["a"],{},void 0,d.t("Click on the courses navigation button to access your courses.")),Object(a["a"])(C["a"],{as:"p"},void 0,Object(a["a"])(w["a"],{as:"a",href:"https://community.canvaslms.com/t5/Contingency-Planning/Set-Up-Your-Canvas-Course-in-30-minutes-or-Less/ba-p/258437",target:"_blank",rel:"noopener noreferrer"},void 0,d.t("Set up your Canvas course in 30 minutes or less."))),Object(a["a"])("iframe",{title:d.t("Canvas Course Tutorial Video"),src:"https://player.vimeo.com/video/69658934?title=0&byline=0&portrait=0",width:"100%",height:"277px",style:{marginTop:"1rem"},frameBorder:"0",allow:"autoplay; fullscreen",allowFullScreen:true})),actionBefore:async()=>{await S("courses")}},{selector:".navigation-tray-container",content:Object(a["a"])("section",{},void 0,Object(a["a"])(g["a"],{level:"h3"},void 0,d.t("Learn more about Video Conferencing")),Object(a["a"])(f["a"],{as:"div",margin:"small 0 0 0"},void 0,Object(a["a"])("ul",{},void 0,Object(a["a"])("li",{},void 0,Object(a["a"])(w["a"],{as:"a",href:"https://community.canvaslms.com/t5/Admin-Group/Using-Zoom-with-Canvas-FAQ/ba-p/261826",target:"_blank",rel:"noopener noreferrer"},void 0,"Zoom")),Object(a["a"])("li",{},void 0,Object(a["a"])(w["a"],{as:"a",href:"https://community.canvaslms.com/t5/Admin-Group/Google-Hangouts-Meet-LTI/ba-p/257649",target:"_blank",rel:"noopener noreferrer"},void 0,"Google Meet")),Object(a["a"])("li",{},void 0,Object(a["a"])(w["a"],{as:"a",href:"https://www.youtube.com/watch?v=zUXXeiRCFfY",target:"_blank",rel:"noopener noreferrer"},void 0,"Microsoft Teams")),Object(a["a"])("li",{},void 0,Object(a["a"])(w["a"],{as:"a",href:"https://community.canvaslms.com/t5/Instructor-Guide/How-do-I-create-a-conference-in-a-course/ta-p/1156",target:"_blank",rel:"noopener noreferrer"},void 0,d.t("More Video Conferencing Tools")))))),actionBefore:async()=>{await S("help")}}]
var R
var q=[{selector:"#global_nav_help_link",content:()=>{var e,n,t,o
return Object(a["a"])("section",{},void 0,R||(R=Object(a["a"])("style",{},void 0,"#___reactour svg rect {\n            opacity:0;\n          }")),Object(a["a"])(g["a"],{level:"h3"},void 0,d.t("Hello%{name}!",{name:null!==(e=window.ENV)&&void 0!==e&&null!==(n=e.current_user)&&void 0!==n&&n.display_name?", "+(null===(t=window.ENV)||void 0===t||null===(o=t.current_user)||void 0===o?void 0:o.display_name):""})),Object(a["a"])(C["a"],{as:"p"},void 0,d.t("Here's some quick tips to get you started in Canvas!")),Object(a["a"])("ol",{},void 0,Object(a["a"])("li",{},void 0,d.t("How do I find my courses?")),Object(a["a"])("li",{},void 0,d.t("How do I contact my instructor?")),Object(a["a"])("li",{},void 0,d.t("How do I download the Student App?"))),Object(a["a"])("div",{className:"tour-star-image","aria-hidden":true},void 0,Object(a["a"])("img",{src:Object(O["a"])("star"),alt:d.t("star")})))}},{selector:"#global_nav_dashboard_link",content:Object(a["a"])("section",{},void 0,Object(a["a"])(g["a"],{level:"h3"},void 0,d.t("How do I find my courses?")),Object(a["a"])(C["a"],{as:"p"},void 0,d.t("Find your classes or subjects in the Dashboard...")))},{selector:".navigation-tray-container",content:Object(a["a"])("section",{},void 0,Object(a["a"])(g["a"],{level:"h3"},void 0,d.t("How do I find my courses?")),Object(a["a"])(C["a"],{as:"p"},void 0,d.t("...or in the Courses list."))),actionBefore:async()=>{await S("courses")}},{selector:"#global_nav_conversations_link",content:Object(a["a"])("section",{},void 0,Object(a["a"])(g["a"],{level:"h3"},void 0,d.t("How do I contact my instructor?")),Object(a["a"])(C["a"],{as:"p"},void 0,d.t("Start a conversation with your instructor in the Canvas Inbox.")))},{selector:".navigation-tray-container",content:Object(a["a"])("section",{},void 0,Object(a["a"])(g["a"],{level:"h3"},void 0,d.t("How do I download the Student App and get additional help?")),Object(a["a"])(C["a"],{as:"p"},void 0,d.t("Access your courses and groups using any iOS or Android mobile device and find more information in the Help menu.")),Object(a["a"])("ul",{},void 0,Object(a["a"])("li",{},void 0,Object(a["a"])(w["a"],{as:"a",href:"https://apps.apple.com/us/app/canvas-student/id480883488",target:"_blank",rel:"noopener noreferrer","aria-label":d.t("Download Canvas iOS app")},void 0,"iOS")),Object(a["a"])("li",{},void 0,Object(a["a"])(w["a"],{as:"a",href:"https://play.google.com/store/apps/details?id=com.instructure.candroid&hl=en_US",target:"_blank",rel:"noopener noreferrer","aria-label":d.t("Download Canvas Android app")},void 0,"Android")))),actionBefore:async()=>{await S("help")}}]
const I={admin:H,teacher:z,student:q}
const B=[{selector:".welcome-tour-link",content:Object(a["a"])("section",{},void 0,Object(a["a"])(g["a"],{level:"h3"},void 0,d.t("Come back later!")),d.t("You can access the Welcome Tour here any time as well as other new resources."))}]
const E=({roles:e})=>{const n=i.a.useState(()=>{var n,t,o,a
if(null!==(n=window.ENV)&&void 0!==n&&null!==(t=n.COURSE)&&void 0!==t&&t.is_student&&e.includes("student")&&!localStorage.getItem("canvas-tourpoints-shown-student"))return"student"
if(null!==(o=window.ENV)&&void 0!==o&&null!==(a=o.COURSE)&&void 0!==a&&a.is_instructor&&e.includes("teacher")&&!localStorage.getItem("canvas-tourpoints-shown-teacher"))return"teacher"
return e[0]}),t=Object(o["a"])(n,2),r=t[0],_=t[1]
const c=I[r]
const u=k("canvas-tourpoints-shown-"+r,false),f=Object(o["a"])(u,2),p=f[0],v=f[1]
const m=i.a.useState(!p),b=Object(o["a"])(m,2),g=b[0],y=b[1]
const w=i.a.useState(false),C=Object(o["a"])(w,2),j=C[0],O=C[1]
const x=i.a.useState(false),H=Object(o["a"])(x,2),A=H[0],T=H[1]
i.a.useEffect(()=>{g&&l["a"].publish("navigation-tray-override-dismiss",true)
return()=>l["a"].publish("navigation-tray-override-dismiss",false)},[g])
const z=i.a.useCallback(async(e={})=>{const n=e.forceClose
v(true)
if(A||n){R()
l["a"].publish("navigation-tray-close")
y(false)}else{await S("help")
T(true)
const e=document.getElementById("___reactour")
e&&e.setAttribute("aria-hidden",false)}},[v,A])
i.a.useEffect(()=>{const e=e=>{27===e.keyCode&&z()}
document.addEventListener("keydown",e)
return()=>document.removeEventListener("keydown",e)},[z])
const R=()=>{const e=document.getElementById("nav-tray-portal")
e&&e.setAttribute("aria-hidden",false)
const n=document.getElementById("application")
n&&n.setAttribute("aria-hidden",false)}
const q=()=>{const e=document.getElementById("nav-tray-portal")
e&&e.setAttribute("aria-hidden",true)
const n=document.getElementById("application")
n&&n.setAttribute("aria-hidden",true)}
i.a.useEffect(()=>{g&&q()
return()=>R()},[g])
i.a.useEffect(()=>{const n=l["a"].subscribe("tour-open",()=>{var n,t,o,a
l["a"].publish("navigation-tray-close")
q()
y(true)
O(true)
T(true)
1===e.length?_(e[0]):null!==(n=window.ENV)&&void 0!==n&&null!==(t=n.COURSE)&&void 0!==t&&t.is_student&&e.includes("student")?_("student"):e.includes("teacher")&&!e.includes("admin")||null!==(o=window.ENV)&&void 0!==o&&null!==(a=o.COURSE)&&void 0!==a&&a.is_instructor&&e.includes("teacher")&&e.includes("admin")?_("teacher"):e.includes("admin")&&_("admin")})
return()=>n()},[e])
if(!r||!c)return null
const E={student:d.t("Student Tour"),teacher:d.t("Teacher Tour"),admin:d.t("Admin Tour")}
if(!g)return null
return Object(a["a"])(s.a,{CustomHelper:e=>i.a.createElement(h,Object.assign({softClose:z,close:()=>{l["a"].publish("navigation-tray-close")
R()
e.close()},firstLabel:E[r]||""},e)),steps:!j&&A?B:c,isOpen:g,onRequestClose:z},`${A}-${g}-${r}`)}
n["default"]=E},MiSq:function(e,n,t){"use strict"
t.d(n,"a",(function(){return h}))
function o(e){var n=0
var t,o=0,a=e.length
for(;a>=4;++o,a-=4){t=255&e.charCodeAt(o)|(255&e.charCodeAt(++o))<<8|(255&e.charCodeAt(++o))<<16|(255&e.charCodeAt(++o))<<24
t=1540483477*(65535&t)+(59797*(t>>>16)<<16)
t^=t>>>24
n=1540483477*(65535&t)+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16)}switch(a){case 3:n^=(255&e.charCodeAt(o+2))<<16
case 2:n^=(255&e.charCodeAt(o+1))<<8
case 1:n^=255&e.charCodeAt(o)
n=1540483477*(65535&n)+(59797*(n>>>16)<<16)}n^=n>>>13
n=1540483477*(65535&n)+(59797*(n>>>16)<<16)
return((n^n>>>15)>>>0).toString(36)}var a=o
var r={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}
var i=r
var _=t("4qRI")
var s=/[A-Z]|^ms/g
var c=/_EMO_([^_]+?)_([^]*?)_EMO_/g
var u=function(e){return 45===e.charCodeAt(1)}
var d=function(e){return null!=e&&"boolean"!==typeof e}
var l=Object(_["a"])((function(e){return u(e)?e:e.replace(s,"-$&").toLowerCase()}))
var f=function(e,n){switch(e){case"animation":case"animationName":if("string"===typeof n)return n.replace(c,(function(e,n,t){b={name:n,styles:t,next:b}
return n}))}if(1!==i[e]&&!u(e)&&"number"===typeof n&&0!==n)return n+"px"
return n}
function p(e,n,t,o){if(null==t)return""
if(void 0!==t.__emotion_styles){false
return t}switch(typeof t){case"boolean":return""
case"object":if(1===t.anim){b={name:t.name,styles:t.styles,next:b}
return t.name}if(void 0!==t.styles){var a=t.next
if(void 0!==a)while(void 0!==a){b={name:a.name,styles:a.styles,next:b}
a=a.next}var r=t.styles+";"
false
return r}return v(e,n,t)
case"function":if(void 0!==e){var i=b
var _=t(e)
b=i
return p(e,n,_,o)}false
break
case"string":}if(null==n)return t
var s=n[t]
false
return void 0===s||o?t:s}function v(e,n,t){var o=""
if(Array.isArray(t))for(var a=0;a<t.length;a++)o+=p(e,n,t[a],false)
else for(var r in t){var i=t[r]
if("object"!==typeof i)null!=n&&void 0!==n[i]?o+=r+"{"+n[i]+"}":d(i)&&(o+=l(r)+":"+f(r,i)+";")
else{if("NO_COMPONENT_SELECTOR"===r&&false)throw new Error("Component selectors can only be used in conjunction with babel-plugin-emotion.")
if(!Array.isArray(i)||"string"!==typeof i[0]||null!=n&&void 0!==n[i[0]]){var _=p(e,n,i,false)
switch(r){case"animation":case"animationName":o+=l(r)+":"+_+";"
break
default:false
o+=r+"{"+_+"}"}}else for(var s=0;s<i.length;s++)d(i[s])&&(o+=l(r)+":"+f(r,i[s])+";")}}return o}var m=/label:\s*([^\s;\n{]+)\s*;/g
false
var b
var h=function(e,n,t){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0]
var o=true
var r=""
b=void 0
var i=e[0]
if(null==i||void 0===i.raw){o=false
r+=p(t,n,i,false)}else{false
r+=i[0]}for(var _=1;_<e.length;_++){r+=p(t,n,e[_],46===r.charCodeAt(r.length-1))
if(o){false
r+=i[_]}}false
m.lastIndex=0
var s=""
var c
while(null!==(c=m.exec(r)))s+="-"+c[1]
var u=a(r)+s
false
return{name:u,styles:r,next:b}}},P6H9:function(e,n,t){"use strict"
Object.defineProperty(n,"__esModule",{value:true})
var o=t("YqUS")
var a=u(o)
var r=t("umwU")
var i=t("gsf9")
var _=u(i)
var s=t("Py8U")
var c=u(s)
function u(e){return e&&e.__esModule?e:{default:e}}n.default={to:a.default,calcEndPoint:r.calcEndPoint,anchorScroll:_.default,observe:c.default}
e.exports=n["default"]},Py8U:function(e,n,t){"use strict"
Object.defineProperty(n,"__esModule",{value:true})
function o(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n]
return t}return Array.from(e)}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.activeClass,t=void 0===n?"active":n,a=e.query,r=void 0===a?'[href^="#"]:not([href="#"]':a,i=e.threshold,_=void 0===i?[.25,.5,.75]:i,s=e.detectType,c=void 0===s?"max":s
var u={threshold:_}
var d=function(e){return e.classList.remove(t)}
var l=function(e){return e.classList.add(t)}
var f=function(){document.querySelectorAll("."+t).forEach(d)}
var p=function(e){f()
l(document.querySelector('a[href="#'+e.id+'"]'))}
var v=function(e){e.forEach((function(e){e.intersectionRatio>=Math[c].apply(Math,o(_))&&p(e.target)}))}
var m=document.querySelectorAll(r)
var b=new IntersectionObserver(v,u)
var h=function(e){var n=document.querySelector("#"+e.hash.slice(1))
b.observe(n)}
m.forEach(h)}
e.exports=n["default"]},RDWv:function(e,n,t){"use strict"
Object.defineProperty(n,"__esModule",{value:true})
function o(e){return e&&"object"===typeof e&&"default"in e?e["default"]:e}t("sopX")
var a=t("q1tI")
var r=o(a)
var i=o(t("TSYQ"))
var _=o(t("P6H9"))
var s=o(t("7YPn"))
var c=o(t("9/5/"))
var u=o(t("/4op"))
var d=o(t("DUc8"))
var l=t("qKvR")
var f=t("i8i4")
var p=o(t("5D9J"))
var v=o(t("17x9"))
function m(e,n,t,o,a,r,i){try{var _=e[r](i)
var s=_.value}catch(e){t(e)
return}_.done?n(s):Promise.resolve(s).then(o,a)}function b(e){return function(){var n=this,t=arguments
return new Promise((function(o,a){var r=e.apply(n,t)
function i(e){m(r,o,a,i,_,"next",e)}function _(e){m(r,o,a,i,_,"throw",e)}i(void 0)}))}}function h(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:true,configurable:true,writable:true}):e[n]=t
return e}function g(e,n){var t=Object.keys(e)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))
t.push.apply(t,o)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{}
n%2?g(Object(t),true).forEach((function(n){h(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function k(e,n){if(null==e)return{}
var t={}
var o=Object.keys(e)
var a,r
for(r=0;r<o.length;r++){a=o[r]
if(n.indexOf(a)>=0)continue
t[a]=e[a]}return t}function w(e,n){if(null==e)return{}
var t=k(e,n)
var o,a
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
for(a=0;a<r.length;a++){o=r[a]
if(n.indexOf(o)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,o))continue
t[o]=e[o]}}return t}function C(e,n){n||(n=e.slice(0))
return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function j(e,n){return S(e)||O(e,n)||x(e,n)||A()}function S(e){if(Array.isArray(e))return e}function O(e,n){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return
var t=[]
var o=true
var a=false
var r=void 0
try{for(var i,_=e[Symbol.iterator]();!(o=(i=_.next()).done);o=true){t.push(i.value)
if(n&&t.length===n)break}}catch(e){a=true
r=e}finally{try{o||null==_["return"]||_["return"]()}finally{if(a)throw r}}return t}function x(e,n){if(!e)return
if("string"===typeof e)return H(e,n)
var t=Object.prototype.toString.call(e).slice(8,-1)
"Object"===t&&e.constructor&&(t=e.constructor.name)
if("Map"===t||"Set"===t)return Array.from(e)
if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return H(e,n)}function H(e,n){(null==n||n>e.length)&&(n=e.length)
for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t]
return o}function A(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function T(){var e=C(["\n      .focus-outline-hidden :focus {\n        outline: none;\n      }\n    "])
T=function(){return e}
return e}var z=function(){return r.createElement(l.Global,{styles:l.css(T())})}
function R(e){var n=e.children
var t=a.useRef(null)
if(null===t.current){t.current=document.createElement("div")
t.current.setAttribute("id","___reactour")}a.useEffect((function(){document.body.appendChild(t.current)
return function(){document.body.removeChild(t.current)}}),[t])
return f.createPortal(n,t.current)}function q(){var e=C(["\n  display: block;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 0;\n  cursor: ",";\n"])
q=function(){return e}
return e}var I=p.button(q(),(function(e){return e.disabled?"not-allowed":"pointer"}))
function B(){var e=C(["\n  color: ",";\n\n  ",";\n  ",";\n\n  &:hover {\n    color: ",";\n  }\n"])
B=function(){return e}
return e}function E(){var e=C(["\n  font-size: 12px;\n  line-height: 1;\n"])
E=function(){return e}
return e}var P=p.span(E())
function N(e){var n=e.className,t=e.onClick,o=e.inverted,a=e.label,i=e.disabled
return r.createElement(I,{className:n,onClick:t,"data-tour-elem":"".concat(o?"right":"left","-arrow"),disabled:i},a?r.createElement(P,null,a):r.createElement("svg",{viewBox:"0 0 18.4 14.4"},r.createElement("path",{d:o?"M10.8 1L17 7.2l-6.2 6.2":"M7.6 1L1.4 7.2l6.2 6.2",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeMiterlimit:"10"})))}N.propTypes={className:v.string.isRequired,onClick:v.func.isRequired,inverted:v.bool,label:v.node,disabled:v.bool}
var F=p(N)(B(),(function(e){return e.disabled?"#646464":"#caccce"}),(function(e){return e.inverted?"margin-left: 24px;":"margin-right: 24px;"}),(function(e){return!e.label&&"\n    width: 16px;\n    height: 12px;\n    flex: 0 0 16px;\n  "}),(function(e){return e.disabled?"#000":"#fff"}))
function G(){var e=C(["\n  position: absolute;\n  top: 22px;\n  right: 22px;\n  width: 9px;\n  height: 9px;\n  color: #5e5e5e;\n  &:hover {\n    color: #000;\n  }\n"])
G=function(){return e}
return e}function D(e){var n=e.className,t=e.onClick,o=e.ariaLabel
return r.createElement(I,{className:n,onClick:t,"aria-label":o},r.createElement("svg",{viewBox:"0 0 9.1 9.1","aria-hidden":true,role:"presentation"},r.createElement("path",{fill:"currentColor",d:"M5.9 4.5l2.8-2.8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L4.5 3.1 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4l2.8 2.8L.3 7.4c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L4.5 6l2.8 2.8c.3.2.5.3.8.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L5.9 4.5z"})))}D.propTypes={className:v.string.isRequired,onClick:v.func.isRequired,ariaLabel:v.string}
var L=p(D)(G())
function M(e){var n=(null===e||void 0===e?void 0:e.getBoundingClientRect())||{},t=n.top,o=void 0===t?0:t,a=n.right,r=void 0===a?0:a,i=n.bottom,_=void 0===i?0:i,s=n.left,c=void 0===s?0:s,u=n.width,d=void 0===u?0:u,l=n.height,f=void 0===l?0:l
return{top:o,right:r,bottom:_,left:c,width:d,height:f}}function K(e){var n=e.top,t=e.right,o=e.bottom,a=e.left,r=e.w,i=e.h,_=e.threshold,s=void 0===_?0:_
return n>=0+s&&a>=0+s&&o<=i-s&&t<=r-s}function V(e){return e===document.querySelector("body")||e===document.querySelector("html")}var W=function(e){return/(left|right)/.test(e)}
var Q=function(e,n){return e>n}
var U=function(e,n){return e>n}
var Y=function(e){return e<0?0:e}
function J(e){return Object.keys(e).map((function(n){return{position:n,value:e[n]}})).sort((function(e,n){return n.value-e.value})).map((function(e){return e.position}))}function X(){var e=Math.max(document.documentElement.clientWidth,window.innerWidth||0)
var n=Math.max(document.documentElement.clientHeight,window.innerHeight||0)
return{w:e,h:n}}function Z(){var e=C(["\n  --reactour-accent: ",";\n  ","\n  background-color: #2D3B45;\n  color: white;\n  position: fixed;\n  transition: transform 0.3s;\n  top: 0;\n  left: 0;\n  z-index: 1000000;\n\n  transform: ",";\n"])
Z=function(){return e}
return e}var $=p.div(Z(),(function(e){return e.accentColor}),(function(e){return e.defaultStyles?"\n  max-width: 331px;\n  min-width: 150px;\n  padding-right: 40px;\n  border-radius: ".concat(e.rounded,"px;\n  background-color: #2D3B45;\n  padding: 24px 30px;\n  box-shadow: 0 0.5em 3em rgba(0, 0, 0, 0.3);\n  color: inherit;\n  "):""}),(function(e){var n=e.targetTop,t=e.targetRight,o=e.targetBottom,a=e.targetLeft,r=e.windowWidth,i=e.windowHeight,_=e.helperWidth,s=e.helperHeight,c=e.helperPosition,u=e.padding
var d={left:a,right:r-t,top:n,bottom:i-o}
var l=function(e){return d[e]>(W(e)?_+2*u:s+2*u)}
var f=function(e){var n=J(d)
for(var t=0;t<n.length;t++)if(l(n[t]))return e[n[t]]
return e.center}
var p=function(e){if(Array.isArray(e)){var c=Q(e[0],r)
var d=U(e[1],i)
var p=function(e,n){console.warn("".concat(e,":").concat(n," is outside window, falling back to center"))}
c&&p("x",e[0])
d&&p("y",e[1])
return[c?r/2-_/2:e[0],d?i/2-s/2:e[1]]}var v=Q(a+_,r)?Q(t+u,r)?t-_:t-_+u:a-u
var m=v>u?v:u
var b=U(n+s,i)?U(o+u,i)?o-s:o-s+u:n-u
var h=b>u?b:u
var g={top:[m,n-s-2*u],right:[t+2*u,h],bottom:[m,o+2*u],left:[a-_-2*u,h],center:[r/2-_/2,i/2-s/2]}
if("center"===e||l(e))return g[e]
return f(g)}
var v=p(c)
return"translate(".concat(Math.round(v[0]),"px, ").concat(Math.round(v[1]),"px)")}))
function ee(){var e=C(["\n  position: absolute;\n  font-family: monospace;\n  background: #008ee2;\n  background: ",";\n  height: 1.875em;\n  line-height: 2;\n  padding-left: 0.8125em;\n  padding-right: 0.8125em;\n  font-size: 1em;\n  border-radius: 1.625em;\n  color: white;\n  text-align: center;\n  box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.3);\n  top: -0.8125em;\n  left: -0.8125em;\n"])
ee=function(){return e}
return e}var ne=p.span(ee(),(function(e){return e.accentColor}))
function te(){var e=C(["\n  display: flex;\n  margin-top: 24px;\n  align-items: center;\n  justify-content: center;\n"])
te=function(){return e}
return e}var oe=p.div(te())
function ae(){var e=C(["\n  counter-reset: dot;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n"])
ae=function(){return e}
return e}var re=p.nav(ae())
function ie(){var e=C(["\n  counter-increment: dot;\n  width: 18px;\n  height: 18px;\n  border: ",";\n\n  border-radius: 100%;\n  padding: 0;\n  display: block;\n  margin: 12px;\n  transition: opacity 0.3s, transform 0.3s;\n  cursor: ",";\n\n  color: ",";\n  background: ",";\n\n  color: ",";\n  background: ",";\n\n  &:before {\n    content: counter(dot);\n    position: absolute;\n    bottom: calc(100% + 0.25em);\n    left: 50%;\n    opacity: 0;\n    transform: translate(-50%, 1em);\n    transition: 0.3s;\n    display: ",";\n  }\n\n  &:hover {\n    background-color: currentColor;\n\n    &:before {\n      opacity: 0.5;\n      transform: translate(-50%, -2px);\n    }\n  }\n"])
ie=function(){return e}
return e}var _e=p.button(ie(),(function(e){return e.current===e.index?"0":"1px solid #caccce"}),(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.current===e.index?"var(--reactour-accent)":"#caccce"}),(function(e){return e.current===e.index?"var(--reactour-accent)":"none"}),(function(e){return e.current===e.index?e.accentColor:"#caccce"}),(function(e){return e.current===e.index?e.accentColor:"none"}),(function(e){return e.showNumber?"block":"none"}))
function se(){var e=C(["\n  opacity: 0.7;\n  width: 100%;\n  left: 0;\n  top: 0;\n  height: 100%;\n  position: fixed;\n  z-index: 99999;\n  pointer-events: none;\n  color: #000;\n"])
se=function(){return e}
return e}var ce=p.div(se())
function ue(e){var n=e.windowWidth,t=e.windowHeight,o=e.targetWidth,a=e.targetHeight,i=e.targetTop,_=e.targetLeft,s=e.padding,c=e.rounded,u=e.disableInteraction,d=e.disableInteractionClassName,l=e.className,f=e.onClick
var p=Y(o+2*s)
var v=Y(a+2*s)
var m=Y(i-s)
var b=Y(_-s)
return r.createElement(ce,{onClick:f},r.createElement("svg",{width:n,height:t,xmlns:"http://www.w3.org/2000/svg",className:l},r.createElement("defs",null,r.createElement("mask",{id:"mask-main"},r.createElement("rect",{x:0,y:0,width:n,height:t,fill:"white"}),r.createElement("rect",{x:b,y:m,width:p,height:v,fill:"black"}),r.createElement("rect",{x:b-1,y:m-1,width:c,height:c,fill:"white"}),r.createElement("circle",{cx:b+c,cy:m+c,r:c,fill:"black"}),r.createElement("rect",{x:b+p-c+1,y:m-1,width:c,height:c,fill:"white"}),r.createElement("circle",{cx:b+p-c,cy:m+c,r:c,fill:"black"}),r.createElement("rect",{x:b-1,y:m+v-c+1,width:c,height:c,fill:"white"}),r.createElement("circle",{cx:b+c,cy:m+v-c,r:c,fill:"black"}),r.createElement("rect",{x:b+p-c+1,y:m+v-c+1,width:c,height:c,fill:"white"}),r.createElement("circle",{cx:b+p-c,cy:m+v-c,r:c,fill:"black "})),r.createElement("clipPath",{id:"clip-path"},r.createElement("rect",{x:0,y:0,width:n,height:m}),r.createElement("rect",{x:0,y:m,width:b,height:v}),r.createElement("rect",{x:_+o+s,y:m,width:Y(n-o-b),height:v}),r.createElement("rect",{x:0,y:i+a+s,width:n,height:Y(t-a-m)}))),r.createElement("rect",{x:0,y:0,width:n,height:t,fill:"currentColor",mask:"url(#mask-main)"}),r.createElement("rect",{x:0,y:0,width:n,height:t,fill:"currentColor",clipPath:"url(#clip-path)",pointerEvents:"auto"}),r.createElement("rect",{x:b,y:m,width:p,height:v,pointerEvents:"auto",fill:"transparent",display:u?"block":"none",className:d})))}ue.propTypes={windowWidth:v.number.isRequired,windowHeight:v.number.isRequired,targetWidth:v.number.isRequired,targetHeight:v.number.isRequired,targetTop:v.number.isRequired,targetLeft:v.number.isRequired,padding:v.number.isRequired,rounded:v.number.isRequired,disableInteraction:v.bool.isRequired,disableInteractionClassName:v.string.isRequired}
var de={accessibilityOptions:v.shape({ariaLabelledBy:v.string,closeButtonAriaLabel:v.string,showNavigationScreenReaders:v.bool}),badgeContent:v.func,highlightedMaskClassName:v.string,children:v.oneOfType([v.node,v.element]),className:v.string,closeWithMask:v.bool,inViewThreshold:v.number,isOpen:v.bool.isRequired,lastStepNextButton:v.node,maskClassName:v.string,maskSpace:v.number,nextButton:v.node,onAfterOpen:v.func,onBeforeClose:v.func,onRequestClose:v.func,prevButton:v.node,scrollDuration:v.number,scrollOffset:v.number,showButtons:v.bool,showCloseButton:v.bool,showNavigation:v.bool,showNavigationNumber:v.bool,showNumber:v.bool,startAt:v.number,goToStep:v.number,getCurrentStep:v.func,nextStep:v.func,prevStep:v.func,steps:v.arrayOf(v.shape({selector:v.string,content:v.oneOfType([v.node,v.element,v.func]).isRequired,position:v.oneOfType([v.arrayOf(v.number),v.oneOf(["top","right","bottom","left","center"])]),action:v.func,actionBefore:v.func,style:v.object,stepInteraction:v.bool,navDotAriaLabel:v.string})),update:v.string,updateDelay:v.number,disableInteraction:v.bool,disableDotsNavigation:v.bool,disableKeyboardNavigation:v.oneOfType([v.arrayOf(v.oneOf(["esc","right","left"])),v.bool]),rounded:v.number,accentColor:v.string}
var le={accessibilityOptions:{closeButtonAriaLabel:"Close",showNavigationScreenReaders:true},showNavigation:true,showNavigationNumber:true,showButtons:true,showCloseButton:true,showNumber:true,startAt:0,scrollDuration:1,maskSpace:10,updateDelay:1,disableInteraction:false,rounded:0,accentColor:"#fff",closeWithMask:true}
var fe={mask:{base:"reactour__mask",isOpen:"reactour__mask--is-open",disableInteraction:"reactour__mask--disable-interaction"},helper:{base:"reactour__helper",isOpen:"reactour__helper--is-open"},dot:{base:"reactour__dot",active:"reactour__dot--is-active"}}
var pe=function(e){var n=Object.prototype
var t=n.hasOwnProperty
var o
var a="function"===typeof Symbol?Symbol:{}
var r=a.iterator||"@@iterator"
var i=a.asyncIterator||"@@asyncIterator"
var _=a.toStringTag||"@@toStringTag"
function s(e,n,t){Object.defineProperty(e,n,{value:t,enumerable:true,configurable:true,writable:true})
return e[n]}try{s({},"")}catch(e){s=function(e,n,t){return e[n]=t}}function c(e,n,t,o){var a=n&&n.prototype instanceof m?n:m
var r=Object.create(a.prototype)
var i=new A(o||[])
r._invoke=S(e,t,i)
return r}e.wrap=c
function u(e,n,t){try{return{type:"normal",arg:e.call(n,t)}}catch(e){return{type:"throw",arg:e}}}var d="suspendedStart"
var l="suspendedYield"
var f="executing"
var p="completed"
var v={}
function m(){}function b(){}function h(){}var g={}
g[r]=function(){return this}
var y=Object.getPrototypeOf
var k=y&&y(y(T([])))
k&&k!==n&&t.call(k,r)&&(g=k)
var w=h.prototype=m.prototype=Object.create(g)
b.prototype=w.constructor=h
h.constructor=b
b.displayName=s(h,_,"GeneratorFunction")
function C(e){["next","throw","return"].forEach((function(n){s(e,n,(function(e){return this._invoke(n,e)}))}))}e.isGeneratorFunction=function(e){var n="function"===typeof e&&e.constructor
return!!n&&(n===b||"GeneratorFunction"===(n.displayName||n.name))}
e.mark=function(e){if(Object.setPrototypeOf)Object.setPrototypeOf(e,h)
else{e.__proto__=h
s(e,_,"GeneratorFunction")}e.prototype=Object.create(w)
return e}
e.awrap=function(e){return{__await:e}}
function j(e,n){function o(a,r,i,_){var s=u(e[a],e,r)
if("throw"!==s.type){var c=s.arg
var d=c.value
if(d&&"object"===typeof d&&t.call(d,"__await"))return n.resolve(d.__await).then((function(e){o("next",e,i,_)}),(function(e){o("throw",e,i,_)}))
return n.resolve(d).then((function(e){c.value=e
i(c)}),(function(e){return o("throw",e,i,_)}))}_(s.arg)}var a
function r(e,t){function r(){return new n((function(n,a){o(e,t,n,a)}))}return a=a?a.then(r,r):r()}this._invoke=r}C(j.prototype)
j.prototype[i]=function(){return this}
e.AsyncIterator=j
e.async=function(n,t,o,a,r){void 0===r&&(r=Promise)
var i=new j(c(n,t,o,a),r)
return e.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))}
function S(e,n,t){var o=d
return function(a,r){if(o===f)throw new Error("Generator is already running")
if(o===p){if("throw"===a)throw r
return z()}t.method=a
t.arg=r
while(true){var i=t.delegate
if(i){var _=O(i,t)
if(_){if(_===v)continue
return _}}if("next"===t.method)t.sent=t._sent=t.arg
else if("throw"===t.method){if(o===d){o=p
throw t.arg}t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg)
o=f
var s=u(e,n,t)
if("normal"===s.type){o=t.done?p:l
if(s.arg===v)continue
return{value:s.arg,done:t.done}}if("throw"===s.type){o=p
t.method="throw"
t.arg=s.arg}}}}function O(e,n){var t=e.iterator[n.method]
if(t===o){n.delegate=null
if("throw"===n.method){if(e.iterator["return"]){n.method="return"
n.arg=o
O(e,n)
if("throw"===n.method)return v}n.method="throw"
n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=u(t,e.iterator,n.arg)
if("throw"===a.type){n.method="throw"
n.arg=a.arg
n.delegate=null
return v}var r=a.arg
if(!r){n.method="throw"
n.arg=new TypeError("iterator result is not an object")
n.delegate=null
return v}if(!r.done)return r
n[e.resultName]=r.value
n.next=e.nextLoc
if("return"!==n.method){n.method="next"
n.arg=o}n.delegate=null
return v}C(w)
s(w,_,"Generator")
w[r]=function(){return this}
w.toString=function(){return"[object Generator]"}
function x(e){var n={tryLoc:e[0]}
1 in e&&(n.catchLoc=e[1])
if(2 in e){n.finallyLoc=e[2]
n.afterLoc=e[3]}this.tryEntries.push(n)}function H(e){var n=e.completion||{}
n.type="normal"
delete n.arg
e.completion=n}function A(e){this.tryEntries=[{tryLoc:"root"}]
e.forEach(x,this)
this.reset(true)}e.keys=function(e){var n=[]
for(var t in e)n.push(t)
n.reverse()
return function t(){while(n.length){var o=n.pop()
if(o in e){t.value=o
t.done=false
return t}}t.done=true
return t}}
function T(e){if(e){var n=e[r]
if(n)return n.call(e)
if("function"===typeof e.next)return e
if(!isNaN(e.length)){var a=-1,i=function n(){while(++a<e.length)if(t.call(e,a)){n.value=e[a]
n.done=false
return n}n.value=o
n.done=true
return n}
return i.next=i}}return{next:z}}e.values=T
function z(){return{value:o,done:true}}A.prototype={constructor:A,reset:function(e){this.prev=0
this.next=0
this.sent=this._sent=o
this.done=false
this.delegate=null
this.method="next"
this.arg=o
this.tryEntries.forEach(H)
if(!e)for(var n in this)"t"===n.charAt(0)&&t.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=o)},stop:function(){this.done=true
var e=this.tryEntries[0]
var n=e.completion
if("throw"===n.type)throw n.arg
return this.rval},dispatchException:function(e){if(this.done)throw e
var n=this
function a(t,a){_.type="throw"
_.arg=e
n.next=t
if(a){n.method="next"
n.arg=o}return!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r]
var _=i.completion
if("root"===i.tryLoc)return a("end")
if(i.tryLoc<=this.prev){var s=t.call(i,"catchLoc")
var c=t.call(i,"finallyLoc")
if(s&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,true)
if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,true)}else{if(!c)throw new Error("try statement without catch or finally")
if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,n){for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o]
if(a.tryLoc<=this.prev&&t.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var r=a
break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=n&&n<=r.finallyLoc&&(r=null)
var i=r?r.completion:{}
i.type=e
i.arg=n
if(r){this.method="next"
this.next=r.finallyLoc
return v}return this.complete(i)},complete:function(e,n){if("throw"===e.type)throw e.arg
if("break"===e.type||"continue"===e.type)this.next=e.arg
else if("return"===e.type){this.rval=this.arg=e.arg
this.method="return"
this.next="end"}else"normal"===e.type&&n&&(this.next=n)
return v},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n]
if(t.finallyLoc===e){this.complete(t.completion,t.afterLoc)
H(t)
return v}}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n]
if(t.tryLoc===e){var o=t.completion
if("throw"===o.type){var a=o.arg
H(t)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,t){this.delegate={iterator:T(e),resultName:n,nextLoc:t}
"next"===this.method&&(this.arg=o)
return v}}
return e}(e.exports)
try{regeneratorRuntime=pe}catch(e){Function("r","regeneratorRuntime = r")(pe)}var ve=function(){}
var me=function(e){var n=e.children,t=e.isOpen,o=e.startAt,l=e.steps,f=e.scrollDuration,p=e.inViewThreshold,v=e.scrollOffset,m=e.disableInteraction,g=e.disableKeyboardNavigation,k=e.className,w=e.closeWithMask,C=e.onRequestClose,S=void 0===C?ve:C,O=e.onAfterOpen,x=e.onBeforeClose,H=e.CustomHelper,A=e.showNumber,T=e.accentColor,q=e.highlightedMaskClassName,I=e.maskClassName,B=e.showButtons,E=e.showNavigation,P=e.prevButton,N=e.showNavigationNumber,G=e.disableDotsNavigation,D=e.lastStepNextButton,W=e.nextButton,Q=e.rounded,U=e.maskSpace,Y=e.showCloseButton,J=e.accessibilityOptions,Z=e.badgeContent
var ee=a.useState(0),te=j(ee,2),ae=te[0],ie=te[1]
var se=a.useState(false),ce=j(se,2),de=ce[0],pe=ce[1]
var me=a.useReducer(he,be),ge=j(me,2),ye=ge[0],ke=ge[1]
var we=a.useRef(null)
var Ce=a.useRef(null)
var je=y(y({},le.accessibilityOptions),J)
u(Ce,(function(e,n){if(t){Te()
e.forEach((function(e){"childList"===e.type&&e.addedNodes.length>0?setTimeout((function(){return Re(M(e.addedNodes[0]))}),500):"childList"===e.type&&e.removedNodes.length}))}else n.disconnect()}))
a.useEffect((function(){var e=c(Te,100)
window.addEventListener("resize",e,false)
if(t){window.addEventListener("keydown",Se,false)
if(de)Te()
else{pe(true)
Re({width:-1*U,height:-1*U,top:-1*Q,left:-1*Q},"center")
ie(o)
Te(o)}if(we.current){we.current.focus()
O&&"function"===typeof O&&O(we.current)}}return function(){window.removeEventListener("keydown",Se)
window.removeEventListener("resize",e)}}),[ae,t])
function Se(e){e.stopPropagation()
if(true===g)return
var n,t,o
if(g){n=g.includes("esc")
t=g.includes("right")
o=g.includes("left")}if(27===e.keyCode&&!n){e.preventDefault()
Oe()}if(39===e.keyCode&&!t){e.preventDefault()
xe()}if(37===e.keyCode&&!o){e.preventDefault()
He()}}function Oe(e){x&&"function"===typeof x&&x(we.current)
S(e)}function xe(){ie((function(e){return e<l.length-1?e+1:e}))}function He(){ie((function(e){return e>0?e-1:e}))}function Ae(e){ie(e)}function Te(e){return ze.apply(this,arguments)}function ze(){ze=b(regeneratorRuntime.mark((function e(n){var t,o,a,r,i,c,u,d
return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=l[n]||l[ae]
o=X(),a=o.w,r=o.h
if(!(t.actionBefore&&"function"===typeof t.actionBefore)){e.next=5
break}e.next=5
return t.actionBefore()
case 5:i=t.selector?document.querySelector(t.selector):null
t.observe&&(Ce.current=document.querySelector(t.observe))
if(i){c=M(i)
if(K(y(y({},c),{},{w:a,h:r,threshold:p})))Re(c,t.position)
else{u=s(i)
d=v||(c.height>r?-25:-r/2+c.height/2)
_.to(i,{context:V(u)?window:u,duration:f,offset:d,callback:function(e){Re(M(e),t.position)}})}}else ke({type:"NO_DOM_NODE",helperPosition:t.position,w:a,h:r,inDOM:false})
if(!(t.action&&"function"===typeof t.action)){e.next=11
break}e.next=11
return t.action(i)
case 11:case"end":return e.stop()}}),e)})))
return ze.apply(this,arguments)}function Re(e,n){var t=X(),o=t.w,a=t.h
var r=M(we.current),i=r.width,_=r.height
ke(y(y({type:"HAS_DOM_NODE"},e),{},{helperWidth:i,helperHeight:_,helperPosition:n,w:o,h:a,inDOM:true}))}function qe(e){w&&-1===e.target.className.baseVal.split(" ").indexOf(fe.mask.disableInteraction)&&Oe(e)}var Ie=l[ae]&&("function"===typeof l[ae].content?l[ae].content({close:Oe,goTo:Ae,inDOM:ye.inDOM,step:ae+1}):l[ae].content)
return t?r.createElement(R,null,r.createElement(z,null),r.createElement(ue,{onClick:qe,windowWidth:ye.w,windowHeight:ye.h,targetWidth:ye.width,targetHeight:ye.height,targetTop:ye.top,targetLeft:ye.left,padding:U,rounded:Q,className:I,disableInteraction:false===l[ae].stepInteraction||m?!l[ae].stepInteraction:m,disableInteractionClassName:i(fe.mask.disableInteraction,q)}),r.createElement(d,null,r.createElement($,{ref:we,windowWidth:ye.w,windowHeight:ye.h,targetWidth:ye.width,targetHeight:ye.height,targetTop:ye.top,targetLeft:ye.left,targetRight:ye.right,targetBottom:ye.bottom,helperWidth:ye.helperWidth,helperHeight:ye.helperHeight,helperPosition:ye.helperPosition,padding:U,tabIndex:-1,current:ae,style:l[ae].style?l[ae].style:{},rounded:Q,accentColor:T,defaultStyles:!H,className:i(fe.helper.base,k,h({},fe.helper.isOpen,t)),role:"dialog","aria-labelledby":je.ariaLabelledBy},H?r.createElement(H,{current:ae,totalSteps:l.length,gotoStep:Ae,close:Oe,content:Ie},n):r.createElement(r.Fragment,null,n,Ie,A&&r.createElement(ne,{"data-tour-elem":"badge"},"function"===typeof Z?Z(ae+1,l.length):ae+1),(B||E)&&r.createElement(oe,{"data-tour-elem":"controls"},B&&r.createElement(F,{onClick:He,disabled:0===ae,label:P||null}),E&&r.createElement(re,{"data-tour-elem":"navigation","aria-hidden":!je.showNavigationScreenReaders},l.map((function(e,n){return r.createElement(_e,{key:"".concat(e.selector?e.selector:"undef","_").concat(n),onClick:function(){return Ae(n)},current:ae,index:n,disabled:ae===n||G,showNumber:N,"data-tour-elem":"dot",className:i(fe.dot.base,h({},fe.dot.active,ae===n)),"aria-label":e.navDotAriaLabel})}))),B&&r.createElement(F,{onClick:ae===l.length-1?D?Oe:function(){}:xe,disabled:!D&&ae===l.length-1,inverted:true,label:D&&ae===l.length-1?D:W||null})),Y&&r.createElement(L,{onClick:Oe,ariaLabel:je.closeButtonAriaLabel}))))):null}
var be={top:0,right:0,bottom:0,left:0,width:0,height:0,w:0,h:0}
function he(e,n){switch(n.type){case"HAS_DOM_NODE":n.type
var t=w(n,["type"])
return y(y({},e),t)
case"NO_DOM_NODE":return y(y({},e),{},{top:e.h+10,right:e.w/2+9,bottom:e.h/2+9,left:n.w/2-e.helperWidth?e.helperWidth/2:0,width:0,height:0,w:n.w,h:n.h,helperPosition:"center"})
default:return e}}me.propTypes=de
me.defaultProps=le
var ge=a.memo(me)
n.Arrow=F
n.Badge=ne
n.Close=L
n.Controls=oe
n.Dot=_e
n.Navigation=re
n.default=ge},RhCJ:function(e,n,t){"use strict"
t.d(n,"a",(function(){return o}))
function o(e,n,t){if("input"===e.as){if("children"===n&&e.children||void 0==e.value)return new Error("Prop `value` and not `children` must be supplied if `".concat(t,' as="input"`'))}else{if("value"===n&&void 0!=e.value)return new Error("Prop `children` and not `value` must be supplied unless `".concat(t,' as="input"`'))
if(!e.children)return new Error("Prop `children` should be supplied unless `".concat(t,' as="input"`.'))}return}},SIPS:function(e,n,t){"use strict"
t.d(n,"a",(function(){return a}))
t.d(n,"b",(function(){return r}))
var o=true
function a(e,n,t){var o=""
t.split(" ").forEach((function(t){void 0!==e[t]?n.push(e[t]):o+=t+" "}))
return o}var r=function(e,n,t){var a=e.key+"-"+n.name;(false===t||false===o&&void 0!==e.compat)&&void 0===e.registered[a]&&(e.registered[a]=n.styles)
if(void 0===e.inserted[n.name]){var r=n
do{e.insert("."+a,r,e.sheet,true)
r=r.next}while(void 0!==r)}}},SUI8:function(e,n,t){e.exports=t.p+"ca84af47828f7f92d590632457092028.svg"},SksO:function(e,n){function t(n,o){e.exports=t=Object.setPrototypeOf||function(e,n){e.__proto__=n
return e}
e.exports["default"]=e.exports,e.exports.__esModule=true
return t(n,o)}e.exports=t
e.exports["default"]=e.exports,e.exports.__esModule=true},TAiQ:function(e,n,t){e.exports=t.p+"07ae7e68d04810235f41644b9d8e9559.svg"},UdWW:function(e,n,t){e.exports=t.p+"b2f6ee80349d3109638688b6c8320362.svg"},VbXa:function(e,n,t){var o=t("SksO")
function a(e,n){e.prototype=Object.create(n.prototype)
e.prototype.constructor=e
o(e,n)}e.exports=a
e.exports["default"]=e.exports,e.exports.__esModule=true},XcDt:function(e,n,t){"use strict"
t.d(n,"a",(function(){return o}))
function o(e){switch(e){case"balloon":return t("UdWW")
case"bifrost_trophy":return t("a4+4")
case"butterfly":return t("nFKT")
case"einstein_rosen_trophy":return t("TAiQ")
case"fire":return t("EtU4")
case"flowers":return t("emQa")
case"four_leaf_clover":return t("tmwZ")
case"gift":return t("AqF9")
case"gnome":return t("SUI8")
case"helix_rocket":return t("n0KH")
case"horse_shoe":return t("+/1D")
case"hot_air_balloon":return t("o8b0")
case"magic_mystery_thumbs_up":return t("y8Ae")
case"medal":return t("ta4P")
case"moon":return t("5DjV")
case"ninja":return t("6jBc")
case"panama_rocket":return t("ep3v")
case"panda":return t("6PP4")
case"panda_unicycle":return t("DQGf")
case"pinwheel":return t("uTth")
case"pizza_slice":return t("beG4")
case"rocket":return t("8+nF")
case"star":return t("74md")
case"thumbs_up":return t("YdiR")
case"trophy":return t("zJo5")
default:throw new Error("Unknown asset key: "+e)}}},YdiR:function(e,n,t){e.exports=t.p+"3c69b54740b20693ba19732a06f91a7d.svg"},YqUS:function(e,n,t){"use strict"
Object.defineProperty(n,"__esModule",{value:true})
var o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
var a=t("umwU")
n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.duration,r=void 0===t?500:t,i=n.context,_=void 0===i?window:i,s=n.offset,c=void 0===s?0:s,u=n.ease,d=void 0===u?"easeInOutCubic":u,l=n.callback
if("object"!==("undefined"===typeof window?"undefined":o(window)))return
var f=_.scrollTop||window.pageYOffset
var p=(0,a.calcEndPoint)(e,_,c)
var v=performance.now()
var m=window.requestAnimationFrame
var b=function n(){var t=performance.now()-v
var o=(0,a.setPosition)(f,p,t,r,d)
_!==window?_.scrollTop=o:window.scroll(0,o)
t>r?"function"===typeof l&&l(e):m(n)}
b()}
e.exports=n["default"]},ZbPE:function(e,n,t){"use strict"
t.d(n,"a",(function(){return S}))
var o=t("rePB")
var a=t("1OyB")
var r=t("vuIU")
var i=t("Ji7U")
var _=t("LK+K")
var s=t("q1tI")
var c=t.n(s)
var u=t("17x9")
var d=t.n(u)
var l=t("TSYQ")
var f=t.n(l)
var p=t("J2CL")
var v=t("KgFQ")
var m=t("jtGx")
var b=t("nAyT")
var h=t("VTBJ")
function g(e){var n=e.typography,t=e.colors,o=e.spacing
return Object(h["a"])({},n,{primaryInverseColor:t.textLightest,primaryColor:t.textDarkest,secondaryColor:t.textDark,secondaryInverseColor:t.textLight,warningColor:t.textWarning,brandColor:t.textBrand,errorColor:t.textDanger,dangerColor:t.textDanger,successColor:t.textSuccess,alertColor:t.textAlert,paragraphMargin:"".concat(o.medium," 0")})}g.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
var y,k,w,C
var j={componentId:"enRcg",template:function(e){return"\n\n.enRcg_bGBk{font-family:".concat(e.fontFamily||"inherit","}\n\n.enRcg_bGBk sub,.enRcg_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.enRcg_bGBk sup{top:-0.4em}\n\n.enRcg_bGBk sub{bottom:-0.4em}\n\n.enRcg_bGBk code,.enRcg_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.enRcg_bGBk em,.enRcg_bGBk i{font-style:italic}\n\n.enRcg_bGBk b,.enRcg_bGBk strong{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.enRcg_bGBk p{display:block;margin:").concat(e.paragraphMargin||"inherit",";padding:0}\n\ninput.enRcg_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.enRcg_bGBk[type]{text-align:left}\n\n[dir=rtl] input.enRcg_bGBk[type]{text-align:right}\n\n.enRcg_bGBk:focus,input.enRcg_bGBk[type]:focus{outline:none}\n\n.enRcg_bGBk.enRcg_qFsi,input.enRcg_bGBk[type].enRcg_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_bLsb,input.enRcg_bGBk[type].enRcg_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_ezBQ,input.enRcg_bGBk[type].enRcg_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dlnd,input.enRcg_bGBk[type].enRcg_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_cJLh,input.enRcg_bGBk[type].enRcg_cJLh{color:").concat(e.successColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fpfC,input.enRcg_bGBk[type].enRcg_fpfC{color:").concat(e.brandColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eHcp,input.enRcg_bGBk[type].enRcg_eHcp{color:").concat(e.warningColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dwua,input.enRcg_bGBk[type].enRcg_dwua{color:").concat(e.errorColor||"inherit","}\n\n.enRcg_bGBk.enRcg_NQMb,input.enRcg_bGBk[type].enRcg_NQMb{color:").concat(e.dangerColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eZgl,input.enRcg_bGBk[type].enRcg_eZgl{color:").concat(e.alertColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fbNi,input.enRcg_bGBk[type].enRcg_fbNi{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-break:break-word}\n\n.enRcg_bGBk.enRcg_drST,input.enRcg_bGBk[type].enRcg_drST{font-weight:").concat(e.fontWeightNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_pEgL,input.enRcg_bGBk[type].enRcg_pEgL{font-weight:").concat(e.fontWeightLight||"inherit","}\n\n.enRcg_bGBk.enRcg_bdMA,input.enRcg_bGBk[type].enRcg_bdMA{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.enRcg_bGBk.enRcg_ijuF,input.enRcg_bGBk[type].enRcg_ijuF{font-style:normal}\n\n.enRcg_bGBk.enRcg_fetN,input.enRcg_bGBk[type].enRcg_fetN{font-style:italic}\n\n.enRcg_bGBk.enRcg_dfBC,input.enRcg_bGBk[type].enRcg_dfBC{font-size:").concat(e.fontSizeXSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_doqw,input.enRcg_bGBk[type].enRcg_doqw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_ycrn,input.enRcg_bGBk[type].enRcg_ycrn{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.enRcg_bGBk.enRcg_cMDj,input.enRcg_bGBk[type].enRcg_cMDj{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_eoMd,input.enRcg_bGBk[type].enRcg_eoMd{font-size:").concat(e.fontSizeXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fdca,input.enRcg_bGBk[type].enRcg_fdca{font-size:").concat(e.fontSizeXXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fEWX,input.enRcg_bGBk[type].enRcg_fEWX{line-height:").concat(e.lineHeight||"inherit","}\n\n.enRcg_bGBk.enRcg_fNIu,input.enRcg_bGBk[type].enRcg_fNIu{line-height:").concat(e.lineHeightFit||"inherit","}\n\n.enRcg_bGBk.enRcg_dfDs,input.enRcg_bGBk[type].enRcg_dfDs{line-height:").concat(e.lineHeightCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bDjL,input.enRcg_bGBk[type].enRcg_bDjL{line-height:").concat(e.lineHeightDouble||"inherit","}\n\n.enRcg_bGBk.enRcg_eQnG,input.enRcg_bGBk[type].enRcg_eQnG{letter-spacing:").concat(e.letterSpacingNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_bbUA,input.enRcg_bGBk[type].enRcg_bbUA{letter-spacing:").concat(e.letterSpacingCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bRWU,input.enRcg_bGBk[type].enRcg_bRWU{letter-spacing:").concat(e.letterSpacingExpanded||"inherit","}\n\n.enRcg_bGBk.enRcg_wZsr,input.enRcg_bGBk[type].enRcg_wZsr{text-transform:none}\n\n.enRcg_bGBk.enRcg_fCZK,input.enRcg_bGBk[type].enRcg_fCZK{text-transform:capitalize}\n\n.enRcg_bGBk.enRcg_dsRi,input.enRcg_bGBk[type].enRcg_dsRi{text-transform:uppercase}\n\n.enRcg_bGBk.enRcg_bLtD,input.enRcg_bGBk[type].enRcg_bLtD{text-transform:lowercase}")},root:"enRcg_bGBk","color-primary":"enRcg_qFsi","color-secondary":"enRcg_bLsb","color-primary-inverse":"enRcg_ezBQ","color-secondary-inverse":"enRcg_dlnd","color-success":"enRcg_cJLh","color-brand":"enRcg_fpfC","color-warning":"enRcg_eHcp","color-error":"enRcg_dwua","color-danger":"enRcg_NQMb","color-alert":"enRcg_eZgl","wrap-break-word":"enRcg_fbNi","weight-normal":"enRcg_drST","weight-light":"enRcg_pEgL","weight-bold":"enRcg_bdMA","style-normal":"enRcg_ijuF","style-italic":"enRcg_fetN","x-small":"enRcg_dfBC",small:"enRcg_doqw",medium:"enRcg_ycrn",large:"enRcg_cMDj","x-large":"enRcg_eoMd","xx-large":"enRcg_fdca","lineHeight-default":"enRcg_fEWX","lineHeight-fit":"enRcg_fNIu","lineHeight-condensed":"enRcg_dfDs","lineHeight-double":"enRcg_bDjL","letterSpacing-normal":"enRcg_eQnG","letterSpacing-condensed":"enRcg_bbUA","letterSpacing-expanded":"enRcg_bRWU","transform-none":"enRcg_wZsr","transform-capitalize":"enRcg_fCZK","transform-uppercase":"enRcg_dsRi","transform-lowercase":"enRcg_bLtD"}
var S=(y=Object(p["l"])(g,j),y(k=(C=w=function(e){Object(i["a"])(t,e)
var n=Object(_["a"])(t)
function t(){Object(a["a"])(this,t)
return n.apply(this,arguments)}Object(r["a"])(t,[{key:"render",value:function(){var e
var n=this.props,a=n.wrap,r=n.weight,i=n.fontStyle,_=n.size,s=n.lineHeight,u=n.letterSpacing,d=n.transform,l=n.color,p=n.children
var b=Object(v["a"])(t,this.props)
return c.a.createElement(b,Object.assign({},Object(m["b"])(this.props),{className:f()((e={},Object(o["a"])(e,j.root,true),Object(o["a"])(e,j[_],_),Object(o["a"])(e,j["wrap-".concat(a)],a),Object(o["a"])(e,j["weight-".concat(r)],r),Object(o["a"])(e,j["style-".concat(i)],i),Object(o["a"])(e,j["transform-".concat(d)],d),Object(o["a"])(e,j["lineHeight-".concat(s)],s),Object(o["a"])(e,j["letterSpacing-".concat(u)],u),Object(o["a"])(e,j["color-".concat(l)],l),e)),ref:this.props.elementRef}),p)}}])
t.displayName="Text"
return t}(s["Component"]),w.propTypes={as:d.a.elementType,children:d.a.node,color:b["a"].deprecatePropValues(d.a.oneOf(["primary","secondary","brand","success","warning","error","danger","alert","primary-inverse","secondary-inverse"]),["error"],"It will be removed in version 8.0.0. Use `danger` instead."),elementRef:d.a.func,fontStyle:d.a.oneOf(["italic","normal"]),letterSpacing:d.a.oneOf(["normal","condensed","expanded"]),lineHeight:d.a.oneOf(["default","fit","condensed","double"]),size:d.a.oneOf(["x-small","small","medium","large","x-large","xx-large"]),transform:d.a.oneOf(["none","capitalize","uppercase","lowercase"]),weight:d.a.oneOf(["normal","light","bold"]),wrap:d.a.oneOf(["normal","break-word"])},w.defaultProps={as:"span",wrap:"normal",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},C))||k)},"a4+4":function(e,n,t){e.exports=t.p+"19e13db9eff30ef23756dab03da4fa6b.svg"},beG4:function(e,n,t){e.exports=t.p+"fb9e67436f6a3284c347a06c2a9880c7.svg"},dI71:function(e,n,t){"use strict"
t.d(n,"a",(function(){return a}))
var o=t("s4An")
function a(e,n){e.prototype=Object.create(n.prototype)
e.prototype.constructor=e
Object(o["a"])(e,n)}},emQa:function(e,n,t){e.exports=t.p+"9653f6f097baf3ca7ce84feb4bdaa205.svg"},ep3v:function(e,n,t){e.exports=t.p+"a0399135543132e50f5da59646f778c4.svg"},gsf9:function(e,n,t){"use strict"
Object.defineProperty(n,"__esModule",{value:true})
var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]
for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}
var a=t("YqUS")
var r=i(a)
function i(e){return e&&e.__esModule?e:{default:e}}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.query,t=void 0===n?'[href^="#"]:not([href="#"]':n,a=e.match,i=void 0===a?function(e){return document.getElementById(e.hash.substring(1))}:a,_=e.hashChange,s=void 0===_||_,c=e.scrollSmoothConfig
var u=document.querySelectorAll(t)
var d=function(e){e.preventDefault()
var n=i(e.target)
if(!n)return
s&&history.replaceState(null,null,"#"+n.id);(0,r.default)(n,o({},c))}
Array.from(u).map((function(e){e.addEventListener("click",d,false)}))}
e.exports=n["default"]},kR0I:function(e,n,t){"use strict"
t.d(n,"a",(function(){return _}))
var o=t("KQm4")
var a=t("QF4Q")
var r=t("xm5c")
var i=t("IPIv")
function _(e,n,t){var i=Object(a["a"])(e)
if(!i||"function"!==typeof i.querySelectorAll)return[]
var _="a[href],frame,iframe,object,input:not([type=hidden]),select,textarea,button,*[tabindex]"
var s=Array.from(i.querySelectorAll(_))
t&&Object(r["a"])(i,_)&&(s=[].concat(Object(o["a"])(s),[i]))
return s.filter((function(e){return"function"===typeof n?n(e)&&d(e):d(e)}))}function s(e){var n=Object(i["a"])(e)
return"inline"!==n.display&&e.offsetWidth<=0&&e.offsetHeight<=0||"none"===n.display}function c(e){var n=["fixed","absolute"]
if(n.includes(e.style.position.toLowerCase()))return true
if(n.includes(Object(i["a"])(e).getPropertyValue("position").toLowerCase()))return true
return false}function u(e){while(e){if(e===document.body)break
if(s(e))return false
if(c(e))break
e=e.parentNode}return true}function d(e){return!e.disabled&&u(e)}},lSNA:function(e,n){function t(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:true,configurable:true,writable:true}):e[n]=t
return e}e.exports=t
e.exports["default"]=e.exports,e.exports.__esModule=true},mrSG:function(e,n,t){"use strict"
t.r(n)
t.d(n,"__extends",(function(){return a}))
t.d(n,"__assign",(function(){return r}))
t.d(n,"__rest",(function(){return i}))
t.d(n,"__decorate",(function(){return _}))
t.d(n,"__param",(function(){return s}))
t.d(n,"__metadata",(function(){return c}))
t.d(n,"__awaiter",(function(){return u}))
t.d(n,"__generator",(function(){return d}))
t.d(n,"__exportStar",(function(){return l}))
t.d(n,"__values",(function(){return f}))
t.d(n,"__read",(function(){return p}))
t.d(n,"__spread",(function(){return v}))
t.d(n,"__spreadArrays",(function(){return m}))
t.d(n,"__await",(function(){return b}))
t.d(n,"__asyncGenerator",(function(){return h}))
t.d(n,"__asyncDelegator",(function(){return g}))
t.d(n,"__asyncValues",(function(){return y}))
t.d(n,"__makeTemplateObject",(function(){return k}))
t.d(n,"__importStar",(function(){return w}))
t.d(n,"__importDefault",(function(){return C}))
var o=function(e,n){o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])}
return o(e,n)}
function a(e,n){o(e,n)
function t(){this.constructor=e}e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var r=function(){r=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++){n=arguments[t]
for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}
return r.apply(this,arguments)}
function i(e,n){var t={}
for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o])
if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0
for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)n.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]])}return t}function _(e,n,t,o){var a,r=arguments.length,i=r<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o
if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,n,t,o)
else for(var _=e.length-1;_>=0;_--)(a=e[_])&&(i=(r<3?a(i):r>3?a(n,t,i):a(n,t))||i)
return r>3&&i&&Object.defineProperty(n,t,i),i}function s(e,n){return function(t,o){n(t,o,e)}}function c(e,n){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,n)}function u(e,n,t,o){return new(t||(t=Promise))((function(a,r){function i(e){try{s(o.next(e))}catch(e){r(e)}}function _(e){try{s(o["throw"](e))}catch(e){r(e)}}function s(e){e.done?a(e.value):new t((function(n){n(e.value)})).then(i,_)}s((o=o.apply(e,n||[])).next())}))}function d(e,n){var t,o,a,r,i={label:0,sent:function(){if(1&a[0])throw a[1]
return a[1]},trys:[],ops:[]}
return r={next:_(0),throw:_(1),return:_(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r
function _(e){return function(n){return s([e,n])}}function s(r){if(t)throw new TypeError("Generator is already executing.")
while(i)try{if(t=1,o&&(a=2&r[0]?o["return"]:r[0]?o["throw"]||((a=o["return"])&&a.call(o),0):o.next)&&!(a=a.call(o,r[1])).done)return a;(o=0,a)&&(r=[2&r[0],a.value])
switch(r[0]){case 0:case 1:a=r
break
case 4:i.label++
return{value:r[1],done:false}
case 5:i.label++
o=r[1]
r=[0]
continue
case 7:r=i.ops.pop()
i.trys.pop()
continue
default:if(!(a=i.trys,a=a.length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){i=0
continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){i.label=r[1]
break}if(6===r[0]&&i.label<a[1]){i.label=a[1]
a=r
break}if(a&&i.label<a[2]){i.label=a[2]
i.ops.push(r)
break}a[2]&&i.ops.pop()
i.trys.pop()
continue}r=n.call(e,i)}catch(e){r=[6,e]
o=0}finally{t=a=0}if(5&r[0])throw r[1]
return{value:r[0]?r[1]:void 0,done:true}}}function l(e,n){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}function f(e){var n="function"===typeof Symbol&&e[Symbol.iterator],t=0
if(n)return n.call(e)
return{next:function(){e&&t>=e.length&&(e=void 0)
return{value:e&&e[t++],done:!e}}}}function p(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator]
if(!t)return e
var o,a,r=t.call(e),i=[]
try{while((void 0===n||n-- >0)&&!(o=r.next()).done)i.push(o.value)}catch(e){a={error:e}}finally{try{o&&!o.done&&(t=r["return"])&&t.call(r)}finally{if(a)throw a.error}}return i}function v(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(p(arguments[n]))
return e}function m(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length
var o=Array(e),a=0
for(n=0;n<t;n++)for(var r=arguments[n],i=0,_=r.length;i<_;i++,a++)o[a]=r[i]
return o}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function h(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var o,a=t.apply(e,n||[]),r=[]
return o={},i("next"),i("throw"),i("return"),o[Symbol.asyncIterator]=function(){return this},o
function i(e){a[e]&&(o[e]=function(n){return new Promise((function(t,o){r.push([e,n,t,o])>1||_(e,n)}))})}function _(e,n){try{s(a[e](n))}catch(e){d(r[0][3],e)}}function s(e){e.value instanceof b?Promise.resolve(e.value.v).then(c,u):d(r[0][2],e)}function c(e){_("next",e)}function u(e){_("throw",e)}function d(e,n){(e(n),r.shift(),r.length)&&_(r[0][0],r[0][1])}}function g(e){var n,t
return n={},o("next"),o("throw",(function(e){throw e})),o("return"),n[Symbol.iterator]=function(){return this},n
function o(o,a){n[o]=e[o]?function(n){return(t=!t)?{value:b(e[o](n)),done:"return"===o}:a?a(n):n}:a}}function y(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var n,t=e[Symbol.asyncIterator]
return t?t.call(e):(e="function"===typeof f?f(e):e[Symbol.iterator](),n={},o("next"),o("throw"),o("return"),n[Symbol.asyncIterator]=function(){return this},n)
function o(t){n[t]=e[t]&&function(n){return new Promise((function(o,r){n=e[t](n),a(o,r,n.done,n.value)}))}}function a(e,n,t,o){Promise.resolve(o).then((function(n){e({value:n,done:t})}),n)}}function k(e,n){Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n
return e}function w(e){if(e&&e.__esModule)return e
var n={}
if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t])
n.default=e
return n}function C(e){return e&&e.__esModule?e:{default:e}}},msMH:function(e,n,t){"use strict"
t.d(n,"a",(function(){return R}))
var o=t("rePB")
var a=t("Ff2n")
var r=t("1OyB")
var i=t("vuIU")
var _=t("Ji7U")
var s=t("LK+K")
var c=t("q1tI")
var u=t.n(c)
var d=t("17x9")
var l=t.n(d)
var f=t("TSYQ")
var p=t.n(f)
var v=t("n12J")
var m=t("J2CL")
var b=t("RhCJ")
var h=t("nAyT")
var g=t("KgFQ")
var y=t("jtGx")
var k=t("oXx0")
function w(e){var n=e.borders,t=e.colors,o=e.spacing,a=e.typography
return{lineHeight:a.lineHeightFit,h1FontSize:a.fontSizeXXLarge,h1FontWeight:a.fontWeightLight,h1FontFamily:a.fontFamily,h2FontSize:a.fontSizeXLarge,h2FontWeight:a.fontWeightNormal,h2FontFamily:a.fontFamily,h3FontSize:a.fontSizeLarge,h3FontWeight:a.fontWeightBold,h3FontFamily:a.fontFamily,h4FontSize:a.fontSizeMedium,h4FontWeight:a.fontWeightBold,h4FontFamily:a.fontFamily,h5FontSize:a.fontSizeSmall,h5FontWeight:a.fontWeightNormal,h5FontFamily:a.fontFamily,primaryInverseColor:t.textLightest,primaryColor:t.textDarkest,secondaryColor:t.textDark,secondaryInverseColor:t.textLight,borderPadding:o.xxxSmall,borderColor:t.borderMedium,borderWidth:n.widthSmall,borderStyle:n.style}}w.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"]}}
w["instructure"]=function(e){var n=e.typography
return{h1FontFamily:n.fontFamilyHeading,h2FontFamily:n.fontFamilyHeading,h3FontWeight:n.fontWeightBold,h3FontSize:"2.125rem",h4FontWeight:n.fontWeightBold,h4FontSize:n.fontSizeLarge,h5FontWeight:n.fontWeightBold,h5FontSize:n.fontSizeMedium}}
var C={fontFamily:["h1FontFamily","h2FontFamily","h3FontFamily","h4FontFamily","h5FontFamily"]}
var j=Object(m["e"])({map:C,version:"8.0.0"})
var S,O,x,H,A,T
var z={componentId:"blnAQ",template:function(e){return"\n\n.blnAQ_bGBk{line-height:".concat(e.lineHeight||"inherit",";margin:0}\n\ninput.blnAQ_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:-0.375rem 0 0 0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.blnAQ_bGBk[type]{text-align:left}\n\n[dir=rtl] input.blnAQ_bGBk[type]{text-align:right}\n\ninput.blnAQ_bGBk[type]:focus{outline:none}\n\n.blnAQ_fCtg{font-family:").concat(e.h1FontFamily||"inherit",";font-size:").concat(e.h1FontSize||"inherit",";font-weight:").concat(e.h1FontWeight||"inherit","}\n\n.blnAQ_cVrl{font-family:").concat(e.h2FontFamily||"inherit",";font-size:").concat(e.h2FontSize||"inherit",";font-weight:").concat(e.h2FontWeight||"inherit","}\n\n.blnAQ_dnfM{font-family:").concat(e.h3FontFamily||"inherit",";font-size:").concat(e.h3FontSize||"inherit",";font-weight:").concat(e.h3FontWeight||"inherit","}\n\n.blnAQ_KGwv{font-family:").concat(e.h4FontFamily||"inherit",";font-size:").concat(e.h4FontSize||"inherit",";font-weight:").concat(e.h4FontWeight||"inherit","}\n\n.blnAQ_eYKA{font-family:").concat(e.h5FontFamily||"inherit",";font-size:").concat(e.h5FontSize||"inherit",";font-weight:").concat(e.h5FontWeight||"inherit","}\n\n.blnAQ_dbSc{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0}\n\n.blnAQ_bACI{border-top:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-top:").concat(e.borderPadding||"inherit","}\n\n.blnAQ_kWwi{border-bottom:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-bottom:").concat(e.borderPadding||"inherit","}\n\n.blnAQ_drOs{color:inherit}\n\n.blnAQ_eCSh{color:").concat(e.primaryColor||"inherit","}\n\n.blnAQ_buuG{color:").concat(e.secondaryColor||"inherit","}\n\n.blnAQ_bFtJ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.blnAQ_dsSB{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.blnAQ_bOQC{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}")},root:"blnAQ_bGBk","level--h1":"blnAQ_fCtg","level--h2":"blnAQ_cVrl","level--h3":"blnAQ_dnfM","level--h4":"blnAQ_KGwv","level--h5":"blnAQ_eYKA","level--reset":"blnAQ_dbSc","border--top":"blnAQ_bACI","border--bottom":"blnAQ_kWwi","color--inherit":"blnAQ_drOs","color--primary":"blnAQ_eCSh","color--secondary":"blnAQ_buuG","color--primary-inverse":"blnAQ_bFtJ","color--secondary-inverse":"blnAQ_dsSB",ellipsis:"blnAQ_bOQC"}
var R=(S=Object(h["a"])("8.0.0",{ellipsis:"<TruncateText />"}),O=Object(k["a"])(),x=Object(m["l"])(w,z,j),S(H=O(H=x(H=(T=A=function(e){Object(_["a"])(t,e)
var n=Object(s["a"])(t)
function t(){Object(r["a"])(this,t)
return n.apply(this,arguments)}Object(i["a"])(t,[{key:"render",value:function(){var e
var n=this.props,r=n.border,i=n.children,_=n.color,s=n.level,c=n.margin,d=n.elementRef,l=n.ellipsis,f=Object(a["a"])(n,["border","children","color","level","margin","elementRef","ellipsis"])
var m=Object(g["a"])(t,this.props,(function(){return"reset"===s?"span":s}))
return u.a.createElement(v["a"],Object.assign({},Object(y["b"])(f),{className:p()((e={},Object(o["a"])(e,z.root,true),Object(o["a"])(e,z["level--".concat(s)],true),Object(o["a"])(e,z["color--".concat(_)],_),Object(o["a"])(e,z["border--".concat(r)],"none"!==r),Object(o["a"])(e,z.ellipsis,l),e)),as:m,margin:c,elementRef:d}),i)}}])
t.displayName="Heading"
return t}(c["Component"]),A.propTypes={border:l.a.oneOf(["none","top","bottom"]),children:b["a"],color:l.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","inherit"]),level:l.a.oneOf(["h1","h2","h3","h4","h5","reset"]),as:l.a.elementType,margin:m["c"].spacing,elementRef:l.a.func,ellipsis:l.a.bool},A.defaultProps={children:null,margin:void 0,elementRef:void 0,border:"none",color:"inherit",level:"h2"},T))||H)||H)||H)},n0KH:function(e,n,t){e.exports=t.p+"e182963f1bf2e6ddf6a89feed36c73df.svg"},nFKT:function(e,n,t){e.exports=t.p+"da5f57cff79e2bbe89efde36c3eefb97.svg"},o8b0:function(e,n,t){e.exports=t.p+"c02d358d7f21da9c13248c143f6452ab.svg"},qKvR:function(e,n,t){"use strict"
t.r(n)
t.d(n,"CacheProvider",(function(){return w}))
t.d(n,"ThemeContext",(function(){return k}))
t.d(n,"withEmotionCache",(function(){return C}))
t.d(n,"css",(function(){return A}))
t.d(n,"ClassNames",(function(){return E}))
t.d(n,"Global",(function(){return z}))
t.d(n,"createElement",(function(){return T}))
t.d(n,"jsx",(function(){return T}))
t.d(n,"keyframes",(function(){return q}))
var o=t("dI71")
var a=t("q1tI")
function r(e){if(e.sheet)return e.sheet
for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}function i(e){var n=document.createElement("style")
n.setAttribute("data-emotion",e.key)
void 0!==e.nonce&&n.setAttribute("nonce",e.nonce)
n.appendChild(document.createTextNode(""))
return n}var _=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy
this.tags=[]
this.ctr=0
this.nonce=e.nonce
this.key=e.key
this.container=e.container
this.before=null}var n=e.prototype
n.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)===0){var n=i(this)
var t
t=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling
this.container.insertBefore(n,t)
this.tags.push(n)}var o=this.tags[this.tags.length-1]
if(this.isSpeedy){var a=r(o)
try{var _=105===e.charCodeAt(1)&&64===e.charCodeAt(0)
a.insertRule(e,_?0:a.cssRules.length)}catch(e){false}}else o.appendChild(document.createTextNode(e))
this.ctr++}
n.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)}))
this.tags=[]
this.ctr=0}
return e}()
function s(e){function n(e,o,s,c,u){for(var f,p,v,m,b,k=0,C=0,j=0,S=0,O=0,x=0,q=v=f=0,B=0,P=0,N=0,F=0,G=s.length,D=G-1,L="",M="",K="",V="";B<G;){p=s.charCodeAt(B)
B===D&&0!==C+S+j+k&&(0!==C&&(p=47===C?10:47),S=j=k=0,G++,D++)
if(0===C+S+j+k){if(B===D&&(0<P&&(L=L.replace(l,"")),0<L.trim().length)){switch(p){case 32:case 9:case 59:case 13:case 10:break
default:L+=s.charAt(B)}p=59}switch(p){case 123:L=L.trim()
f=L.charCodeAt(0)
v=1
for(F=++B;B<G;){switch(p=s.charCodeAt(B)){case 123:v++
break
case 125:v--
break
case 47:switch(p=s.charCodeAt(B+1)){case 42:case 47:e:{for(q=B+1;q<D;++q)switch(s.charCodeAt(q)){case 47:if(42===p&&42===s.charCodeAt(q-1)&&B+2!==q){B=q+1
break e}break
case 10:if(47===p){B=q+1
break e}}B=q}}break
case 91:p++
case 40:p++
case 34:case 39:for(;B++<D&&s.charCodeAt(B)!==p;);}if(0===v)break
B++}v=s.substring(F,B)
0===f&&(f=(L=L.replace(d,"").trim()).charCodeAt(0))
switch(f){case 64:0<P&&(L=L.replace(l,""))
p=L.charCodeAt(1)
switch(p){case 100:case 109:case 115:case 45:P=o
break
default:P=R}v=n(o,P,v,p,u+1)
F=v.length
0<I&&(P=t(R,L,N),b=_(3,v,P,o,A,H,F,p,u,c),L=P.join(""),void 0!==b&&0===(F=(v=b.trim()).length)&&(p=0,v=""))
if(0<F)switch(p){case 115:L=L.replace(w,i)
case 100:case 109:case 45:v=L+"{"+v+"}"
break
case 107:L=L.replace(h,"$1 $2")
v=L+"{"+v+"}"
v=1===z||2===z&&r("@"+v,3)?"@-webkit-"+v+"@"+v:"@"+v
break
default:v=L+v,112===c&&(v=(M+=v,""))}else v=""
break
default:v=n(o,t(o,L,N),v,c,u+1)}K+=v
v=N=P=q=f=0
L=""
p=s.charCodeAt(++B)
break
case 125:case 59:L=(0<P?L.replace(l,""):L).trim()
if(1<(F=L.length))switch(0===q&&(f=L.charCodeAt(0),45===f||96<f&&123>f)&&(F=(L=L.replace(" ",":")).length),0<I&&void 0!==(b=_(1,L,o,e,A,H,M.length,c,u,c))&&0===(F=(L=b.trim()).length)&&(L="\0\0"),f=L.charCodeAt(0),p=L.charCodeAt(1),f){case 0:break
case 64:if(105===p||99===p){V+=L+s.charAt(B)
break}default:58!==L.charCodeAt(F-1)&&(M+=a(L,f,p,L.charCodeAt(2)))}N=P=q=f=0
L=""
p=s.charCodeAt(++B)}}switch(p){case 13:case 10:47===C?C=0:0===1+f&&107!==c&&0<L.length&&(P=1,L+="\0")
0<I*E&&_(0,L,o,e,A,H,M.length,c,u,c)
H=1
A++
break
case 59:case 125:if(0===C+S+j+k){H++
break}default:H++
m=s.charAt(B)
switch(p){case 9:case 32:if(0===S+k+C)switch(O){case 44:case 58:case 9:case 32:m=""
break
default:32!==p&&(m=" ")}break
case 0:m="\\0"
break
case 12:m="\\f"
break
case 11:m="\\v"
break
case 38:0===S+C+k&&(P=N=1,m="\f"+m)
break
case 108:if(0===S+C+k+T&&0<q)switch(B-q){case 2:112===O&&58===s.charCodeAt(B-3)&&(T=O)
case 8:111===x&&(T=x)}break
case 58:0===S+C+k&&(q=B)
break
case 44:0===C+j+S+k&&(P=1,m+="\r")
break
case 34:case 39:0===C&&(S=S===p?0:0===S?p:S)
break
case 91:0===S+C+j&&k++
break
case 93:0===S+C+j&&k--
break
case 41:0===S+C+k&&j--
break
case 40:if(0===S+C+k){if(0===f)switch(2*O+3*x){case 533:break
default:f=1}j++}break
case 64:0===C+j+S+k+q+v&&(v=1)
break
case 42:case 47:if(!(0<S+k+j))switch(C){case 0:switch(2*p+3*s.charCodeAt(B+1)){case 235:C=47
break
case 220:F=B,C=42}break
case 42:47===p&&42===O&&F+2!==B&&(33===s.charCodeAt(F+2)&&(M+=s.substring(F,B+1)),m="",C=0)}}0===C&&(L+=m)}x=O
O=p
B++}F=M.length
if(0<F){P=o
if(0<I&&(b=_(2,M,P,e,A,H,F,c,u,c),void 0!==b&&0===(M=b).length))return V+M+K
M=P.join(",")+"{"+M+"}"
if(0!==z*T){2!==z||r(M,2)||(T=0)
switch(T){case 111:M=M.replace(y,":-moz-$1")+M
break
case 112:M=M.replace(g,"::-webkit-input-$1")+M.replace(g,"::-moz-$1")+M.replace(g,":-ms-input-$1")+M}T=0}}return V+M+K}function t(e,n,t){var a=n.trim().split(m)
n=a
var r=a.length,i=e.length
switch(i){case 0:case 1:var _=0
for(e=0===i?"":e[0]+" ";_<r;++_)n[_]=o(e,n[_],t).trim()
break
default:var s=_=0
for(n=[];_<r;++_)for(var c=0;c<i;++c)n[s++]=o(e[c]+" ",a[_],t).trim()}return n}function o(e,n,t){var o=n.charCodeAt(0)
33>o&&(o=(n=n.trim()).charCodeAt(0))
switch(o){case 38:return n.replace(b,"$1"+e.trim())
case 58:return e.trim()+n.replace(b,"$1"+e.trim())
default:if(0<1*t&&0<n.indexOf("\f"))return n.replace(b,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+n}function a(e,n,t,o){var i=e+";",_=2*n+3*t+4*o
if(944===_){e=i.indexOf(":",9)+1
var s=i.substring(e,i.length-1).trim()
s=i.substring(0,e).trim()+s+";"
return 1===z||2===z&&r(s,1)?"-webkit-"+s+s:s}if(0===z||2===z&&!r(i,1))return i
switch(_){case 1015:return 97===i.charCodeAt(10)?"-webkit-"+i+i:i
case 951:return 116===i.charCodeAt(3)?"-webkit-"+i+i:i
case 963:return 110===i.charCodeAt(5)?"-webkit-"+i+i:i
case 1009:if(100!==i.charCodeAt(4))break
case 969:case 942:return"-webkit-"+i+i
case 978:return"-webkit-"+i+"-moz-"+i+i
case 1019:case 983:return"-webkit-"+i+"-moz-"+i+"-ms-"+i+i
case 883:if(45===i.charCodeAt(8))return"-webkit-"+i+i
if(0<i.indexOf("image-set(",11))return i.replace(x,"$1-webkit-$2")+i
break
case 932:if(45===i.charCodeAt(4))switch(i.charCodeAt(5)){case 103:return"-webkit-box-"+i.replace("-grow","")+"-webkit-"+i+"-ms-"+i.replace("grow","positive")+i
case 115:return"-webkit-"+i+"-ms-"+i.replace("shrink","negative")+i
case 98:return"-webkit-"+i+"-ms-"+i.replace("basis","preferred-size")+i}return"-webkit-"+i+"-ms-"+i+i
case 964:return"-webkit-"+i+"-ms-flex-"+i+i
case 1023:if(99!==i.charCodeAt(8))break
s=i.substring(i.indexOf(":",15)).replace("flex-","").replace("space-between","justify")
return"-webkit-box-pack"+s+"-webkit-"+i+"-ms-flex-pack"+s+i
case 1005:return p.test(i)?i.replace(f,":-webkit-")+i.replace(f,":-moz-")+i:i
case 1e3:s=i.substring(13).trim()
n=s.indexOf("-")+1
switch(s.charCodeAt(0)+s.charCodeAt(n)){case 226:s=i.replace(k,"tb")
break
case 232:s=i.replace(k,"tb-rl")
break
case 220:s=i.replace(k,"lr")
break
default:return i}return"-webkit-"+i+"-ms-"+s+i
case 1017:if(-1===i.indexOf("sticky",9))break
case 975:n=(i=e).length-10
s=(33===i.charCodeAt(n)?i.substring(0,n):i).substring(e.indexOf(":",7)+1).trim()
switch(_=s.charCodeAt(0)+(0|s.charCodeAt(7))){case 203:if(111>s.charCodeAt(8))break
case 115:i=i.replace(s,"-webkit-"+s)+";"+i
break
case 207:case 102:i=i.replace(s,"-webkit-"+(102<_?"inline-":"")+"box")+";"+i.replace(s,"-webkit-"+s)+";"+i.replace(s,"-ms-"+s+"box")+";"+i}return i+";"
case 938:if(45===i.charCodeAt(5))switch(i.charCodeAt(6)){case 105:return s=i.replace("-items",""),"-webkit-"+i+"-webkit-box-"+s+"-ms-flex-"+s+i
case 115:return"-webkit-"+i+"-ms-flex-item-"+i.replace(j,"")+i
default:return"-webkit-"+i+"-ms-flex-line-pack"+i.replace("align-content","").replace(j,"")+i}break
case 973:case 989:if(45!==i.charCodeAt(3)||122===i.charCodeAt(4))break
case 931:case 953:if(!0===O.test(e))return 115===(s=e.substring(e.indexOf(":")+1)).charCodeAt(0)?a(e.replace("stretch","fill-available"),n,t,o).replace(":fill-available",":stretch"):i.replace(s,"-webkit-"+s)+i.replace(s,"-moz-"+s.replace("fill-",""))+i
break
case 962:if(i="-webkit-"+i+(102===i.charCodeAt(5)?"-ms-"+i:"")+i,211===t+o&&105===i.charCodeAt(13)&&0<i.indexOf("transform",10))return i.substring(0,i.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+i}return i}function r(e,n){var t=e.indexOf(1===n?":":"{"),o=e.substring(0,3!==n?t:10)
t=e.substring(t+1,e.length-1)
return B(2!==n?o:o.replace(S,"$1"),t,n)}function i(e,n){var t=a(n,n.charCodeAt(0),n.charCodeAt(1),n.charCodeAt(2))
return t!==n+";"?t.replace(C," or ($1)").substring(4):"("+n+")"}function _(e,n,t,o,a,r,i,_,s,c){for(var d,l=0,f=n;l<I;++l)switch(d=q[l].call(u,e,f,t,o,a,r,i,_,s,c)){case void 0:case!1:case!0:case null:break
default:f=d}if(f!==n)return f}function s(e){switch(e){case void 0:case null:I=q.length=0
break
default:if("function"===typeof e)q[I++]=e
else if("object"===typeof e)for(var n=0,t=e.length;n<t;++n)s(e[n])
else E=0|!!e}return s}function c(e){e=e.prefix
void 0!==e&&(B=null,e?"function"!==typeof e?z=1:(z=2,B=e):z=0)
return c}function u(e,t){var o=e
33>o.charCodeAt(0)&&(o=o.trim())
P=o
o=[P]
if(0<I){var a=_(-1,t,o,o,A,H,0,0,0,0)
void 0!==a&&"string"===typeof a&&(t=a)}var r=n(R,o,t,0,0)
0<I&&(a=_(-2,r,o,o,A,H,r.length,0,0,0),void 0!==a&&(r=a))
P=""
T=0
H=A=1
return r}var d=/^\0+/g,l=/[\0\r\f]/g,f=/: */g,p=/zoo|gra/,v=/([,: ])(transform)/g,m=/,\r+?/g,b=/([\t\r\n ])*\f?&/g,h=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,y=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,j=/-self|flex-/g,S=/[^]*?(:[rp][el]a[\w-]+)[^]*/,O=/stretch|:\s*\w+\-(?:conte|avail)/,x=/([^-])(image-set\()/,H=1,A=1,T=0,z=1,R=[],q=[],I=0,B=null,E=0,P=""
u.use=s
u.set=c
void 0!==e&&c(e)
return u}var c=s
var u="/*|*/"
var d=u+"}"
function l(e){e&&f.current.insert(e+"}")}var f={current:null}
var p=function(e,n,t,o,a,r,i,_,s,c){switch(e){case 1:switch(n.charCodeAt(0)){case 64:f.current.insert(n+";")
return""
case 108:if(98===n.charCodeAt(2))return""}break
case 2:if(0===_)return n+u
break
case 3:switch(_){case 102:case 112:f.current.insert(t[0]+n)
return""
default:return n+(0===c?u:"")}case-2:n.split(d).forEach(l)}}
var v=function(e){void 0===e&&(e={})
var n=e.key||"css"
var t
void 0!==e.prefix&&(t={prefix:e.prefix})
var o=new c(t)
false
var a={}
var r
r=e.container||document.head
var i=document.querySelectorAll("style[data-emotion-"+n+"]")
Array.prototype.forEach.call(i,(function(e){var t=e.getAttribute("data-emotion-"+n)
t.split(" ").forEach((function(e){a[e]=true}))
e.parentNode!==r&&r.appendChild(e)}))
var s
o.use(e.stylisPlugins)(p)
s=function(e,n,t,a){var r=n.name
f.current=t
o(e,n.styles)
a&&(u.inserted[r]=true)}
var u={key:n,sheet:new _({key:n,container:r,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:a,registered:{},insert:s}
return u}
var m=v
t("VbXa")
var b=t("SIPS")
var h=t("MiSq")
var g=Object.prototype.hasOwnProperty
var y=Object(a["createContext"])("undefined"!==typeof HTMLElement?m():null)
var k=Object(a["createContext"])({})
var w=y.Provider
var C=function(e){var n=function(n,t){return Object(a["createElement"])(y.Consumer,null,(function(o){return e(n,o,t)}))}
return Object(a["forwardRef"])(n)}
var j="__EMOTION_TYPE_PLEASE_DO_NOT_USE__"
var S=function(e,n){false
var t={}
for(var o in n)g.call(n,o)&&(t[o]=n[o])
t[j]=e
return t}
var O=function(e,n,t,o){var r=null===t?n.css:n.css(t)
"string"===typeof r&&void 0!==e.registered[r]&&(r=e.registered[r])
var i=n[j]
var _=[r]
var s=""
"string"===typeof n.className?s=Object(b["a"])(e.registered,_,n.className):null!=n.className&&(s=n.className+" ")
var c=Object(h["a"])(_)
Object(b["b"])(e,c,"string"===typeof i)
s+=e.key+"-"+c.name
var u={}
for(var d in n)g.call(n,d)&&"css"!==d&&d!==j&&true&&(u[d]=n[d])
u.ref=o
u.className=s
var l=Object(a["createElement"])(i,u)
return l}
var x=C((function(e,n,t){if("function"===typeof e.css)return Object(a["createElement"])(k.Consumer,null,(function(o){return O(n,e,o,t)}))
return O(n,e,null,t)}))
false
function H(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t]
return Object(h["a"])(n)}var A=H
var T=function(e,n){var t=arguments
if(null==n||!g.call(n,"css"))return a["createElement"].apply(void 0,t)
var o=t.length
var r=new Array(o)
r[0]=x
r[1]=S(e,n)
for(var i=2;i<o;i++)r[i]=t[i]
return a["createElement"].apply(null,r)}
var z=C((function(e,n){false
var t=e.styles
if("function"===typeof t)return Object(a["createElement"])(k.Consumer,null,(function(e){var o=Object(h["a"])([t(e)])
return Object(a["createElement"])(R,{serialized:o,cache:n})}))
var o=Object(h["a"])([t])
return Object(a["createElement"])(R,{serialized:o,cache:n})}))
var R=function(e){Object(o["a"])(n,e)
function n(n,t,o){return e.call(this,n,t,o)||this}var t=n.prototype
t.componentDidMount=function(){this.sheet=new _({key:this.props.cache.key+"-global",nonce:this.props.cache.sheet.nonce,container:this.props.cache.sheet.container})
var e=document.querySelector("style[data-emotion-"+this.props.cache.key+'="'+this.props.serialized.name+'"]')
null!==e&&this.sheet.tags.push(e)
this.props.cache.sheet.tags.length&&(this.sheet.before=this.props.cache.sheet.tags[0])
this.insertStyles()}
t.componentDidUpdate=function(e){e.serialized.name!==this.props.serialized.name&&this.insertStyles()}
t.insertStyles=function(){void 0!==this.props.serialized.next&&Object(b["b"])(this.props.cache,this.props.serialized.next,true)
if(this.sheet.tags.length){var e=this.sheet.tags[this.sheet.tags.length-1].nextElementSibling
this.sheet.before=e
this.sheet.flush()}this.props.cache.insert("",this.props.serialized,this.sheet,false)}
t.componentWillUnmount=function(){this.sheet.flush()}
t.render=function(){return null}
return n}(a["Component"])
var q=function(){var e=A.apply(void 0,arguments)
var n="animation-"+e.name
return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}
var I=function e(n){var t=n.length
var o=0
var a=""
for(;o<t;o++){var r=n[o]
if(null==r)continue
var i=void 0
switch(typeof r){case"boolean":break
case"object":if(Array.isArray(r))i=e(r)
else{i=""
for(var _ in r)if(r[_]&&_){i&&(i+=" ")
i+=_}}break
default:i=r}if(i){a&&(a+=" ")
a+=i}}return a}
function B(e,n,t){var o=[]
var a=Object(b["a"])(e,o,t)
if(o.length<2)return t
return a+n(o)}var E=C((function(e,n){return Object(a["createElement"])(k.Consumer,null,(function(t){var o=false
var a=function(){if(o&&false)throw new Error("css can only be used during render")
for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a]
var r=Object(h["a"])(t,n.registered)
Object(b["b"])(n,r,false)
return n.key+"-"+r.name}
var r=function(){if(o&&false)throw new Error("cx can only be used during render")
for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return B(n.registered,a,I(t))}
var i={css:a,cx:r,theme:t}
var _=e.children(i)
o=true
return _}))}))},sopX:function(e,n){var t="focus-outline-hidden"
function o(){var e=this
document.addEventListener("keydown",(function(n){e.focusByKeyboard=true}),true)
document.addEventListener("mousedown",(function(n){e.focusByKeyboard=false}),true)
document.addEventListener("focus",(function(n){e.updateVisibility()}),true)
document.addEventListener("focusout",(function(n){window.setTimeout((function(){if(!document.hasFocus()){e.focusByKeyboard=true
e.updateVisibility()}}),0)}))
this.updateVisibility()}o.prototype={focusByKeyboard:true,updateVisibility:function(){this.hidden=!this.focusByKeyboard},set hidden(e){document.documentElement.classList.toggle(t,e)},get hidden(){return document.documentElement.classList.contains(t)}}
new o},ta4P:function(e,n,t){e.exports=t.p+"f089ce9a74e629ada25e533cd80e613b.svg"},tmwZ:function(e,n,t){e.exports=t.p+"3cbe0ada8d2654a9068fe58ddc825c42.svg"},uTth:function(e,n,t){e.exports=t.p+"cd083e9003324d7b0fb767a634a2eba1.svg"},umwU:function(e,n,t){"use strict"
Object.defineProperty(n,"__esModule",{value:true})
var o=n.easeFunctions={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}
var a=n.isNumeric=function(e){return!isNaN(parseFloat(e))&&isFinite(e)}
n.setPosition=function(e,n,t,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"easeInOutCubic"
return t>a?n:e+(n-e)*o[r](t/a)}
n.calcEndPoint=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window
var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
if(a(e))return parseInt(e)+t
var o=n===window?window.pageYOffset:n.scrollTop-n.getBoundingClientRect().top
var r="html"===e.nodeName.toLowerCase()?-o:e.getBoundingClientRect().top+o
return r+t}},wx14:function(e,n,t){"use strict"
t.d(n,"a",(function(){return o}))
function o(){o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]
for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}
return o.apply(this,arguments)}},xm5c:function(e,n,t){"use strict"
t.d(n,"a",(function(){return a}))
var o=t("QF4Q")
function a(e,n){var t=e&&Object(o["a"])(e)
if(!t)return false
return t.matches?t.matches(n):t.msMatchesSelector(n)}},y8Ae:function(e,n,t){e.exports=t.p+"af17f52bd56019052a3ecd2101c9b0ea.svg"},zJo5:function(e,n,t){e.exports=t.p+"ec5edc396112fc95f8639fb2342f3b7f.svg"}}])

//# sourceMappingURL=617-c-b53a538038.js.map