'use strict';function profileAddNewTextHashSet(a){var e=$('\x3cli class\x3d"list-group-item" \x3e\x3cdiv class\x3d"row" \x3e\x3cdiv class\x3d"col-md-11" \x3e\x3cinput class\x3d"form-control" type\x3d"text" placeholder\x3d"Value" data-fieldholder\x3d"hashset" data-fieldtype\x3d"string" autocomplete\x3d"off"\x3e\x3c/div\x3e\x3cdiv class\x3d"col-md-1" \x3e\x3ch4 onclick\x3d"$(this).parent().parent().parent().remove()" \x3e\x3ci class\x3d"fa fa-times-circle delete-item-btn" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/h4\x3e \x3c/div\x3e\x3c/div\x3e\x3c/li\x3e');
$('p[data-field\x3d"'+a+'"] \x3e ul').append(e);e.effect("highlight",{},3600);e.find("input:first").focus()}function profileAddNewCustomField(a){var e=$(loadCustomFieldEditor(a,"",""));$('p[data-field\x3d"'+a+'"] \x3e ul').append(e);e.effect("highlight",{},3600);e.find("input:first").focus()}
function handleProfileListFiltersBy(a,e){$("#profile_filter_inputs \x3e .form-control").val("").hide();$(e).show();$("#profile_filter_input_label").text($(a).text()).show();$("#main_search_profile").val("");showDeleteNotActiveProfile()}
var addNewHashMapItem=function(a,e){var c=a+"_"+(new Date).getTime(),b=$("#"+a),g=Object.assign({},e);b.find("option:selected").each(function(){var l=$(this).val();delete g[l]});a=$(loadHashMapSelector(c,a,g,"",""));b.find("ul.list-group").append(a);a.effect("highlight",{},4E3)};function removeHashMapItem(a){$(a).parent().parent().remove()}
function loadHashMapSelector(a,e,c,b,g){var l='\x3cdiv class\x3d"col-md-3" \x3e \x3cselect class\x3d"form-control" id\x3d"key_'+a+'" name\x3d"'+e+'" \x3e';_.forOwn(c,function(n,k){n='\x3coption name\x3d"'+e+'" value\x3d"'+k+'"\x3e '+k.toUpperCase()+" \x3c/option\x3e";k===b&&(n='\x3coption name\x3d"'+e+'" selected value\x3d"'+k+'"\x3e '+k.toUpperCase()+" \x3c/option\x3e");l+=n});l+=" \x3c/select\x3e \x3c/div\x3e";""===b&&$("#key_"+a).find("option:first").attr("selected","selected");return'\x3cli id\x3d"item_'+
a+'" class\x3d"list-group-item" \x3e\x3cdiv class\x3d"row" \x3e '+l+('\x3cdiv class\x3d"col-md-8" \x3e\x3cinput id\x3d"value_'+a+'" value\x3d"'+(g?g:"")+'" class\x3d"form-control" type\x3d"text" placeholder\x3d"Value" data-fieldholder\x3d"hashmap" data-fieldtype\x3d"string" autocomplete\x3d"off"\x3e\x3c/div\x3e\x3cdiv title\x3d"Delete" class\x3d"col-md-1" onclick\x3d"removeHashMapItem(this)" \x3e \x3ch4\x3e\x3ci class\x3d"fa fa-times-circle delete-item-btn" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/h4\x3e \x3c/div\x3e \x3c/div\x3e\x3c/li\x3e')}
function loadCustomFieldEditor(a,e,c){return'\x3cli class\x3d"list-group-item" \x3e\x3cdiv class\x3d"row" \x3e \x3cdiv class\x3d"col-md-3" \x3e \x3cinput type\x3d"text" class\x3d"form-control custom_field_name" placeholder\x3d"Field Name" value\x3d"'+(e+'"\x3e \x3c/div\x3e\x3cdiv class\x3d"col-md-8" \x3e\x3cinput class\x3d"form-control custom_field_value" type\x3d"text" value\x3d"')+((c?c:"")+'" placeholder\x3d"Field Value" data-fieldholder\x3d"hashmap" data-fieldtype\x3d"string" autocomplete\x3d"off"\x3e\x3c/div\x3e\x3cdiv title\x3d"Delete" class\x3d"col-md-1" onclick\x3d"removeHashMapItem(this)" \x3e \x3ch4\x3e\x3ci class\x3d"fa fa-times-circle delete-item-btn" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/h4\x3e \x3c/div\x3e \x3c/div\x3e\x3c/li\x3e')}
const loadProfileDataIntoDOM=function(a,e,c,b,g){var l=!1,n={};"string"===typeof e?(l="/cdp/profile/get",n.id=e):"string"===typeof c&&(l="/cdp/profile/get-by-crm-id",n.crmRefId=c);!1===l?(console.error("loadProfileDataIntoDOM is failed, profileId or crmRefId must be a valid string! "),console.log("urlStr "+l),console.log("params "+n)):LeoAdminApiUtil.callPostAdminApi(baseLeoAdminUrl+l,n,function(k){if(0===k.httpCode&&""===k.errorMessage){var f=k.canInsertData,d=k.canDeleteData;k.canEditData||$("button.data-control-edit").attr("disabled",
"disabled");d||$("button.data-control-delete").attr("disabled","disabled");f||$("button.data-control-insert").attr("disabled","disabled");LeoCdpAdmin.routerContext.dataObject="function"===typeof b?b(k.data):k.data;$("#data_model_holder").find("*[data-field]").each(function(){var h=$(this).attr("type"),p=$(this).data("fieldholder"),t=$(this).data("fieldtype"),v=$(this).data("field"),w=v.split(".");if(1===w.length){var m=LeoCdpAdmin.routerContext.dataObject[w[0]];if("html"===p){if("int"===t||"float"===
t)if(void 0===m||null==m)m="-";else{if(m=(new Number(m)).toLocaleString(),NaN==m||"NaN"==m)m="-"}else"date"===t?m=m?moment.utc(m).local().format("YYYY-MM-DD"):"-":"date_time"===t?m=m?moment.utc(m).local().format("YYYY-MM-DD HH:mm:ss"):"-":"phone"===t&&(m=m?m.replace(/\D/g,""):"-");$(this).html(m)}else if("percentage"===p)$(this).html(m).parent().attr("aria-valuenow",m).css("width",m+"%"),h=$(this).parent(),h.attr("title",m+"% "+h.attr("title"));else if("url"===p)$(this).html(checkToAddUrlValueToDOM(m));
else if("locationcode"===p)h=$("\x3ca/\x3e").attr("href","javascript:").html(textTruncate(m,80)).click(function(){var q=LeoCdpAdmin.routerContext.dataObject.locationCode;0===q.indexOf("http")?eModal.iframe(q,"Location"):q&&""!=q.trim()&&eModal.iframe("https://plus.codes/"+q,m)}),$(this).html(h);else if("inputvalue"===p)"checkbox"===h?m&&$(this).attr("checked","checked"):"radio"===h?m==$(this).val()&&$(this).attr("checked","checked"):$(this).val(m);else if("html_hashmap"===p){var r=' \x3cul class\x3d"list-group" \x3e ';
_.forOwn(m,function(q,u){u=u.trim();a?(q=loadHashMapSelector(v+"_"+u,v,"socialMediaProfiles"===v?SocialMediaIconMap:"personalContacts"===v?PersonalContactIconsMap:ContactIconsMap,u,q),r+=q):(u="socialMediaProfiles"===v?SocialMediaIconMap[u]?SocialMediaIconMap[u]:!1:"personalContacts"===v?PersonalContactIconsMap[u]?PersonalContactIconsMap[u]:!1:ContactIconsMap[u]?ContactIconsMap[u]:!1,!1===u&&(u=' \x3ci class\x3d"fa fa-info-circle" aria-hidden\x3d"true"\x3e\x3c/i\x3e '),r=r+'\x3cli class\x3d"list-group-item" \x3e '+
u+checkToAddUrlValueToDOM(q)+"\x3c/li\x3e")});r+=" \x3c/ul\x3e ";$(this).html(r)}else"html_hashset"===p?(r='\x3cul class\x3d"list-group" \x3e',_.forOwn(m,function(q,u){q=a?'\x3cdiv class\x3d"col-md-11" \x3e\x3cinput value\x3d"'+q+'" class\x3d"form-control" type\x3d"text" placeholder\x3d"Value" data-fieldholder\x3d"hashset" data-fieldtype\x3d"string" autocomplete\x3d"off"\x3e\x3c/div\x3e\x3cdiv class\x3d"col-md-1" \x3e\x3ch4 onclick\x3d"$(this).parent().parent().parent().remove()" \x3e\x3ci class\x3d"fa fa-times-circle delete-item-btn" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/h4\x3e\x3c/div\x3e':
"system_user"===t?' \x3cdiv class\x3d"col-md-12" \x3e \x3cb\x3e \x3ci class\x3d"fa fa-info-circle" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/b\x3e '+buildSystemUserInfoLink(q)+"\x3c/div\x3e":' \x3cdiv class\x3d"col-md-12" \x3e \x3cb\x3e \x3ci class\x3d"fa fa-info-circle" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/b\x3e '+checkToAddUrlValueToDOM(q)+"\x3c/div\x3e";r=r+'\x3cli class\x3d"list-group-item" \x3e \x3cdiv class\x3d"row" \x3e '+q+"\x3c/div\x3e\x3c/li\x3e"}),r+="\x3c/ul\x3e",$(this).html(r)):"html_list_key_value"===
p?(r='\x3cul class\x3d"list-group" \x3e',h=Object.keys(m),h.sort(),h.forEach(function(q){r=r+'\x3cli class\x3d"list-group-item" \x3e '+q+'  \x3ci class\x3d"fa fa-arrow-right" aria-hidden\x3d"true"\x3e\x3c/i\x3e  '+m[q]+"\x3c/li\x3e"}),r+="\x3c/ul\x3e",$(this).html(r)):"html_custom_field"===p&&(r=' \x3cul class\x3d"list-group" \x3e ',_.forOwn(m,function(q,u){u=u.trim();a?(q=loadCustomFieldEditor(v+"_"+u,u,q),r+=q):(r+='\x3cli class\x3d"list-group-item" \x3e',r+='\x3cdiv class\x3d"row" \x3e \x3cdiv class\x3d"col-md-3"\x3e \x3cb\x3e '+
u+'\x3c/b\x3e \x3ci  style\x3d"font-size:20px" class\x3d"fa fa-equals" aria-hidden\x3d"true"\x3e\x3c/i\x3e \x3c/div\x3e',r+='\x3cdiv class\x3d"col-md-9"\x3e'+q+"\x3c/div\x3e \x3c/div\x3e\x3c/li\x3e")}),r+=" \x3c/ul\x3e ",$(this).html(r))}else if(2===w.length){var x=LeoCdpAdmin.routerContext.dataObject[w[0]]||{};m=x[w[1]]||"";"html"===p?$(this).html(m):"date"===t?(m=moment.utc(m).local().format("YYYY-MM-DD"),$(this).html(m)):"date_time"===t?(m=moment.utc(m).local().format("YYYY-MM-DD HH:mm:ss"),$(this).html(m)):
"inputvalue"===p?$(this).val(m):"url"===p?$(this).html(checkToAddUrlValueToDOM(m)):"eventlocation"===p&&(h=$("\x3ca/\x3e").attr("href","javascript:").html(m).click(function(){var q=x.locationCode||"";q&&""!=q.trim()&&eModal.iframe("https://plus.codes/"+q,m)}),$(this).html(h))}else 3===w.length&&(x=LeoCdpAdmin.routerContext.dataObject[w[0]]||{},m=(x[w[1]]||{})[w[2]]||"","html"===p?$(this).html(m):"date"===t?(m=moment.utc(m).local().format("YYYY-MM-DD"),$(this).html(m)):"date_time"===t?(m=moment.utc(m).local().format("YYYY-MM-DD HH:mm:ss"),
$(this).html(m)):"inputvalue"===p?$(this).val(m):"url"===p?$(this).html(checkToAddUrlValueToDOM(m)):"eventlocation"===p&&(h=$("\x3ca/\x3e").attr("href","javascript:").html(m).click(function(){var q=x.locationCode||"";q&&""!=q.trim()&&eModal.iframe("https://plus.codes/"+q,m)}),$(this).html(h)))}).promise().done(function(){"function"===typeof g&&g()})}else LeoAdminApiUtil.logErrorPayload(k)})};
var updateProfileDataToModel=function(a,e,c){$("#data_model_holder").find("*[data-field]").each(function(){var b=$(this).data("field"),g=$(this).data("fieldholder"),l=$(this).data("fieldtype");g="checkbox"===$(this).attr("type")?$(this).prop("checked"):"html"===g?$(this).html().trim():$(this).val();"int"===l?g=parseInt(g.replace(/,/g,"")):"float"===l?g=parseFloat(g.replace(/,/g,"")):"date"===l?g=new Date(g):"tel"===l&&(g=g.replace(/\D/g,""));b=b.split(".");1===b.length?LeoCdpAdmin.routerContext.dataObject[b[0]]=
g:2===b.length&&(LeoCdpAdmin.routerContext.dataObject[b[0]][b[1]]=g)}).promise().done(function(){LeoAdminApiUtil.callPostAdminApi(a,e,function(b){0===b.httpCode&&""===b.errorMessage?"function"===typeof c&&c(b):LeoAdminApiUtil.logErrorPayload(b)})})};window.profileTimeseriesChart=!1;
var loadProfileEventDailyReportUnit=function(a,e){var c=getDateFilterValues();c.profileId=a;a=c.beginFilterDate;$("#eventDataFromDate").text((new moment(a)).format("YYYY-MM-DD HH:mm:ss"));a=c.endFilterDate;$("#eventDataToDate").text((new moment(a)).format("YYYY-MM-DD HH:mm:ss"));$("#profile_event_report_loader").show();LeoAdminApiUtil.getSecuredData(baseLeoAdminUrl+"/cdp/analytics360/event-report/profile",c,function(b){$("#profile_event_report_loader").hide();0===b.httpCode&&""===b.errorMessage?(!0===
e&&"object"===typeof window.profileTimeseriesChart?renderTimeseriesChart("timeseriesProfileEventChart",b.data,!0,profileTimeseriesChart,!0):window.profileTimeseriesChart=renderTimeseriesChart("timeseriesProfileEventChart",b.data,!1,!1,!0),initLoadTrackingEventsOfProfile()):LeoAdminApiUtil.logErrorPayload(b)})};function handleProfileTabBehavioralInfo(){$("#event_flow_tabs a:first").click();$("#event_flow_vertital_tabs div:first").addClass("active")}
function handleProfileTabExtInfo(){$("#profile_ext_info_tabs a:first").click();$("#profile_ext_info_vertital_tabs div:first").addClass("active")}
const loadRecommendedContentsForProfile=function(a,e,c){var b=systemConfig.leo_recommender.service_max_item_for_profile,g=$("#recommended_content_list").empty().html('\x3cdiv class\x3d"loader"\x3e\x3c/div\x3e');LeoAdminApiUtil.getSecuredData("/cdp/profile/recommended-contents",{profileId:a,startIndex:0,numberResult:b},function(l){l=l.data;var n=l.length;0<n?g.empty():g.empty().html('\x3cdiv class\x3d"list-group-item" \x3e No data available \x3c/div\x3e');_.forEach(l,function(k){var f=_.template($("#recommended-content-tpl").html());
k.indexScore=g.find("\x3e div").length+1;k.updatedAt=moment.utc(k.updatedAt).local().format("YYYY-MM-DD HH:mm:ss");var d=k.content.headlineImageUrl;k.content.headlineImageUrl=null==d||""===d?"https://cdn-icons-png.flaticon.com/128/9872/9872434.png":d;k.content.landingPageUrl=null==k.content.fullUrl||""===k.content.fullUrl?k.content.shortLinkUrl:k.content.fullUrl;k=f(k);g.append(k)});!0===e&&new Sortable(g[0],{swap:!0,swapClass:"sortable_highlighted_item",animation:150,onEnd:function(k){var f=k.newIndex,
d=k.swapItem;k=$(k.item).data("key");d=$(d).data("key");var h=parseInt($("#rank_content_"+k).text());f+=1;$("#rank_content_"+k).text(f);$("#rank_content_"+d).text(h);var p={};$("#recommended_content_list span.rank_info").each(function(t){t=$(this).data("key");var v=parseInt($(this).text());p[t]=v;console.log(p)}).promise().done(function(){var t={rankingInfoList:JSON.stringify(p),graphName:"cdp_content_graph",profileId:a,recommendationModel:1};LeoAdminApiUtil.callPostAdminApi("/cdp/profile/update-item-ranking",
t,function(v){v.data?iziToast.success({title:"Update Content Content Ranking",timeout:3E3,message:"Data is saved successfully!"}):LeoAdminApiUtil.logErrorPayload(v)})})}});"function"===typeof c&&c(n)})};
var loadRecommendedProductsForProfile=function(a,e,c){var b=systemConfig.leo_recommender.service_max_item_for_profile,g=$("#recommended_product_list").empty().html('\x3cdiv class\x3d"loader"\x3e\x3c/div\x3e');LeoAdminApiUtil.getSecuredData("/cdp/profile/recommended-products",{profileId:a,startIndex:0,numberResult:b},function(l){l=l.data;var n=l.length;0<n?g.empty():g.empty().html('\x3cdiv class\x3d"list-group-item" \x3e No data available \x3c/div\x3e');var k=_.template($("#recommended-product-tpl").html());
_.forEach(l,function(f){var d=f.product;if("object"===typeof d){f.indexScore=g.find("\x3e div").length+1;f.updatedAt=moment.utc(f.updatedAt).local().format("YYYY-MM-DD HH:mm:ss");d.offerPrice=d.salePrice*(1-f.discount);d.discount=100*f.discount;d.keywordsText=textTruncate(d.keywords.join(", "),6555);var h=d.headlineImageUrl;d.headlineImageUrl=null==h||""===h?NO_IMAGE_URL:h;f=k(f);g.append(f)}});!0===e&&new Sortable(g[0],{swap:!0,swapClass:"sortable_highlighted_item",animation:150,onEnd:function(f){var d=
f.newIndex,h=f.swapItem;f=$(f.item).data("key");h=$(h).data("key");var p=parseInt($("#rank_product_"+f).text());d+=1;$("#rank_product_"+f).text(d);$("#rank_product_"+h).text(p);var t={};g.find("span.rank_info").each(function(v){v=$(this).data("key");var w=parseInt($(this).text());t[v]=w;console.log(t)}).promise().done(function(){var v={rankingInfoList:JSON.stringify(t),graphName:"cdp_product_graph",profileId:a,recommendationModel:1};LeoAdminApiUtil.callPostAdminApi("/cdp/profile/update-item-ranking",
v,function(w){w.data?iziToast.success({title:"Product Item Ranking",timeout:2200,message:"Data is saved successfully!"}):LeoAdminApiUtil.logErrorPayload(w)})})}});$("input.autoselectall").on("click",function(){$(this).select()});"function"===typeof c&&c(n)})},loadPurchasedItems=function(){LeoAdminApiUtil.getSecuredData("/cdp/profile/get-purchased-items",{profileId:viewProfileId,startIndex:0,numberResult:100},function(a){var e=$("#purchased_items_list");a=a.data;0<a.length&&e.empty();_.forEach(a,function(c){var b=
_.template($("#purchased-product-tpl").html());c.indexScore=e.find("\x3e div").length+1;c.createdAt=moment.utc(c.createdAt).local().format("YYYY-MM-DD HH:mm:ss");c=b(c);e.append(c)})})},loadFinancialEventList=function(){var a=$("#financial_event_list"),e=LeoCdpAdmin.routerContext.dataObject.financeCreditEvents;0<e.length&&a.empty();_.forEach(e,function(c){var b=_.template($("#financial-event-tpl").html());"good"===c.risk?(c.riskIcon="fa-thumbs-o-up",c.riskIconColor="#45D50F"):(c.riskIcon="fa-thumbs-o-down",
c.riskIconColor="#F40209");c.risk=c.risk.toUpperCase();c=b(c);a.append(c)})},emptyInfo='\x3cbr\x3e \x3cdiv style\x3d"font-size:24px;" class\x3d"text-center" \x3e No data available \x3ci class\x3d"fa fa-exclamation" aria-hidden\x3d"true"\x3e\x3c/i\x3e \x3c/div\x3e \x3cbr\x3e',loadEventsInProfileIndex=0,loadEventsInProfileResult=25,callApiToGetTrackingEventsOfProfile=function(a,e){var c=$("#profile_activitiy_flow"),b=$("#profile_activitiy_flow_container");0===loadEventsInProfileIndex&&c.empty().css("max-height",
"660px");if(0<c.find("li.all-loaded").length)console.log("Loaded all data for loadEventsInProfile"),c.show();else{b.hide();var g=$("#profile_activitiy_flow_loader").show();LeoAdminApiUtil.getSecuredData("/cdp/profile/tracking-events",{profileId:viewProfileId,searchValue:a,startIndex:loadEventsInProfileIndex,numberResult:loadEventsInProfileResult},function(l){g.hide();0===l.data.length&&(0===loadEventsInProfileIndex?(c.html(emptyInfo),$("#profileEventStatistics").html(emptyInfo)):(c.find("li:last-child").addClass("all-loaded"),
$("#profile_activitiy_flow_done").show(),$("#btn_loadMoreEvents").attr("disabled","disabled").attr("title","All data is loaded"),$("#btn_filterEvents").attr("disabled","disabled")));_.forEach(l.data,function(n){try{n.srcTouchpoint.name=textTruncate(decodeURI(n.srcTouchpoint.name),120);n.srcTouchpoint.truncatedUrl=textTruncate(n.srcTouchpoint.url,120);n.createdAt=moment.utc(n.createdAt).local().format("YYYY-MM-DD HH:mm:ss");0<_.size(n.eventData)?n.cssStyleDisplay="block":n.cssStyleDisplay="none";var k=
n.journeyStage,f=n.transactionValue,d=_.template($("#"+(4===k&&0<f?"conversion-event-tpl":3<=k?"action-event-tpl":2===k?"key-info-view-event-tpl":"view-event-tpl")).html())(n);c.append(d)}catch(h){console.error(h)}});b.show();"function"===typeof e?e():$("#profile_activitiy_flow_container").height(c.height()+20).scrollTop(0)})}},loadEventsInProfile=function(a,e,c){var b=$("#keywords_filter_events");!0===a&&(loadEventsInProfileIndex=0,$("#btn_loadMoreEvents").removeAttr("disabled").attr("Load more events"),
$("#btn_filterEvents").removeAttr("disabled"),$("#profile_activitiy_flow_done").hide(),!0===e&&b.val(""));a=b.val().trim();callApiToGetTrackingEventsOfProfile(a,c)};
function initLoadTrackingEventsOfProfile(){loadEventsInProfile(!0);$("#keywords_filter_events").keypress(function(a){"13"==(a.keyCode?a.keyCode:a.which)&&(0<$(this).val().trim().length?loadEventsInProfile(!1):loadEventsInProfile(!0))}).change(function(){$("#profile_activitiy_flow").empty();0<$(this).val().trim().length&&loadEventsInProfile(!0,!1)})}
function loadMoreEventsInProfile(){loadEventsInProfileIndex=$("#profile_activitiy_flow \x3e li").length;loadEventsInProfile(!1,!1,function(){$(document).scrollTop($(document).height()-100);var a=$("#profile_activitiy_flow_container").prop("scrollHeight")+200;$("#profile_activitiy_flow_container").scrollTop(a)})}var loadFeedbacksInProfileIndex=0,loadFeedbacksInProfileResult=120;
function loadFeedbackEventsInProfile(){$("#keyword_filter_feedbacks").val("");var a=$("#profile_feedback_flow");0===loadEventsInProfileIndex&&(a.empty(),$("#keywords_filter_events").change(function(){2>$(this).val().trim().toLowerCase().length&&$("#profile_activitiy_flow li").show()}));$("#profile_feedback_flow_loader").show();LeoAdminApiUtil.getSecuredData("/cdp/profile/feedback-events",{id:viewProfileId,startIndex:loadFeedbacksInProfileIndex,numberResult:loadFeedbacksInProfileResult},function(e){$("#profile_feedback_flow_loader").hide();
e=e.data;0===e.length?a.html('\x3cli class\x3d"list-group-item view" \x3e \x3cdiv class\x3d"list-group-item" \x3e No data available \x3c/div\x3e \x3c/li\x3e'):(a.css("height","650px"),_.forEach(e,function(c,b){c.createdAt=moment.utc(c.createdAt).local().format("YYYY-MM-DD HH:mm:ss");b=baseLeoObserverUrl+"/webform?\x26tplfbt\x3dSURVEY\x26tplid\x3d"+c.refTemplateId;c.previewUrl="SURVEY"===c.feedbackType?b:c.touchpointUrl;b=c.eventName;c.eventIcon="submit-feedback-form"===b?"fa-commenting-o":"submit-rating-form"===
b?"fa-star":"fa-smile-o";b=$("RATING"===c.feedbackType?"#feedback-rating-event-tpl":"#feedback-survey-event-tpl").html();b=_.template(b);a.append(b(c))}))});$("#keyword_filter_feedbacks").change(function(){2>$(this).val().trim().toLowerCase().length&&$("#profile_feedback_flow li").show()})}
function filterFeedbackEvent(){var a=$("#keyword_filter_feedbacks").val().trim().toLowerCase(),e=$("#profile_feedback_flow li");2<=a.length&&e.each(function(){0>$(this).find("h5.media-heading").text().toLowerCase().indexOf(a)?$(this).hide():$(this).show()})}function removeCurrentProfile(){var a=LeoCdpAdmin.routerContext.dataObject;a?LeoCdpAdmin.navFunctions.removeCustomerProfile(a.id):notifyErrorMessage("LeoCdpAdmin.routerContext.dataObject is NULL !")}
function deduplicateCurrentProfile(){var a=LeoCdpAdmin.routerContext.dataObject;a&&LeoAdminApiUtil.callPostAdminApi("/cdp/profile/deduplicate",{profileId:a.id},function(e){0===e.httpCode&&""===e.errorMessage?"number"===typeof e.data&&iziToast.info({title:"Merge Duplicate Profile",message:"Total processed profile: "+e.data}):LeoAdminApiUtil.logErrorPayload(e)})}
function removeSelectedProfiles(){$("#delete_callback").val("");$("#confirmDeleteDialog").modal({focus:!0});var a=Object.keys(window.selectedProfileIdMap||{}).length;0<a&&""===$("#filterProfileListByStatus").val()&&($("#deletedInfoTitle").text("Total Selected Profile \x3d "+a).show(),$("#deletedInfoMsg").text("Do you want to remove selected profiles?"),window.removeSelectedProfilesConfirmOk=function(){LeoAdminApiUtil.callPostAdminApi("/cdp/profiles/batch-update",selectedProfileIdMap,function(e){0===
e.httpCode&&""===e.errorMessage?(iziToast.info({title:"Customer Profile Management",message:"Total removed profile is "+e.data+" !"}),_.forOwn(selectedProfileIdMap,function(c,b){delete selectedProfileIdMap[b]}),resetProfileSearch()):LeoAdminApiUtil.logErrorPayload(e)})},$("#delete_callback").val("removeSelectedProfilesConfirmOk"))}
function deleteNotActiveProfile(){$("#delete_callback").val("");$("#deletedInfoTitle").empty().hide();var a=$("#filterProfileListByStatus option:selected").text().trim();$("#deletedInfoMsg").text("Do you want to delete ALL "+a+" ?");$("#confirmDeleteDialog").modal({focus:!0});window.deleteNotActiveProfileConfirmOk=function(){var e=$("#filterProfileListByStatus").val(),c=-4;""!=e&&(c=parseInt(e));LeoAdminApiUtil.callPostAdminApi("/cdp/profiles/delete-not-active",{status:c},function(b){0===b.httpCode&&
""===b.errorMessage?(iziToast.info({title:"Profile Data Management",message:"Deleted \x3cb\x3e"+b.data+"\x3c/b\x3e profiles"}),resetProfileSearch()):LeoAdminApiUtil.logErrorPayload(b)})};$("#delete_callback").val("deleteNotActiveProfileConfirmOk")}
function loadProfileJourneyFlowReport(a,e){$("#journeyFlowChart").parent().hide();""===e&&(e="id_default_journey");LeoAdminApiUtil.getSecuredData("/cdp/analytics360/journey-flow-report",{journeyMapId:e,profileId:a},function(c){if(0<c.errorCode)iziToast.error({title:"Data Journey Map",message:c.errorMessage});else{var b=c.data;c=b.defaultMetricName;var g=b.journeyStages,l=b.journeyLinks,n=b.journeyNodes;b=b.touchpointHubMap;$("#journeyFlowChart").parent().show();renderJourneyFlowChart("#journeyFlowChart",
c,g,n,l,b)}})}
const renderProfileBarChart=function(a,e){if(e){var c=[],b=[];$.each(e,function(g,l){c.push(g);b.push(l)});renderHorizontalBarChart(a,c,b)}else $("#"+a).html("\x3ch4\x3e No data available \x3c/h4\x3e")},loadProfileEventMatrix=function(a,e){var c={};c.profileId=a;c.journeyMapId=e;LeoAdminApiUtil.getSecuredData(baseLeoAdminUrl+"/cdp/analytics360/event-matrix",c,function(b){0===b.httpCode&&""===b.errorMessage?(b=b.data,renderMatrixChart("Event Matrix Report","profile_event_matrix",b.xLabels,b.yLabels,
b.dataList)):LeoAdminApiUtil.logErrorPayload(b)})},loadJourneyReportForProfile=function(a,e){var c=currentJourneyMapId||"id_default_journey",b={};$.each(e.eventStatistics,function(g,l){var n=g.indexOf("-");if(0>n)b[c]="object"===typeof b[c]?b[c]:{},b[c][g]=l;else{var k=g.substring(0,n).trim();g=g.substring(n+1);b[k]="object"===typeof b[k]?b[k]:{};b[k][g]=l;b[""]="object"===typeof b[""]?b[""]:{};b[""][g]="number"===typeof b[""][g]?b[""][g]+l:l}});renderProfileBarChart("profileReferrerChannels",e.referrerChannels);
loadJourneyMapList(!1,function(g,l){$("#profileJourneyName").text(l);$("#event_journey_funnel").empty();renderProfileBarChart("profileEventStatsChart",b[g]);loadProfileEventMatrix(a,g);loadEventJourneyProfile(a,g);setTimeout(function(){loadTouchpointFlowForProfile(a,g);loadTouchpointHubReportForProfile(a,g)},3E3)},!0,function(g,l){$("#profileJourneyName").text(l);renderProfileBarChart("profileEventStatsChart",b[g]);loadProfileEventMatrix(a,g);loadEventJourneyProfile(a,g);setTimeout(function(){loadTouchpointFlowForProfile(a,
g);loadTouchpointHubReportForProfile(a,g)},3E3)})},loadTouchpointHubReportForProfile=function(a,e){$("#profileObserverChart").html('\x3cdiv class\x3d"loader"\x3e\x3c/div\x3e');LeoAdminApiUtil.getSecuredData(baseLeoAdminUrl+"/cdp/analytics360/touchpoint-hub-report",{profileId:a,journeyMapId:e},function(c){if(0===c.httpCode&&""===c.errorMessage)if(c=c.data,0<c.length){var b=[],g=[];c.forEach(function(l){b.push(l.name);g.push(l.eventCount)});renderHorizontalBarChart("profileObserverChart",b,g)}else $("#profileObserverChart").html("\x3ch4\x3e No data available \x3c/h4\x3e");
else LeoAdminApiUtil.logErrorPayload(c)})},loadProfileTopTouchpoints=function(){renderProfileTouchpointChart(viewProfileId,-1,0,30)},renderProfileTouchpointChart=function(a,e,c,b){$("#profileTouchpointChart").html('\x3cdiv class\x3d"loader"\x3e\x3c/div\x3e');LeoAdminApiUtil.getSecuredData(baseLeoAdminUrl+"/cdp/analytics360/touchpoint-report",{profileId:a,touchpointType:e,startIndex:c,numberResult:b},function(g){if(0===g.httpCode&&""===g.errorMessage){g=g.data;var l=$("#engaged_touchpoint_list");if(0<
g.length){l.empty();var n=[],k=[];g.forEach(function(f){var d=f.touchpoint,h=textTruncate(d.name,60);n.push(h);k.push(f.eventCount);h=_.template($("#engaged-touchpoint-tpl").html());d.updatedAt=moment.utc(d.updatedAt).local().format("YYYY-MM-DD HH:mm:ss");d.truncatedUrl=textTruncate(d.url,120);""===d.locationCode&&(d.cssShowLocationCode="none");d.eventCount=f.eventCount;l.append(h(d))});renderHorizontalBarChart("profileTouchpointChart",n,k)}else $("#profileTouchpointChart").html("\x3ch4\x3e No data available \x3c/h4\x3e")}else LeoAdminApiUtil.logErrorPayload(g)})},
renderTaxonomyTextData=function(a){var e=$("#profileInSegments"),c=a.inSegments.length;a.inSegments.forEach(function(d){c--;var h=0<c,p="Segment: "+d.name;d="\x3cb\x3e"+$("\x3ca/\x3e").attr("title",p).attr("href","#calljs-leoCdpRouter('Segment_Details','"+d.id+"')").text(d.name)[0].outerHTML+"\x3c/b\x3e";h&&(d+="; ");e.append(d)});var b=$("#profileInJourneyMaps"),g=a.inJourneyMaps.length;a.inJourneyMaps.forEach(function(d){g--;var h=0<g,p="Journey Map: "+d.name+" \x3d\x3e At Stage: "+journeyStagesMap[d.indexScore],
t=d.name;p="\x3cb\x3e"+$("\x3ca/\x3e").attr("title",p).attr("href","#calljs-leoCdpRouter('Data_Journey_Map','"+d.id+"')").html(t)[0].outerHTML+"\x3c/b\x3e";h&&(p+="; ");""===d.queryHashedId&&b.append(p)});var l=$("#profileInAccounts"),n=a.inAccounts.length;a.inAccounts.forEach(function(d){n--;var h=0<n;d="\x3cb\x3e"+$("\x3ca/\x3e").attr("href","#calljs-leoCdpRouter('Account_Details','"+d.id+"')").html(d.name)[0].outerHTML+"\x3c/b\x3e";h&&(d+="; ");l.append(d)});var k=$("#profileDataLabels"),f=a.dataLabels.length;
a.dataLabels.forEach(function(d){f--;d="\x3cb\x3e"+d+"\x3c/b\x3e";0<f&&(d+="; ");k.append(d)})},loadEventJourneyProfile=function(a,e){var c=$("#event_journey_funnel").parent().width()-15;a={profileId:a,journeyMapId:e};e=baseLeoAdminUrl+"/cdp/analytics360/event-report/journey-profile";$("#event_journey_funnel_info").html('\x3cdiv class\x3d"loader"\x3e\x3c/div\x3e');LeoAdminApiUtil.getSecuredData(e,a,function(b){if(0===b.httpCode&&""===b.errorMessage){var g=b.data.total,l=0,n=b.data.funnelIndex;b.data.scoreCX&&
(l=b.data.scoreCX.sentimentScore);var k=$("#profileJourneyFunnel");90<=n?k.attr("class","progress-bar progress-bar-striped active progress-bar-danger"):50<=n&&90>n?k.attr("class","progress-bar progress-bar-striped active progress-bar-success"):k.attr("class","progress-bar progress-bar-striped active progress-bar-primary");$("#profileJourneySentimentScore").text(l);$("#profileJourneyFunnelValue").text(n);k.attr("aria-valuenow",n).css("width",n+"%");$("#profile_funnel_report \x3e div").removeClass("funnel-stage-active");
l=Math.floor(n/10);for(n=1;n<=l;n++)$("#profile_funnel_stage_"+n).addClass("funnel-stage-active");0==g?($("#event_journey_funnel_info").html("\x3cp\x3eNo data available\x3c/p\x3e").show(),$("#journeyFlowChart").hide()):($("#event_journey_funnel_info").empty().hide(),$("#journeyFlowChart").show(),(new FunnelGraph({container:"#event_journey_funnel",gradientDirection:"horizontal",data:{labels:journeyLabel5A,subLabels:["Event Data Point"],colors:[["#9ACAEF","#67B0E9","#309EF3"]],values:b.data.reportData},
displayPercent:!0,direction:"horizontal",width:c,height:330,subLabelValue:"raw"})).draw())}else LeoAdminApiUtil.logErrorPayload(b)})},loadTouchpointFlowForProfile=function(a,e){var c=$("#profileTouchpointFlow");a={profileId:a,journeyMapId:e,beginFilterDate:"",endFilterDate:""};e=baseLeoAdminUrl+"/cdp/analytics360/touchpoint-flow-report";c.html('\x3cdiv class\x3d"loader"\x3e\x3c/div\x3e');LeoAdminApiUtil.getSecuredData(e,a,function(b){0===b.httpCode&&""===b.errorMessage?(c.empty(),renderDirectedGraph("profileTouchpointFlow",
{nodes:b.data.nodes,edges:b.data.edges},b.data.rootNodeId)):LeoAdminApiUtil.logErrorPayload(b)})},profileInfoLoadProcessor=function(a){viewProfileId=a.id;a.fullName=""!==a.firstName||""!==a.lastName?a.firstName+" "+a.lastName:"Web Visitor";0>=a.age&&(a.age="-");""===a.livingLocation&&(a.livingLocation="_");""===a.primaryPhone&&(a.primaryPhone="-");""===a.firstName&&(a.firstName="-");""===a.lastName&&(a.lastName="-");""===a.primaryEmail&&(a.primaryEmail="-");if("number"===typeof a.jobType){var e=a.jobType;
a.jobTypeAsString=0===e?"UNSKILLED AND NON-RESIDENT":1===e?"UNSKILLED AND RESIDENT":2===e?"SKILLED":3===e?"HIGHLY SKILLED":"-"}a.funnelStage=a.funnelStage?a.funnelStage.toUpperCase():"-";a.lastTrackingEvent?(a.lastTrackingEvent.createdAt=moment.utc(a.lastTrackingEvent.createdAt).local().format("YYYY-MM-DD HH:mm:ss"),a.lastTrackingEvent.fingerprintId=a.lastTrackingEvent.fingerprintId?a.lastTrackingEvent.fingerprintId:"-",a.lastTrackingEvent&&a.lastTrackingEvent.refTouchpoint&&(a.lastTrackingEvent.refTouchpoint.name=
decodeURISafe(a.lastTrackingEvent.refTouchpoint.name))):a.lastTrackingEvent.createdAt="-";a.lastTouchpoint.name=decodeURI(a.lastTouchpoint.name);return a},loadProfileListByFilter=function(a,e,c,b,g,l){var n=[{data:"id"},{data:"firstName"},{data:"primaryEmail"},{data:"primaryPhone"},{data:"lastTouchpoint"},{data:"dataQualityScore"},{data:"totalLeadScore"},{data:"totalCLV"},{data:"updatedAt"},{data:"status"}],k=getUserSession();return k?$(b).DataTable({lengthMenu:[[30,50,60],[30,50,60]],processing:!0,
serverSide:!0,searching:!1,ordering:!0,serverMethod:"POST",ajax:{url:baseLeoAdminUrl+"/cdp/profiles/filter",contentType:"application/json",beforeSend:function(f){$(c).show();$(e).hide();f.setRequestHeader("leouss",k)},data:function(f){f=g(f);f.order.map(function(d){d.field=n[d.column]?n[d.column].data:""});return JSON.stringify(f)},dataSrc:function(f){var d=f.canInsertData,h=f.canEditData,p=f.canDeleteData;$(b).data("canInsertData",d);$(b).data("canEditData",h);$(b).data("canDeleteData",p);"function"===
typeof l&&l(f);$(c).hide();$(e).show();return f.data}},columnDefs:[{render:function(f,d,h){d="";"function"===typeof window[a]&&(d=getTableRowCheckedBox(a,b,f,!1));return d},targets:0,orderable:!1},{render:function(f,d,h){f="Web Visitor";var p="datatable_text no_contact";d="Data Profile of ";0<h.firstName.length||0<h.lastName.length?(p=h.firstName+" "+h.lastName,f=textTruncate(p,30),d+=p,p="datatable_text has_contact"):d+=f;h.dataVerification&&(f='\x3ci class\x3d"fa fa-check-circle-o" aria-hidden\x3d"true" title\x3d"Verified Data" \x3e\x3c/i\x3e '+
f,d="Verified "+d);return'\x3ca class\x3d"'+p+'" title\x3d"'+d+"\" href\x3d\"#calljs-leoCdpRouter('Customer_Profile_Info','"+(h.id+"')\" \x3e")+f+"\x3c/a\x3e"},targets:1,orderable:!1},{render:function(f,d,h){return"string"===typeof f?'\x3cdiv class\x3d"datatable_text "\x3e\x3ca title\x3d"'+(f+"\" href\x3d\"#calljs-leoCdpRouter('Customer_Profile_Info','"+(h.id+"')\" \x3e")+textTruncate(f,40)+"\x3c/a\x3e\x3c/div\x3e"):"-"},targets:2,orderable:!1},{render:function(f,d,h){return"string"===typeof f?'\x3cdiv class\x3d"datatable_text"\x3e\x3ca title\x3d"'+
(f+"\" href\x3d\"#calljs-leoCdpRouter('Customer_Profile_Info','"+(h.id+"')\" \x3e")+textTruncate(f,30)+"\x3c/a\x3e\x3c/div\x3e"):"-"},targets:3,orderable:!1},{render:function(f,d,h){"object"!==typeof h.lastTouchpoint&&(h.lastTouchpoint={name:"No data"});return'\x3cdiv style\x3d"font-size:11.4px;" title\x3d"'+h.lastTouchpoint.name+'"\x3e'+textTruncate(h.lastTouchpoint.name,50)+"\x3c/div\x3e"},targets:4,orderable:!1},{render:function(f,d,h){d=(new Number(f)).toLocaleString();return 100>=f?'\x3cdiv class\x3d"datatable_text text-center"\x3e'+
d+" \x3c/div\x3e":100<f&&250>f?'\x3cdiv class\x3d"highlight_text text-center profile_medium_score" \x3e'+d+"\x3c/div\x3e":'\x3cdiv class\x3d"highlight_text text-center profile_high_score"  \x3e'+d+"\x3c/div\x3e"},targets:5},{render:function(f,d,h){d=(new Number(f)).toLocaleString();return 20>f?'\x3cdiv class\x3d"datatable_text text-center"\x3e'+d+" \x3c/div\x3e":20<=f&&100>f?'\x3cdiv class\x3d"highlight_text text-center profile_medium_score" \x3e'+d+"\x3c/div\x3e":100<=f?'\x3cdiv class\x3d"highlight_text text-center profile_high_score" \x3e'+
d+"\x3c/div\x3e":'\x3cdiv class\x3d"highlight_text text-center" style\x3d"color:#404040!important;font-size:0.8em!important" \x3e'+d+" \x3c/div\x3e"},targets:6},{render:function(f,d,h){d=(new Number(f)).toLocaleString();return 20>f?'\x3cdiv class\x3d"datatable_text text-center"\x3e'+d+" \x3c/div\x3e":20<=f&&100>f?'\x3cdiv class\x3d"highlight_text text-center profile_medium_score" \x3e'+d+"\x3c/div\x3e":100<=f?'\x3cdiv class\x3d"highlight_text text-center profile_high_score" \x3e'+d+" \x3c/div\x3e":
'\x3cdiv class\x3d"highlight_text text-center" style\x3d"color:#404040!important;font-size:0.8em!important" \x3e'+d+" \x3c/div\x3e"},targets:7},{render:function(f,d,h){return f?'\x3cdiv class\x3d"small text-center" style\x3d"color:#3300ff;width:74px" \x3e'+moment.utc(f).local().format("YYYY-MM-DD HH:mm:ss")+"\x3c/div\x3e":"-"},targets:8},{render:function(f,d,h){d="ACTIVE";0===f?d="INACTIVE":-1===f?d="INVALID":-4===f&&(d="REMOVED");return'\x3cdiv class\x3d"small text-center" style\x3d"color:#3300ff!important" title\x3d"The profile status is '+
d+'"\x3e'+d+"\x3c/div\x3e"},targets:9},{render:function(f,d,h){f='\x3ca class\x3d"control" title\x3d"Profile Report" href\x3d"#calljs-leoCdpRouter(\'Customer_Profile_Info\',\''+(h.id+'\')" \x3e \x3ci class\x3d"fa fa-info-circle" aria-hidden\x3d"true"\x3e\x3c/i\x3e View\x3c/a\x3e');$(b).data("canEditData")&&(f+=' \x3cbr\x3e\x3ca class\x3d"control" title\x3d"Profile Editor" href\x3d"#calljs-leoCdpRouter(\'Customer_Profile_Editor\',\''+(h.id+'\')" \x3e \x3ci class\x3d"fa fa-pencil-square-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e Edit\x3c/a\x3e'));
return f},targets:10}],columns:n,order:[[8,"desc"]]}):!1};