'use strict';const segmentFiltersForCX=[{id:"totalCFS",label:"Total CFS",type:"integer",validation:{step:1},operators:getOperatorsForNumberField(),optgroup:"CFS - Customer Feedback Score"},{id:"positiveCFS",label:"Positive CFS",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"CFS - Customer Feedback Score"},{id:"neutralCFS",label:"Neutral CFS",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"CFS - Customer Feedback Score"},
{id:"negativeCFS",label:"Negative CFS",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"CFS - Customer Feedback Score"},{id:"totalCES",label:"Total CES",type:"integer",validation:{step:1},operators:getOperatorsForNumberField(),optgroup:"CES - Customer Effort Score"},{id:"positiveCES",label:"Positive CES",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"CES - Customer Effort Score"},{id:"neutralCES",label:"Neutral CES",
type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"CES - Customer Effort Score"},{id:"negativeCES",label:"Negative CES",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"CES - Customer Effort Score"},{id:"totalCSAT",label:"Total CSAT",type:"integer",validation:{step:1},operators:getOperatorsForNumberField(),optgroup:"CSAT - Customer Satisfaction Score"},{id:"positiveCSAT",label:"Positive CSAT",type:"integer",validation:{min:0,
step:1},operators:getOperatorsForNumberField(),optgroup:"CSAT - Customer Satisfaction Score"},{id:"neutralCSAT",label:"Neutral CSAT",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"CSAT - Customer Satisfaction Score"},{id:"negativeCSAT",label:"Negative CSAT",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"CSAT - Customer Satisfaction Score"},{id:"totalNPS",label:"Total NPS",type:"integer",validation:{step:1},operators:getOperatorsForNumberField(),
optgroup:"NPS - Net Promoter Score"},{id:"positiveNPS",label:"Positive NPS",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"NPS - Net Promoter Score"},{id:"neutralNPS",label:"Neutral NPS",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"NPS - Net Promoter Score"},{id:"negativeNPS",label:"Negative NPS",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"NPS - Net Promoter Score"}],
segmentFiltersForCustomerValue=[{id:"journeyScore",label:"Journey Score",type:"integer",validation:{min:0,max:100,step:1},operators:getOperatorsForNumberField(),plugin:"slider",plugin_config:{min:0,max:100,value:0,tooltip:"always"},valueSetter:function(d,b){1==d.operator.nb_inputs&&(b=[b]);d.$el.find(".rule-value-container input").each(function(f){$(this).slider("setValue",b[f]||0)})},valueGetter:function(d){var b=[];d.$el.find(".rule-value-container input").each(function(){b.push($(this).slider("getValue"))});
return 1==d.operator.nb_inputs?b[0]:b},optgroup:"Customer Value Metric"},{id:"totalCLV",label:"Customer Lifetime Value",type:"double",validation:{step:.01},operators:getOperatorsForNumberField(),optgroup:"Customer Value Metric"},{id:"totalTransactionValue",label:"Total Transaction Value",type:"double",validation:{min:0,step:.01},operators:getOperatorsForNumberField(),optgroup:"Customer Value Metric"},{id:"totalLoyaltyScore",label:"Total Loyalty Score",type:"integer",validation:{step:1,min:0},operators:getOperatorsForNumberField(),
optgroup:"Customer Value Metric"},{id:"totalCreditScore",label:"Customer Credit Score",type:"integer",validation:{min:0,max:100,step:1},operators:getOperatorsForNumberField(),optgroup:"Customer Value Metric"},{id:"rfeScore",label:"RFE Score",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"Customer Value Metric"},{id:"rfmScore",label:"RFM Score",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"Customer Value Metric"},
{id:"churnScore",label:"Churn Score",type:"double",validation:{min:-100,max:100,step:.01},operators:getOperatorsForNumberField(),optgroup:"Customer Value Metric"}],advancedSegmentFilters=[{id:"receiveWebPush",label:"Receive Web Notification",type:"integer",input:"radio",values:{0:"No data",1:"Subscribed","-1":"Unsubscribed"},operators:["equal","not_equal"],optgroup:"Data Privacy Consent/Agreement"},{id:"receiveAppPush",label:"Receive App Notification",type:"integer",input:"radio",values:{0:"No data",
1:"Subscribed","-1":"Unsubscribed"},operators:["equal","not_equal"],optgroup:"Data Privacy Consent/Agreement"},{id:"receiveEmail",label:"Receive Email Marketing",type:"integer",input:"radio",values:{0:"No data",1:"Subscribed","-1":"Unsubscribed"},operators:["equal","not_equal"],optgroup:"Data Privacy Consent/Agreement"},{id:"receiveSMS",label:"Receive Mobile SMS",type:"integer",input:"radio",values:{0:"No data",1:"Subscribed","-1":"Unsubscribed"},operators:["equal","not_equal"],optgroup:"Data Privacy Consent/Agreement"},
{id:"receiveAds",label:"Receive Retargeting Ads",type:"integer",input:"radio",values:{0:"No data",1:"Subscribed","-1":"Unsubscribed"},operators:["equal","not_equal"],optgroup:"Data Privacy Consent/Agreement"},{id:"personalProblems",label:"Personal Problems",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Marketing Information"},{id:"personalInterests",label:"Personal Interests",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Marketing Information"},{id:"solutionsForCustomer",
label:"Solutions For Customer",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Marketing Information"},{id:"nextBestActions",label:"Next Best Actions",type:"string",operators:["contains_any","not_contains_any"],input:"select",values:{"read-contents":"READ CONTENTS","buy-some-items":"BUY SOME ITEMS","subscribe-a-service":"SUBSCRIBE A SERVICE","checkout-items-in-cart":"CHECKOUT ITEMS IN CART","checkin-location":"CHECKIN LOCATION","play-a-game":"PLAY A GAME","take-a-course":"TAKE A COURSE",
"watch-a-video":"WATCH A VIDEO","take-a-trip":"TAKE A TRIP","read-a-book":"READ A BOOK"},optgroup:"Marketing Information"},{id:"mediaChannels",label:"Reachable Media Channel",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Marketing Information"},{id:"contentKeywords",label:"Content Keywords",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Marketing Information"},{id:"productKeywords",label:"Product Keywords",type:"string",operators:["contains_any","not_contains_any"],
optgroup:"Marketing Information"},{id:"dataQualityScore",label:"Data Quality Score",type:"integer",validation:{min:0,max:100,step:1},operators:getOperatorsForNumberField(),optgroup:"Marketing Value Metric"},{id:"totalLeadScore",label:"Total Lead Score",type:"integer",validation:{min:0,max:100,step:1},operators:getOperatorsForNumberField(),optgroup:"Marketing Value Metric"},{id:"totalProspectScore",label:"Total Prospect Score",type:"integer",validation:{step:1},operators:getOperatorsForNumberField(),
optgroup:"Marketing Value Metric"},{id:"totalEngagementScore",label:"Customer Engagement Score",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"Marketing Value Metric"},{id:"totalCAC",label:"Customer Acquisition Cost",type:"double",validation:{min:0,step:.01},operators:getOperatorsForNumberField(),optgroup:"Marketing Value Metric"}],getTouchpointHubHosts=function(d){var b={};for(const [f,a]of Object.entries(d))d=(new URL(f)).host.replace("www.",""),b[d]=a;
return b},buildSegmentDateFilter=function(d,b,f){return{id:d,label:b,type:"date",placeholder:"yyyy-mm-dd",validation:{format:"yyyy-mm-dd"},valueSetter:function(a,c){c=moment.utc(c).local().format("YYYY-MM-DD");1==a.operator.nb_inputs&&(c=[c]);a.$el.find(".rule-value-container input").each(function(e){$(this).val(c)})},valueGetter:function(a){var c="";a.$el.find(".rule-value-container input").each(function(){var e=$(this).val();c=moment(e).utc().local().format("YYYY-MM-DD").valueOf()});return c},plugin:"datepicker",
plugin_config:{format:"yyyy-mm-dd",todayBtn:"linked",todayHighlight:!0,autoclose:!0},operators:getOperatorsForDateField(),optgroup:f}},buildSegmentJourneyFilter=function(d,b,f){return{id:d,label:b,type:"string",valueSetter:function(a,c){console.log(c);a.$el.find(".rule-value-container select").each(function(e){$(this).val(c[e]).trigger("change")})},valueGetter:function(a){var c=[];a.$el.find(".rule-value-container select").each(function(){c.push($(this).val())});return c},input:function(a,c){a.$el.find(".rule-value-container");
LeoAdminApiUtil.getSecuredData("/cdp/journeymap/list-all",{},function(e){0===e.httpCode&&""===e.errorMessage?e.data.forEach(function(g){g='\x3coption value\x3d"'+g.id+'" \x3e'+g.name+"\x3c/option\x3e";$("#segment_journey_map_selection").append(g)}):LeoAdminApiUtil.logErrorPayload(e)});return'\x3cselect class\x3d"form-control" id\x3d"segment_journey_map_selection" \x3e\x3c/select\x3e \x3ci class\x3d"fa fa-arrow-right" aria-hidden\x3d"true"\x3e\x3c/i\x3e \x3cselect class\x3d"form-control" \x3e \x3coption value\x3d"1"\x3e AWARENESS \x3c/option\x3e \x3coption value\x3d"2"\x3e ATTRACTION \x3c/option\x3e \x3coption value\x3d"3"\x3e ASK \x3c/option\x3e  \x3coption value\x3d"4"\x3e ACTION \x3c/option\x3e \x3coption value\x3d"5"\x3e ADVOCACY \x3c/option\x3e \x3c/select\x3e'},
operators:["in_journey_map"],optgroup:f}},loadSegmentBuilder=function(d,b,f,a,c,e){var g=[{id:"dataContext",label:"Data Context",type:"integer",input:"radio",values:{1:"Production Data",0:"Test Data","-1":"Fake Data"},operators:["equal","not_equal"],optgroup:"Basic Profile Information"},{id:"type",label:"Contact Type",type:"integer",input:"select",values:{0:"ANONYMOUS_VISITOR",1:"LOGIN_USER_CONTACT",2:"CUSTOMER_CONTACT",3:"STUDENT_CONTACT",4:"CRM_IMPORTED_CONTACT",5:"DIRECT_INPUT_CONTACT",6:"INFLUENCER_CONTACT",
7:"CLIENT_CONTACT",8:"B2B_PARTNER_CONTACT",9:"EMPLOYEE_CONTACT",10:"KEY_ACCOUNT_CONTACT",11:"SYSTEM_USER_CONTACT"},operators:["equal","not_equal"],optgroup:"Basic Profile Information"},{id:"funnelStage",label:"Data Funnel Stage",type:"string",input:"select",values:{"new-visitor":"New Visitor","returning-visitor":"Returning Visitor",lead:"Lead",prospect:"Prospect","new-customer":"New Customer","engaged-customer":"Engaged Customer","happy-customer":"Happy Customer","customer-advocate":"Customer Advocate",
"unhappy-customer":"Unhappy Customer"},operators:["equal","not_equal"],optgroup:"Basic Profile Information"},buildSegmentJourneyFilter("cdp_profile__inJourneyMaps","Data Journey Map","Basic Profile Information"),{id:"dataLabels",label:"Data Labels",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Basic Profile Information"},{id:"_key",label:"Profile ID",type:"string",operators:["equal","not_equal"],optgroup:"Profile Key Information"},{id:"visitorId",label:"Web Visitor ID",type:"string",
operators:"equal not_equal is_empty is_not_empty is_null is_not_null".split(" "),optgroup:"Profile Key Information"},{id:"crmRefId",label:"Imported CRM ID",type:"string",operators:"equal not_equal is_empty is_not_empty is_null is_not_null".split(" "),optgroup:"Profile Key Information"},buildSegmentDateFilter("createdAt","Created Date","Basic Profile Information"),buildSegmentDateFilter("updatedAt","Updated Date","Basic Profile Information"),{id:"engagedTouchpointIds",field:"cdp_trackingevent__srcTouchpointUrl",
label:"Source of Touchpoint",type:"string",input:"select",values:d,operators:["data_from","data_filter_contains"],optgroup:"Data Sources"},{id:"referrerChannels",label:"Web Referrer Channel",type:"string",input:"select",values:getTouchpointHubHosts(d),operators:["has_key","not_has_key"],optgroup:"Data Sources"},{id:"lastTouchpoint__name",label:"Last Touchpoint Name",type:"string",operators:["sub_field_contains","sub_field_equals"],optgroup:"Data Sources"},{id:"lastTouchpoint__url",label:"Last Touchpoint URL",
type:"string",operators:["sub_field_contains","sub_field_equals"],optgroup:"Data Sources"},{id:"cdp_touchpoint__url",label:"Touchpoint URL",type:"string",operators:["data_filter_equals","data_filter_contains"],optgroup:"Data Sources"},{id:"cdp_touchpoint__name",label:"Touchpoint Name",type:"string",operators:["data_filter_equals","data_filter_contains"],optgroup:"Data Sources"},{id:"saleAgencies",label:"Sale Agencies",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Sale Sources"},
{id:"saleAgents",label:"Sale Agents",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Sale Sources"},{id:"firstName",label:"First Name",type:"string",operators:getOperatorsForStringField(),optgroup:"Personal Information"},{id:"lastName",label:"Last Name",type:"string",operators:getOperatorsForStringField(),optgroup:"Personal Information"},{id:"primaryEmail",label:"Primary Email",type:"string",operators:getOperatorsForStringField(),optgroup:"Personal Information"},{id:"primaryPhone",
label:"Primary Phone",type:"string",operators:getOperatorsForStringField(),optgroup:"Personal Information"},{id:"primaryUsername",label:"Primary Username",type:"string",operators:getOperatorsForStringField(),optgroup:"Personal Information"},{id:"primaryNationality",label:"Primary Nationality",type:"string",operators:getOperatorsForStringField(),optgroup:"Personal Information"},{id:"livingLocation",label:"Living Location",type:"string",operators:["contains"],optgroup:"Personal Information"},{id:"livingCity",
label:"Living City",type:"string",operators:["contains"],optgroup:"Personal Information"},{id:"livingState",label:"Living State",type:"string",operators:["contains"],optgroup:"Personal Information"},{id:"age",label:"Age",type:"integer",validation:{min:1,step:1},operators:getOperatorsForNumberField(),optgroup:"Personal Information"},buildSegmentDateFilter("dateOfBirth","Date of Birth","Personal Information"),{id:"gender",label:"Gender",type:"integer",input:"radio",values:{0:"Female",1:"Male",7:"Unknown"},
operators:["equal","not_equal"],optgroup:"Personal Information"},{id:"genderProbability",label:"Gender Probability",type:"integer",validation:{min:0,max:100,step:1},operators:getOperatorsForNumberField(),optgroup:"Personal Information"},{id:"softSkills",label:"Soft Skills",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Education"},{id:"learningHistory",label:"Learning History",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Education"},{id:"studyCertificates",
label:"Study Certificates",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Education"},{id:"jobTitles",label:"Job Title",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Working Experience"},{id:"workingHistory",label:"Working History",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Working Experience"},{id:"businessIndustries",label:"Business Industry",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Working Experience"},
{id:"behavioralEvents",label:"Behavioural Data Events",type:"string",input:"select",values:b,operators:["contains_any","not_contains_any"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__metricName",label:"Event Metric Name",type:"string",operators:["data_filter_equals"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__metricValue",label:"Event Metric Value",type:"string",operators:["data_filter_equals"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__srcTouchpointName",
label:"Source Event at the Touchpoint Name",type:"string",operators:["data_filter_equals","data_filter_contains"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__srcTouchpointUrl",label:"Source Event at the Touchpoint URL",type:"string",operators:["data_filter_equals","data_filter_contains"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__refTouchpointName",label:"Referrer Event at the Touchpoint Name",type:"string",operators:["data_filter_equals","data_filter_contains"],
optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__refTouchpointUrl",label:"Referrer Event at the Touchpoint URL",type:"string",operators:["data_filter_equals","data_filter_contains"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__locationName",label:"Event at the Location Name",type:"string",operators:["data_filter_equals","data_filter_contains"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__locationCode",label:"Event at the Location Code",type:"string",
operators:["data_filter_equals","data_filter_contains"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__fraudScore",label:"Event Fraud Score",type:"integer",operators:["data_filter_equals"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__deviceId",label:"Event Device ID",type:"string",operators:["data_filter_equals","data_filter_contains"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__fingerprintId",label:"Event Fingerprint ID",type:"string",
operators:["data_filter_equals","data_filter_contains"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__deviceName",label:"Event Device Name",type:"string",operators:["data_filter_equals","data_filter_contains"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__deviceType",label:"Event Device Type",type:"string",operators:["data_filter_equals","data_filter_contains"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__deviceOS",label:"Event Device OS",
type:"string",operators:["data_filter_equals","data_filter_contains"],optgroup:"Behavioural Event Information"},{id:"lastSeenIp",label:"Last Seen IP Address",type:"string",operators:["equal"],optgroup:"Behavioural Event Information"},{id:"lastUsedDeviceId",label:"Last Used Device ID",type:"string",operators:["equal"],optgroup:"Behavioural Event Information"},{id:"cdp_device__name",label:"Device Name",type:"string",operators:["data_filter_equals"],optgroup:"Device Information"},{id:"cdp_device__osName",
label:"Device OS Name",type:"string",operators:["data_filter_equals"],optgroup:"Device Information"},{id:"cdp_device__osVersion",label:"Device OS Version",type:"string",operators:["data_filter_equals"],optgroup:"Device Information"},{id:"cdp_device__type",label:"Device Type",type:"string",operators:["data_filter_equals"],input:"radio",values:{General_Desktop:"General Desktop",General_Mobile:"General Mobile",General_Tablet:"General Tablet"},optgroup:"Device Information"},{id:"cdp_device__browserName",
label:"Web Browser Name",type:"string",operators:["data_filter_equals"],optgroup:"Device Information"},{id:"shoppingItemIds",label:"Shopping Items",type:"string",input:"select",values:window.productCatalogMap||{},operators:["contains_any","not_contains_any"],optgroup:"Product Information"},{id:"purchasedItemIds",label:"Purchased Items",type:"string",input:"select",values:window.productCatalogMap||{},operators:["contains_any","not_contains_any"],optgroup:"Product Information"}];f.forEach(function(h){g.push({id:"assetGroup_"+
h.id,field:"behavioralEvents",label:"Events in Asset Group: "+h.title,type:"string",input:"select",values:h.eventNamesForSegmentation,operators:["contains_any","not_contains_any"],optgroup:"Behavioral Events in Asset Group"})});g=g.concat(advancedSegmentFilters);g=g.concat(segmentFiltersForCustomerValue);g=g.concat(segmentFiltersForCX);d=a||!1;b=_.union(getOperatorsForStringField(),getOperatorsForNumberField());b.push({type:"contains_any",optgroup:"List Operator",nb_inputs:1,multiple:!0,apply_to:["string",
"number","boolean"]});b.push({type:"not_contains_any",optgroup:"List Operator",nb_inputs:1,multiple:!0,apply_to:["string","number","boolean"]});b.push({type:"has_key",optgroup:"Key Operator",nb_inputs:1,multiple:!0,apply_to:["string"]});b.push({type:"not_has_key",optgroup:"Key Operator",nb_inputs:1,multiple:!0,apply_to:["string"]});b.push({type:"sub_field_contains",optgroup:"Sub Field",nb_inputs:1,multiple:!0,apply_to:["string"]});b.push({type:"sub_field_equals",optgroup:"Sub Field",nb_inputs:1,multiple:!0,
apply_to:["string"]});b.push({type:"data_filter_equals",optgroup:"Data Filter",nb_inputs:1,multiple:!0,apply_to:["string","number","boolean"]});b.push({type:"data_filter_contains",optgroup:"Data Filter",nb_inputs:1,multiple:!0,apply_to:["string"]});b.push({type:"data_from",optgroup:"Data Filter",nb_inputs:1,multiple:!0,apply_to:["string"]});b.push({type:"in_journey_map",optgroup:"Data Filter",nb_inputs:1,multiple:!0,apply_to:["string"]});$("#segment-builder-holder").on("afterUpdateRuleValue.queryBuilder",
function(h,k){"datepicker"===k.filter.plugin&&k.$el.find(".rule-value-container input").datepicker("update")});$("#segment-builder-holder").queryBuilder({plugins:["bt-tooltip-errors"],operators:b,filters:g,rules:d});c?($("#segment-builder-holder").find("input,select").attr("disabled","disabled"),$("#segment-builder-holder button").hide()):"function"===typeof e&&e()},refreshAllSegments=function(){LeoAdminApiUtil.callPostAdminApi(baseLeoAdminUrl+"/cdp/segments/refresh",{},function(d){iziToast.success({timeout:3E3,
icon:"fa fa-check-square-o",title:"Segment Data Refresh",message:"Total updated segment: \x3cb\x3e"+d.data+"\x3c/b\x3e",onClosing:function(b,f,a){location.reload(!0)}})})},loadSegmentStatistics=function(d){var b=$("#segment_size_chart").empty().width(),f=b/2,a=d.totalProfilesInSystem;if(0==a)$("#segment_size_chart").html("\x3cbr\x3e No data available! ");else if(!1===d){var c=[{count:0,color:"#000000"},{count:100,color:"#f8b70a"}];renderSegmentSize("#segment_size_chart",c,0,b,b,f,0)}else{c=[{count:d.totalProfilesInSegment,
color:"#000000"},{count:a-d.totalProfilesInSegment,color:"#f8b70a"}];var e=d.totalProfilesInSegment;d=(d.totalProfilesInSegment/a).toFixed(2);d=Math.floor(100*d);renderSegmentSize("#segment_size_chart",c,e,b,b,f,d)}},deleteSegment=function(){if("object"===typeof segmentDataModel&&""!=window.segmentDataModel.id){$("#delete_callback").val("");$("#confirmDeleteParentChildDialog").modal({focus:!0});$("#deleteChildItemMsg").text("Delete all profiles and related data in this segment ! (Be Careful)");$("#deleteChildItemCheckbox").prop("checked",
!1);$("#deleteChildItem").show();var d="deleteSegment"+segmentDataModel.id;window[d]=function(){var b=baseLeoAdminUrl+"/cdp/segment/delete",f=$("#deleteChildItemCheckbox").is(":checked");LeoAdminApiUtil.callPostAdminApi(b,{id:segmentDataModel.id,deleteAllProfiles:f},function(a){0===a.httpCode?!0===a.data?($("#deleteChildItem").hide(),$("#deleteChildItemMsg").text(""),iziToast.success({title:"OK",message:'Successfully deleted the segment "'+segmentDataModel.name+'"',onClosing:function(c,e,g){location.hash=
"calljs-leoCdpRouter('Segment_Management')"}})):iziToast.error({title:"Error",message:a.data,onClosing:function(c,e,g){location.reload(!0)}}):($("#error-on-save").html(a.errorMessage).show().delay(5E3).fadeOut("slow"),LeoAdminApiUtil.logErrorPayload(a))})};$("#delete_parent_callback").val(d);$("#deletedParentInfoTitle").html(segmentDataModel.name);$("#deletedParentInfoMsg").html("Do you want to delete the segment ?")}},loadProfilesInSegment=function(d){var b=$("#profile_list_querybuilder");"object"===
typeof segmentDataModel&&(!0===d?(segmentDataModel.realtimeQuery=!0,b.DataTable().clear(),b.DataTable().ajax.reload()):loadProfileViewForSegment(b,"/cdp/segment/profile-query-builder"))},loadProfileViewForSegment=function(d,b){var f=getUserSession();f&&d.DataTable({lengthMenu:[[20,30,50],[20,30,50]],processing:!0,serverSide:!0,searching:!1,serverMethod:"POST",ajax:{url:b,contentType:"application/json",beforeSend:function(a){a.setRequestHeader("leouss",f)},data:function(a){var c=$("#segment-builder-holder").queryBuilder("getRules");
a.jsonQueryRules=JSON.stringify(c);a.realtimeQuery=!0===segmentDataModel.realtimeQuery;return JSON.stringify(a)}},columnDefs:[{render:function(a,c,e){c="Web Visitor";try{var g=e.firstName||"",h=e.lastName||"";if(0<g.length||0<h.length)c=textTruncate(g+" "+h,30)}catch(k){console.log(k)}return'\x3cdiv style\x3d"width:94px;font-size:13.2px;"\x3e\x3ca target\x3d"_blank" title\x3d"Profile Report" href\x3d"#calljs-leoCdpRouter(\'Customer_Profile_Info\',\''+(a+"')\" \x3e")+c+"\x3c/a\x3e\x3c/div\x3e"},targets:0,
orderable:!1},{render:function(a,c,e){a=profileContactTypes[a].replace("_CONTACT","");return'\x3cdiv class\x3d"datatable_text" style\x3d"font-size:10.8px;"\x3e\x3ca target\x3d"_blank" title\x3d"Profile Report" href\x3d"#calljs-leoCdpRouter(\'Customer_Profile_Info\',\''+(e.id+"')\" \x3e"+a+"\x3c/a\x3e\x3c/div\x3e")},targets:1,orderable:!1},{render:function(a,c,e){c="-";0===a?c='\x3ci class\x3d"fa fa-female"\x3e\x3c/i\x3e Female':1===a?c='\x3ci class\x3d"fa fa-male"\x3e\x3c/i\x3e Male':2<=a&&6>=a&&
(c="LGBT");return'\x3cdiv class\x3d"datatable_text" style\x3d"font-size:10.8px;" \x3e'+c+"\x3c/div\x3e"},targets:2,orderable:!1},{render:function(a,c,e){return'\x3cdiv class\x3d"datatable_text" style\x3d"font-size:11px;" \x3e\x3ca title\x3d"Profile Email" href\x3d"#calljs-leoCdpRouter(\'Customer_Profile_Info\',\''+(e.id+"')\" \x3e"+textTruncate("string"===typeof a?a:"-",24)+"\x3c/a\x3e\x3c/div\x3e")},targets:3,orderable:!1},{render:function(a,c,e){return'\x3cdiv class\x3d"datatable_text" style\x3d"font-size:11px;" \x3e\x3ca title\x3d"Profile Phone" href\x3d"#calljs-leoCdpRouter(\'Customer_Profile_Info\',\''+
(e.id+"')\" \x3e"+textTruncate("string"===typeof a?a:"-",20)+"\x3c/a\x3e\x3c/div\x3e")},targets:4,orderable:!1},{render:function(a,c,e){a=e.lastTouchpoint?e.lastTouchpoint.name:"";return'\x3cdiv class\x3d"datatable_text" style\x3d"font-size:11px;" title\x3d"'+a+'" \x3e'+textTruncate(a,45)+"\x3c/div\x3e"},targets:5,orderable:!1},{render:function(a,c,e){return'\x3cdiv class\x3d"datatable_text text-center"\x3e'+a+"\x3c/div\x3e"},targets:6,orderable:!1},{render:function(a,c,e){return'\x3cdiv class\x3d"datatable_text text-center"\x3e'+
a+"\x3c/div\x3e"},targets:7,orderable:!1},{render:function(a,c,e){return'\x3cdiv class\x3d"datatable_text text-center"\x3e'+a+"\x3c/div\x3e"},targets:8,orderable:!1},{render:function(a,c,e){return a?'\x3cdiv class\x3d"small"\x3e'+moment.utc(new Date(a)).local().format("YYYY-MM-DD HH:mm:ss")+"\x3c/div\x3e":""},targets:9,orderable:!1}],columns:[{data:"id"},{data:"type"},{data:"gender"},{data:"primaryEmail"},{data:"primaryPhone"},{data:"lastTouchpoint"},{data:"dataQualityScore"},{data:"totalLeadScore"},
{data:"totalCLV"},{data:"updatedAt"}]})};