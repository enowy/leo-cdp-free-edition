'use strict';function profileAddNewTextHashSet(a){var d=$('\x3cli class\x3d"list-group-item" \x3e\x3cdiv class\x3d"row" \x3e\x3cdiv class\x3d"col-md-11" \x3e\x3cinput class\x3d"form-control" type\x3d"text" placeholder\x3d"Value" data-fieldholder\x3d"hashset" data-fieldtype\x3d"string" autocomplete\x3d"off"\x3e\x3c/div\x3e\x3cdiv class\x3d"col-md-1" \x3e\x3ch4 onclick\x3d"$(this).parent().parent().parent().remove()" \x3e\x3ci class\x3d"fa fa-times-circle delete-item-btn" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/h4\x3e \x3c/div\x3e\x3c/div\x3e\x3c/li\x3e');
$('p[data-field\x3d"'+a+'"] \x3e ul').append(d);d.effect("highlight",{},3600);d.find("input:first").focus()}function profileAddNewCustomField(a){var d=$(loadCustomFieldEditor(a,"",""));$('p[data-field\x3d"'+a+'"] \x3e ul').append(d);d.effect("highlight",{},3600);d.find("input:first").focus()}
function handleProfileListFiltersBy(a,d){$("#profile_filter_inputs \x3e .form-control").val("").hide();$(d).show();$("#profile_filter_input_label").text($(a).text()).show();$("#main_search_profile").val("");showDeleteNotActiveProfile()}
var addNewHashMapItem=function(a,d){var c=a+"_"+(new Date).getTime(),b=$("#"+a),g=Object.assign({},d);b.find("option:selected").each(function(){var k=$(this).val();delete g[k]});a=$(loadHashMapSelector(c,a,g,"",""));b.find("ul.list-group").append(a);a.effect("highlight",{},4E3)};function removeHashMapItem(a){$(a).parent().parent().remove()}
function loadHashMapSelector(a,d,c,b,g){var k='\x3cdiv class\x3d"col-md-3" \x3e \x3cselect class\x3d"form-control" id\x3d"key_'+a+'" name\x3d"'+d+'" \x3e';_.forOwn(c,function(m,h){m='\x3coption name\x3d"'+d+'" value\x3d"'+h+'"\x3e '+h.toUpperCase()+" \x3c/option\x3e";h===b&&(m='\x3coption name\x3d"'+d+'" selected value\x3d"'+h+'"\x3e '+h.toUpperCase()+" \x3c/option\x3e");k+=m});k+=" \x3c/select\x3e \x3c/div\x3e";""===b&&$("#key_"+a).find("option:first").attr("selected","selected");return'\x3cli id\x3d"item_'+
a+'" class\x3d"list-group-item" \x3e\x3cdiv class\x3d"row" \x3e '+k+('\x3cdiv class\x3d"col-md-8" \x3e\x3cinput id\x3d"value_'+a+'" value\x3d"'+(g?g:"")+'" class\x3d"form-control" type\x3d"text" placeholder\x3d"Value" data-fieldholder\x3d"hashmap" data-fieldtype\x3d"string" autocomplete\x3d"off"\x3e\x3c/div\x3e\x3cdiv title\x3d"Delete" class\x3d"col-md-1" onclick\x3d"removeHashMapItem(this)" \x3e \x3ch4\x3e\x3ci class\x3d"fa fa-times-circle delete-item-btn" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/h4\x3e \x3c/div\x3e \x3c/div\x3e\x3c/li\x3e')}
function loadCustomFieldEditor(a,d,c){return'\x3cli class\x3d"list-group-item" \x3e\x3cdiv class\x3d"row" \x3e \x3cdiv class\x3d"col-md-3" \x3e \x3cinput type\x3d"text" class\x3d"form-control custom_field_name" placeholder\x3d"Field Name" value\x3d"'+(d+'"\x3e \x3c/div\x3e\x3cdiv class\x3d"col-md-8" \x3e\x3cinput class\x3d"form-control custom_field_value" type\x3d"text" value\x3d"')+((c?c:"")+'" placeholder\x3d"Field Value" data-fieldholder\x3d"hashmap" data-fieldtype\x3d"string" autocomplete\x3d"off"\x3e\x3c/div\x3e\x3cdiv title\x3d"Delete" class\x3d"col-md-1" onclick\x3d"removeHashMapItem(this)" \x3e \x3ch4\x3e\x3ci class\x3d"fa fa-times-circle delete-item-btn" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/h4\x3e \x3c/div\x3e \x3c/div\x3e\x3c/li\x3e')}
const loadProfileDataIntoDOM=function(a,d,c,b,g,k){var m=!1,h={};"string"===typeof d?(m="/cdp/profile/get-by-id",h.id=d):"string"===typeof c?(m="/cdp/profile/get-by-crm-id",h.crmRefId=c):"string"===typeof b&&(m="/cdp/profile/get-by-visitor-id",h.visitorId=b);!1===m?(console.error("loadProfileDataIntoDOM is failed, profileId or crmRefId must be a valid string! "),console.log("urlStr "+m),console.log("params "+h)):LeoAdminApiUtil.callPostAdminApi(baseLeoAdminUrl+m,h,function(f){if(0===f.httpCode&&""===
f.errorMessage){var e=f.canInsertData,n=f.canDeleteData;f.canEditData||$("button.data-control-edit").attr("disabled","disabled");n||$("button.data-control-delete").attr("disabled","disabled");e||$("button.data-control-insert").attr("disabled","disabled");LeoCdpAdmin.routerContext.dataObject="function"===typeof g?g(f.data):f.data;$("#data_model_holder").find("*[data-field]").each(function(){var p=$(this).attr("type"),r=$(this).data("fieldholder"),v=$(this).data("fieldtype"),w=$(this).data("field"),
x=w.split(".");if(1===x.length){var l=LeoCdpAdmin.routerContext.dataObject[x[0]];if("html"===r){if("int"===v||"float"===v)if(void 0===l||null==l)l="-";else{if(l=(new Number(l)).toLocaleString(),NaN==l||"NaN"==l)l="-"}else"date"===v?l=l?moment.utc(l).local().format("YYYY-MM-DD"):"-":"date_time"===v?l=l?moment.utc(l).local().format("YYYY-MM-DD HH:mm:ss"):"-":"phone"===v&&(l=l?l.replace(/\D/g,""):"-");$(this).html(l)}else if("percentage"===r)$(this).html(l).parent().attr("aria-valuenow",l).css("width",
l+"%"),p=$(this).parent(),p.attr("title",l+"% "+p.attr("title"));else if("url"===r)$(this).html(checkToAddUrlValueToDOM(l));else if("locationcode"===r)p=$("\x3ca/\x3e").attr("href","javascript:").html(textTruncate(l,80)).click(function(){var q=LeoCdpAdmin.routerContext.dataObject.locationCode;0===q.indexOf("http")?eModal.iframe(q,"Location"):q&&""!=q.trim()&&eModal.iframe("https://plus.codes/"+q,l)}),$(this).html(p);else if("selectionvalue"===r)"checkbox"===p&&1==l?$(this).attr("checked","checked"):
"radio"===p&&l==$(this).val()&&$(this).attr("checked","checked");else if("html_hashmap"===r){var t=' \x3cul class\x3d"list-group" \x3e ';_.forOwn(l,function(q,u){u=u.trim();a?(q=loadHashMapSelector(w+"_"+u,w,"socialMediaProfiles"===w?SocialMediaIconMap:"personalContacts"===w?PersonalContactIconsMap:ContactIconsMap,u,q),t+=q):(u="socialMediaProfiles"===w?SocialMediaIconMap[u]?SocialMediaIconMap[u]:!1:"personalContacts"===w?PersonalContactIconsMap[u]?PersonalContactIconsMap[u]:!1:ContactIconsMap[u]?
ContactIconsMap[u]:!1,!1===u&&(u=' \x3ci class\x3d"fa fa-info-circle" aria-hidden\x3d"true"\x3e\x3c/i\x3e '),t=t+'\x3cli class\x3d"list-group-item" \x3e '+u+checkToAddUrlValueToDOM(q)+"\x3c/li\x3e")});t+=" \x3c/ul\x3e ";$(this).html(t)}else"html_hashset"===r?(t='\x3cul class\x3d"list-group" \x3e',_.forOwn(l,function(q,u){q=a?'\x3cdiv class\x3d"col-md-11" \x3e\x3cinput value\x3d"'+q+'" class\x3d"form-control" type\x3d"text" placeholder\x3d"Value" data-fieldholder\x3d"hashset" data-fieldtype\x3d"string" autocomplete\x3d"off"\x3e\x3c/div\x3e\x3cdiv class\x3d"col-md-1" \x3e\x3ch4 onclick\x3d"$(this).parent().parent().parent().remove()" \x3e\x3ci class\x3d"fa fa-times-circle delete-item-btn" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/h4\x3e\x3c/div\x3e':
"system_user"===v?' \x3cdiv class\x3d"col-md-12" \x3e \x3cb\x3e \x3ci class\x3d"fa fa-info-circle" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/b\x3e '+buildSystemUserInfoLink(q)+"\x3c/div\x3e":' \x3cdiv class\x3d"col-md-12" \x3e \x3cb\x3e \x3ci class\x3d"fa fa-info-circle" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/b\x3e '+checkToAddUrlValueToDOM(q)+"\x3c/div\x3e";t=t+'\x3cli class\x3d"list-group-item" \x3e \x3cdiv class\x3d"row" \x3e '+q+"\x3c/div\x3e\x3c/li\x3e"}),t+="\x3c/ul\x3e",$(this).html(t)):"html_list_key_value"===
r?(t='\x3cul class\x3d"list-group" \x3e',p=Object.keys(l),p.sort(),p.forEach(function(q){t=t+'\x3cli class\x3d"list-group-item" \x3e '+q+'  \x3ci class\x3d"fa fa-arrow-right" aria-hidden\x3d"true"\x3e\x3c/i\x3e  '+l[q]+"\x3c/li\x3e"}),t+="\x3c/ul\x3e",$(this).html(t)):"html_custom_field"===r?(t=' \x3cul class\x3d"list-group" \x3e ',_.forOwn(l,function(q,u){u=u.trim();a?(q=loadCustomFieldEditor(w+"_"+u,u,q),t+=q):(t+='\x3cli class\x3d"list-group-item" \x3e',t+='\x3cdiv class\x3d"row" \x3e \x3cdiv class\x3d"col-md-3"\x3e \x3cb\x3e '+
u+'\x3c/b\x3e \x3ci  style\x3d"font-size:20px" class\x3d"fa fa-equals" aria-hidden\x3d"true"\x3e\x3c/i\x3e \x3c/div\x3e',t+='\x3cdiv class\x3d"col-md-9"\x3e'+q+"\x3c/div\x3e \x3c/div\x3e\x3c/li\x3e")}),t+=" \x3c/ul\x3e ",$(this).html(t)):"inputvalue"===r&&$(this).val(l)}else if(2===x.length){var y=LeoCdpAdmin.routerContext.dataObject[x[0]]||{};l=y[x[1]]||"";"html"===r?$(this).html(l):"date"===v?(l=moment.utc(l).local().format("YYYY-MM-DD"),$(this).html(l)):"date_time"===v?(l=moment.utc(l).local().format("YYYY-MM-DD HH:mm:ss"),
$(this).html(l)):"inputvalue"===r?$(this).val(l):"url"===r?$(this).html(checkToAddUrlValueToDOM(l)):"eventlocation"===r&&(p=$("\x3ca/\x3e").attr("href","javascript:").html(l).click(function(){var q=y.locationCode||"";q&&""!=q.trim()&&eModal.iframe("https://plus.codes/"+q,l)}),$(this).html(p))}else 3===x.length&&(y=LeoCdpAdmin.routerContext.dataObject[x[0]]||{},l=(y[x[1]]||{})[x[2]]||"","html"===r?$(this).html(l):"inputvalue"===r?$(this).val(l):"url"===r?$(this).html(checkToAddUrlValueToDOM(l)):"eventlocation"===
r&&(p=$("\x3ca/\x3e").attr("href","javascript:").html(l).click(function(){var q=y.locationCode||"";q&&""!=q.trim()&&eModal.iframe("https://plus.codes/"+q,l)}),$(this).html(p)),"date"===v?(l=moment.utc(l).local().format("YYYY-MM-DD"),$(this).html(l)):"date_time"===v&&(l=moment.utc(l).local().format("YYYY-MM-DD HH:mm:ss"),$(this).html(l)))}).promise().done(function(){"function"===typeof k&&k()})}else LeoAdminApiUtil.logErrorPayload(f)})};
var updateProfileDataToModel=function(a,d,c){$("#data_model_holder").find("*[data-field]").each(function(){var b=$(this).data("field"),g=$(this).data("fieldholder"),k=$(this).data("fieldtype");g="checkbox"===$(this).attr("type")?$(this).prop("checked"):"html"===g?$(this).html().trim():$(this).val();"int"===k?g=parseInt(g.replace(/,/g,"")):"float"===k?g=parseFloat(g.replace(/,/g,"")):"date"===k?g=new Date(g):"tel"===k&&(g=g.replace(/\D/g,""));b=b.split(".");1===b.length?LeoCdpAdmin.routerContext.dataObject[b[0]]=
g:2===b.length&&(LeoCdpAdmin.routerContext.dataObject[b[0]][b[1]]=g)}).promise().done(function(){LeoAdminApiUtil.callPostAdminApi(a,d,function(b){0===b.httpCode&&""===b.errorMessage?"function"===typeof c&&c(b):LeoAdminApiUtil.logErrorPayload(b)})})},loadProfileEventDailyReportUnit=function(){var a=currentJourneyMapId||"id_default_journey",d=getDateFilterValues();d.profileId=viewProfileId;d.journeyMapId=a;a=d.beginFilterDate;$("#eventDataFromDate").text((new moment(a)).format("YYYY-MM-DD HH:mm:ss"));
a=d.endFilterDate;$("#eventDataToDate").text((new moment(a)).format("YYYY-MM-DD HH:mm:ss"));var c=$("#profile_event_report_loader").show();LeoAdminApiUtil.getSecuredData(baseLeoAdminUrl+"/cdp/analytics360/event-report/profile",d,function(b){c.hide();0===b.httpCode&&""===b.errorMessage?!1!==window.profileTimeseriesChart?renderTimeseriesChart("timeseriesProfileEventChart",b.data,!0,profileTimeseriesChart,!0):window.profileTimeseriesChart=renderTimeseriesChart("timeseriesProfileEventChart",b.data,!1,
!1,!0):LeoAdminApiUtil.logErrorPayload(b)})};function handleProfileTabBehavioralInfo(){$("#event_flow_tabs a:first").click();$("#event_flow_vertital_tabs div:first").addClass("active")}function handleProfileTabExtInfo(){$("#profile_ext_info_tabs a:first").click();$("#profile_ext_info_vertital_tabs div:first").addClass("active")}
const loadRecommendedContentsOfProfile=function(a,d,c){var b=systemConfig.leo_recommender.service_max_item_for_profile,g=$("#recommended_content_list").empty().html('\x3cdiv class\x3d"loader"\x3e\x3c/div\x3e');LeoAdminApiUtil.getSecuredData("/cdp/profile/recommended-contents",{profileId:a,startIndex:0,numberResult:b},function(k){k=k.data;var m=k.length;0<m?g.empty():g.empty().html('\x3cdiv class\x3d"list-group-item" \x3e No data available \x3c/div\x3e');_.forEach(k,function(h){var f=_.template($("#recommended-content-tpl").html());
h.indexScore=g.find("\x3e div").length+1;h.updatedAt=moment.utc(h.updatedAt).local().format("YYYY-MM-DD HH:mm:ss");var e=h.content.headlineImageUrl;h.content.headlineImageUrl=null==e||""===e?"https://cdn-icons-png.flaticon.com/128/9872/9872434.png":e;h.content.landingPageUrl=null==h.content.fullUrl||""===h.content.fullUrl?h.content.shortLinkUrl:h.content.fullUrl;h=f(h);g.append(h)});!0===d&&new Sortable(g[0],{swap:!0,swapClass:"sortable_highlighted_item",animation:150,onEnd:function(h){var f=h.newIndex,
e=h.swapItem;h=$(h.item).data("key");e=$(e).data("key");var n=parseInt($("#rank_content_"+h).text());f+=1;$("#rank_content_"+h).text(f);$("#rank_content_"+e).text(n);var p={};$("#recommended_content_list span.rank_info").each(function(r){r=$(this).data("key");var v=parseInt($(this).text());p[r]=v;console.log(p)}).promise().done(function(){var r={rankingInfoList:JSON.stringify(p),graphName:"cdp_content_graph",profileId:a,recommendationModel:1};LeoAdminApiUtil.callPostAdminApi("/cdp/profile/update-item-ranking",
r,function(v){v.data?iziToast.success({title:"Update Content Content Ranking",timeout:3E3,message:"Data is saved successfully!"}):LeoAdminApiUtil.logErrorPayload(v)})})}});"function"===typeof c&&c(m)})};
var loadRecommendedProductsOfProfile=function(a,d,c){var b=systemConfig.leo_recommender.service_max_item_for_profile,g=$("#recommended_product_list").empty().html('\x3cdiv class\x3d"loader"\x3e\x3c/div\x3e');LeoAdminApiUtil.getSecuredData("/cdp/profile/recommended-products",{profileId:a,startIndex:0,numberResult:b},function(k){k=k.data;var m=k.length;0<m?g.empty():g.empty().html('\x3cdiv class\x3d"list-group-item" \x3e No data available \x3c/div\x3e');var h=_.template($("#recommended-product-tpl").html());
_.forEach(k,function(f){var e=f.product;if("object"===typeof e){f.indexScore=g.find("\x3e div").length+1;f.updatedAt=moment.utc(f.updatedAt).local().format("YYYY-MM-DD HH:mm:ss");e.offerPrice=e.salePrice*(1-f.discount);e.discount=100*f.discount;e.keywordsText=textTruncate(e.keywords.join(", "),6555);var n=e.headlineImageUrl;e.headlineImageUrl=null==n||""===n?NO_IMAGE_URL:n;f=h(f);g.append(f)}});!0===d&&new Sortable(g[0],{swap:!0,swapClass:"sortable_highlighted_item",animation:150,onEnd:function(f){var e=
f.newIndex,n=f.swapItem;f=$(f.item).data("key");n=$(n).data("key");var p=parseInt($("#rank_product_"+f).text());e+=1;$("#rank_product_"+f).text(e);$("#rank_product_"+n).text(p);var r={};g.find("span.rank_info").each(function(v){v=$(this).data("key");var w=parseInt($(this).text());r[v]=w;console.log(r)}).promise().done(function(){var v={rankingInfoList:JSON.stringify(r),graphName:"cdp_product_graph",profileId:a,recommendationModel:1};LeoAdminApiUtil.callPostAdminApi("/cdp/profile/update-item-ranking",
v,function(w){w.data?iziToast.success({title:"Product Item Ranking",timeout:2200,message:"Data is saved successfully!"}):LeoAdminApiUtil.logErrorPayload(w)})})}});$("input.autoselectall").on("click",function(){$(this).select()});"function"===typeof c&&c(m)})},loadPurchasedItemsOfProfile=function(){LeoAdminApiUtil.getSecuredData("/cdp/profile/get-purchased-items",{profileId:viewProfileId,startIndex:0,numberResult:100},function(a){var d=$("#purchased_items_list");a=a.data;0<a.length&&d.empty();_.forEach(a,
function(c){var b=_.template($("#purchased-product-tpl").html());c.indexScore=d.find("\x3e div").length+1;c.createdAt=moment.utc(c.createdAt).local().format("YYYY-MM-DD HH:mm:ss");c=b(c);d.append(c)})})},loadFinancialEventList=function(){var a=$("#financial_event_list"),d=LeoCdpAdmin.routerContext.dataObject.financeCreditEvents;0<d.length&&a.empty();_.forEach(d,function(c){var b=_.template($("#financial-event-tpl").html());"good"===c.risk?(c.riskIcon="fa-thumbs-o-up",c.riskIconColor="#45D50F"):(c.riskIcon=
"fa-thumbs-o-down",c.riskIconColor="#F40209");c.risk=c.risk.toUpperCase();c=b(c);a.append(c)})},emptyInfo='\x3cbr\x3e \x3cdiv style\x3d"font-size:24px;" class\x3d"text-center" \x3e No data available \x3ci class\x3d"fa fa-exclamation" aria-hidden\x3d"true"\x3e\x3c/i\x3e \x3c/div\x3e \x3cbr\x3e',loadEventsInProfileIndex=0,loadEventsInProfileResult=25,callApiToGetTrackingEventsOfProfile=function(a,d){var c=$("#profile_activitiy_flow"),b=$("#profile_activitiy_flow_container");0===loadEventsInProfileIndex&&
(c.empty().css({"max-height":"660px","min-height":"80px"}),b.css({height:"680px"}));if(0<c.find("li.all-loaded").length)console.log("Loaded all data for loadEventsInProfile"),c.show();else{b.hide();var g=$("#profile_activitiy_flow_loader").show(),k={profileId:viewProfileId};k.startIndex=loadEventsInProfileIndex;k.numberResult=loadEventsInProfileResult;k.journeyMapId=currentJourneyMapId;k.searchValue=a;LeoAdminApiUtil.getSecuredData("/cdp/profile/tracking-events",k,function(m){g.hide();0===m.data.length&&
(0===loadEventsInProfileIndex?(c.html(emptyInfo),$("#profileEventStatistics").html(emptyInfo)):(c.find("li:last-child").addClass("all-loaded"),$("#profile_activitiy_flow_done").show(),$("#btn_loadMoreEvents").attr("disabled","disabled").attr("title","All data is loaded"),$("#btn_filterEvents").attr("disabled","disabled")));_.forEach(m.data,function(h){try{h.srcTouchpoint.url=h.srcTouchpoint.url.replace("leosyn\x3d","leovid\x3d");h.srcTouchpoint.name=textTruncate(decodeURI(h.srcTouchpoint.name),120);
h.srcTouchpoint.truncatedUrl=textTruncate(h.srcTouchpoint.url,120);h.createdAt=moment.utc(h.createdAt).local().format("YYYY-MM-DD HH:mm:ss");0<_.size(h.eventData)?h.cssStyleDisplay="block":h.cssStyleDisplay="none";var f=h.journeyStage,e=h.transactionValue,n=_.template($("#"+(4===f&&0<e?"conversion-event-tpl":3<=f?"action-event-tpl":2===f?"key-info-view-event-tpl":"view-event-tpl")).html())(h);c.append(n)}catch(p){console.error(p)}});b.show();"function"===typeof d?d():(m=c.height()+20,b.height(m).scrollTop(0),
console.log("\x3d\x3d\x3e hfh \x3d "+m))})}},loadEventsInProfile=function(a,d,c){$("#btn_loadMoreEvents").removeAttr("disabled").attr("Load more events");$("#btn_filterEvents").removeAttr("disabled");!0===a&&(loadEventsInProfileIndex=0,$("#profile_activitiy_flow_done").hide());a=$("#keywords_filter_events");!0===d&&a.val("");d=a.val().trim();callApiToGetTrackingEventsOfProfile(d,c)};
function initProfileEventInStream(){loadEventsInProfile(!0,!0);$("#keywords_filter_events").keypress(function(a){"13"==(a.keyCode?a.keyCode:a.which)&&(0<$(this).val().trim().length?(loadEventsInProfileIndex=0,loadEventsInProfile(!1,!1)):loadEventsInProfile(!0,!1))}).change(function(){$("#profile_activitiy_flow").empty();$("#profile_activitiy_flow_container").height(20).scrollTop(0);$("#btn_loadMoreEvents").attr("disabled","disabled")})}
function loadMoreEventsInProfile(){loadEventsInProfileIndex=$("#profile_activitiy_flow \x3e li").length;loadEventsInProfile(!1,!1,function(){$(document).scrollTop($(document).height()-100);var a=$("#profile_activitiy_flow_container"),d=a.prop("scrollHeight")+200;a.scrollTop(d)})}var loadFeedbacksInProfileIndex=0,loadFeedbacksInProfileResult=120;
function loadFeedbackEventsInProfile(){$("#keyword_filter_feedbacks").val("");var a=$("#profile_feedback_flow");0===loadEventsInProfileIndex&&(a.empty(),$("#keywords_filter_events").change(function(){2>$(this).val().trim().toLowerCase().length&&$("#profile_activitiy_flow li").show()}));var d=$("#profile_feedback_flow_loader").show();LeoAdminApiUtil.getSecuredData("/cdp/profile/feedback-events",{id:viewProfileId,startIndex:loadFeedbacksInProfileIndex,numberResult:loadFeedbacksInProfileResult},function(c){d.hide();
c=c.data;0===c.length?a.html('\x3cli class\x3d"list-group-item view" \x3e \x3cdiv class\x3d"list-group-item" \x3e No data available \x3c/div\x3e \x3c/li\x3e'):(a.css("height","650px"),_.forEach(c,function(b,g){b.createdAt=moment.utc(b.createdAt).local().format("YYYY-MM-DD HH:mm:ss");g=baseLeoObserverUrl+"/webform?\x26tplfbt\x3dSURVEY\x26tplid\x3d"+b.refTemplateId;b.previewUrl="SURVEY"===b.feedbackType?g:b.touchpointUrl;g=b.eventName;b.eventIcon="submit-feedback-form"===g?"fa-commenting-o":"submit-rating-form"===
g?"fa-star":"fa-smile-o";g=$("RATING"===b.feedbackType?"#feedback-rating-event-tpl":"#feedback-survey-event-tpl").html();g=_.template(g);a.append(g(b))}))});$("#keyword_filter_feedbacks").change(function(){2>$(this).val().trim().toLowerCase().length&&$("#profile_feedback_flow li").show()})}
function filterFeedbackEvent(){var a=$("#keyword_filter_feedbacks").val().trim().toLowerCase(),d=$("#profile_feedback_flow li");2<=a.length&&d.each(function(){0>$(this).find("h5.media-heading").text().toLowerCase().indexOf(a)?$(this).hide():$(this).show()})}function removeCurrentProfile(){var a=LeoCdpAdmin.routerContext.dataObject;a?LeoCdpAdmin.navFunctions.removeCustomerProfile(a.id):notifyErrorMessage("LeoCdpAdmin.routerContext.dataObject is NULL !")}
function refreshCurrentProfile(){var a=LeoCdpAdmin.routerContext.dataObject;if(a){var d=(new Date).getTime();location.hash="#calljs-leoCdpRouter('Customer_Profile_Info','"+a.id+"','_refresh_"+d+"')"}else notifyErrorMessage("LeoCdpAdmin.routerContext.dataObject is NULL !")}
function deduplicateCurrentProfile(){var a=LeoCdpAdmin.routerContext.dataObject;a&&LeoAdminApiUtil.callPostAdminApi("/cdp/profile/deduplicate",{profileId:a.id},function(d){0===d.httpCode&&""===d.errorMessage?"number"===typeof d.data&&iziToast.info({title:"Merge Duplicate Profile",message:"Total processed profile: "+d.data}):LeoAdminApiUtil.logErrorPayload(d)})}
function removeSelectedProfiles(){$("#delete_callback").val("");$("#confirmDeleteDialog").modal({focus:!0});var a=Object.keys(window.selectedProfileIdMap||{}).length;0<a&&""===$("#filterProfileListByStatus").val()&&($("#deletedInfoTitle").text("Total Selected Profile \x3d "+a).show(),$("#deletedInfoMsg").text("Do you want to remove selected profiles?"),window.removeSelectedProfilesConfirmOk=function(){LeoAdminApiUtil.callPostAdminApi("/cdp/profiles/batch-update",selectedProfileIdMap,function(d){0===
d.httpCode&&""===d.errorMessage?(iziToast.info({title:"Customer Profile Management",message:"Total removed profile is "+d.data+" !"}),_.forOwn(selectedProfileIdMap,function(c,b){delete selectedProfileIdMap[b]}),resetProfileSearch()):LeoAdminApiUtil.logErrorPayload(d)})},$("#delete_callback").val("removeSelectedProfilesConfirmOk"))}
function deleteNotActiveProfile(){$("#delete_callback").val("");$("#deletedInfoTitle").empty().hide();var a=$("#filterProfileListByStatus option:selected").text().trim();$("#deletedInfoMsg").text("Do you want to delete ALL "+a+" ?");$("#confirmDeleteDialog").modal({focus:!0});window.deleteNotActiveProfileConfirmOk=function(){var d=$("#filterProfileListByStatus").val(),c=-4;""!=d&&(c=parseInt(d));LeoAdminApiUtil.callPostAdminApi("/cdp/profiles/delete-not-active",{status:c},function(b){0===b.httpCode&&
""===b.errorMessage?(iziToast.info({title:"Profile Data Management",message:"Deleted \x3cb\x3e"+b.data+"\x3c/b\x3e profiles"}),resetProfileSearch()):LeoAdminApiUtil.logErrorPayload(b)})};$("#delete_callback").val("deleteNotActiveProfileConfirmOk")}
function loadProfileJourneyFlowReport(a,d){$("#journeyFlowChart").parent().hide();""===d&&(d="id_default_journey");LeoAdminApiUtil.getSecuredData("/cdp/analytics360/journey-flow-report",{journeyMapId:d,profileId:a},function(c){if(0<c.errorCode)iziToast.error({title:"Data Journey Map",message:c.errorMessage});else{var b=c.data;c=b.defaultMetricName;var g=b.journeyStages,k=b.journeyLinks,m=b.journeyNodes;b=b.touchpointHubMap;$("#journeyFlowChart").parent().show();renderJourneyFlowChart("#journeyFlowChart",
c,g,m,k,b)}})}
const renderProfileBarChart=function(a,d){if(d){var c=[],b=[];$.each(d,function(g,k){c.push(g);b.push(k)});renderHorizontalBarChart(a,c,b)}else $("#"+a).html('\x3ch4 class\x3d"alert alert-info" role\x3d"alert"\x3e No data available \x3c/h4\x3e')},loadProfileEventMatrix=function(a,d){var c={};c.profileId=a;c.journeyMapId=d;LeoAdminApiUtil.getSecuredData(baseLeoAdminUrl+"/cdp/analytics360/event-matrix",c,function(b){0===b.httpCode&&""===b.errorMessage?(b=b.data,renderMatrixChart("Event Matrix Report","profile_event_matrix",
b.xLabels,b.yLabels,b.dataList)):LeoAdminApiUtil.logErrorPayload(b)})},loadJourneyReportForProfile=function(a){var d=currentJourneyMapId||"id_default_journey",c={};$.each(a.eventStatistics,function(g,k){var m=g.indexOf("-");if(0>m)c[d]="object"===typeof c[d]?c[d]:{},c[d][g]=k;else{var h=g.substring(0,m).trim();g=g.substring(m+1);c[h]="object"===typeof c[h]?c[h]:{};c[h][g]=k;c[""]="object"===typeof c[""]?c[""]:{};c[""][g]="number"===typeof c[""][g]?c[""][g]+k:k}});renderProfileBarChart("profileReferrerChannels",
a.referrerChannels);a.journeyEventStats=c;var b=window.viewProfileId;loadJourneyMapList(!1,function(g,k){$("span.profileJourneyName").text(k);renderProfileBarChart("profileEventStatsChart",c[g]);loadProfileEventMatrix(b,g);setTimeout(function(){loadProfileEventDailyReportUnit()},800)},!0,function(g,k){$("span.profileJourneyName").text(k);renderProfileBarChart("profileEventStatsChart",c[g]);loadProfileEventMatrix(b,g);setTimeout(function(){window.profileTimeseriesChart=!1;$("#timeseriesProfileEventChart").empty();
loadProfileEventDailyReportUnit()},3E3)})},loadProfileDataJourneyReport=function(){setTimeout(function(){$("#event_journey_funnel").empty();loadEventJourneyProfile(viewProfileId,currentJourneyMapId)},700);loadTouchpointFlowForProfile(viewProfileId,currentJourneyMapId);loadTouchpointHubReportForProfile(viewProfileId,currentJourneyMapId)},loadTouchpointHubReportForProfile=function(a,d){$("#profileObserverChart").html('\x3cdiv class\x3d"loader"\x3e\x3c/div\x3e');LeoAdminApiUtil.getSecuredData(baseLeoAdminUrl+
"/cdp/analytics360/touchpoint-hub-report",{profileId:a,journeyMapId:d},function(c){if(0===c.httpCode&&""===c.errorMessage)if(c=c.data,0<c.length){var b=[],g=[];c.forEach(function(k){b.push(k.name);g.push(k.eventCount)});renderHorizontalBarChart("profileObserverChart",b,g)}else $("#profileObserverChart").html('\x3ch4 class\x3d"alert alert-info" role\x3d"alert"\x3e No data available \x3c/h4\x3e');else LeoAdminApiUtil.logErrorPayload(c)})},loadProfileTopTouchpoints=function(){renderProfileTouchpointChart(viewProfileId,
-1,0,20)},renderProfileTouchpointChart=function(a,d,c,b){$("#profileTouchpointChart").html('\x3cdiv class\x3d"loader"\x3e\x3c/div\x3e');LeoAdminApiUtil.getSecuredData(baseLeoAdminUrl+"/cdp/analytics360/touchpoint-report",{profileId:a,touchpointType:d,startIndex:c,numberResult:b},function(g){if(0===g.httpCode&&""===g.errorMessage){g=g.data;var k=$("#engaged_touchpoint_list");if(0<g.length){k.empty();var m=[],h=[];g.forEach(function(f){var e=f.touchpoint,n=textTruncate(e.name,60);m.push(n);h.push(f.eventCount);
n=_.template($("#engaged-touchpoint-tpl").html());e.updatedAt=moment.utc(e.updatedAt).local().format("YYYY-MM-DD HH:mm:ss");e.truncatedUrl=textTruncate(e.url,120);""===e.locationCode&&(e.cssShowLocationCode="none");e.eventCount=f.eventCount;k.append(n(e))});renderHorizontalBarChart("profileTouchpointChart",m,h)}else $("#profileTouchpointChart").html("\x3ch4\x3e No data available \x3c/h4\x3e")}else LeoAdminApiUtil.logErrorPayload(g)})},renderTaxonomyTextData=function(a){var d=$("#profileInSegments"),
c=a.inSegments.length;a.inSegments.forEach(function(e){c--;var n=0<c,p="Segment: "+e.name;e="\x3cb\x3e"+$("\x3ca/\x3e").attr("title",p).attr("href","#calljs-leoCdpRouter('Segment_Details','"+e.id+"')").text(e.name)[0].outerHTML+"\x3c/b\x3e";n&&(e+="; ");d.append(e)});var b=$("#profileInJourneyMaps"),g=a.inJourneyMaps.length;a.inJourneyMaps.forEach(function(e){g--;var n=0<g,p="Journey Map: "+e.name+" \x3d\x3e At Stage: "+journeyStagesMap[e.indexScore],r=e.name;p="\x3cb\x3e"+$("\x3ca/\x3e").attr("title",
p).attr("href","#calljs-leoCdpRouter('Data_Journey_Map','"+e.id+"')").html(r)[0].outerHTML+"\x3c/b\x3e";n&&(p+="; ");""===e.queryHashedId&&b.append(p)});var k=$("#profileInAccounts"),m=a.inAccounts.length;a.inAccounts.forEach(function(e){m--;var n=0<m;e="\x3cb\x3e"+$("\x3ca/\x3e").attr("href","#calljs-leoCdpRouter('Account_Details','"+e.id+"')").html(e.name)[0].outerHTML+"\x3c/b\x3e";n&&(e+="; ");k.append(e)});var h=$("#profileDataLabels"),f=a.dataLabels.length;a.dataLabels.forEach(function(e){f--;
e="\x3cb\x3e"+e+"\x3c/b\x3e";0<f&&(e+="; ");h.append(e)})},loadEventJourneyProfile=function(a,d){var c=$("#event_journey_funnel").parent().width()-15;a={profileId:a,journeyMapId:d};d=baseLeoAdminUrl+"/cdp/analytics360/event-report/journey-profile";$("#event_journey_funnel_info").html('\x3cdiv class\x3d"loader"\x3e\x3c/div\x3e');LeoAdminApiUtil.getSecuredData(d,a,function(b){if(0===b.httpCode&&""===b.errorMessage){var g=b.data.total,k=0,m=b.data.funnelIndex;b.data.scoreCX&&(k=b.data.scoreCX.sentimentScore);
var h=$("#profileJourneyFunnel");90<=m?h.attr("class","progress-bar progress-bar-striped active progress-bar-danger"):50<=m&&90>m?h.attr("class","progress-bar progress-bar-striped active progress-bar-success"):h.attr("class","progress-bar progress-bar-striped active progress-bar-primary");$("#profileJourneySentimentScore").text(k);$("#profileJourneyFunnelValue").text(m);h.attr("aria-valuenow",m).css("width",m+"%");$("#profile_funnel_report \x3e div").removeClass("funnel-stage-active");k=Math.floor(m/
10);for(m=1;m<=k;m++)$("#profile_funnel_stage_"+m).addClass("funnel-stage-active");0==g?($("#event_journey_funnel_info").html('\x3cdiv class\x3d"alert alert-info" role\x3d"alert" \x3eNo data available\x3c/div\x3e').show(),$("#journeyFlowChart").hide()):($("#event_journey_funnel_info").empty().hide(),$("#journeyFlowChart").show(),(new FunnelGraph({container:"#event_journey_funnel",gradientDirection:"horizontal",data:{labels:journeyLabel5A,subLabels:["Event Data Point"],colors:[["#9ACAEF","#67B0E9",
"#309EF3"]],values:b.data.reportData},displayPercent:!0,direction:"horizontal",width:c,height:330,subLabelValue:"raw"})).draw())}else LeoAdminApiUtil.logErrorPayload(b)})},loadTouchpointFlowForProfile=function(a,d){var c=$("#profileTouchpointFlow");a={profileId:a,journeyMapId:d,beginFilterDate:"",endFilterDate:""};d=baseLeoAdminUrl+"/cdp/analytics360/touchpoint-flow-report";c.html('\x3cdiv class\x3d"loader"\x3e\x3c/div\x3e');LeoAdminApiUtil.getSecuredData(d,a,function(b){0===b.httpCode&&""===b.errorMessage?
(c.empty(),renderDirectedGraph("profileTouchpointFlow",{nodes:b.data.nodes,edges:b.data.edges},b.data.rootNodeId)):LeoAdminApiUtil.logErrorPayload(b)})},profileInfoLoadProcessor=function(a){viewProfileId=a.id;a.fullName=""!==a.firstName||""!==a.lastName?a.firstName+" "+a.lastName:"Web Visitor";a.typeAsText=a.typeAsText.replaceAll("_"," ");0>=a.age&&(a.age="-");""===a.livingLocation&&(a.livingLocation="_");""===a.primaryPhone&&(a.primaryPhone="-");""===a.firstName&&(a.firstName="-");""===a.lastName&&
(a.lastName="-");""===a.primaryEmail&&(a.primaryEmail="-");if("number"===typeof a.jobType){var d=a.jobType;a.jobTypeAsString=0===d?"UNSKILLED AND NON-RESIDENT":1===d?"UNSKILLED AND RESIDENT":2===d?"SKILLED":3===d?"HIGHLY SKILLED":"-"}a.funnelStage=a.funnelStage?a.funnelStage.toUpperCase():"-";a.lastTrackingEvent?(a.lastTrackingEvent.createdAt=moment.utc(a.lastTrackingEvent.createdAt).local().format("YYYY-MM-DD HH:mm:ss"),a.lastTrackingEvent.fingerprintId=a.lastTrackingEvent.fingerprintId?a.lastTrackingEvent.fingerprintId:
"-",a.lastTrackingEvent&&a.lastTrackingEvent.refTouchpoint&&(a.lastTrackingEvent.refTouchpoint.name=decodeURISafe(a.lastTrackingEvent.refTouchpoint.name))):a.lastTrackingEvent.createdAt="-";a.lastTouchpoint.name=decodeURI(a.lastTouchpoint.name);return a},loadProfileListByFilter=function(a,d,c,b,g,k){var m=[{data:"id"},{data:"firstName"},{data:"primaryEmail"},{data:"primaryPhone"},{data:"lastTouchpoint"},{data:"dataQualityScore"},{data:"totalLeadScore"},{data:"totalCLV"},{data:"updatedAt"},{data:"status"}],
h=getUserSession();return h?$(b).DataTable({lengthMenu:[[30,50,60],[30,50,60]],processing:!0,serverSide:!0,searching:!1,ordering:!0,serverMethod:"POST",ajax:{url:baseLeoAdminUrl+"/cdp/profiles/filter",contentType:"application/json",beforeSend:function(f){$(c).show();$(d).hide();f.setRequestHeader("leouss",h)},data:function(f){f=g(f);f.order.map(function(e){e.field=m[e.column]?m[e.column].data:""});return JSON.stringify(f)},dataSrc:function(f){var e=f.canInsertData,n=f.canEditData,p=f.canDeleteData;
$(b).data("canInsertData",e);$(b).data("canEditData",n);$(b).data("canDeleteData",p);"function"===typeof k&&k(f);$(c).hide();$(d).show();return f.data}},columnDefs:[{render:function(f,e,n){e="";"function"===typeof window[a]&&(e=getTableRowCheckedBox(a,b,f,!1));return e},targets:0,orderable:!1},{render:function(f,e,n){f="Web Visitor";var p="datatable_text no_contact";e="Data Profile of ";0<n.firstName.length||0<n.lastName.length?(p=n.firstName+" "+n.lastName,f=textTruncate(p,30),e+=p,p="datatable_text has_contact"):
e+=f;n.dataVerification&&(f='\x3ci class\x3d"fa fa-check-circle-o" aria-hidden\x3d"true" title\x3d"Verified Data" \x3e\x3c/i\x3e '+f,e="Verified "+e);return'\x3ca class\x3d"'+p+'" title\x3d"'+e+"\" href\x3d\"#calljs-leoCdpRouter('Customer_Profile_Info','"+(n.id+"')\" \x3e")+f+"\x3c/a\x3e"},targets:1,orderable:!1},{render:function(f,e,n){return"string"===typeof f?'\x3cdiv class\x3d"datatable_text "\x3e\x3ca title\x3d"'+(f+"\" href\x3d\"#calljs-leoCdpRouter('Customer_Profile_Info','"+(n.id+"')\" \x3e")+
textTruncate(f,40)+"\x3c/a\x3e\x3c/div\x3e"):"-"},targets:2,orderable:!1},{render:function(f,e,n){return"string"===typeof f?'\x3cdiv class\x3d"datatable_text"\x3e\x3ca title\x3d"'+(f+"\" href\x3d\"#calljs-leoCdpRouter('Customer_Profile_Info','"+(n.id+"')\" \x3e")+textTruncate(f,30)+"\x3c/a\x3e\x3c/div\x3e"):"-"},targets:3,orderable:!1},{render:function(f,e,n){"object"!==typeof n.lastTouchpoint&&(n.lastTouchpoint={name:"No data"});return'\x3cdiv style\x3d"font-size:11.4px;" title\x3d"'+n.lastTouchpoint.name+
'"\x3e'+textTruncate(n.lastTouchpoint.name,50)+"\x3c/div\x3e"},targets:4,orderable:!1},{render:function(f,e,n){e=(new Number(f)).toLocaleString();return 100>=f?'\x3cdiv class\x3d"datatable_text text-center"\x3e'+e+" \x3c/div\x3e":100<f&&250>f?'\x3cdiv class\x3d"highlight_text text-center profile_medium_score" \x3e'+e+"\x3c/div\x3e":'\x3cdiv class\x3d"highlight_text text-center profile_high_score"  \x3e'+e+"\x3c/div\x3e"},targets:5},{render:function(f,e,n){e=(new Number(f)).toLocaleString();return 20>
f?'\x3cdiv class\x3d"datatable_text text-center"\x3e'+e+" \x3c/div\x3e":20<=f&&100>f?'\x3cdiv class\x3d"highlight_text text-center profile_medium_score" \x3e'+e+"\x3c/div\x3e":100<=f?'\x3cdiv class\x3d"highlight_text text-center profile_high_score" \x3e'+e+"\x3c/div\x3e":'\x3cdiv class\x3d"highlight_text text-center" style\x3d"color:#404040!important;font-size:0.8em!important" \x3e'+e+" \x3c/div\x3e"},targets:6},{render:function(f,e,n){e=(new Number(f)).toLocaleString();return 20>f?'\x3cdiv class\x3d"datatable_text text-center"\x3e'+
e+" \x3c/div\x3e":20<=f&&100>f?'\x3cdiv class\x3d"highlight_text text-center profile_medium_score" \x3e'+e+"\x3c/div\x3e":100<=f?'\x3cdiv class\x3d"highlight_text text-center profile_high_score" \x3e'+e+" \x3c/div\x3e":'\x3cdiv class\x3d"highlight_text text-center" style\x3d"color:#404040!important;font-size:0.8em!important" \x3e'+e+" \x3c/div\x3e"},targets:7},{render:function(f,e,n){return f?'\x3cdiv class\x3d"small text-center" style\x3d"color:#3300ff;width:74px" \x3e'+moment.utc(f).local().format("YYYY-MM-DD HH:mm:ss")+
"\x3c/div\x3e":"-"},targets:8},{render:function(f,e,n){e="ACTIVE";0===f?e="INACTIVE":-1===f?e="INVALID":-4===f&&(e="REMOVED");return'\x3cdiv class\x3d"small text-center" style\x3d"color:#3300ff!important" title\x3d"The profile status is '+e+'"\x3e'+e+"\x3c/div\x3e"},targets:9},{render:function(f,e,n){f='\x3ca class\x3d"control" title\x3d"Profile Report" href\x3d"#calljs-leoCdpRouter(\'Customer_Profile_Info\',\''+(n.id+'\')" \x3e \x3ci class\x3d"fa fa-info-circle" aria-hidden\x3d"true"\x3e\x3c/i\x3e View\x3c/a\x3e');
$(b).data("canEditData")&&(f+=' \x3cbr\x3e\x3ca class\x3d"control" title\x3d"Profile Editor" href\x3d"#calljs-leoCdpRouter(\'Customer_Profile_Editor\',\''+(n.id+'\')" \x3e \x3ci class\x3d"fa fa-pencil-square-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e Edit\x3c/a\x3e'));return f},targets:10}],columns:m,order:[[8,"desc"]]}):!1};