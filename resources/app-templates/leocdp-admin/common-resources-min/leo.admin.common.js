'use strict';const LeoCdpAdmin={};
LeoCdpAdmin.loadView=LeoCdpAdmin.loadView||function(a,b,c,d){var g="number"===typeof window.apiCacheTime2Live?window.apiCacheTime2Live:5,h="boolean"===typeof window.webTemplateCache?window.webTemplateCache:!0,k="lview_"+getCacheKey(a+b,{}),f=!1;h&&(f=lscache.get(k));if(f){if($(b).empty().html(f),$(window).scrollTop(0),"function"===typeof c)try{c.apply()}catch(e){console.error(e)}}else a=0<a.indexOf("?")?a+("\x26_\x3d"+cacheBustingKey):a+("?_\x3d"+cacheBustingKey),$.ajax({url:window.baseLeoAdminUrl+
a,type:"GET",success:function(e){if(!0===d)$(b).empty().html(e),lscache.set(k,e,g);else{var n="function"===typeof window.i18nLeoAdminData?window.i18nLeoAdminData():{};e=Handlebars.compile(e)(n);$(b).empty().html(e);lscache.set(k,e,g)}$(window).scrollTop(1);if("function"===typeof c)try{c.apply()}catch(p){console.error(p)}showNodesByIndustryModel()},error:function(e){console.error("loadView.error: ",e)}})};
Handlebars.registerHelper("formatCurrency",function(a){return a.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")});Handlebars.registerHelper("eachProperty",function(a,b){var c="",d;for(d in a)c+=b.fn({property:d,value:a[d]});return c});function getCompiledTemplate(a){return Handlebars.compile($(a).html().trim())}function getFullUrlStaticMedia(a,b,c){c=c||window.staticBaseUrl||"";return a&&""!==a&&0>a.indexOf("http")?c+a:b||""}
function getQueryMapFromUrl(a){for(var b=[],c=a.slice(a.indexOf("?")+1).split("\x26"),d=0;d<c.length;d++)a=c[d].split("\x3d"),b.push(a[0]),b[a[0]]=a[1];return b}function textTruncate(a,b,c){null==b&&(b=100);null==c&&(c="...");return a.length>b?a.substring(0,b-c.length)+c:a}function toTitleCase(a){return a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()}function toDateStringVN(a){var b=a.getDate(),c=a.getMonth()+1;a=a.getFullYear();10>b&&(b="0"+b);10>c&&(c="0"+c);return b+"/"+c+"/"+a}
function getCacheKey(a,b){a+=JSON.stringify(b);return md5(a)}
function isMobileDevice(){var a=!1;if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))a=
!0;return a}function getUserSession(){var a=lscache.get("usersession");if("string"===typeof a)return a;console.error("usersession is empty");return""}var LeoAdminApiUtil=window.LeoAdminApiUtil||{};
!0!==LeoAdminApiUtil.isLoaded&&function(){var a={isLoaded:!1,debug:!1,baseLeoAdminUrl:window.baseLeoAdminUrl||"http://localhost:9070",baseUploadApi:window.baseUploadApi||"http://localhost:9070",callPostApi:function(b,c,d){"function"!==typeof d&&console.error("callback must be a function");"string"!==typeof b&&console.error("urlStr must be a string");$.ajax({url:b,crossDomain:!0,data:JSON.stringify(c),contentType:"application/json",type:"POST"}).done(function(g){d(g)})},callPostAdminApi:function(b,
c,d){console.log("callPostAdminApi ...");"function"!==typeof d&&console.error("callback must be a function");var g=window.leoCdpUserSession||lscache.get("usersession");"string"===typeof g?(window.leoCdpUserSession=g,c.usersession=g,jQuery.ajax({type:"POST",crossDomain:!0,url:b,data:JSON.stringify(c),contentType:"application/json",dataType:"json",success:function(h){d(h)},error:function(h,k,f){console.error("callPostAdminApi POST failed."+h)}})):(console.error("lscache.get('usersession') is NULL"),
d({uri:b,data:"",errorMessage:"No Authentication",httpCode:501}))},getSecuredData:function(b,c,d,g){console.log("getSecuredData : "+b,c);"function"!==typeof d&&console.error("callback must be a function");var h=window.leoCdpUserSession||lscache.get("usersession");if("string"===typeof h){window.leoCdpUserSession=h;var k="number"===typeof window.apiCacheTime2Live?window.apiCacheTime2Live:1,f="boolean"===typeof window.dataApiCache?window.dataApiCache:!0,e="hget_"+getCacheKey(b,c),n=!1;f&&(n=lscache.get(e));
if(n)try{var p=JSON.parse(n);d(p)}catch(l){console.error(l)}else!0===g&&(c._t=(new Date).getTime()),jQuery.ajax({type:"GET",crossDomain:!0,url:b,data:c,beforeSend:function(l){l.setRequestHeader("leouss",h)},contentType:"application/json",dataType:"json",success:function(l){lscache.set(e,JSON.stringify(l),k);d(l)},error:function(l,m,q){console.error("getSecuredData POST failed."+l)}})}else console.error("lscache.get('usersession') is NULL"),d({uri:b,data:"",errorMessage:"No Authentication",httpCode:501})},
renderViewForSecuredData:function(b,c,d,g,h,k){window.baseDeliveryApi&&b?LeoAdminApiUtil.getSecuredData(baseDeliveryApi+b,c,function(f){var e=f.staticBaseUrl||"";if(0===f.httpCode&&""===f.errorMessage&&f.data){f=f.data;var n=getCompiledTemplate(g),p=$(d);p.empty();for(var l in f){var m=f[l],q=m.type;"function"===typeof h&&(m=h(m,e));m=n(m);p.append(m);"function"===typeof k&&(m=p.children().last(),k(q,m,e))}}}):console.error("baseDeliveryApi and apiURI must be not NULL")},httpGetDataJson:function(b){var c=
lscache.get("usersession");if(c)return jQuery.ajax({url:a.baseLeoAdminUrl+b,type:"GET",dataType:"json",beforeSend:function(d){d.setRequestHeader("leouss",c)}});console.error("No usersession found in lscache")},debugLog:function(b){!0===window.debugMode&&(console.log("caller context: ",a.debugLog.caller),[].forEach.call(arguments,function(c){console.log(c)}))},logErrorPayload:function(b){console.error("logErrorPayload",b);var c=b.httpCode;b=b.errorMessage;var d="ErrorCode: "+c;501===c?(d+=". You need to do login !",
c=function(g,h,k){LeoAdminApiUtil.logout(function(){location.reload(!0)})}):c=function(){};iziToast.error({timeout:4E3,title:b,message:d,onClosing:c})},isLoginSessionOK:function(){var b=lscache.get("usersession"),c=lscache.get("encryptionkey");return"string"===typeof b&&"string"===typeof c},logout:function(b){lscache.flush();setTimeout(function(){"function"===typeof b?b():window.location="/"},1200)},formater:{toDateString:function(b){return moment.utc(parseFloat(b)).local().format("YYYY-MM-DD HH:mm:ss")}}};
LeoAdminApiUtil=a;LeoAdminApiUtil.isLoaded=!0}();function isValidURL(a){return!!/^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(a)}function convertTimeInputToMinutes(a){a=moment($(a).val(),"HH:mm");a=moment.duration(a.diff(new Date)).asMinutes();0>a&&(a=Math.abs(a)+720);return Math.ceil(a)}
const errorNoAuthorization=function(){iziToast.error({title:"Error",message:"You don not have authorization to use this function, please contact your system administrator."})},appendItemCount=function(a,b,c){c=(new Number(c)).toLocaleString();b='\x3ch5 class\x3d"collector-item"\x3e '+b+' \x26nbsp; \x3cspan class\x3d"label label-default collector-count" \x3e '+c+" \x3c/span\x3e  \x3c/h5\x3e";$(a).append(b)},underDevelopment=function(a){var b="The feature is under development!";a&&(b='\x3cb\x3eThe feature "'+
$(a).attr("title")+'" is under development. It will be available in version 2.0! \x3c/b\x3e');iziToast.info({title:"Information Box",color:"yellow",message:b})};var notifyErrorMessage=function(a,b){iziToast.error({timeout:4E3,title:"Error",icon:"fa fa-info",message:a,onClosing:function(c,d,g){"function"===typeof b&&b()}})};
const notifySuccessMessage=function(a,b){iziToast.success({timeout:4E3,icon:"fa fa-check-square-o",title:"Information",message:a,onClosing:function(c,d,g){"function"===typeof b&&b()}})},leoCdpDocumentation=function(a){iziToast.info({title:"Information Box",color:"green",message:"We are working hard, as much as we can",onClosing:function(b,c,d){}})},showNodesByIndustryModel=function(){(window.industryDataModels||[]).forEach(function(a){$("#page_main_content").find("*[data-industry\x3d'"+a+"']").show()})},
setupCollapsePanels=function(){$(".panel-collapse").on("show.bs.collapse",function(){$(this).siblings(".collapse-panel-heading").addClass("active")});$(".panel-collapse").on("hide.bs.collapse",function(){$(this).siblings(".collapse-panel-heading").removeClass("active")})};$.fn.isInViewport=function(){var a=$(this).offset().top,b=a+$(this).outerHeight(),c=$(window).scrollTop(),d=c+$(window).height();return b>c&&a<d};
const decodeURISafe=function(a){return a?decodeURIComponent(a.replace(/%(?![0-9][0-9a-fA-F]+)/g,"%25")):a},loadSystemUsersForDataAuthorization=function(a,b,c){LeoAdminApiUtil.callPostAdminApi(baseLeoAdminUrl+"/user/list-for-selection",{},function(d){if(0===d.httpCode&&"object"===typeof d.data){var g=a.authorizedEditors,h=a.authorizedViewers,k="",f="";d.data.forEach(function(e){k=h.includes(e.userLogin)?k+('\x3coption selected value\x3d"'+e.userLogin+'"\x3e'+e.userLogin+"\x3c/option\x3e"):k+('\x3coption value\x3d"'+
e.userLogin+'"\x3e'+e.userLogin+"\x3c/option\x3e");1<e.role&&(f=g.includes(e.userLogin)?f+('\x3coption selected value\x3d"'+e.userLogin+'"\x3e'+e.userLogin+"\x3c/option\x3e"):f+('\x3coption value\x3d"'+e.userLogin+'"\x3e'+e.userLogin+"\x3c/option\x3e"))});b.html(k).show().chosen({width:"100%",no_results_text:"Oops, nothing found!"});c.html(f).show().chosen({width:"100%",no_results_text:"Oops, nothing found!"})}else LeoAdminApiUtil.logErrorPayload(d)})},EventMetric={NO_SCORING:0,SCORING_LEAD_METRIC:1,
SCORING_PROSPECT_METRIC:2,SCORING_ENGAGEMENT_METRIC:3,SCORING_DATA_QUALITY_METRIC:4,SCORING_ACQUISITION_METRIC:5,SCORING_LIFETIME_VALUE_METRIC:6,SCORING_EFFORT_METRIC:7,SCORING_SATISFACTION_METRIC:8,SCORING_FEEDBACK_METRIC:9,SCORING_PROMOTER_METRIC:10,SCORING_CREDIT_METRIC:11,SCORING_LOYALTY_METRIC:12},NO_IMAGE_URL="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/200px-No_image_available.svg.png",SocialMediaIconMap={twitter:'\x3cb\x3e \x3ci class\x3d"fa fa-twitter-square" aria-hidden\x3d"true"\x3e\x3c/i\x3e Twitter: \x3c/b\x3e ',
linkedin:'\x3cb\x3e \x3ci class\x3d"fa fa-linkedin-square" aria-hidden\x3d"true"\x3e\x3c/i\x3e LinkedIn: \x3c/b\x3e ',facebook:'\x3cb\x3e \x3ci class\x3d"fa fa-facebook-square" aria-hidden\x3d"true"\x3e\x3c/i\x3e Facebook: \x3c/b\x3e ',instagram:'\x3cb\x3e \x3ci class\x3d"fa fa-instagram" aria-hidden\x3d"true"\x3e\x3c/i\x3e Instagram: \x3c/b\x3e ',skype:'\x3cb\x3e \x3ci class\x3d"fa fa-skype" aria-hidden\x3d"true"\x3e\x3c/i\x3e Skype: \x3c/b\x3e ',github:'\x3cb\x3e \x3ci class\x3d"fa fa-github" aria-hidden\x3d"true"\x3e\x3c/i\x3e Github: \x3c/b\x3e ',
whatsapp:'\x3cb\x3e \x3ci class\x3d"fa fa-whatsapp" aria-hidden\x3d"true"\x3e\x3c/i\x3e WhatsApp: \x3c/b\x3e ',apple:'\x3cb\x3e \x3ci class\x3d"fa fa-apple" aria-hidden\x3d"true"\x3e\x3c/i\x3e Apple: \x3c/b\x3e ',medium:'\x3cb\x3e \x3ci class\x3d"fa fa-medium" aria-hidden\x3d"true"\x3e\x3c/i\x3e Medium: \x3c/b\x3e ',youtube:'\x3cb\x3e \x3ci class\x3d"fa fa-youtube" aria-hidden\x3d"true"\x3e\x3c/i\x3e Youtube: \x3c/b\x3e ',zalo:'\x3cb\x3e \x3ci class\x3d"fa fa-phone-square" aria-hidden\x3d"true"\x3e\x3c/i\x3e Zalo: \x3c/b\x3e ',
amazon:'\x3cb\x3e \x3ci class\x3d"fa fa-amazon" aria-hidden\x3d"true"\x3e\x3c/i\x3e Amazon: \x3c/b\x3e ',quora:'\x3cb\x3e \x3ci class\x3d"fa fa-quora" aria-hidden\x3d"true"\x3e\x3c/i\x3e Quora: \x3c/b\x3e ',bitbucket:'\x3cb\x3e \x3ci class\x3d"fa fa-bitbucket" aria-hidden\x3d"true"\x3e\x3c/i\x3e Bitbucket: \x3c/b\x3e ',tiktok:'\x3cb\x3e \x3ci class\x3d"fa fa-play-circle" aria-hidden\x3d"true"\x3e\x3c/i\x3e Tiktok: \x3c/b\x3e '},PersonalContactIconsMap={"Citizen ID 1":'\x3cb\x3e \x3ci class\x3d"fa fa-id-card-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e Citizen ID 1:  \x3c/b\x3e  ',
"Passport ID 1":'\x3cb\x3e \x3ci class\x3d"fa fa-id-card-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e Passport ID 1:  \x3c/b\x3e  ',"Citizen ID 2":'\x3cb\x3e \x3ci class\x3d"fa fa-id-card-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e Citizen ID 2:  \x3c/b\x3e  ',"Passport ID 2":'\x3cb\x3e \x3ci class\x3d"fa fa-id-card-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e Passport ID 2:  \x3c/b\x3e  ',"Citizen ID 3":'\x3cb\x3e \x3ci class\x3d"fa fa-id-card-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e Citizen ID 3:  \x3c/b\x3e  ',"Passport ID 3":'\x3cb\x3e \x3ci class\x3d"fa fa-id-card-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e Passport ID 3:  \x3c/b\x3e  ',
"Citizen ID 4":'\x3cb\x3e \x3ci class\x3d"fa fa-id-card-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e Citizen ID 4:  \x3c/b\x3e  ',"Passport ID 4":'\x3cb\x3e \x3ci class\x3d"fa fa-id-card-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e Passport ID 4:  \x3c/b\x3e  ',"Citizen ID 5":'\x3cb\x3e \x3ci class\x3d"fa fa-id-card-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e Citizen ID 5:  \x3c/b\x3e  ',"Passport ID 5":'\x3cb\x3e \x3ci class\x3d"fa fa-id-card-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e Passport ID 5:  \x3c/b\x3e  '},
ContactIconsMap={"Business Email 1":'\x3cb\x3e \x3ci class\x3d"fa fa-envelope-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e Business Email 1:  \x3c/b\x3e  ',"Business Mobile 1":'\x3cb\x3e \x3ci class\x3d"fa fa-phone-square" aria-hidden\x3d"true"\x3e\x3c/i\x3e Business Mobile 1:  \x3c/b\x3e ',"Business Email 2":'\x3cb\x3e \x3ci class\x3d"fa fa-envelope-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e Business Email 2:  \x3c/b\x3e ',"Business Mobile 2":'\x3cb\x3e \x3ci class\x3d"fa fa-phone-square" aria-hidden\x3d"true"\x3e\x3c/i\x3e Business Mobile 2:  \x3c/b\x3e ',
"Business Email 3":'\x3cb\x3e \x3ci class\x3d"fa fa-envelope-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e Business Email 3:  \x3c/b\x3e ',"Business Mobile 3":'\x3cb\x3e \x3ci class\x3d"fa fa-phone-square" aria-hidden\x3d"true"\x3e\x3c/i\x3e Business Mobile 3:  \x3c/b\x3e ',"Business Email 4":'\x3cb\x3e \x3ci class\x3d"fa fa-envelope-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e Business Email 4:  \x3c/b\x3e  ',"Business Mobile 4":'\x3cb\x3e \x3ci class\x3d"fa fa-phone-square" aria-hidden\x3d"true"\x3e\x3c/i\x3e Business Mobile 4:  \x3c/b\x3e ',
"Business Email 5":'\x3cb\x3e \x3ci class\x3d"fa fa-envelope-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e Business Email 5:  \x3c/b\x3e  ',"Business Mobile 5":'\x3cb\x3e \x3ci class\x3d"fa fa-phone-square" aria-hidden\x3d"true"\x3e\x3c/i\x3e Business Mobile 5:  \x3c/b\x3e '};