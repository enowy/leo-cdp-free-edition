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
function initJourneyMapNameEditor(){var a="Journey Map: "+(new Date).toDateString(),b=function(d){LeoAdminApiUtil.callPostAdminApi("/cdp/journeymap/update-name",{journeyMapName:d,journeyMapId:currentJourneyMapId},function(c){0===c.httpCode&&""===c.errorMessage?(iziToast.success({title:"Data Journey Map",message:"\x3cb\x3e"+d+"\x3c/b\x3e is updated successfully!",timeout:2500}),loadJourneyMapList(!0)):LeoAdminApiUtil.logErrorPayload(c)})},e=$("#journeyMapName");$("#journeyMapNameEditor").blur(function(){var d=
$(this).val().trim();d=""===d?a:d;$("#journeyMapNameEditor").hide();e.text()!==d?(e.text(d).show(),b(d)):e.show()});$("#journeyMapNameEditor").keyup(function(d){"13"==(d.keyCode?d.keyCode:d.which)&&(d=$(this).val().trim(),d=""===d?a:d,$("#journeyMapNameEditor").hide(),e.text()!==d?(e.text(d).show(),b(d)):e.show())})}
function saveJourneyDataAuthorization(){var a=$("#authorizedJourneyViewers").val()||[],b=$("#authorizedJourneyEditors").val()||[];LeoAdminApiUtil.callPostAdminApi("/cdp/journeymap/update-data-authorization",{authorizedViewers:a,authorizedEditors:b,journeyMapId:currentJourneyMapId},function(e){e.data===currentJourneyMapId?iziToast.success({title:"Data Journey Map",message:"\x3cb\x3eThe Data Journey Authorization of "+$("#journeyMapName").text()+"\x3c/b\x3e is updated successfully!",timeout:3E3}):LeoAdminApiUtil.logErrorPayload(e)})}
function loadJourneyStagesList(a){var b=$("#journeyStagesList");journeyStages.forEach(function(e){b.append('\x3coption value\x3d"'+e.id+'" \x3e'+e.name+"\x3c/option\x3e")});b.val("1").change();b.chosen({width:"100%",no_results_text:"Oops, nothing found!"}).trigger("chosen:updated").change(function(){"function"===typeof a&&a($(this).val())})}
function loadJourneyMapList(a,b,e,d){var c=$("#journeyMapList");!0===a&&c.find("option").remove().trigger("chosen:updated");LeoAdminApiUtil.getSecuredData("/cdp/journeymap/list-all",{},function(k){0===k.httpCode&&""===k.errorMessage?(k=k.data,!0===e&&c.append('\x3coption value\x3d"" \x3e All Data from All Journeys\x3c/option\x3e'),k.forEach(function(h){c.append('\x3coption value\x3d"'+h.id+'" \x3e'+h.name+"\x3c/option\x3e")}),"string"===typeof currentJourneyMapId?c.val(currentJourneyMapId).change():
c.val("").change(),"function"===typeof d&&d(c.val(),c.find("option:selected").text()),c.chosen({width:"100%",no_results_text:"Oops, nothing found!"}).trigger("chosen:updated").change(function(){if("function"===typeof b){var h=$(this).val(),f=$(this).find("option:selected").text();b(h,f);"string"===typeof currentJourneyMapId&&(currentJourneyMapId=h)}else window.currentJourneyMapId=$(this).val(),refreshJourneyMapView()})):LeoAdminApiUtil.logErrorPayload(k)})}
function editJourneyMapName(){var a=$("#journeyMapName");$("#journeyMapNameEditor").val(a.text()).show().focus();a.hide()}function createNewJourneyMap(){$("#dialogCreateNewJourneyMap").modal({backdrop:"static",keyboard:!1})}
function saveNewJourneyMap(){var a=$("#newJourneyMapName").val();5>=a.length?iziToast.error({title:"Journey Map Creation",message:"The journey map \x3cb\x3e"+a+"\x3c/b\x3e is too short, please enter at least 6 characters !",timeout:3E3}):($("#dialogCreateNewJourneyMap").modal("hide"),setTimeout(function(){LeoAdminApiUtil.callPostAdminApi("/cdp/journeymap/create-new",{journeyMapName:a},function(b){0===b.httpCode&&""===b.errorMessage?"string"===typeof b.data&&(currentJourneyMapId=b.data,iziToast.success({title:"Journey Map Creation",
message:"The journey map \x3cb\x3e"+a+"\x3c/b\x3e has been created created successfully !",timeout:3E3}),refreshJourneyMapView()):LeoAdminApiUtil.logErrorPayload(b)})},1E3))}
function deleteCurrentJourneyMap(){if("string"===typeof currentJourneyMapId&&"id_default_journey"!=currentJourneyMapId){var a=$("#journeyMapList").find("option:checked").text();$("#delete_callback").val("");$("#confirmDeleteParentChildDialog").modal({focus:!0});$("#deleteChildItemMsg").text("Delete all touchpoint hubs and related data in this journey map!");$("#deleteChildItemCheckbox").prop("checked",!0);$("#deleteChildItem").show();var b="deleteJourneyMap"+currentJourneyMapId;window[b]=function(){var e=
baseLeoAdminUrl+"/cdp/journeymap/delete";$("#deleteChildItemCheckbox").is(":checked");LeoAdminApiUtil.callPostAdminApi(e,{journeyMapId:currentJourneyMapId},function(d){0===d.httpCode?!0===d.data?($("#deleteChildItem").hide(),$("#deleteChildItemMsg").text(""),iziToast.success({title:"OK",message:'Successfully deleted the journey map "'+a+'"',onClosing:function(c,k,h){currentJourneyMapId="id_default_journey";refreshJourneyMapView()}})):iziToast.error({title:"Error",message:d.data,onClosing:function(c,
k,h){locatio.href="/admin"}}):($("#error-on-save").html(d.errorMessage).show().delay(5E3).fadeOut("slow"),LeoAdminApiUtil.logErrorPayload(d))})};$("#delete_parent_callback").val(b);$("#deletedParentInfoTitle").text(a);$("#deletedParentInfoMsg").text("Do you want to delete the journey map ?")}}
var loadJourneyMap=function(a,b,e){LeoAdminApiUtil.getSecuredData("/cdp/journeymap/get",{id:a},function(d){if(0<d.errorCode)iziToast.error({title:"Data Journey Map",message:d.errorMessage});else{var c=d.data.journeyMap;d=c.defaultMetricName;var k=c.name,h=c.journeyStages,f=c.journeyLinks,l=c.journeyNodes;c=c.touchpointHubMap;$(e).text(k);renderJourneyFlowChart(b,d,h,l,f,c)}})},loadJourneyMapAndTouchpointHubs=function(a,b,e,d){LeoAdminApiUtil.getSecuredData("/cdp/journeymap/get",{id:a},function(c){if(0<
c.errorCode)iziToast.error({title:"Data Journey Map",message:c.errorMessage});else{var k=c.data.touchpointHubTypes,h=c.data.journeyMap,f=h.defaultMetricName,l=h.name,n=h.journeyStages,r=h.journeyLinks,p=h.journeyNodes,q=h.touchpointHubIndex,u=h.touchpointHubMap;$(e).text(l);loadSystemUsersForDataAuthorization(h,$("#authorizedJourneyViewers"),$("#authorizedJourneyEditors"));renderJourneyFlowChart(b,f,n,p,r,u);h=[];for(l in u)f=q[l],n=u[l],n.index=f+1,h[f]=n;l=[];for(q=1;30>=q;q++)l.push({Name:"[ "+
q+" ]",Id:q});var w=[];Object.keys(k).forEach(g=>{var m=parseInt(g);0<m&&w.push({typeName:k[g].replaceAll("_"," "),type:m})});q=c.canInsertData;f=c.canEditData;c=c.canDeleteData;var v=-1;$(d).jsGrid({width:"100%",height:"auto",inserting:q,editing:f,sorting:!0,paging:!1,deleteConfirm:function(g){return"The touchpoint hub ["+g.name+"] will be removed. Are you sure?"},data:h,onItemInserting:function(g){console.log(g.item);var m=g.item.url,t=g.item.type;null!=u[g.item.name]?(g.cancel=!0,iziToast.error({title:"Data Journey Map",
message:g.item.name+" is duplicated, please enter a different name !"})):!isValidURL(m)&&30>=t?(g.cancel=!0,iziToast.error({title:"Data Journey Map",message:m+" is not valid URL !"})):30==t?(g.cancel=!0,iziToast.error({title:"Data Journey Map",message:"Can not have more than one data observer !"})):0<v&&(g.item.index=v,v=-1)},onItemUpdating:function(g){console.log(g.item);var m=g.item,t=m.type,x=m.name;m=m.url;30!=t?isValidURL(m)||31==t||(g.cancel=!0,iziToast.error({title:"Data Journey Map",message:m+
" is not valid URL !"})):(g.cancel=!0,iziToast.error({title:"Data Journey Map",message:x+" is read-only touchpoint, you can not update it !"}))},onItemInserted:function(g){iziToast.success({title:"Data Journey Map",message:g.item.name+" is inserted successfully!",timeout:2500,onClosed:function(){updateJourneyMap(!0)}})},onItemUpdated:function(g){iziToast.success({title:"Data Journey Map",message:g.item.name+" is updated successfully!",timeout:2500,onClosed:function(){updateJourneyMap(!1)}})},onItemDeleting:function(g){var m=
g.item,t=m.name;0<m.type&&30>m.type||(g.cancel=!0,iziToast.error({title:"Data Journey Map",message:t+" is read-only touchpoint hub, you can not delete it !"}))},onItemDeleted:function(g){u[g.item.name]=null;LeoAdminApiUtil.callPostAdminApi("/cdp/touchpointhub/delete",{id:g.item.id},function(m){0===m.httpCode&&""===m.errorMessage?iziToast.success({title:"Data Journey Map",message:g.item.name+" is deleted successfully!",timeout:2500,onClosed:function(){updateJourneyMap(!1)}}):LeoAdminApiUtil.logErrorPayload(m)})},
onRefreshed:function(g){var m=g.grid._insertRow;g=g.grid._bodyGrid;console.log(m);v=parseInt($(".jsgrid-grid-body tbody tr:last td:first").text())+1;$(m).find("td:first").text(v);$("\x3ctfoot\x3e\x3c/tfoot\x3e").appendTo(g).append(m)},fields:[{name:"index",title:"",type:"number",width:15,editing:!1,align:"center"},{name:"name",title:"Name",type:"text",width:60,validate:"required",align:"center",css:"touchpoint_hub_name"},{name:"type",title:"Type",type:"select",items:w,valueField:"type",textField:"typeName",
width:58,insertTemplate:function(){var g=jsGrid.fields.select.prototype.insertTemplate.call(this);g.change(function(){30==$(this).val()&&(iziToast.error({title:"Data Journey Map",message:"Can not have more than one data observer !"}),$("#touchpoint_hub_table").jsGrid("cancelEdit"))});return g},editTemplate:function(g){var m=jsGrid.fields.select.prototype.editTemplate.call(this,g);return 30==g?"LEO CDP OBSERVER":m}},{name:"journeyLevel",title:"Level",type:"select",items:l,valueField:"Id",textField:"Name",
width:24},{name:"firstPartyData",title:"First-party Data",type:"CustomCheckBox",validate:"required",width:34,align:"center"},{name:"url",title:"URL",type:"text",itemTemplate:jsGridItemUrlTemplate,validate:"required",align:"center"},{type:"control",deleteButton:c,width:30}]});q&&f||$("#touchpoint_hub_table").find(".jsgrid-button").click(errorNoAuthorization)}})};
const getJsCodeEventTrackingFunctions=function(){var a="",b=0;eventMetrics.forEach(function(e){if(!0===e.showInObserverJS){b++;var d="#leo-tracking-view-event-code-tpl";3===e.journeyStage||4===e.journeyStage||5===e.journeyStage?d=6===e.scoreModel?"#leo-tracking-conversion-event-code-tpl":"#leo-tracking-action-event-code-tpl":6===e.journeyStage&&(d="#leo-tracking-feedback-event-code-tpl");d=_.template($(d).html());e={counter:b,eventMetricId:e.id,eventMetricName:e.eventLabel.replaceAll(" ","")};a+=
d(e)}});return a},getTrackingJsCode=function(a){a=JSON.parse(decodeURIComponent($(a).data("json")));var b=a.id,e=a.name,d=a.type;a=a.dataSourceUrl;var c=window.baseLeoObserverDomain,k=window.baseStaticDomain,h=getJsCodeEventTrackingFunctions();if(0<d&&12>d){$("#webDataObserverCodeDialog").modal({backdrop:"static",keyboard:!1});$("#code_holder .CodeMirror").remove();d=$("#webDataObserverCodeDialog .code")[0];var f=CodeMirror.fromTextArea(d,{mode:"htmlmixed",lineNumbers:!0,styleActiveLine:!0,matchBrackets:!0,
readOnly:!1});f.setSize(null,480);setTimeout(function(){var l=function(){var n=$("#leo_observer_auto_track").is(":checked"),r=$("#leo_observer_auto_collect_UTM").is(":checked"),p=$("#webDataObserverCodeDialog .code").val().trim().replace("__leoObserverId__",b);p=p.replace("__tpHubName__",e);p=p.replace("__leoObserverDomain__",c);p=p.replace("__staticFileDomain__",k);p=p.replace("__eventTrackingFunctions__",h);p=n?r?p.replace("__autoTrackingFunctions__","LeoObserver.recordEventPageView(parseDataUTM())"):
p.replace("__autoTrackingFunctions__","LeoObserver.recordEventPageView()"):p.replace("__autoTrackingFunctions__","// No auto tracking, please call it yourself");f.getDoc().setValue("\x3cscript\x3e\n"+p+"\n\x3c/script\x3e");f.refresh();f.execCommand("selectAll")};$("#leo_observer_auto_track, #leo_observer_auto_collect_UTM").change(function(){l()});l();addHandlerCopyCodeButton("#webDataObserverCodeDialog .code","#webDataObserverCodeDialog button.btn-copy-code")},350);d=$("#testObserverChromeExtBtn");
d.attr({leoObserverId:b,leoObserverDomain:c,staticFileDomain:k,dataSourceUrl:a});d.click(function(){var l=$(this).attr("leoObserverId"),n=$(this).attr("leoObserverDomain"),r=$(this).attr("staticFileDomain"),p=$(this).attr("dataSourceUrl");p=0<p.indexOf("?")?p:p+"?";window.open(p+"_leoObserverLogDomain\x3d"+n+"\x26_leoObserverId\x3d"+l+"\x26_leoObserverCdnDomain\x3d"+r,"_blank")})}else notifyErrorMessage("Can not get tracking code of offline touchpoint, please use QR code")},getCxFeedbackJsCode=function(a){a=
JSON.parse(decodeURIComponent($(a).data("json")));var b=a.id,e=a.type;30>e?loadFeedbackTemplateItems(b,function(){var d=function(h){var f="https://"+baseUploadDomain+h.qrCodeUrl.replace("./","/");$("#cx_qrHrefUrl").attr("href",f);$("#cx_qrImgSrc").attr("src",f);$("#cx_qrCodeImageURL").val(f);h="https://"+baseLeoObserverDomain+"/webform?tplid\x3d"+h.id+"\x26obsid\x3d"+b;$("#cx_qrFormURL").val(h)};if(0===$("#feedbackTemplateSelector option").length&&0<cxFeedbackTemplates.length)for(var c in cxFeedbackTemplates){var k=
'\x3coption value\x3d"'+c+'" \x3e'+cxFeedbackTemplates[c].title+"\x3c/option\x3e";$("#feedbackTemplateSelector").append(k)}$("#dialogEmbeddedCxFeedbackForm").modal({backdrop:"static",keyboard:!1});$("#feedbackTemplateSelector").val("0").change();0<e&&12>e?($("#tab_panel_cx_web_form").addClass("active").show().find("a").click(),$("#tab_panel_cx_qr_code").removeClass("active"),initEmbeddedFeedbackForm(b,"dialogEmbeddedCxFeedbackForm",cxFeedbackTemplates[0])):($("#tab_panel_cx_qr_code").addClass("active").find("a").click(),
$("#tab_panel_cx_web_form").removeClass("active").hide());d(cxFeedbackTemplates[0]);$("#feedbackTemplateSelector").chosen({width:"100%",no_results_text:"Oops, nothing found!"}).trigger("chosen:updated").change(function(){var h=parseInt($(this).val());h=cxFeedbackTemplates[h];initEmbeddedFeedbackForm(b,"dialogEmbeddedCxFeedbackForm",h);d(h)})}):notifyErrorMessage("Can not get feedback code for the touchpoint hub type \x3d "+e)},getWebLeadFormJsCode=function(a){a=JSON.parse(decodeURIComponent($(a).data("json")));
var b=a.id,e=a.name;a=a.type;if(0<a&&12>a){$("#webLeadFormCodeDialog").modal({backdrop:"static",keyboard:!1});$("#code_holder .CodeMirror").remove();a=$("#webLeadFormCodeDialog .code")[0];var d=CodeMirror.fromTextArea(a,{mode:"htmlmixed",lineNumbers:!0,styleActiveLine:!0,matchBrackets:!0,readOnly:!0});d.setSize(null,480);setTimeout(function(){var c=$("#webLeadFormCodeDialog .code").val().trim().replace("__leoObserverId__",b);c=c.replace("__tpHubName__",e);c=c.replace("__LeoObserverDomain__",baseLeoObserverDomain);
d.getDoc().setValue("\x3cscript\x3e\n"+c+"\n\x3c/script\x3e");d.refresh();d.execCommand("selectAll")},350)}},getQrImageFormCode=function(a){a=decodeURIComponent($(a).data("json"));a=JSON.parse(a);console.log("getQrImageFormCode ",a);var b=a.qrCodeData,e=window.baseUploadDomain;$("#qrImageFormCodeDialog").modal({backdrop:"static",keyboard:!1});a=b.landingPageUrl;var d=b.trackingUrl;b="https://"+e+b.qrCodeImage.replace("./","/");$("#qrHrefUrl").attr("href",b);$("#qrImgSrc").attr("src",b);$("#qrTouchpointHubURL").val(a);
$("#qrTrackingURL").val(d);$("#qrCodeImageURL").val(b)},getRecommenderJsCode=function(a){a=JSON.parse(decodeURIComponent($(a).data("json")));console.log("getRecommenderJsCode ",a);var b=a.id,e=a.name;a=a.type;if(0<a&&12>a){$("#dialogEmbeddedRecomender").modal({backdrop:"static",keyboard:!1});$("#dialogEmbeddedRecomender .CodeMirror").remove();a=$("#dialogEmbeddedRecomender .code")[0];var d=CodeMirror.fromTextArea(a,{mode:"htmlmixed",lineNumbers:!0,styleActiveLine:!0,matchBrackets:!0,readOnly:!1});
d.setSize(null,480);setTimeout(function(){var c=$("#dialogEmbeddedRecomender .code").val().trim().replace("__observerId__",b);c=c.replace("__tpHubName__",e);c=c.replace("__LeoObserverDomain__",baseLeoObserverDomain);var k="leo_recommender_"+b;d.getDoc().setValue('\x3cscript id\x3d"'+k+'"\x3e\n'+c+"\n\x3c/script\x3e");d.refresh();d.execCommand("selectAll");addHandlerCopyCodeButton("#dialogEmbeddedRecomender .code","#dialogEmbeddedRecomender button.btn-copy-code")},350)}},showRedisSourceInfo=function(a){a=
decodeURIComponent($(a).data("json"));var b=JSON.parse(a).dataSourceUrl.split("/");a=b[2];b=b[3];$("#dataSourceConfigHostAndPort").text(a);$("#dataSourceConfigTouchpointName").text(b);$("#redisSourceInfoDialog").modal({backdrop:"static",keyboard:!1})},showObserverApiInfo=function(a){a=decodeURIComponent($(a).data("json"));a=JSON.parse(a);a="string"===typeof a.accessTokens.default_key?a.accessTokens.default_key:"";$("#leoCdpApiTokenKey").val("default_key");$("#leoCdpApiTokenValue").val(a);$("#leoCdpGetProfileApiUrl").text(baseLeoObserverUrl+
"/api/profile");$("#leoCdpTrackEventApiUrl").text(baseLeoObserverUrl+"/api/event");$("#leoCdpListEventsApiUrl").text(baseLeoObserverUrl+"/api/list-events?profileId\x3d[profile_ID]\x26startIndex\x3d0\x26numberResult\x3d10 ");$("#observerApiInfoDialog").modal({backdrop:"static",keyboard:!1})},resetAccessTokenForLeoObserverApi=function(){LeoAdminApiUtil.callPostAdminApi(baseLeoAdminUrl+"/cdp/touchpointhub/reset-access-token",{},function(a){0===a.httpCode&&""===a.errorMessage&&(a=a.data,$("#leoCdpApiTokenKey").val(a.tokenKey),
$("#leoCdpApiTokenValue").val(a.tokenValue),iziToast.success({title:"Reset Access Token",message:"The new access token is generated successfully!"}))})},initDataObserverJsGridPlugin=function(){var a=function(b){jsGrid.Field.call(this,b)};a.prototype=new jsGrid.Field({sorter:function(b,e){return 0},itemTemplate:function(b){if(""!==b.data){console.log("observerModel ",b);var e=b.data,d=b.type;b=b.firstPartyData;var c="";30===d?c=c+'\x3cbutton type\x3d"button" class\x3d"btn btn-success  btn-sm btn-do-now btn-get-code" onclick\x3d"showObserverApiInfo(this)"  data-json\x3d"'+
(e+'" \x3e\x3ci class\x3d"fa fa-info-circle" style\x3d"font-size:1.1em" aria-hidden\x3d"true"\x3e\x3c/i\x3e API Information \x3c/button\x3e'):31===d?c=c+'\x3cbutton type\x3d"button" class\x3d"btn btn-success  btn-sm btn-do-now btn-get-code" onclick\x3d"showRedisSourceInfo(this)"  data-json\x3d"'+(e+'" \x3e\x3ci class\x3d"fa fa-info-circle" style\x3d"font-size:1.1em" aria-hidden\x3d"true"\x3e\x3c/i\x3e Redis Information \x3c/button\x3e'):32===d?c=c+'\x3cbutton type\x3d"button" class\x3d"btn btn-success  btn-sm btn-do-now btn-get-code" onclick\x3d"showKafkaSourceInfo(this)"  data-json\x3d"'+
(e+'" \x3e\x3ci class\x3d"fa fa-info-circle" style\x3d"font-size:1.1em" aria-hidden\x3d"true"\x3e\x3c/i\x3e Kafka Information \x3c/button\x3e'):b?30>d&&(c='\x3cbutton type\x3d"button" class\x3d"btn btn-primary btn-sm btn-get-code" onclick\x3d"getQrImageFormCode(this)" data-json\x3d"'+(e+'" \x3e\x3ci class\x3d"fa fa-qrcode" style\x3d"font-size:1.1em" aria-hidden\x3d"true"\x3e\x3c/i\x3e  QR Image Code \x3c/button\x3e'),0<d&&12>d?(c=c+'\x3cbutton type\x3d"button" class\x3d"btn btn-goto-router  btn-sm btn-get-code" onclick\x3d"getTrackingJsCode(this)"  data-json\x3d"'+
(e+'" \x3e\x3ci class\x3d"fa fa-code" style\x3d"font-size:1.1em" aria-hidden\x3d"true"\x3e\x3c/i\x3e Event Tracking Code \x3c/button\x3e\x3cbutton type\x3d"button" class\x3d"btn btn-success btn-sm btn-get-code" onclick\x3d"getCxFeedbackJsCode(this)" '),c+=' data-json\x3d"'+e+'" \x3e\x3ci class\x3d"fa fa-code" style\x3d"font-size:1.1em" aria-hidden\x3d"true"\x3e\x3c/i\x3e CX Tracking Code \x3c/button\x3e\x3cbutton type\x3d"button" class\x3d"btn btn-info  btn-sm btn-get-code" onclick\x3d"getRecommenderJsCode(this)" ',
c+=' data-json\x3d"'+e+'" \x3e\x3ci class\x3d"fa fa-code" style\x3d"font-size:1.1em" aria-hidden\x3d"true"\x3e\x3c/i\x3e Personalized Widget \x3c/button\x3e'):(c+='\x3cbutton type\x3d"button" class\x3d"btn btn-success btn-sm btn-get-code" onclick\x3d"getCxFeedbackJsCode(this)" ',c+=' data-json\x3d"'+e+'" \x3e\x3ci class\x3d"fa fa-code" style\x3d"font-size:1.1em" aria-hidden\x3d"true"\x3e\x3c/i\x3e CX Tracking Code \x3c/button\x3e')):c='\x3cbutton type\x3d"button" class\x3d"btn btn-primary btn-sm btn-get-code" onclick\x3d"getQrImageFormCode(this)" data-json\x3d"'+
(e+'" \x3e\x3ci class\x3d"fa fa-qrcode" style\x3d"font-size:1.1em" aria-hidden\x3d"true"\x3e\x3c/i\x3e QR Image Code \x3c/button\x3e');return c}return""},insertTemplate:function(b){return this._insertCode=b},editTemplate:function(b){return this._editCode=b},insertValue:function(){return this._insertCode},editValue:function(){return this._editCode}});jsGrid.fields.LeoDataObserver=a},loadDataObserverList=function(a){initDataObserverJsGridPlugin();LeoAdminApiUtil.getSecuredData("/cdp/observers",{journeyMapId:currentJourneyMapId},
function(b){var e=b.data.eventObservers;b=b.data.touchpointHubTypes;for(var d=0;d<e.length;d++){var c=e[d];c.index=d+1;var k=b[c.type];c.typeName=k;var h=c.firstPartyData,f=c.type;k={id:c.id,name:c.name,type:f,typeName:k};k.collectDirectly=c.collectDirectly;k.qrCodeData=c.qrCodeData;k.accessTokens=c.accessTokens;k.securityCode=c.securityCode;k.dataSourceUrl=c.dataSourceUrl;k=JSON.stringify(k);c.observerModel={type:f,data:encodeURIComponent(k),firstPartyData:h}}$(a).jsGrid({width:"100%",height:"auto",
inserting:!1,editing:!1,sorting:!1,paging:!1,data:e,fields:[{name:"index",title:"",type:"number",width:20,align:"center"},{name:"name",title:"Name",type:"string",align:"center",css:"observer_name"},{name:"id",title:"Unique ID",type:"string",width:68,align:"center",css:"observer_id"},{name:"firstPartyData",title:"First-party Data",type:"CheckBoxIcon",width:40,align:"center"},{name:"collectDirectly",title:"Tracking directly",type:"CheckBoxIcon",width:40,align:"center"},{name:"dataSourceUrl",title:"URL",
type:"UrlLink",width:120,align:"center",css:"observer_url"},{name:"observerModel",title:"Actions",type:"LeoDataObserver",width:72,align:"center"}]})})},loadDataJourneyMapsByFilter=function(a,b,e,d,c){var k=[{data:"name"},{data:"authorizedViewers"},{data:"authorizedEditors"},{data:"createdAt"},{data:"updatedAt"},{data:"defaultMetricName"}],h=getUserSession();if(h)return $(e).DataTable({lengthMenu:[[20,30,40],[20,30,40]],processing:!0,serverSide:!0,searching:!0,search:{return:!0},ordering:!0,serverMethod:"POST",
ajax:{url:baseLeoAdminUrl+"/cdp/journeymaps/filter",contentType:"application/json",beforeSend:function(f){$(b).show();$(a).hide();f.setRequestHeader("leouss",h)},data:function(f){var l=f.order[0];f.sortField=k[l.column].data;f.sortAsc="asc"===l.dir;f.searchValue=f.search.value;delete f.order;delete f.search;"function"===typeof d&&(f=d(f),$(e).data("authorizedViewer",f.authorizedViewer),$(e).data("authorizedEditor",f.authorizedEditor));return JSON.stringify(f)},dataSrc:function(f){var l=f.canInsertData,
n=f.canEditData,r=f.canDeleteData;$(e).data("canInsertData",l);$(e).data("canEditData",n);$(e).data("canDeleteData",r);"function"===typeof c&&c(f);$(b).hide();$(a).show();return f.data}},columnDefs:[{render:function(f,l,n){return'\x3cdiv class\x3d"highlight_text text-center" title\x3d"'+f+'" \x3e'+textTruncate(f,150)+"\x3c/div\x3e"},targets:0,orderable:!1},{render:function(f,l,n){l=$(e).data("authorizedViewer");n='\x3ci style\x3d"font-size:1.4em;color:#3300ff" class\x3d"fa fa-square-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e';
f.includes(l)&&(n='\x3ci style\x3d"font-size:1.4em;color:#3300ff" class\x3d"fa fa-check-square-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e');return'\x3cdiv class\x3d" text-center"  \x3e'+n+"\x3c/div\x3e"},targets:1},{render:function(f,l,n){l=$(e).data("authorizedEditor");n='\x3ci style\x3d"font-size:1.4em;color:#3300ff" class\x3d"fa fa-square-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e';f.includes(l)&&(n='\x3ci style\x3d"font-size:1.4em;color:#3300ff" class\x3d"fa fa-check-square-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e');
return'\x3cdiv class\x3d" text-center"  \x3e'+n+"\x3c/div\x3e"},targets:2},{render:function(f,l,n){return'\x3cdiv class\x3d"small text-center" style\x3d"color:#3300ff;" \x3e'+moment.utc(f).local().format("YYYY-MM-DD HH:mm:ss")+"\x3c/div\x3e"},targets:3},{render:function(f,l,n){return'\x3cdiv class\x3d"small text-center" style\x3d"color:#3300ff;" \x3e'+moment.utc(f).local().format("YYYY-MM-DD HH:mm:ss")+"\x3c/div\x3e"},targets:4},{render:function(f,l,n){return'\x3cdiv class\x3d" text-center"  \x3e'+
f+"\x3c/div\x3e"},targets:5},{render:function(f,l,n){return'\x3ca class\x3d"control" title\x3d"Segment Report" href\x3d"#calljs-leoCdpRouter(\'Data_Journey_Map\',\''+(n.id+'\')" \x3e \x3ci class\x3d"fa fa-info-circle" aria-hidden\x3d"true"\x3e\x3c/i\x3e View\x3c/a\x3e')},targets:6}],columns:k})};