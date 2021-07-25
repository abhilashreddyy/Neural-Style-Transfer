(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[17],{"5vOu":function(e,n,t){"use strict"
t.d(n,"a",(function(){return x}))
var o=t("KQm4")
var r=t("1OyB")
var a=t("vuIU")
var i=t("Ji7U")
var l=t("LK+K")
var c=t("q1tI")
var s=t.n(c)
var u=t("17x9")
var d=t.n(u)
var f=t("J2CL")
var p=t("dpqJ")
var h=t("cClk")
var b=t("4Awi")
var v=t("II2N")
var m=t("jtGx")
var g=t("BTe1")
var y=t("rW8M")
var k=t("oXx0")
var _=t("NIsp")
var G=t("8Q55")
function O(e){var n=e.colors,t=e.typography,o=e.spacing
return{fontSize:t.fontSizeMedium,fontFamily:t.fontFamily,fontWeight:t.fontWeightBold,padding:"".concat(o.xSmall," ").concat(o.small),color:n.textDarkest,background:n.backgroundLightest}}O.canvas=function(e){return{color:e["ic-brand-font-color-dark"]}}
var M,I,J,W,S
var j={componentId:"eoNrR",template:function(e){return"\n\n.eoNrR_bGBk{display:block}\n\n.eoNrR_JelF{list-style-type:none;margin:0 0 0 0;padding:0}\n\n.eoNrR_blJt{background:".concat(e.background||"inherit",";color:").concat(e.color||"inherit",";display:block;font-family:").concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";padding:").concat(e.padding||"inherit",";text-align:start}\n\n[dir=ltr] .eoNrR_blJt{text-align:left}\n\n[dir=rtl] .eoNrR_blJt{text-align:right}")},root:"eoNrR_bGBk",items:"eoNrR_JelF",label:"eoNrR_blJt"}
var x=(M=Object(k["a"])(),I=Object(f["l"])(O,j),M(J=I(J=(S=W=function(e){Object(i["a"])(t,e)
var n=Object(l["a"])(t)
function t(e){var a
Object(r["a"])(this,t)
a=n.call(this)
a.handleSelect=function(e,n,t,o){if(a.props.disabled){e.preventDefault()
return}a.props.selected?a.updateSelected(e,n,a.props.selected,t,o):a.setState((function(r){return{selected:a.updateSelected(e,n,r.selected,t,o)}}))}
a.updateSelected=function(e,n,t,r,i){var l=a.props.allowMultiple
var c=l?Object(o["a"])(t):[]
var s=c.indexOf(n)
true===r&&s<0?c.push(n):false===r&&-1!==s?c.splice(s,1):!l&&c.length<1&&(c=Object(o["a"])(t))
"function"===typeof a.props.onSelect&&a.props.onSelect(e,c,r,i)
return c}
"undefined"===typeof e.selected&&(a.state={selected:a.selectedFromChildren(e)||e.defaultSelected})
a._labelId=Object(g["a"])("MenuItemGroup")
return a}Object(a["a"])(t,[{key:"selectedFromChildren",value:function(e){var n=e.children,t=e.allowMultiple
var o=[]
var r=c["Children"].toArray(n).filter((function(e){return Object(b["a"])(e,[_["a"]])}))
r.forEach((function(e,n){0!==o.length&&!t||!e.props.selected&&!e.props.defaultSelected||o.push(e.props.value||n)}))
return o.length>0?o:null}},{key:"renderLabel",value:function(){var e=this.props.label
return Object(y["a"])(e)?s.a.createElement("span",{className:j.label},e):e}},{key:"renderChildren",value:function(){var e=this
var n=this.props,t=n.children,o=n.disabled,r=n.controls,a=n.allowMultiple,i=n.isTabbable,l=n.onMouseOver
var u=-1
return c["Children"].map(t,(function(n){if(Object(b["a"])(n,[_["a"]])){++u
var t=n.props.value||u
return s.a.createElement("li",{role:"none"}," ",Object(v["a"])(n,{tabIndex:i&&0===u?0:-1,controls:r,value:t,type:a?"checkbox":"radio",ref:e.props.itemRef,disabled:o||n.props.disabled,selected:e.selected.indexOf(t)>-1,onSelect:e.handleSelect,onMouseOver:l})," ")}return n}))}},{key:"render",value:function(){var e=Object(m["a"])(this.props,t.propTypes)
return s.a.createElement("span",Object.assign({},e,{className:j.root,role:"presentation"}),s.a.createElement("span",{id:this._labelId},this.renderLabel()),s.a.createElement("ul",{role:"menu",className:j.items,"aria-disabled":this.props.disabled?"true":null,"aria-labelledby":this._labelId},this.renderChildren()))}},{key:"selected",get:function(){return"undefined"===typeof this.props.selected&&"undefined"===typeof this.state.selected?[]:"undefined"===typeof this.props.selected?Object(o["a"])(this.state.selected):Object(o["a"])(this.props.selected)}}])
t.displayName="MenuItemGroup"
return t}(c["Component"]),W.propTypes={label:d.a.node.isRequired,allowMultiple:d.a.bool,children:p["a"].oneOf([_["a"],G["a"]]),selected:Object(h["a"])(d.a.array,"onSelect","defaultSelected"),defaultSelected:d.a.array,onSelect:d.a.func,onMouseOver:d.a.func,onKeyDown:d.a.func,controls:d.a.string,itemRef:d.a.func,disabled:d.a.bool,isTabbable:d.a.bool},W.defaultProps={onMouseOver:void 0,disabled:false,controls:void 0,onKeyDown:void 0,selected:void 0,children:null,isTabbable:false,allowMultiple:false,defaultSelected:[],itemRef:function(e){},onSelect:function(e,n,t,o){}},S))||J)||J)},"8Q55":function(e,n,t){"use strict"
t.d(n,"a",(function(){return v}))
var o=t("1OyB")
var r=t("vuIU")
var a=t("Ji7U")
var i=t("LK+K")
var l=t("q1tI")
var c=t.n(l)
var s=t("J2CL")
var u=t("oXx0")
var d=function(e){var n=e.colors,t=e.borders,o=e.spacing
return{background:n.backgroundMedium,height:t.widthSmall,margin:"0 ".concat(o.small)}}
var f,p,h
var b={componentId:"dpuxe",template:function(e){return"\n\n.dpuxe_bGBk{background:".concat(e.background||"inherit",";height:").concat(e.height||"inherit",";margin:").concat(e.margin||"inherit",";overflow:hidden}")},root:"dpuxe_bGBk"}
var v=(f=Object(u["a"])(),p=Object(s["l"])(d,b),f(h=p(h=function(e){Object(a["a"])(t,e)
var n=Object(i["a"])(t)
function t(){Object(o["a"])(this,t)
return n.apply(this,arguments)}Object(r["a"])(t,[{key:"render",value:function(){return c.a.createElement("div",Object.assign({},this.props,{role:"presentation",className:b.root}))}}])
t.displayName="MenuItemSeparator"
return t}(l["Component"]))||h)||h)},NIsp:function(e,n,t){"use strict"
t.d(n,"a",(function(){return A}))
var o=t("rePB")
var r=t("1OyB")
var a=t("vuIU")
var i=t("JX7q")
var l=t("Ji7U")
var c=t("LK+K")
var s=t("q1tI")
var u=t.n(s)
var d=t("17x9")
var f=t.n(d)
var p=t("TSYQ")
var h=t.n(p)
var b=t("3zPy")
var v=t.n(b)
var m=t("VTBJ")
var g=t("hPGw")
var y=u.a.createElement("path",{d:"M1743.8579 267.012456L710.746654 1300.1237 176.005086 765.382131 0 941.387217 710.746654 1652.25843 1919.98754 443.142104z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var k=function(e){Object(l["a"])(t,e)
var n=Object(c["a"])(t)
function t(){Object(r["a"])(this,t)
return n.apply(this,arguments)}Object(a["a"])(t,[{key:"render",value:function(){return u.a.createElement(g["a"],Object.assign({},this.props,{name:"IconCheck",viewBox:"0 0 1920 1920"}),y)}}])
t.displayName="IconCheckSolid"
return t}(s["Component"])
k.glyphName="check"
k.variant="Solid"
k.propTypes=Object(m["a"])({},g["a"].propTypes)
var _=u.a.createElement("path",{d:"M568.129648 0.0124561278L392 176.142104 1175.86412 960.130789 392 1743.87035 568.129648 1920 1528.24798 960.130789z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var G=function(e){Object(l["a"])(t,e)
var n=Object(c["a"])(t)
function t(){Object(r["a"])(this,t)
return n.apply(this,arguments)}Object(a["a"])(t,[{key:"render",value:function(){return u.a.createElement(g["a"],Object.assign({},this.props,{name:"IconArrowOpenEnd",viewBox:"0 0 1920 1920",bidirectional:true}),_)}}])
t.displayName="IconArrowOpenEndSolid"
return t}(s["Component"])
G.glyphName="arrow-open-end"
G.variant="Solid"
G.propTypes=Object(m["a"])({},g["a"].propTypes)
var O=t("J2CL")
var M=t("BTe1")
var I=t("cClk")
var J=t("jtGx")
var W=t("KgFQ")
var S=t("9yTY")
var j=t("QF4Q")
var x=t("/UXv")
var B=t("oXx0")
var w=t("x0Js")
function C(e){var n=e.colors,t=e.spacing,o=e.typography
return{padding:"".concat(t.xSmall," ").concat(t.small),fontFamily:o.fontFamily,fontWeight:o.fontWeightNormal,lineHeight:o.lineHeightCondensed,fontSize:o.fontSizeMedium,labelPadding:t.large,labelColor:n.textDarkest,background:n.backgroundLightest,iconColor:n.textDarkest,iconPadding:t.small,activeBackground:n.backgroundBrand,activeLabelColor:n.textLightest,activeIconColor:n.textLightest}}C.canvas=function(e){return{labelColor:e["ic-brand-font-color-dark"],iconColor:e["ic-brand-font-color-dark"],activeBackground:e["ic-brand-primary"]}}
var T,N,K,D,F
var z={componentId:"sJGfW",template:function(e){return"\n\n.sJGfW_bGBk{-ms-user-select:none;-webkit-user-select:none;background:".concat(e.background||"inherit",";border:none;border-radius:0;border-radius:initial;box-sizing:border-box;cursor:pointer;display:block;font-family:").concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";line-height:").concat(e.lineHeight||"inherit",";margin:0;outline:none;padding:").concat(e.padding||"inherit",";position:relative;text-align:start;transition:background 0.2s;user-select:none;width:100%}\n\n[dir=ltr] .sJGfW_bGBk{text-align:left}\n\n[dir=rtl] .sJGfW_bGBk{text-align:right}\n\n.sJGfW_bGBk.sJGfW_eyNH .sJGfW_dnnz{inset-inline-end:").concat(e.iconPadding||"inherit",";inset-inline-start:auto}\n\n[dir=ltr] .sJGfW_bGBk.sJGfW_eyNH .sJGfW_dnnz{left:auto;right:").concat(e.iconPadding||"inherit","}\n\n[dir=rtl] .sJGfW_bGBk.sJGfW_eyNH .sJGfW_dnnz{left:").concat(e.iconPadding||"inherit",";right:auto}\n\n.sJGfW_bGBk[role=menuitemcheckbox],.sJGfW_bGBk[role=menuitemradio]{-webkit-padding-start:").concat(e.labelPadding||"inherit",";padding-inline-start:").concat(e.labelPadding||"inherit","}\n\n[dir=ltr] .sJGfW_bGBk[role=menuitemcheckbox],[dir=ltr] .sJGfW_bGBk[role=menuitemradio]{padding-left:").concat(e.labelPadding||"inherit","}\n\n[dir=rtl] .sJGfW_bGBk[role=menuitemcheckbox],[dir=rtl] .sJGfW_bGBk[role=menuitemradio]{padding-right:").concat(e.labelPadding||"inherit","}\n\n.sJGfW_bGBk[role=menuitemcheckbox] .sJGfW_dnnz,.sJGfW_bGBk[role=menuitemradio] .sJGfW_dnnz{inset-inline-end:auto;inset-inline-start:").concat(e.iconPadding||"inherit","}\n\n[dir=ltr] .sJGfW_bGBk[role=menuitemcheckbox] .sJGfW_dnnz,[dir=ltr] .sJGfW_bGBk[role=menuitemradio] .sJGfW_dnnz{left:").concat(e.iconPadding||"inherit",";right:auto}\n\n[dir=rtl] .sJGfW_bGBk[role=menuitemcheckbox] .sJGfW_dnnz,[dir=rtl] .sJGfW_bGBk[role=menuitemradio] .sJGfW_dnnz{left:auto;right:").concat(e.iconPadding||"inherit","}\n\n.sJGfW_bGBk.sJGfW_cSen,.sJGfW_bGBk:active,.sJGfW_bGBk:focus,.sJGfW_bGBk:hover,.sJGfW_bGBk[aria-expanded=true]{background:").concat(e.activeBackground||"inherit","}\n\n.sJGfW_bGBk.sJGfW_cSen .sJGfW_blJt,.sJGfW_bGBk:active .sJGfW_blJt,.sJGfW_bGBk:focus .sJGfW_blJt,.sJGfW_bGBk:hover .sJGfW_blJt,.sJGfW_bGBk[aria-expanded=true] .sJGfW_blJt{color:").concat(e.activeLabelColor||"inherit","}\n\n.sJGfW_bGBk.sJGfW_cSen .sJGfW_dnnz,.sJGfW_bGBk:active .sJGfW_dnnz,.sJGfW_bGBk:focus .sJGfW_dnnz,.sJGfW_bGBk:hover .sJGfW_dnnz,.sJGfW_bGBk[aria-expanded=true] .sJGfW_dnnz{color:").concat(e.activeIconColor||"inherit","}\n\n.sJGfW_bGBk::-moz-focus-inner{border:0;margin:0;padding:0}\n\n.sJGfW_bGBk[aria-disabled]{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.sJGfW_blJt{color:").concat(e.labelColor||"inherit","}\n\n.sJGfW_dnnz{align-items:center;color:").concat(e.iconColor||"inherit",";display:flex;height:100%;position:absolute;top:0;width:1em}\n\na.sJGfW_bGBk,a.sJGfW_bGBk:active,a.sJGfW_bGBk:focus,a.sJGfW_bGBk:hover,a.sJGfW_bGBk:link,a.sJGfW_bGBk:visited{text-decoration:none}")},root:"sJGfW_bGBk",flyout:"sJGfW_eyNH",icon:"sJGfW_dnnz",active:"sJGfW_cSen",label:"sJGfW_blJt"}
var E=u.a.createElement(k,null)
var R=u.a.createElement(G,null)
var A=(T=Object(B["a"])(),N=Object(O["l"])(C,z),T(K=N(K=(F=D=function(e){Object(l["a"])(t,e)
var n=Object(c["a"])(t)
function t(e){var o
Object(r["a"])(this,t)
o=n.call(this)
o.handleClick=function(e){var n=o.props,t=n.onSelect,r=n.onClick,a=n.disabled,l=n.value
var c=!o.selected
if(a){e.preventDefault()
return}"undefined"===typeof o.props.selected&&o.setState({selected:c})
if("function"===typeof t){e.persist()
t(e,l,c,Object(i["a"])(o))}"function"===typeof r&&r(e)}
o.handleKeyDown=function(e){var n=e.keyCode===v.a.codes.space
var t=e.keyCode===v.a.codes.enter
if(n||t){e.preventDefault()
e.stopPropagation()
t&&Object(j["a"])(o._node).click()}}
o.handleKeyUp=function(e){var n=e.keyCode===v.a.codes.space
var t=e.keyCode===v.a.codes.enter
if(n||t){e.preventDefault()
e.stopPropagation()
n&&Object(j["a"])(o._node).click()}}
o.handleMouseOver=function(e){o.focus()
"function"===typeof o.props.onMouseOver&&o.props.onMouseOver(e,Object(i["a"])(o))}
"undefined"===typeof e.selected&&(o.state={selected:e.defaultSelected})
o.labelId=Object(M["a"])("MenuItem__label")
return o}Object(a["a"])(t,[{key:"componentDidMount",value:function(){var e=w["a"].getMenuContext(this.context)
e&&e.registerMenuItem&&e.registerMenuItem(this)}},{key:"componentWillUnmount",value:function(){var e=w["a"].getMenuContext(this.context)
e&&e.registerMenuItem&&e.removeMenuItem(this)}},{key:"focus",value:function(){Object(j["a"])(this._node).focus()}},{key:"renderContent",value:function(){var e=this.props,n=e.children,t=e.type
return u.a.createElement("span",null,("checkbox"===t||"radio"===t)&&u.a.createElement("span",{className:z.icon},this.selected&&E),u.a.createElement("span",{className:z.label,id:this.labelId},n),"flyout"===t&&u.a.createElement("span",{className:z.icon},R))}},{key:"render",value:function(){var e,n=this
var r=this.props,a=r.disabled,i=r.controls,l=r.onKeyDown,c=r.onKeyUp,s=r.type,d=r.href
var f=Object(J["a"])(this.props,t.propTypes)
var p=this.elementType
var b=(e={},Object(o["a"])(e,z.root,true),Object(o["a"])(e,z.flyout,"flyout"===s),e)
return u.a.createElement(p,Object.assign({tabIndex:"-1"},f,{href:d,role:this.role,"aria-labelledby":this.labelId,"aria-disabled":a?"true":null,"aria-controls":i,"aria-checked":"checkbox"===s||"radio"===s?this.selected?"true":"false":null,onClick:this.handleClick,onKeyUp:Object(S["a"])(c,this.handleKeyUp),onKeyDown:Object(S["a"])(l,this.handleKeyDown),ref:function(e){n._node=e},className:h()(b),onMouseOver:this.handleMouseOver}),this.renderContent())}},{key:"elementType",get:function(){return Object(W["a"])(t,this.props)}},{key:"role",get:function(){switch(this.props.type){case"checkbox":return"menuitemcheckbox"
case"radio":return"menuitemradio"
case"flyout":return"button"
default:return"menuitem"}}},{key:"selected",get:function(){return"undefined"===typeof this.props.selected?this.state.selected:this.props.selected}},{key:"focused",get:function(){return Object(x["a"])(this._node)}}])
t.displayName="MenuItem"
return t}(s["Component"]),D.propTypes={children:f.a.node.isRequired,defaultSelected:f.a.bool,selected:Object(I["a"])(f.a.bool,"onSelect","defaultSelected"),onSelect:f.a.func,onClick:f.a.func,onKeyDown:f.a.func,onKeyUp:f.a.func,onMouseOver:f.a.func,controls:f.a.string,disabled:f.a.bool,as:f.a.elementType,type:f.a.oneOf(["button","checkbox","radio","flyout"]),value:f.a.oneOfType([f.a.string,f.a.number]),href:f.a.string},D.defaultProps={type:"button",disabled:false,onSelect:function(e,n,t,o){},defaultSelected:void 0,selected:void 0,onClick:void 0,onKeyDown:void 0,onKeyUp:void 0,onMouseOver:void 0,controls:void 0,value:void 0,href:void 0},D.contextTypes=w["a"].types,F))||K)||K)},sUqa:function(e,n,t){"use strict"
t.d(n,"a",(function(){return N}))
var o=t("1OyB")
var r=t("vuIU")
var a=t("JX7q")
var i=t("Ji7U")
var l=t("LK+K")
t("DEX3")
var c=t("q1tI")
var s=t.n(c)
var u=t("17x9")
var d=t.n(u)
var f=t("3zPy")
var p=t.n(f)
var h=t("jsCG")
var b=t("BTe1")
var v=t("dpqJ")
var m=t("cClk")
var g=t("UCAh")
var y=t("4Awi")
var k=t("II2N")
var _=t("J2CL")
var G=t("K7t/")
var O=t("oXx0")
var M=t("x0Js")
var I=t("NIsp")
var J=t("5vOu")
var W=t("8Q55")
var S=function(e){var n=e.breakpoints,t=e.colors,o=e.borders
return{minWidth:n.xxSmall,maxWidth:n.xSmall,background:t.backgroundLightest,focusBorderStyle:o.style,focusBorderWidth:o.widthMedium,focusBorderColor:t.borderBrand,focusBorderRadius:o.radiusMedium}}
var j,x,B,w,C
var T={componentId:"cAqHo",template:function(e){return"\n\n.cAqHo_eAjd{background:".concat(e.background||"inherit",";display:block;list-style-type:none;margin:0;max-width:").concat(e.maxWidth||"inherit",";min-width:").concat(e.minWidth||"inherit",";padding:0.25rem 0;position:relative}\n\n.cAqHo_eAjd:before{border:").concat(e.focusBorderWidth||"inherit"," ").concat(e.focusBorderStyle||"inherit"," ").concat(e.focusBorderColor||"inherit",";border-radius:").concat(e.focusBorderRadius||"inherit",';bottom:-0.25rem;content:"";left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.9)}\n\n.cAqHo_eAjd:focus{outline:none}\n\n.cAqHo_eAjd:focus:before{opacity:1;transform:scale(1)}')},menu:"cAqHo_eAjd"}
var N=(j=Object(O["a"])(),x=Object(_["l"])(S,T),j(B=x(B=(C=w=function(e){Object(i["a"])(t,e)
var n=Object(l["a"])(t)
function t(e){var r
Object(o["a"])(this,t)
r=n.call(this,e)
r.state={hasFocus:false}
r._rootNode=null
r._menuItems=[]
r._popover=null
r._trigger=null
r._menu=null
r._labelId=Object(b["a"])("Menu__label")
r._activeSubMenu=null
r.getMenuItemIndex=function(e){return r._menuItems.findIndex((function(n){return n===e}))}
r.handleTriggerKeyDown=function(e){if("flyout"===r.props.type&&e.keyCode===p.a.codes.right){e.persist()
r.show()}}
r.handleTriggerMouseOver=function(){"flyout"===r.props.type&&r.show()}
r.handleToggle=function(e){"function"===typeof r.props.onToggle&&r.props.onToggle(e,Object(a["a"])(r))}
r.handleMenuKeyDown=function(e){var n=e&&e.keyCode
var t=p.a.codes,o=t.down,a=t.up,i=t.pgup,l=t.pgdn,c=t.tab,s=t.left
if(n===o||n===l){e.preventDefault()
e.stopPropagation()
r.moveFocus(1)
r.hideActiveSubMenu(e)}else if(n===a||n===i){e.preventDefault()
e.stopPropagation()
r.moveFocus(-1)
r.hideActiveSubMenu(e)}else if(n===c||n===s){e.persist()
r.hide(e)}"function"===typeof r.props.onKeyDown&&r.props.onKeyDown(e)}
r.handleMenuItemSelect=function(e,n,t,o){r.props.shouldHideOnSelect&&r.hide(e)
"function"===typeof r.props.onSelect&&r.props.onSelect(e,n,t,o)}
r.handleMenuItemFocus=function(){r.setState({hasFocus:true})}
r.handleMenuItemBlur=function(){r.setState({hasFocus:r.focusedIndex>=0})}
r.handleMenuItemMouseOver=function(e,n){r._activeSubMenu&&n!==r._activeSubMenu._trigger&&r.hideActiveSubMenu(e)}
r.hideActiveSubMenu=function(e){if(r._activeSubMenu){r._activeSubMenu.hide(e)
r._activeSubMenu=null}}
r.handleSubMenuToggle=function(e,n){e&&(r._activeSubMenu=n)}
r.handleSubMenuDismiss=function(e,n){(e&&e.keyCode===p.a.codes.tab||n)&&r.hide(e)}
r.hide=function(e){r._popover&&r._popover.hide(e)}
r.show=function(e){r._popover&&r._popover.show(e)}
r._id=r.props.id||Object(b["a"])("Menu")
return r}Object(r["a"])(t,[{key:"getChildContext",value:function(){var e=this
var n=M["a"].getMenuContext(this.context)
return M["a"].makeMenuContext({registerMenuItem:function(t){var o=t.props.type
n&&n.registerMenuItem&&"flyout"===o?n.registerMenuItem(t):e.getMenuItemIndex(t)<0&&e._menuItems.push(t)},removeMenuItem:function(t){var o=t.props.type
if(n&&n.removeMenuItem&&"flyout"===o)n.removeMenuItem(t)
else{var r=e.getMenuItemIndex(t)
r>=0&&e._menuItems.splice(r,1)}}})}},{key:"focus",value:function(){if(this.shown){this._menu&&this._menu.focus
this._menu.focus()}else{this._trigger&&this._trigger.focus
this._trigger.focus()}}},{key:"focused",value:function(){return this.shown?Object(G["a"])(this._menu)||this.state.hasFocus:Object(G["a"])(this._trigger)}},{key:"moveFocus",value:function(e){var n=this.menuItems?this.menuItems.length:0
if(n<=0)return
var t=this.focusedIndex<0&&e<0?0:this.focusedIndex
var o=this.menuItems[(t+n+e)%n]
o&&o.focus
o.focus()}},{key:"renderChildren",value:function(){var e=this
var n=this.props,t=n.children,o=n.disabled
var r=0
return c["Children"].map(t,(function(n){if(!Object(y["a"])(n,["MenuItemSeparator","MenuItem","MenuItemGroup","Menu"]))return
r+=1
var t=!e.state.hasFocus&&1===r
if(Object(y["a"])(n,["MenuItemSeparator"]))return s.a.createElement("li",{role:"none"},n)
var a=n.props["aria-controls"]||n.props.controls||e.props["aria-controls"]||e.props.controls
if(Object(y["a"])(n,["MenuItem"]))return s.a.createElement("li",{role:"none"},Object(k["a"])(n,{controls:a,disabled:o||n.props.disabled,onFocus:e.handleMenuItemFocus,onBlur:e.handleMenuItemBlur,onSelect:e.handleMenuItemSelect,onMouseOver:e.handleMenuItemMouseOver,tabIndex:t?0:-1}))
if(Object(y["a"])(n,["MenuItemGroup"]))return s.a.createElement("li",{role:"none"},Object(k["a"])(n,{controls:a,disabled:o||n.props.disabled,onFocus:e.handleMenuItemFocus,onBlur:e.handleMenuItemBlur,onSelect:e.handleMenuItemSelect,onMouseOver:e.handleMenuItemMouseOver,isTabbable:t}))
if(Object(y["a"])(n,["Menu"])){var i=o||n.props.disabled
return s.a.createElement("li",{role:"none"},Object(k["a"])(n,{type:"flyout",controls:a,disabled:i,onSelect:e.handleMenuItemSelect,placement:"end top",offsetX:-5,offsetY:5,withArrow:false,onToggle:e.handleSubMenuToggle,onDismiss:e.handleSubMenuDismiss,trigger:s.a.createElement(I["a"],{onMouseOver:e.handleMenuItemMouseOver,onFocus:e.handleMenuItemFocus,onBlur:e.handleMenuItemBlur,tabIndex:t?0:-1,type:"flyout",disabled:i},n.props.title||n.props.label)}))}}))}},{key:"renderMenu",value:function(){var e=this
var n=this.props,t=n.menuRef,o=n.disabled,r=n.label,a=n.trigger,i=n.onKeyUp,l=n.contentRef
var c=this.props["aria-labelledby"]
var u=this.props["aria-controls"]
return s.a.createElement("ul",{role:"menu","aria-label":r,tabIndex:"0",className:T.menu,"aria-labelledby":c||a&&this._labelId,"aria-controls":u,"aria-disabled":o?"true":null,onKeyDown:this.handleMenuKeyDown,onKeyUp:i,ref:function(n){e._menu=n
"function"===typeof t&&t(n)
"function"===typeof l&&l(n)}},this.renderChildren())}},{key:"render",value:function(){var e=this
var n=this.props,t=n.show,o=n.defaultShow,r=n.placement,a=n.withArrow,i=n.trigger,l=n.mountNode,c=n.popoverRef,u=n.disabled,d=n.onDismiss,f=n.onFocus,p=n.onMouseOver
return i?s.a.createElement(h["a"],{isShowingContent:t,defaultIsShowingContent:o,onHideContent:function(n,t){var o=t.documentClick
d(n,o)
e.handleToggle(false)},onShowContent:function(){return e.handleToggle(true)},mountNode:l,placement:r,withArrow:a,id:this._id,on:["click"],shouldContainFocus:true,shouldReturnFocus:true,onFocus:f,onMouseOver:p,ref:function(n){e._popover=n
"function"===typeof c&&c(n)},renderTrigger:Object(k["a"])(i,{ref:function(n){e._trigger=n},"aria-haspopup":true,id:this._labelId,onMouseOver:this.handleTriggerMouseOver,onKeyDown:this.handleTriggerKeyDown,disabled:i.props.disabled||u})},this.renderMenu()):this.renderMenu()}},{key:"menuItems",get:function(){return this._menuItems}},{key:"focusedIndex",get:function(){return this.menuItems.findIndex((function(e){return e&&true===e.focused}))}},{key:"shown",get:function(){return!this._popover||this._popover.shown}}])
t.displayName="Menu"
return t}(c["Component"]),w.propTypes={children:v["a"].oneOf(["MenuItem","MenuItemGroup","MenuItemSeparator","Menu"]),label:d.a.string,disabled:d.a.bool,trigger:d.a.node,placement:g["a"].placement,defaultShow:d.a.bool,show:Object(m["a"])(d.a.bool,"onToggle","defaultShow"),onToggle:d.a.func,onSelect:d.a.func,onDismiss:d.a.func,onBlur:d.a.func,onFocus:d.a.func,onMouseOver:d.a.func,onKeyDown:d.a.func,onKeyUp:d.a.func,menuRef:d.a.func,popoverRef:d.a.func,mountNode:g["a"].mountNode,constrain:g["a"].constrain,liveRegion:d.a.oneOfType([d.a.arrayOf(d.a.element),d.a.element,d.a.func]),shouldHideOnSelect:d.a.bool,shouldFocusTriggerOnClose:d.a.bool,type:d.a.oneOf(["flyout"]),id:d.a.string,withArrow:d.a.bool},w.defaultProps={children:null,label:null,disabled:false,trigger:null,placement:"bottom center",defaultShow:false,onToggle:function(e,n){},onSelect:function(e,n,t,o){},onDismiss:function(e,n){},onBlur:function(e){},onFocus:function(e){},onMouseOver:function(e){},onKeyDown:function(e){},onKeyUp:function(e){},menuRef:function(e){},popoverRef:function(e){},mountNode:null,constrain:"window",liveRegion:null,shouldHideOnSelect:true,shouldFocusTriggerOnClose:true,show:void 0,id:void 0,type:void 0,withArrow:true},w.Item=I["a"],w.Group=J["a"],w.Separator=W["a"],w.childContextTypes=M["a"].types,w.contextTypes=M["a"].types,C))||B)||B)},x0Js:function(e,n,t){"use strict"
t.d(n,"a",(function(){return l}))
var o=t("rePB")
var r=t("17x9")
var a=t.n(r)
var i="@@menu"
var l={types:Object(o["a"])({},i,a.a.shape({registerMenuItem:a.a.func,removeMenuItem:a.a.func})),makeMenuContext:function(e){var n=e.registerMenuItem,t=e.removeMenuItem
return Object(o["a"])({},i,{registerMenuItem:n,removeMenuItem:t})},getMenuContext:function(e){if(e)return e[i]}}}}])

//# sourceMappingURL=17-c-4b73ff5364.js.map