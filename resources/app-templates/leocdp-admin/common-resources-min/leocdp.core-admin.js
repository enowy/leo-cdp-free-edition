'use strict';const prefixCallJs="#calljs-",pageDomSelector="#page_main_content";
$(document).ready(function(){1200>window.innerWidth&&iziToast.warning({title:"Warning",message:"\x3cb\x3e Your screen size is too small ! \x3cbr\x3e The screen's width for Leo CDP Admin needs to be more than 1200 px \x3c/b\x3e "});if(systemDbReady)if(LeoAdminApiUtil.isLoginSessionOK()){var a=location.hash.indexOf(prefixCallJs);if(0<=a)LeoCdpAdmin.loadView("/view/main-view.html?admin\x3d1","#wrapper",function(){mainViewReady();setTimeout(function(){try{var d=decodeURIComponent(location.hash.substring(a+
prefixCallJs.length).trim());0===d.indexOf("leoCdpRouter")&&eval(d);$(pageDomSelector).show()}catch(c){alert(c)}},900)},!0);else{var b=0===location.hash.length?"/view/main-view.html?admin\x3d1":location.hash.substring(1);LeoCdpAdmin.loadView(b,"#wrapper",function(){mainViewReady();setTimeout(function(){leoCdpRouter("defaultRouter")},1212);$(pageDomSelector).show()},!0)}}else LeoCdpAdmin.loadView("/view/login.html?admin\x3d1","#wrapper");else LeoCdpAdmin.loadView("/view/setup.html?admin\x3d1","#wrapper")});
$(window).on("hashchange",function(){var a=location.hash.indexOf(prefixCallJs);console.log("\x3d\x3d\x3e hashchange: "+location.hash+" idx:"+a);if(0<=a)try{var b=decodeURIComponent(location.hash.substring(a+prefixCallJs.length)).trim();0===b.indexOf("leoCdpRouter")&&eval(b)}catch(d){console.error(d)}else LeoCdpAdmin.loadView(location.hash,"#wrapper")});
function loadMediaInfoView(a,b,d){var c=a.trim();$("#mediaInfoDowdloadUrl").hide();if(3===b)if(0!=a.indexOf("http")&&(a=window.baseLeoAdminUrl+a),$("#mediaInfoDowdloadUrl").show().find("a").attr("href",a),0<a.indexOf(".pdf"))c='\x3ciframe width\x3d"100%" height\x3d"800" frameborder\x3d"0" src\x3d"public/js/doc-viewerjs/index.html#'+a+'"\x3e\x3c/iframe\x3e';else if(0<a.indexOf(".docx")||0<a.indexOf(".doc")||0<a.indexOf(".docm")||0<a.indexOf(".pptx")||a.indexOf(".ppt")||a.indexOf(".xls")||0<a.indexOf(".xlsx"))c=
encodeURIComponent(a),c='\x3ciframe width\x3d"100%" height\x3d"650" frameborder\x3d"0" src\x3d"https://view.officeapps.live.com/op/embed.aspx?src\x3d'+c+'"\x3e\x3c/iframe\x3e';else{if(0<a.indexOf(".png")||0<a.indexOf(".jpg"))c='\x3cimg src\x3d"'+a+'" style\x3d"max-width:100%;max-height:600px;" /\x3e'}else if(4===b)if(0<=a.indexOf("https://drive.google.com/open"))c='\x3cdiv class\x3d"embed-responsive embed-responsive-4by3"\x3e\x3ciframe class\x3d"embed-responsive-item" frameborder\x3d"0" src\x3d"https://drive.google.com/file/d/'+
getQueryMapFromUrl(postModel.mediaInfo).id+'/preview"\x3e\x3c/iframe\x3e\x3c/div\x3e';else if(0<=a.indexOf("https://drive.google.com/file/d/"))c=a.replace("/view","/preview"),c='\x3cdiv class\x3d"embed-responsive embed-responsive-4by3"\x3e\x3ciframe class\x3d"embed-responsive-item" frameborder\x3d"0" src\x3d"'+c+'"\x3e\x3c/iframe\x3e\x3c/div\x3e';else if(0<=a.indexOf(".mp4")||0<=a.indexOf("https://youtu.be")||0<=a.indexOf("https://www.youtube.com")){var e="videoPlaceholder"+(new Date).getTime();c=
'\x3cdiv id\x3d"'+e+'" class\x3d"videoholder" style\x3d"width: 100%;"\x3e\x3c/div\x3e';setTimeout(function(){0!=a.indexOf("http")&&(a=window.baseLeoAdminUrl+a);MediaPlayerOne.create(!0,e,a,"",[],0,0,function(f){f.volume(0)})},360);$("#mediaInfoDowdloadUrl").show().find("a").attr("href",a)}""===c&&(c='\x3cdiv class\x3d"alert alert-info"\x3e\x3c/div\x3e');1!==b&&9!==b||!d?$("#mediaInfoPreview").html(c):$("#mediaInfoPreview").hide()}
function getHeadLinesImagsObject(){var a={};$("#headline_images .thumbnail").each(function(){var b=$(this).find("img").attr("src"),d="",c=$(this).find("p.editable");c.hasClass("editable-empty")||(d=c.text().trim());a[b]=d});return a}function searchContent(a){$("#search_campaign_box").val(a);window.currentSearchKeywords=a;LeoCdpAdmin.loadView("/view/search-view.html?admin\x3d1",pageDomSelector,function(){loadSearchingByKeywords(a)})}window.currentSearchKeywords=window.currentSearchKeywords||"";
function searchingByKeywords(){var a=$("#search_campaign_box").val();window.currentSearchKeywords!=a&&(window.currentSearchKeywords=a,location.href='#calljs-searchContent("'+encodeURIComponent(a)+'")')}
function initMainSeach(){var a=lscache.get("usersession"),b={url:window.baseLeoAdminUrl+"/cdp/profiles/search-suggestion",ajaxSettings:{beforeSend:function(d){d.setRequestHeader("leouss",a)}},getValue:"name",list:{match:{enabled:!0},maxNumberOfElements:10,showAnimation:{type:"slide",time:200},hideAnimation:{type:"slide",time:200},sort:{enabled:!0},onSelectItemEvent:function(){var d=$("#search_campaign_box"),c=d.getSelectedItemData().name;c&&d.val(c).trigger("change")},onChooseEvent:function(){searchingByKeywords()}},
theme:"round"};$("#search_campaign_box").easyAutocomplete(b).on("keyup",function(d){13==d.keyCode&&(searchingByKeywords(),$(".easy-autocomplete-container \x3e ul").hide())})}function toggleDiv(a,b){b=$(b);b.is(":visible")?(b.hide(),b=$(a).html().replace("Hide","Show")):(b.show(),b=$(a).html().replace("Show","Hide"));$(a).html(b)}
const setupTabPanels=function(a){$('ul[class\x3d"nav nav-tabs"]').each(function(){var b=$(this),d=$(this).data("tab-content");b.find("a").click(function(){b.find("li").removeClass("active");$("#"+d).find('div[class*\x3d"tab-pane"]').removeClass("active");$(this).parent().addClass("active");var c=$(this).data("target-tab");$("#"+c).addClass("active")});!0===a&&6===currentUserProfile.role&&b.find('li[data-for-superadmin\x3d"true"]').show()})},loadModalboxHtml=function(a){$.ajax({url:a,type:"GET",success:function(b){$("#common_modalbox_html").append(b)},
error:function(b){console.error("loadModalboxHtml.error: ",b)}})},openLocationUrl=function(a){a=$(a).data("url");eModal.iframe(a,"Location Map")},makeNodeEditable=function(a){a.attr("title","Editor").editable({type:"textarea",rows:3,inputclass:"editable_text_editor"})},defaultDateFormat="YYYY-MM-DD",defaultDateTimeFormat="YYYY-MM-DD HH:mm:ss",initDateFilterComponent=function(a,b,d,c){a=!0===a?defaultDateTimeFormat:defaultDateFormat;var e="number"===typeof c?c:90;c=(new moment).add(1,"days").format(a);
e=(new moment).subtract(e,"days").format(a);null!=b?$("#beginFilterDate").datetimepicker({useCurrent:!1,format:a,defaultDate:(new moment(b)).format(a)}):$("#beginFilterDate").datetimepicker({format:a,defaultDate:e});null!=d?$("#endFilterDate").datetimepicker({useCurrent:!1,format:a,defaultDate:(new moment(d)).format(a)}):$("#endFilterDate").datetimepicker({useCurrent:!1,format:a,defaultDate:c})},getDateFilterValues=function(){if(1===$("#disable_date_filter:checked").length)return{beginFilterDate:"",
endFilterDate:""};var a=$("#beginFilterDate").data("DateTimePicker").date().format(),b=$("#endFilterDate").data("DateTimePicker").date().format();return{beginFilterDate:a,endFilterDate:b}},getRawDateFilterValues=function(){if(1===$("#disable_date_filter:checked").length)return{beginFilterDate:"",endFilterDate:""};var a=$("#beginFilterDate").data("DateTimePicker").date(),b=$("#endFilterDate").data("DateTimePicker").date();return{beginFilterDate:a,endFilterDate:b}};
document.addEventListener("trix-file-accept",function(a){a.preventDefault()});const getOperatorsForStringField=function(){return"equal not_equal is_null is_not_null begins_with not_begins_with contains not_contains ends_with not_ends_with is_empty is_not_empty".split(" ")},getOperatorsForNumberField=function(){return"equal not_equal less less_or_equal greater greater_or_equal between not_between".split(" ")},getOperatorsForDateField=function(){return"equal not_equal less less_or_equal greater greater_or_equal".split(" ")};
function roundNumber(a,b){return Number(Math.round(a+"e"+b)+"e-"+b)}function getCheckedBoxIcon(a){var b='\x3ci style\x3d"font-size:1.5em;color:#3300ff" class\x3d"fa fa-check-square-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e';a||(b='\x3ci style\x3d"font-size:1.5em;color:#3300ff" class\x3d"fa fa-square-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e');return b}
function getTableRowCheckedBox(a,b,d,c){b=b.substring(1)+"_"+d;return'\x3cdiv class\x3d"datatable_text text-center datatable_row_checkbox" onclick\x3d"datatableRowCheckboxHandler(this)" data-row-checkbox-id\x3d"'+b+'" \x3e\x3ci id\x3d"row_checkbox_'+(b+'" data-item-id\x3d"'+d+'" data-handler-name\x3d"'+a+'" class\x3d"'+(c?"fa fa-check-square-o":"fa fa-square-o")+'" aria-hidden\x3d"true" data-selected\x3d"'+(c?"1":"0")+'" \x3e\x3c/i\x3e\x3c/div\x3e')}
function datatableRowCheckboxHandler(a){a=$(a).data("row-checkbox-id");a=$("#row_checkbox_"+a);var b=a.data("selected"),d=a.data("handler-name"),c=a.data("item-id");d=window[d];"0"==b?(a.attr("class","fa fa-check-square-o").data("selected","1"),"function"===typeof d&&d(!0,c)):(a.attr("class","fa fa-square-o").data("selected","0"),"function"===typeof d&&d(!1,c))}
function checkToAddUrlValueToDOM(a){return 0===a.trim().indexOf("http")?$("\x3ca/\x3e").attr("href",a).attr("target","_blank").html(a)[0].outerHTML:a}function buildSystemUserInfoLink(a){var b="#calljs-leoCdpRouter('User_Login_Report','"+a+"')";return $("\x3ca/\x3e").attr("href",b).html(a)[0].outerHTML}const mapClipboardJS={};
function addHandlerCopyCodeButton(a,b){return null==mapClipboardJS[b]?(mapClipboardJS[b]=!0,new ClipboardJS(b,{text:function(d){notifySuccessMessage("Successfully copied to clipboard!");return getCodeMirrorNative(a).getDoc().getValue()}}),!0):!1}
function getCodeMirrorNative(a){"string"===typeof a&&(a=document.querySelector(a));if(null===a)throw Error("Element does not reference a CodeMirror instance.");return-1<a.className.indexOf("CodeMirror")?a.CodeMirror:"TEXTAREA"===a.tagName?a.nextSibling.CodeMirror:null}function openUrlInNewTab(a,b){a.stopPropagation();window.open($(b).attr("title"),"_blank");return!1}
function stringToSlug(a){for(var b=0;76>b;b++)a=a.replace(RegExp("àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ"[b],"gi"),"aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy"[b]);return a=a.toLowerCase().trim().replace(/[^a-z0-9\-]/g,"-").replace(/-+/g,"-")}const CheckBoxIcon=function(a){jsGrid.Field.call(this,a)};
CheckBoxIcon.prototype=new jsGrid.Field({sorter:function(a,b){return 0},itemTemplate:function(a){return getCheckedBoxIcon(a)},insertTemplate:function(a){return this._insertCode=a},editTemplate:function(a){return this._editCode=a},insertValue:function(){return this._insertCode},editValue:function(){return this._editCode}});jsGrid.fields.CheckBoxIcon=CheckBoxIcon;var CustomCheckBox=function(a){jsGrid.Field.call(this,a)};
CustomCheckBox.prototype=new jsGrid.Field({sorter:function(a,b){return 0},itemTemplate:function(a){return'\x3cdiv class\x3d"text-center"\x3e'+getCheckedBoxIcon(a)+"\x3c/div\x3e"},insertTemplate:function(a){var b=$('\x3cinput type\x3d"checkbox" \x3e');a&&b.attr("checked","checked");return this._insertCheckbox=$('\x3cdiv class\x3d"text-center"\x3e'+b[0].outerHTML+"\x3c/div\x3e")},editTemplate:function(a){var b=$('\x3cinput type\x3d"checkbox" \x3e');a&&b.attr("checked","checked");return this._editCheckbox=
$('\x3cdiv class\x3d"text-center"\x3e'+b[0].outerHTML+"\x3c/div\x3e")},insertValue:function(){return 0<this._insertCheckbox.find("input:checked").length},editValue:function(){return 0<this._editCheckbox.find("input:checked").length}});jsGrid.fields.CustomCheckBox=CustomCheckBox;const UrlLink=function(a){jsGrid.Field.call(this,a)};
UrlLink.prototype=new jsGrid.Field({sorter:function(a,b){return 0},itemTemplate:function(a){var b=45<a.length?a.substring(0,45)+"...":a;return 0===a.indexOf("https://plus.codes/")?'\x3ca href\x3d"javascript:" style\x3d"font-size:11.6px" data-url\x3d"'+a+'" onclick\x3d"openLocationUrl(this)" \x3e'+b+"\x3c/a\x3e":'\x3ca href\x3d"'+a+'"  style\x3d"font-size:11.6px" target\x3d"_blank" \x3e'+b+"\x3c/a\x3e"},insertTemplate:function(a){return this._insertCode=a},editTemplate:function(a){return this._editCode=
a},insertValue:function(){return this._insertCode},editValue:function(){return this._editCode}});jsGrid.fields.UrlLink=UrlLink;const BoldText=function(a){jsGrid.Field.call(this,a)};BoldText.prototype=new jsGrid.Field({sorter:function(a,b){return 0},itemTemplate:function(a){return"\x3cb\x3e"+a+"\x3c/b\x3e"},insertTemplate:function(a){return this._insertCode=a},editTemplate:function(a){return this._editCode=a},insertValue:function(){return this._insertCode},editValue:function(){return this._editCode}});
jsGrid.fields.BoldText=BoldText;const JsGridLocalTime=function(a){jsGrid.Field.call(this,a)};JsGridLocalTime.prototype=new jsGrid.Field({sorter:function(a,b){return 0},itemTemplate:function(a){return"\x3cspan\x3e"+moment.utc(a).local().format("YYYY-MM-DD HH:mm:ss")+"\x3c/span\x3e"},insertTemplate:function(a){return this._insertCode=a},editTemplate:function(a){return this._editCode=a},insertValue:function(){return this._insertCode},editValue:function(){return this._editCode}});
jsGrid.fields.JsGridLocalTime=JsGridLocalTime;