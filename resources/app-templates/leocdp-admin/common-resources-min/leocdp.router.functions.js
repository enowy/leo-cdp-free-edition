'use strict';LeoCdpAdmin.navFunctions={};LeoCdpAdmin.navFunctions.loadSelfLearningCourses=function(a){LeoCdpAdmin.loadView("/view/modules/knowledge/self-learning-courses.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(a);initSelfLearningCourses()})};LeoCdpAdmin.navFunctions.loadMainDataDashboard=function(a){LeoCdpAdmin.loadView("/view/modules/analytics/main-dashboard.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(a);initPrimaryDashboard()})};
LeoCdpAdmin.navFunctions.loadContentDashboard=function(a){LeoCdpAdmin.loadView("/view/modules/analytics/content-dashboard.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(a);initContentDashboard()})};LeoCdpAdmin.navFunctions.loadEventDataDashboard=function(a){LeoCdpAdmin.loadView("/view/modules/analytics/event-data-dashboard.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(a);intEventDataDashboard()})};
LeoCdpAdmin.navFunctions.loadCXDataDashboard=function(a){LeoCdpAdmin.loadView("/view/modules/analytics/cx-analytics-dashboard.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(a);initCXAnalyticsDashboard()})};LeoCdpAdmin.navFunctions.loadJourneyMapStudio=function(a){console.log("loadJourneyMapStudio "+a);LeoCdpAdmin.loadView("/view/modules/journey/journey-map-studio.html?admin\x3d1",pageDomSelector,function(){loadOkJourneyMapDesigner()})};
LeoCdpAdmin.navFunctions.loadJourneyMapList=function(a){LeoCdpAdmin.loadView("/view/modules/journey/journey-map-list.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(a);initJourneyMapList()})};LeoCdpAdmin.navFunctions.loadCustomerJourneyFlow=function(a){LeoCdpAdmin.loadView("/view/modules/journey/customer-journey-flow.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(a);initMediaJourneyMap()})};
LeoCdpAdmin.navFunctions.loadDataEventFunnel=function(a){LeoCdpAdmin.loadView("/view/modules/journey/customer-journey-funnel.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(a);initBehavioralEventList()})};LeoCdpAdmin.navFunctions.loadCustomerProfileList=function(a){LeoCdpAdmin.loadView("/view/modules/customer/customer-profile-list.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(a);initCustomerProfileList()})};
LeoCdpAdmin.navFunctions.loadCustomerProfileSearch=function(a,b){LeoCdpAdmin.loadView("/view/modules/customer/customer-profile-list.html?admin\x3d1",pageDomSelector,function(){"string"===typeof a&&"string"===typeof b&&($("#page_breadcrumb").html(b),initCustomerProfileList(a))})};LeoCdpAdmin.navFunctions.loadProfileImporter=function(a){LeoCdpAdmin.loadView("/view/modules/customer/customer-profile-import.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(a);initProfileImporter()})};
LeoCdpAdmin.navFunctions.loadCustomerProfileInfo=function(a,b){LeoCdpAdmin.loadView("/view/modules/customer/customer-profile-info.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(b);initProfile360Analytics(a)})};LeoCdpAdmin.navFunctions.loadCustomerProfileEditor=function(a,b){LeoCdpAdmin.loadView("/view/modules/customer/customer-profile-editor.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(b);initProfileEditor(a)})};
LeoCdpAdmin.navFunctions.deleteCustomerProfile=function(a){$("#delete_callback").val("");$("#confirmDeleteDialog").modal({focus:!0});if(a){var b="deleteCustomerProfile"+a;window[b]=function(){LeoAdminApiUtil.callPostAdminApi(baseAdminApi+"/cdp/profile/remove",{id:a},function(c){0===c.httpCode&&""===c.errorMessage&&c.data&&(location.hash='calljs-leoCdpRouter("Profile_Management")')})};$("#delete_callback").val(b);$("#deletedInfoTitle").html("Customer Profile ID: "+a);$("#deletedInfoMsg").html("Do you want to delete this profile ?")}};
LeoCdpAdmin.navFunctions.loadSegmentList=function(a){LeoCdpAdmin.loadView("/view/modules/customer/segment-list.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(a);initSegmentList()})};LeoCdpAdmin.navFunctions.loadSegmentBuilder=function(a,b){LeoCdpAdmin.loadView("/view/modules/customer/segment-builder.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(b);initSegmentBuilder(a)})};
LeoCdpAdmin.navFunctions.loadSegmentDetails=function(a,b){LeoCdpAdmin.loadView("/view/modules/customer/segment-details.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(b);initSegmentDetails(a)})};LeoCdpAdmin.navFunctions.loadSegmentActivation=function(a,b){LeoCdpAdmin.loadView("/view/modules/customer/segment-activation.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(b);initSegmentActivation(a)})};
LeoCdpAdmin.navFunctions.loadDataTouchpointList=function(a){LeoCdpAdmin.loadView("/view/modules/activation/data-touchpoint-list.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(a);initDataTouchpointList()})};LeoCdpAdmin.navFunctions.loadDigitalAssetCategories=function(a){LeoCdpAdmin.loadView("/view/modules/asset/category-list.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(a);initContentCategoryList()})};
LeoCdpAdmin.navFunctions.loadGroupsInCategory=function(a,b,c,d){LeoCdpAdmin.loadView("/view/modules/asset/group-list-in-category.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(d);initLoadGroupsInCategory(a,b,c)})};
LeoCdpAdmin.navFunctions.loadGroupEditor=function(a,b,c){LeoCdpAdmin.loadView("/view/modules/asset/group-editor.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(c);a?(console.log("edit group "+a),loadDataPageEditor({groupId:a,categoryId:b})):(console.log("new group"),loadDataPageEditor({groupId:"",categoryId:b}))})};
LeoCdpAdmin.navFunctions.loadGroupDetails=function(a,b){LeoCdpAdmin.loadView("/view/modules/asset/group-details.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(b);initGroupDetails(a)})};
LeoCdpAdmin.navFunctions.deleteGroup=function(a){$("#delete_callback").val("");$("#confirmDeleteDialog").modal({focus:!0});if(a){var b="deleteGroup"+a.id;window[b]=function(){LeoAdminApiUtil.callPostAdminApi(baseAdminApi+"/group/delete",{groupId:a.id},function(c){0===c.httpCode&&""===c.errorMessage&&c.data&&(location.hash='calljs-leoCdpRouter("Data_Asset_Categories")')})};$("#delete_callback").val(b);$("#deletedInfoTitle").html(a.title);$("#deletedInfoMsg").html("Do you want to delete this group ?")}};
LeoCdpAdmin.navFunctions.loadProductImporter=function(a,b){LeoCdpAdmin.loadView("/view/modules/asset/item-product-import.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(b);initProductImporter(a)})};LeoCdpAdmin.navFunctions.assetContentView=function(a,b,c,d){a&&LeoCdpAdmin.loadView("/view/modules/asset/post-item-info.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(d);initPostInfoView({itemId:a,groupId:b,categoryId:c})})};
LeoCdpAdmin.navFunctions.assetContentEditor=function(a,b,c,d){LeoCdpAdmin.loadView("/view/modules/asset/item-post-editor.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(d);console.log("edit content post"+a);initPostEditor({itemId:a,groupId:b,categoryId:c})})};
LeoCdpAdmin.navFunctions.assetTemplateEditor=function(a,b,c,d){LeoCdpAdmin.loadView("/view/modules/asset/item-template-editor.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(d);console.log("assetTemplateEditor "+a);initTemplateEditor({itemId:a,groupId:b,categoryId:c})})};
LeoCdpAdmin.navFunctions.assetFeedbackFormEditor=function(a,b,c,d){LeoCdpAdmin.loadView("/view/modules/asset/item-feedback-editor.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(d);console.log("assetTemplateEditor "+a);initSurveyEditor({itemId:a,groupId:b,categoryId:c})})};
LeoCdpAdmin.navFunctions.assetProductItemEditor=function(a,b,c,d){LeoCdpAdmin.loadView("/view/modules/asset/item-product-editor.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(d);console.log("assetProductItemEditor "+a);initProductItemEditor({itemId:a,groupId:b,categoryId:c})})};
LeoCdpAdmin.navFunctions.assetSubscriptionItemEditor=function(a,b,c,d){LeoCdpAdmin.loadView("/view/modules/asset/item-subscription-editor.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(d);console.log("assetSubscriptionItemEditor "+a);initPostEditor({itemId:a,groupId:b,categoryId:c})})};
LeoCdpAdmin.navFunctions.assetItemCreativeEditor=function(a,b,c,d){LeoCdpAdmin.loadView("/view/modules/asset/item-creative-editor.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(d);console.log("assetItemCreativeEditor "+a);initPostEditor({itemId:a,groupId:b,categoryId:c})})};
LeoCdpAdmin.navFunctions.deleteItemAsset=function(a){$("#delete_callback").val("");$("#confirmDeleteDialog").modal({focus:!0});if(a){var b="deleteItemAsset"+a.id;window[b]=function(){LeoAdminApiUtil.callPostAdminApi(baseAdminApi+"/item/delete",{itemId:a.id,groupId:a.groupIds[0]?a.groupIds[0]:""},function(c){location.hash='calljs-leoCdpRouter("Data_Asset_Categories")'})};$("#delete_callback").val(b);$("#deletedInfoTitle").html(a.title);$("#deletedInfoMsg").html("Do you want to delete this item ?")}};
LeoCdpAdmin.navFunctions.loadActivationServices=function(a){LeoCdpAdmin.loadView("/view/modules/activation/activation-services.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(a);initActivationServices()})};LeoCdpAdmin.navFunctions.loadActivationServiceConfigs=function(a,b){LeoCdpAdmin.loadView("/view/modules/activation/activation-service-configs.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(b);initActivationServiceConfigs(a)})};
LeoCdpAdmin.navFunctions.loadCampaignList=function(a){LeoCdpAdmin.loadView("/view/modules/activation/campaign-list.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(a);initCampaignManagement()})};LeoCdpAdmin.navFunctions.loadCampaignInfo=function(a,b){LeoCdpAdmin.loadView("/view/modules/activation/campaign-info.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(b);initCampaignInfo(a)})};
LeoCdpAdmin.navFunctions.loadCampaignEditor=function(a,b){LeoCdpAdmin.loadView("/view/modules/activation/campaign-editor.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(b);initCampaignEditor(a)})};LeoCdpAdmin.navFunctions.loadActivationRules=function(a){LeoCdpAdmin.loadView("/view/modules/activation/activation-rules.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(a);initActivationRules()})};
LeoCdpAdmin.navFunctions.loadCouponReport=function(a,b){LeoCdpAdmin.loadView("/view/modules/activation/coupon-report.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(b);initCouponReport(a)})};LeoCdpAdmin.navFunctions.loadEmailCampaigns=function(a){LeoCdpAdmin.loadView("/view/modules/activation/email-campaign-list.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(a);initEmailCampaigns()})};
LeoCdpAdmin.navFunctions.loadEmailCampaignReport=function(a,b){LeoCdpAdmin.loadView("/view/modules/activation/email-campaign-report.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(b);initEmailCampaignReport(a)})};LeoCdpAdmin.navFunctions.loadEmailCampaignEditor=function(a,b){LeoCdpAdmin.loadView("/view/modules/activation/email-campaign-editor.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(b);initEmailCampaignEditor(a)})};
LeoCdpAdmin.navFunctions.loadUserLoginList=function(a){LeoCdpAdmin.loadView("/view/modules/system/login-account-list.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(a);loadDataUserList()})};LeoCdpAdmin.navFunctions.loadUserLoginEditor=function(a,b){LeoCdpAdmin.loadView("/view/modules/system/login-account-editor.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(b);loadDataUserProfile(a)})};
LeoCdpAdmin.navFunctions.loadMyLoginInfo=function(a){LeoCdpAdmin.loadView("/view/modules/system/login-account-info.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(a);initMyLoginInfo()})};LeoCdpAdmin.navFunctions.loadSystemInfoConfigs=function(a){LeoCdpAdmin.loadView("/view/modules/system/system-info-configs.html?admin\x3d1",pageDomSelector,function(){$("#page_breadcrumb").html(a);initSystemConfigManagement()})};