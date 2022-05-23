'use strict';function profileAddNewTextHashSet(b){var d=$('\x3cli class\x3d"list-group-item" \x3e\x3cdiv class\x3d"row" \x3e\x3cdiv class\x3d"col-md-11" \x3e\x3cinput class\x3d"form-control" type\x3d"text" placeholder\x3d"Value" data-fieldholder\x3d"hashset" data-fieldtype\x3d"string" autocomplete\x3d"off"\x3e\x3c/div\x3e\x3cdiv class\x3d"col-md-1" \x3e\x3ch4 onclick\x3d"$(this).parent().parent().parent().remove()" \x3e\x3ci class\x3d"fa fa-times-circle delete-item-btn" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/h4\x3e \x3c/div\x3e\x3c/div\x3e\x3c/li\x3e');
$('p[data-field\x3d"'+b+'"] \x3e ul').append(d);d.effect("highlight",{},4E3)}function profileAddNewCustomField(b){var d=$(loadCustomFieldEditor(b,"",""));$('p[data-field\x3d"'+b+'"] \x3e ul').append(d);d.effect("highlight",{},4E3)}
var addNewHashMapItem=function(b,d){var a=b+"_"+(new Date).getTime(),c=$("#"+b),f=Object.assign({},d);c.find("option:selected").each(function(){var k=$(this).val();delete f[k]});b=$(loadHashMapSelector(a,b,f,"",""));c.find("ul.list-group").append(b);b.effect("highlight",{},4E3)};function removeHashMapItem(b){$(b).parent().parent().remove()}
function loadHashMapSelector(b,d,a,c,f){var k='\x3cdiv class\x3d"col-md-3" \x3e \x3cselect class\x3d"form-control" id\x3d"key_'+b+'" name\x3d"'+d+'" \x3e';_.forOwn(a,function(n,h){n='\x3coption name\x3d"'+d+'" value\x3d"'+h+'"\x3e '+h.toUpperCase()+" \x3c/option\x3e";h===c&&(n='\x3coption name\x3d"'+d+'" selected value\x3d"'+h+'"\x3e '+h.toUpperCase()+" \x3c/option\x3e");k+=n});k+=" \x3c/select\x3e \x3c/div\x3e";""===c&&$("#key_"+b).find("option:first").attr("selected","selected");return'\x3cli id\x3d"item_'+
b+'" class\x3d"list-group-item" \x3e\x3cdiv class\x3d"row" \x3e '+k+('\x3cdiv class\x3d"col-md-8" \x3e\x3cinput id\x3d"value_'+b+'" value\x3d"'+(f?f:"")+'" class\x3d"form-control" type\x3d"text" placeholder\x3d"Value" data-fieldholder\x3d"hashmap" data-fieldtype\x3d"string" autocomplete\x3d"off"\x3e\x3c/div\x3e\x3cdiv title\x3d"Delete" class\x3d"col-md-1" onclick\x3d"removeHashMapItem(this)" \x3e \x3ch4\x3e\x3ci class\x3d"fa fa-times-circle delete-item-btn" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/h4\x3e \x3c/div\x3e \x3c/div\x3e\x3c/li\x3e')}
function loadCustomFieldEditor(b,d,a){return'\x3cli class\x3d"list-group-item" \x3e\x3cdiv class\x3d"row" \x3e \x3cdiv class\x3d"col-md-3" \x3e \x3cinput type\x3d"text" class\x3d"form-control custom_field_name" placeholder\x3d"Field Name" value\x3d"'+(d+'"\x3e \x3c/div\x3e\x3cdiv class\x3d"col-md-8" \x3e\x3cinput class\x3d"form-control custom_field_value" type\x3d"text" value\x3d"')+((a?a:"")+'" placeholder\x3d"Field Value" data-fieldholder\x3d"hashmap" data-fieldtype\x3d"string" autocomplete\x3d"off"\x3e\x3c/div\x3e\x3cdiv title\x3d"Delete" class\x3d"col-md-1" onclick\x3d"removeHashMapItem(this)" \x3e \x3ch4\x3e\x3ci class\x3d"fa fa-times-circle delete-item-btn" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/h4\x3e \x3c/div\x3e \x3c/div\x3e\x3c/li\x3e')}
var loadProfileDataIntoDOM=function(b,d,a,c,f){var k=!1,n={};"string"===typeof d?(k="/cdp/profile/get",n.id=d):"string"===typeof a&&(k="/cdp/profile/get-by-crm-id",n.crmRefId=a);!1===k?(console.error("loadProfileDataIntoDOM is failed, profileId or crmRefId must be a valid string! "),console.log("urlStr "+k),console.log("params "+n)):LeoAdminApiUtil.callPostAdminApi(baseLeoAdminUrl+k,n,function(h){if(0===h.httpCode&&""===h.errorMessage){var r=h.canInsertData,x=h.canDeleteData;h.canEditData||$("button.data-control-edit").attr("disabled",
"disabled");x||$("button.data-control-delete").attr("disabled","disabled");r||$("button.data-control-insert").attr("disabled","disabled");LeoCdpAdmin.routerContext.dataObject="function"===typeof c?c(h.data):h.data;$("#data_model_holder").find("*[data-field]").each(function(){$(this).prop("tagName");var q=$(this).attr("type"),p=$(this).data("fieldholder"),t=$(this).data("fieldtype"),v=$(this).data("field"),u=v.split(".");if(1===u.length){var e=LeoCdpAdmin.routerContext.dataObject[u[0]];if("html"===
p){if("int"===t||"float"===t)if(void 0===e||null==e)e="-";else{if(e=(new Number(e)).toLocaleString(),NaN==e||"NaN"==e)e="-"}else"date"===t?e=e?moment.utc(e).local().format("YYYY-MM-DD"):"-":"date_time"===t?e=e?moment.utc(e).local().format("YYYY-MM-DD HH:mm:ss"):"-":"phone"===t&&(e=e?e.replace(/\D/g,""):"-");$(this).html(e)}else if("percentage"===p)$(this).html(e).parent().attr("aria-valuenow",e).css("width",e+"%"),q=$(this).parent(),q.attr("title",e+"% "+q.attr("title"));else if("url"===p)$(this).html(checkToAddUrlValueToDOM(e));
else if("locationcode"===p)q=$("\x3ca/\x3e").attr("href","javascript:").html(textTruncate(e,80)).click(function(){var g=LeoCdpAdmin.routerContext.dataObject.locationCode;0===g.indexOf("http")?eModal.iframe(g,"Location"):g&&""!=g.trim()&&eModal.iframe("https://plus.codes/"+g,e)}),$(this).html(q);else if("inputvalue"===p)"radio"===q||"checkbox"===q?e==$(this).val()&&$(this).attr("checked","checked"):$(this).val(e);else if("html_hashmap"===p){var l=' \x3cul class\x3d"list-group" \x3e ';_.forOwn(e,function(g,
m){m=m.trim();b?(g=loadHashMapSelector(v+"_"+m,v,"socialMediaProfiles"===v?SocialMediaIconMap:"personalContacts"===v?PersonalContactIconsMap:ContactIconsMap,m,g),l+=g):(m="socialMediaProfiles"===v?SocialMediaIconMap[m]?SocialMediaIconMap[m]:!1:"personalContacts"===v?PersonalContactIconsMap[m]?PersonalContactIconsMap[m]:!1:ContactIconsMap[m]?ContactIconsMap[m]:!1,!1===m&&(m=' \x3ci class\x3d"fa fa-info-circle" aria-hidden\x3d"true"\x3e\x3c/i\x3e '),l=l+'\x3cli class\x3d"list-group-item" \x3e '+m+checkToAddUrlValueToDOM(g)+
"\x3c/li\x3e")});l+=" \x3c/ul\x3e ";$(this).html(l)}else"html_hashset"===p?(l='\x3cul class\x3d"list-group" \x3e',_.forOwn(e,function(g,m){g=b?'\x3cdiv class\x3d"col-md-11" \x3e\x3cinput value\x3d"'+g+'" class\x3d"form-control" type\x3d"text" placeholder\x3d"Value" data-fieldholder\x3d"hashset" data-fieldtype\x3d"string" autocomplete\x3d"off"\x3e\x3c/div\x3e\x3cdiv class\x3d"col-md-1" \x3e\x3ch4 onclick\x3d"$(this).parent().parent().parent().remove()" \x3e\x3ci class\x3d"fa fa-times-circle delete-item-btn" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/h4\x3e\x3c/div\x3e':
"system_user"===t?' \x3cdiv class\x3d"col-md-12" \x3e \x3cb\x3e \x3ci class\x3d"fa fa-info-circle" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/b\x3e '+buildSystemUserInfoLink(g)+"\x3c/div\x3e":' \x3cdiv class\x3d"col-md-12" \x3e \x3cb\x3e \x3ci class\x3d"fa fa-info-circle" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/b\x3e '+checkToAddUrlValueToDOM(g)+"\x3c/div\x3e";l=l+'\x3cli class\x3d"list-group-item" \x3e \x3cdiv class\x3d"row" \x3e '+g+"\x3c/div\x3e\x3c/li\x3e"}),l+="\x3c/ul\x3e",$(this).html(l)):"html_list_key_value"===
p?(l='\x3cul class\x3d"list-group" \x3e',q=Object.keys(e),q.sort(),q.forEach(function(g){l=l+'\x3cli class\x3d"list-group-item" \x3e '+g+'  \x3ci class\x3d"fa fa-arrow-right" aria-hidden\x3d"true"\x3e\x3c/i\x3e  '+e[g]+"\x3c/li\x3e"}),l+="\x3c/ul\x3e",$(this).html(l)):"html_custom_field"===p&&(l=' \x3cul class\x3d"list-group" \x3e ',_.forOwn(e,function(g,m){m=m.trim();b?(g=loadCustomFieldEditor(v+"_"+m,m,g),l+=g):(l+='\x3cli class\x3d"list-group-item" \x3e',l+='\x3cdiv class\x3d"row" \x3e \x3cdiv class\x3d"col-md-3"\x3e \x3cb\x3e '+
m+'\x3c/b\x3e \x3ci  style\x3d"font-size:20px" class\x3d"fa fa-equals" aria-hidden\x3d"true"\x3e\x3c/i\x3e \x3c/div\x3e',l+='\x3cdiv class\x3d"col-md-9"\x3e'+g+"\x3c/div\x3e \x3c/div\x3e\x3c/li\x3e")}),l+=" \x3c/ul\x3e ",$(this).html(l))}else if(2===u.length){var w=LeoCdpAdmin.routerContext.dataObject[u[0]]||{};e=w[u[1]]||"";"html"===p?$(this).html(e):"date"===t?(e=moment.utc(e).local().format("YYYY-MM-DD"),$(this).html(e)):"date_time"===t?(e=moment.utc(e).local().format("YYYY-MM-DD HH:mm:ss"),$(this).html(e)):
"inputvalue"===p?$(this).val(e):"url"===p?$(this).html(checkToAddUrlValueToDOM(e)):"eventlocation"===p&&(q=$("\x3ca/\x3e").attr("href","javascript:").html(e).click(function(){var g=w.locationCode||"";g&&""!=g.trim()&&eModal.iframe("https://plus.codes/"+g,e)}),$(this).html(q))}else 3===u.length&&(w=LeoCdpAdmin.routerContext.dataObject[u[0]]||{},e=(w[u[1]]||{})[u[2]]||"","html"===p?$(this).html(e):"date"===t?(e=moment.utc(e).local().format("YYYY-MM-DD"),$(this).html(e)):"date_time"===t?(e=moment.utc(e).local().format("YYYY-MM-DD HH:mm:ss"),
$(this).html(e)):"inputvalue"===p?$(this).val(e):"url"===p?$(this).html(checkToAddUrlValueToDOM(e)):"eventlocation"===p&&(q=$("\x3ca/\x3e").attr("href","javascript:").html(e).click(function(){var g=w.locationCode||"";g&&""!=g.trim()&&eModal.iframe("https://plus.codes/"+g,e)}),$(this).html(q)))}).promise().done(function(){"function"===typeof f&&f()})}else LeoAdminApiUtil.logErrorPayload(h)})},updateProfileDataToModel=function(b,d,a){$("#data_model_holder").find("*[data-field]").each(function(){var c=
$(this).data("field"),f=$(this).data("fieldholder"),k=$(this).data("fieldtype");f="html"===f?$(this).html().trim():$(this).val();"int"===k?f=parseInt(f.replace(/,/g,"")):"float"===k?f=parseFloat(f.replace(/,/g,"")):"date"===k?f=new Date(f):"tel"===k&&(f=f.replace(/\D/g,""));c=c.split(".");1===c.length?LeoCdpAdmin.routerContext.dataObject[c[0]]=f:2===c.length&&(LeoCdpAdmin.routerContext.dataObject[c[0]][c[1]]=f)}).promise().done(function(){LeoAdminApiUtil.callPostAdminApi(b,d,function(c){0===c.httpCode&&
""===c.errorMessage?"function"===typeof a&&a(c):LeoAdminApiUtil.logErrorPayload(c)})})};window.profileTimeseriesChart=!1;
var loadProfileEventDailyReportUnit=function(b,d){var a=getDateFilterValues();a.profileId=b;b=a.beginFilterDate;$("#eventDataFromDate").text((new moment(b)).format("YYYY-MM-DD HH:mm:ss"));b=a.endFilterDate;$("#eventDataToDate").text((new moment(b)).format("YYYY-MM-DD HH:mm:ss"));LeoAdminApiUtil.getSecuredData(baseLeoAdminUrl+"/cdp/analytics360/event-report/profile",a,function(c){0===c.httpCode&&""===c.errorMessage?!0===d&&"object"===typeof window.profileTimeseriesChart?renderTimeseriesChart("timeseriesProfileEventChart",
c.data,!0,profileTimeseriesChart):window.profileTimeseriesChart=renderTimeseriesChart("timeseriesProfileEventChart",c.data,!1):LeoAdminApiUtil.logErrorPayload(c)})};function handleProfileTabBehavioralInfo(){$("#event_flow_tabs a:first").click();$("#event_flow_vertital_tabs div:first").addClass("active")}function handleProfileTabExtInfo(){$("#profile_ext_info_tabs a:first").click();$("#profile_ext_info_vertital_tabs div:first").addClass("active")}
var renderEngagedTouchpoints=function(b){var d=$("#engaged_touchpoint_list");0<b.length&&d.empty();_.forEach(b,function(a){var c=_.template($("#engaged-touchpoint-tpl").html());a.updatedAt=moment.utc(a.updatedAt).local().format("YYYY-MM-DD HH:mm:ss");a.truncatedUrl=textTruncate(a.url,120);a.cssStyleDisplay="none";a.faIcon="fa-internet-explorer";a=c(a);d.append(a)})},loadRecommendedContents=function(){LeoAdminApiUtil.getSecuredData("/cdp/profile/recommended-contents",{profileId:viewProfileId,startIndex:0,
numberResult:systemConfig.leo_recommender.service_max_item_for_profile},function(b){var d=$("#recommended_content_list");b=b.data;0<b.length&&d.empty();_.forEach(b,function(a){var c=_.template($("#recommended-content-tpl").html());a.indexScore=d.find("\x3e div").length+1;a.updatedAt=moment.utc(a.updatedAt).local().format("YYYY-MM-DD HH:mm:ss");a=c(a);d.append(a)});new Sortable(d[0],{swap:!0,swapClass:"sortable_highlighted_item",animation:150,onEnd:function(a){var c=a.newIndex,f=a.swapItem;a=$(a.item).data("key");
f=$(f).data("key");var k=parseInt($("#rank_content_"+a).text());c+=1;$("#rank_content_"+a).text(c);$("#rank_content_"+f).text(k);var n={};$("#recommended_content_list span.rank_info").each(function(h){h=$(this).data("key");var r=parseInt($(this).text());n[h]=r;console.log(n)}).promise().done(function(){var h={rankingInfoList:JSON.stringify(n),graphName:"cdp_content_graph",profileId:viewProfileId,recommendationModel:1};LeoAdminApiUtil.callPostAdminApi("/cdp/profile/update-item-ranking",h,function(r){r.data?
iziToast.success({title:"Update Content Content Ranking",timeout:3E3,message:"Data is saved successfully!"}):LeoAdminApiUtil.logErrorPayload(r)})})}})})},loadRecommendedProducts=function(){LeoAdminApiUtil.getSecuredData("/cdp/profile/recommended-products",{profileId:viewProfileId,startIndex:0,numberResult:systemConfig.leo_recommender.service_max_item_for_profile},function(b){var d=$("#recommended_product_list");b=b.data;0<b.length&&d.empty();_.forEach(b,function(a){if(a.product){var c=_.template($("#recommended-product-tpl").html());
a.indexScore=d.find("\x3e div").length+1;a.updatedAt=moment.utc(a.updatedAt).local().format("YYYY-MM-DD HH:mm:ss");a=c(a);d.append(a)}});new Sortable(d[0],{swap:!0,swapClass:"sortable_highlighted_item",animation:150,onEnd:function(a){var c=a.newIndex,f=a.swapItem;a=$(a.item).data("key");f=$(f).data("key");var k=parseInt($("#rank_product_"+a).text());c+=1;$("#rank_product_"+a).text(c);$("#rank_product_"+f).text(k);var n={};$("#recommended_product_list span.rank_info").each(function(h){h=$(this).data("key");
var r=parseInt($(this).text());n[h]=r;console.log(n)}).promise().done(function(){var h={rankingInfoList:JSON.stringify(n),graphName:"cdp_product_graph",profileId:viewProfileId,recommendationModel:1};LeoAdminApiUtil.callPostAdminApi("/cdp/profile/update-item-ranking",h,function(r){r.data?iziToast.success({title:"Update Product Item Ranking",timeout:3E3,message:"Data is saved successfully!"}):LeoAdminApiUtil.logErrorPayload(r)})})}});$("input.autoselectall").on("click",function(){$(this).select()})})},
loadPurchasedItems=function(){LeoAdminApiUtil.getSecuredData("/cdp/profile/get-purchased-items",{profileId:viewProfileId,startIndex:0,numberResult:100},function(b){var d=$("#purchased_items_list");b=b.data;0<b.length&&d.empty();_.forEach(b,function(a){var c=_.template($("#purchased-product-tpl").html());a.indexScore=d.find("\x3e div").length+1;a.createdAt=moment.utc(a.createdAt).local().format("YYYY-MM-DD HH:mm:ss");a=c(a);d.append(a)})})},loadFinancialEventList=function(){var b=$("#financial_event_list"),
d=LeoCdpAdmin.routerContext.dataObject.financeCreditEvents;0<d.length&&b.empty();_.forEach(d,function(a){var c=_.template($("#financial-event-tpl").html());"good"===a.risk?(a.riskIcon="fa-thumbs-o-up",a.riskIconColor="#45D50F"):(a.riskIcon="fa-thumbs-o-down",a.riskIconColor="#F40209");a.risk=a.risk.toUpperCase();a=c(a);b.append(a)})},emptyInfo='\x3cbr\x3e \x3cdiv style\x3d"font-size:24px;" class\x3d"text-center" \x3e No data available \x3ci class\x3d"fa fa-exclamation" aria-hidden\x3d"true"\x3e\x3c/i\x3e \x3c/div\x3e \x3cbr\x3e',
loadEventsInProfileIndex=0,loadEventsInProfileResult=25,loadEventsInProfile=function(b){$("#keywords_filter_events").val("");var d=$("#profile_activitiy_flow");0<d.find("li.all-loaded").length?console.log("Loaded all data for loadEventsInProfile"):(0===loadEventsInProfileIndex&&(d.empty().css("height","640px"),$("#keywords_filter_events").change(function(){2>$(this).val().trim().toLowerCase().length&&$("#profile_activitiy_flow li").show()})),$("#profile_activitiy_flow_loader").show(),LeoAdminApiUtil.getSecuredData("/cdp/profile/tracking-events",
{id:viewProfileId,startIndex:loadEventsInProfileIndex,numberResult:loadEventsInProfileResult},function(a){$("#profile_activitiy_flow_loader").hide();0===a.data.length&&(0===loadEventsInProfileIndex?(d.html(emptyInfo),$("#profileEventStatistics").html(emptyInfo)):(d.find("li:last-child").addClass("all-loaded"),$("#profile_activitiy_flow_done").show()));_.forEach(a.data,function(c){try{c.srcTouchpoint.name=textTruncate(decodeURI(c.srcTouchpoint.name),120);c.srcTouchpoint.truncatedUrl=textTruncate(c.srcTouchpoint.url,
120);c.createdAt=moment.utc(c.createdAt).local().format("YYYY-MM-DD HH:mm:ss");0<_.size(c.eventData)?c.cssStyleDisplay="block":c.cssStyleDisplay="none";var f=c.metricName,k="view-event-tpl";if("item-view"===f||"survey-view"===f||"course-view"===f||"content-view"===f)k="key-info-view-event-tpl";else if("purchase"===f||"subscribe"===f||"enroll"===f||"pay"===f)k="conversion-event-tpl";else if(0<=f.indexOf("click")||0<=f.indexOf("submit-")||0<=f.indexOf("play-")||0<=f.indexOf("-scan")||"order-checkout"===
f||"add-to-cart"===f||"like"===f||"trial"===f||"user-login"===f)k="action-event-tpl";var n=_.template($("#"+k).html())(c);d.append(n)}catch(h){console.error(h)}});"function"===typeof b?b():$("#profile_activitiy_flow_container").height(d.height()+50)}))};
function loadMoreEventsInProfile(){loadEventsInProfileIndex=$("#profile_activitiy_flow \x3e li").length;loadEventsInProfile(function(){$(document).scrollTop($(document).height()-100);$("#profile_activitiy_flow_container").scrollTop($("#profile_activitiy_flow_container").prop("scrollHeight")+200)})}
var filterEventFlow=function(){var b=$("#keywords_filter_events").val().trim().toLowerCase(),d=$("#profile_activitiy_flow li");2<=b.length&&d.each(function(){0>$(this).find("h5.media-heading").text().toLowerCase().indexOf(b)?$(this).hide():$(this).show()})},loadFeedbacksInProfileIndex=0,loadFeedbacksInProfileResult=120;
function loadFeedbackEventsInProfile(){$("#keyword_filter_feedbacks").val("");var b=$("#profile_feedback_flow");0===loadEventsInProfileIndex&&(b.empty(),$("#keywords_filter_events").change(function(){2>$(this).val().trim().toLowerCase().length&&$("#profile_activitiy_flow li").show()}));$("#profile_feedback_flow_loader").show();LeoAdminApiUtil.getSecuredData("/cdp/profile/feedback-events",{id:viewProfileId,startIndex:loadFeedbacksInProfileIndex,numberResult:loadFeedbacksInProfileResult},function(d){$("#profile_feedback_flow_loader").hide();
d=d.data;0===d.length?b.html('\x3cli class\x3d"list-group-item view" \x3e \x3cdiv class\x3d"list-group-item" \x3e No data available \x3c/div\x3e \x3c/li\x3e'):(b.css("height","650px"),_.forEach(d,function(a,c){a.createdAt=moment.utc(a.createdAt).local().format("YYYY-MM-DD HH:mm:ss");c=baseLeoObserverUrl+"/webform?\x26tplfbt\x3dSURVEY\x26tplid\x3d"+a.refTemplateId;a.previewUrl="SURVEY"===a.feedbackType?c:a.touchpointUrl;c=a.eventName;a.eventIcon="submit-feedback-form"===c?"fa-commenting-o":"submit-rating-form"===
c?"fa-star":"fa-smile-o";c=_.template($("#feedback-event-tpl").html());b.append(c(a))}))});$("#keyword_filter_feedbacks").change(function(){2>$(this).val().trim().toLowerCase().length&&$("#profile_feedback_flow li").show()})}function filterFeedbackEvent(){var b=$("#keyword_filter_feedbacks").val().trim().toLowerCase(),d=$("#profile_feedback_flow li");2<=b.length&&d.each(function(){0>$(this).find("h5.media-heading").text().toLowerCase().indexOf(b)?$(this).hide():$(this).show()})}
var deleteCurrentProfile=function(){var b=LeoCdpAdmin.routerContext.dataObject;b?0<Object.keys(b.eventStatistics).length&&1===b.status?notifyErrorMessage("The system can not delete a profile that has event data stream"):LeoCdpAdmin.navFunctions.deleteCustomerProfile(b.id):notifyErrorMessage("LeoCdpAdmin.routerContext.dataObject is NULL !")};