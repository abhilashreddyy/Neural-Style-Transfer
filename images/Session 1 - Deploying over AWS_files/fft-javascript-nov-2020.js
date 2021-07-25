//walkme code snippet//
var walkme = document.createElement("script");
walkme.type = "text/javascript";
walkme.async = true;
walkme.src = "https://cdn.walkme.com/users/e189d983d5be44c0aa4d1b7e29b2bbe1/walkme_e189d983d5be44c0aa4d1b7e29b2bbe1_https.js";
var sw = document.getElementsByTagName("script")[0];
sw.parentNode.insertBefore(walkme, sw);
window._walkmeConfig = {smartLoad:true};

//walkme multi-language script//
window.walkme_get_language = function (){
if (window.ENV.LOCALE)
{
if (window.ENV.LOCALE == 'en') {
return '';
}
else if (window.ENV.LOCALE == 'pt-BR') {
return 'pt-BR';
}
else if (window.ENV.LOCALE == 'es') {
    return 'es';
}
else if (window.ENV.LOCALE == 'de') {
    return 'de';
}
else {
return ''
}
}
}