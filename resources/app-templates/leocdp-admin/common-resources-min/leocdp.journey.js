'use strict';const eventDataTypes=[{name:"First-party Data",id:1},{name:"Second-party Data",id:2},{name:"Third-party Data",id:3}],journeyStages=[{name:"AWARENESS",id:1},{name:"ATTRACTION",id:2},{name:"ASK",id:3},{name:"ACTION",id:4},{name:"ADVOCACY",id:5}],journeyStagesMap={1:"AWARENESS",2:"ATTRACTION",3:"ASK",4:"ACTION",5:"ADVOCACY"},scoringModels=[{name:"LEAD",id:1},{name:"PROSPECT",id:2},{name:"ENGAGEMENT",id:3},{name:"DATA_QUALITY",id:4},{name:"ACQUISITION",id:5},{name:"LIFETIME_VALUE",id:6},
{name:"CX_EFFORT",id:7},{name:"CX_SATISFACTION",id:8},{name:"CX_FEEDBACK",id:9},{name:"CX_PROMOTER",id:10},{name:"CREDIT_SCORING",id:11},{name:"CX_LOYALTY",id:12},{name:"CX_DETRACTOR",id:13}],CheckBoxIcon=function(a){jsGrid.Field.call(this,a)};
CheckBoxIcon.prototype=new jsGrid.Field({sorter:function(a,b){return 0},itemTemplate:function(a){return getCheckedBoxIcon(a)},insertTemplate:function(a){return this._insertCode=a},editTemplate:function(a){return this._editCode=a},insertValue:function(){return this._insertCode},editValue:function(){return this._editCode}});jsGrid.fields.CheckBoxIcon=CheckBoxIcon;var CustomCheckBox=function(a){jsGrid.Field.call(this,a)};
CustomCheckBox.prototype=new jsGrid.Field({sorter:function(a,b){return 0},itemTemplate:function(a){return'\x3cdiv class\x3d"text-center"\x3e'+getCheckedBoxIcon(a)+"\x3c/div\x3e"},insertTemplate:function(a){var b=$('\x3cinput type\x3d"checkbox" \x3e');a&&b.attr("checked","checked");return this._insertCheckbox=$('\x3cdiv class\x3d"text-center"\x3e'+b[0].outerHTML+"\x3c/div\x3e")},editTemplate:function(a){var b=$('\x3cinput type\x3d"checkbox" \x3e');a&&b.attr("checked","checked");return this._editCheckbox=
$('\x3cdiv class\x3d"text-center"\x3e'+b[0].outerHTML+"\x3c/div\x3e")},insertValue:function(){return 0<this._insertCheckbox.find("input:checked").length},editValue:function(){return 0<this._editCheckbox.find("input:checked").length}});jsGrid.fields.CustomCheckBox=CustomCheckBox;const UrlLink=function(a){jsGrid.Field.call(this,a)};
UrlLink.prototype=new jsGrid.Field({sorter:function(a,b){return 0},itemTemplate:function(a){var b=45<a.length?a.substring(0,45)+"...":a;return 0===a.indexOf("https://plus.codes/")?'\x3ca href\x3d"javascript:" style\x3d"font-size:11.5px" data-url\x3d"'+a+'" onclick\x3d"openLocationUrl(this)" \x3e'+b+"\x3c/a\x3e":'\x3ca href\x3d"'+a+'"  style\x3d"font-size:11.5px" target\x3d"_blank" \x3e'+b+"\x3c/a\x3e"},insertTemplate:function(a){return this._insertCode=a},editTemplate:function(a){return this._editCode=
a},insertValue:function(){return this._insertCode},editValue:function(){return this._editCode}});jsGrid.fields.UrlLink=UrlLink;const BoldText=function(a){jsGrid.Field.call(this,a)};BoldText.prototype=new jsGrid.Field({sorter:function(a,b){return 0},itemTemplate:function(a){return"\x3cb\x3e"+a+"\x3c/b\x3e"},insertTemplate:function(a){return this._insertCode=a},editTemplate:function(a){return this._editCode=a},insertValue:function(){return this._insertCode},editValue:function(){return this._editCode}});
jsGrid.fields.BoldText=BoldText;
const refreshJourneyMapView=function(){currentJourneyMapId&&(location.hash="#calljs-leoCdpRouter('Data_Journey_Map','"+currentJourneyMapId+"','_refresh_"+(new Date).getTime()+"')")},updateJourneyMap=function(a){a={touchpointHubJson:JSON.stringify($("#touchpoint_hub_table").jsGrid("option","data")),journeyMapId:currentJourneyMapId};LeoAdminApiUtil.callPostAdminApi("/cdp/journeymap/save",a,function(b){0===b.httpCode&&""===b.errorMessage?""!=b.data?refreshJourneyMapView():console.error("updateJourneyMap ",
rs):LeoAdminApiUtil.logErrorPayload(b)})},loadFeedbackTemplateItems=function(a,b){LeoAdminApiUtil.getSecuredData("/cdp/asset-item/asset-templates",{obsid:a},function(e){cxFeedbackTemplates=e.data.cxFeedbackTemplates;landingPageTemplates=e.data.landingPageTemplates;b()})},loadEventMetrics=function(){LeoAdminApiUtil.getSecuredData("/cdp/funnel/event-metrics",{},function(a){eventMetrics=a.data})};
var loadJourneyTemplate=function(){iziToast.info({title:"Information",message:"This function is under development and is not yet available"})},jsGridItemUrlTemplate=function(a){a=a.trim();a=$("\x3ca\x3e").attr("href","javascript:").attr("title",a).attr("onclick","openUrlInNewTab(event,this)").text(a);return $('\x3cdiv class\x3d"long_url_holder" \x3e\x3c/div\x3e').append(a)};
function initJourneyMapNameEditor(){var a="Journey Map: "+(new Date).toDateString(),b=function(c){LeoAdminApiUtil.callPostAdminApi("/cdp/journeymap/update-name",{journeyMapName:c,journeyMapId:currentJourneyMapId},function(d){0===d.httpCode&&""===d.errorMessage?(iziToast.success({title:"Data Journey Map",message:"\x3cb\x3e"+c+"\x3c/b\x3e is updated successfully!",timeout:2500}),loadJourneyMapList(!0)):LeoAdminApiUtil.logErrorPayload(d)})},e=$("#journeyMapName");$("#journeyMapNameEditor").blur(function(){var c=
$(this).val().trim();c=""===c?a:c;$("#journeyMapNameEditor").hide();e.text()!==c?(e.text(c).show(),b(c)):e.show()});$("#journeyMapNameEditor").keyup(function(c){"13"==(c.keyCode?c.keyCode:c.which)&&(c=$(this).val().trim(),c=""===c?a:c,$("#journeyMapNameEditor").hide(),e.text()!==c?(e.text(c).show(),b(c)):e.show())})}
function saveJourneyDataAuthorization(){var a=$("#authorizedJourneyViewers").val()||[],b=$("#authorizedJourneyEditors").val()||[];a={authorizedViewers:a,authorizedEditors:b,journeyMapId:currentJourneyMapId};a.updateAllProfilesInJourney=!0===$("#updateAllProfilesInJourney").prop("checked");LeoAdminApiUtil.callPostAdminApi("/cdp/journeymap/update-data-authorization",a,function(e){e.data===currentJourneyMapId?iziToast.success({title:"Data Journey Map",message:"\x3cb\x3eThe Data Journey Authorization of "+
$("#journeyMapName").text()+"\x3c/b\x3e is updated successfully!",timeout:3E3}):LeoAdminApiUtil.logErrorPayload(e)})}function loadJourneyStagesList(a){var b=$("#journeyStagesList");journeyStages.forEach(function(e){b.append('\x3coption value\x3d"'+e.id+'" \x3e'+e.name+"\x3c/option\x3e")});b.val("1").change();b.chosen({width:"100%",no_results_text:"Oops, nothing found!"}).trigger("chosen:updated").change(function(){"function"===typeof a&&a($(this).val())})}
function loadJourneyMapList(a,b,e,c){var d=$("#journeyMapList");!0===a&&d.find("option").remove().trigger("chosen:updated");LeoAdminApiUtil.getSecuredData("/cdp/journeymap/list-all",{},function(f){0===f.httpCode&&""===f.errorMessage?(f=f.data,!0===e&&d.append('\x3coption value\x3d"" \x3e All Data from All Journeys\x3c/option\x3e'),f.forEach(function(p){d.append('\x3coption value\x3d"'+p.id+'" \x3e'+p.name+"\x3c/option\x3e")}),"string"===typeof currentJourneyMapId?d.val(currentJourneyMapId).change():
d.val("").change(),"function"===typeof c&&c(d.val(),d.find("option:selected").text()),d.chosen({width:"100%",no_results_text:"Oops, nothing found!"}).trigger("chosen:updated").change(function(){if("function"===typeof b){var p=$(this).val(),m=$(this).find("option:selected").text();b(p,m);"string"===typeof currentJourneyMapId&&(currentJourneyMapId=p)}else window.currentJourneyMapId=$(this).val(),refreshJourneyMapView()})):LeoAdminApiUtil.logErrorPayload(f)})}
function editJourneyMapName(){var a=$("#journeyMapName");$("#journeyMapNameEditor").val(a.text()).show().focus();a.hide()}function createNewJourneyMap(){$("#dialogCreateNewJourneyMap").modal({backdrop:"static",keyboard:!1})}
function saveNewJourneyMap(){var a=$("#newJourneyMapName").val();5>=a.length?iziToast.error({title:"Journey Map Creation",message:"The journey map \x3cb\x3e"+a+"\x3c/b\x3e is too short, please enter at least 6 characters !",timeout:3E3}):($("#dialogCreateNewJourneyMap").modal("hide"),setTimeout(function(){LeoAdminApiUtil.callPostAdminApi("/cdp/journeymap/create-new",{journeyMapName:a},function(b){0===b.httpCode&&""===b.errorMessage?"string"===typeof b.data&&(currentJourneyMapId=b.data,iziToast.success({title:"Journey Map Creation",
message:"The journey map \x3cb\x3e"+a+"\x3c/b\x3e has been created created successfully !",timeout:3E3}),refreshJourneyMapView()):LeoAdminApiUtil.logErrorPayload(b)})},1E3))}
function deleteCurrentJourneyMap(){if("string"===typeof currentJourneyMapId&&"id_default_journey"!=currentJourneyMapId){var a=$("#journeyMapList").find("option:checked").text();$("#delete_callback").val("");$("#confirmDeleteParentChildDialog").modal({focus:!0});$("#deleteChildItemMsg").text("Delete all touchpoint hubs and related data in this journey map!");$("#deleteChildItemCheckbox").prop("checked",!0);$("#deleteChildItem").show();var b="deleteJourneyMap"+currentJourneyMapId;window[b]=function(){var e=
baseLeoAdminUrl+"/cdp/journeymap/delete";$("#deleteChildItemCheckbox").is(":checked");LeoAdminApiUtil.callPostAdminApi(e,{journeyMapId:currentJourneyMapId},function(c){0===c.httpCode?!0===c.data?($("#deleteChildItem").hide(),$("#deleteChildItemMsg").text(""),iziToast.success({title:"OK",message:'Successfully deleted the journey map "'+a+'"',onClosing:function(d,f,p){currentJourneyMapId="id_default_journey";refreshJourneyMapView()}})):iziToast.error({title:"Error",message:c.data,onClosing:function(d,
f,p){locatio.href="/admin"}}):($("#error-on-save").html(c.errorMessage).show().delay(5E3).fadeOut("slow"),LeoAdminApiUtil.logErrorPayload(c))})};$("#delete_parent_callback").val(b);$("#deletedParentInfoTitle").text(a);$("#deletedParentInfoMsg").text("Do you want to delete the journey map ?")}}
var loadJourneyMap=function(a,b,e){LeoAdminApiUtil.getSecuredData("/cdp/journeymap/get",{id:a},function(c){if(0<c.errorCode)iziToast.error({title:"Data Journey Map",message:c.errorMessage});else{var d=c.data.journeyMap;c=d.defaultMetricName;var f=d.name,p=d.journeyStages,m=d.journeyLinks,q=d.journeyNodes;d=d.touchpointHubMap;$(e).text(f);renderJourneyFlowChart(b,c,p,q,m,d)}})},loadJourneyMapAndTouchpointHubs=function(a,b,e,c,d){LeoAdminApiUtil.getSecuredData("/cdp/journeymap/get",{id:a},function(f){if(0<
f.errorCode)iziToast.error({title:"Data Journey Map",message:f.errorMessage});else{var p=f.data.touchpointHubTypes,m=f.data.journeyMap,q=m.defaultMetricName,g=m.name,l=m.journeyStages,k=m.journeyLinks,w=m.journeyNodes,r=m.touchpointHubIndex,u=m.touchpointHubMap;$(e).text(g);loadSystemUsersForDataAuthorization(m,$("#authorizedJourneyViewers"),$("#authorizedJourneyEditors"));"function"===typeof d&&d(w.length);renderJourneyFlowChart(b,q,l,w,k,u);m=[];for(g in u)q=r[g],l=u[g],l.index=q+1,m[q]=l;g=[];
for(r=1;30>=r;r++)g.push({Name:"[ "+r+" ]",Id:r});var x=[];Object.keys(p).forEach(h=>{var n=parseInt(h);0<n&&x.push({typeName:p[h].replaceAll("_"," "),type:n})});r=f.canInsertData;q=f.canEditData;f=f.canDeleteData;var v=-1;$(c).jsGrid({width:"100%",height:"auto",inserting:r,editing:q,sorting:!0,paging:!1,deleteConfirm:function(h){return"The touchpoint hub ["+h.name+"] will be removed. Are you sure?"},data:m,onItemInserting:function(h){console.log(h.item);var n=h.item.url,t=h.item.type;null!=u[h.item.name]?
(h.cancel=!0,iziToast.error({title:"Data Journey Map",message:h.item.name+" is duplicated, please enter a different name !"})):!isValidURL(n)&&30>=t?(h.cancel=!0,iziToast.error({title:"Data Journey Map",message:n+" is not valid URL !"})):30==t?(h.cancel=!0,iziToast.error({title:"Data Journey Map",message:"Can not have more than one data observer !"})):0<v&&(h.item.index=v,v=-1)},onItemUpdating:function(h){console.log(h.item);var n=h.item,t=n.type,y=n.name;n=n.url;30!=t?isValidURL(n)||31==t||(h.cancel=
!0,iziToast.error({title:"Data Journey Map",message:n+" is not valid URL !"})):(h.cancel=!0,iziToast.error({title:"Data Journey Map",message:y+" is read-only touchpoint, you can not update it !"}))},onItemInserted:function(h){iziToast.success({title:"Data Journey Map",message:h.item.name+" is inserted successfully!",timeout:2500,onClosed:function(){updateJourneyMap(!0)}})},onItemUpdated:function(h){iziToast.success({title:"Data Journey Map",message:h.item.name+" is updated successfully!",timeout:2500,
onClosed:function(){updateJourneyMap(!1)}})},onItemDeleting:function(h){var n=h.item,t=n.name;0<n.type&&30>n.type||(h.cancel=!0,iziToast.error({title:"Data Journey Map",message:t+" is read-only touchpoint hub, you can not delete it !"}))},onItemDeleted:function(h){u[h.item.name]=null;LeoAdminApiUtil.callPostAdminApi("/cdp/touchpointhub/delete",{id:h.item.id},function(n){0===n.httpCode&&""===n.errorMessage?iziToast.success({title:"Data Journey Map",message:h.item.name+" is deleted successfully!",timeout:2500,
onClosed:function(){updateJourneyMap(!1)}}):LeoAdminApiUtil.logErrorPayload(n)})},onRefreshed:function(h){var n=h.grid._insertRow;h=h.grid._bodyGrid;console.log(n);v=parseInt($(".jsgrid-grid-body tbody tr:last td:first").text())+1;$(n).find("td:first").text(v);$("\x3ctfoot\x3e\x3c/tfoot\x3e").appendTo(h).append(n)},fields:[{name:"index",title:"",type:"number",width:15,editing:!1,align:"center"},{name:"name",title:"Name",type:"text",width:60,validate:"required",align:"center",css:"touchpoint_hub_name"},
{name:"type",title:"Type",type:"select",items:x,valueField:"type",textField:"typeName",width:58,insertTemplate:function(){var h=jsGrid.fields.select.prototype.insertTemplate.call(this);h.change(function(){30==$(this).val()&&(iziToast.error({title:"Data Journey Map",message:"Can not have more than one data observer !"}),$("#touchpoint_hub_table").jsGrid("cancelEdit"))});return h},editTemplate:function(h){var n=jsGrid.fields.select.prototype.editTemplate.call(this,h);return 30==h?"CUSTOMER DATA HUB":
n}},{name:"journeyLevel",title:"Level",type:"select",items:g,valueField:"Id",textField:"Name",width:24},{name:"firstPartyData",title:"First-party Data",type:"CustomCheckBox",validate:"required",width:34,align:"center"},{name:"url",title:"URL",type:"text",itemTemplate:jsGridItemUrlTemplate,validate:"required",align:"center"},{type:"control",deleteButton:f,width:30}]});r&&q||$("#touchpoint_hub_table").find(".jsgrid-button").click(errorNoAuthorization)}})};
const getJsCodeEventTrackingFunctions=function(){var a="",b=0;eventMetrics.forEach(function(e){if(!0===e.showInObserverJS){b++;var c="#leo-tracking-view-event-code-tpl";3===e.journeyStage||4===e.journeyStage||5===e.journeyStage?c=6===e.scoreModel?"#leo-tracking-conversion-event-code-tpl":"#leo-tracking-action-event-code-tpl":6===e.journeyStage&&(c="#leo-tracking-feedback-event-code-tpl");c=_.template($(c).html());e={counter:b,eventMetricId:e.id,eventMetricName:e.eventLabel.replaceAll(" ","")};a+=
c(e)}});return a},getTrackingJsCode=function(a){a=JSON.parse(decodeURIComponent($(a).data("json")));var b=a.id,e=a.name,c=a.type;a=a.dataSourceUrl;var d=window.baseLeoObserverDomain,f=window.baseStaticDomain,p=getJsCodeEventTrackingFunctions();if(0<c&&12>c){$("#webDataObserverCodeDialog").modal({backdrop:"static",keyboard:!1});$("#code_holder .CodeMirror").remove();c=$("#webDataObserverCodeDialog .code")[0];var m=CodeMirror.fromTextArea(c,{mode:"htmlmixed",lineNumbers:!0,styleActiveLine:!0,matchBrackets:!0,
readOnly:!1});m.setSize(null,480);setTimeout(function(){var q=function(){var g=$("#leo_observer_auto_track").is(":checked"),l=$("#leo_observer_auto_collect_UTM").is(":checked"),k=$("#webDataObserverCodeDialog .code").val().trim().replace("__leoObserverId__",b);k=k.replace("__tpHubName__",e);k=k.replace("__leoObserverDomain__",d);k=k.replace("__staticFileDomain__",f);k=k.replace("__eventTrackingFunctions__",p);k=g?l?k.replace("__autoTrackingFunctions__","LeoObserver.recordEventPageView(parseDataUTM())"):
k.replace("__autoTrackingFunctions__","LeoObserver.recordEventPageView()"):k.replace("__autoTrackingFunctions__","// No auto tracking, please call it yourself");m.getDoc().setValue("\x3cscript\x3e\n"+k+"\n\x3c/script\x3e");m.refresh();m.execCommand("selectAll")};$("#leo_observer_auto_track, #leo_observer_auto_collect_UTM").change(function(){q()});q();addHandlerCopyCodeButton("#webDataObserverCodeDialog .code","#webDataObserverCodeDialog button.btn-copy-code")},350);c=$("#testObserverChromeExtBtn");
c.attr({leoObserverId:b,leoObserverDomain:d,staticFileDomain:f,dataSourceUrl:a});c.click(function(){var q=$(this).attr("leoObserverId"),g=$(this).attr("leoObserverDomain"),l=$(this).attr("staticFileDomain"),k=$(this).attr("dataSourceUrl");k=0<k.indexOf("?")?k:k+"?";window.open(k+"_leoObserverLogDomain\x3d"+g+"\x26_leoObserverId\x3d"+q+"\x26_leoObserverCdnDomain\x3d"+l,"_blank")})}else notifyErrorMessage("Can not get tracking code of offline touchpoint, please use QR code")},getCxFeedbackJsCode=function(a){a=
JSON.parse(decodeURIComponent($(a).data("json")));var b=a.id;a=a.type;30>a?loadFeedbackTemplateItems(b,function(){var e=function(f){var p="https://"+baseUploadDomain+f.qrCodeUrl.replace("./","/");$("#cx_qrHrefUrl").attr("href",p);$("#cx_qrImgSrc").attr("src",p);$("#cx_qrCodeImageURL").val(p);f="https://"+baseLeoObserverDomain+"/webform?tplid\x3d"+f.id+"\x26obsid\x3d"+b;$("#cx_qrFormURL").val(f)};if(0===$("#feedbackTemplateSelector option").length&&0<cxFeedbackTemplates.length)for(var c in cxFeedbackTemplates){var d=
'\x3coption value\x3d"'+c+'" \x3e'+cxFeedbackTemplates[c].title+"\x3c/option\x3e";$("#feedbackTemplateSelector").append(d)}$("#dialogEmbeddedCxFeedbackForm").modal({backdrop:"static",keyboard:!1});$("#feedbackTemplateSelector").val("0").change();initEmbeddedFeedbackForm(b,"dialogEmbeddedCxFeedbackForm",cxFeedbackTemplates[0]);e(cxFeedbackTemplates[0]);$("#feedbackTemplateSelector").chosen({width:"100%",no_results_text:"Oops, nothing found!"}).trigger("chosen:updated").change(function(){var f=parseInt($(this).val());
f=cxFeedbackTemplates[f];initEmbeddedFeedbackForm(b,"dialogEmbeddedCxFeedbackForm",f);e(f)})}):notifyErrorMessage("Can not get feedback code for the touchpoint hub type \x3d "+a)},getWebLeadFormJsCode=function(a){a=JSON.parse(decodeURIComponent($(a).data("json")));var b=a.id,e=a.name;a=a.type;if(0<a&&12>a){$("#webLeadFormCodeDialog").modal({backdrop:"static",keyboard:!1});$("#code_holder .CodeMirror").remove();a=$("#webLeadFormCodeDialog .code")[0];var c=CodeMirror.fromTextArea(a,{mode:"htmlmixed",
lineNumbers:!0,styleActiveLine:!0,matchBrackets:!0,readOnly:!0});c.setSize(null,480);setTimeout(function(){var d=$("#webLeadFormCodeDialog .code").val().trim().replace("__leoObserverId__",b);d=d.replace("__tpHubName__",e);d=d.replace("__LeoObserverDomain__",baseLeoObserverDomain);c.getDoc().setValue("\x3cscript\x3e\n"+d+"\n\x3c/script\x3e");c.refresh();c.execCommand("selectAll")},350)}},getQrImageFormCode=function(a){a=decodeURIComponent($(a).data("json"));a=JSON.parse(a);console.log("getQrImageFormCode ",
a);var b=a.qrCodeData,e=window.baseUploadDomain;$("#qrImageFormCodeDialog").modal({backdrop:"static",keyboard:!1});a=b.landingPageUrl;var c=b.trackingUrl;b="https://"+e+b.qrCodeImage.replace("./","/");$("#qrHrefUrl").attr("href",b);$("#qrImgSrc").attr("src",b);$("#qrTouchpointHubURL").val(a);$("#qrTrackingURL").val(c);$("#qrCodeImageURL").val(b)},getRecommenderJsCode=function(a){a=JSON.parse(decodeURIComponent($(a).data("json")));console.log("getRecommenderJsCode ",a);var b=a.id,e=a.name;a=a.type;
if(0<a&&12>a){$("#dialogEmbeddedRecomender").modal({backdrop:"static",keyboard:!1});$("#dialogEmbeddedRecomender .CodeMirror").remove();a=$("#dialogEmbeddedRecomender .code")[0];var c=CodeMirror.fromTextArea(a,{mode:"htmlmixed",lineNumbers:!0,styleActiveLine:!0,matchBrackets:!0,readOnly:!1});c.setSize(null,480);setTimeout(function(){var d=$("#dialogEmbeddedRecomender .code").val().trim().replace("__observerId__",b);d=d.replace("__tpHubName__",e);d=d.replace("__LeoObserverDomain__",baseLeoObserverDomain);
var f="leo_recommender_"+b;c.getDoc().setValue('\x3cscript id\x3d"'+f+'"\x3e\n'+d+"\n\x3c/script\x3e");c.refresh();c.execCommand("selectAll");addHandlerCopyCodeButton("#dialogEmbeddedRecomender .code","#dialogEmbeddedRecomender button.btn-copy-code")},350)}},showRedisSourceInfo=function(a){a=decodeURIComponent($(a).data("json"));var b=JSON.parse(a).dataSourceUrl.split("/");a=b[2];b=b[3];$("#dataSourceConfigHostAndPort").text(a);$("#dataSourceConfigTouchpointName").text(b);$("#redisSourceInfoDialog").modal({backdrop:"static",
keyboard:!1})},showObserverApiInfo=function(a){a=decodeURIComponent($(a).data("json"));a=JSON.parse(a);console.log("showObserverApiInfo",a);a="string"===typeof a.accessTokens.default_access_key?a.accessTokens.default_access_key:"";$("#leoCdpApiTokenKey").val("default_access_key");$("#leoCdpApiTokenValue").val(a);$("#leoCdpApiJourneyMapIdValue").val(currentJourneyMapId);$("#leoCdpGetProfileApiUrl").val(baseLeoAdminUrl+"/api/profile/save");$("#leoCdpTrackEventApiUrl").val(baseLeoAdminUrl+"/api/event/save");
$("#leoCdpListEventsApiUrl").val(baseLeoAdminUrl+"/api/event/list?startIndex\x3d0\x26numberResult\x3d10\x26profileId\x3d{profile_ID}");$("#observerApiInfoDialog").modal({backdrop:"static",keyboard:!1})},resetAccessTokenForLeoObserverApi=function(){LeoAdminApiUtil.callPostAdminApi(baseLeoAdminUrl+"/cdp/touchpointhub/reset-access-token",{},function(a){0===a.httpCode&&""===a.errorMessage&&(a=a.data,$("#leoCdpApiTokenKey").val(a.tokenKey),$("#leoCdpApiTokenValue").val(a.tokenValue),iziToast.success({title:"Reset Access Token",
message:"The new access token is generated successfully!"}))})},initDataObserverJsGridPlugin=function(){var a=function(b){jsGrid.Field.call(this,b)};a.prototype=new jsGrid.Field({sorter:function(b,e){return 0},itemTemplate:function(b){if(""!==b.data){console.log("observerModel ",b);var e=b.data,c=b.type;b=b.firstPartyData;var d="";30===c?d=d+'\x3cbutton type\x3d"button" class\x3d"btn btn-success  btn-sm btn-do-now btn-get-code" onclick\x3d"showObserverApiInfo(this)"  data-json\x3d"'+(e+'" \x3e\x3ci class\x3d"fa fa-info-circle" style\x3d"font-size:1.1em" aria-hidden\x3d"true"\x3e\x3c/i\x3e API Information \x3c/button\x3e'):
31===c?d=d+'\x3cbutton type\x3d"button" class\x3d"btn btn-success  btn-sm btn-do-now btn-get-code" onclick\x3d"showRedisSourceInfo(this)"  data-json\x3d"'+(e+'" \x3e\x3ci class\x3d"fa fa-info-circle" style\x3d"font-size:1.1em" aria-hidden\x3d"true"\x3e\x3c/i\x3e Redis Information \x3c/button\x3e'):32===c?d=d+'\x3cbutton type\x3d"button" class\x3d"btn btn-success  btn-sm btn-do-now btn-get-code" onclick\x3d"showKafkaSourceInfo(this)"  data-json\x3d"'+(e+'" \x3e\x3ci class\x3d"fa fa-info-circle" style\x3d"font-size:1.1em" aria-hidden\x3d"true"\x3e\x3c/i\x3e Kafka Information \x3c/button\x3e'):
b?30>c&&(d='\x3cbutton type\x3d"button" class\x3d"btn btn-primary btn-sm btn-get-code" onclick\x3d"getQrImageFormCode(this)" data-json\x3d"'+(e+'" \x3e\x3ci class\x3d"fa fa-qrcode" style\x3d"font-size:1.1em" aria-hidden\x3d"true"\x3e\x3c/i\x3e  QR Image Code \x3c/button\x3e'),0<c&&12>c?(d=d+'\x3cbutton type\x3d"button" class\x3d"btn btn-goto-router  btn-sm btn-get-code" onclick\x3d"getTrackingJsCode(this)"  data-json\x3d"'+(e+'" \x3e\x3ci class\x3d"fa fa-code" style\x3d"font-size:1.1em" aria-hidden\x3d"true"\x3e\x3c/i\x3e Event Tracking Code \x3c/button\x3e\x3cbutton type\x3d"button" class\x3d"btn btn-success btn-sm btn-get-code" onclick\x3d"getCxFeedbackJsCode(this)" '),
d+=' data-json\x3d"'+e+'" \x3e\x3ci class\x3d"fa fa-code" style\x3d"font-size:1.1em" aria-hidden\x3d"true"\x3e\x3c/i\x3e Survey Rating Forms \x3c/button\x3e\x3cbutton type\x3d"button" class\x3d"btn btn-info  btn-sm btn-get-code" onclick\x3d"getRecommenderJsCode(this)" ',d+=' data-json\x3d"'+e+'" \x3e\x3ci class\x3d"fa fa-code" style\x3d"font-size:1.1em" aria-hidden\x3d"true"\x3e\x3c/i\x3e Personalized Widget \x3c/button\x3e'):(d+='\x3cbutton type\x3d"button" class\x3d"btn btn-success btn-sm btn-get-code" onclick\x3d"getCxFeedbackJsCode(this)" ',
d+=' data-json\x3d"'+e+'" \x3e\x3ci class\x3d"fa fa-code" style\x3d"font-size:1.1em" aria-hidden\x3d"true"\x3e\x3c/i\x3e Survey Rating Forms \x3c/button\x3e')):d='\x3cbutton type\x3d"button" class\x3d"btn btn-primary btn-sm btn-get-code" onclick\x3d"getQrImageFormCode(this)" data-json\x3d"'+(e+'" \x3e\x3ci class\x3d"fa fa-qrcode" style\x3d"font-size:1.1em" aria-hidden\x3d"true"\x3e\x3c/i\x3e QR Image Code \x3c/button\x3e');return d}return""},insertTemplate:function(b){return this._insertCode=b},editTemplate:function(b){return this._editCode=
b},insertValue:function(){return this._insertCode},editValue:function(){return this._editCode}});jsGrid.fields.LeoDataObserver=a},loadDataObserverList=function(a){initDataObserverJsGridPlugin();LeoAdminApiUtil.getSecuredData("/cdp/observers",{journeyMapId:currentJourneyMapId},function(b){var e=b.data.eventObservers;b=b.data.touchpointHubTypes;for(var c=0;c<e.length;c++){var d=e[c];d.index=c+1;var f=b[d.type];d.typeName=f;var p=d.firstPartyData,m=d.type;f={id:d.id,name:d.name,type:m,typeName:f};f.collectDirectly=
d.collectDirectly;f.qrCodeData=d.qrCodeData;f.accessTokens=d.accessTokens;f.securityCode=d.securityCode;f.dataSourceUrl=d.dataSourceUrl;f=JSON.stringify(f);d.observerModel={type:m,data:encodeURIComponent(f),firstPartyData:p}}$(a).jsGrid({width:"100%",height:"auto",inserting:!1,editing:!1,sorting:!1,paging:!1,data:e,fields:[{name:"index",title:"",type:"number",width:20,align:"center"},{name:"name",title:"Name",type:"string",align:"center",css:"observer_name"},{name:"id",title:"Unique ID",type:"string",
width:68,align:"center",css:"observer_id"},{name:"firstPartyData",title:"First-party Data",type:"CheckBoxIcon",width:40,align:"center"},{name:"collectDirectly",title:"Tracking directly",type:"CheckBoxIcon",width:40,align:"center"},{name:"dataSourceUrl",title:"URL",type:"UrlLink",width:120,align:"center",css:"observer_url"},{name:"observerModel",title:"Actions",type:"LeoDataObserver",width:72,align:"center"}]})})},loadDataJourneyMapsByFilter=function(a,b,e,c,d,f,p){var m=[{data:"name"},{data:"authorizedViewers"},
{data:"authorizedEditors"},{data:"createdAt"},{data:"updatedAt"},{data:"defaultMetricName"}],q=getUserSession();if(q)return $(c).DataTable({lengthMenu:[[20,30,40],[20,30,40]],processing:!0,serverSide:!0,searching:!0,search:{return:!0},ordering:!0,serverMethod:"POST",ajax:{url:baseLeoAdminUrl+"/cdp/journeymaps/filter",contentType:"application/json",beforeSend:function(g){$(e).show();$(b).hide();g.setRequestHeader("leouss",q)},data:function(g){var l=g.order[0];g.sortField=m[l.column].data;g.sortAsc=
"asc"===l.dir;g.searchValue=g.search.value;delete g.order;delete g.search;"function"===typeof d&&(g=d(g),$(c).data("authorizedViewer",g.authorizedViewer),$(c).data("authorizedEditor",g.authorizedEditor));return JSON.stringify(g)},dataSrc:function(g){var l=g.canInsertData,k=g.canEditData,w=g.canDeleteData;$(c).data("canInsertData",l);$(c).data("canEditData",k);$(c).data("canDeleteData",w);"function"===typeof loadDataCallback&&loadDataCallback(g);$(e).hide();$(b).show();return g.data}},columnDefs:[{render:function(g,
l,k){return'\x3cdiv class\x3d"highlight_text text-center" title\x3d"'+g+'" \x3e'+textTruncate(g,150)+"\x3c/div\x3e"},targets:0,orderable:!1},{render:function(g,l,k){l=$(c).data("authorizedViewer");g=g.includes(l);l=k.id+"-viewer";"object"===typeof f&&(f[k.id]=g);return getTableRowCheckedBox(a,c,l,g)},targets:1},{render:function(g,l,k){l=$(c).data("authorizedEditor");g=g.includes(l);l=k.id+"-editor";"object"===typeof p&&(p[k.id]=g);return getTableRowCheckedBox(a,c,l,g)},targets:2},{render:function(g,
l,k){return'\x3cdiv class\x3d"small text-center" style\x3d"color:#3300ff;" \x3e'+moment.utc(g).local().format("YYYY-MM-DD HH:mm:ss")+"\x3c/div\x3e"},targets:3},{render:function(g,l,k){return'\x3cdiv class\x3d"small text-center" style\x3d"color:#3300ff;" \x3e'+moment.utc(g).local().format("YYYY-MM-DD HH:mm:ss")+"\x3c/div\x3e"},targets:4},{render:function(g,l,k){return'\x3cdiv class\x3d" text-center"  \x3e'+g+"\x3c/div\x3e"},targets:5},{render:function(g,l,k){return'\x3ca class\x3d"control" title\x3d"Segment Report" href\x3d"#calljs-leoCdpRouter(\'Data_Journey_Map\',\''+
(k.id+'\')" \x3e \x3ci class\x3d"fa fa-info-circle" aria-hidden\x3d"true"\x3e\x3c/i\x3e View\x3c/a\x3e')},targets:6}],columns:m})};var loadJourneyMapEventMatrix=function(a,b,e,c){LeoAdminApiUtil.getSecuredData(baseLeoAdminUrl+"/cdp/analytics360/event-matrix",{journeyMapId:a,beginFilterDate:e||"",endFilterDate:c||""},function(d){var f=d.data;"object"===typeof f?renderMatrixChart("Event Matrix Report",b,f.xLabels,f.yLabels,f.dataList):console.error(d)})};
const loadJourneyTouchpointHubReport=function(a,b){$("#journeyObserverChart").html('\x3cdiv class\x3d"loader"\x3e\x3c/div\x3e');LeoAdminApiUtil.getSecuredData(baseLeoAdminUrl+"/cdp/analytics360/touchpoint-hub-report",{journeyMapId:a,maxTouchpointHubSize:b},function(e){if(0===e.httpCode&&""===e.errorMessage)if(e=e.data,0<e.length){var c=[],d=[];e.forEach(function(f){c.push(f.name);d.push(f.eventCount)});renderHorizontalBarChart("journeyObserverChart",c,d)}else $("#journeyObserverChart").html("\x3ch4\x3e No data available \x3c/h4\x3e");
else LeoAdminApiUtil.logErrorPayload(e)})};