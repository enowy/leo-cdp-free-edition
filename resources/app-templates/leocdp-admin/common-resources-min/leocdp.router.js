'use strict';LeoCdpAdmin.navRouters={defaultRouter:{menuName:"Primary Dashboard",functionName:"loadMainDataDashboard",breadcrumb:["Unified Analytics Hub","Main Data Dashboard"],activeMenuItem:"Main_Data_Dashboard"},Learn_Leo_CDP:{menuName:"Self-Learning Courses",functionName:"loadSelfLearningCourses",breadcrumb:["LEO CDP Knowledge Base","Self-Learning Courses"],activeMenuItem:"USPA_Knowledge_Hub"},Main_Data_Dashboard:{menuName:"Main Data Dashboard",functionName:"loadMainDataDashboard",breadcrumb:["Unified Analytics Hub",
"Main Data Dashboard"],activeMenuItem:"Main_Data_Dashboard"},Event_Data_Dashboard:{menuName:"Event Data Dashboard",functionName:"loadEventDataDashboard",breadcrumb:["Unified Analytics Hub","Event Data Dashboard"],activeMenuItem:"Event_Data_Dashboard"},CX_Data_Dashboard:{menuName:"CX Data Dashboard",functionName:"loadCXDataDashboard",breadcrumb:["Unified Analytics Hub","CX Data Dashboard"],activeMenuItem:"CX_Data_Dashboard"},Customer_Persona_List:{menuName:"Customer Persona List",functionName:"loadCustomerPersonaList",
breadcrumb:["Journey Data Hub","Customer Persona List"]},Customer_Persona_Report:{menuName:"Customer Persona Report",functionName:"loadCustomerPersonaReport",breadcrumb:["Journey Data Hub","Customer Persona List","Persona Report"]},Customer_Persona_Editor:{menuName:"Customer Persona Details",functionName:"loadCustomerPersonaDetails",breadcrumb:["Journey Data Hub","Customer Persona List","Persona Editor"]},Journey_Data_Flow:{menuName:"Journey Data Flow",functionName:"loadCustomerJourneyFlow",breadcrumb:["Journey Data Hub",
"Journey Data Flow"],activeMenuItem:"Journey_Data_Flow"},Touchpoint_Hub_Report:{menuName:"Touchpoint Hub Report",functionName:"loadTouchpointHubReport",breadcrumb:["Journey Data Hub","Customer Journey Map","Touchpoint Hub Report"],activeMenuItem:"Journey_Data_Flow"},Touchpoint_Hub_Editor:{menuName:"Touchpoint Hub Editor",functionName:"loadTouchpointHubEditor",breadcrumb:["Journey Data Hub","Customer Journey Map","Touchpoint Hub Editor"],activeMenuItem:"Journey_Data_Flow"},Journey_Data_Funnel:{menuName:"Journey Data Funnel",
functionName:"loadDataEventFunnel",breadcrumb:["Journey Data Hub","Journey Data Funnel"],activeMenuItem:"Journey_Data_Funnel"},Journey_Map_List:{menuName:"Journey Map List",functionName:"loadJourneyMapList",breadcrumb:["Journey Data Hub","Journey Map List"],activeMenuItem:"Journey_Data_Flow"},Journey_Map_Report:{menuName:"Journey Map Report",functionName:"loadJourneyMapReport",breadcrumb:["Journey Data Hub","Journey Map List","Journey Map Report"],activeMenuItem:"Journey_Data_Flow"},Journey_Map_Studio:{menuName:"Journey Map Studio",
functionName:"loadJourneyMapStudio",breadcrumb:["Journey Data Hub","Journey Map List","Journey Map Studio"],activeMenuItem:"Journey_Data_Flow"},Profile_Management:{menuName:"Profile Management",functionName:"loadCustomerProfileList",breadcrumb:["Customer Data Hub","Profile Management"],activeMenuItem:"Profile_Management"},Customer_Profile_Import:{menuName:"Customer Profile Import",functionName:"loadProfileImporter",breadcrumb:["Customer Data Hub","Profile Management","Customer Profile Import"],activeMenuItem:"Profile_Management"},
Customer_Profile_Info:{menuName:"Customer Profile Report",functionName:"loadCustomerProfileInfo",breadcrumb:["Customer Data Hub","Profile Management","Customer Profile Report"],activeMenuItem:"Profile_Management"},Customer_Profile_Editor:{menuName:"Customer Profile Editor",functionName:"loadCustomerProfileEditor",breadcrumb:["Customer Data Hub","Profile Management","Customer Profile Editor"],activeMenuItem:"Profile_Management"},Segment_Management:{menuName:"Segment Management",functionName:"loadSegmentList",
breadcrumb:["Customer Data Hub","Segment Management"],activeMenuItem:"Segment_Management"},Segment_Builder:{menuName:"Segment Builder",functionName:"loadSegmentBuilder",breadcrumb:["Customer Data Hub","Segment Management","Segment Builder"],activeMenuItem:"Segment_Management"},Segment_Details:{menuName:"Segment Details",functionName:"loadSegmentDetails",breadcrumb:["Customer Data Hub","Segment Management","Segment Details"],activeMenuItem:"Segment_Management"},Segment_Activation:{menuName:"Segment Activation",
functionName:"loadSegmentActivation",breadcrumb:["Customer Data Hub","Segment Management","Segment Activation"],activeMenuItem:"Segment_Management"},Customer_Profile_Search:{menuName:"Customer Profile Search",functionName:"loadCustomerProfileSearch",breadcrumb:["Customer Data Hub","Profile Management"],activeMenuItem:"Profile_Management"},Data_Touchpoint_List:{menuName:"Data Touchpoint List",functionName:"loadDataTouchpointList",breadcrumb:["Data Activation Hub","Data Touchpoint List"],activeMenuItem:"Data_Touchpoint_List"},
Data_Touchpoint_Report:{menuName:"Touchpoint Report",functionName:"loadDataTouchpointReport",breadcrumb:["Data Activation Hub","Data Touchpoint List","Touchpoint Report"],activeMenuItem:"Data_Touchpoint_List"},Data_Touchpoint_Editor:{menuName:"Touchpoint Editor",functionName:"loadDataTouchpointEditor",breadcrumb:["Data Activation Hub","Data Touchpoint List","Touchpoint Editor"],activeMenuItem:"Data_Touchpoint_List"},Data_Asset_Categories:{menuName:"Data Asset Categories",functionName:"loadDigitalAssetCategories",
breadcrumb:["Data Activation Hub","Data Asset Categories"],activeMenuItem:"Data_Asset_Categories"},Asset_Groups:{menuName:"Asset Group ",functionName:"loadGroupsInCategory",breadcrumb:["Data Activation Hub","Data Asset Categories","Asset Groups"],activeMenuItem:"Data_Asset_Categories"},Asset_Group_Details:{menuName:"Asset Group Details",functionName:"loadGroupDetails",breadcrumb:["Data Activation Hub","Data Asset Categories","Asset Groups","Asset Group Details"],activeMenuItem:"Data_Asset_Categories"},
Product_Importer:{menuName:"Product Importer",functionName:"loadProductImporter",breadcrumb:["Data Activation Hub","Data Asset Categories","Asset Groups","Product Importer"],activeMenuItem:"Data_Asset_Categories"},Asset_Group_Editor:{menuName:"Asset Group Editor",functionName:"loadGroupEditor",breadcrumb:["Data Activation Hub","Data Asset Categories","Asset Groups","Asset Group Editor"],activeMenuItem:"Data_Asset_Categories"},Asset_Content_View:{menuName:"Item Information",functionName:"assetContentView",
breadcrumb:["Data Activation Hub","Data Asset Categories","Asset Groups","Asset Group Details","Item Information"],activeMenuItem:"Data_Asset_Categories"},Asset_Template_Editor:{menuName:"Asset Template Editor",functionName:"assetTemplateEditor",breadcrumb:["Data Activation Hub","Data Asset Categories","Asset Groups","Asset Group Details","Asset Template Editor"],activeMenuItem:"Data_Asset_Categories"},Asset_Feedback_Form_Editor:{menuName:"Feedback Form Editor",functionName:"assetFeedbackFormEditor",
breadcrumb:["Data Activation Hub","Data Asset Categories","Asset Groups","Asset Group Details","Feedback Form Editor"],activeMenuItem:"Data_Asset_Categories"},Asset_Content_Editor:{menuName:"Asset Content Editor",functionName:"assetContentEditor",breadcrumb:["Data Activation Hub","Data Asset Categories","Asset Groups","Asset Group Details","Asset Content Editor"],activeMenuItem:"Data_Asset_Categories"},Asset_Product_Item_Editor:{menuName:"Asset Product Item Editor",functionName:"assetProductItemEditor",
breadcrumb:["Data Activation Hub","Data Asset Categories","Asset Groups","Asset Group Details","Asset Product Item Editor"],activeMenuItem:"Data_Asset_Categories"},Asset_Service_Item_Editor:{menuName:"Asset Product Service Editor",functionName:"assetSubscriptionItemEditor",breadcrumb:["Data Activation Hub","Data Asset Categories","Asset Groups","Asset Group Details","Asset Product Service Editor"],activeMenuItem:"Data_Asset_Categories"},Asset_Creative_Editor:{menuName:"Asset Product Service Editor",
functionName:"assetItemCreativeEditor",breadcrumb:["Data Activation Hub","Data Asset Categories","Asset Groups","Asset Group Details","Asset Product Service Editor"],activeMenuItem:"Data_Asset_Categories"},Data_Connector_List:{menuName:"Data Connector List",functionName:"loadDataConnectorList",breadcrumb:["Data Activation Hub","Data Connector List"],activeMenuItem:"Data_Connector_List"},Campaign_Management:{menuName:"Campaign Management",functionName:"loadCampaignList",breadcrumb:["Data Activation Hub",
"Campaign Management"],activeMenuItem:"Campaign_Management"},Campaign_Info:{menuName:"Campaign Information",functionName:"loadCampaignInfo",breadcrumb:["Data Activation Hub","Campaign Management","Campaign Information"],activeMenuItem:"Campaign_Management"},Campaign_Editor:{menuName:"Campaign Editor",functionName:"loadCampaignEditor",breadcrumb:["Data Activation Hub","Campaign Management","Campaign Editor"],activeMenuItem:"Campaign_Management"},User_Login_Management:{menuName:"User Login Management",
functionName:"loadUserLoginManagement",breadcrumb:["System Management","User Login Management"],activeMenuItem:"User_Login_Management"},User_Login_Editor:{menuName:"User Login Editor",functionName:"loadUserLoginEditor",breadcrumb:["System Management","User Login Management","Login Account Profile Editor"],activeMenuItem:"User_Login_Management"},My_Login_Info:{menuName:"My Login Account",functionName:"loadMyLoginInfo",breadcrumb:["My Login Account"]},System_Configuration:{menuName:"System Configuration",
functionName:"loadSystemInfoConfigs",breadcrumb:["System Management","System Configuration"],activeMenuItem:"System_Configuration"}};function leoCdpRouterParams(a){return"object"===typeof a?a.join("\x26\x26"):""}function gotoLeoCdpRouter(){for(var a="",d=0;d<arguments.length;d++)a=a+"'"+arguments[d],a=d+1<arguments.length?a+"',":a+"'";location.hash="calljs-leoCdpRouter("+a+")"}
function leoCdpRouter(a,d){LeoCdpAdmin.routerKey=a;var f=LeoCdpAdmin.navRouters[a];console.log("LeoCdpAdmin.navRouters[objKey] ",a,f);console.log("paramsStr "+d);$("#main-navbar").find("a.active").removeClass("active");var b=f.breadcrumb,m=b.length,g="",e=b[0];a=""+e+" - ";for(var c=e.replace(/ /g,"_"),l=LeoCdpAdmin.navRouters[c]?"leoCdpRouter('"+c+"')":"",k='\x3ca id\x3d"tnv_'+c+'" title\x3d"'+e+'" href\x3d"javascript:void(0)'+l+'"\x3e '+b[0]+" \x3c/a\x3e  ",h=1;h<m;h++)e=b[h],a=a+e+" - ",c=e.replace(/ /g,
"_"),l=LeoCdpAdmin.navRouters[c]?"leoCdpRouter('"+c+"')":"",k=h<m-1?k+' \x3ci class\x3d"fa fa-long-arrow-right" aria-hidden\x3d"true"\x3e\x3c/i\x3e \x3ca id\x3d"tnv_'+c+'" title\x3d"'+e+'" href\x3d"#calljs-'+l+'"\x3e '+b[h]+" \x3c/a\x3e ":k+' \x3ci class\x3d"fa fa-long-arrow-right" aria-hidden\x3d"true"\x3e\x3c/i\x3e \x3ca id\x3d"tnv_'+c+'" title\x3d"'+e+'" href\x3d"javascript:void(0)"\x3e '+b[h]+" \x3c/a\x3e ",g=LeoCdpAdmin.navRouters[c]?LeoCdpAdmin.navRouters[c].activeMenuItem||g:g,console.log("activeMenuItemId "+
g);""!=g&&$("#main-navbar").find("#"+g).addClass("active");b=LeoCdpAdmin.navFunctions[f.functionName];"function"===typeof b?(LeoCdpAdmin.routerContext={},d?(f=_.union(d.split("\x26\x26"),[k]),LeoCdpAdmin.routerContext.paramsStr=d,b.apply(null,f)):(LeoCdpAdmin.routerContext.paramsStr=!1,b.apply(null,[k])),document.title=a):(console.error(" LeoCdpAdmin.navFunctions[obj.functionName] is not a function "),console.error(f));window.scroll(0,0)};