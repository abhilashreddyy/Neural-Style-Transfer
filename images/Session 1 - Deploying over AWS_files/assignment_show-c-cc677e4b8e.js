(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[296],{"0jNN":function(e,t,r){"use strict"
var a=Object.prototype.hasOwnProperty
var n=Array.isArray
var o=function(){var e=[]
for(var t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase())
return e}()
var s=function(e){while(e.length>1){var t=e.pop()
var r=t.obj[t.prop]
if(n(r)){var a=[]
for(var o=0;o<r.length;++o)"undefined"!==typeof r[o]&&a.push(r[o])
t.obj[t.prop]=a}}}
var i=function(e,t){var r=t&&t.plainObjects?Object.create(null):{}
for(var a=0;a<e.length;++a)"undefined"!==typeof e[a]&&(r[a]=e[a])
return r}
var l=function e(t,r,o){if(!r)return t
if("object"!==typeof r){if(n(t))t.push(r)
else{if(!t||"object"!==typeof t)return[t,r];(o&&(o.plainObjects||o.allowPrototypes)||!a.call(Object.prototype,r))&&(t[r]=true)}return t}if(!t||"object"!==typeof t)return[t].concat(r)
var s=t
n(t)&&!n(r)&&(s=i(t,o))
if(n(t)&&n(r)){r.forEach((function(r,n){if(a.call(t,n)){var s=t[n]
s&&"object"===typeof s&&r&&"object"===typeof r?t[n]=e(s,r,o):t.push(r)}else t[n]=r}))
return t}return Object.keys(r).reduce((function(t,n){var s=r[n]
a.call(t,n)?t[n]=e(t[n],s,o):t[n]=s
return t}),s)}
var c=function(e,t){return Object.keys(t).reduce((function(e,r){e[r]=t[r]
return e}),e)}
var d=function(e,t,r){var a=e.replace(/\+/g," ")
if("iso-8859-1"===r)return a.replace(/%[0-9a-f]{2}/gi,unescape)
try{return decodeURIComponent(a)}catch(e){return a}}
var u=function(e,t,r){if(0===e.length)return e
var a=e
"symbol"===typeof e?a=Symbol.prototype.toString.call(e):"string"!==typeof e&&(a=String(e))
if("iso-8859-1"===r)return escape(a).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}))
var n=""
for(var s=0;s<a.length;++s){var i=a.charCodeAt(s)
if(45===i||46===i||95===i||126===i||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122){n+=a.charAt(s)
continue}if(i<128){n+=o[i]
continue}if(i<2048){n+=o[192|i>>6]+o[128|63&i]
continue}if(i<55296||i>=57344){n+=o[224|i>>12]+o[128|i>>6&63]+o[128|63&i]
continue}s+=1
i=65536+((1023&i)<<10|1023&a.charCodeAt(s))
n+=o[240|i>>18]+o[128|i>>12&63]+o[128|i>>6&63]+o[128|63&i]}return n}
var _=function(e){var t=[{obj:{o:e},prop:"o"}]
var r=[]
for(var a=0;a<t.length;++a){var n=t[a]
var o=n.obj[n.prop]
var i=Object.keys(o)
for(var l=0;l<i.length;++l){var c=i[l]
var d=o[c]
if("object"===typeof d&&null!==d&&-1===r.indexOf(d)){t.push({obj:o,prop:c})
r.push(d)}}}s(t)
return e}
var p=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}
var f=function(e){if(!e||"object"!==typeof e)return false
return!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}
var g=function(e,t){return[].concat(e,t)}
e.exports={arrayToObject:i,assign:c,combine:g,compact:_,decode:d,encode:u,isBuffer:f,isRegExp:p,merge:l}},FZ6K:function(e,t,r){"use strict"
var a=r("An8g")
var n=r("VTBJ")
var o=r("q1tI")
var s=r.n(o)
r("17x9")
var i=r("bZJi")
var l=r("ayAk")
function c(e){return s.a.createElement("a",Object.assign({rel:"noopener noreferrer",target:"_blank"},e),l["a"].t("SpeedGrader™"))}function d(e){const t=e.className?"icon-speed-grader "+e.className:"icon-speed-grader"
let r={className:t,href:e.href}
e.disabled&&(r=Object(n["a"])(Object(n["a"])({},r),{},{"aria-disabled":"true","aria-describedby":e.disabledTip,onClick:e=>{e.preventDefault()},role:"button",style:{opacity:.5}}))
return e.disabled?Object(a["a"])(i["a"],{placement:"bottom",tip:e.disabledTip,variant:"inverse"},void 0,c(r)):c(r)}t["a"]=d},QJn8:function(e,t,r){"use strict"
r.d(t,"a",(function(){return o}))
var a=r("ouhR")
var n=r.n(a)
r("XbwQ")
function o(){return n()(".vdd_tooltip_link").tooltip({position:{my:"center bottom",at:"center top-10",collision:"fit fit"},tooltipClass:"center bottom vertical",content(){const e=n()(this).data("tooltipSelector")
try{const t=document.querySelector(e)
return n()(t).html()}catch(e){}}})}},QSc6:function(e,t,r){"use strict"
var a=r("0jNN")
var n=r("sxOR")
var o=Object.prototype.hasOwnProperty
var s={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}}
var i=Array.isArray
var l=Array.prototype.push
var c=function(e,t){l.apply(e,i(t)?t:[t])}
var d=Date.prototype.toISOString
var u=n["default"]
var _={addQueryPrefix:false,allowDots:false,charset:"utf-8",charsetSentinel:false,delimiter:"&",encode:true,encoder:a.encode,encodeValuesOnly:false,format:u,formatter:n.formatters[u],indices:false,serializeDate:function(e){return d.call(e)},skipNulls:false,strictNullHandling:false}
var p=function(e){return"string"===typeof e||"number"===typeof e||"boolean"===typeof e||"symbol"===typeof e||"bigint"===typeof e}
var f=function e(t,r,n,o,s,l,d,u,f,g,m,v,h){var b=t
"function"===typeof d?b=d(r,b):b instanceof Date?b=g(b):"comma"===n&&i(b)&&(b=b.join(","))
if(null===b){if(o)return l&&!v?l(r,_.encoder,h,"key"):r
b=""}if(p(b)||a.isBuffer(b)){if(l){var y=v?r:l(r,_.encoder,h,"key")
return[m(y)+"="+m(l(b,_.encoder,h,"value"))]}return[m(r)+"="+m(String(b))]}var S=[]
if("undefined"===typeof b)return S
var j
if(i(d))j=d
else{var k=Object.keys(b)
j=u?k.sort(u):k}for(var w=0;w<j.length;++w){var O=j[w]
if(s&&null===b[O])continue
i(b)?c(S,e(b[O],"function"===typeof n?n(r,O):r,n,o,s,l,d,u,f,g,m,v,h)):c(S,e(b[O],r+(f?"."+O:"["+O+"]"),n,o,s,l,d,u,f,g,m,v,h))}return S}
var g=function(e){if(!e)return _
if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.")
var t=e.charset||_.charset
if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined")
var r=n["default"]
if("undefined"!==typeof e.format){if(!o.call(n.formatters,e.format))throw new TypeError("Unknown format option provided.")
r=e.format}var a=n.formatters[r]
var s=_.filter;("function"===typeof e.filter||i(e.filter))&&(s=e.filter)
return{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:_.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?_.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:_.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?_.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:_.encode,encoder:"function"===typeof e.encoder?e.encoder:_.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:_.encodeValuesOnly,filter:s,formatter:a,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:_.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:_.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:_.strictNullHandling}}
e.exports=function(e,t){var r=e
var a=g(t)
var n
var o
if("function"===typeof a.filter){o=a.filter
r=o("",r)}else if(i(a.filter)){o=a.filter
n=o}var l=[]
if("object"!==typeof r||null===r)return""
var d
d=t&&t.arrayFormat in s?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices"
var u=s[d]
n||(n=Object.keys(r))
a.sort&&n.sort(a.sort)
for(var _=0;_<n.length;++_){var p=n[_]
if(a.skipNulls&&null===r[p])continue
c(l,f(r[p],p,u,a.strictNullHandling,a.skipNulls,a.encode?a.encoder:null,a.filter,a.sort,a.allowDots,a.serializeDate,a.formatter,a.encodeValuesOnly,a.charset))}var m=l.join(a.delimiter)
var v=true===a.addQueryPrefix?"?":""
a.charsetSentinel&&("iso-8859-1"===a.charset?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&")
return m.length>0?v+m:""}},Qyje:function(e,t,r){"use strict"
var a=r("QSc6")
var n=r("nmq7")
var o=r("sxOR")
e.exports={formats:o,parse:n,stringify:a}},UWEG:function(e,t,r){"use strict"
var a=r("ouhR")
var n=r.n(a)
r("dhbk")
t["a"]={toggle(e){const t=n()(e).data.bind(n()(e))
return n.a.ajaxJSON(t("url"),t("isChecked")?"DELETE":"PUT",{},()=>{t("isChecked",!t("isChecked"))
n()(e).toggleClass("btn-success")
n()("i",e).toggleClass("icon-empty icon-complete")
n()(".mark-done-labels span",e).toggleClass("visible")})}}},ayAk:function(e,t,r){"use strict"
var a=r("HGxv")
var n=r("8WeW")
Object(n["a"])(JSON.parse('{"ar":{"must_select_a_student_group_first_15c6a3cb":"يجب تحديد مجموعة طلاب أولاً","remove_selected_attachment_61f81ee4":"إزالة المرفق المحدد","select_group_to_grade_6df28d80":"حدد مجموعة للدرجة","select_one_8e0af564":"حدد واحدًا","speedgrader_tm_44688790":"SpeedGrader™"},"ca":{"must_select_a_student_group_first_15c6a3cb":"Primer s\'ha de seleccionar un grup d\'estudiants","remove_selected_attachment_61f81ee4":"Suprimeix el fitxer adjunt seleccionat","select_group_to_grade_6df28d80":"Selecciona el grup per qualificar","select_one_8e0af564":"Seleccioneu-ne un","speedgrader_tm_44688790":"SpeedGrader™"},"cy":{"must_select_a_student_group_first_15c6a3cb":"Rhaid dewis grŵp myfyrwyr i ddechrau","remove_selected_attachment_61f81ee4":"Tynnu\'r atodiad dan sylw","select_group_to_grade_6df28d80":"Dewis Grŵp i\'w Raddio","select_one_8e0af564":"Dewiswch Un","speedgrader_tm_44688790":"SpeedGrader™"},"da":{"must_select_a_student_group_first_15c6a3cb":"Skal vælge en studiegruppe først","remove_selected_attachment_61f81ee4":"Fjern valgte vedhæftede fil","select_group_to_grade_6df28d80":"Vælg gruppe, der skal have karakter","select_one_8e0af564":"Vælg en","speedgrader_tm_44688790":"SpeedGrader"},"da-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Skal vælge en elevgruppe først","remove_selected_attachment_61f81ee4":"Fjern valgte vedhæftede fil","select_group_to_grade_6df28d80":"Vælg gruppe, der skal vurderes","select_one_8e0af564":"Vælg en","speedgrader_tm_44688790":"SpeedGrader"},"de":{"must_select_a_student_group_first_15c6a3cb":"Zuerst muss eine Studentengruppe ausgewählt werden","remove_selected_attachment_61f81ee4":"Entfernen des ausgewählten Anhangs","select_group_to_grade_6df28d80":"Zu benotende Gruppe auswählen","select_one_8e0af564":"Einen auswählen","speedgrader_tm_44688790":"SpeedGrader™"},"el":{"select_one_8e0af564":"Επιλέξτε Ένα","speedgrader_tm_44688790":"SpeedGrader™"},"en-AU":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","remove_selected_attachment_61f81ee4":"Remove selected attachment","select_group_to_grade_6df28d80":"Select Group to Grade","select_one_8e0af564":"Select One","speedgrader_tm_44688790":"SpeedGrader™"},"en-AU-x-unimelb":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","remove_selected_attachment_61f81ee4":"Remove selected attachment","select_group_to_grade_6df28d80":"Select Group to Grade","select_one_8e0af564":"Select One","speedgrader_tm_44688790":"SpeedGrader™"},"en-CA":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","remove_selected_attachment_61f81ee4":"Remove selected attachment","select_group_to_grade_6df28d80":"Select Group to Grade","select_one_8e0af564":"Select One","speedgrader_tm_44688790":"SpeedGrader™"},"en-GB":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","remove_selected_attachment_61f81ee4":"Remove selected attachment","select_group_to_grade_6df28d80":"Select Group to Grade","select_one_8e0af564":"Select one","speedgrader_tm_44688790":"SpeedGrader™"},"en-GB-x-ukhe":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","remove_selected_attachment_61f81ee4":"Remove selected attachment","select_group_to_grade_6df28d80":"Select Group to Grade","select_one_8e0af564":"Select one","speedgrader_tm_44688790":"SpeedGrader™"},"es":{"must_select_a_student_group_first_15c6a3cb":"Primero debe seleccionar un grupo de estudiantes","remove_selected_attachment_61f81ee4":"Eliminar adjunto seleccionado","select_group_to_grade_6df28d80":"Seleccionar grupo para calificar","select_one_8e0af564":"Seleccionar uno","speedgrader_tm_44688790":"SpeedGrader™"},"fa":{"must_select_a_student_group_first_15c6a3cb":"ابتدا باید یک گروه دانشجویی را انتخاب کنید","select_group_to_grade_6df28d80":"انتخاب گروه برای نمره","select_one_8e0af564":"انتخاب یک مورد","speedgrader_tm_44688790":"برنامه نمره گذاری سریع™"},"fi":{"must_select_a_student_group_first_15c6a3cb":"Täytyy valita ensin opiskelijaryhmä","remove_selected_attachment_61f81ee4":"Poista valittu liite","select_group_to_grade_6df28d80":"Valitse arvioitava ryhmä","select_one_8e0af564":"Valitse yksi","speedgrader_tm_44688790":"SpeedGrader™"},"fr":{"must_select_a_student_group_first_15c6a3cb":"Il faut d\'abord sélectionner un groupe d\'élèves","remove_selected_attachment_61f81ee4":"Supprimer la pièce jointe sélectionnée","select_group_to_grade_6df28d80":"Sélectionnez un groupe à noter","select_one_8e0af564":"Sélectionner un élément","speedgrader_tm_44688790":"SpeedGrader™"},"fr-CA":{"must_select_a_student_group_first_15c6a3cb":"Vous devez d\'abord sélectionner un groupe d\'étudiants","remove_selected_attachment_61f81ee4":"Retirer la pièce jointe sélectionnée","select_group_to_grade_6df28d80":"Sélectionner le groupe à classer","select_one_8e0af564":"Sélectionner un élément","speedgrader_tm_44688790":"SpeedGrader™"},"he":{"select_one_8e0af564":"בחר אחת האפשרויות","speedgrader_tm_44688790":"SpeedGrader™"},"ht":{"must_select_a_student_group_first_15c6a3cb":"Dwe dabò seleksyone yon gwoup elèv","remove_selected_attachment_61f81ee4":"Elimine atachman seleksyone a","select_group_to_grade_6df28d80":"Seleksyone Gwoup pou Evalye a","select_one_8e0af564":"Seleksyone Yonn","speedgrader_tm_44688790":"SpeedGrader™"},"hu":{"select_one_8e0af564":"Válasszon egyet","speedgrader_tm_44688790":"Gyorsértékelő"},"hy":{"select_one_8e0af564":"Ընտրել մեկը","speedgrader_tm_44688790":"«Արագ գնահատման համակարգ™»"},"is":{"must_select_a_student_group_first_15c6a3cb":"Velja þarf nemendahóp fyrst","remove_selected_attachment_61f81ee4":"Fjarlægja valið viðhengi","select_group_to_grade_6df28d80":"Veldu hóp til að gefa einkunnir","select_one_8e0af564":"Velja einn","speedgrader_tm_44688790":"SpeedGrader™"},"it":{"must_select_a_student_group_first_15c6a3cb":"È necessario selezionare prima un gruppo di studenti","remove_selected_attachment_61f81ee4":"Rimuovi allegato selezionato","select_group_to_grade_6df28d80":"Seleziona gruppo a cui assegnare un voto","select_one_8e0af564":"Scegli un\'opzione","speedgrader_tm_44688790":"SpeedGrader™"},"ja":{"must_select_a_student_group_first_15c6a3cb":"受講生グループを先に選択してください","remove_selected_attachment_61f81ee4":"選択された添付書類を削除","select_group_to_grade_6df28d80":"採点するグループを選択する","select_one_8e0af564":"1 つを選択","speedgrader_tm_44688790":"SpeedGrader™"},"ko":{"select_one_8e0af564":"하나 선택","speedgrader_tm_44688790":"SpeedGrader™"},"mi":{"must_select_a_student_group_first_15c6a3cb":"Me tīpakohia te ākonga rōpu i te tuatahi","remove_selected_attachment_61f81ee4":"Tangohia tē tāpiri kua tīpakohia","select_group_to_grade_6df28d80":"Tīpako Rōpu ki te Kōeke","select_one_8e0af564":"Tīpakohia","speedgrader_tm_44688790":"Speedgrader"},"nb":{"must_select_a_student_group_first_15c6a3cb":"Velg en studentgruppe først","remove_selected_attachment_61f81ee4":"Fjern valgt vedlegg","select_group_to_grade_6df28d80":"Velg gruppe for karaktersetting","select_one_8e0af564":"Velg én","speedgrader_tm_44688790":"SpeedGrader™"},"nb-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Velg en elevgruppe først","remove_selected_attachment_61f81ee4":"Fjern valgt vedlegg","select_group_to_grade_6df28d80":"Velg gruppe for vurdering","select_one_8e0af564":"Velg én","speedgrader_tm_44688790":"SpeedGrader™"},"nl":{"must_select_a_student_group_first_15c6a3cb":"Moet eerst een cursistengroep selecteren","remove_selected_attachment_61f81ee4":"Geselecteerde bijlage verwijderen","select_group_to_grade_6df28d80":"Groep selecteren voor beoordeling","select_one_8e0af564":"Eén selecteren","speedgrader_tm_44688790":"SpeedGrader™"},"nn":{"must_select_a_student_group_first_15c6a3cb":"Må først velje ei studentgruppe","select_group_to_grade_6df28d80":"Vel gruppe å vurdere","select_one_8e0af564":"Vel ein","speedgrader_tm_44688790":"SpeedGrader™"},"pl":{"must_select_a_student_group_first_15c6a3cb":"Należy najpierw wybrać grupę uczestników","remove_selected_attachment_61f81ee4":"Usuń wybrany załącznik","select_group_to_grade_6df28d80":"Wybierz grupę do oceny","select_one_8e0af564":"Wybierz jeden","speedgrader_tm_44688790":"SpeedGrader™"},"pt":{"must_select_a_student_group_first_15c6a3cb":"É necessário selecionar um grupo de alunos primeiro","remove_selected_attachment_61f81ee4":"Retirar o anexo selecionado","select_group_to_grade_6df28d80":"Selecionar grupo para nota","select_one_8e0af564":"Selecionar um","speedgrader_tm_44688790":"SpeedGrader™"},"pt-BR":{"must_select_a_student_group_first_15c6a3cb":"Deve selecionar um grupo de alunos primeiro","remove_selected_attachment_61f81ee4":"Remover anexo selecionado","select_group_to_grade_6df28d80":"Selecionar grupo para avaliar","select_one_8e0af564":"Selecionar um","speedgrader_tm_44688790":"SpeedGrader™"},"ru":{"must_select_a_student_group_first_15c6a3cb":"Сначала необходимо выбрать группу студентов","remove_selected_attachment_61f81ee4":"Удалить выбранное вложение","select_group_to_grade_6df28d80":"Выберите группу для оценки","select_one_8e0af564":"Выберите один","speedgrader_tm_44688790":"SpeedGrader™"},"sv":{"must_select_a_student_group_first_15c6a3cb":"Du måste först välja en studentgrupp","remove_selected_attachment_61f81ee4":"Ta bort valda bilagor","select_group_to_grade_6df28d80":"Välj en grupp som ska bedömas","select_one_8e0af564":"Välj en","speedgrader_tm_44688790":"SpeedGrader™"},"sv-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Du måste först välja en elevgrupp","remove_selected_attachment_61f81ee4":"Ta bort valda bilagor","select_group_to_grade_6df28d80":"Välj en grupp som ska bedömas","select_one_8e0af564":"Välj en","speedgrader_tm_44688790":"SpeedGrader™"},"tr":{"select_one_8e0af564":"Birini Seçiniz","speedgrader_tm_44688790":"SpeedGrader™"},"uk":{"speedgrader_tm_44688790":"SpeedGrader™"},"zh-Hans":{"must_select_a_student_group_first_15c6a3cb":"必须先选择一个学生组","remove_selected_attachment_61f81ee4":"删除所选附件","select_group_to_grade_6df28d80":"选择要评分的组","select_one_8e0af564":"选择一个","speedgrader_tm_44688790":"快速评分器™"},"zh-Hant":{"must_select_a_student_group_first_15c6a3cb":"必須先選擇學生群組","remove_selected_attachment_61f81ee4":"移除所選的附件","select_group_to_grade_6df28d80":"選擇要評分的群組","select_one_8e0af564":"選擇一個","speedgrader_tm_44688790":"SpeedGrader™"}}'))
r("jQeR")
r("0sPK")
t["a"]=a["default"].scoped("assignment")},"dwl/":function(e,t,r){"use strict"
var a=r("An8g")
r("17x9")
var n=r("sTNg")
var o=r("ayAk")
r("q1tI")
function s(e){return Object(a["a"])("option",{value:e.id},e.id,e.name)}function i(e){return Object(a["a"])("optgroup",{label:e.name},"group_category_"+e.id,e.groups.map(e=>s(e)))}function l(e){return Object(a["a"])(n["a"],{id:"student-group-filter",label:e.label},void 0,Object(a["a"])("select",{onChange:t=>{e.onChange(t.target.value)},style:{margin:"0",width:"100%"},value:e.value||"0"},void 0,Object(a["a"])("option",{"aria-disabled":"true",disabled:"disabled",value:"0"},"0",o["a"].t("Select One")),e.categories.map(e=>i(e))))}t["a"]=l},jbBh:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var a=r("ouhR")
var n=r.n(a)
var o=r("ayAk")
r("Dhso")
const s="re_upload_submissions_form"
function i({submissions_zip:e}){if(!e)return false
if(!e.match(/\.zip$/)){n()(this).formErrors({submissions_zip:o["a"].t("Please upload files as a .zip")})
return false}const t=this.find('button[type="submit"]')
t.attr("disabled",true)
t.text(o["a"].t("Uploading..."))
return true}function l(e){const t=n()("#"+s)
t.find('input[name="submissions_zip"]').remove()
t.removeAttr("enctype")
t.append(`<input type="hidden" name="attachment_id" value="${e.id}">`)
document.getElementById(s).submit()}function c(e){const t=this.find('button[type="submit"]')
t.attr("disabled",false)
t.text(o["a"].t("Upload Files"))
return this}function d(e){return{errorMessage:o["a"].t("Upload error. Please try again.")}}function u(e){const t={fileUpload:true,fileUploadOptions:{context_code:e,formDataTarget:"uploadDataUrl",intent:"submissions_zip_upload",preparedFileUpload:true,singleFile:true,upload_only:true,preferFileValueForInputName:false},object_name:"attachment",beforeSubmit:i,error:c,errorFormatter:d,success:l}
n()("#"+s).formSubmit(t)
return t}},nmq7:function(e,t,r){"use strict"
var a=r("0jNN")
var n=Object.prototype.hasOwnProperty
var o=Array.isArray
var s={allowDots:false,allowPrototypes:false,arrayLimit:20,charset:"utf-8",charsetSentinel:false,comma:false,decoder:a.decode,delimiter:"&",depth:5,ignoreQueryPrefix:false,interpretNumericEntities:false,parameterLimit:1e3,parseArrays:true,plainObjects:false,strictNullHandling:false}
var i=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))}
var l="utf8=%26%2310003%3B"
var c="utf8=%E2%9C%93"
var d=function(e,t){var r={}
var d=t.ignoreQueryPrefix?e.replace(/^\?/,""):e
var u=Infinity===t.parameterLimit?void 0:t.parameterLimit
var _=d.split(t.delimiter,u)
var p=-1
var f
var g=t.charset
if(t.charsetSentinel)for(f=0;f<_.length;++f)if(0===_[f].indexOf("utf8=")){_[f]===c?g="utf-8":_[f]===l&&(g="iso-8859-1")
p=f
f=_.length}for(f=0;f<_.length;++f){if(f===p)continue
var m=_[f]
var v=m.indexOf("]=")
var h=-1===v?m.indexOf("="):v+1
var b,y
if(-1===h){b=t.decoder(m,s.decoder,g,"key")
y=t.strictNullHandling?null:""}else{b=t.decoder(m.slice(0,h),s.decoder,g,"key")
y=t.decoder(m.slice(h+1),s.decoder,g,"value")}y&&t.interpretNumericEntities&&"iso-8859-1"===g&&(y=i(y))
y&&"string"===typeof y&&t.comma&&y.indexOf(",")>-1&&(y=y.split(","))
m.indexOf("[]=")>-1&&(y=o(y)?[y]:y)
n.call(r,b)?r[b]=a.combine(r[b],y):r[b]=y}return r}
var u=function(e,t,r){var a=t
for(var n=e.length-1;n>=0;--n){var o
var s=e[n]
if("[]"===s&&r.parseArrays)o=[].concat(a)
else{o=r.plainObjects?Object.create(null):{}
var i="["===s.charAt(0)&&"]"===s.charAt(s.length-1)?s.slice(1,-1):s
var l=parseInt(i,10)
if(r.parseArrays||""!==i)if(!isNaN(l)&&s!==i&&String(l)===i&&l>=0&&r.parseArrays&&l<=r.arrayLimit){o=[]
o[l]=a}else o[i]=a
else o={0:a}}a=o}return a}
var _=function(e,t,r){if(!e)return
var a=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e
var o=/(\[[^[\]]*])/
var s=/(\[[^[\]]*])/g
var i=r.depth>0&&o.exec(a)
var l=i?a.slice(0,i.index):a
var c=[]
if(l){if(!r.plainObjects&&n.call(Object.prototype,l)&&!r.allowPrototypes)return
c.push(l)}var d=0
while(r.depth>0&&null!==(i=s.exec(a))&&d<r.depth){d+=1
if(!r.plainObjects&&n.call(Object.prototype,i[1].slice(1,-1))&&!r.allowPrototypes)return
c.push(i[1])}i&&c.push("["+a.slice(i.index)+"]")
return u(c,t,r)}
var p=function(e){if(!e)return s
if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.")
if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined")
var t="undefined"===typeof e.charset?s.charset:e.charset
return{allowDots:"undefined"===typeof e.allowDots?s.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:s.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:s.arrayLimit,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:s.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:s.comma,decoder:"function"===typeof e.decoder?e.decoder:s.decoder,delimiter:"string"===typeof e.delimiter||a.isRegExp(e.delimiter)?e.delimiter:s.delimiter,depth:"number"===typeof e.depth||false===e.depth?+e.depth:s.depth,ignoreQueryPrefix:true===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:s.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:s.parameterLimit,parseArrays:false!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:s.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:s.strictNullHandling}}
e.exports=function(e,t){var r=p(t)
if(""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{}
var n="string"===typeof e?d(e,r):e
var o=r.plainObjects?Object.create(null):{}
var s=Object.keys(n)
for(var i=0;i<s.length;++i){var l=s[i]
var c=_(l,n[l],r)
o=a.merge(o,c,r)}return a.compact(o)}},sxOR:function(e,t,r){"use strict"
var a=String.prototype.replace
var n=/%20/g
var o=r("0jNN")
var s={RFC1738:"RFC1738",RFC3986:"RFC3986"}
e.exports=o.assign({default:s.RFC3986,formatters:{RFC1738:function(e){return a.call(e,n,"+")},RFC3986:function(e){return String(e)}}},s)},xHU4:function(e,t,r){"use strict"
r.r(t)
var a=r("An8g")
var n=r("ik22")
var o=r("ayAk")
var s=r("ouhR")
var i=r.n(s)
r("q1tI")
var l=r("i8i4")
var c=r.n(l)
var d=r("BrAc")
var u=r("Qyje")
var _=r.n(u)
var p=r("ygkh")
var f=r("Vovh")
var g=r("mX+G")
var m=r.n(g)
var v=function(e,t){return function(){return e.apply(t,arguments)}},h=function(e,t){for(var r in t)b.call(t,r)&&(e[r]=t[r])
function a(){this.constructor=e}a.prototype=t.prototype
e.prototype=new a
e.__super__=t.prototype
return e},b={}.hasOwnProperty
var y=function(e){h(t,e)
function t(){this.toggleSpeedgraderLink=v(this.toggleSpeedgraderLink,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.model.on("change:published",this.toggleSpeedgraderLink)}
t.prototype.toggleSpeedgraderLink=function(){return this.model.get("published")?this.$el.removeClass("hidden"):this.$el.addClass("hidden")}
return t}(m.a.View)
var S=r("QJn8")
var j=r("UWEG")
var k=r("6dnZ")
r("Dhso")
var w=r("40dz")
var O=r("VrCy")
var N=r("dwl/")
var E=r("FZ6K")
var G=r("QbG7")
var D=r("Nuch")
var V=r("jbBh")
const x=new w["default"]
x.init({itemType:"assignment",page:"show"})
let I=[]
function A(e){if("0"!==e){const t={selectedStudentGroupId:e}
I.push(t)
ENV.selected_student_group_id=e
R()
C()
d["a"].put(`/api/v1/courses/${ENV.COURSE_ID}/gradebook_settings`,_.a.stringify({gradebook_settings:{filter_rows_by:{student_group_id:e}}})).finally(()=>{I=I.filter(e=>e!==t)
C()})}}function C(){const e=ENV.SETTINGS.filter_speed_grader_by_student_group&&(!ENV.selected_student_group_id||I.length>0)
const t=document.getElementById("speed_grader_link_mount_point")
t&&c.a.render(Object(a["a"])(E["a"],{disabled:e,href:ENV.speed_grader_url,disabledTip:o["a"].t("Must select a student group first")}),t)}function R(){const e=document.getElementById("student_group_filter_mount_point")
e&&c.a.render(Object(a["a"])(N["a"],{categories:ENV.group_categories,label:o["a"].t("Select Group to Grade"),onChange:A,value:ENV.selected_student_group_id}),e)}const T=Promise.all([r.e(10),r.e(57),r.e(680)]).then(r.bind(null,"fY8A"))
i()(()=>{const e=i()("#assignment_publish_button")
if(e.length>0){const t=new p["a"]({id:e.attr("data-id"),unpublishable:!e.hasClass("disabled"),published:e.hasClass("published")})
t.doNotParse()
new y({model:t,el:"#assignment-speedgrader-link"}).render()
const r=new f["a"]({model:t,el:e})
r.render()
r.on("publish",()=>i()("#moderated_grading_button").show())
r.on("unpublish",()=>i()("#moderated_grading_button").hide())}T.then(()=>{i()("#sequence_footer").moduleSequenceFooter({courseID:ENV.COURSE_ID,assetType:"Assignment",assetID:ENV.ASSIGNMENT_ID,location:window.location})})
return Object(S["a"])()})
i()(()=>i()("#content").on("click","#mark-as-done-checkbox",(function(){return j["a"].toggle(this)})))
function P(e,t=true){e&&e.preventDefault()
c.a.render(Object(a["a"])(G["a"],{open:t,sourceCourseId:ENV.COURSE_ID,contentShare:{content_type:"assignment",content_id:ENV.ASSIGNMENT_ID},onDismiss:()=>{P(null,false)
i()(".al-trigger").focus()}}),document.getElementById("direct-share-mount-point"))}function z(e,t=true){e&&e.preventDefault()
c.a.render(Object(a["a"])(D["a"],{open:t,sourceCourseId:ENV.COURSE_ID,contentSelection:{assignments:[ENV.ASSIGNMENT_ID]},onDismiss:()=>{z(null,false)
i()(".al-trigger").focus()}}),document.getElementById("direct-share-mount-point"))}i()(()=>{i()(".direct-share-send-to-menu-item").click(P)
i()(".direct-share-copy-to-menu-item").click(z)})
i()(()=>{if(ENV.speed_grader_url){ENV.SETTINGS.filter_speed_grader_by_student_group&&R()
C()}})
i()(()=>{i()(".upload_submissions_link").click(e=>{e.preventDefault()
i()("#re_upload_submissions_form").slideToggle()})
i()(".download_submissions_link").click((function(e){e.preventDefault()
n["a"].downloadSubmissions(i()(this).attr("href"))
i()(".upload_submissions_link").slideDown()}))
Object(V["a"])(ENV.USER_ASSET_STRING)
i()("#edit_assignment_form").bind("assignment_updated",(e,t)=>{t.assignment&&t.assignment.peer_reviews?i()(".assignment_peer_reviews_link").slideDown():i()(".assignment_peer_reviews_link").slideUp()})})
i()(()=>{const e=document.getElementById("crs-graphs")
const t=document.getElementById("not_right_side")
k["default"].init(e,t)
document.getElementById("assignment_external_tools")&&O["a"].attach(document.getElementById("assignment_external_tools"),"assignment_view",parseInt(ENV.COURSE_ID,10),parseInt(ENV.ASSIGNMENT_ID,10))})}}])

//# sourceMappingURL=assignment_show-c-cc677e4b8e.js.map