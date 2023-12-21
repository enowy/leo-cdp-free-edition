'use strict';const getTouchpointHubHosts=function(e){var f={};for(const [b,c]of Object.entries(e))if(0===b.indexOf("http"))try{var h=(new URL(b)).host.replace("www.","");f[h]=c}catch(d){console.error(b),console.error(d)}return f},buildSegmentDateFilter=function(e,f,h){return{id:e,label:f,type:"date",placeholder:"yyyy-mm-dd",validation:{format:"yyyy-mm-dd",allow_empty_value:!1},valueSetter:function(b,c){var d=b.operator.type;c="compare_month_and_day_with_now"===d||"compare_year_month_day_with_now"===
d||""===c?moment.utc().local().format("YYYY-MM-DD"):moment.utc(c).local().format("YYYY-MM-DD");1==b.operator.nb_inputs&&(c=[c]);b.$el.find(".rule-value-container input").each(function(k){$(this).val(c).css("width","98px")})},valueGetter:function(b){var c="compare_month_and_day_with_now"===b.operator.type||"compare_year_month_day_with_now"===b.operator.type,d=moment.utc().local().format("YYYY-MM-DD");b.$el.find(".rule-value-container input").each(function(){c&&$(this).val(d);var k=$(this).css("width",
"98px").val();d=moment(k).utc().local().format("YYYY-MM-DD").valueOf()}).attr("autocomplete","off").focus(function(){var k=$(this).offset().top+$(this).height()+8;$("div.datepicker-dropdown").css("top",k)});return d},plugin:"datepicker",plugin_config:{format:"yyyy-mm-dd",todayBtn:"linked",todayHighlight:!0,autoclose:!0,orientation:"bottom"},operators:getOperatorsForDateField(),optgroup:h}},buildSegmentJourneyFilter=function(e,f,h,b){return{id:e,label:f,type:"string",valueSetter:function(c,d){c.$el.find(".rule-value-container select").each(function(k){$(this).val(d[k]).trigger("change")})},
valueGetter:function(c){var d=[];c.$el.find(".rule-value-container select").each(function(){d.push($(this).val())});return d},input:function(c,d){var k='\x3cselect class\x3d"form-control segmentation_journey_map" \x3e';b.forEach(function(a){k+='\x3coption value\x3d"'+a.id+'" \x3e'+a.name+"\x3c/option\x3e"});k+='\x3c/select\x3e \x3ci class\x3d"fa fa-arrow-right" aria-hidden\x3d"true"\x3e\x3c/i\x3e ';k+='\x3cselect class\x3d"form-control" \x3e \x3coption value\x3d"1"\x3e AWARENESS \x3c/option\x3e \x3coption value\x3d"2"\x3e ATTRACTION \x3c/option\x3e \x3coption value\x3d"3"\x3e ASK \x3c/option\x3e ';
return k+=' \x3coption value\x3d"4"\x3e ACTION \x3c/option\x3e \x3coption value\x3d"5"\x3e ADVOCACY \x3c/option\x3e \x3c/select\x3e'},operators:["in_journey_map"],optgroup:h}},buildSegmentNumberSlider=function(e,f,h,b,c,d,k){return{id:e,label:f,type:"integer",validation:{min:h,max:b,step:c},operators:getOperatorsForNumberField(),plugin:"slider",plugin_config:{min:h,max:b,value:d,tooltip:"always"},valueSetter:function(a,g){1==a.operator.nb_inputs&&(g=[g]);a.$el.find(".rule-value-container input").each(function(l){$(this).slider("setValue",
g[l]||0)})},valueGetter:function(a){var g=[];a.$el.find(".rule-value-container input").each(function(){g.push($(this).slider("getValue"))});return 1==a.operator.nb_inputs?g[0]:g},optgroup:k}},segmentFiltersForCX=[buildSegmentNumberSlider("totalCFS","Total CFS",0,100,1,0,"CFS - Customer Feedback Score"),buildSegmentNumberSlider("positiveCFS","Positive CFS",0,100,1,0,"CFS - Customer Feedback Score"),buildSegmentNumberSlider("neutralCFS","Neutral CFS",0,100,1,0,"CFS - Customer Feedback Score"),buildSegmentNumberSlider("negativeCFS",
"Negative CFS",0,100,1,0,"CFS - Customer Feedback Score"),buildSegmentNumberSlider("totalCES","Total CES",0,100,1,0,"CES - Customer Effort Score"),buildSegmentNumberSlider("positiveCES","Positive CES",0,100,1,0,"CES - Customer Effort Score"),buildSegmentNumberSlider("neutralCES","Neutral CES",0,100,1,0,"CES - Customer Effort Score"),buildSegmentNumberSlider("negativeCES","Negative CES",0,100,1,0,"CES - Customer Effort Score"),buildSegmentNumberSlider("totalCSAT","Total CSAT",0,100,1,0,"CSAT - Customer Satisfaction Score"),
buildSegmentNumberSlider("positiveCSAT","Positive CSAT",0,100,1,0,"CSAT - Customer Satisfaction Score"),buildSegmentNumberSlider("neutralCSAT","Neutral CSAT",0,100,1,0,"CSAT - Customer Satisfaction Score"),buildSegmentNumberSlider("negativeCSAT","Negative CSAT",0,100,1,0,"CSAT - Customer Satisfaction Score"),buildSegmentNumberSlider("totalNPS","Total NPS",0,100,1,0,"NPS - Net Promoter Score"),buildSegmentNumberSlider("positiveNPS","Positive NPS",0,100,1,0,"NPS - Net Promoter Score"),buildSegmentNumberSlider("neutralNPS",
"Neutral NPS",0,100,1,0,"NPS - Net Promoter Score"),buildSegmentNumberSlider("negativeNPS","Negative NPS",0,100,1,0,"NPS - Net Promoter Score")],segmentFiltersForCustomerValue=[{id:"totalTransactionValue",label:"Total Transaction Value",type:"double",validation:{min:0,step:.01},operators:getOperatorsForNumberField(),optgroup:"Scoring Model"},{id:"totalLoyaltyScore",label:"Total Loyalty Score",type:"integer",validation:{step:1,min:0},operators:getOperatorsForNumberField(),optgroup:"Scoring Model"},
{id:"totalCreditScore",label:"Customer Credit Score",type:"integer",validation:{min:0,max:100,step:1},operators:getOperatorsForNumberField(),optgroup:"Scoring Model"},{id:"rfeScore",label:"RFE Score",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"Scoring Model"},{id:"rfmScore",label:"RFM Score",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"Scoring Model"},{id:"churnScore",label:"Churn Score",type:"double",validation:{min:-100,
max:100,step:.01},operators:getOperatorsForNumberField(),optgroup:"Scoring Model"}],advancedSegmentFilters=[{id:"receiveWebPush",label:"Receive Web Notification",type:"integer",input:"radio",values:{0:"No data",1:"Subscribed","-1":"Unsubscribed"},operators:["equal","not_equal"],optgroup:"Data Privacy Consent/Agreement"},{id:"receiveAppPush",label:"Receive App Notification",type:"integer",input:"radio",values:{0:"No data",1:"Subscribed","-1":"Unsubscribed"},operators:["equal","not_equal"],optgroup:"Data Privacy Consent/Agreement"},
{id:"receiveEmail",label:"Receive Email Marketing",type:"integer",input:"radio",values:{0:"No data",1:"Subscribed","-1":"Unsubscribed"},operators:["equal","not_equal"],optgroup:"Data Privacy Consent/Agreement"},{id:"receiveSMS",label:"Receive Mobile SMS",type:"integer",input:"radio",values:{0:"No data",1:"Subscribed","-1":"Unsubscribed"},operators:["equal","not_equal"],optgroup:"Data Privacy Consent/Agreement"},{id:"receiveAds",label:"Receive Retargeting Ads",type:"integer",input:"radio",values:{0:"No data",
1:"Subscribed","-1":"Unsubscribed"},operators:["equal","not_equal"],optgroup:"Data Privacy Consent/Agreement"},{id:"personalProblems",label:"Personal Problems",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Marketing Information"},{id:"personalInterests",label:"Personal Interests",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Marketing Information"},{id:"solutionsForCustomer",label:"Solutions For Customer",type:"string",operators:["contains_any","not_contains_any"],
optgroup:"Marketing Information"},{id:"nextBestActions",label:"Next Best Actions",type:"string",operators:["contains_any","not_contains_any"],input:"select",values:{"read-contents":"READ CONTENTS","buy-some-items":"BUY SOME ITEMS","subscribe-a-service":"SUBSCRIBE A SERVICE","checkout-items-in-cart":"CHECKOUT ITEMS IN CART","checkin-location":"CHECKIN LOCATION","play-a-game":"PLAY A GAME","take-a-course":"TAKE A COURSE","watch-a-video":"WATCH A VIDEO","take-a-trip":"TAKE A TRIP","read-a-book":"READ A BOOK"},
optgroup:"Marketing Information"},{id:"mediaChannels",label:"Reachable Media Channel",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Marketing Information"},{id:"contentKeywords",label:"Content Keywords",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Marketing Information"},{id:"productKeywords",label:"Product Keywords",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Marketing Information"}],loadSegmentBuilder=function(e,f,h,b,c){var d=
function(a,g,l,n){var m=[{id:"dataContext",label:"Data Context",type:"integer",input:"radio",values:{1:"Production Data",0:"Test Data","-1":"Fake Data"},operators:["equal","not_equal"],optgroup:"Basic Profile Information"},{id:"type",label:"Profile Type",type:"integer",input:"select",values:{0:"ANONYMOUS_VISITOR",1:"LOGIN_USER_CONTACT",2:"CUSTOMER_CONTACT",3:"STUDENT_CONTACT",4:"CRM_IMPORTED_CONTACT",5:"DIRECT_INPUT_CONTACT",6:"INFLUENCER_CONTACT",7:"CLIENT_CONTACT",8:"B2B_PARTNER_CONTACT",9:"EMPLOYEE_CONTACT",
10:"KEY_ACCOUNT_CONTACT",11:"SYSTEM_USER_CONTACT"},operators:["equal","not_equal"],optgroup:"Basic Profile Information"},{id:"funnelStage",label:"Data Funnel Stage",type:"string",input:"select",values:{"new-visitor":"New Visitor","returning-visitor":"Returning Visitor",lead:"Lead",prospect:"Prospect","new-customer":"New Customer","engaged-customer":"Engaged Customer","happy-customer":"Happy Customer","customer-advocate":"Customer Advocate","unhappy-customer":"Unhappy Customer","terminated-customer":"Terminated Customer"},
operators:["equal","not_equal"],optgroup:"Basic Profile Information"},buildSegmentJourneyFilter("cdp_profile__inJourneyMaps","Data Journey Map","Basic Profile Information",n),buildSegmentNumberSlider("dataQualityScore","Data Quality Score",0,maxTotalDataQualityScore,1,0,"Basic Profile Information"),{id:"dataLabels",label:"Data Labels",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Basic Profile Information"},buildSegmentDateFilter("createdAt","Created Date","Basic Profile Information"),
buildSegmentDateFilter("updatedAt","Updated Date","Basic Profile Information"),{id:"_key",label:"Profile ID",type:"string",operators:["equal","not_equal"],optgroup:"Profile Key Information"},{id:"visitorId",label:"Web Visitor ID",type:"string",operators:"equal not_equal is_empty is_not_empty is_null is_not_null".split(" "),optgroup:"Profile Key Information"},{id:"fingerprintId",label:"Fingerprint ID",type:"string",operators:"equal not_equal is_empty is_not_empty is_null is_not_null".split(" "),optgroup:"Profile Key Information"},
{id:"crmRefId",label:"Imported CRM ID",type:"string",operators:"equal not_equal is_empty is_not_empty is_null is_not_null".split(" "),optgroup:"Profile Key Information"},{id:"primaryEmail",label:"Primary Email",type:"string",operators:getOperatorsForStringField(),optgroup:"Profile Key Information"},{id:"primaryPhone",label:"Primary Phone",type:"string",operators:getOperatorsForStringField(),optgroup:"Profile Key Information"},{id:"primaryUsername",label:"Primary Username",type:"string",operators:getOperatorsForStringField(),
optgroup:"Profile Key Information"},{id:"governmentIssuedIDs",label:"Citizen/Passport IDs",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Profile Key Information"},{id:"applicationIDs",label:"Application IDs",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Profile Key Information"},{id:"totalLeadScore",label:"Total Lead Score",type:"integer",validation:{min:0,max:100,step:1},operators:getOperatorsForNumberField(),optgroup:"Scoring Model"},{id:"totalProspectScore",
label:"Total Prospect Score",type:"integer",validation:{step:1},operators:getOperatorsForNumberField(),optgroup:"Scoring Model"},{id:"totalEngagementScore",label:"Customer Engagement Score",type:"integer",validation:{min:0,step:1},operators:getOperatorsForNumberField(),optgroup:"Scoring Model"},{id:"totalCAC",label:"Customer Acquisition Cost",type:"double",validation:{min:0,step:.01},operators:getOperatorsForNumberField(),optgroup:"Scoring Model"},{id:"totalCLV",label:"Customer Lifetime Value",type:"double",
validation:{step:.01},operators:getOperatorsForNumberField(),optgroup:"Scoring Model"},{id:"firstName",label:"First Name",type:"string",operators:getOperatorsForStringField(),optgroup:"Personal Information"},{id:"lastName",label:"Last Name",type:"string",operators:getOperatorsForStringField(),optgroup:"Personal Information"},{id:"primaryNationality",label:"Primary Nationality",type:"string",operators:getOperatorsForStringField(),optgroup:"Personal Information"},{id:"permanentLocation",label:"Permanent Location Address",
type:"string",operators:["contains"],optgroup:"Personal Information"},{id:"livingLocation",label:"Living Location Address",type:"string",operators:["contains"],optgroup:"Personal Information"},{id:"livingCity",label:"Living City",type:"string",operators:["contains"],optgroup:"Personal Information"},{id:"livingState",label:"Living State",type:"string",operators:["contains"],optgroup:"Personal Information"},buildSegmentNumberSlider("age","Age",0,150,1,0,"Personal Information"),buildSegmentDateFilter("dateOfBirth",
"Date of Birth","Personal Information"),{id:"gender",label:"Gender",type:"integer",input:"radio",values:{0:"Female",1:"Male",7:"Unknown"},operators:["equal","not_equal"],optgroup:"Personal Information"},buildSegmentNumberSlider("genderProbability","Gender Probability",0,100,1,0,"Personal Information"),{id:"engagedTouchpointIds",field:"cdp_trackingevent__srcTouchpointUrl",label:"Touchpoint URL Source",type:"string",input:"select",values:a,operators:["data_from","data_contains"],optgroup:"Data Sources"},
{id:"referrerChannels",label:"Web Referrer Channel",type:"string",input:"select",values:getTouchpointHubHosts(a),operators:["has_key","not_has_key"],optgroup:"Data Sources"},{id:"lastTouchpoint__name",label:"Last Touchpoint Name",type:"string",operators:["sub_field_contains","sub_field_equals"],optgroup:"Data Sources"},{id:"lastTouchpoint__url",label:"Last Touchpoint URL",type:"string",operators:["sub_field_contains","sub_field_equals"],optgroup:"Data Sources"},{id:"lastSeenIp",label:"Last Seen IP Address",
type:"string",operators:["equal"],optgroup:"Data Sources"},{id:"saleAgencies",label:"Sales Agency / Sales Source",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Sale Sources"},{id:"saleAgents",label:"Sales Agent / Sales Person",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Sale Sources"},{id:"softSkills",label:"Soft Skills",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Education"},{id:"learningHistory",label:"Learning History",
type:"string",operators:["contains_any","not_contains_any"],optgroup:"Education"},{id:"studyCertificates",label:"Study Certificates",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Education"},{id:"jobTitles",label:"Job Title",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Working Experience"},{id:"workingHistory",label:"Working History",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Working Experience"},{id:"businessIndustries",
label:"Business Industry",type:"string",operators:["contains_any","not_contains_any"],optgroup:"Working Experience"},{id:"behavioralEvents",label:"Behavioral Events in Profile",type:"string",input:"select",values:g,operators:["contains_any","not_contains_any"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__fingerprintId",label:"Web Fingerprint ID",type:"string",operators:["data_equals","data_contains"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__metricName",
label:"Event Metric Name",type:"string",operators:getOperatorsForStringEqualityField(),optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__metricValue",label:"Event Metric Value",type:"integer",operators:getOperatorsForNumberField(),optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__timeSpent",label:"Time Spent in Seconds",type:"integer",operators:getOperatorsForNumberField(),optgroup:"Behavioural Event Information"},buildSegmentDateFilter("cdp_trackingevent__createdAt",
"Event Creation Date","Behavioural Event Information"),buildSegmentDateFilter("cdp_trackingevent__updatedAt","Event Modification Date","Behavioural Event Information"),{id:"cdp_trackingevent__transactionId",label:"Event Transaction ID",type:"string",operators:["equals"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__transactionValue",label:"Event Transaction Value",type:"double",validation:{step:.01},operators:getOperatorsForNumberField(),optgroup:"Behavioural Event Information"},
{id:"cdp_trackingevent__transactionCurrency",label:"Event Transaction Currency",type:"string",operators:["equals"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__srcTouchpointName",label:"Source Event from Touchpoint Name",type:"string",operators:["data_equals","data_contains"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__srcTouchpointUrl",label:"Source Event from Touchpoint URL",type:"string",operators:["data_equals","data_contains"],optgroup:"Behavioural Event Information"},
{id:"cdp_trackingevent__refTouchpointName",label:"Referrer Event from Touchpoint Name",type:"string",operators:["data_equals","data_contains"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__refTouchpointUrl",label:"Referrer Event from Touchpoint URL",type:"string",operators:["data_equals","data_contains"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__locationName",label:"Event from Location Name",type:"string",operators:["data_equals","data_contains"],optgroup:"Behavioural Event Information"},
{id:"cdp_trackingevent__locationCode",label:"Event from Location Code",type:"string",operators:["data_equals","data_contains"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__sourceIP",label:"Event from Source IP",type:"string",operators:["data_equals","data_contains"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__refCampaignId",label:"Event from Campaign ID",type:"string",operators:["data_equals","data_contains"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__environment",
label:"Data Environment",type:"string",input:"select",values:{pro:"In Production",qctest:"In QC Test",dev:"In Development"},operators:["data_equals","data_contains"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__fraudScore",label:"Fraud Score",type:"integer",operators:["data_equals"],optgroup:"Behavioural Event Information"},{id:"cdp_trackingevent__deviceType",label:"Device Type",type:"string",operators:getOperatorsForStringEqualityField(),input:"radio",values:{General_Desktop:"Desktop PC",
General_Mobile:"Mobile",General_Tablet:"Tablet"},optgroup:"Device Information"},{id:"cdp_trackingevent__deviceId",label:"Event Device ID",type:"string",operators:["data_equals","data_contains"],optgroup:"Device Information"},{id:"cdp_trackingevent__deviceName",label:"Event Device Name",type:"string",operators:["data_equals","data_contains"],optgroup:"Device Information"},{id:"cdp_trackingevent__deviceOS",label:"Event Device OS",type:"string",operators:["data_equals","data_contains"],optgroup:"Device Information"},
{id:"lastUsedDeviceId",label:"Last Used Device ID",type:"string",operators:["equal"],optgroup:"Device Information"},{id:"shoppingItemsIds",label:"Shopping Items",type:"string",input:"select",values:window.productCatalogMap||{},operators:["contains_any","not_contains_any"],optgroup:"Product Information"},{id:"purchasedItemIds",label:"Purchased Items",type:"string",input:"select",values:window.productCatalogMap||{},operators:["contains_any","not_contains_any"],optgroup:"Product Information"}];l.forEach(function(p){m.push({id:"assetGroup_"+
p.id,field:"behavioralEvents",label:"Events in Asset Group: "+p.title,type:"string",input:"select",values:p.eventNamesForSegmentation,operators:["contains_any","not_contains_any"],optgroup:"Behavioral Events in Asset Group"})});m=m.concat(advancedSegmentFilters);m=m.concat(segmentFiltersForCustomerValue);return m=m.concat(segmentFiltersForCX)},k=function(){var a=_.union(getOperatorsForStringField(),getOperatorsForNumberField());a.push({type:"compare_month_and_day",nb_inputs:1,multiple:!0,apply_to:["date"]});
a.push({type:"compare_month_and_day_with_now",nb_inputs:0,multiple:!0,apply_to:["date"]});a.push({type:"compare_year_month_day_with_now",nb_inputs:0,multiple:!0,apply_to:["date"]});a.push({type:"contains_any",optgroup:"List Operator",nb_inputs:1,multiple:!0,apply_to:["string","number","boolean"]});a.push({type:"not_contains_any",optgroup:"List Operator",nb_inputs:1,multiple:!0,apply_to:["string","number","boolean"]});a.push({type:"has_key",optgroup:"Key Operator",nb_inputs:1,multiple:!0,apply_to:["string"]});
a.push({type:"not_has_key",optgroup:"Key Operator",nb_inputs:1,multiple:!0,apply_to:["string"]});a.push({type:"sub_field_contains",optgroup:"Sub Field",nb_inputs:1,multiple:!0,apply_to:["string"]});a.push({type:"sub_field_equals",optgroup:"Sub Field",nb_inputs:1,multiple:!0,apply_to:["string"]});a.push({type:"data_equals",optgroup:"Data Filter",nb_inputs:1,multiple:!0,apply_to:["string","number","boolean"]});a.push({type:"data_less_than",optgroup:"Data Filter",nb_inputs:1,multiple:!0,apply_to:["string",
"number"]});a.push({type:"data_equals_or_less_than",optgroup:"Data Filter",nb_inputs:1,multiple:!0,apply_to:["string","number"]});a.push({type:"data_greater_than",optgroup:"Data Filter",nb_inputs:1,multiple:!0,apply_to:["string","number"]});a.push({type:"data_equals_or_greater_than",optgroup:"Data Filter",nb_inputs:1,multiple:!0,apply_to:["string","number"]});a.push({type:"data_contains",optgroup:"Data Filter",nb_inputs:1,multiple:!0,apply_to:["string"]});a.push({type:"data_from",optgroup:"Data Filter",
nb_inputs:1,multiple:!0,apply_to:["string"]});a.push({type:"in_journey_map",optgroup:"Data Filter",nb_inputs:1,multiple:!0,apply_to:["string"]});return a};LeoAdminApiUtil.getSecuredData("/cdp/journeymap/list-all-for-segmentation",{},function(a){if(0===a.httpCode&&""===a.errorMessage){a=a.data;var g=b||!1;$("#segment-builder-holder").queryBuilder({plugins:["bt-tooltip-errors"],operators:k(),filters:d(e,f,h,a),rules:g}).on("afterUpdateRuleValue.queryBuilder",function(l,n){"datepicker"===n.filter.plugin&&
n.$el.find(".rule-value-container input").datepicker("update")});"function"===typeof c&&c()}else LeoAdminApiUtil.logErrorPayload(a)})},refreshAllSegments=function(){LeoAdminApiUtil.callPostAdminApi(baseLeoAdminUrl+"/cdp/segments/refresh",{},function(e){iziToast.success({timeout:3E3,icon:"fa fa-check-square-o",title:"Segment Data Refresh",message:"Total updated segment: \x3cb\x3e"+e.data+"\x3c/b\x3e",onClosing:function(f,h,b){location.reload(!0)}})})},loadSegmentStatistics=function(e){var f=$("#segment_size_chart").empty().width(),
h=f/2,b=e.totalProfilesInSystem;if(0==b)$("#segment_size_chart").html("\x3cbr\x3e No data available! ");else if(!1===e){var c=[{count:0,color:"#000000"},{count:100,color:"#f8b70a"}];renderSegmentSize("#segment_size_chart",c,0,f,f,h,0)}else{c=[{count:e.totalProfilesInSegment,color:"#000000"},{count:b-e.totalProfilesInSegment,color:"#f8b70a"}];var d=e.totalProfilesInSegment;e=(e.totalProfilesInSegment/b).toFixed(2);e=Math.floor(100*e);renderSegmentSize("#segment_size_chart",c,d,f,f,h,e)}},deleteSegment=
function(){if("object"===typeof segmentDataModel&&""!=window.segmentDataModel.id){$("#delete_callback").val("");$("#confirmDeleteParentChildDialog").modal({focus:!0});$("#deleteChildItemMsg").text("Delete all profiles and related data in this segment ! (Be Careful)");$("#deleteChildItemCheckbox").prop("checked",!1);$("#deleteChildItem").show();var e="deleteSegment"+segmentDataModel.id;window[e]=function(){var f=baseLeoAdminUrl+"/cdp/segment/delete",h=$("#deleteChildItemCheckbox").is(":checked");LeoAdminApiUtil.callPostAdminApi(f,
{id:segmentDataModel.id,deleteAllProfiles:h},function(b){0===b.httpCode?!0===b.data?($("#deleteChildItem").hide(),$("#deleteChildItemMsg").text(""),iziToast.success({title:"OK",message:'Successfully deleted the segment "'+segmentDataModel.name+'"',onClosing:function(c,d,k){location.hash="calljs-leoCdpRouter('Segment_Management')"}})):iziToast.error({title:"Error",message:b.data,onClosing:function(c,d,k){location.reload(!0)}}):($("#error-on-save").html(b.errorMessage).show().delay(5E3).fadeOut("slow"),
LeoAdminApiUtil.logErrorPayload(b))})};$("#delete_parent_callback").val(e);$("#deletedParentInfoTitle").html(segmentDataModel.name);$("#deletedParentInfoMsg").html("Do you want to delete the segment ?")}},loadProfilesInSegment=function(e){var f=$("#profile_list_querybuilder");"object"===typeof segmentDataModel&&(!0===e?(segmentDataModel.realtimeQuery=!0,f.DataTable().clear(),f.DataTable().ajax.reload()):loadProfileViewForSegment(f,"/cdp/segment/profile-query-builder"))},loadProfileViewForSegmentParams=
function(e){var f=$("#segment-builder-holder").queryBuilder("getRules");e.jsonQueryRules="object"===typeof f?JSON.stringify(f):"";e.realtimeQuery=!0===segmentDataModel.realtimeQuery;console.log("loadProfileViewForSegmentParams",f);return JSON.stringify(e)},loadProfileViewForSegment=function(e,f){var h=getUserSession();h&&e.DataTable({lengthMenu:[[20,30,50],[20,30,50]],processing:!0,serverSide:!0,searching:!1,serverMethod:"POST",ajax:{url:f,contentType:"application/json",beforeSend:function(b){b.setRequestHeader("leouss",
h)},data:loadProfileViewForSegmentParams},columnDefs:[{render:function(b,c,d){c="Web Visitor";try{"function"===typeof initPersonalizationInSegment&&initPersonalizationInSegment(d.id);var k=d.firstName||"",a=d.lastName||"";if(0<k.length||0<a.length)c=textTruncate(k+" "+a,30)}catch(g){console.log(g)}return'\x3cdiv style\x3d"width:94px;font-size:13.2px;"\x3e\x3ca target\x3d"_blank" title\x3d"Profile Report" href\x3d"#calljs-leoCdpRouter(\'Customer_Profile_Info\',\''+(b+"')\" \x3e")+c+"\x3c/a\x3e\x3c/div\x3e"},
targets:0,orderable:!1},{render:function(b,c,d){b=profileContactTypes[b].replace("_CONTACT","");return'\x3cdiv class\x3d"datatable_text" style\x3d"font-size:10.8px;"\x3e\x3ca target\x3d"_blank" title\x3d"Profile Report" href\x3d"#calljs-leoCdpRouter(\'Customer_Profile_Info\',\''+(d.id+"')\" \x3e"+b+"\x3c/a\x3e\x3c/div\x3e")},targets:1,orderable:!1},{render:function(b,c,d){c="-";0===b?c='\x3ci class\x3d"fa fa-female"\x3e\x3c/i\x3e Female':1===b?c='\x3ci class\x3d"fa fa-male"\x3e\x3c/i\x3e Male':2<=
b&&6>=b&&(c="LGBT");return'\x3cdiv class\x3d"datatable_text" style\x3d"font-size:10.8px;" \x3e'+c+"\x3c/div\x3e"},targets:2,orderable:!1},{render:function(b,c,d){return'\x3cdiv class\x3d"datatable_text" style\x3d"font-size:11px;" \x3e\x3ca title\x3d"Profile Email" href\x3d"#calljs-leoCdpRouter(\'Customer_Profile_Info\',\''+(d.id+"')\" \x3e"+textTruncate("string"===typeof b?b:"-",24)+"\x3c/a\x3e\x3c/div\x3e")},targets:3,orderable:!1},{render:function(b,c,d){return'\x3cdiv class\x3d"datatable_text" style\x3d"font-size:11px;" \x3e\x3ca title\x3d"Profile Phone" href\x3d"#calljs-leoCdpRouter(\'Customer_Profile_Info\',\''+
(d.id+"')\" \x3e"+textTruncate("string"===typeof b?b:"-",20)+"\x3c/a\x3e\x3c/div\x3e")},targets:4,orderable:!1},{render:function(b,c,d){b=d.lastTouchpoint?d.lastTouchpoint.name:"";return'\x3cdiv class\x3d"datatable_text" style\x3d"font-size:11px;" title\x3d"'+b+'" \x3e'+textTruncate(b,45)+"\x3c/div\x3e"},targets:5,orderable:!1},{render:function(b,c,d){return'\x3cdiv class\x3d"datatable_text text-center"\x3e'+b+"\x3c/div\x3e"},targets:6,orderable:!1},{render:function(b,c,d){return'\x3cdiv class\x3d"datatable_text text-center"\x3e'+
b+"\x3c/div\x3e"},targets:7,orderable:!1},{render:function(b,c,d){return'\x3cdiv class\x3d"datatable_text text-center"\x3e'+b+"\x3c/div\x3e"},targets:8,orderable:!1},{render:function(b,c,d){return b?'\x3cdiv class\x3d"small"\x3e'+moment.utc(new Date(b)).local().format("YYYY-MM-DD HH:mm:ss")+"\x3c/div\x3e":""},targets:9,orderable:!1}],columns:[{data:"id"},{data:"type"},{data:"gender"},{data:"primaryEmail"},{data:"primaryPhone"},{data:"lastTouchpoint"},{data:"dataQualityScore"},{data:"totalLeadScore"},
{data:"totalCLV"},{data:"updatedAt"}]})},loadSegmentListByFilter=function(e,f,h,b,c){var d=[{data:"id"},{data:"name"},{data:"totalCount"},{data:"description"},{data:"ownerUsername"},{data:"createdAt"},{data:"updatedAt"}],k=getUserSession();if(k)return $(h).DataTable({lengthMenu:[[20,30,40],[20,30,40]],processing:!0,serverSide:!0,searching:!0,search:{return:!0},ordering:!0,serverMethod:"POST",ajax:{url:baseLeoAdminUrl+"/cdp/segments/filter",contentType:"application/json",beforeSend:function(a){$(f).show();
$(e).hide();a.setRequestHeader("leouss",k)},data:function(a){var g=a.order[0];a.sortField=d[g.column].data;a.sortAsc="asc"===g.dir;a.searchValue=a.search.value;delete a.order;delete a.search;"function"===typeof b&&(a=b(a));return JSON.stringify(a)},dataSrc:function(a){var g=a.canInsertData,l=a.canEditData,n=a.canDeleteData;$(h).data("canInsertData",g);$(h).data("canEditData",l);$(h).data("canDeleteData",n);"function"===typeof c&&c(a);$(f).hide();$(e).show();return a.data}},columnDefs:[{render:function(a,
g,l){return"\x3ca href\x3d\"#calljs-leoCdpRouter('Segment_Details','"+(a+'\')" \x3e\x3ci class\x3d"fa fa-caret-right" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/a\x3e')},targets:0,orderable:!1},{render:function(a,g,l){g="#calljs-leoCdpRouter('Segment_Details','"+l.id+"')";l=textTruncate(a,50);return'\x3cdiv class\x3d"segment_name_in_list"\x3e\x3ca title\x3d"Segment: '+a+'" href\x3d"'+g+'" \x3e'+l+"\x3c/a\x3e\x3c/div\x3e"},targets:1},{render:function(a,g,l){return'\x3cdiv class\x3d"segment_size highlight_text" style\x3d"width:95px" \x3e\x3cmark\x3e'+
a.toLocaleString()+"\x3c/mark\x3e\x3c/div\x3e"},targets:2},{render:function(a,g,l){return'\x3cdiv  style\x3d"font-size:0.8em;" title\x3d"'+a+'" \x3e'+textTruncate(a,150)+"\x3c/div\x3e"},targets:3,orderable:!1},{render:function(a,g,l){return'\x3cdiv style\x3d"width:90px; text-align:center" \x3e\x3cmark\x3e'+a.toLocaleString()+"\x3c/mark\x3e\x3c/div\x3e"},targets:4,orderable:!1},{render:function(a,g,l){return'\x3cdiv class\x3d"small text-center" style\x3d"color:#3300ff;width:80px" \x3e'+moment.utc(a).local().format("YYYY-MM-DD HH:mm:ss")+
"\x3c/div\x3e"},targets:5},{render:function(a,g,l){return a?'\x3cdiv class\x3d"small text-center" style\x3d"color:#3300ff;width:80px" \x3e'+moment.utc(a).local().format("YYYY-MM-DD HH:mm:ss")+"\x3c/div\x3e":"-"},targets:6},{render:function(a,g,l){a='\x3ca class\x3d"control" title\x3d"Segment Report" href\x3d"#calljs-leoCdpRouter(\'Segment_Details\',\''+(l.id+'\')" \x3e \x3ci class\x3d"fa fa-info-circle" aria-hidden\x3d"true"\x3e\x3c/i\x3e View\x3c/a\x3e');$(h).data("canEditData")&&(a+='\x3cbr\x3e \x3ca class\x3d"control" title\x3d"Segment Builder" href\x3d"#calljs-leoCdpRouter(\'Segment_Builder\',\''+
(l.id+'\')" \x3e \x3ci class\x3d"fa fa-pencil-square-o" aria-hidden\x3d"true"\x3e\x3c/i\x3e Edit\x3c/a\x3e '));return a},targets:7}],columns:d,order:[[6,"desc"]]})};