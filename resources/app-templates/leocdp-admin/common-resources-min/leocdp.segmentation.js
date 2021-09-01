'use strict';var loadSegmentStatistics=function(e){var f=$("#segment_size_chart").empty().width(),g=f/2,a=e.totalProfilesInCdp;if(0==a)$("#segment_size_chart").html("\x3cbr\x3e No data available! ");else if(!1===e){var b=[{count:0,color:"#000000"},{count:100,color:"#f8b70a"}];renderDonutChart("#segment_size_chart",b,0,f,f,g,0)}else{b=[{count:e.totalProfilesInSegment,color:"#000000"},{count:a-e.totalProfilesInSegment,color:"#f8b70a"}];var c=e.totalProfilesInSegment;e=(e.totalProfilesInSegment/a).toFixed(2);
e=Math.floor(100*e);renderDonutChart("#segment_size_chart",b,c,f,f,g,e)}},deleteSegment=deleteSegment||function(){if("object"===typeof segmentDataModel&&""!=window.segmentDataModel.id){$("#delete_callback").val("");$("#confirmDeleteDialog").modal({focus:!0});var e="deleteSegment"+segmentDataModel.id;window[e]=function(){LeoAdminApiUtil.callPostAdminApi(baseLeoAdminUrl+"/cdp/segment/delete",{id:segmentDataModel.id},function(f){0===f.httpCode?!0===f.data?iziToast.success({title:"OK",message:'Successfully deleted the segment "'+
segmentDataModel.name+'"',onClosing:function(g,a,b){location.hash="calljs-leoCdpRouter('Segment_Management')"}}):iziToast.error({title:"Error",message:f.data,onClosing:function(g,a,b){location.reload(!0)}}):($("#error-on-save").html(f.errorMessage).show().delay(5E3).fadeOut("slow"),LeoAdminApiUtil.logErrorPayload(f))})};$("#delete_callback").val(e);$("#deletedInfoTitle").html(segmentDataModel.name);$("#deletedInfoMsg").html("Do you want to delete this segment ?")}},loadSegmentBuilder=function(e,f,
g,a){e=[{id:"dataContext",label:"Data Context",type:"integer",input:"radio",values:{1:"Production Data",0:"Test Data","-1":"Fake Data"},operators:["equal","not_equal"],optgroup:"Basic Profile Information"},{id:"_key",label:"Profile ID",type:"string",operators:["equal","not_equal"],optgroup:"Basic Profile Information"},{id:"type",label:"Contact Type",type:"integer",input:"select",values:{0:"ANONYMOUS_VISITOR",1:"SSO_LOGIN_CONTACT",2:"HUMAN_CONTACT",3:"STUDENT_CONTACT",4:"CRM_IMPORTED_CONTACT",5:"DIRECT_INPUT_CONTACT",
6:"INFLUENCER_CONTACT",7:"CLIENT_CONTACT",8:"PARTNER_CONTACT",9:"EMPLOYEE_CONTACT",10:"KEY_ACCOUNT_CONTACT"},operators:["equal","not_equal"],optgroup:"Basic Profile Information"},{id:"dataLabels",label:"Data Labels",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Basic Profile Information"},{id:"visitorId",label:"Web Visitor ID",type:"string",operators:"equal not_equal is_empty is_not_empty is_null is_not_null".split(" "),optgroup:"Basic Profile Information"},{id:"crmRefId",
label:"Imported CRM ID",type:"string",operators:"equal not_equal is_empty is_not_empty is_null is_not_null".split(" "),optgroup:"Basic Profile Information"},{id:"firstName",label:"First Name",type:"string",operators:getOperatorsForStringField(),optgroup:"Personal Information"},{id:"lastName",label:"Last Name",type:"string",operators:getOperatorsForStringField(),optgroup:"Personal Information"},{id:"primaryEmail",label:"Primary Email",type:"string",operators:getOperatorsForStringField(),optgroup:"Personal Information"},
{id:"primaryPhone",label:"Primary Phone",type:"string",operators:getOperatorsForStringField(),optgroup:"Personal Information"},{id:"primaryUsername",label:"Primary Username",type:"string",operators:getOperatorsForStringField(),optgroup:"Personal Information"},{id:"primaryNationality",label:"Primary Nationality",type:"string",operators:getOperatorsForStringField(),optgroup:"Personal Information"},{id:"livingLocation",label:"Living Location",type:"string",operators:["contains"],optgroup:"Personal Information"},
{id:"livingCity",label:"Living City",type:"string",operators:["contains"],optgroup:"Personal Information"},{id:"livingState",label:"Living State",type:"string",operators:["contains"],optgroup:"Personal Information"},{id:"age",label:"Age",type:"integer",validation:{min:1,step:1},operators:getOperatorsForNumberField(),optgroup:"Personal Information"},{id:"dateOfBirth",label:"Date Of Birth",type:"date",placeholder:"yyyy-mm-dd",validation:{format:"yyyy-mm-dd HH:mm:ss"},valueSetter:function(c,d){d=moment.utc(d).local().format("YYYY-MM-DD");
1==c.operator.nb_inputs&&(d=[d]);console.log("valueSetter "+d);c.$el.find(".rule-value-container input").each(function(h){$(this).val(d)})},valueGetter:function(c){var d="";c.$el.find(".rule-value-container input").each(function(){var h=$(this).val();d=moment(h).utc().format("YYYY-MM-DD HH:mm:ss").valueOf()});console.log(d);return d},plugin:"datepicker",plugin_config:{format:"yyyy-mm-dd",todayBtn:"linked",todayHighlight:!0,autoclose:!0},operators:["equal"],optgroup:"Personal Information"},{id:"gender",
label:"Gender",type:"integer",input:"radio",values:{0:"Female",1:"Male",7:"Unknown"},operators:["equal","not_equal"],optgroup:"Personal Information"},{id:"genderProbability",label:"Gender Probability",type:"integer",validation:{min:0,max:100,step:1},operators:getOperatorsForNumberField(),optgroup:"Personal Information"},{id:"personalProblems",label:"Personal Problems",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Marketing Information"},{id:"personalInterests",label:"Personal Interests",
type:"string",operators:["contains_any","not_contains_any"],optgroup:"Marketing Information"},{id:"solutionsForCustomer",label:"Solutions For Customer",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Marketing Information"},{id:"nextBestActions",label:"Next Best Actions",type:"string",operators:["contains_any","not_contains_any"],input:"select",values:{"read-contents":"READ CONTENTS","buy-some-items":"BUY SOME ITEMS","subscribe-a-service":"SUBSCRIBE A SERVICE","checkout-items-in-cart":"CHECKOUT ITEMS IN CART",
"checkin-location":"CHECKIN LOCATION","play-a-game":"PLAY A GAME","take-a-course":"TAKE A COURSE","watch-a-video":"WATCH A VIDEO","take-a-trip":"TAKE A TRIP","read-a-book":"READ A BOOK"},optgroup:"Marketing Information"},{id:"mediaChannels",label:"Reachable Media Channel",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Marketing Information"},{id:"contentKeywords",label:"Content Keywords",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Marketing Information"},
{id:"productKeywords",label:"Product Keywords",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Marketing Information"},{id:"funnelStage",label:"Funnel Stage",type:"string",input:"select",values:{"new-visitor":"New Visitor","returning-visitor":"Returning Visitor",lead:"Lead",prospect:"Prospect","new-customer":"New Customer","engaged-customer":"Engaged Customer","happy-customer":"Happy Customer","brand-advocate":"Brand Advocate","unhappy-customer":"Unhappy Customer"},operators:["equal",
"not_equal"],optgroup:"Marketing Information"},{id:"jobTitles",label:"Job Title",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Business Information"},{id:"learningHistory",label:"Learning History",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Business Information"},{id:"workingHistory",label:"Working History",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Business Information"},{id:"businessIndustries",label:"Business Industry",
type:"string",operators:["contains_any","not_contains_any"],optgroup:"Business Information"},{id:"behavioralEvents",label:"Behavioural Events",type:"string",input:"select",values:e,operators:["contains_any","not_contains_any"],optgroup:"Behavioural Event Information"},{id:"lastSeenIp",label:"Last Seen IP Address",type:"string",operators:["equal"],optgroup:"Behavioural Event Information"},{id:"lastUsedDeviceId",label:"Last Used Device ID",type:"string",operators:["equal"],optgroup:"Behavioural Event Information"},
{id:"receiveWebPush",label:"Receive Web Notification",type:"integer",input:"radio",values:{0:"No data",1:"Subscribed","-1":"Unsubscribed"},operators:["equal","not_equal"],optgroup:"Behavioural Event Information"},{id:"receiveAppPush",label:"Receive App Notification",type:"integer",input:"radio",values:{0:"No data",1:"Subscribed","-1":"Unsubscribed"},operators:["equal","not_equal"],optgroup:"Behavioural Event Information"},{id:"receiveEmail",label:"Receive Email Marketing",type:"integer",input:"radio",
values:{0:"No data",1:"Subscribed","-1":"Unsubscribed"},operators:["equal","not_equal"],optgroup:"Behavioural Event Information"},{id:"receiveSMS",label:"Receive Mobile SMS",type:"integer",input:"radio",values:{0:"No data",1:"Subscribed","-1":"Unsubscribed"},operators:["equal","not_equal"],optgroup:"Behavioural Event Information"},{id:"receiveAds",label:"Receive Retargeting Ads",type:"integer",input:"radio",values:{0:"No data",1:"Subscribed","-1":"Unsubscribed"},operators:["equal","not_equal"],optgroup:"Behavioural Event Information"},
{id:"dataQualityScore",label:"Data Quality Score",type:"integer",validation:{min:0,max:100,step:1},operators:getOperatorsForNumberField(),optgroup:"Marketing Value Metric"},{id:"totalLeadScore",label:"Total Lead Score",type:"integer",validation:{min:0,max:100,step:1},operators:getOperatorsForNumberField(),optgroup:"Marketing Value Metric"},{id:"totalProspectScore",label:"Total Prospect Score",type:"integer",validation:{step:1},operators:getOperatorsForNumberField(),optgroup:"Marketing Value Metric"},
{id:"totalEngagementScore",label:"Customer Engagement Score",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"Marketing Value Metric"},{id:"totalCAC",label:"Customer Acquisition Cost",type:"double",validation:{min:0,step:.01},operators:getOperatorsForNumberField(),optgroup:"Marketing Value Metric"},{id:"journeyScore",label:"Journey Score",type:"integer",validation:{min:0,max:100,step:1},operators:getOperatorsForNumberField(),plugin:"slider",plugin_config:{min:0,
max:100,value:0,tooltip:"always"},valueSetter:function(c,d){1==c.operator.nb_inputs&&(d=[d]);c.$el.find(".rule-value-container input").each(function(h){$(this).slider("setValue",d[h]||0)})},valueGetter:function(c){var d=[];c.$el.find(".rule-value-container input").each(function(){d.push($(this).slider("getValue"))});return 1==c.operator.nb_inputs?d[0]:d},optgroup:"Customer Value Metric"},{id:"totalCLV",label:"Customer Lifetime Value",type:"double",validation:{step:.01},operators:getOperatorsForNumberField(),
optgroup:"Customer Value Metric"},{id:"totalTransactionValue",label:"Total Transaction Value",type:"double",validation:{min:0,step:.01},operators:getOperatorsForNumberField(),optgroup:"Customer Value Metric"},{id:"totalLoyaltyScore",label:"Total Loyalty Score",type:"integer",validation:{step:1,min:0},operators:getOperatorsForNumberField(),optgroup:"Customer Value Metric"},{id:"totalCreditScore",label:"Customer Credit Score",type:"integer",validation:{min:0,max:100,step:1},operators:getOperatorsForNumberField(),
optgroup:"Customer Value Metric"},{id:"rfeScore",label:"RFE Score",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"Customer Value Metric"},{id:"rfmScore",label:"RFM Score",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"Customer Value Metric"},{id:"churnScore",label:"Churn Score",type:"double",validation:{min:-100,max:100,step:.01},operators:getOperatorsForNumberField(),optgroup:"Customer Value Metric"},{id:"totalCFS",
label:"Total CFS",type:"integer",validation:{step:1},operators:getOperatorsForNumberField(),optgroup:"CFS - Customer Feedback Score"},{id:"positiveCFS",label:"Positive CFS",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"CFS - Customer Feedback Score"},{id:"neutralCFS",label:"Neutral CFS",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"CFS - Customer Feedback Score"},{id:"negativeCFS",label:"Negative CFS",type:"integer",
validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"CFS - Customer Feedback Score"},{id:"totalCES",label:"Total CES",type:"integer",validation:{step:1},operators:getOperatorsForNumberField(),optgroup:"CES - Customer Effort Score"},{id:"positiveCES",label:"Positive CES",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"CES - Customer Effort Score"},{id:"neutralCES",label:"Neutral CES",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),
optgroup:"CES - Customer Effort Score"},{id:"negativeCES",label:"Negative CES",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"CES - Customer Effort Score"},{id:"totalCSAT",label:"Total CSAT",type:"integer",validation:{step:1},operators:getOperatorsForNumberField(),optgroup:"CSAT - Customer Satisfaction Score"},{id:"positiveCSAT",label:"Positive CSAT",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"CSAT - Customer Satisfaction Score"},
{id:"neutralCSAT",label:"Neutral CSAT",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"CSAT - Customer Satisfaction Score"},{id:"negativeCSAT",label:"Negative CSAT",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"CSAT - Customer Satisfaction Score"},{id:"totalNPS",label:"Total NPS",type:"integer",validation:{step:1},operators:getOperatorsForNumberField(),optgroup:"NPS - Net Promoter Score"},{id:"positiveNPS",label:"Positive NPS",
type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"NPS - Net Promoter Score"},{id:"neutralNPS",label:"Neutral NPS",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"NPS - Net Promoter Score"},{id:"negativeNPS",label:"Negative NPS",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"NPS - Net Promoter Score"}];f=f||!1;var b=_.union(getOperatorsForStringField(),getOperatorsForNumberField());
b.push({type:"contains_any",optgroup:"custom",nb_inputs:1,multiple:!0,apply_to:["string","number","boolean"]});b.push({type:"not_contains_any",optgroup:"custom",nb_inputs:1,multiple:!0,apply_to:["string","number","boolean"]});$("#segment-builder-holder").on("afterUpdateRuleValue.queryBuilder",function(c,d){"datepicker"===d.filter.plugin&&d.$el.find(".rule-value-container input").datepicker("update")});$("#segment-builder-holder").queryBuilder({plugins:["bt-tooltip-errors"],operators:b,filters:e,rules:f});
g?($("#segment-builder-holder").find("input,select").attr("disabled","disabled"),$("#segment-builder-holder button").hide()):"function"===typeof a&&a()},loadProfilesInSegment=function(e){var f=$("#profile_list_querybuilder");segmentDataModel&&(!0===e?(f.DataTable().clear(),f.DataTable().ajax.reload()):loadProfileViewByAjax(f,"/cdp/segment/query-builder"))},loadProfileViewByAjax=function(e,f){var g=getUserSession();g&&e.DataTable({lengthMenu:[[20,30,50],[20,30,50]],processing:!0,serverSide:!0,searching:!1,
serverMethod:"POST",ajax:{url:f,contentType:"application/json",beforeSend:function(a){a.setRequestHeader("leouss",g)},data:function(a){var b=$("#segment-builder-holder").queryBuilder("getRules");a.jsonQueryRules=JSON.stringify(b);a.beginFilterDate=segmentDataModel.beginFilterDate;a.endFilterDate=segmentDataModel.endFilterDate;return JSON.stringify(a)}},columnDefs:[{render:function(a,b,c){b="Anonymous Person";try{var d=c.firstName||"",h=c.lastName||"";0<d.length&&0<h.length&&(b=textTruncate(d+" "+
h,30))}catch(k){console.log(k)}return'\x3ca target\x3d"_blank" title\x3d"Profile Report" href\x3d"#calljs-leoCdpRouter(\'Customer_Profile_Info\',\''+(a+"')\" \x3e")+b+"\x3c/a\x3e"},targets:0},{render:function(a,b,c){return'\x3cdiv class\x3d"datatable_text"\x3e'+a+"\x3c/div\x3e"},targets:1},{render:function(a,b,c){b="No information";0===a?b="Female":1===a?b="Male":2===a&&(b="LGBT");return'\x3cdiv class\x3d"datatable_text"\x3e'+b+"\x3c/div\x3e"},targets:2},{render:function(a,b,c){return null!=a||""!=
a?'\x3cdiv class\x3d"datatable_text"\x3e\x3ca title\x3d"Profile Report" href\x3d"#calljs-leoCdpRouter(\'Customer_Profile_Info\',\''+(c.id+"')\" \x3e"+textTruncate(a,25)+"\x3c/a\x3e\x3c/div\x3e"):""},targets:3},{render:function(a,b,c){return'\x3cdiv class\x3d"datatable_text text-center"\x3e'+(new Number(a)).toLocaleString()+"\x3c/div\x3e"},targets:4},{render:function(a,b,c){return'\x3cdiv class\x3d"datatable_text text-center"\x3e'+a+"\x3c/div\x3e"},targets:5},{render:function(a,b,c){return a?'\x3cdiv class\x3d"small"\x3e'+
moment.utc(new Date(a)).local().format("YYYY-MM-DD HH:mm:ss")+"\x3c/div\x3e":""},targets:6},{render:function(a,b,c){a=c.lastTouchpoint?c.lastTouchpoint.name:"";return'\x3cdiv class\x3d"datatable_text" title\x3d"'+a+'" \x3e'+textTruncate(a,30)+"\x3c/div\x3e"},targets:7}],columns:[{data:"id"},{data:"age"},{data:"gender"},{data:"primaryEmail"},{data:"dataQualityScore"},{data:"funnelStage"},{data:"updatedAt"},{data:"lastTouchpoint"}]})};