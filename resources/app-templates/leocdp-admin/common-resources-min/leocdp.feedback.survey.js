'use strict';function parseSurveyTemplate(h,d){function l(a,b){0<=a.indexOf("[Survey Header Image URL]")?(a=a.substr(25).trim(),b.Header_Image_URL=a):0<=a.indexOf("[Survey Header]")?(a=a.substr(15).trim(),b.Header=a):0<=a.indexOf("[Survey Image URL]")?(a=a.substr(18).trim(),b.Survey_Image_URL=a):0<=a.indexOf("[Survey Description]")?(a=a.substr(20).trim(),b.Description=a):0<=a.indexOf("[Survey Time Period]")&&(a=a.substr(20).trim().split("\x3d\x3e"),2===a.length&&(b.Time_Period=a[0].trim(),b.Time_Period_Label=
a[1].trim()));return b}function m(a,b){0<=a.indexOf("[Survey Footer]")?(a=a.substr(15).trim(),b.Footer=a):0<=a.indexOf("[Survey Footer Image URL]")&&(a=a.substr(25).trim(),b.Footer_Image_URL=a);return b}function n(a,b){if(0<=a.indexOf("[Profile First Name]")){var c=a.substr(20).trim();b.Profile_First_Name_Label=c}else 0<=a.indexOf("[Profile Last Name]")&&(c=a.substr(19).trim(),b.Profile_Last_Name_Label=c);if(0<=a.indexOf("[Profile Gender]"))c=a.substr(16).trim(),a=[],a.push("Female"),a.push("Male"),
a.push("Unknown"),b.Profile_Gender={label:c,choices:a};else if(0<=a.indexOf("[Profile Email]"))c=a.substr(15).trim(),b.Profile_Email_Label=c;else if(0<=a.indexOf("[Profile Phone]"))c=a.substr(15).trim(),b.Profile_Phone_Label=c;else if(0<=a.indexOf("[Profile Birth Date]"))c=a.substr(20).trim(),b.Profile_Birth_Date_Label=c;else if(0<=a.indexOf("[Profile Age]"))c=a.substr(13).trim(),b.Profile_Age_Label=c;else if(0<=a.indexOf("[Profile Age Group]"))c=a.substr(19).trim(),a=[],a.push("[18 - 24]"),a.push("[25 - 34]"),
a.push("[35 - 44]"),a.push("[45 - 54]"),a.push("[55 - 64]"),a.push("[65 - 74]"),a.push("[75 - 99]"),b.Profile_Age_Group={label:c,choices:a};else if(0<=a.indexOf("[Profile Living Location]"))c=a.substr(25).trim(),b.Profile_Living_Location_Label=c;else if(0<=a.indexOf("[Profile Location Code]"))c=a.substr(23).trim(),b.Profile_Location_Code_Label=c;else if(0<=a.indexOf("[Profile Ext ID]"))c=a.substr(16).trim(),b.Ext_ID=c;else if(0<=a.indexOf("[Profile Extra Attribute]")){b.Profile_Extra_Attributes="object"===
typeof b.Profile_Extra_Attributes?b.Profile_Extra_Attributes:[];var f=a.substr(25).trim().split("\x3d\x3e");3===f.length?(c=f[0].trim(),a=f[1].trim(),f=f[2].trim(),b.Profile_Extra_Attributes.push({key:a,label:f,inputType:c})):2===f.length&&(a=f[0].trim(),f=f[1].trim(),b.Profile_Extra_Attributes.push({key:a,label:f,inputType:"text"}))}return b}function p(a,b){0<=a.indexOf("[Survey Group]")?(a=a.substr(14).trim().split("\x3d\x3e"),2===a.length&&(b.Group=a[0].trim(),b.Group_Label=a[1].trim())):0<=a.indexOf("[Survey Group Option]")?
(b.Group_Options="object"===typeof b.Group_Options?b.Group_Options:[],b.Group_Options.push(a.substr(21).trim())):0<=a.indexOf("[Survey Touchpoint Item]")?(a=a.substr(24).trim().split("\x3d\x3e"),2===a.length&&(b.Touchpoint_Item_ID=a[0].trim(),b.Touchpoint_Item=a[1].trim())):0<=a.indexOf("[Survey Product Item]")?(a=a.substr(21).trim().split("\x3d\x3e"),2===a.length&&(b.Product_Item_ID=a[0].trim(),b.Product_Item=a[1].trim())):0<=a.indexOf("[Survey Content Item]")&&(a=a.substr(21).trim().split("\x3d\x3e"),
2===a.length&&(b.Content_Item_ID=a[0].trim(),b.Content_Item=a[1].trim()));return b}function q(a,b){0<=a.indexOf("[Survey Original Source Label]")?(a=a.substr(30).trim(),b.Survey_Original_Source_Label=a):0<=a.indexOf("[Survey Original Source Option]")?(b.Survey_Original_Source_Options="object"===typeof b.Survey_Original_Source_Options?b.Survey_Original_Source_Options:[],b.Survey_Original_Source_Options.push(a.substr(31).trim())):0<=a.indexOf("[Survey Media Source Label]")?(a=a.substr(27).trim(),b.Survey_Media_Source_Label=
a):0<=a.indexOf("[Survey Media Source Option]")&&(b.Survey_Media_Source_Options="object"===typeof b.Survey_Media_Source_Options?b.Survey_Media_Source_Options:[],b.Survey_Media_Source_Options.push(a.substr(28).trim()));return b}function r(a,b){0<=a.indexOf("[Decision Maker Label]")?(a=a.substr(22).trim(),b.Decision_Maker_Label=a):0<=a.indexOf("[Decision Maker Option]")&&(b.Decision_Maker_Options="object"===typeof b.Decision_Maker_Options?b.Decision_Maker_Options:[],b.Decision_Maker_Options.push(a.substr(23).trim()));
return b}function t(a,b){0<=a.indexOf("[Survey Evaluated Object]")?b.Evaluated_Object=a.substr(25).trim():0<=a.indexOf("[Survey Evaluated Object Option]")&&(b.Evaluated_Object_Suggested_Items="object"===typeof b.Evaluated_Object_Suggested_Items?b.Evaluated_Object_Suggested_Items:[],a=a.substr(32).trim(),b.Evaluated_Object_Suggested_Items.push(a));return b}function u(a,b){0<=a.indexOf("[Survey Evaluated Person]")?b.Evaluated_Person=a.substr(25).trim():0<=a.indexOf("[Survey Evaluated Person Option]")&&
(b.Evaluated_Person_Suggested_Items="object"===typeof b.Evaluated_Person_Suggested_Items?b.Evaluated_Person_Suggested_Items:[],a=a.substr(32).trim(),b.Evaluated_Person_Suggested_Items.push(a));return b}function v(a,b){0<=a.indexOf("[Survey Rating Question Guide]")?(a=a.substr(30).trim(),b.Rating_Question_Guide=a):0<=a.indexOf("[Survey Rating Question Group]")?(b.Rating_Question_List="object"===typeof b.Rating_Question_List?b.Rating_Question_List:{},g=a.substr(30).trim(),b.Rating_Question_List[g]=
[]):0<=a.indexOf("[Survey Rating Question]")?"string"===typeof g&&"object"===typeof b.Rating_Question_List[g]&&(a=a.substr(24).trim(),b.Rating_Question_List[g].push(a)):0<=a.indexOf("[Survey Rating Choices]")&&(b.Rating_Choices="object"===typeof b.Rating_Choices?b.Rating_Choices:[],a=a.substr(23).trim().split(";"),1<a.length&&a.forEach(function(c){"string"===typeof c&&b.Rating_Choices.push(c.trim())}));return b}function w(a,b){b.Multiple_Choice_Question_List="object"===typeof b.Multiple_Choice_Question_List?
b.Multiple_Choice_Question_List:{};if(0<=a.indexOf("[Survey Multiple Choice Question]")){var c=a.substr(33).trim().split("\x3d\x3e");2===c.length&&(a=stringToSlug(c[0]),c={label:c[1].trim(),choices:[]},b.Multiple_Choice_Question_List[a]=c)}else 0<=a.indexOf("[Survey Multiple Choice]")&&(c=a.substr(24).trim().split("\x3d\x3e"),2===c.length&&(a=stringToSlug(c[0]),c=c[1].trim(),"object"===typeof b.Multiple_Choice_Question_List[a]&&b.Multiple_Choice_Question_List[a].choices.push(c)));return b}function x(a,
b){b.Single_Choice_Question_List="object"===typeof b.Single_Choice_Question_List?b.Single_Choice_Question_List:{};if(0<=a.indexOf("[Survey Single Choice Question]")){var c=a.substr(31).trim().split("\x3d\x3e");2===c.length&&(a=stringToSlug(c[0]),c={label:c[1].trim(),choices:[]},b.Single_Choice_Question_List[a]=c)}else 0<=a.indexOf("[Survey Single Choice]")&&(c=a.substr(22).trim().split("\x3d\x3e"),2===c.length&&(a=stringToSlug(c[0]),c=c[1].trim(),"object"===typeof b.Single_Choice_Question_List[a]&&
b.Single_Choice_Question_List[a].choices.push(c)));return b}function y(a,b){if(0<=a.indexOf("[Survey Extra Question Guide]"))a=a.substr(29).trim(),b.Survey_Extra_Question_Guide=a;else if(0<=a.indexOf("[Survey Extra Text Question]")){b.Survey_Extra_Text_Questions="object"===typeof b.Survey_Extra_Text_Questions?b.Survey_Extra_Text_Questions:[];var c=a.substr(28).trim().split("\x3d\x3e");2===c.length&&(a=stringToSlug(c[0]),c=c[1].trim(),b.Survey_Extra_Text_Questions.push({key:a,label:c}))}else 0<=a.indexOf("[Survey Comment]")&&
(a=a.substr(16).trim(),b.Comment_Label=a);return b}h=h.split("\n");var g=!1;d={};for(var k=0;k<h.length;k++){var e=h[k].trim();d=l(e,d);d=n(e,d);d=r(e,d);d=t(e,d);d=u(e,d);d=q(e,d);d=p(e,d);d=v(e,d);d=w(e,d);d=x(e,d);d=y(e,d);d=m(e,d)}return d};