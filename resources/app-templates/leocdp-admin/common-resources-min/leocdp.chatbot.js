'use strict';const USING_LEO_BOT_WITH_AI=""!==dnsDomainLeoBot,LEOBOT_URL_ASK=baseLeoBotUrl+"/ask",LEOBOT_URL_IS_READY=baseLeoBotUrl+"/is-ready";var leoBotActionList=[];leoBotActionList.push({text:"Help me",value:"Help me",icon:"info-circle"});leoBotActionList.push({text:"Create short URL",value:"Create short URL",icon:"link"});leoBotActionList.push({text:"Search profile",value:"Search profile",icon:"search"});
USING_LEO_BOT_WITH_AI&&(leoBotActionList.push({text:"Ask question",value:"Ask question",icon:"question"}),leoBotActionList.push({text:"Write content",value:"Write content",icon:"file-word-o"}),leoBotActionList.push({text:"Create slides",value:"Create slides",icon:"file-powerpoint-o"}));window.leoBotUI=!1;function getBotUI(){!1===window.leoBotUI&&(window.leoBotUI=new BotUI("LEO_ChatBot_Container"));return window.leoBotUI}
function checkLeoBotIsServerReady(){USING_LEO_BOT_WITH_AI&&LeoAdminApiUtil.callPostApi(LEOBOT_URL_IS_READY,{},function(b){!0===b.ok&&(notifySuccessMessage("\x3cb\x3eLEO ChatBot with A.I \x3c/b\x3e is ready !"),$("#leobot_answer_in_language").show())})}function initLeoChatBot(b){$("#leoChatBotDialog").modal({backdrop:"static",keyboard:!1});getBotUI().action.hide();getBotUI().message.removeAll();leoBotSayHello()}
var closeLeoChatBotDialog=function(){getBotUI().action.hide();getBotUI().message.removeAll().then(function(){$("#leoChatBotDialog").modal("hide")})},leoBotDoAction=function(b){var a=b.value;b="\x3cb\x3e"+a+"\x3c/b\x3e";getBotUI().message.add({human:!0,content:b,type:"html"}).then(function(){"Create short URL"===a?showChatBotLoader().then(function(c){leoBotCreateShortUrl(function(){getBotUI().message.remove(c)})}):"Help me"===a?leoBotHelpUser():"Search profile"===a?leoBotSearchProfiles():"Write content"===
a?leoBotWriteContent():"Create slides"===a?leoBotCreateSlides():leoBotPromptQuestion()})},leoBotSayHello=function(){var b="Hello "+currentUserProfile.displayName+", how can LEO help you ?";getBotUI().message.bot(b).then(function(){return getBotUI().action.button({delay:1E3,addMessage:!1,action:leoBotActionList})}).then(function(a){leoBotDoAction(a)})},leoBotPromptQuestion=function(b){getBotUI().action.text({delay:"number"===typeof b?b:800,action:{icon:"question-circle",cssClass:"leobot-question-input",
value:"",placeholder:"Give me a question"}}).then(function(a){a=a.value;leoBotAskServer("ask",a,a)})},leoBotWriteContent=function(){var b=function(a){getBotUI().action.text({delay:500,action:{icon:"question-circle",cssClass:"leobot-question-input",value:"",placeholder:"Give me the purpose of content"}}).then(function(c){leoBotAskServer("content",a,"Write a blog post about "+a,", the purpose of blog post is "+c.value)})};getBotUI().action.text({delay:500,action:{icon:"question-circle",cssClass:"leobot-question-input",
value:"",placeholder:"Give me the title of content"}}).then(function(a){b(a.value)})},leoBotCreateSlides=function(){var b=function(a){getBotUI().action.text({delay:500,action:{icon:"question-circle",cssClass:"leobot-question-input",value:"",placeholder:"Give me the number of slides in presentation"}}).then(function(c){var e=parseInt(c.value);isNaN(e)?leoBotShowInfo(c.value+" is not a number !",function(){b(a)}):leoBotAskServer("presentation",a,'Create a presentation slide, just text and no images, with the title is "'+
a+'" '," in "+e+' slides. Every slide must begin with the prefix "## " ',"markdown")})};getBotUI().action.text({delay:500,action:{icon:"question-circle",cssClass:"leobot-question-input",value:"",placeholder:"Give me a title of presentation slide"}}).then(function(a){b(a.value)})},leoBotHelpUser=function(){var b=Handlebars.compile($("#tpl_leocdp_documents").html())({});USING_LEO_BOT_WITH_AI?leoBotShowAnswer(b,leoBotPromptQuestion):leoBotShowAnswer(b)},leoBotSearchProfiles=function(){getBotUI().action.text({delay:500,
action:{icon:"question-circle",cssClass:"leobot-question-input",placeholder:"Give me a name, email or phone of customer"}}).then(function(b){b=Base64.encode(b.value);location.hash="calljs-leoCdpRouter('Customer_Profile_Search','"+b+"')";closeLeoChatBotDialog()})},leoBotCreateShortUrl=function(b){LeoAdminApiUtil.getSecuredData(window.baseLeoAdminUrl+"/cdp/asset-group/list-by-asset-type",{assetType:"15"},function(a){b();"object"===typeof a.data[0]?(a=a.data[0],a=leoCdpRouterParams(["",a.id,a.categoryIds[0]]),
location.hash="calljs-leoCdpRouter('Asset_Short_Link_Editor','"+a+"')",closeLeoChatBotDialog()):LeoAdminApiUtil.logErrorPayload(a)})},leoBotCreateNewItem=function(b,a,c){var e=function(){$("#asset_item_title").val(a).focus();var d=window.trixElement;"object"===typeof d&&"content"===b?d.editor.loadHTML(c):"presentation"===b&&"function"===typeof formatMarkdownToPresentation&&formatMarkdownToPresentation(c)};LeoAdminApiUtil.getSecuredData(baseLeoAdminUrl+"/cdp/asset-group/get-default",{context:b},function(d){0===
d.httpCode&&""===d.errorMessage?(d=d.data,newAssetItemEditor(d.assetType,d.id,d.categoryIds[0]),setTimeout(e,2E3)):LeoAdminApiUtil.logErrorPayload(d)})},leoBotShowAnswer=function(b,a){getBotUI().message.add({human:!1,cssClass:"leobot-answer",content:b,type:"html"}).then(function(){$("div.botui-message").find("a").attr("target","_blank");a()})},leoBotShowInfo=function(b,a){getBotUI().message.add({human:!1,cssClass:"leobot-info",content:b}).then(function(){a()})},leoBotAskServer=function(b,a,c,e,d){"string"===
typeof e&&(c+=e);d="string"===typeof d?d:"html";temperature_score=parseFloat($("#leobot_creativity_score").val());if(1<a.length&&"exit"!==a){var l=function(g){"ask"===b?leoBotShowAnswer(g,function(){leoBotPromptQuestion(120<g.length?6E3:2E3)}):leoBotShowAnswer(g,function(){var h="Would you like to write a blog post?";"presentation"===b&&(h="Would you like to create a presentation slide ?");getBotUI().message.bot(h).then(function(){return getBotUI().action.button({delay:1E3,action:[{text:"Yes",value:"yes"},
{text:"No",value:"no"}]})}).then(function(f){"yes"===f.value?getBotUI().message.bot("Okay").then(function(){closeLeoChatBotDialog();leoBotCreateNewItem(b,a,g)}):closeLeoChatBotDialog()})})};showChatBotLoader().then(function(g){var h=currentUserProfile.userLogin,f={prompt:c,question:a,usersession:getUserSession()};f.userlogin=h;f.answer_in_format=d;f.temperature_score=temperature_score;f.answer_in_language=$("#leobot_answer_in_language").val();LeoAdminApiUtil.callPostApi(LEOBOT_URL_ASK,f,function(k){getBotUI().message.remove(g);
"string"===typeof k.answer?l(k.answer):k.error?(notifyErrorMessage(k.answer),closeLeoChatBotDialog()):notifyErrorMessage("LEO BOT is getting a system error !")},closeLeoChatBotDialog)})}else closeLeoChatBotDialog()},showChatBotLoader=function(){return getBotUI().message.add({loading:!0,content:""})},recommendContentIdeas=function(b){b=document.getElementById("suggestedVideoTpl").innerHTML;b=Handlebars.compile(b)({title:"My New Post",body:"This is my first post!"});getBotUI().message.bot({delay:500,
content:b});setTimeout(function(){$("#suggestedVideoCarousel").on("slid.bs.carousel",function(){var a=getActiveVideoInfo();console.log(a);$("#playlist_holder").empty();leoPlayVideoReport(a.video)})},500)};function getRandomInt(b,a){b=Math.ceil(b);a=Math.floor(a);return Math.floor(Math.random()*(a-b+1))+b}
function leoPlayVideoReport(b){var a=getRandomInt(1,1E5)+"_"+(new Date).getTime(),c=document.createElement("div");c.setAttribute("id",a);c.setAttribute("class","videoholder");document.getElementById("playlist_holder").appendChild(c);MediaPlayerOne.create(!0,a,b,"",[],3,[],function(e){setTimeout(function(){e.muted(!1)},1E3)})}function getActiveVideoInfo(){var b=$("#suggestedVideoCarousel .active"),a=b.data("title");b=b.data("video");return{title:a,video:b}};