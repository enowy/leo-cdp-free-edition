'use strict';function profileAddNewTextHashSet(a){var d=$('\x3cli class\x3d"list-group-item" \x3e\x3cdiv class\x3d"row" \x3e\x3cdiv class\x3d"col-md-11" \x3e\x3cinput class\x3d"form-control" type\x3d"text" placeholder\x3d"Value" data-fieldholder\x3d"hashset" data-fieldtype\x3d"string" autocomplete\x3d"off"\x3e\x3c/div\x3e\x3cdiv class\x3d"col-md-1" \x3e\x3ch4 onclick\x3d"$(this).parent().parent().parent().remove()" \x3e\x3ci class\x3d"fa fa-times-circle delete-item-btn" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/h4\x3e \x3c/div\x3e\x3c/div\x3e\x3c/li\x3e');
$('p[data-field\x3d"'+a+'"] \x3e ul').append(d);d.effect("highlight",{},4E3)}function profileAddNewCustomField(a){var d=$(loadCustomFieldEditor(a,"",""));$('p[data-field\x3d"'+a+'"] \x3e ul').append(d);d.effect("highlight",{},4E3)}function handleProfileListFiltersBy(a,d){$("#profile_filter_inputs \x3e .form-control").val("").hide();$(d).show();$("#profile_filter_input_label").text($(a).text()).show();$("#main_search_profile").val("");showDeleteNotActiveProfile()}
var addNewHashMapItem=function(a,d){var c=a+"_"+(new Date).getTime(),b=$("#"+a),e=Object.assign({},d);b.find("option:selected").each(function(){var k=$(this).val();delete e[k]});a=$(loadHashMapSelector(c,a,e,"",""));b.find("ul.list-group").append(a);a.effect("highlight",{},4E3)};function removeHashMapItem(a){$(a).parent().parent().remove()}
function loadHashMapSelector(a,d,c,b,e){var k='\x3cdiv class\x3d"col-md-3" \x3e \x3cselect class\x3d"form-control" id\x3d"key_'+a+'" name\x3d"'+d+'" \x3e';_.forOwn(c,function(m,n){m='\x3coption name\x3d"'+d+'" value\x3d"'+n+'"\x3e '+n.toUpperCase()+" \x3c/option\x3e";n===b&&(m='\x3coption name\x3d"'+d+'" selected value\x3d"'+n+'"\x3e '+n.toUpperCase()+" \x3c/option\x3e");k+=m});k+=" \x3c/select\x3e \x3c/div\x3e";""===b&&$("#key_"+a).find("option:first").attr("selected","selected");return'\x3cli id\x3d"item_'+
a+'" class\x3d"list-group-item" \x3e\x3cdiv class\x3d"row" \x3e '+k+('\x3cdiv class\x3d"col-md-8" \x3e\x3cinput id\x3d"value_'+a+'" value\x3d"'+(e?e:"")+'" class\x3d"form-control" type\x3d"text" placeholder\x3d"Value" data-fieldholder\x3d"hashmap" data-fieldtype\x3d"string" autocomplete\x3d"off"\x3e\x3c/div\x3e\x3cdiv title\x3d"Delete" class\x3d"col-md-1" onclick\x3d"removeHashMapItem(this)" \x3e \x3ch4\x3e\x3ci class\x3d"fa fa-times-circle delete-item-btn" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/h4\x3e \x3c/div\x3e \x3c/div\x3e\x3c/li\x3e')}
function loadCustomFieldEditor(a,d,c){return'\x3cli class\x3d"list-group-item" \x3e\x3cdiv class\x3d"row" \x3e \x3cdiv class\x3d"col-md-3" \x3e \x3cinput type\x3d"text" class\x3d"form-control custom_field_name" placeholder\x3d"Field Name" value\x3d"'+(d+'"\x3e \x3c/div\x3e\x3cdiv class\x3d"col-md-8" \x3e\x3cinput class\x3d"form-control custom_field_value" type\x3d"text" value\x3d"')+((c?c:"")+'" placeholder\x3d"Field Value" data-fieldholder\x3d"hashmap" data-fieldtype\x3d"string" autocomplete\x3d"off"\x3e\x3c/div\x3e\x3cdiv title\x3d"Delete" class\x3d"col-md-1" onclick\x3d"removeHashMapItem(this)" \x3e \x3ch4\x3e\x3ci class\x3d"fa fa-times-circle delete-item-btn" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/h4\x3e \x3c/div\x3e \x3c/div\x3e\x3c/li\x3e')}
const loadProfileDataIntoDOM=function(a,d,c,b,e){var k=!1,m={};"string"===typeof d?(k="/cdp/profile/get",m.id=d):"string"===typeof c&&(k="/cdp/profile/get-by-crm-id",m.crmRefId=c);!1===k?(console.error("loadProfileDataIntoDOM is failed, profileId or crmRefId must be a valid string! "),console.log("urlStr "+k),console.log("params "+m)):LeoAdminApiUtil.callPostAdminApi(baseLeoAdminUrl+k,m,function(n){if(0===n.httpCode&&""===n.errorMessage){var f=n.canInsertData,h=n.canDeleteData;n.canEditData||$("button.data-control-edit").attr("disabled",
"disabled");h||$("button.data-control-delete").attr("disabled","disabled");f||$("button.data-control-insert").attr("disabled","disabled");LeoCdpAdmin.routerContext.dataObject="function"===typeof b?b(n.data):n.data;$("#data_model_holder").find("*[data-field]").each(function(){$(this).prop("tagName");var l=$(this).attr("type"),t=$(this).data("fieldholder"),u=$(this).data("fieldtype"),w=$(this).data("field"),v=w.split(".");if(1===v.length){var g=LeoCdpAdmin.routerContext.dataObject[v[0]];if("html"===
t){if("int"===u||"float"===u)if(void 0===g||null==g)g="-";else{if(g=(new Number(g)).toLocaleString(),NaN==g||"NaN"==g)g="-"}else"date"===u?g=g?moment.utc(g).local().format("YYYY-MM-DD"):"-":"date_time"===u?g=g?moment.utc(g).local().format("YYYY-MM-DD HH:mm:ss"):"-":"phone"===u&&(g=g?g.replace(/\D/g,""):"-");$(this).html(g)}else if("percentage"===t)$(this).html(g).parent().attr("aria-valuenow",g).css("width",g+"%"),l=$(this).parent(),l.attr("title",g+"% "+l.attr("title"));else if("url"===t)$(this).html(checkToAddUrlValueToDOM(g));
else if("locationcode"===t)l=$("\x3ca/\x3e").attr("href","javascript:").html(textTruncate(g,80)).click(function(){var p=LeoCdpAdmin.routerContext.dataObject.locationCode;0===p.indexOf("http")?eModal.iframe(p,"Location"):p&&""!=p.trim()&&eModal.iframe("https://plus.codes/"+p,g)}),$(this).html(l);else if("inputvalue"===t)"radio"===l||"checkbox"===l?g==$(this).val()&&$(this).attr("checked","checked"):$(this).val(g);else if("html_hashmap"===t){var q=' \x3cul class\x3d"list-group" \x3e ';_.forOwn(g,function(p,
r){r=r.trim();a?(p=loadHashMapSelector(w+"_"+r,w,"socialMediaProfiles"===w?SocialMediaIconMap:"personalContacts"===w?PersonalContactIconsMap:ContactIconsMap,r,p),q+=p):(r="socialMediaProfiles"===w?SocialMediaIconMap[r]?SocialMediaIconMap[r]:!1:"personalContacts"===w?PersonalContactIconsMap[r]?PersonalContactIconsMap[r]:!1:ContactIconsMap[r]?ContactIconsMap[r]:!1,!1===r&&(r=' \x3ci class\x3d"fa fa-info-circle" aria-hidden\x3d"true"\x3e\x3c/i\x3e '),q=q+'\x3cli class\x3d"list-group-item" \x3e '+r+checkToAddUrlValueToDOM(p)+
"\x3c/li\x3e")});q+=" \x3c/ul\x3e ";$(this).html(q)}else"html_hashset"===t?(q='\x3cul class\x3d"list-group" \x3e',_.forOwn(g,function(p,r){p=a?'\x3cdiv class\x3d"col-md-11" \x3e\x3cinput value\x3d"'+p+'" class\x3d"form-control" type\x3d"text" placeholder\x3d"Value" data-fieldholder\x3d"hashset" data-fieldtype\x3d"string" autocomplete\x3d"off"\x3e\x3c/div\x3e\x3cdiv class\x3d"col-md-1" \x3e\x3ch4 onclick\x3d"$(this).parent().parent().parent().remove()" \x3e\x3ci class\x3d"fa fa-times-circle delete-item-btn" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/h4\x3e\x3c/div\x3e':
"system_user"===u?' \x3cdiv class\x3d"col-md-12" \x3e \x3cb\x3e \x3ci class\x3d"fa fa-info-circle" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/b\x3e '+buildSystemUserInfoLink(p)+"\x3c/div\x3e":' \x3cdiv class\x3d"col-md-12" \x3e \x3cb\x3e \x3ci class\x3d"fa fa-info-circle" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/b\x3e '+checkToAddUrlValueToDOM(p)+"\x3c/div\x3e";q=q+'\x3cli class\x3d"list-group-item" \x3e \x3cdiv class\x3d"row" \x3e '+p+"\x3c/div\x3e\x3c/li\x3e"}),q+="\x3c/ul\x3e",$(this).html(q)):"html_list_key_value"===
t?(q='\x3cul class\x3d"list-group" \x3e',l=Object.keys(g),l.sort(),l.forEach(function(p){q=q+'\x3cli class\x3d"list-group-item" \x3e '+p+'  \x3ci class\x3d"fa fa-arrow-right" aria-hidden\x3d"true"\x3e\x3c/i\x3e  '+g[p]+"\x3c/li\x3e"}),q+="\x3c/ul\x3e",$(this).html(q)):"html_custom_field"===t&&(q=' \x3cul class\x3d"list-group" \x3e ',_.forOwn(g,function(p,r){r=r.trim();a?(p=loadCustomFieldEditor(w+"_"+r,r,p),q+=p):(q+='\x3cli class\x3d"list-group-item" \x3e',q+='\x3cdiv class\x3d"row" \x3e \x3cdiv class\x3d"col-md-3"\x3e \x3cb\x3e '+
r+'\x3c/b\x3e \x3ci  style\x3d"font-size:20px" class\x3d"fa fa-equals" aria-hidden\x3d"true"\x3e\x3c/i\x3e \x3c/div\x3e',q+='\x3cdiv class\x3d"col-md-9"\x3e'+p+"\x3c/div\x3e \x3c/div\x3e\x3c/li\x3e")}),q+=" \x3c/ul\x3e ",$(this).html(q))}else if(2===v.length){var x=LeoCdpAdmin.routerContext.dataObject[v[0]]||{};g=x[v[1]]||"";"html"===t?$(this).html(g):"date"===u?(g=moment.utc(g).local().format("YYYY-MM-DD"),$(this).html(g)):"date_time"===u?(g=moment.utc(g).local().format("YYYY-MM-DD HH:mm:ss"),$(this).html(g)):
"inputvalue"===t?$(this).val(g):"url"===t?$(this).html(checkToAddUrlValueToDOM(g)):"eventlocation"===t&&(l=$("\x3ca/\x3e").attr("href","javascript:").html(g).click(function(){var p=x.locationCode||"";p&&""!=p.trim()&&eModal.iframe("https://plus.codes/"+p,g)}),$(this).html(l))}else 3===v.length&&(x=LeoCdpAdmin.routerContext.dataObject[v[0]]||{},g=(x[v[1]]||{})[v[2]]||"","html"===t?$(this).html(g):"date"===u?(g=moment.utc(g).local().format("YYYY-MM-DD"),$(this).html(g)):"date_time"===u?(g=moment.utc(g).local().format("YYYY-MM-DD HH:mm:ss"),
$(this).html(g)):"inputvalue"===t?$(this).val(g):"url"===t?$(this).html(checkToAddUrlValueToDOM(g)):"eventlocation"===t&&(l=$("\x3ca/\x3e").attr("href","javascript:").html(g).click(function(){var p=x.locationCode||"";p&&""!=p.trim()&&eModal.iframe("https://plus.codes/"+p,g)}),$(this).html(l)))}).promise().done(function(){"function"===typeof e&&e()})}else LeoAdminApiUtil.logErrorPayload(n)})};
var updateProfileDataToModel=function(a,d,c){$("#data_model_holder").find("*[data-field]").each(function(){var b=$(this).data("field"),e=$(this).data("fieldholder"),k=$(this).data("fieldtype");e="html"===e?$(this).html().trim():$(this).val();"int"===k?e=parseInt(e.replace(/,/g,"")):"float"===k?e=parseFloat(e.replace(/,/g,"")):"date"===k?e=new Date(e):"tel"===k&&(e=e.replace(/\D/g,""));b=b.split(".");1===b.length?LeoCdpAdmin.routerContext.dataObject[b[0]]=e:2===b.length&&(LeoCdpAdmin.routerContext.dataObject[b[0]][b[1]]=
e)}).promise().done(function(){LeoAdminApiUtil.callPostAdminApi(a,d,function(b){0===b.httpCode&&""===b.errorMessage?"function"===typeof c&&c(b):LeoAdminApiUtil.logErrorPayload(b)})})};window.profileTimeseriesChart=!1;
var loadProfileEventDailyReportUnit=function(a,d){var c=getDateFilterValues();c.profileId=a;a=c.beginFilterDate;$("#eventDataFromDate").text((new moment(a)).format("YYYY-MM-DD HH:mm:ss"));a=c.endFilterDate;$("#eventDataToDate").text((new moment(a)).format("YYYY-MM-DD HH:mm:ss"));LeoAdminApiUtil.getSecuredData(baseLeoAdminUrl+"/cdp/analytics360/event-report/profile",c,function(b){0===b.httpCode&&""===b.errorMessage?!0===d&&"object"===typeof window.profileTimeseriesChart?renderTimeseriesChart("timeseriesProfileEventChart",
b.data,!0,profileTimeseriesChart,!0):window.profileTimeseriesChart=renderTimeseriesChart("timeseriesProfileEventChart",b.data,!1,!1,!0):LeoAdminApiUtil.logErrorPayload(b)})};function handleProfileTabBehavioralInfo(){$("#event_flow_tabs a:first").click();$("#event_flow_vertital_tabs div:first").addClass("active")}function handleProfileTabExtInfo(){$("#profile_ext_info_tabs a:first").click();$("#profile_ext_info_vertital_tabs div:first").addClass("active")}
var loadRecommendedContents=function(){LeoAdminApiUtil.getSecuredData("/cdp/profile/recommended-contents",{profileId:viewProfileId,startIndex:0,numberResult:systemConfig.leo_recommender.service_max_item_for_profile},function(a){var d=$("#recommended_content_list");a=a.data;0<a.length&&d.empty();_.forEach(a,function(c){var b=_.template($("#recommended-content-tpl").html());c.indexScore=d.find("\x3e div").length+1;c.updatedAt=moment.utc(c.updatedAt).local().format("YYYY-MM-DD HH:mm:ss");c=b(c);d.append(c)});
new Sortable(d[0],{swap:!0,swapClass:"sortable_highlighted_item",animation:150,onEnd:function(c){var b=c.newIndex,e=c.swapItem;c=$(c.item).data("key");e=$(e).data("key");var k=parseInt($("#rank_content_"+c).text());b+=1;$("#rank_content_"+c).text(b);$("#rank_content_"+e).text(k);var m={};$("#recommended_content_list span.rank_info").each(function(n){n=$(this).data("key");var f=parseInt($(this).text());m[n]=f;console.log(m)}).promise().done(function(){var n={rankingInfoList:JSON.stringify(m),graphName:"cdp_content_graph",
profileId:viewProfileId,recommendationModel:1};LeoAdminApiUtil.callPostAdminApi("/cdp/profile/update-item-ranking",n,function(f){f.data?iziToast.success({title:"Update Content Content Ranking",timeout:3E3,message:"Data is saved successfully!"}):LeoAdminApiUtil.logErrorPayload(f)})})}})})},loadRecommendedProducts=function(){LeoAdminApiUtil.getSecuredData("/cdp/profile/recommended-products",{profileId:viewProfileId,startIndex:0,numberResult:systemConfig.leo_recommender.service_max_item_for_profile},
function(a){var d=$("#recommended_product_list");a=a.data;0<a.length&&d.empty();_.forEach(a,function(c){if(c.product){var b=_.template($("#recommended-product-tpl").html());c.indexScore=d.find("\x3e div").length+1;c.updatedAt=moment.utc(c.updatedAt).local().format("YYYY-MM-DD HH:mm:ss");c=b(c);d.append(c)}});new Sortable(d[0],{swap:!0,swapClass:"sortable_highlighted_item",animation:150,onEnd:function(c){var b=c.newIndex,e=c.swapItem;c=$(c.item).data("key");e=$(e).data("key");var k=parseInt($("#rank_product_"+
c).text());b+=1;$("#rank_product_"+c).text(b);$("#rank_product_"+e).text(k);var m={};$("#recommended_product_list span.rank_info").each(function(n){n=$(this).data("key");var f=parseInt($(this).text());m[n]=f;console.log(m)}).promise().done(function(){var n={rankingInfoList:JSON.stringify(m),graphName:"cdp_product_graph",profileId:viewProfileId,recommendationModel:1};LeoAdminApiUtil.callPostAdminApi("/cdp/profile/update-item-ranking",n,function(f){f.data?iziToast.success({title:"Product Item Ranking",
timeout:2200,message:"Data is saved successfully!"}):LeoAdminApiUtil.logErrorPayload(f)})})}});$("input.autoselectall").on("click",function(){$(this).select()})})},loadPurchasedItems=function(){LeoAdminApiUtil.getSecuredData("/cdp/profile/get-purchased-items",{profileId:viewProfileId,startIndex:0,numberResult:100},function(a){var d=$("#purchased_items_list");a=a.data;0<a.length&&d.empty();_.forEach(a,function(c){var b=_.template($("#purchased-product-tpl").html());c.indexScore=d.find("\x3e div").length+
1;c.createdAt=moment.utc(c.createdAt).local().format("YYYY-MM-DD HH:mm:ss");c=b(c);d.append(c)})})},loadFinancialEventList=function(){var a=$("#financial_event_list"),d=LeoCdpAdmin.routerContext.dataObject.financeCreditEvents;0<d.length&&a.empty();_.forEach(d,function(c){var b=_.template($("#financial-event-tpl").html());"good"===c.risk?(c.riskIcon="fa-thumbs-o-up",c.riskIconColor="#45D50F"):(c.riskIcon="fa-thumbs-o-down",c.riskIconColor="#F40209");c.risk=c.risk.toUpperCase();c=b(c);a.append(c)})},
emptyInfo='\x3cbr\x3e \x3cdiv style\x3d"font-size:24px;" class\x3d"text-center" \x3e No data available \x3ci class\x3d"fa fa-exclamation" aria-hidden\x3d"true"\x3e\x3c/i\x3e \x3c/div\x3e \x3cbr\x3e',loadEventsInProfileIndex=0,loadEventsInProfileResult=25,loadEventsInProfile=function(a){$("#keywords_filter_events").val("");var d=$("#profile_activitiy_flow");0<d.find("li.all-loaded").length?console.log("Loaded all data for loadEventsInProfile"):(0===loadEventsInProfileIndex&&(d.empty().css("height",
"640px"),$("#keywords_filter_events").change(function(){2>$(this).val().trim().toLowerCase().length&&$("#profile_activitiy_flow li").show()})),$("#profile_activitiy_flow_loader").show(),LeoAdminApiUtil.getSecuredData("/cdp/profile/tracking-events",{id:viewProfileId,startIndex:loadEventsInProfileIndex,numberResult:loadEventsInProfileResult},function(c){$("#profile_activitiy_flow_loader").hide();0===c.data.length&&(0===loadEventsInProfileIndex?(d.html(emptyInfo),$("#profileEventStatistics").html(emptyInfo)):
(d.find("li:last-child").addClass("all-loaded"),$("#profile_activitiy_flow_done").show()));_.forEach(c.data,function(b){try{b.srcTouchpoint.name=textTruncate(decodeURI(b.srcTouchpoint.name),120);b.srcTouchpoint.truncatedUrl=textTruncate(b.srcTouchpoint.url,120);b.createdAt=moment.utc(b.createdAt).local().format("YYYY-MM-DD HH:mm:ss");0<_.size(b.eventData)?b.cssStyleDisplay="block":b.cssStyleDisplay="none";var e=b.metricName,k="view-event-tpl";if("item-view"===e||"survey-view"===e||"course-view"===
e||"content-view"===e)k="key-info-view-event-tpl";else if("purchase"===e||"subscribe"===e||"enroll"===e||"pay"===e)k="conversion-event-tpl";else if(0<=e.indexOf("click")||0<=e.indexOf("submit-")||0<=e.indexOf("play-")||0<=e.indexOf("-scan")||"order-checkout"===e||"add-to-cart"===e||"like"===e||"trial"===e||"user-login"===e)k="action-event-tpl";var m=_.template($("#"+k).html())(b);d.append(m)}catch(n){console.error(n)}});"function"===typeof a?a():$("#profile_activitiy_flow_container").height(d.height()+
50)}))};function loadMoreEventsInProfile(){loadEventsInProfileIndex=$("#profile_activitiy_flow \x3e li").length;loadEventsInProfile(function(){$(document).scrollTop($(document).height()-100);$("#profile_activitiy_flow_container").scrollTop($("#profile_activitiy_flow_container").prop("scrollHeight")+200)})}
var filterEventFlow=function(){var a=$("#keywords_filter_events").val().trim().toLowerCase(),d=$("#profile_activitiy_flow li");2<=a.length&&d.each(function(){0>$(this).find("h5.media-heading").text().toLowerCase().indexOf(a)?$(this).hide():$(this).show()})},loadFeedbacksInProfileIndex=0,loadFeedbacksInProfileResult=120;
function loadFeedbackEventsInProfile(){$("#keyword_filter_feedbacks").val("");var a=$("#profile_feedback_flow");0===loadEventsInProfileIndex&&(a.empty(),$("#keywords_filter_events").change(function(){2>$(this).val().trim().toLowerCase().length&&$("#profile_activitiy_flow li").show()}));$("#profile_feedback_flow_loader").show();LeoAdminApiUtil.getSecuredData("/cdp/profile/feedback-events",{id:viewProfileId,startIndex:loadFeedbacksInProfileIndex,numberResult:loadFeedbacksInProfileResult},function(d){$("#profile_feedback_flow_loader").hide();
d=d.data;0===d.length?a.html('\x3cli class\x3d"list-group-item view" \x3e \x3cdiv class\x3d"list-group-item" \x3e No data available \x3c/div\x3e \x3c/li\x3e'):(a.css("height","650px"),_.forEach(d,function(c,b){c.createdAt=moment.utc(c.createdAt).local().format("YYYY-MM-DD HH:mm:ss");b=baseLeoObserverUrl+"/webform?\x26tplfbt\x3dSURVEY\x26tplid\x3d"+c.refTemplateId;c.previewUrl="SURVEY"===c.feedbackType?b:c.touchpointUrl;b=c.eventName;c.eventIcon="submit-feedback-form"===b?"fa-commenting-o":"submit-rating-form"===
b?"fa-star":"fa-smile-o";b=$("RATING"===c.feedbackType?"#feedback-rating-event-tpl":"#feedback-survey-event-tpl").html();b=_.template(b);a.append(b(c))}))});$("#keyword_filter_feedbacks").change(function(){2>$(this).val().trim().toLowerCase().length&&$("#profile_feedback_flow li").show()})}
function filterFeedbackEvent(){var a=$("#keyword_filter_feedbacks").val().trim().toLowerCase(),d=$("#profile_feedback_flow li");2<=a.length&&d.each(function(){0>$(this).find("h5.media-heading").text().toLowerCase().indexOf(a)?$(this).hide():$(this).show()})}
function removeCurrentProfile(){var a=LeoCdpAdmin.routerContext.dataObject;a?0<Object.keys(a.eventStatistics).length&&1===a.status?notifyErrorMessage("The system can not delete a profile that has event data stream"):LeoCdpAdmin.navFunctions.removeCustomerProfile(a.id):notifyErrorMessage("LeoCdpAdmin.routerContext.dataObject is NULL !")}
function removeSelectedProfiles(){$("#delete_callback").val("");$("#confirmDeleteDialog").modal({focus:!0});var a=Object.keys(window.selectedProfileIdMap||{}).length;0<a&&""===$("#filterProfileListByStatus").val()&&($("#deletedInfoTitle").text("Total Selected Profile \x3d "+a).show(),$("#deletedInfoMsg").text("Do you want to remove selected profiles?"),window.removeSelectedProfilesConfirmOk=function(){LeoAdminApiUtil.callPostAdminApi("/cdp/profiles/batch-update",selectedProfileIdMap,function(d){0===
d.httpCode&&""===d.errorMessage?(iziToast.info({title:"Customer Profile Management",message:"Total removed profile is "+d.data+" !"}),_.forOwn(selectedProfileIdMap,function(c,b){delete selectedProfileIdMap[b]}),resetProfileSearch()):LeoAdminApiUtil.logErrorPayload(d)})},$("#delete_callback").val("removeSelectedProfilesConfirmOk"))}
function deleteNotActiveProfile(){$("#delete_callback").val("");$("#deletedInfoTitle").empty().hide();var a=$("#filterProfileListByStatus option:selected").text().trim();$("#deletedInfoMsg").text("Do you want to delete ALL "+a+" ?");$("#confirmDeleteDialog").modal({focus:!0});window.deleteNotActiveProfileConfirmOk=function(){var d=$("#filterProfileListByStatus").val(),c=-4;""!=d&&(c=parseInt(d));LeoAdminApiUtil.callPostAdminApi("/cdp/profiles/delete-not-active",{status:c},function(b){0===b.httpCode&&
""===b.errorMessage?(iziToast.info({title:"Profile Data Management",message:"Deleted "+b.data+" profiles"}),resetProfileSearch()):LeoAdminApiUtil.logErrorPayload(b)})};$("#delete_callback").val("deleteNotActiveProfileConfirmOk")}
function loadJourneyFlowReport(a,d){$("#journeyFlowChart").parent().hide();LeoAdminApiUtil.getSecuredData("/cdp/analytics360/journey-flow-report",{journeyMapId:d,profileId:a},function(c){if(0<c.errorCode)iziToast.error({title:"Data Journey Map",message:c.errorMessage});else{var b=c.data;c=b.defaultMetricName;var e=b.journeyStages,k=b.journeyLinks,m=b.journeyNodes;b=b.touchpointHubMap;$("#journeyFlowChart").parent().show();renderJourneyFlowChart("#journeyFlowChart",c,e,m,k,b)}})}
const renderProfileBarChart=function(a,d){if(d){var c=[],b=[];$.each(d,function(e,k){c.push(e);b.push(k)});renderHorizontalBarChart(a,c,b)}else $("#"+a).html("\x3ch4\x3e No data available \x3c/h4\x3e")},loadProfileEventMatrix=function(a,d){var c={};c.profileId=a;c.journeyMapId=d;LeoAdminApiUtil.getSecuredData(baseLeoAdminUrl+"/cdp/analytics360/event-matrix",c,function(b){0===b.httpCode&&""===b.errorMessage?(b=b.data,renderMatrixChart("Event Matrix Report","profile_event_matrix",b.xLabels,b.yLabels,
b.dataList)):LeoAdminApiUtil.logErrorPayload(b)})},loadJourneyReportForProfile=function(a,d){var c=currentJourneyMapId||"id_default_journey",b={};$.each(d.eventStatistics,function(e,k){var m=e.indexOf("-");if(0>m)b[c]="object"===typeof b[c]?b[c]:{},b[c][e]=k;else{var n=e.substring(0,m).trim();e=e.substring(m+1);b[n]="object"===typeof b[n]?b[n]:{};b[n][e]=k;b[""]="object"===typeof b[""]?b[""]:{};b[""][e]="number"===typeof b[""][e]?b[""][e]+k:k}});renderProfileBarChart("profileEventStatsChart",b[c]);
renderProfileBarChart("profileReferrerChannels",d.referrerChannels);loadJourneyMapList(!1,function(e,k){$("#profileJourneyName").text(k);$("#event_journey_funnel").empty();loadEventJourneyProfile(a,e);loadProfileEventMatrix(a,e);setTimeout(function(){loadTouchpointFlowForProfile(a,e);loadTouchpointHubReportForProfile(a,e);renderProfileBarChart("profileEventStatsChart",b[e])},2E3)},!0,function(e,k){$("#profileJourneyName").text(k)});loadEventJourneyProfile(a,c);setTimeout(function(){loadTouchpointHubReportForProfile(a,
c)},800);setTimeout(function(){loadProfileEventMatrix(a,c)},1200);setTimeout(function(){loadTouchpointFlowForProfile(a,c)},1600)},loadTouchpointHubReportForProfile=function(a,d){$("#profileObserverChart").html('\x3cdiv class\x3d"loader"\x3e\x3c/div\x3e');LeoAdminApiUtil.getSecuredData(baseLeoAdminUrl+"/cdp/analytics360/touchpoint-hub-report",{profileId:a,journeyMapId:d},function(c){if(0===c.httpCode&&""===c.errorMessage)if(c=c.data,0<c.length){var b=[],e=[];c.forEach(function(k){b.push(k.name);e.push(k.eventCount)});
renderHorizontalBarChart("profileObserverChart",b,e)}else $("#profileObserverChart").html("\x3ch4\x3e No data available \x3c/h4\x3e");else LeoAdminApiUtil.logErrorPayload(c)})},renderProfileTouchpointChart=function(a,d,c,b){$("#profileTouchpointChart").html('\x3cdiv class\x3d"loader"\x3e\x3c/div\x3e');LeoAdminApiUtil.getSecuredData(baseLeoAdminUrl+"/cdp/analytics360/touchpoint-report",{profileId:a,touchpointType:d,startIndex:c,numberResult:b},function(e){if(0===e.httpCode&&""===e.errorMessage){e=
e.data;var k=$("#engaged_touchpoint_list");if(0<e.length){k.empty();var m=[],n=[];e.forEach(function(f){var h=f.touchpoint,l=textTruncate(h.name,60);m.push(l);n.push(f.eventCount);l=_.template($("#engaged-touchpoint-tpl").html());h.updatedAt=moment.utc(h.updatedAt).local().format("YYYY-MM-DD HH:mm:ss");h.truncatedUrl=textTruncate(h.url,120);""===h.locationCode&&(h.cssShowLocationCode="none");h.eventCount=f.eventCount;k.append(l(h))});renderHorizontalBarChart("profileTouchpointChart",m,n)}else $("#profileTouchpointChart").html("\x3ch4\x3e No data available \x3c/h4\x3e")}else LeoAdminApiUtil.logErrorPayload(e)})},
loadEventJourneyProfile=function(a,d){var c=$("#event_journey_funnel").parent().width()-15;a={profileId:a,journeyMapId:d};d=baseLeoAdminUrl+"/cdp/analytics360/event-report/journey-profile";$("#event_journey_funnel_info").html('\x3cdiv class\x3d"loader"\x3e\x3c/div\x3e');LeoAdminApiUtil.getSecuredData(d,a,function(b){if(0===b.httpCode&&""===b.errorMessage){var e=b.data.total,k=0,m=b.data.funnelIndex;b.data.scoreCX&&(k=b.data.scoreCX.sentimentScore);var n=$("#profileJourneyFunnel");90<=m?n.attr("class",
"progress-bar progress-bar-striped active progress-bar-danger"):50<=m&&90>m?n.attr("class","progress-bar progress-bar-striped active progress-bar-success"):n.attr("class","progress-bar progress-bar-striped active progress-bar-primary");$("#profileJourneySentimentScore").text(k);$("#profileJourneyFunnelValue").text(m);n.attr("aria-valuenow",m).css("width",m+"%");$("#profile_funnel_report \x3e div").removeClass("funnel-stage-active");k=Math.floor(m/10);for(m=1;m<=k;m++)$("#profile_funnel_stage_"+m).addClass("funnel-stage-active");
0==e?($("#event_journey_funnel_info").html("\x3cp\x3eNo data available\x3c/p\x3e").show(),$("#journeyFlowChart").hide()):($("#event_journey_funnel_info").empty().hide(),$("#journeyFlowChart").show(),(new FunnelGraph({container:"#event_journey_funnel",gradientDirection:"horizontal",data:{labels:journeyLabel5A,subLabels:["Event Data Point"],colors:[["#9ACAEF","#67B0E9","#309EF3"]],values:b.data.reportData},displayPercent:!0,direction:"horizontal",width:c,height:330,subLabelValue:"raw"})).draw())}else LeoAdminApiUtil.logErrorPayload(b)})},
loadTouchpointFlowForProfile=function(a,d){var c=$("#profileTouchpointFlow");a={profileId:a,journeyMapId:d,beginFilterDate:"",endFilterDate:""};d=baseLeoAdminUrl+"/cdp/analytics360/touchpoint-flow-report";c.html('\x3cdiv class\x3d"loader"\x3e\x3c/div\x3e');LeoAdminApiUtil.getSecuredData(d,a,function(b){0===b.httpCode&&""===b.errorMessage?(c.empty(),renderDirectedGraph("profileTouchpointFlow",{nodes:b.data.nodes,edges:b.data.edges},b.data.rootNodeId)):LeoAdminApiUtil.logErrorPayload(b)})},profileInfoLoadProcessor=
function(a){viewProfileId=a.id;a.fullName=""!==a.firstName||""!==a.lastName?a.firstName+" "+a.lastName:"Web Visitor";0>=a.age&&(a.age="-");""===a.livingLocation&&(a.livingLocation="_");""===a.primaryPhone&&(a.primaryPhone="-");""===a.firstName&&(a.firstName="-");""===a.lastName&&(a.lastName="-");""===a.primaryEmail&&(a.primaryEmail="-");if("number"===typeof a.jobType){var d=a.jobType;a.jobTypeAsString=0===d?"UNSKILLED AND NON-RESIDENT":1===d?"UNSKILLED AND RESIDENT":2===d?"SKILLED":3===d?"HIGHLY SKILLED":
"-"}a.funnelStage=a.funnelStage?a.funnelStage.toUpperCase():"-";a.lastTrackingEvent?(a.lastTrackingEvent.createdAt=moment.utc(a.lastTrackingEvent.createdAt).local().format("YYYY-MM-DD HH:mm:ss"),a.lastTrackingEvent.fingerprintId=a.lastTrackingEvent.fingerprintId?a.lastTrackingEvent.fingerprintId:"-",a.lastTrackingEvent&&a.lastTrackingEvent.refTouchpoint&&(a.lastTrackingEvent.refTouchpoint.name=decodeURISafe(a.lastTrackingEvent.refTouchpoint.name))):a.lastTrackingEvent.createdAt="-";a.lastTouchpoint.name=
decodeURI(a.lastTouchpoint.name);return a},loadProfileListByFilter=function(a,d,c,b,e,k){var m=[{data:"id"},{data:"firstName"},{data:"primaryEmail"},{data:"primaryPhone"},{data:"lastTouchpoint"},{data:"dataQualityScore"},{data:"totalLeadScore"},{data:"totalCLV"},{data:"updatedAt"},{data:"status"}],n=getUserSession();return n?$(b).DataTable({lengthMenu:[[30,50,60],[30,50,60]],processing:!0,serverSide:!0,searching:!1,ordering:!0,serverMethod:"POST",ajax:{url:baseLeoAdminUrl+"/cdp/profiles/filter",contentType:"application/json",
beforeSend:function(f){$(c).show();$(d).hide();f.setRequestHeader("leouss",n)},data:function(f){f=e(f);f.order.map(function(h){h.field=m[h.column]?m[h.column].data:""});return JSON.stringify(f)},dataSrc:function(f){var h=f.canInsertData,l=f.canEditData,t=f.canDeleteData;$(b).data("canInsertData",h);$(b).data("canEditData",l);$(b).data("canDeleteData",t);"function"===typeof k&&k(f);$(c).hide();$(d).show();return f.data}},columnDefs:[{render:function(f,h,l){h="";"function"===typeof window[a]&&(h=getTableRowCheckedBox(a,
b,f,!1));return h},targets:0,orderable:!1},{render:function(f,h,l){f="Web Visitor";h="datatable_text no_contact";if(0<l.firstName.length||0<l.lastName.length)f=textTruncate(l.firstName+" "+l.lastName,30),h="has_contact";return'\x3ca class\x3d"'+h+'" title\x3d"Profile Report" href\x3d"#calljs-leoCdpRouter(\'Customer_Profile_Info\',\''+(l.id+"')\" \x3e")+f+"\x3c/a\x3e"},targets:1,orderable:!1},{render:function(f,h,l){return"string"===typeof f?'\x3cdiv class\x3d"datatable_text "\x3e\x3ca title\x3d"'+
(f+"\" href\x3d\"#calljs-leoCdpRouter('Customer_Profile_Info','"+(l.id+"')\" \x3e")+textTruncate(f,30)+"\x3c/a\x3e\x3c/div\x3e"):"-"},targets:2,orderable:!1},{render:function(f,h,l){return"string"===typeof f?'\x3cdiv class\x3d"datatable_text"\x3e\x3ca title\x3d"'+(f+"\" href\x3d\"#calljs-leoCdpRouter('Customer_Profile_Info','"+(l.id+"')\" \x3e")+textTruncate(f,30)+"\x3c/a\x3e\x3c/div\x3e"):"-"},targets:3,orderable:!1},{render:function(f,h,l){"object"!==typeof l.lastTouchpoint&&(l.lastTouchpoint={name:"No data"});
return'\x3cdiv style\x3d"font-size:11.4px;" title\x3d"'+l.lastTouchpoint.name+'"\x3e'+textTruncate(l.lastTouchpoint.name,50)+"\x3c/div\x3e"},targets:4,orderable:!1},{render:function(f,h,l){h=(new Number(f)).toLocaleString();return 100>=f?'\x3cdiv class\x3d"datatable_text text-center"\x3e'+h+" \x3c/div\x3e":100<f&&250>f?'\x3cdiv class\x3d"highlight_text text-center profile_medium_score" \x3e'+h+"\x3c/div\x3e":'\x3cdiv class\x3d"highlight_text text-center profile_high_score"  \x3e'+h+"\x3c/div\x3e"},
targets:5},{render:function(f,h,l){h=(new Number(f)).toLocaleString();return 20>f?'\x3cdiv class\x3d"datatable_text text-center"\x3e'+h+" \x3c/div\x3e":20<=f&&100>f?'\x3cdiv class\x3d"highlight_text text-center profile_medium_score" \x3e'+h+"\x3c/div\x3e":100<=f?'\x3cdiv class\x3d"highlight_text text-center profile_high_score" \x3e'+h+"\x3c/div\x3e":'\x3cdiv class\x3d"highlight_text text-center" style\x3d"color:#404040!important;font-size:0.8em!important" \x3e'+h+" \x3c/div\x3e"},targets:6},{render:function(f,
h,l){h=(new Number(f)).toLocaleString();return 20>f?'\x3cdiv class\x3d"datatable_text text-center"\x3e'+h+" \x3c/div\x3e":20<=f&&100>f?'\x3cdiv class\x3d"highlight_text text-center profile_medium_score" \x3e'+h+"\x3c/div\x3e":100<=f?'\x3cdiv class\x3d"highlight_text text-center profile_high_score" \x3e'+h+" \x3c/div\x3e":'\x3cdiv class\x3d"highlight_text text-center" style\x3d"color:#404040!important;font-size:0.8em!important" \x3e'+h+" \x3c/div\x3e"},targets:7},{render:function(f,h,l){return f?'\x3cdiv class\x3d"small text-center" style\x3d"color:#3300ff;width:74px" \x3e'+
moment.utc(f).local().format("YYYY-MM-DD HH:mm:ss")+"\x3c/div\x3e":"-"},targets:8},{render:function(f,h,l){h="ACTIVE";0===f?h="INACTIVE":-1===f?h="INVALID":-4===f&&(h="REMOVED");return'\x3cdiv class\x3d"small text-center" style\x3d"color:#3300ff!important" title\x3d"The profile status is '+h+'"\x3e'+h+"\x3c/div\x3e"},targets:9},{render:function(f,h,l){f='\x3ca class\x3d"control" title\x3d"Profile Report" href\x3d"#calljs-leoCdpRouter(\'Customer_Profile_Info\',\''+(l.id+'\')" \x3e \x3ci class\x3d"fa fa-info-circle" aria-hidden\x3d"true"\x3e\x3c/i\x3e View\x3c/a\x3e');
$(b).data("canEditData")&&(f+=' \x3cbr\x3e\x3ca class\x3d"control" title\x3d"Profile Editor" href\x3d"#calljs-leoCdpRouter(\'Customer_Profile_Editor\',\''+(l.id+'\')" \x3e \x3ci class\x3d"fa fa-pencil-square-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e Edit\x3c/a\x3e'));return f},targets:10}],columns:m,order:[[8,"desc"]]}):!1};