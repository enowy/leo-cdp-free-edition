'use strict';const USING_LEO_BOT_WITH_AI=""!==dnsDomainLeoBot,LEOBOT_URL_ASK=baseLeoBotUrl+"/ask",LEOBOT_URL_GET_INFO=baseLeoBotUrl+"/get-visitor-info";var leoBotActionList=[];leoBotActionList.push({text:"Help me",value:"Help me",icon:"info-circle"});leoBotActionList.push({text:"Create short URL",value:"Create short URL",icon:"link"});leoBotActionList.push({text:"Search profile",value:"Search profile",icon:"search"});
USING_LEO_BOT_WITH_AI&&(leoBotActionList.push({text:"Ask question",value:"Ask question",icon:"question"}),leoBotActionList.push({text:"Write content",value:"Write content",icon:"file-word-o"}),leoBotActionList.push({text:"Create slides",value:"Create slides",icon:"file-powerpoint-o"}));window.leoBotUI=!1;function getBotUI(){!1===window.leoBotUI&&(window.leoBotUI=new BotUI("LEO_ChatBot_Container"));return window.leoBotUI}var notifyLeoBotOk=function(){notifySuccessMessage("\x3cb\x3eLEO ChatBot with A.I \x3c/b\x3e is ready !")};
function checkLeoBotIsServerReady(b){if(USING_LEO_BOT_WITH_AI){var a=LEOBOT_URL_GET_INFO+"?visitor_id\x3d"+b+"\x26_\x3d"+(new Date).getTime();$.getJSON(a,function(c){0===c.error_code?notifyLeoBotOk():updateVisitorProfileAndActivateLeoBot(b)})}}function updateVisitorProfileAndActivateLeoBot(b){1===currentUserProfile.status&&LeoAdminApiUtil.callPostAdminApi(baseLeoAdminUrl+"/cdp/leo-bot/activate",{visitorId:b},function(a){a.data?notifyLeoBotOk():LeoAdminApiUtil.logErrorPayload(a)})}
function initLeoChatBot(b){$("#leoChatBotDialog").modal({backdrop:"static",keyboard:!1});getBotUI().action.hide();getBotUI().message.removeAll();$("#leobot_answer_in_language").show();LeoObserverProxy.synchLeoVisitorId(function(a){window.currentUserProfile&&(window.currentUserProfile.profileVisitorId=a,leoBotSayHello())})}
var closeLeoChatBotDialog=function(){getBotUI().action.hide();getBotUI().message.removeAll().then(function(){$("#leoChatBotDialog").modal("hide")})},leoBotDoAction=function(b){var a=b.value;b="\x3cb\x3e"+a+"\x3c/b\x3e";getBotUI().message.add({human:!0,content:b,type:"html"}).then(function(){"Create short URL"===a?showChatBotLoader().then(function(c){leoBotCreateShortUrl(function(){getBotUI().message.remove(c)})}):"Help me"===a?leoBotHelpUser():"Search profile"===a?leoBotSearchProfiles():"Write content"===
a?leoBotWriteContent():"Create slides"===a?leoBotCreateSlides():leoBotPromptQuestion()})},leoBotSayHello=function(){var b="Hello "+currentUserProfile.displayName+", how can LEO help you ?";getBotUI().message.bot(b).then(function(){return getBotUI().action.button({delay:1E3,addMessage:!1,action:leoBotActionList})}).then(function(a){leoBotDoAction(a)})},leoBotPromptQuestion=function(b){getBotUI().action.text({delay:"number"===typeof b?b:800,action:{icon:"question-circle",cssClass:"leobot-question-input",
value:"",placeholder:"Give me a question"}}).then(function(a){a=a.value;leoBotAskServer("ask",a,a)})},leoBotWriteContent=function(){var b=function(a){getBotUI().action.text({delay:500,action:{icon:"question-circle",cssClass:"leobot-question-input",value:"",placeholder:"Give me the purpose of content"}}).then(function(c){leoBotAskServer("content",a,"Write a blog post about "+a,", the purpose of blog post is "+c.value)})};getBotUI().action.text({delay:500,action:{icon:"question-circle",cssClass:"leobot-question-input",
value:"",placeholder:"Give me the title of content"}}).then(function(a){b(a.value)})},leoBotCreateSlides=function(){var b=function(a){getBotUI().action.text({delay:500,action:{icon:"question-circle",cssClass:"leobot-question-input",value:"",placeholder:"Give me the number of slides in presentation"}}).then(function(c){var e=parseInt(c.value);isNaN(e)?leoBotShowInfo(c.value+" is not a number !",function(){b(a)}):leoBotAskServer("presentation",a,'Create a presentation slide, just text and no images, with the title is "'+
a+'" '," in "+e+' slides. Every slide must begin with the prefix "## " ',"markdown")})};getBotUI().action.text({delay:500,action:{icon:"question-circle",cssClass:"leobot-question-input",value:"",placeholder:"Give me a title of presentation slide"}}).then(function(a){b(a.value)})},leoBotHelpUser=function(){var b=Handlebars.compile($("#tpl_leocdp_documents").html())({});USING_LEO_BOT_WITH_AI?leoBotShowAnswer("html",b,leoBotPromptQuestion):leoBotShowAnswer("html",b)},leoBotSearchProfiles=function(){getBotUI().action.text({delay:500,
action:{icon:"question-circle",cssClass:"leobot-question-input",placeholder:"Give me a name, email address or phone number of customer"}}).then(function(b){b=Base64.encode(b.value);location.hash="calljs-leoCdpRouter('Customer_Profile_Search','"+b+"')";closeLeoChatBotDialog()})},leoBotCreateShortUrl=function(b){LeoAdminApiUtil.getSecuredData(window.baseLeoAdminUrl+"/cdp/asset-group/list-by-asset-type",{assetType:"15"},function(a){b();"object"===typeof a.data[0]?(a=a.data[0],a=leoCdpRouterParams(["",
a.id,a.categoryIds[0]]),location.hash="calljs-leoCdpRouter('Asset_Short_Link_Editor','"+a+"')",closeLeoChatBotDialog()):LeoAdminApiUtil.logErrorPayload(a)})},leoBotCreateNewItem=function(b,a,c){var e=function(){$("#asset_item_title").val(a).focus();var d=window.trixElement;"object"===typeof d&&"content"===b?d.editor.loadHTML(c):"presentation"===b&&"function"===typeof formatMarkdownToPresentation&&formatMarkdownToPresentation(c)};LeoAdminApiUtil.getSecuredData(baseLeoAdminUrl+"/cdp/asset-group/get-default",
{context:b},function(d){0===d.httpCode&&""===d.errorMessage?(d=d.data,newAssetItemEditor(d.assetType,d.id,d.categoryIds[0]),setTimeout(e,2E3)):LeoAdminApiUtil.logErrorPayload(d)})},leoBotShowAnswer=function(b,a,c){var e="",d="leobot-answer";"markdown"===b?(e='\x3ctextarea style\x3d"width: 100%; height: 220px;" readonly\x3d""\x3e '+a+"\x3c/textarea\x3e",d="leobot-answer-in-markdown"):e=a;console.log("leoBotShowAnswer",b);getBotUI().message.add({human:!1,cssClass:d,content:e,type:"html"}).then(function(){$("div.botui-message").find("a").each(function(){$(this).attr("target",
"_blank");var g=$(this).attr("href");0>g.indexOf("google.com")&&(g="https://www.google.com/search?q\x3d"+encodeURIComponent($(this).text()));$(this).attr("href",g)});c()})},leoBotShowInfo=function(b,a){getBotUI().message.add({human:!1,cssClass:"leobot-info",content:b}).then(function(){a()})},leoBotAskServer=function(b,a,c,e,d){"string"===typeof e&&(c+=e);var g="string"===typeof d?d:"html",l=parseFloat($("#leobot_creativity_score").val());if(1<a.length&&"exit"!==a){var m=function(h){"ask"===b?leoBotShowAnswer(g,
h,function(){leoBotPromptQuestion(120<h.length?6E3:2E3)}):leoBotShowAnswer(g,h,function(){var f="Would you like to write a blog post?";"presentation"===b&&(f="Would you like to create a presentation slide ?");getBotUI().message.bot(f).then(function(){return getBotUI().action.button({delay:1E3,action:[{text:"Yes",value:"yes"},{text:"No",value:"no"}]})}).then(function(k){"yes"===k.value?getBotUI().message.bot("Okay").then(function(){closeLeoChatBotDialog();leoBotCreateNewItem(b,a,h)}):closeLeoChatBotDialog()})})};
showChatBotLoader().then(function(h){var f={prompt:c,question:a};f.visitor_id=currentUserProfile.profileVisitorId;f.answer_in_format=g;f.temperature_score=l;f.answer_in_language=$("#leobot_answer_in_language").val();LeoAdminApiUtil.callPostApi(LEOBOT_URL_ASK,f,function(k){getBotUI().message.remove(h);"string"===typeof k.answer?m(k.answer):k.error?(notifyErrorMessage(k.answer),closeLeoChatBotDialog()):notifyErrorMessage("LEO BOT is getting a system error !")},closeLeoChatBotDialog)})}else closeLeoChatBotDialog()},
showChatBotLoader=function(){return getBotUI().message.add({loading:!0,content:""})},recommendContentIdeas=function(b){b=document.getElementById("suggestedVideoTpl").innerHTML;b=Handlebars.compile(b)({title:"My New Post",body:"This is my first post!"});getBotUI().message.bot({delay:500,content:b});setTimeout(function(){$("#suggestedVideoCarousel").on("slid.bs.carousel",function(){var a=getActiveVideoInfo();console.log(a);$("#playlist_holder").empty();leoPlayVideoReport(a.video)})},500)};
function getRandomInt(b,a){b=Math.ceil(b);a=Math.floor(a);return Math.floor(Math.random()*(a-b+1))+b}function leoPlayVideoReport(b){var a=getRandomInt(1,1E5)+"_"+(new Date).getTime(),c=document.createElement("div");c.setAttribute("id",a);c.setAttribute("class","videoholder");document.getElementById("playlist_holder").appendChild(c);MediaPlayerOne.create(!0,a,b,"",[],3,[],function(e){setTimeout(function(){e.muted(!1)},1E3)})}
function getActiveVideoInfo(){var b=$("#suggestedVideoCarousel .active"),a=b.data("title");b=b.data("video");return{title:a,video:b}};