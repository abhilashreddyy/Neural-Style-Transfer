(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[351,644,658,670,680,692,702],{"4M30":function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
n.d(t,"b",(function(){return r}))
const o={}.hasOwnProperty
function a(e,t){for(const n in t)o.call(t,n)&&(e[n]=t[n])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e}function r(e,t){Object.keys(t).forEach(n=>Object.defineProperty(e,n,{get:t[n],enumerable:true,configurable:true}))
return e}},"65NJ":function(e,t,n){"use strict"
var o=n("ouhR")
var a=n.n(o)
n("w2hD")
a.a.fn.scrollToVisible=function(e){const t={}
const n=a()(e)
if(0===n.length)return
let o=n.offset(),r=n.outerWidth(),i=n.outerHeight(),s=o.top,l=s+i,c=o.left,d=c+r,u="html,body"==this.selector?a.a.windowScrollTop():this.scrollTop(),b=this.scrollLeft(),h=this.outerHeight(),g=this.outerWidth()
if("html,body"!=this.selector){let e=a()("body").offset()
this.each((function(){try{e=a()(this).offset()
return false}catch(e){}}))
s-=e.top
l-=e.top
c-=e.left
d-=e.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){h=a()(window).height()
a()("#wizard_box:visible").length>0&&(h-=a()("#wizard_box:visible").height())
g=a()(window).width()
s-=u
c-=b
l-=u
d-=b}s<0||h<i&&l>h?t.scrollTop=s+u:l>h&&(t.scrollTop=l+u-h+20)
c<0?t.scrollLeft=c+b:d>g&&(t.scrollLeft=d+b-g+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},"6ohZ":function(e,t,n){"use strict"
n.d(t,"a",(function(){return g}))
var o=n("An8g")
var a=n("Ff2n")
var r=n("q1tI")
var i=n.n(r)
n("17x9")
var s=n("Mmr1")
var l=n("msMH")
var c=n("HGxv")
var d=n("8WeW")
Object(d["a"])(JSON.parse('{"ar":{"close_d634289d":"إغلاق"},"ca":{"close_d634289d":"Tanca"},"cy":{"close_d634289d":"Cau"},"da":{"close_d634289d":"Luk"},"da-x-k12":{"close_d634289d":"Luk"},"de":{"close_d634289d":"Schließen"},"el":{"close_d634289d":"Κλείσιμο"},"en-AU":{"close_d634289d":"Close"},"en-AU-x-unimelb":{"close_d634289d":"Close"},"en-CA":{"close_d634289d":"Close"},"en-GB":{"close_d634289d":"Close"},"en-GB-x-lbs":{"close_d634289d":"Close"},"en-GB-x-ukhe":{"close_d634289d":"Close"},"es":{"close_d634289d":"Cerrar"},"fa":{"close_d634289d":"بستن"},"fi":{"close_d634289d":"Sulje"},"fr":{"close_d634289d":"Fermer"},"fr-CA":{"close_d634289d":"Fermer"},"he":{"close_d634289d":"סגירה"},"ht":{"close_d634289d":"Fèmen"},"hu":{"close_d634289d":"Bezárás"},"hy":{"close_d634289d":"Փակել"},"is":{"close_d634289d":"Loka"},"it":{"close_d634289d":"Chiudi"},"ja":{"close_d634289d":"閉じる"},"ko":{"close_d634289d":"닫기"},"mi":{"close_d634289d":"Katia"},"nb":{"close_d634289d":"Lukk"},"nb-x-k12":{"close_d634289d":"Lukk"},"nl":{"close_d634289d":"Sluiten"},"nn":{"close_d634289d":"Lukk"},"pl":{"close_d634289d":"Zamknij"},"pt":{"close_d634289d":"Fechar"},"pt-BR":{"close_d634289d":"Fechar"},"ru":{"close_d634289d":"Закрыть"},"sl":{"close_d634289d":"Zapri"},"sv":{"close_d634289d":"Stäng"},"sv-x-k12":{"close_d634289d":"Stäng"},"tr":{"close_d634289d":"Kapat"},"uk":{"close_d634289d":"Закрити"},"zh-Hans":{"close_d634289d":"关闭"},"zh-Hant":{"close_d634289d":"關閉"}}'))
n("jQeR")
n("0sPK")
var u=c["default"].scoped("modal")
var b=n("Dibh")
function h(){return document.getElementById("flash_screenreader_holder")}function g(e){let t=e.label,n=e.closeButtonLabel,r=e.onDismiss,c=e.children,d=Object(a["a"])(e,["label","closeButtonLabel","onDismiss","children"])
return i.a.createElement(b["a"],Object.assign({liveRegion:h},d,{label:t,onDismiss:r}),Object(o["a"])(b["a"].Header,{},void 0,Object(o["a"])(s["a"],{"data-testid":"instui-modal-close",placement:"end",offset:"medium",onClick:r},void 0,n||u.t("Close")),Object(o["a"])(l["a"],{},void 0,t)),c)}["Header","Body","Footer"].forEach(e=>g[e]=b["a"][e])
g.defaultProps={closeButtonLabel:void 0}},"897F":function(e,t,n){"use strict"
var o=n("ouhR")
var a=n.n(o)
var r=n("Y/W1")
var i=n.n(r)
var s=n("qqwe")
n("ESjL")
a.a.fn.fixDialogButtons=function(){return this.each((function(){const e=a()(this)
const t=e.find(".button-container:last .btn, button[type=submit]")
if(t.length){e.find(".button-container:last, button[type=submit]").hide()
let n=a.a.map(t.toArray(),t=>{const n=a()(t)
let o=n.attr("class")||""
const r=n.attr("id")
if(n.is(".dialog_closer")){n.off(".fixdialogbuttons")
n.on("click.fixdialogbuttons",Object(s["a"])(()=>e.dialog("close")))}"submit"===n.prop("type")&&n[0].form&&(o+=" button_type_submit")
return{text:n.text(),"data-text-while-loading":n.data("textWhileLoading"),click:()=>n.click(),class:o,id:r}})
n=i.a.sortBy(n,e=>e.class.match(/btn-primary/)?1:0)
e.dialog("option","buttons",n)}}))}},BrAc:function(e,t,n){"use strict"
var o=n("vDqi")
var a=n.n(o)
a.a.defaults.xsrfCookieName="_csrf_token"
a.a.defaults.xsrfHeaderName="X-CSRF-Token"
const r=a.a.defaults.headers.common.Accept
a.a.defaults.headers.common.Accept="application/json+canvas-string-ids, "+r
a.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"
t["a"]=a.a},CyAq:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
function o(e){var t="".concat(e)
return[parseFloat(t,10),t.match(/[\d.\-\+]*\s*(.*)/)[1]||""]}},FdVj:function(e,t,n){"use strict"
var o=n("qJBq")
var a=n.n(o)
var r=n("HGxv")
const i={_parseNumber:a.a,parse(e){if(null==e)return NaN
if("number"===typeof e)return e
let t=i._parseNumber(e.toString(),{thousands:r["default"].lookup("number.format.delimiter"),decimal:r["default"].lookup("number.format.separator")})
isNaN(t)&&(t=i._parseNumber(e))
e.toString().match(/e/)&&isNaN(t)&&(t=parseFloat(e))
return t},validate:e=>!isNaN(i.parse(e))}
t["a"]=i},HMVb:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d}))
var o=n("ODXe")
var a=n("i/8D")
var r=n("DUTp")
var i=n("IPIv")
var s={}
function l(e,t){if(!a["a"])return 16
var n=e||Object(r["a"])(e).documentElement
if(!t&&s[n])return s[n]
var o=parseInt(Object(i["a"])(n).getPropertyValue("font-size"))
s[n]=o
return o}var c=n("CyAq")
function d(e,t){var n=t||document.body
if(!e||"number"===typeof e)return e
var a=Object(c["a"])(e),r=Object(o["a"])(a,2),i=r[0],s=r[1]
return"rem"===s?i*l():"em"===s?i*l(n):i}},JOjB:function(e,t,n){"use strict"
var o=n("ouhR")
var a=n.n(o)
var r=n("HGxv")
var i=n("8WeW")
Object(i["a"])(JSON.parse('{"ar":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"إظهار النص المقتبس","word_separator":" "}}},"ca":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostra el text citat","word_separator":" "}}},"cy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"dangos testun wedi’i ddyfynnu","word_separator":" "}}},"da":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"da-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"de":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"zitierten Text zeigen","word_separator":" "}}},"el":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"προβολή κειμένου που παρατίθεται"}}},"en-AU":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-AU-x-unimelb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB-x-lbs":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB-x-ukhe":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"es":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostrar texto citado","word_separator":" "}}},"fa":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"نمایش متن نقل شده","word_separator":" "}}},"fi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"näytä lainattu teksti","word_separator":" "}}},"fr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"fr-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"he":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"מציג ציטוט","word_separator":" "}}},"ht":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afiche tèks site","word_separator":" "}}},"hu":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"idézett szöveg megjelenítése","word_separator":" "}}},"hy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"ցույց տալ մեջբերվող տեքստը","word_separator":"-"}}},"is":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Sýna ívitnaðan texta","word_separator":" "}}},"it":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostra testo citato","word_separator":" "}}},"ja":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"引用したテキストを表示","word_separator":" "}}},"ko":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"인용된 텍스트 표시","word_separator":" "}}},"mi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"whakaatu kuputuhi faahiti","word_separator":"-"}}},"nb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nb-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"geciteerde tekst tonen","word_separator":" "}}},"nn":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis sitert tekst","word_separator":" "}}},"pl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"pokaż cytowany fragment tekstu","word_separator":" "}}},"pt":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"pt-BR":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"ru":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"показать цитированный текст","word_separator":" "}}},"sl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"prikaži citirano besedilo","word_separator":" "}}},"sv":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"sv-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"tr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"alıntılanan metni göster","word_separator":" "}}},"uk":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Показати цитований текст","word_separator":" "}}},"zh-Hans":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"显示引用的文本","word_separator":" "}}},"zh-Hant":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"顯示引用的文字","word_separator":" "}}}}'))
n("jQeR")
n("0sPK")
var s=r["default"].scoped("lib.text_helper")
var l=n("gI0r")
var c,d,u
c="LINK-PLACEHOLDER"
d=/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|(LINK-PLACEHOLDER)/gi
t["a"]=u={quoteClump:function(e){return"<div class='quoted_text_holder'> <a href='#' class='show_quoted_text_link'>"+Object(l["a"])(s.t("quoted_text_toggle","show quoted text"))+"</a> <div class='quoted_text' style='display: none;'> "+a.a.raw(e.join("\n"))+" </div> </div>"},formatMessage:function(e){var t,n,o,a,r,i,s,b
a=[]
r=[]
e=e.replace(d,(function(e,t){var n
r.push(e===c?c:(n=e,"http://"===n.slice(0,7)||"https://"===n.slice(0,8)||(n="http://"+n),a.push(n),"<a href='"+Object(l["a"])(n)+"'>"+Object(l["a"])(e)+"</a>"))
return c}))
e=Object(l["a"])(e)
e=e.replace(new RegExp(c,"g"),(function(e,t){return r.shift()}))
e=e.replace(/\n/g,"<br />\n")
i=[]
s=[]
b=e.split("\n")
for(t=0,n=b.length;t<n;t++){o=b[t]
if(o.match(/^(&gt;|>)/))s.push(o)
else{s.length&&i.push(u.quoteClump(s))
s=[]
i.push(o)}}s.length&&i.push(u.quoteClump(s))
return i.join("\n")},delimit:function(e){var t,n,o,a,r
if(isNaN(e))return String(e)
r=e<0?"-":""
t=Math.abs(e)
if(Infinity===t)return String(e)
n=Math.floor(t)
a=t===n?"":String(t).replace(/^\d+\./,".")
while(n>=1e3){o=String(n).replace(/\d+(\d\d\d)$/,",$1")
n=Math.floor(n/1e3)
a=o+a}return r+String(n)+a},truncateText:function(e,t){var n,o,a,r,i,l
null==t&&(t={})
o=null!=(r=t.max)?r:30
n=s.t("ellipsis","...")
l=s.t("word_separator"," ")
e=(null!=e?e:"").replace(/\s+/g,l).trim()
if(!e||e.length<=o)return e
i=0
while(true){a=e.indexOf(l,i+1)
if(a<0||a>o-n.length)break
i=a}i||(i=o-n.length)
return e.substring(0,i)+n},plainText:function(e){return e.replace(/(<([^>]+)>)/gi,"")}}},MsEF:function(e,t,n){"use strict"
var o=n("HGxv")
var a=n("8WeW")
Object(a["a"])(JSON.parse('{"ar":{"editor":{"keyboard_shortcuts":{"dialog_title":"اختصارات لوحة المفاتيح","keybindings":{"close_submenu":"إغلاق القائمة أو مربع الحوار يعيدك أيضاً إلى المحرر","navigate_toolbar":"الانتقال إلى اليمين/اليسار من خلال القائمة/شريط الأدوات","open_menubar":"فتح شريط القوائم الخاص بالمحرر","open_toolbar":"فتح شريط الأدوات الخاص بالمحرر"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"افتح مربع حوار اختصارات لوحة المفاتيح هذا"},"ca":{"editor":{"keyboard_shortcuts":{"dialog_title":"Dreceres del teclat","keybindings":{"close_submenu":"En tancar el menú o el diàleg, també tornareu a l\'àrea de l\'editor","navigate_toolbar":"Navega cap a l\'esquerra/dreta a través de la barra d\'eines/menú","open_menubar":"Obre la barra del menú de l\'editor","open_toolbar":"Obre la barra d\'eines de l\'editor"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Obre aquest quadre de diàleg de dreceres del teclat"},"cy":{"editor":{"keyboard_shortcuts":{"dialog_title":"Bysellau Hwylus","keybindings":{"close_submenu":"Gallwch hefyd fynd yn ôl i ardal y golygydd drwy gau’r ddewislen neu’r blwch deialog","navigate_toolbar":"Mynd i’r chwith/dde drwy’r ddewislen/bar offer","open_menubar":"Agor bar dewislen y golygydd","open_toolbar":"Agor bar offer y golygydd"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Agor y ddeialog bysellau hwylus"},"da":{"editor":{"keyboard_shortcuts":{"dialog_title":"Genvejstaster","keybindings":{"close_submenu":"Lukning af menu eller dialog bringer dig også tilbage til redigeringsområdet","navigate_toolbar":"Naviger til venstre/højre gennem menuen/værktøjslinjen","open_menubar":"Åbn redigeringsprogrammets menulinje","open_toolbar":"Åbn redigeringsprogrammets værktøjslinje"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Åbn dialogen for denne genvejstast"},"da-x-k12":{"editor":{"keyboard_shortcuts":{"dialog_title":"Genvejstaster","keybindings":{"close_submenu":"Lukning af menu eller dialog bringer dig også tilbage til redigeringsområdet","navigate_toolbar":"Naviger til venstre/højre gennem menuen/værktøjslinjen","open_menubar":"Åbn redigeringsprogrammets menulinje","open_toolbar":"Åbn redigeringsprogrammets værktøjslinje"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Åbn dialogen for denne genvejstast"},"de":{"editor":{"keyboard_shortcuts":{"dialog_title":"Tastenkombinationen","keybindings":{"close_submenu":"Schließen des Menüs oder Dialogs bringt Sie ebenfalls in den Editor-Bereich zurück.","navigate_toolbar":"Links/rechts Navigation durch Menü/Symbolleiste","open_menubar":"Editor-Menüleiste öffnen","open_toolbar":"Symbolleiste des Editors öffnen"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Diesen Tastenkombinationsdialog öffnen"},"el":{"editor":{"keyboard_shortcuts":{"dialog_title":"Συντομεύσεις Πληκτορολογίου","keybindings":{"close_submenu":"Το κλείσιμο του μενού ή του διαλόγου επίσης σας γυρίζει πίσω στον χώρο του επεξεργαστή","navigate_toolbar":"Πλοήγηση αριστερά/δεξιά μέσω του μενού/της γραμμής εργαλείων","open_menubar":"Άνοιγμα της γραμμής μενού του επεξεργαστή","open_toolbar":"Άνοιγμα της γραμμής εργαλείων του επεξεργαστή"}}}},"en-AU":{"editor":{"keyboard_shortcuts":{"dialog_title":"Keyboard Shortcuts","keybindings":{"close_submenu":"Close Menu or Dialogue, also gets you back to the editor area.","navigate_toolbar":"Navigate left/right through the menu/toolbar.","open_menubar":"Open the editor\'s menu bar.","open_toolbar":"Open the editor\'s toolbar"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Open this keyboard shortcuts dialog"},"en-AU-x-unimelb":{"editor":{"keyboard_shortcuts":{"dialog_title":"Keyboard Shortcuts","keybindings":{"close_submenu":"Close Menu or Dialogue, also gets you back to the editor area.","navigate_toolbar":"Navigate left/right through the menu/toolbar.","open_menubar":"Open the editor\'s menu bar.","open_toolbar":"Open the editor\'s toolbar"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Open this keyboard shortcuts dialog"},"en-CA":{"editor":{"keyboard_shortcuts":{"dialog_title":"Keyboard Shortcuts","keybindings":{"close_submenu":"Close menu or dialog, also gets you back to editor area","navigate_toolbar":"Navigate left/right through menu/toolbar","open_menubar":"Open the editor\'s menubar","open_toolbar":"Open the editor\'s toolbar"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Open this keyboard shortcuts dialog"},"en-GB":{"editor":{"keyboard_shortcuts":{"dialog_title":"Keyboard shortcuts","keybindings":{"close_submenu":"Close menu or dialog box; also gets you back to editor area","navigate_toolbar":"Navigate left/right through menu/toolbar","open_menubar":"Open the editor\'s menu bar","open_toolbar":"Open the editor\'s toolbar"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Open this keyboard shortcuts dialogue"},"en-GB-x-lbs":{"editor":{"keyboard_shortcuts":{"dialog_title":"Keyboard shortcuts","keybindings":{"close_submenu":"Close menu or dialog box; also gets you back to editor area","navigate_toolbar":"Navigate left/right through menu/toolbar","open_menubar":"Open the editor\'s menu bar","open_toolbar":"Open the editor\'s toolbar"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Open this keyboard shortcuts dialogue"},"en-GB-x-ukhe":{"editor":{"keyboard_shortcuts":{"dialog_title":"Keyboard shortcuts","keybindings":{"close_submenu":"Close menu or dialog box; also gets you back to editor area","navigate_toolbar":"Navigate left/right through menu/toolbar","open_menubar":"Open the editor\'s menu bar","open_toolbar":"Open the editor\'s toolbar"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Open this keyboard shortcuts dialogue"},"es":{"editor":{"keyboard_shortcuts":{"dialog_title":"Atajos del teclado","keybindings":{"close_submenu":"Cerrar el menú o cuadro de diálogo, también le regresa al área de editor","navigate_toolbar":"Navegar a la izquierda/derecha a través del menú/barra de herramientas","open_menubar":"Abrir la barra de menú del editor","open_toolbar":"Abrir la barra de herramientas del editor"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Abrir este cuadro de diálogo de atajos de teclado"},"fa":{"editor":{"keyboard_shortcuts":{"dialog_title":"میانبرهای صفحه کلید","keybindings":{"close_submenu":"بستن منو یا گفتگو نیز شما را به قسمت ویرایشگر برمی گرداند","navigate_toolbar":"پیمایش به سمت چپ/راست از طریق منو/نوار ابزار","open_menubar":"باز کردن نوار ابزار ویرایشگر","open_toolbar":"باز کردن نوار ابزار ویرایشگر"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"باز کردن این کادر گفتکوی میانبرهای صفحه کلید"},"fi":{"editor":{"keyboard_shortcuts":{"dialog_title":"Pikanäppäimet","keybindings":{"close_submenu":"Sulje valikko tai valintaruutu, niin pääset takaisin editori-alueelle","navigate_toolbar":"Siirry vasemmalle/oikealle valikon/työkalupalkin kautta","open_menubar":"Avaa editorin valikkopalkki","open_toolbar":"Avaa editorin työkalupalkki"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Avaa tämä näppäimistön pikakuvakkeiden valintaruutu"},"fr":{"editor":{"keyboard_shortcuts":{"dialog_title":"Raccourcis clavier","keybindings":{"close_submenu":"Fermer le menu ou dialogue, vous ramènera aussi sur l\'éditeur","navigate_toolbar":"Naviguer à gauche/à droite dans le menu/la barre d\'outils","open_menubar":"Ouvrir la barre des menus de l’éditeur","open_toolbar":"Ouvrir la barre d’outils de l’éditeur"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Ouvrir cette boîte de dialogues des raccourcis clavier"},"fr-CA":{"editor":{"keyboard_shortcuts":{"dialog_title":"Raccourcis clavier","keybindings":{"close_submenu":"Fermer le menu ou dialogue, vous ramènera aussi sur l\'éditeur","navigate_toolbar":"Naviguer à gauche/à droite dans le menu/la barre d\'outils","open_menubar":"Ouvrir la barre des menus de l’éditeur","open_toolbar":"Ouvrir la barre d’outils de l’éditeur"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Ouvrir cette boîte de dialogues des raccourcis clavier"},"he":{"editor":{"keyboard_shortcuts":{"dialog_title":"קיצורי דרך מקלדת ","keybindings":{"close_submenu":"סגירת תפריט או דיאלוג, גם כן תחזירך אל איזור העריכה","navigate_toolbar":"ניווט שמאלי/ימני בעזרת תפריט/סרגל הכלים","open_menubar":"פתיחת סרגל תפריט העריכה ","open_toolbar":"פתיחת סרגל העריכה"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"פתיחת חלון דיאלוג של מקשי קיצור"},"ht":{"editor":{"keyboard_shortcuts":{"dialog_title":"Rakousi Klavye","keybindings":{"close_submenu":"Fèmen mesi oswa dyalòg, ap mennen w retounen tou nan zòn editè a tou","navigate_toolbar":"Navige agoch/adwat atravè meni/ba zouti a","open_menubar":"Ouvri ba meni editè a","open_toolbar":"Ouvri ba zouti editè a"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Ouvri dyalòg rakousi klavye sa a"},"hu":{"editor":{"keyboard_shortcuts":{"dialog_title":"Billentyűparancsok","keybindings":{"close_submenu":"Menü vagy párbeszédablak bezárása, visszavisz a szerkesztő felületre","navigate_toolbar":"Navigáljon balra/jobbra a menün/eszköztáron át","open_menubar":"Szerkesztői menüsor megnyitása","open_toolbar":"Szerkesztői eszköztár megnyitása"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Nyissa meg a billentyűkombinációk párbeszédablakot"},"hy":{"editor":{"keyboard_shortcuts":{"dialog_title":"Արագ հասանելիության ստեղներ","keybindings":{"close_submenu":"Եթե փակեք մենյուն կամ երկխոսության պատուհանը, կվերադառնաք խմբագրի տեղը","navigate_toolbar":"Նավարկեք ձախ/աջ մենյուի/գործիքների տողով","open_menubar":"Բացել խմբագրի մենյուի տողը","open_toolbar":"Բացել խմբագրի գործիքների տողը"}}}},"is":{"editor":{"keyboard_shortcuts":{"dialog_title":"Flýtilyklar","keybindings":{"close_submenu":"Með því að loka valmynd eða samtali ferðu aftur á breytingasvæði","navigate_toolbar":"Fara til vinstri/hægri gegnum valmynd/tólaslá","open_menubar":"Opna valslá ritils","open_toolbar":"Opna tólaslá ritils"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Opna svarglugga flýtilykla"},"it":{"editor":{"keyboard_shortcuts":{"dialog_title":"Scelte rapide da tastiera","keybindings":{"close_submenu":"Chiude il menu o la finestra di dialogo e riporta all\'area dell\'editor","navigate_toolbar":"Spostati a sinistra/destra nel menu o nella barra degli strumenti","open_menubar":"Apri la barra dei menu dell\'editor","open_toolbar":"Apri la barra degli strumenti dell\'editor"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Apri questa finestra di dialogo delle scelte rapide da tastiera"},"ja":{"editor":{"keyboard_shortcuts":{"dialog_title":"キーボード ショートカット","keybindings":{"close_submenu":"メニューまたはダイアログを閉じて、編集エリアに戻ります","navigate_toolbar":"メニュー/ツールバーを通して左/右をナビゲート","open_menubar":"編集のメニューバーを開く","open_toolbar":"エディタのツールバーを表示"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"このキーボードショートカットダイアログを開く"},"ko":{"editor":{"keyboard_shortcuts":{"dialog_title":"키보드 단축키"}}},"mi":{"editor":{"keyboard_shortcuts":{"dialog_title":"Pokatata papapātuhi","keybindings":{"close_submenu":"Katia tahua kōrero rānei anō, whiwhi koe hoki ki te wāhi ētita","navigate_toolbar":"Whakatere maui/matau ki roto i te tahua/paeutauta","open_menubar":"Whakatūwhera paetahua o te ētita","open_toolbar":"Whakatūwhera paeutauta o te ētita"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Huaki tēnei pokatata papapātuhi kōrero"},"nb":{"editor":{"keyboard_shortcuts":{"dialog_title":"Snarveier","keybindings":{"close_submenu":"Lukk meny eller dialogboks, får deg også tilbake til redigeringsområde","navigate_toolbar":"Naviger med venstre/høyre gjennom menyen/verktøylinjen","open_menubar":"Åpne editor-verktøylinje","open_toolbar":"Åpne redigerings-verktøylinje"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Åpne denne tastatursnarveidialogen"},"nb-x-k12":{"editor":{"keyboard_shortcuts":{"dialog_title":"Snarveier","keybindings":{"close_submenu":"Lukk meny eller dialogboks, får deg også tilbake til redigeringsområde","navigate_toolbar":"Naviger med venstre/høyre gjennom menyen/verktøylinjen","open_menubar":"Åpne editor-verktøylinje","open_toolbar":"Åpne redigerings-verktøylinje"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Åpne denne tastatursnarveidialogen"},"nl":{"editor":{"keyboard_shortcuts":{"dialog_title":"Sneltoetsen","keybindings":{"close_submenu":"Menu of dialoog sluiten, brengt u ook terug naar editorgebied","navigate_toolbar":"Naar links/rechts navigeren via menu/werkbalk","open_menubar":"De werkbalk van de editor openen","open_toolbar":"De toolbalk van de editor openen"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Open dit dialoogvenster met sneltoetsen"},"nn":{"editor":{"keyboard_shortcuts":{"dialog_title":"Hurtigtastar","keybindings":{"close_submenu":"Om du lukkar menyen eller dialogen, kjem du tilbake til redigeringsområdet","navigate_toolbar":"Naviger venstre/høgre gjennom menyen/verktøylinja","open_menubar":"Opne menylinja i redigeringsprogrammet","open_toolbar":"Opne verktøylinja i redigeringsprogrammet"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Opne denne hurtigtastar-dialogen"},"pl":{"editor":{"keyboard_shortcuts":{"dialog_title":"Skróty klawiaturowe","keybindings":{"close_submenu":"Zamknij menu lub dialog, również powraca do strefy edycji","navigate_toolbar":"Nawigacja w lewo/prawo przez menu/pasek narzędzi","open_menubar":"Otwórz pasek menu edytora","open_toolbar":"Otwórz pasek narzędzi edytora"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Otwórz to okno dialogowe skrótów klawiatury"},"pt":{"editor":{"keyboard_shortcuts":{"dialog_title":"Atalhos de teclado","keybindings":{"close_submenu":"Fechar menu ou diálogo, transporta-o de volta para a área de editor","navigate_toolbar":"Navegue para a esquerda/direita pelo menu/barra de ferramentas","open_menubar":"Abrir a barra de menu do editor","open_toolbar":"Abrir a barra de ferramentas do editor"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Abrir esta caixa de diálogo de atalhos do teclado"},"pt-BR":{"editor":{"keyboard_shortcuts":{"dialog_title":"Atalhos de Teclado","keybindings":{"close_submenu":"Fechar menu ou diálogo, também o leva de volta para a área do editor","navigate_toolbar":"Navegar para esquerda/direita pelo menu/barra de ferramentas","open_menubar":"Abrir a barra de menu do editor","open_toolbar":"Abrir a barra de ferramentas do editor"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Abrir esta caixa de atalhos do teclado"},"ru":{"editor":{"keyboard_shortcuts":{"dialog_title":"Клавиши быстрого доступа","keybindings":{"close_submenu":"Если вы закроете меню или диалоговое окно, то также перейдете обратно в область редактора","navigate_toolbar":"Перейдите влево / вправо по меню / панели инструментов","open_menubar":"Откройте панель меню редактора","open_toolbar":"Открыть панель инструментов редактора"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Открыть этот диалог комбинаций клавиш"},"sl":{"editor":{"keyboard_shortcuts":{"dialog_title":"Bližnjice","keybindings":{"close_submenu":"Zaprite meni ali pogovorno okno; tako se boste premaknili tudi na območje urejevalnika.","navigate_toolbar":"Navigirajte levo/desno prek menija/orodne vrstice","open_menubar":"Odprite menijsko vrstico urejevalnika","open_toolbar":"Odprite orodno vrstico urejevalnika"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Odpri to pogovorno okno z bližnjicami"},"sv":{"editor":{"keyboard_shortcuts":{"dialog_title":"Kortkommandon","keybindings":{"close_submenu":"Stäng meny eller dialog, tar dig också tillbaka till redigeringsområdet","navigate_toolbar":"Navigera till vänster/höger genom menyn/verktygsfältet","open_menubar":"Öppna redigerarens menyfält","open_toolbar":"Öppna redigerarens verktygsfält"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Öppna den här dialogen för tangentbordsgenvägar"},"sv-x-k12":{"editor":{"keyboard_shortcuts":{"dialog_title":"Kortkommandon","keybindings":{"close_submenu":"Stäng meny eller dialog, tar dig också tillbaka till redigeringsområdet","navigate_toolbar":"Navigera till vänster/höger genom menyn/verktygsfältet","open_menubar":"Öppna redigerarens menyfält","open_toolbar":"Öppna redigerarens verktygsfält"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Öppna den här dialogen för tangentbordsgenvägar"},"tr":{"editor":{"keyboard_shortcuts":{"dialog_title":"Klavye Kısayolları","keybindings":{"close_submenu":"Menü veya diyaloğu kapat, düzenleyici alan geri dönersiniz","navigate_toolbar":"Menü/araç çubuğu ile sola/sağa gezinin","open_menubar":"Düzenleyici menü çubuğunu aç","open_toolbar":"Düzenleyici araç çubuğunu aç"}}}},"uk":{"editor":{"keyboard_shortcuts":{"dialog_title":"Гарячі клавіши","keybindings":{"close_submenu":"Закрийте меню або діалог, це також поверне вас назад до області редактора","navigate_toolbar":"Переміщайтесь вліво / вправо за допомогою меню / панелі інструментів","open_menubar":"Відкрити панель меню редактора","open_toolbar":"Відкрити панель інструментів редактора"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Вікрити діалогове вікно гарячих клавіш"},"zh-Hans":{"editor":{"keyboard_shortcuts":{"dialog_title":"键盘快捷方式","keybindings":{"close_submenu":"关闭了菜单或对话框，您还可以回到编辑区域。","navigate_toolbar":"通过菜单/工具栏，导航左/右。","open_menubar":"打开编辑器的菜单栏","open_toolbar":"打开编辑器的工具栏"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"打开此键盘快捷方式对话框"},"zh-Hant":{"editor":{"keyboard_shortcuts":{"dialog_title":"鍵盤快捷鍵","keybindings":{"close_submenu":"關閉菜單或對話之後，您還可以回到編輯區域","navigate_toolbar":"透過菜單/工具欄左/右導航","open_menubar":"打開編輯器的菜單欄","open_toolbar":"打開編輯器的工具欄"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"打開此鍵盤的快捷鍵對話框"}}'))
n("jQeR")
n("0sPK")
var r=o["default"].scoped("editor.keyboard_shortcuts")
var i=n("ouhR")
var s=n.n(i)
var l=n("mX+G")
var c=n.n(l)
var d=n("3O+N")
var u=n.n(d)
n("BGrI")
var b=n("dbrX")
var h=u.a.default
var g=h.template,_=h.templates=h.templates||{}
var p="/work/canvas-deploy/generated/ui/shared/tinymce-keyboard-shortcuts/jst/index"
_[p]=g((function(e,t,n,o,a){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
a=a||{}
var r,i="",s="function",l=this.escapeExpression,c=this
function d(e,t){var o,a,r=""
r+="\n    <li>\n      <code>"
if(a=n.key)o=a.call(e,{hash:{},data:t})
else{a=e&&e.key
o=typeof a===s?a.call(e,{hash:{},data:t}):a}r+=l(o)+"</code>\n      <span>"
if(a=n.description)o=a.call(e,{hash:{},data:t})
else{a=e&&e.description
o=typeof a===s?a.call(e,{hash:{},data:t}):a}r+=l(o)+"</span>\n    </li>\n  "
return r}i+='<ul class="tinymce-keyboard-shortcuts">\n  '
r=n.each.call(t,t&&t.keybindings,{hash:{},inverse:c.noop,fn:c.program(1,d,a),data:a});(r||0===r)&&(i+=r)
i+="\n</ul>\n"
return i}))
b["a"].loadStylesheet("jst/editor/KeyboardShortcuts",{new_styles_normal_contrast:{combinedChecksum:"f4493af988"},new_styles_high_contrast:{combinedChecksum:"f4493af988"},responsive_layout_normal_contrast:{combinedChecksum:"f4493af988"},responsive_layout_high_contrast:{combinedChecksum:"f4493af988"},new_styles_normal_contrast_rtl:{combinedChecksum:"9b568bbcaf"},new_styles_high_contrast_rtl:{combinedChecksum:"9b568bbcaf"},responsive_layout_normal_contrast_rtl:{combinedChecksum:"9b568bbcaf"},responsive_layout_high_contrast_rtl:{combinedChecksum:"9b568bbcaf"}}[b["a"].getCssVariant()])
var f=_[p]
var m,y
m=[48,119]
y=c.a.View.extend({className:"tinymce-keyboard-shortcuts-toggle",tagName:"a",events:{click:"openDialog"},keybindings:[{key:"ALT+F9",description:r.t("keybindings.open_menubar","Open the editor's menubar")},{key:"ALT+F10",description:r.t("keybindings.open_toolbar","Open the editor's toolbar")},{key:"ESC",description:r.t("keybindings.close_submenu","Close menu or dialog, also gets you back to editor area")},{key:"TAB/Arrows",description:r.t("keybindings.navigate_toolbar","Navigate left/right through menu/toolbar")},{key:"ALT+F8",description:r.t("Open this keyboard shortcuts dialog")}],template:f,initialize:function(){this.el.href="#"
s()(this.el).attr("title",r.t("dialog_title","Keyboard Shortcuts"))
s()('<i class="icon-keyboard-shortcuts" aria-hidden="true" />').appendTo(this.el)
return s()('<span class="screenreader-only" />').text(r.t("dialog_title","Keyboard Shortcuts")).appendTo(this.el)},render:function(){var e
e={keybindings:this.keybindings}
this.$dialog=s()(this.template(e)).dialog({title:r.t("dialog_title","Keyboard Shortcuts"),width:600,resizable:true,autoOpen:false})
this.bindEvents()
return this},bindEvents:function(){if(!ENV.use_rce_enhancements){s()(document).on("keyup.tinymce_keyboard_shortcuts",this.openDialogByKeybinding.bind(this))
return s()(document).on("editorKeyUp",function(e,t){return this.openDialogByKeybinding(t)}.bind(this))}},remove:function(){s()(document).off("keyup.tinymce_keyboard_shortcuts")
s()(document).off("editorKeyUp")
return this.$dialog.dialog("destroy")},openDialog:function(){if(!this.$dialog.dialog("isOpen"))return this.$dialog.dialog("open")},openDialogByKeybinding:function(e){if(m.indexOf(e.keyCode)>-1&&e.altKey)return this.openDialog()}})
t["a"]=y},RhCJ:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
function o(e,t,n){if("input"===e.as){if("children"===t&&e.children||void 0==e.value)return new Error("Prop `value` and not `children` must be supplied if `".concat(n,' as="input"`'))}else{if("value"===t&&void 0!=e.value)return new Error("Prop `children` and not `value` must be supplied unless `".concat(n,' as="input"`'))
if(!e.children)return new Error("Prop `children` should be supplied unless `".concat(n,' as="input"`.'))}return}},RoCN:function(e,t,n){"use strict"
var o=n("ouhR")
var a=n.n(o)
var r=n("Y/W1")
var i=n.n(r)
var s=n("gI0r")
n("tHpF")
n("sXof")
n("Dhso")
n("8JEM")
t["a"]={fieldSelectors:null,findSiblingTinymce:function(e){return e.siblings(".mce-tinymce").find(".mce-edit-area")},findField:function(e,t){var n,o,r
null==t&&(t=false)
r=(null!=(o=this.fieldSelectors)?o[e]:void 0)||"[name='"+e+"']"
n=t?a()(r):this.$(r)
n.data("rich_text")&&(n=this.findSiblingTinymce(n))
return n},showErrors:function(e,t){var n,o,r,i,l,c,d,u
null==t&&(t=false)
u=[]
for(r in e){o=e[r]
n=o.element||this.findField(r,t)
i=o.message||function(){var e,t,n,a
a=[]
for(e=0,t=o.length;e<t;e++){l=o[e].message
a.push(Object(s["a"])((null!=(n=this.translations)?n[l]:void 0)||l))}return a}.call(this).join("</p><p>")
null!=(c=n.errorBox(a.a.raw(""+i)))&&null!=(d=c.css("z-index","1100"))&&d.attr("role","alert")
this.attachErrorDescription(n,i)
o.$input=n
u.push(o.$errorBox=n.data("associated_error_box"))}return u},attachErrorDescription:function(e,t){var n
n=this.findOrCreateDescriptionField(e)
n["description"].text(a.a.raw(""+t))
return e.attr("aria-describedby",n["description"].attr("id")+" "+n["originalDescriptionIds"])},findOrCreateDescriptionField:function(e){var t,n,o
n=e.attr("id")
a()("#"+n+"_sr_description").length>0||a()("<div>").attr({id:n+"_sr_description",class:"screenreader-only"}).insertBefore(e)
t=a()("#"+n+"_sr_description")
o=this.getExistingDescriptionIds(e,n)
return{description:t,originalDescriptionIds:o}},getExistingDescriptionIds:function(e,t){var n,o
n=e.attr("aria-describedby")
o=n?n.split(" "):[]
return i.a.without(o,t+"_sr_description")}}},VrN0:function(e,t,n){"use strict"
var o=n("ouhR")
var a=n.n(o)
var r=n("eodz")
const i=/^(?:select|textarea)/i
const s=/\r?\n/g
const l=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week|file)$/i
function c(){if(this.elements)return a.a.makeArray(this.elements)
{const e=a()(this).find(":input")
return e.length?e:this}}function d(){return this.name&&!this.disabled&&(this.checked||i.test(this.nodeName)||l.test(this.type))}function u(e,t){"string"===typeof t&&(t=t.replace(s,"\r\n"))
return{name:e,value:t}}function b(){const e=a()(this)
const t=(()=>{if("file"!==this.type)return e.hasClass("datetime_field_enabled")?""===e.val()?null:e.data("date")||null:e.data("rich_text")?Object(r["d"])(e,"get_code",false):e.val()
if(e.val())return this})()
return a.a.isArray(t)?t.map(e=>u(this.name,e)):u(this.name,t)}a.a.fn.serializeForm=function(){return this.map(c).filter(d).map(b).get()}},WEeK:function(e,t,n){"use strict"
n.d(t,"a",(function(){return F}))
var o=n("rePB")
var a=n("Ff2n")
var r=n("1OyB")
var i=n("vuIU")
var s=n("Ji7U")
var l=n("LK+K")
var c=n("q1tI")
var d=n.n(c)
var u=n("17x9")
var b=n.n(u)
var h=n("TSYQ")
var g=n.n(h)
var _=n("cClk")
var p=n("nAyT")
var f=n("jtGx")
var m=n("E+IV")
var y=n("tCl5")
var v=n("/UXv")
var k=n("sTNg")
var w=n("TstA")
var x=n("BTe1")
var R=n("J2CL")
function O(e){var t=e.colors,n=e.typography,o=e.borders,a=e.spacing,r=e.forms
return{fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,borderWidth:o.widthSmall,borderStyle:o.style,borderColor:t.borderMedium,borderRadius:o.radiusMedium,color:t.textDarkest,background:t.backgroundLightest,padding:a.small,focusOutlineWidth:o.widthMedium,focusOutlineStyle:o.style,focusOutlineColor:t.borderBrand,errorBorderColor:t.borderDanger,errorOutlineColor:t.borderDanger,placeholderColor:t.textDark,smallFontSize:n.fontSizeSmall,smallHeight:r.inputHeightSmall,mediumFontSize:n.fontSizeMedium,mediumHeight:r.inputHeightMedium,largeFontSize:n.fontSizeLarge,largeHeight:r.inputHeightLarge}}O.canvas=function(e){return{color:e["ic-brand-font-color-dark"],focusOutlineColor:e["ic-brand-primary"]}}
var B,j,C,S,q
var z={componentId:"qBMHb",template:function(e){return"\n\n.qBMHb_cSXm{background:".concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";position:relative}\n\n.qBMHb_cSXm,.qBMHb_cSXm:before{box-sizing:border-box;display:block}\n\n.qBMHb_cSXm:before{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit",'*1.5);bottom:-0.25rem;content:"";left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.qBMHb_cSXm.qBMHb_cVYB:before{opacity:1;transform:scale(1)}\n\n.qBMHb_cSXm.qBMHb_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.qBMHb_cSXm.qBMHb_fszt,.qBMHb_cSXm.qBMHb_fszt.qBMHb_cVYB:before{border-color:').concat(e.errorBorderColor||"inherit","}\n\n.qBMHb_cwos,input[type].qBMHb_cwos{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:transparent;border:medium none currentColor;border:none;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamily||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;outline:none;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:0 ").concat(e.padding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;width:100%;word-spacing:normal;z-index:auto}\n\n.qBMHb_cwos::-ms-clear,input[type].qBMHb_cwos::-ms-clear{display:none}\n\n.qBMHb_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button,input[type].qBMHb_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button{display:none!important}\n\n.qBMHb_cwos:focus,input[type].qBMHb_cwos:focus{box-shadow:none}\n\n.qBMHb_cwos:-ms-input-placeholder,input[type].qBMHb_cwos:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos::placeholder,input[type].qBMHb_cwos::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos.qBMHb_doqw,input[type].qBMHb_cwos.qBMHb_doqw{font-size:").concat(e.smallFontSize||"inherit",";height:calc(").concat(e.smallHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.smallHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_ycrn,input[type].qBMHb_cwos.qBMHb_ycrn{font-size:").concat(e.mediumFontSize||"inherit",";height:calc(").concat(e.mediumHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.mediumHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_cMDj,input[type].qBMHb_cwos.qBMHb_cMDj{font-size:").concat(e.largeFontSize||"inherit",";height:calc(").concat(e.largeHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.largeHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_EMjX,input[type].qBMHb_cwos.qBMHb_EMjX{text-align:start}\n\n[dir=ltr] .qBMHb_cwos.qBMHb_EMjX,[dir=ltr] input[type].qBMHb_cwos.qBMHb_EMjX{text-align:left}\n\n[dir=rtl] .qBMHb_cwos.qBMHb_EMjX,[dir=rtl] input[type].qBMHb_cwos.qBMHb_EMjX{text-align:right}\n\n.qBMHb_cwos.qBMHb_ImeN,[dir=ltr] .qBMHb_cwos.qBMHb_ImeN,[dir=ltr] input[type].qBMHb_cwos.qBMHb_ImeN,[dir=rtl] .qBMHb_cwos.qBMHb_ImeN,[dir=rtl] input[type].qBMHb_cwos.qBMHb_ImeN,input[type].qBMHb_cwos.qBMHb_ImeN{text-align:center}")},facade:"qBMHb_cSXm",focused:"qBMHb_cVYB",disabled:"qBMHb_ywdX",invalid:"qBMHb_fszt",input:"qBMHb_cwos",small:"qBMHb_doqw",medium:"qBMHb_ycrn",large:"qBMHb_cMDj","textAlign--start":"qBMHb_EMjX","textAlign--center":"qBMHb_ImeN"}
var F=(B=Object(p["a"])("8.0.0",{label:"renderLabel",required:"isRequired",inline:"display"}),j=Object(R["l"])(O,z),B(C=j(C=(q=S=function(e){Object(s["a"])(n,e)
var t=Object(l["a"])(n)
function n(e){var o
Object(r["a"])(this,n)
o=t.call(this)
o.handleInputRef=function(e){o._input=e
o.props.inputRef(e)}
o.handleChange=function(e){o.props.onChange(e,e.target.value)}
o.handleBlur=function(e){o.props.onBlur(e)
o.setState({hasFocus:false})}
o.handleFocus=function(e){o.props.onFocus(e)
o.setState({hasFocus:true})}
o.state={hasFocus:false}
o._defaultId=Object(x["a"])("TextInput")
o._messagesId=Object(x["a"])("TextInput-messages")
return o}Object(i["a"])(n,[{key:"focus",value:function(){this._input.focus()}},{key:"renderInput",value:function(){var e
var t=this.props,n=t.type,r=t.size,i=t.htmlSize,s=(t.display,t.textAlign),l=t.placeholder,c=t.value,u=t.defaultValue,b=t.required,h=t.isRequired,_=Object(a["a"])(t,["type","size","htmlSize","display","textAlign","placeholder","value","defaultValue","required","isRequired"])
var p=Object(f["b"])(_)
var m=this.interaction
var y=(e={},Object(o["a"])(e,z.input,true),Object(o["a"])(e,z[r],r),Object(o["a"])(e,z["textAlign--".concat(s)],s),e)
var v=""
p["aria-describedby"]&&(v="".concat(p["aria-describedby"]))
this.hasMessages&&(v=""!==v?"".concat(v," ").concat(this._messagesId):this._messagesId)
return d.a.createElement("input",Object.assign({},p,{className:g()(y),defaultValue:u,value:c,placeholder:l,ref:this.handleInputRef,type:n,id:this.id,required:h||b,"aria-invalid":this.invalid?"true":null,disabled:"disabled"===m,readOnly:"readonly"===m,"aria-describedby":""!==v?v:null,size:i,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handleFocus}))}},{key:"render",value:function(){var e
var t=this.props,n=t.width,a=t.inline,r=t.display,i=t.label,s=t.renderLabel,l=t.renderBeforeInput,c=t.renderAfterInput,u=t.messages,b=t.inputContainerRef,h=t.icon,_=t.shouldNotWrap
var p=this.interaction
var f=l||c||h
var y=(e={},Object(o["a"])(e,z.facade,true),Object(o["a"])(e,z.disabled,"disabled"===p),Object(o["a"])(e,z.invalid,this.invalid),Object(o["a"])(e,z.focused,this.state.hasFocus),e)
return d.a.createElement(k["a"],{id:this.id,label:Object(m["a"])(s||i),messagesId:this._messagesId,messages:u,inline:"inline-block"===r||a,width:n,inputContainerRef:b,layout:this.props.layout},d.a.createElement("span",{className:g()(y)},f?d.a.createElement(w["a"],{wrap:_?"no-wrap":"wrap"},l&&d.a.createElement(w["a"].Item,{padding:"0 0 0 small"},Object(m["a"])(l)),d.a.createElement(w["a"].Item,{shouldGrow:true,shouldShrink:true},d.a.createElement(w["a"],{__dangerouslyIgnoreExperimentalWarnings:true},d.a.createElement(w["a"].Item,{shouldGrow:true,shouldShrink:true},this.renderInput()),(c||h)&&d.a.createElement(w["a"].Item,{padding:"0 small 0 0"},c?Object(m["a"])(c):Object(m["a"])(h))))):this.renderInput()))}},{key:"interaction",get:function(){return Object(y["a"])({props:this.props})}},{key:"hasMessages",get:function(){return this.props.messages&&this.props.messages.length>0}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"focused",get:function(){return Object(v["a"])(this._input)}},{key:"value",get:function(){return this._input.value}},{key:"id",get:function(){return this.props.id||this._defaultId}}])
n.displayName="TextInput"
return n}(c["Component"]),S.propTypes={renderLabel:b.a.oneOfType([b.a.node,b.a.func]),type:b.a.oneOf(["text","email","url","tel","search","password"]),id:b.a.string,value:Object(_["a"])(b.a.string),defaultValue:b.a.string,interaction:b.a.oneOf(["enabled","disabled","readonly"]),messages:b.a.arrayOf(k["e"].message),size:b.a.oneOf(["small","medium","large"]),textAlign:b.a.oneOf(["start","center"]),width:b.a.string,htmlSize:b.a.oneOfType([b.a.string,b.a.number]),display:b.a.oneOf(["inline-block","block"]),shouldNotWrap:b.a.bool,placeholder:b.a.string,isRequired:b.a.bool,inputRef:b.a.func,inputContainerRef:b.a.func,renderBeforeInput:b.a.oneOfType([b.a.node,b.a.func]),renderAfterInput:b.a.oneOfType([b.a.node,b.a.func]),onChange:b.a.func,onBlur:b.a.func,onFocus:b.a.func,icon:b.a.func,label:b.a.oneOfType([b.a.node,b.a.func]),required:b.a.bool,inline:b.a.bool},S.defaultProps={renderLabel:void 0,type:"text",id:void 0,interaction:void 0,isRequired:false,value:void 0,defaultValue:void 0,display:"block",shouldNotWrap:false,placeholder:void 0,width:void 0,size:"medium",htmlSize:void 0,textAlign:"start",messages:[],inputRef:function(e){},inputContainerRef:function(e){},onChange:function(e,t){},onBlur:function(e){},onFocus:function(e){},renderBeforeInput:void 0,renderAfterInput:void 0},q))||C)||C)},XKWA:function(e,t,n){const o=n("ouhR")
var a,r,i,s=o({})
o.subscribe=a=function(e,t){if(o.isPlainObject(e))return o.each(e,(function(e,t){a(e,t)}))
function n(){return t.apply(this,Array.prototype.slice.call(arguments,1))}n.guid=t.guid=t.guid||o.guid++
s.bind(e,n)}
o.unsubscribe=r=function(){s.unbind.apply(s,arguments)}
o.publish=i=function(){s.trigger.apply(s,arguments)}
e.exports={subscribe:a,unsubscribe:r,publish:i}},Yp61:function(e,t,n){"use strict"
n.r(t)
var o=n("ouhR")
var a=n.n(o)
n("SG4G")
const r=function(){const e=document.createEvent("Event")
e.initEvent("rubricEditDataReady",true,true)
document.dispatchEvent(e)}
a.a.isReady?r():a()(document).ready(()=>r())},ZbPE:function(e,t,n){"use strict"
n.d(t,"a",(function(){return O}))
var o=n("rePB")
var a=n("1OyB")
var r=n("vuIU")
var i=n("Ji7U")
var s=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var d=n("17x9")
var u=n.n(d)
var b=n("TSYQ")
var h=n.n(b)
var g=n("J2CL")
var _=n("KgFQ")
var p=n("jtGx")
var f=n("nAyT")
var m=n("VTBJ")
function y(e){var t=e.typography,n=e.colors,o=e.spacing
return Object(m["a"])({},t,{primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,warningColor:n.textWarning,brandColor:n.textBrand,errorColor:n.textDanger,dangerColor:n.textDanger,successColor:n.textSuccess,alertColor:n.textAlert,paragraphMargin:"".concat(o.medium," 0")})}y.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
var v,k,w,x
var R={componentId:"enRcg",template:function(e){return"\n\n.enRcg_bGBk{font-family:".concat(e.fontFamily||"inherit","}\n\n.enRcg_bGBk sub,.enRcg_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.enRcg_bGBk sup{top:-0.4em}\n\n.enRcg_bGBk sub{bottom:-0.4em}\n\n.enRcg_bGBk code,.enRcg_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.enRcg_bGBk em,.enRcg_bGBk i{font-style:italic}\n\n.enRcg_bGBk b,.enRcg_bGBk strong{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.enRcg_bGBk p{display:block;margin:").concat(e.paragraphMargin||"inherit",";padding:0}\n\ninput.enRcg_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.enRcg_bGBk[type]{text-align:left}\n\n[dir=rtl] input.enRcg_bGBk[type]{text-align:right}\n\n.enRcg_bGBk:focus,input.enRcg_bGBk[type]:focus{outline:none}\n\n.enRcg_bGBk.enRcg_qFsi,input.enRcg_bGBk[type].enRcg_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_bLsb,input.enRcg_bGBk[type].enRcg_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_ezBQ,input.enRcg_bGBk[type].enRcg_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dlnd,input.enRcg_bGBk[type].enRcg_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_cJLh,input.enRcg_bGBk[type].enRcg_cJLh{color:").concat(e.successColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fpfC,input.enRcg_bGBk[type].enRcg_fpfC{color:").concat(e.brandColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eHcp,input.enRcg_bGBk[type].enRcg_eHcp{color:").concat(e.warningColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dwua,input.enRcg_bGBk[type].enRcg_dwua{color:").concat(e.errorColor||"inherit","}\n\n.enRcg_bGBk.enRcg_NQMb,input.enRcg_bGBk[type].enRcg_NQMb{color:").concat(e.dangerColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eZgl,input.enRcg_bGBk[type].enRcg_eZgl{color:").concat(e.alertColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fbNi,input.enRcg_bGBk[type].enRcg_fbNi{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-break:break-word}\n\n.enRcg_bGBk.enRcg_drST,input.enRcg_bGBk[type].enRcg_drST{font-weight:").concat(e.fontWeightNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_pEgL,input.enRcg_bGBk[type].enRcg_pEgL{font-weight:").concat(e.fontWeightLight||"inherit","}\n\n.enRcg_bGBk.enRcg_bdMA,input.enRcg_bGBk[type].enRcg_bdMA{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.enRcg_bGBk.enRcg_ijuF,input.enRcg_bGBk[type].enRcg_ijuF{font-style:normal}\n\n.enRcg_bGBk.enRcg_fetN,input.enRcg_bGBk[type].enRcg_fetN{font-style:italic}\n\n.enRcg_bGBk.enRcg_dfBC,input.enRcg_bGBk[type].enRcg_dfBC{font-size:").concat(e.fontSizeXSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_doqw,input.enRcg_bGBk[type].enRcg_doqw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_ycrn,input.enRcg_bGBk[type].enRcg_ycrn{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.enRcg_bGBk.enRcg_cMDj,input.enRcg_bGBk[type].enRcg_cMDj{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_eoMd,input.enRcg_bGBk[type].enRcg_eoMd{font-size:").concat(e.fontSizeXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fdca,input.enRcg_bGBk[type].enRcg_fdca{font-size:").concat(e.fontSizeXXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fEWX,input.enRcg_bGBk[type].enRcg_fEWX{line-height:").concat(e.lineHeight||"inherit","}\n\n.enRcg_bGBk.enRcg_fNIu,input.enRcg_bGBk[type].enRcg_fNIu{line-height:").concat(e.lineHeightFit||"inherit","}\n\n.enRcg_bGBk.enRcg_dfDs,input.enRcg_bGBk[type].enRcg_dfDs{line-height:").concat(e.lineHeightCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bDjL,input.enRcg_bGBk[type].enRcg_bDjL{line-height:").concat(e.lineHeightDouble||"inherit","}\n\n.enRcg_bGBk.enRcg_eQnG,input.enRcg_bGBk[type].enRcg_eQnG{letter-spacing:").concat(e.letterSpacingNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_bbUA,input.enRcg_bGBk[type].enRcg_bbUA{letter-spacing:").concat(e.letterSpacingCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bRWU,input.enRcg_bGBk[type].enRcg_bRWU{letter-spacing:").concat(e.letterSpacingExpanded||"inherit","}\n\n.enRcg_bGBk.enRcg_wZsr,input.enRcg_bGBk[type].enRcg_wZsr{text-transform:none}\n\n.enRcg_bGBk.enRcg_fCZK,input.enRcg_bGBk[type].enRcg_fCZK{text-transform:capitalize}\n\n.enRcg_bGBk.enRcg_dsRi,input.enRcg_bGBk[type].enRcg_dsRi{text-transform:uppercase}\n\n.enRcg_bGBk.enRcg_bLtD,input.enRcg_bGBk[type].enRcg_bLtD{text-transform:lowercase}")},root:"enRcg_bGBk","color-primary":"enRcg_qFsi","color-secondary":"enRcg_bLsb","color-primary-inverse":"enRcg_ezBQ","color-secondary-inverse":"enRcg_dlnd","color-success":"enRcg_cJLh","color-brand":"enRcg_fpfC","color-warning":"enRcg_eHcp","color-error":"enRcg_dwua","color-danger":"enRcg_NQMb","color-alert":"enRcg_eZgl","wrap-break-word":"enRcg_fbNi","weight-normal":"enRcg_drST","weight-light":"enRcg_pEgL","weight-bold":"enRcg_bdMA","style-normal":"enRcg_ijuF","style-italic":"enRcg_fetN","x-small":"enRcg_dfBC",small:"enRcg_doqw",medium:"enRcg_ycrn",large:"enRcg_cMDj","x-large":"enRcg_eoMd","xx-large":"enRcg_fdca","lineHeight-default":"enRcg_fEWX","lineHeight-fit":"enRcg_fNIu","lineHeight-condensed":"enRcg_dfDs","lineHeight-double":"enRcg_bDjL","letterSpacing-normal":"enRcg_eQnG","letterSpacing-condensed":"enRcg_bbUA","letterSpacing-expanded":"enRcg_bRWU","transform-none":"enRcg_wZsr","transform-capitalize":"enRcg_fCZK","transform-uppercase":"enRcg_dsRi","transform-lowercase":"enRcg_bLtD"}
var O=(v=Object(g["l"])(y,R),v(k=(x=w=function(e){Object(i["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(a["a"])(this,n)
return t.apply(this,arguments)}Object(r["a"])(n,[{key:"render",value:function(){var e
var t=this.props,a=t.wrap,r=t.weight,i=t.fontStyle,s=t.size,l=t.lineHeight,d=t.letterSpacing,u=t.transform,b=t.color,g=t.children
var f=Object(_["a"])(n,this.props)
return c.a.createElement(f,Object.assign({},Object(p["b"])(this.props),{className:h()((e={},Object(o["a"])(e,R.root,true),Object(o["a"])(e,R[s],s),Object(o["a"])(e,R["wrap-".concat(a)],a),Object(o["a"])(e,R["weight-".concat(r)],r),Object(o["a"])(e,R["style-".concat(i)],i),Object(o["a"])(e,R["transform-".concat(u)],u),Object(o["a"])(e,R["lineHeight-".concat(l)],l),Object(o["a"])(e,R["letterSpacing-".concat(d)],d),Object(o["a"])(e,R["color-".concat(b)],b),e)),ref:this.props.elementRef}),g)}}])
n.displayName="Text"
return n}(l["Component"]),w.propTypes={as:u.a.elementType,children:u.a.node,color:f["a"].deprecatePropValues(u.a.oneOf(["primary","secondary","brand","success","warning","error","danger","alert","primary-inverse","secondary-inverse"]),["error"],"It will be removed in version 8.0.0. Use `danger` instead."),elementRef:u.a.func,fontStyle:u.a.oneOf(["italic","normal"]),letterSpacing:u.a.oneOf(["normal","condensed","expanded"]),lineHeight:u.a.oneOf(["default","fit","condensed","double"]),size:u.a.oneOf(["x-small","small","medium","large","x-large","xx-large"]),transform:u.a.oneOf(["none","capitalize","uppercase","lowercase"]),weight:u.a.oneOf(["normal","light","bold"]),wrap:u.a.oneOf(["normal","break-word"])},w.defaultProps={as:"span",wrap:"normal",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},x))||k)},aq8L:function(e,t,n){"use strict"
var o=n("HGxv")
var a=n("8WeW")
Object(a["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"ca":{"buttons":{"cancel":"Cancel·la","delete":"Suprimeix"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Segur que ho voleu suprimir?"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annullér","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annullér","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","delete":"Delete"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
n("jQeR")
n("0sPK")
var r=o["default"].scoped("instructure_misc_plugins")
var i=n("ouhR")
var s=n.n(i)
var l=n("gI0r")
var c=n("3PZ/")
n("dhbk")
n("ESjL")
n("65NJ")
n("w2hD")
s.a.fn.setOptions=function(e,t){let n=e?"<option value=''>"+Object(l["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{const t=Object(l["a"])(e)
n+='<option value="'+t+'">'+t+"</option>"})
return this.html(s.a.raw(n))}
s.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
s.a.fn.scrollbarWidth=function(){const e=s()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
const n=t.innerWidth()
e.css("overflow-y","scroll")
const o=t.innerWidth()
e.remove()
return n-o}
s.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
s.a.fn.undim=function(e){return this.animate({opacity:1},e)}
s.a.fn.confirmDelete=function(e){e=s.a.extend({},s.a.fn.confirmDelete.defaults,e)
const t=this
let n=null
let o=true
e.noMessage=e.noMessage||e.no_message
const a=function(){if(!o){e.cancelled&&s.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const o=e.prepareData?e.prepareData.call(t,n):{}
o.authenticity_token=Object(c["a"])()
s.a.ajaxJSON(e.url,"DELETE",o,n=>{e.success.call(t,n)},(n,o,a,r)=>{e.error&&s.a.isFunction(e.error)?e.error.call(t,n,o,a,r):s.a.ajaxJSON.unhandledXHRs.push(o)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!s.a.skipConfirmations){if(e.dialog){o=false
const t="object"===typeof e.dialog?e.dialog:{}
const i=e.url.includes("assignments")?"btn-danger":"btn-primary"
n=s()(e.message).dialog(s.a.extend({},{modal:true,close:a,buttons:[{text:r.t("#buttons.cancel","Cancel"),click(){s()(this).dialog("close")}},{text:r.t("#buttons.delete","Delete"),class:i,click(){o=true
s()(this).dialog("close")}}]},t))
return}o=confirm(e.message)}a()}
s.a.fn.confirmDelete.defaults={get message(){return r.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
s.a.fn.fragmentChange=function(e){if(e&&true!==e){const n=(window.location.search||"").replace(/^\?/,"").split("&")
let o=null
for(var t=0;t<n.length;t++){const e=n[t]
e&&0===e.indexOf("hash=")&&(o="#"+e.substring(5))}this.bind("document_fragment_change",e)
const a=this
let r=false
for(t=0;t<s.a._checkFragments.fragmentList.length;t++){const e=s.a._checkFragments.fragmentList[t]
e.doc[0]==a[0]&&(r=true)}r||s.a._checkFragments.fragmentList.push({doc:a,fragment:""})
s()(window).bind("hashchange",s.a._checkFragments)
setTimeout(()=>{o&&o.length>0?a.triggerHandler("document_fragment_change",o):a&&a[0]&&a[0].location&&a[0].location.hash.length>0&&a.triggerHandler("document_fragment_change",a[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
s.a._checkFragments=function(){const e=s.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const n=e[t]
const o=n.doc
if(o[0].location.hash!=n.fragment){o.triggerHandler("document_fragment_change",o[0].location.hash)
n.fragment=o[0].location.hash
s.a._checkFragments.fragmentList[t]=n}}}
s.a._checkFragments.fragmentList=[]
s.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
s.a.fn.showIf=function(e){if(s.a.isFunction(e))return this.each((function(t){s()(this).showIf(e.call(this))}))
e?this.show():this.hide()
return this}
s.a.fn.disableIf=function(e){s.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
s.a.fn.indicate=function(e){e=e||{}
let t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}s()(".indicator_box").remove()
let n=this.offset()
e&&e.offset&&(n=e.offset)
const o=this.width()
const a=this.height()
const r=(e.container||this).zIndex()
t=s()(document.createElement("div"))
t.css({width:o+6,height:a+6,top:n.top-3,left:n.left-3,zIndex:r+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover((function(){s()(this).stop().fadeOut("fast",(function(){s()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
s()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){s()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){s()(this).remove()}))
e&&e.scroll&&s()("html,body").scrollToVisible(t)}
s.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
s.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
s.a.fn.fillWindowWithMe=function(e){const t=s.a.extend({minHeight:400},e),n=s()(this),o=s()("#wrapper"),a=s()("#main"),r=s()("#not_right_side"),i=s()(window),l=s()(this).add(t.alsoResize)
function c(){l.height(0)
const e=i.height()-(o.offset().top+o.outerHeight())+(a.height()-r.height()),c=Math.max(400,e)
l.height(c)
s.a.isFunction(t.onResize)&&t.onResize.call(n,c)}c()
i.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",c)
return this}
s.a.fn.autoGrowInput=function(e){e=s.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each((function(){let t=e.minWidth||s()(this).width(),n="",o=s()(this),a=s()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:o.css("fontSize"),fontFamily:o.css("fontFamily"),fontWeight:o.css("fontWeight"),letterSpacing:o.css("letterSpacing"),whiteSpace:"nowrap"}),r=function(){setTimeout(()=>{if(n===(n=o.val()))return
a.text(n)
const r=a.width(),i=r+e.comfortZone>=t?r+e.comfortZone:t,s=o.width(),l=i<s&&i>=t||i>t&&i<e.maxWidth
l&&o.width(i)})}
a.insertAfter(o)
s()(this).bind("keyup keydown blur update change",r)}))
return this}
s.a},bZJi:function(e,t,n){"use strict"
n.d(t,"a",(function(){return F}))
var o=n("Ff2n")
var a=n("VTBJ")
var r=n("1OyB")
var i=n("vuIU")
var s=n("Ji7U")
var l=n("LK+K")
var c=n("q1tI")
var d=n.n(c)
var u=n("17x9")
var b=n.n(u)
var h=n("nAyT")
var g=n("KgFQ")
var _=n("jtGx")
var p=n("sQ3tx")
var f=n("E+IV")
var m=n("UCAh")
var y=n("BTe1")
var v=n("J2CL")
var k=n("oXx0")
var w=n("jsCG")
var x=n("AdN2")
var R=function(e){var t=e.typography,n=e.spacing
return{fontFamily:t.fontFamily,fontWeight:t.fontWeightNormal,fontSize:t.fontSizeSmall,padding:n.small}}
var O,B,j,C,S,q
var z={componentId:"eZLSb",template:function(e){return"\n\n.eZLSb_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";padding:").concat(e.padding||"inherit","}")},root:"eZLSb_bGBk"}
var F=(O=Object(h["a"])("8.0.0",{tip:"renderTip",variant:"color"}),B=Object(k["a"])(),j=Object(v["l"])(R,z),O(C=B(C=j(C=(q=S=function(e){Object(s["a"])(n,e)
var t=Object(l["a"])(n)
function n(){var e
Object(r["a"])(this,n)
for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i]
e=t.call.apply(t,[this].concat(a))
e._id=Object(y["a"])("Tooltip")
e.state={hasFocus:false}
e.handleFocus=function(t){e.setState({hasFocus:true})}
e.handleBlur=function(t){e.setState({hasFocus:false})}
return e}Object(i["a"])(n,[{key:"renderTrigger",value:function(){var e=this.props,t=e.children,o=e.as
var r=this.state.hasFocus
var i={"aria-describedby":this._id}
if(o){var s=Object(g["a"])(n,this.props)
var l=Object(_["a"])(this.props,n.propTypes)
return d.a.createElement(s,Object.assign({},l,i),t)}return"function"===typeof t?t({focused:r,getTriggerProps:function(e){return Object(a["a"])({},i,{},e)}}):Object(p["a"])(this.props.children,i)}},{key:"render",value:function(){var e=this
var t=this.props,n=t.renderTip,a=t.isShowingContent,r=t.defaultIsShowingContent,i=t.on,s=t.placement,l=t.mountNode,c=t.constrain,u=t.offsetX,b=t.offsetY,h=t.positionTarget,g=t.onShowContent,p=t.onHideContent,m=t.tip,y=(t.variant,Object(o["a"])(t,["renderTip","isShowingContent","defaultIsShowingContent","on","placement","mountNode","constrain","offsetX","offsetY","positionTarget","onShowContent","onHideContent","tip","variant"]))
var v=this.props.variant
v=v?"default"===v?"primary-inverse":"primary":this.props.color
return d.a.createElement(w["a"],Object.assign({},Object(_["b"])(y),{isShowingContent:a,defaultIsShowingContent:r,on:i,shouldRenderOffscreen:true,shouldReturnFocus:false,placement:s,color:"primary"===v?"primary-inverse":"primary",mountNode:l,constrain:c,shadow:"none",offsetX:u,offsetY:b,positionTarget:h,renderTrigger:function(){return e.renderTrigger()},onShowContent:g,onHideContent:p,onFocus:this.handleFocus,onBlur:this.handleBlur}),d.a.createElement("span",{id:this._id,className:z.root,role:"tooltip"},n?Object(f["a"])(n):m))}}])
n.displayName="Tooltip"
return n}(c["Component"]),S.propTypes={children:b.a.oneOfType([b.a.node,b.a.func]).isRequired,renderTip:b.a.oneOfType([b.a.node,b.a.func]),isShowingContent:b.a.bool,defaultIsShowingContent:b.a.bool,as:b.a.elementType,on:b.a.oneOfType([b.a.oneOf(["click","hover","focus"]),b.a.arrayOf(b.a.oneOf(["click","hover","focus"]))]),color:b.a.oneOf(["primary","primary-inverse"]),placement:m["a"].placement,mountNode:m["a"].mountNode,constrain:m["a"].constrain,offsetX:b.a.oneOfType([b.a.string,b.a.number]),offsetY:b.a.oneOfType([b.a.string,b.a.number]),positionTarget:b.a.oneOfType([x["a"],b.a.func]),onShowContent:b.a.func,onHideContent:b.a.func,tip:b.a.node,variant:b.a.oneOf(["default","inverse"])},S.defaultProps={renderTip:void 0,isShowingContent:void 0,defaultIsShowingContent:false,on:void 0,color:"primary",placement:"top",mountNode:null,constrain:"window",offsetX:0,offsetY:0,positionTarget:void 0,onShowContent:function(e){},onHideContent:function(e,t){t.documentClick}},q))||C)||C)||C)},cClk:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"onChange"
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"defaultValue"
return function(o,a,r){var i=e.apply(null,arguments)
if(i)return i
if(o[a]&&"function"!==typeof o[t])return new Error(["You provided a '".concat(a,"' prop without an '").concat(t,"' handler on '").concat(r,"'. This will render a controlled component. If the component should be uncontrolled and manage its own state, use '").concat(n,"'. Otherwise, set '").concat(t,"'.")].join(""))}}},dDTa:function(e,t,n){"use strict"
const o=()=>{const e=ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]
return e.join("; ")}
t["a"]=o},dbrX:function(e,t,n){"use strict"
var o=n("uYtQ")
const a={}
const r={getCssVariant(){const e=window.ENV.use_responsive_layout?"responsive_layout":"new_styles"
const t=window.ENV.use_high_contrast?"high_contrast":"normal_contrast"
const n=Object(o["c"])()?"_rtl":""
return`${e}_${t}${n}`},urlFor(e,{combinedChecksum:t,includesNoVariables:n}){const o=n?"no_variables":r.getCssVariant()
return[window.ENV.ASSET_HOST||"","dist","brandable_css",o,`${e}-${t}.css`].join("/")},loadStylesheet(e,t){if(e in a)return
const n=document.createElement("link")
n.rel="stylesheet"
n.href=r.urlFor(e,t)
n.setAttribute("data-loaded-by-brandableCss",true)
document.head.appendChild(n)}}
t["a"]=r},eGSd:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
var o,a,r,i
var s=0
var l=[]
var c=false
if("function"!==typeof e)throw new TypeError("Expected a function")
var d=!!n.leading
var u="maxWait"in n
var b=!("trailing"in n)||!!n.trailing
var h=u?Math.max(+n.maxWait||0,t):0
function g(t){var n=o
var i=a
o=a=void 0
s=t
if(true!==c){r=e.apply(i,n)
return r}}function _(e){s=e
l.push(setTimeout(m,t))
return d?g(e):r}function p(e){var n=e-i
var o=e-s
var a=t-n
return u?Math.min(a,h-o):a}function f(e){var n=e-i
var o=e-s
return"undefined"===typeof i||n>=t||n<0||u&&o>=h}function m(){var e=Date.now()
if(f(e))return y(e)
l.push(setTimeout(m,p(e)))}function y(e){w()
if(b&&o)return g(e)
o=a=void 0
return r}function v(){c=true
w()
s=0
o=i=a=void 0}function k(){return 0===l.length?r:y(Date.now())}function w(){l.forEach((function(e){return clearTimeout(e)}))
l=[]}function x(){var e=Date.now()
var n=f(e)
for(var s=arguments.length,c=new Array(s),d=0;d<s;d++)c[d]=arguments[d]
o=c
a=this
i=e
if(n){if(0===l.length)return _(i)
if(u){l.push(setTimeout(m,t))
return g(i)}}0===l.length&&l.push(setTimeout(m,t))
return r}x.cancel=v
x.flush=k
return x}},gCYW:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var o=n("QF4Q")
var a=n("i/8D")
var r=n("EgqM")
var i=n("DUTp")
function s(e){var t={top:0,left:0,height:0,width:0}
if(!a["a"])return t
var n=Object(o["a"])(e)
if(!n)return t
if(n===window)return{left:window.pageXOffset,top:window.pageYOffset,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth+window.pageXOffset,bottom:window.innerHeight+window.pageYOffset}
var l=e===document?document:Object(i["a"])(n)
var c=l&&l.documentElement
if(!c||!Object(r["a"])(c,n))return t
var d=n.getBoundingClientRect()
var u
for(u in d)t[u]=d[u]
if(l!==document){var b=l.defaultView.frameElement
if(b){var h=s(b)
t.top+=h.top
t.bottom+=h.top
t.left+=h.left
t.right+=h.left}}return{top:t.top+(window.pageYOffset||c.scrollTop)-(c.clientTop||0),left:t.left+(window.pageXOffset||c.scrollLeft)-(c.clientLeft||0),width:(null==t.width?n.offsetWidth:t.width)||0,height:(null==t.height?n.offsetHeight:t.height)||0,right:l.body.clientWidth-t.width-t.left,bottom:l.body.clientHeight-t.height-t.top}}},kR0I:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var o=n("KQm4")
var a=n("QF4Q")
var r=n("xm5c")
var i=n("IPIv")
function s(e,t,n){var i=Object(a["a"])(e)
if(!i||"function"!==typeof i.querySelectorAll)return[]
var s="a[href],frame,iframe,object,input:not([type=hidden]),select,textarea,button,*[tabindex]"
var l=Array.from(i.querySelectorAll(s))
n&&Object(r["a"])(i,s)&&(l=[].concat(Object(o["a"])(l),[i]))
return l.filter((function(e){return"function"===typeof t?t(e)&&u(e):u(e)}))}function l(e){var t=Object(i["a"])(e)
return"inline"!==t.display&&e.offsetWidth<=0&&e.offsetHeight<=0||"none"===t.display}function c(e){var t=["fixed","absolute"]
if(t.includes(e.style.position.toLowerCase()))return true
if(t.includes(Object(i["a"])(e).getPropertyValue("position").toLowerCase()))return true
return false}function d(e){while(e){if(e===document.body)break
if(l(e))return false
if(c(e))break
e=e.parentNode}return true}function u(e){return!e.disabled&&d(e)}},msMH:function(e,t,n){"use strict"
n.d(t,"a",(function(){return F}))
var o=n("rePB")
var a=n("Ff2n")
var r=n("1OyB")
var i=n("vuIU")
var s=n("Ji7U")
var l=n("LK+K")
var c=n("q1tI")
var d=n.n(c)
var u=n("17x9")
var b=n.n(u)
var h=n("TSYQ")
var g=n.n(h)
var _=n("n12J")
var p=n("J2CL")
var f=n("RhCJ")
var m=n("nAyT")
var y=n("KgFQ")
var v=n("jtGx")
var k=n("oXx0")
function w(e){var t=e.borders,n=e.colors,o=e.spacing,a=e.typography
return{lineHeight:a.lineHeightFit,h1FontSize:a.fontSizeXXLarge,h1FontWeight:a.fontWeightLight,h1FontFamily:a.fontFamily,h2FontSize:a.fontSizeXLarge,h2FontWeight:a.fontWeightNormal,h2FontFamily:a.fontFamily,h3FontSize:a.fontSizeLarge,h3FontWeight:a.fontWeightBold,h3FontFamily:a.fontFamily,h4FontSize:a.fontSizeMedium,h4FontWeight:a.fontWeightBold,h4FontFamily:a.fontFamily,h5FontSize:a.fontSizeSmall,h5FontWeight:a.fontWeightNormal,h5FontFamily:a.fontFamily,primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,borderPadding:o.xxxSmall,borderColor:n.borderMedium,borderWidth:t.widthSmall,borderStyle:t.style}}w.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"]}}
w["instructure"]=function(e){var t=e.typography
return{h1FontFamily:t.fontFamilyHeading,h2FontFamily:t.fontFamilyHeading,h3FontWeight:t.fontWeightBold,h3FontSize:"2.125rem",h4FontWeight:t.fontWeightBold,h4FontSize:t.fontSizeLarge,h5FontWeight:t.fontWeightBold,h5FontSize:t.fontSizeMedium}}
var x={fontFamily:["h1FontFamily","h2FontFamily","h3FontFamily","h4FontFamily","h5FontFamily"]}
var R=Object(p["e"])({map:x,version:"8.0.0"})
var O,B,j,C,S,q
var z={componentId:"blnAQ",template:function(e){return"\n\n.blnAQ_bGBk{line-height:".concat(e.lineHeight||"inherit",";margin:0}\n\ninput.blnAQ_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:-0.375rem 0 0 0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.blnAQ_bGBk[type]{text-align:left}\n\n[dir=rtl] input.blnAQ_bGBk[type]{text-align:right}\n\ninput.blnAQ_bGBk[type]:focus{outline:none}\n\n.blnAQ_fCtg{font-family:").concat(e.h1FontFamily||"inherit",";font-size:").concat(e.h1FontSize||"inherit",";font-weight:").concat(e.h1FontWeight||"inherit","}\n\n.blnAQ_cVrl{font-family:").concat(e.h2FontFamily||"inherit",";font-size:").concat(e.h2FontSize||"inherit",";font-weight:").concat(e.h2FontWeight||"inherit","}\n\n.blnAQ_dnfM{font-family:").concat(e.h3FontFamily||"inherit",";font-size:").concat(e.h3FontSize||"inherit",";font-weight:").concat(e.h3FontWeight||"inherit","}\n\n.blnAQ_KGwv{font-family:").concat(e.h4FontFamily||"inherit",";font-size:").concat(e.h4FontSize||"inherit",";font-weight:").concat(e.h4FontWeight||"inherit","}\n\n.blnAQ_eYKA{font-family:").concat(e.h5FontFamily||"inherit",";font-size:").concat(e.h5FontSize||"inherit",";font-weight:").concat(e.h5FontWeight||"inherit","}\n\n.blnAQ_dbSc{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0}\n\n.blnAQ_bACI{border-top:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-top:").concat(e.borderPadding||"inherit","}\n\n.blnAQ_kWwi{border-bottom:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-bottom:").concat(e.borderPadding||"inherit","}\n\n.blnAQ_drOs{color:inherit}\n\n.blnAQ_eCSh{color:").concat(e.primaryColor||"inherit","}\n\n.blnAQ_buuG{color:").concat(e.secondaryColor||"inherit","}\n\n.blnAQ_bFtJ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.blnAQ_dsSB{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.blnAQ_bOQC{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}")},root:"blnAQ_bGBk","level--h1":"blnAQ_fCtg","level--h2":"blnAQ_cVrl","level--h3":"blnAQ_dnfM","level--h4":"blnAQ_KGwv","level--h5":"blnAQ_eYKA","level--reset":"blnAQ_dbSc","border--top":"blnAQ_bACI","border--bottom":"blnAQ_kWwi","color--inherit":"blnAQ_drOs","color--primary":"blnAQ_eCSh","color--secondary":"blnAQ_buuG","color--primary-inverse":"blnAQ_bFtJ","color--secondary-inverse":"blnAQ_dsSB",ellipsis:"blnAQ_bOQC"}
var F=(O=Object(m["a"])("8.0.0",{ellipsis:"<TruncateText />"}),B=Object(k["a"])(),j=Object(p["l"])(w,z,R),O(C=B(C=j(C=(q=S=function(e){Object(s["a"])(n,e)
var t=Object(l["a"])(n)
function n(){Object(r["a"])(this,n)
return t.apply(this,arguments)}Object(i["a"])(n,[{key:"render",value:function(){var e
var t=this.props,r=t.border,i=t.children,s=t.color,l=t.level,c=t.margin,u=t.elementRef,b=t.ellipsis,h=Object(a["a"])(t,["border","children","color","level","margin","elementRef","ellipsis"])
var p=Object(y["a"])(n,this.props,(function(){return"reset"===l?"span":l}))
return d.a.createElement(_["a"],Object.assign({},Object(v["b"])(h),{className:g()((e={},Object(o["a"])(e,z.root,true),Object(o["a"])(e,z["level--".concat(l)],true),Object(o["a"])(e,z["color--".concat(s)],s),Object(o["a"])(e,z["border--".concat(r)],"none"!==r),Object(o["a"])(e,z.ellipsis,b),e)),as:p,margin:c,elementRef:u}),i)}}])
n.displayName="Heading"
return n}(c["Component"]),S.propTypes={border:b.a.oneOf(["none","top","bottom"]),children:f["a"],color:b.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","inherit"]),level:b.a.oneOf(["h1","h2","h3","h4","h5","reset"]),as:b.a.elementType,margin:p["c"].spacing,elementRef:b.a.func,ellipsis:b.a.bool},S.defaultProps={children:null,margin:void 0,elementRef:void 0,border:"none",color:"inherit",level:"h2"},q))||C)||C)||C)},msTH:function(e,t,n){"use strict"
var o=n("ouhR")
var a=n.n(o)
var r=n("Y/W1")
var i=n.n(r)
var s=n("gI0r")
var l=n("HGxv")
var c=n("8WeW")
Object(c["a"])(JSON.parse('{"ar":{"user_content_aaf0fb5a":"محتوى المستخدم"},"ca":{"user_content_aaf0fb5a":"Contingut de l\'usuari"},"cy":{"user_content_aaf0fb5a":"Cynnwys Defnyddiwr"},"da":{"user_content_aaf0fb5a":"Brugerindhold"},"da-x-k12":{"user_content_aaf0fb5a":"Brugerindhold"},"de":{"user_content_aaf0fb5a":"Benutzer-Content"},"el":{"user_content_aaf0fb5a":"Περιεχόμενο Χρήστη"},"en-AU":{"user_content_aaf0fb5a":"User Content"},"en-AU-x-unimelb":{"user_content_aaf0fb5a":"User Content"},"en-CA":{"user_content_aaf0fb5a":"User Content"},"en-GB":{"user_content_aaf0fb5a":"User content"},"en-GB-x-lbs":{"user_content_aaf0fb5a":"User content"},"en-GB-x-ukhe":{"user_content_aaf0fb5a":"User content"},"es":{"user_content_aaf0fb5a":"Contenido del usuario"},"fa":{"user_content_aaf0fb5a":"محتوای کاربر"},"fi":{"user_content_aaf0fb5a":"Käyttäjän sisältö"},"fr":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"fr-CA":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"he":{"user_content_aaf0fb5a":"תוכן משתמש"},"ht":{"user_content_aaf0fb5a":"Kontni Itilizatè"},"hu":{"user_content_aaf0fb5a":"Felhasználói tartalom"},"is":{"user_content_aaf0fb5a":"Notandaefni"},"it":{"user_content_aaf0fb5a":"Contenuto utente"},"ja":{"user_content_aaf0fb5a":"ユーザーコンテンツ"},"mi":{"user_content_aaf0fb5a":"Ihirangi kaiwhakamahi"},"nb":{"user_content_aaf0fb5a":"Brukerinnhold"},"nb-x-k12":{"user_content_aaf0fb5a":"Brukerinnhold"},"nl":{"user_content_aaf0fb5a":"Gebruikersinhoud"},"nn":{"user_content_aaf0fb5a":"Brukarinnhald"},"pl":{"user_content_aaf0fb5a":"Zawartość użytkownika"},"pt":{"user_content_aaf0fb5a":"Conteúdo do Utilizador"},"pt-BR":{"user_content_aaf0fb5a":"Conteúdo do Usuário"},"ru":{"user_content_aaf0fb5a":"Контент пользователя"},"sl":{"user_content_aaf0fb5a":"Vsebina uporabnika"},"sv":{"user_content_aaf0fb5a":"Användarinnehåll"},"sv-x-k12":{"user_content_aaf0fb5a":"Användarinnehåll"},"tr":{"user_content_aaf0fb5a":"Kullanıcı İçeriği"},"uk":{"user_content_aaf0fb5a":"Контент користувача"},"zh-Hans":{"user_content_aaf0fb5a":"用户内容"},"zh-Hant":{"user_content_aaf0fb5a":"使用者內容"}}'))
n("jQeR")
n("0sPK")
var d=l["default"].scoped("user_content")
const u={translateMathmlForScreenreaders(e){var t,n
if(!(null!==(t=ENV)&&void 0!==t&&null!==(n=t.FEATURES)&&void 0!==n&&n.new_math_equation_handling)){const t=a()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const n=a()('<span class="hidden-readable"></span>')
n.html(t)
return n}},toMediaCommentLink(e){const t=a()(`<a\n        id='media_comment_${Object(s["a"])(a()(e).data("media_comment_id"))}'\n        data-media_comment_type='${Object(s["a"])(a()(e).data("media_comment_type"))}'\n        class='instructure_inline_media_comment ${Object(s["a"])(e.nodeName.toLowerCase())}_comment'\n        data-alt='${Object(s["a"])(a()(e).attr("data-alt"))}'\n      />`)
t.html(a()(e).html())
return t},convert(e,t={}){const n=a()("<div />").html(e)
n.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return u.toMediaCommentLink(this)}))
n.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){n.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=a()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=i.a.uniqueId("uc_")
let n="/object_snippet"
ENV.files_domain&&(n=`//${ENV.files_domain}${n}`)
const o=a()(`<form\n            action='${Object(s["a"])(n)}'\n            method='post'\n            class='user_content_post_form'\n            target='${Object(s["a"])(t)}'\n            id='form-${Object(s["a"])(t)}'\n          />`)
o.append(a()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
o.append(a()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
a()("body").append(o)
setTimeout(()=>o.submit(),0)
return a()(`<iframe\n            class='user_content_iframe'\n            name='${Object(s["a"])(t)}'\n            style='width: ${Object(s["a"])(e.data("uc_width"))}; height: ${Object(s["a"])(e.data("uc_height"))};'\n            frameborder='0'\n            title='${Object(s["a"])(d.t("User Content"))}'\n          />`)}))
n.find("img.equation_image").each((e,t)=>{const n=a()(t)
const o=u.translateMathmlForScreenreaders(n)
n.removeAttr("x-canvaslms-safe-mathml")
n.after(o)})}return n.html()}}
t["a"]=u},qJBq:function(e,t){(function(){var t,n,o
o=[]
t={}
e.exports=n=function(e,n,a){var r,i,s,l,c,d,u,b,h
null==a&&(a=true)
if("string"===typeof n){if(2!==n.length)throw{name:"ArgumentException",message:"The format for string options is '<thousands><decimal>' (exactly two characters)"}
h=n[0],r=n[1]}else if(Array.isArray(n)){if(2!==n.length)throw{name:"ArgumentException",message:"The format for array options is ['<thousands>','[<decimal>'] (exactly two elements)"}
h=n[0],r=n[1]}else{h=(null!=n?n.thousands:void 0)||(null!=n?n.group:void 0)||t.thousands
r=(null!=n?n.decimal:void 0)||t.decimal}u=""+h+r+a
d=o[u]
if(null==d){s=a?3:1
d=o[u]=new RegExp("^\\s*([+-]?(?:(?:\\d{1,3}(?:\\"+h+"\\d{"+s+",3})+)|\\d*))(?:\\"+r+"(\\d*))?\\s*$")}b=e.match(d)
if(!(null!=b&&3===b.length))return NaN
l=b[1].replace(new RegExp("\\"+h,"g"),"")
i=b[2]
c=parseFloat(l+"."+i)
return c}
e.exports.setOptions=function(e){var n,o
for(n in e){o=e[n]
t[n]=o}}
e.exports.factoryReset=function(){t={thousands:",",decimal:"."}}
e.exports.withOptions=function(e,t){null==t&&(t=true)
return function(o){return n(o,e,t)}}
e.exports.factoryReset()}).call(this)},tHpF:function(e,t,n){"use strict"
var o=n("ouhR")
var a=n.n(o)
n("VrN0")
const r={validate:/^[a-zA-Z][a-zA-Z0-9_-]*(?:\[(?:\d*|[a-zA-Z0-9_-]+)\])*$/,key:/[a-zA-Z0-9_-]+|(?=\[\])/g,push:/^$/,fixed:/^\d+$/,named:/^[a-zA-Z0-9_-]+$/}
const i=function(e,t,n){e[t]=n
return e}
a.a.fn.toJSON=function(){let e={},t={}
const n=function(e,n){void 0===t[e]&&(t[e]=0)
if(void 0===n)return t[e]++
if(void 0!==n&&n>t[e])return t[e]=++n}
a.a.each(a()(this).serializeForm(),(function(){if(!r.validate.test(this.name))return
let t,o=this.name.match(r.key),s=this.value,l=this.name
while(void 0!==(t=o.pop())){l=l.replace(new RegExp("\\["+t+"\\]$"),"")
if(t.match(r.push))s=i([],n(l),s)
else if(t.match(r.fixed)){n(l,t)
s=i([],t,s)}else t.match(r.named)&&(s=i({},t,s))}e=a.a.extend(true,e,s)}))
return e}},xm5c:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var o=n("QF4Q")
function a(e,t){var n=e&&Object(o["a"])(e)
if(!n)return false
return n.matches?n.matches(t):n.msMatchesSelector(t)}}}])

//# sourceMappingURL=edit_rubric-c-def03c41f6.js.map