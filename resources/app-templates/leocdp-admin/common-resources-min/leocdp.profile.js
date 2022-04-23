'use strict';function profileAddNewTextHashSet(b){var e=$('\x3cli class\x3d"list-group-item" \x3e\x3cdiv class\x3d"row" \x3e\x3cdiv class\x3d"col-md-11" \x3e\x3cinput class\x3d"form-control" type\x3d"text" placeholder\x3d"Value" data-fieldholder\x3d"hashset" data-fieldtype\x3d"string" autocomplete\x3d"off"\x3e\x3c/div\x3e\x3cdiv class\x3d"col-md-1" \x3e\x3ch4 onclick\x3d"$(this).parent().parent().parent().remove()" \x3e\x3ci class\x3d"fa fa-times-circle delete-item-btn" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/h4\x3e \x3c/div\x3e\x3c/div\x3e\x3c/li\x3e');
$('p[data-field\x3d"'+b+'"] \x3e ul').append(e);e.effect("highlight",{},4E3)}function profileAddNewCustomField(b){var e=$(loadCustomFieldEditor(b,"",""));$('p[data-field\x3d"'+b+'"] \x3e ul').append(e);e.effect("highlight",{},4E3)}
var addNewHashMapItem=function(b,e){var a=b+"_"+(new Date).getTime(),c=$("#"+b),f=Object.assign({},e);c.find("option:selected").each(function(){var n=$(this).val();delete f[n]});b=$(loadHashMapSelector(a,b,f,"",""));c.find("ul.list-group").append(b);b.effect("highlight",{},4E3)};function removeHashMapItem(b){$(b).parent().parent().remove()}
function loadHashMapSelector(b,e,a,c,f){var n='\x3cdiv class\x3d"col-md-3" \x3e \x3cselect class\x3d"form-control" id\x3d"key_'+b+'" name\x3d"'+e+'" \x3e';_.forOwn(a,function(p,g){p='\x3coption name\x3d"'+e+'" value\x3d"'+g+'"\x3e '+g.toUpperCase()+" \x3c/option\x3e";g===c&&(p='\x3coption name\x3d"'+e+'" selected value\x3d"'+g+'"\x3e '+g.toUpperCase()+" \x3c/option\x3e");n+=p});n+=" \x3c/select\x3e \x3c/div\x3e";""===c&&$("#key_"+b).find("option:first").attr("selected","selected");return'\x3cli id\x3d"item_'+
b+'" class\x3d"list-group-item" \x3e\x3cdiv class\x3d"row" \x3e '+n+('\x3cdiv class\x3d"col-md-8" \x3e\x3cinput id\x3d"value_'+b+'" value\x3d"'+(f?f:"")+'" class\x3d"form-control" type\x3d"text" placeholder\x3d"Value" data-fieldholder\x3d"hashmap" data-fieldtype\x3d"string" autocomplete\x3d"off"\x3e\x3c/div\x3e\x3cdiv title\x3d"Delete" class\x3d"col-md-1" onclick\x3d"removeHashMapItem(this)" \x3e \x3ch4\x3e\x3ci class\x3d"fa fa-times-circle delete-item-btn" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/h4\x3e \x3c/div\x3e \x3c/div\x3e\x3c/li\x3e')}
function loadCustomFieldEditor(b,e,a){return'\x3cli class\x3d"list-group-item" \x3e\x3cdiv class\x3d"row" \x3e \x3cdiv class\x3d"col-md-3" \x3e \x3cinput type\x3d"text" class\x3d"form-control custom_field_name" placeholder\x3d"Field Name" value\x3d"'+(e+'"\x3e \x3c/div\x3e\x3cdiv class\x3d"col-md-8" \x3e\x3cinput class\x3d"form-control custom_field_value" type\x3d"text" value\x3d"')+((a?a:"")+'" placeholder\x3d"Field Value" data-fieldholder\x3d"hashmap" data-fieldtype\x3d"string" autocomplete\x3d"off"\x3e\x3c/div\x3e\x3cdiv title\x3d"Delete" class\x3d"col-md-1" onclick\x3d"removeHashMapItem(this)" \x3e \x3ch4\x3e\x3ci class\x3d"fa fa-times-circle delete-item-btn" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/h4\x3e \x3c/div\x3e \x3c/div\x3e\x3c/li\x3e')}
var loadProfileDataIntoDOM=function(b,e,a,c){LeoAdminApiUtil.callPostAdminApi(baseLeoAdminUrl+"/cdp/profile/get",{id:e},function(f){if(0===f.httpCode&&""===f.errorMessage){var n=f.canInsertData,p=f.canDeleteData;f.canEditData||$("button.data-control-edit").attr("disabled","disabled");p||$("button.data-control-delete").attr("disabled","disabled");n||$("button.data-control-insert").attr("disabled","disabled");LeoCdpAdmin.routerContext.dataObject="function"===typeof a?a(f.data):f.data;$("#data_model_holder").find("*[data-field]").each(function(){$(this).prop("tagName");
var g=$(this).attr("type"),k=$(this).data("fieldholder"),r=$(this).data("fieldtype"),t=$(this).data("field"),q=t.split(".");if(1===q.length){var d=LeoCdpAdmin.routerContext.dataObject[q[0]];if("html"===k){if("int"===r||"float"===r)if(void 0===d||null==d)d="No information";else{if(d=(new Number(d)).toLocaleString(),NaN==d||"NaN"==d)d="No information"}else"date"===r?d=d?moment.utc(d).local().format("YYYY-MM-DD"):"-":"date_time"===r&&(d=d?moment.utc(d).local().format("YYYY-MM-DD HH:mm:ss"):"-");$(this).html(d)}else if("percentage"===
k)$(this).html(d).parent().attr("aria-valuenow",d).css("width",d+"%"),g=$(this).parent(),g.attr("title",d+"% "+g.attr("title"));else if("url"===k)$(this).html(checkToAddUrlValueToDOM(d));else if("locationcode"===k)g=$("\x3ca/\x3e").attr("href","javascript:").html(textTruncate(d,80)).click(function(){var h=LeoCdpAdmin.routerContext.dataObject.locationCode;0===h.indexOf("http")?eModal.iframe(h,"Location"):h&&""!=h.trim()&&eModal.iframe("https://plus.codes/"+h,d)}),$(this).html(g);else if("inputvalue"===
k)"radio"===g||"checkbox"===g?d==$(this).val()&&$(this).attr("checked","checked"):$(this).val(d);else if("html_hashmap"===k){var l=' \x3cul class\x3d"list-group" \x3e ';_.forOwn(d,function(h,m){m=m.trim();b?(h=loadHashMapSelector(t+"_"+m,t,"socialMediaProfiles"===t?SocialMediaIconMap:"personalContacts"===t?PersonalContactIconsMap:ContactIconsMap,m,h),l+=h):(m="socialMediaProfiles"===t?SocialMediaIconMap[m]?SocialMediaIconMap[m]:!1:"personalContacts"===t?PersonalContactIconsMap[m]?PersonalContactIconsMap[m]:
!1:ContactIconsMap[m]?ContactIconsMap[m]:!1,!1===m&&(m=' \x3ci class\x3d"fa fa-info-circle" aria-hidden\x3d"true"\x3e\x3c/i\x3e '),l=l+'\x3cli class\x3d"list-group-item" \x3e '+m+checkToAddUrlValueToDOM(h)+"\x3c/li\x3e")});l+=" \x3c/ul\x3e ";$(this).html(l)}else"html_hashset"===k?(l='\x3cul class\x3d"list-group" \x3e',_.forOwn(d,function(h,m){h=b?'\x3cdiv class\x3d"col-md-11" \x3e\x3cinput value\x3d"'+h+'" class\x3d"form-control" type\x3d"text" placeholder\x3d"Value" data-fieldholder\x3d"hashset" data-fieldtype\x3d"string" autocomplete\x3d"off"\x3e\x3c/div\x3e\x3cdiv class\x3d"col-md-1" \x3e\x3ch4 onclick\x3d"$(this).parent().parent().parent().remove()" \x3e\x3ci class\x3d"fa fa-times-circle delete-item-btn" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/h4\x3e\x3c/div\x3e':
' \x3cdiv class\x3d"col-md-12" \x3e \x3cb\x3e \x3ci class\x3d"fa fa-check" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/b\x3e '+checkToAddUrlValueToDOM(h)+"\x3c/div\x3e";l=l+'\x3cli class\x3d"list-group-item" \x3e \x3cdiv class\x3d"row" \x3e '+h+"\x3c/div\x3e\x3c/li\x3e"}),l+="\x3c/ul\x3e",$(this).html(l)):"html_list_key_value"===k?(l='\x3cul class\x3d"list-group" \x3e',g=Object.keys(d),g.sort(),g.forEach(function(h){l=l+'\x3cli class\x3d"list-group-item" \x3e '+h+'  \x3ci class\x3d"fa fa-arrow-right" aria-hidden\x3d"true"\x3e\x3c/i\x3e  '+
d[h]+"\x3c/li\x3e"}),l+="\x3c/ul\x3e",$(this).html(l)):"html_custom_field"===k&&(l=' \x3cul class\x3d"list-group" \x3e ',_.forOwn(d,function(h,m){m=m.trim();b?(h=loadCustomFieldEditor(t+"_"+m,m,h),l+=h):(l+='\x3cli class\x3d"list-group-item" \x3e',l+='\x3cdiv class\x3d"row" \x3e \x3cdiv class\x3d"col-md-3"\x3e \x3cb\x3e '+m+'\x3c/b\x3e \x3ci  style\x3d"font-size:20px" class\x3d"fa fa-equals" aria-hidden\x3d"true"\x3e\x3c/i\x3e \x3c/div\x3e',l+='\x3cdiv class\x3d"col-md-9"\x3e'+h+"\x3c/div\x3e \x3c/div\x3e\x3c/li\x3e")}),
l+=" \x3c/ul\x3e ",$(this).html(l))}else if(2===q.length){var u=LeoCdpAdmin.routerContext.dataObject[q[0]]||{};d=u[q[1]]||"";"html"===k?$(this).html(d):"date"===r?(d=moment.utc(d).local().format("YYYY-MM-DD"),$(this).html(d)):"date_time"===r?(d=moment.utc(d).local().format("YYYY-MM-DD HH:mm:ss"),$(this).html(d)):"inputvalue"===k?$(this).val(d):"url"===k?$(this).html(checkToAddUrlValueToDOM(d)):"eventlocation"===k&&(g=$("\x3ca/\x3e").attr("href","javascript:").html(d).click(function(){var h=u.locationCode||
"";h&&""!=h.trim()&&eModal.iframe("https://plus.codes/"+h,d)}),$(this).html(g))}else 3===q.length&&(u=LeoCdpAdmin.routerContext.dataObject[q[0]]||{},d=(u[q[1]]||{})[q[2]]||"","html"===k?$(this).html(d):"date"===r?(d=moment.utc(d).local().format("YYYY-MM-DD"),$(this).html(d)):"date_time"===r?(d=moment.utc(d).local().format("YYYY-MM-DD HH:mm:ss"),$(this).html(d)):"inputvalue"===k?$(this).val(d):"url"===k?$(this).html(checkToAddUrlValueToDOM(d)):"eventlocation"===k&&(g=$("\x3ca/\x3e").attr("href","javascript:").html(d).click(function(){var h=
u.locationCode||"";h&&""!=h.trim()&&eModal.iframe("https://plus.codes/"+h,d)}),$(this).html(g)))}).promise().done(function(){"function"===typeof c&&c()})}else LeoAdminApiUtil.logErrorPayload(f)})},updateProfileDataToModel=function(b,e,a){$("#data_model_holder").find("*[data-field]").each(function(){var c=$(this).data("field"),f=$(this).data("fieldholder"),n=$(this).data("fieldtype");f="html"===f?$(this).html().trim():$(this).val();"int"===n?f=parseInt(f.replace(/,/g,"")):"float"===n?f=parseFloat(f.replace(/,/g,
"")):"date"===n&&(f=new Date(f));c=c.split(".");1===c.length?LeoCdpAdmin.routerContext.dataObject[c[0]]=f:2===c.length&&(LeoCdpAdmin.routerContext.dataObject[c[0]][c[1]]=f)}).promise().done(function(){LeoAdminApiUtil.callPostAdminApi(b,e,function(c){0===c.httpCode&&""===c.errorMessage?"function"===typeof a&&a(c):LeoAdminApiUtil.logErrorPayload(c)})})};window.profileTimeseriesChart=!1;
var loadProfileEventDailyReportUnit=function(b,e){var a=getDateFilterValues();a.profileId=b;b=a.beginFilterDate;$("#eventDataFromDate").text((new moment(b)).format("YYYY-MM-DD HH:mm:ss"));b=a.endFilterDate;$("#eventDataToDate").text((new moment(b)).format("YYYY-MM-DD HH:mm:ss"));LeoAdminApiUtil.getSecuredData(baseLeoAdminUrl+"/cdp/analytics360/event-report/profile",a,function(c){0===c.httpCode&&""===c.errorMessage?!0===e&&"object"===typeof window.profileTimeseriesChart?renderTimeseriesChart("timeseriesProfileEventChart",
c.data,!0,profileTimeseriesChart):window.profileTimeseriesChart=renderTimeseriesChart("timeseriesProfileEventChart",c.data,!1):LeoAdminApiUtil.logErrorPayload(c)})};function handleProfileTabBehavioralInfo(){$("#event_flow_tabs a:first").click();$("#event_flow_vertital_tabs div:first").addClass("active")}function handleProfileTabExtInfo(){$("#profile_ext_info_tabs a:first").click();$("#profile_ext_info_vertital_tabs div:first").addClass("active")}
var renderEngagedTouchpoints=function(b){var e=$("#engaged_touchpoint_list");0<b.length&&e.empty();_.forEach(b,function(a){var c=_.template($("#engaged-touchpoint-tpl").html());a.updatedAt=moment.utc(a.updatedAt).local().format("YYYY-MM-DD HH:mm:ss");a.truncatedUrl=textTruncate(a.url,120);a.cssStyleDisplay="none";a.faIcon="fa-internet-explorer";a=c(a);e.append(a)})},loadRecommendedContents=function(){LeoAdminApiUtil.getSecuredData("/cdp/profile/recommended-contents",{profileId:viewProfileId,startIndex:0,
numberResult:systemConfig.leo_recommender.service_max_item_for_profile},function(b){var e=$("#recommended_content_list");b=b.data;0<b.length&&e.empty();_.forEach(b,function(a){var c=_.template($("#recommended-content-tpl").html());a.indexScore=e.find("\x3e div").length+1;a.updatedAt=moment.utc(a.updatedAt).local().format("YYYY-MM-DD HH:mm:ss");a=c(a);e.append(a)});new Sortable(e[0],{swap:!0,swapClass:"sortable_highlighted_item",animation:150,onEnd:function(a){var c=a.newIndex,f=a.swapItem;a=$(a.item).data("key");
f=$(f).data("key");var n=parseInt($("#rank_content_"+a).text());c+=1;$("#rank_content_"+a).text(c);$("#rank_content_"+f).text(n);var p={};$("#recommended_content_list span.rank_info").each(function(g){g=$(this).data("key");var k=parseInt($(this).text());p[g]=k;console.log(p)}).promise().done(function(){var g={rankingInfoList:JSON.stringify(p),graphName:"cdp_content_graph",profileId:viewProfileId,recommendationModel:1};LeoAdminApiUtil.callPostAdminApi("/cdp/profile/update-item-ranking",g,function(k){k.data?
iziToast.success({title:"Update Content Content Ranking",timeout:3E3,message:"Data is saved successfully!"}):LeoAdminApiUtil.logErrorPayload(k)})})}})})},loadRecommendedProducts=function(){LeoAdminApiUtil.getSecuredData("/cdp/profile/recommended-products",{profileId:viewProfileId,startIndex:0,numberResult:systemConfig.leo_recommender.service_max_item_for_profile},function(b){var e=$("#recommended_product_list");b=b.data;0<b.length&&e.empty();_.forEach(b,function(a){if(a.product){var c=_.template($("#recommended-product-tpl").html());
a.indexScore=e.find("\x3e div").length+1;a.updatedAt=moment.utc(a.updatedAt).local().format("YYYY-MM-DD HH:mm:ss");a=c(a);e.append(a)}});new Sortable(e[0],{swap:!0,swapClass:"sortable_highlighted_item",animation:150,onEnd:function(a){var c=a.newIndex,f=a.swapItem;a=$(a.item).data("key");f=$(f).data("key");var n=parseInt($("#rank_product_"+a).text());c+=1;$("#rank_product_"+a).text(c);$("#rank_product_"+f).text(n);var p={};$("#recommended_product_list span.rank_info").each(function(g){g=$(this).data("key");
var k=parseInt($(this).text());p[g]=k;console.log(p)}).promise().done(function(){var g={rankingInfoList:JSON.stringify(p),graphName:"cdp_product_graph",profileId:viewProfileId,recommendationModel:1};LeoAdminApiUtil.callPostAdminApi("/cdp/profile/update-item-ranking",g,function(k){k.data?iziToast.success({title:"Update Product Item Ranking",timeout:3E3,message:"Data is saved successfully!"}):LeoAdminApiUtil.logErrorPayload(k)})})}});$("input.autoselectall").on("click",function(){$(this).select()})})},
loadPurchasedItems=function(){LeoAdminApiUtil.getSecuredData("/cdp/profile/get-purchased-items",{profileId:viewProfileId,startIndex:0,numberResult:100},function(b){var e=$("#purchased_items_list");b=b.data;0<b.length&&e.empty();_.forEach(b,function(a){var c=_.template($("#purchased-product-tpl").html());a.indexScore=e.find("\x3e div").length+1;a.createdAt=moment.utc(a.createdAt).local().format("YYYY-MM-DD HH:mm:ss");a=c(a);e.append(a)})})},emptyInfo='\x3cbr\x3e \x3cdiv style\x3d"font-size:24px;" class\x3d"text-center" \x3e No data available \x3ci class\x3d"fa fa-exclamation" aria-hidden\x3d"true"\x3e\x3c/i\x3e \x3c/div\x3e \x3cbr\x3e',
loadEventsInProfileIndex=0,loadEventsInProfileResult=25,loadEventsInProfile=function(b){$("#keywords_filter_events").val("");var e=$("#profile_activitiy_flow");0<e.find("li.all-loaded").length?console.log("Loaded all data for loadEventsInProfile"):(0===loadEventsInProfileIndex&&(e.empty().css("height","640px"),$("#keywords_filter_events").change(function(){2>$(this).val().trim().toLowerCase().length&&$("#profile_activitiy_flow li").show()})),$("#profile_activitiy_flow_loader").show(),LeoAdminApiUtil.getSecuredData("/cdp/profile/tracking-events",
{id:viewProfileId,startIndex:loadEventsInProfileIndex,numberResult:loadEventsInProfileResult},function(a){$("#profile_activitiy_flow_loader").hide();0===a.data.length&&(0===loadEventsInProfileIndex?(e.html(emptyInfo),$("#profileEventStatistics").html(emptyInfo)):(e.find("li:last-child").addClass("all-loaded"),$("#profile_activitiy_flow_done").show()));_.forEach(a.data,function(c){try{c.srcTouchpoint.name=textTruncate(decodeURI(c.srcTouchpoint.name),120);c.srcTouchpoint.truncatedUrl=textTruncate(c.srcTouchpoint.url,
120);c.createdAt=moment.utc(c.createdAt).local().format("YYYY-MM-DD HH:mm:ss");0<_.size(c.eventData)?c.cssStyleDisplay="block":c.cssStyleDisplay="none";var f=c.metricName,n="view-event-tpl";if("item-view"===f||"survey-view"===f||"course-view"===f||"content-view"===f)n="key-info-view-event-tpl";else if("purchase"===f||"subscribe"===f||"enroll"===f||"pay"===f)n="conversion-event-tpl";else if(0<=f.indexOf("click")||0<=f.indexOf("submit-")||0<=f.indexOf("play-")||0<=f.indexOf("-scan")||"order-checkout"===
f||"add-to-cart"===f||"like"===f||"trial"===f||"user-login"===f)n="action-event-tpl";var p=_.template($("#"+n).html())(c);e.append(p)}catch(g){console.error(g)}});"function"===typeof b?b():$("#profile_activitiy_flow_container").height(e.height()+50)}))};
function loadMoreEventsInProfile(){loadEventsInProfileIndex=$("#profile_activitiy_flow \x3e li").length;loadEventsInProfile(function(){$(document).scrollTop($(document).height()-100);$("#profile_activitiy_flow_container").scrollTop($("#profile_activitiy_flow_container").prop("scrollHeight")+200)})}
var filterEventFlow=function(){var b=$("#keywords_filter_events").val().trim().toLowerCase(),e=$("#profile_activitiy_flow li");2<=b.length&&e.each(function(){0>$(this).find("h5.media-heading").text().toLowerCase().indexOf(b)?$(this).hide():$(this).show()})},loadFeedbacksInProfileIndex=0,loadFeedbacksInProfileResult=120;
function loadFeedbackEventsInProfile(){$("#keyword_filter_feedbacks").val("");var b=$("#profile_feedback_flow");0===loadEventsInProfileIndex&&(b.empty(),$("#keywords_filter_events").change(function(){2>$(this).val().trim().toLowerCase().length&&$("#profile_activitiy_flow li").show()}));$("#profile_feedback_flow_loader").show();LeoAdminApiUtil.getSecuredData("/cdp/profile/feedback-events",{id:viewProfileId,startIndex:loadFeedbacksInProfileIndex,numberResult:loadFeedbacksInProfileResult},function(e){$("#profile_feedback_flow_loader").hide();
e=e.data;0===e.length?b.html('\x3cli class\x3d"list-group-item view" \x3e \x3cdiv class\x3d"list-group-item" \x3e No data available \x3c/div\x3e \x3c/li\x3e'):(b.css("height","650px"),_.forEach(e,function(a,c){a.createdAt=moment.utc(a.createdAt).local().format("YYYY-MM-DD HH:mm:ss");c=baseLeoObserverUrl+"/webform?\x26tplfbt\x3dSURVEY\x26tplid\x3d"+a.refTemplateId;a.previewUrl="SURVEY"===a.feedbackType?c:a.touchpointUrl;c=a.eventName;a.eventIcon="submit-feedback-form"===c?"fa-commenting-o":"submit-rating-form"===
c?"fa-star":"fa-smile-o";c=_.template($("#feedback-event-tpl").html());b.append(c(a))}))});$("#keyword_filter_feedbacks").change(function(){2>$(this).val().trim().toLowerCase().length&&$("#profile_feedback_flow li").show()})}function filterFeedbackEvent(){var b=$("#keyword_filter_feedbacks").val().trim().toLowerCase(),e=$("#profile_feedback_flow li");2<=b.length&&e.each(function(){0>$(this).find("h5.media-heading").text().toLowerCase().indexOf(b)?$(this).hide():$(this).show()})};