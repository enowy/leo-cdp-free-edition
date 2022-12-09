'use strict';const chartColorCodes="#58799D #0000FF #8B008B #D2691E #708090 #808080 #800080 #2F4F4F #9932CC #BC8F8F #117A65 #689F38 #D81B60 #33CC66 #336699 #000099 #9C27B0 #C62828 #00BCD4 #6D4C41 #9E9E9E #2196F3".split(" "),MAX_TO_LINE_CHART=chartColorCodes.length,journeyLabel5A=["AWARENESS","ATTRACTION","ASK","ACTION","ADVOCACY"];function randomInteger(a,b){return Math.floor(Math.random()*(b-a+1))+a}
function getColorCodeProfileFunnel(a){var b="#7A9F8D #5D897C #40736D #24585C #225059 #1F4360 #1A2E55 #161C4A #15113E #17202A".split(" ");return 0<=a&&10>=a?b[a-1]:b[0]}
const renderFunnelChart=function(a,b,e,d){var g=[];b.forEach(function(h){var c=h.orderIndex;g.push([h.name,"[Stage "+c+"]",d(c)])});(new D3Funnel(a)).draw(g,e)},renderJourneyFlowChart=function(a,b,e,d,g,h){b={margin:{top:5,left:95,right:45,bottom:5},nodes:{dynamicSizeFontNode:{enabled:!0,minSize:14,maxSize:24},fontSize:16,draggableX:!1,draggableY:!0,colors:d3.scaleOrdinal(d3.schemeCategory20)},links:{formatValue:function(c,k,f){console.log(h[f?f:c]);return"\x3cb\x3e"+d3.format(",.0f")(k)+'\x3c/b\x3e \x3cspan style\x3d"font-weight:bold; margin:5px; background-color:#FFF8DC; border-radius: 6px;"\x3eprofiles\x3c/span\x3e'},
unit:b},tooltip:{infoDiv:!0,labelSource:"Input:",labelTarget:"Output:"}};sk.createSankey(a,b,{nodes:d,links:g});$(a+" g.sk-node text").each(function(){var c=$(this).text().trim(),k=h[c];if("object"===typeof k){var f=k.totalProfile.toLocaleString();console.log(k);c='\x3ctspan dy\x3d"1em" x\x3d"10" class\x3d"tphub_text_label"\x3e ['+k.journeyLevel+"] "+c+"\x3c/tspan\x3e";c+='\x3ctspan dy\x3d"1.1em" x\x3d"10" dx\x3d"1em" class\x3d"tphub_text_label" \x3e [Total Profile: '+f+"] \x3c/tspan\x3e";$(this).html(c)}else console.error("touchpointHubMap[name] is NULL for name: "+
c)})},renderSegmentSize=function(a,b,e,d,g,h,c){h=Math.floor(.97*h);h=d3.arc().outerRadius(h).innerRadius(110);var k=d3.pie().sort(null).value(function(f){return f.count});a=d3.select(a).append("svg").attr("width",d).attr("height",g).append("g").attr("transform","translate("+d/2+","+g/2+")").selectAll(".arc").data(k(b)).enter().append("g");a.append("path").attr("d",h).style("fill",function(f,l){return f.data.color});e='\x3ctspan y\x3d"0" \x3e Segment Size: '+e.toLocaleString()+"\x3c/tspan\x3e";c=
'\x3ctspan y\x3d"24" \x3e'+c+"% of Total Profile \x3c/tspan\x3e";a.append("text").attr("text-anchor","middle").attr("font-size","1.1em").attr("y",20).html(e);a.append("text").attr("text-anchor","middle").attr("font-size","1.1em").attr("y",20).html(c)},loadMediaTouchpoints=function(){var a=venn.VennDiagram().width(500).height(400),b=d3.select("#venn_two").datum([{sets:["Email"],figure:27.92,label:"Email",size:27.92},{sets:["Direct Traffic"],figure:55.28,label:"Direct Traffic",size:55.28},{sets:["Search Engine"],
figure:7.62,label:"Search Engine",size:7.62},{sets:["Email","Direct Traffic"],figure:3.03,label:"Email and Direct Traffic",size:3.03},{sets:["Email","Search Engine"],figure:1.66,label:"Email and Search Engine",size:1.66},{sets:["Direct Traffic","Search Engine"],figure:2.4,label:"Direct Traffic and Search Engine",size:2.4},{sets:["Email","Direct Traffic","Search Engine"],figure:1.08,label:"Email, Direct Traffic, and Search Engine",size:1.08}]).call(a);b.selectAll("text").style("fill","white");b.selectAll(".venn-circle path").style("fill-opacity",
.8).style("stroke-width",1).style("stroke-opacity",1).style("stroke","fff");var e=d3.select("body").append("div").attr("class","venntooltip");b.selectAll("g").on("mouseover",function(d,g){venn.sortAreas(b,d);e.transition().duration(40).style("opacity",1);e.text(d.size+"% media touchpoint "+d.label);d3.select(this).transition("tooltip").duration(400).select("path").style("stroke-width",3).style("fill-opacity",1==d.sets.length?.8:0).style("stroke-opacity",1)}).on("mousemove",function(){e.style("left",
d3.event.pageX+"px").style("top",d3.event.pageY-28+"px")}).on("mouseout",function(d,g){e.transition().duration(2500).style("opacity",0);d3.select(this).transition("tooltip").duration(400).select("path").style("stroke-width",3).style("fill-opacity",1==d.sets.length?.8:0).style("stroke-opacity",1)})},personalityDiagram=function(){d3.select("chart_persornality").append("svg").attr("width",300).attr("height",300);RadarChart.draw("#chart_persornality",[[{area:"Openness",value:80},{area:"Conscientiousness",
value:40},{area:"Extraversion",value:40},{area:"Agreeableness",value:90},{area:"Neuroticism",value:60}]],{w:300,h:300,maxValue:100,levels:5,ExtraWidthX:300})},loadProfileAttribution=function(){$("#profile_attribution").width();var a=d3.select("#profile_attribution").append("svg").attr("width",800).attr("height",550).append("g").attr("transform","translate(140,30)"),b=d3.scaleBand().range([0,600]).domain(["Live_in_Saigon","Visited_Web","Installed_App","Used_Credit_Card","Buy_Product"]).padding(.01);
a.append("g").attr("transform","translate(0,420)").attr("class","x_axis").call(d3.axisBottom(b)).selectAll("text").attr("transform","translate(-10,10)rotate(-30)").style("text-anchor","end").style("font-size",15).style("fill","#E91E0D");var e=d3.scaleBand().range([420,0]).domain(["Buy_Product","Used_Credit_Card","Installed_App","Visited_Web","Live_in_Saigon"]).padding(.01);a.append("g").attr("class","y_axis").call(d3.axisLeft(e)).selectAll("text").style("text-anchor","end").style("font-size",15).style("fill",
"#463CC4");var d=d3.scaleLinear().range(["white","#008748"]).domain([1,100]),g="/public/uploaded-files/sample-profile-attribution.csv?_\x3d"+(new Date).getTime();d3.csv(g,function(h){a.selectAll().data(h,function(c){return c.profile_attr+":"+c.persona_attr}).enter().append("rect").attr("id",function(c){return"cell_"+c.profile_attr+"_"+c.persona_attr}).attr("x",function(c){return b(c.profile_attr)}).attr("y",function(c){return e(c.persona_attr)}).attr("width",b.bandwidth()).attr("height",e.bandwidth()).style("fill",
function(c){return d(c.matching_score)}).on("click",function(c){var k=" [Profile attribute: "+c.profile_attr+" - Persona attribute: "+c.persona_attr+"] : Matching Score \x3d "+c.matching_score+" %";$("#attribution_description").text(k);a.select("#cell_"+c.profile_attr+"_"+c.persona_attr);k=" [Profile attribute: "+c.profile_attr+" - Persona attribute: "+c.persona_attr+"] : Matching Score \x3d "+c.matching_score+" %";$("#attribution_description").text(k).effect("highlight",{color:"#5eeb34"},6E3)}).on("mouseover",
function(c){console.log(c);a.select("#cell_"+c.profile_attr+"_"+c.persona_attr).style("fill","#5eeb34");c=" [Profile attribute: "+c.profile_attr+" - Persona attribute: "+c.persona_attr+"] : Matching Score \x3d "+c.matching_score+" %";$("#attribution_description").text(c)}).on("mouseout",function(c){a.select("#cell_"+c.profile_attr+"_"+c.persona_attr).style("fill",d(c.matching_score))})})};
function loadCustomerVenn(){var a=venn.VennDiagram().width($("#customer_source").width()).height(360),b=d3.select("#customer_source").datum([{sets:["Email"],figure:27.92,label:"Email",size:27.92},{sets:["Social Media"],figure:55.28,label:"Social Media",size:55.28},{sets:["Search Engine"],figure:7.62,label:"Search Engine",size:7.62},{sets:["Email","Social Media"],figure:3.03,label:"",size:3.03},{sets:["Email","Search Engine"],figure:2.66,label:"",size:1.66},{sets:["Social Media","Search Engine"],figure:2.4,
label:"",size:2.4},{sets:["Email","Social Media","Search Engine"],figure:1.08,label:"",size:1.08}]).call(a);b.selectAll("text").style("fill","white");b.selectAll(".venn-circle path").style("fill-opacity",.8).style("stroke-width",1).style("stroke-opacity",1).style("stroke","fff");var e=d3.select("body").append("div").attr("class","venntooltip");b.selectAll("g").on("mouseover",function(d,g){venn.sortAreas(b,d);e.transition().duration(40).style("opacity",1);e.text(d.size+"% of Segment Two saw "+d.label);
d3.select(this).transition("tooltip").duration(400).select("path").style("stroke-width",3).style("fill-opacity",1==d.sets.length?.8:0).style("stroke-opacity",1)}).on("mousemove",function(){e.style("left",d3.event.pageX+"px").style("top",d3.event.pageY-28+"px")}).on("mouseout",function(d,g){e.transition().duration(2500).style("opacity",0);d3.select(this).transition("tooltip").duration(400).select("path").style("stroke-width",3).style("fill-opacity",1==d.sets.length?.8:0).style("stroke-opacity",1)})}
function loadChannelPerformance(){var a=[{channelName:"Ecommerce Website",lead:181},{channelName:"Ecommerce App",lead:189},{channelName:"Social Media Groups",lead:387},{channelName:"Retail Store",lead:187},{channelName:"Book Reseller",lead:52}],b=$("#chart").width()-180-20,e=d3.scaleBand().range([300,0]).padding(.1),d=d3.scaleLinear().range([0,b]);b=d3.select("#chart svg").attr("width",b+180+20).attr("height",350).append("g").attr("transform","translate(180,20)");a.forEach(function(g){g.lead=+g.lead});
d.domain([0,d3.max(a,function(g){return g.lead})]);e.domain(a.map(function(g){return g.channelName}));b.selectAll(".bar").data(a).enter().append("rect").attr("class","bar").attr("width",function(g){return d(g.lead)}).attr("y",function(g){return e(g.channelName)}).attr("height",e.bandwidth());b.append("g").attr("transform","translate(0,300)").call(d3.axisBottom(d));b.append("g").call(d3.axisLeft(e))}
var renderTimeseriesChart=function(a,b,e,d,g){var h={labels:[],datasets:[]},c=[],k=getRawDateFilterValues(),f=k.beginFilterDate;for(k=k.endFilterDate;f.isBefore(k,"day");)c.push(f.format("YYYY-MM-DD")),f.add(1,"days");h.labels=c;var l=0;Object.keys(b.reportMap).forEach(function(p){var m={};b.reportMap[p].forEach(function(n){var q=n.dateKey;n=n.dailyCount;m[q]=m[q]?m[q]:0;m[q]+=n});var r=[];h.labels.forEach(function(n){r.push(m[n]?m[n]:0)});var t=chartColorCodes[l];l+=1;var u=!0;l>=MAX_TO_LINE_CHART&&
(l=0,u=!1);var v=0<p.indexOf("view")||0<p.indexOf("click")||!0===g?!1:!0;h.datasets.push({label:p,backgroundColor:t,borderColor:t,fill:!1,borderWidth:1.5,tension:.2,showLine:u,hidden:v,data:r})});if(!0===e&&"object"===typeof d)d.data=h,d.update();else return e=(e=$("#"+a).data("chart-type"))?e:"line",a=document.getElementById(a).getContext("2d"),new Chart(a,{type:e,data:h,options:{tooltips:{mode:"index",intersect:!0},responsive:!0,interaction:{pointHoverRadius:10,intersect:!0,mode:"index"},scales:{xAxes:{stacked:!1},
yAxes:{stacked:!0}}}})};
const PluginCenterTextChartJS=function(){return{beforeDraw:function(a,b,e){var d=a.data.donutChartCenterData;if("object"===typeof d){b="number"===typeof d.value?d.value:0;e="number"===typeof d.marginTop?d.marginTop:30;d="string"===typeof d.suffix?d.suffix:"";var g=a.width,h=a.height;a=a.ctx;a.restore();var c=(h/114).toFixed(2);a.font=c+"em sans-serif";a.textBaseline="middle";c=b;g=Math.round((g-a.measureText(c).width)/2);"string"===typeof d&&(c+=d,g-=10);0<=b?a.fillStyle="#1EC900":(a.fillStyle="#E80015",
g+=4);a.fillText(c,g,h/2+e);a.save()}}}},renderDonutChartJs=function(a,b,e){b=document.getElementById(b).getContext("2d");return new Chart(b,{type:"doughnut",data:e,options:{title:{display:!1,text:a,fontSize:15},responsive:!0,maintainAspectRatio:!0,showDatapoints:!0,legend:{display:!0},plugins:{datalabels:{color:"black",formatter:function(d){return d+"%"},font:{weight:"bold",size:15}}}},plugins:[PluginCenterTextChartJS(),ChartDataLabels]})},renderStackedBarChart=function(a,b){a=document.getElementById(a).getContext("2d");
return new Chart(a,{type:"bar",data:b,options:{tooltips:{mode:"index",intersect:!1},responsive:!0,interaction:{mode:"index"},scales:{xAxes:{stacked:!0},yAxes:{stacked:!0}}}})},showProfileEventBubbleChart=function(a,b,e,d,g){var h=b=0;0<d.length?(b=d[0].profileCount+10,h=d[0].eventCount):h=b=10;h=1E4<h?Math.ceil(h/1E3):10;var c=[];d.forEach(function(k,f){var l=g?k[g]:k,p=k.profileCount;k=k.eventCount;l=textTruncate(null==l.name||""==l.name?"Unknown":l.name,70);c.push({label:l,backgroundColor:chartColorCodes[f],
borderColor:"#107CC5",data:[{x:k,y:p,r:10}]})});a={type:"bubble",data:{datasets:c},options:{plugins:{legend:{display:!0,position:"bottom",labels:{font:{size:12}}},title:{text:a,display:!0,font:{size:18},color:"#0000CD"},tooltip:{callbacks:{label:function(k){let f=k.dataset.label||"";f&&(f+=" | ");null!==k.parsed.y&&(f+="Profile: "+k.parsed.y);null!==k.parsed.x&&(f+=" | Event: "+k.parsed.x);return f}}}},responsive:!1,aspectRatio:1,showDatapoints:!1,scales:{y:{title:{text:"Profile",display:!0,font:{size:16},
color:"#0000CD",align:"end"},beginAtZero:!0,max:b,ticks:{stepSize:10,callback:function(k,f,l){return k}}},x:{title:{text:"Event",display:!0,font:{size:16},color:"#0000CD",align:"end"},beginAtZero:!0,ticks:{stepSize:h,callback:function(k,f,l){return k}}}}}};e=e[0].getContext("2d");new Chart(e,a)},renderHorizontalBarChart=function(a,b,e){var d=22*e.length+10;b={data:{labels:b,datasets:[{axis:"y",data:e,fill:!1,backgroundColor:chartColorCodes,borderColor:["rgb(0, 0, 0)"],borderWidth:1}]},type:"bar",
options:{indexAxis:"y",plugins:{legend:{display:!1}},maxBarThickness:22,responsive:!0,maintainAspectRatio:!0,scales:{x:{title:{text:"Event",display:!0,font:{size:16},color:"#0000CD",align:"end"},beginAtZero:!0,ticks:{stepSize:5}}}}};e=$("\x3ccanvas/\x3e");a=$("#"+a);a.find("canvas").remove();a.html(e);e.height(d).css("height",d+"px");new Chart(e[0],b)},initPanZoomController=function(a,b,e){e.panzoom({zoomFactor:.02,zoomDelay:45,minZoom:a,maxZoom:b,fitPadding:50,panSpeed:10,panDistance:10,panDragAreaSize:75,
panMinPercentSpeed:.25,panInactiveArea:8,panIndicatorMinOpacity:.5,zoomOnly:!1,fitSelector:void 0,animateOnFit:function(){return!1},fitAnimationDuration:1E3,sliderHandleIcon:"fa fa-minus",zoomInIcon:"fa fa-plus",zoomOutIcon:"fa fa-minus",resetIcon:"fa fa-expand"})},renderDirectedGraph=function(a,b,e){const d=b.nodes.length;var g={directed:!0,fit:!0,roots:"#"+e,padding:10};if(1<d){g.name="avsdf";var h=10<d?d:10;20>d?h*=10:25>d?h*=8:50>d?h*=6:75>d?h*=4:100>d&&(h*=2);g.nodeSeparation=h}a=document.getElementById(a);
e=cytoscape.stylesheet().selector("node").style({color:"#000000","background-color":"#93C4F9","background-fit":"cover",height:32,width:32}).selector("node[weight \x3e\x3d 5]").style({"background-color":"#EF5B16",shape:"rectangle"}).selector("#"+e).style({"background-color":"#9EFA06","background-image":"https://cdn-icons-png.flaticon.com/128/1927/1927746.png",height:50,width:50}).selector("edge").style({label:"data(weight)","background-color":"#61bffc","curve-style":"bezier","target-arrow-shape":"triangle",
width:3,"line-color":"#61bffc","target-arrow-color":"#61bffc"}).selector("edge[weight \x3e\x3d 5]").style({"line-color":"#F99633","target-arrow-color":"#F99633",width:5});b=cytoscape({container:a,boxSelectionEnabled:!0,autounselectify:!0,style:e,elements:b,minZoom:.1,maxZoom:120,layout:g});b.zoomingEnabled(!0);b.userZoomingEnabled(!0);b.fit(20);b.nodeHtmlLabel([{query:"node",halign:"center",valign:"bottom",halignBox:"center",valignBox:"bottom",cssClass:"",tpl(c){return"\x3cb\x3e "+c.id.toUpperCase()+
"\x3c/b\x3e"}}]);initPanZoomController(.1,120,b);return b},renderMatrixChart=function(a,b,e,d,g){b=$("#"+b);var h=e.length,c=d.length,k=18;16<=h?k=16:20<=h&&(k=15);if(0===h||0===c)b.html("\x3ch4\x3e No data available \x3c/h4\x3e").removeClass("event_matrix_active");else return b.html('\x3cdiv class\x3d"loader"\x3e\x3c/div\x3e'),a={type:"matrix",data:{datasets:[{label:"",data:g,backgroundColor(f){f=f.dataset.data[f.dataIndex];f="object"===typeof f?f.v:0;f=(0<f&&10>f?10:f)/180;return chroma("#313866").alpha(f).toString()},
borderColor:["rgb(0, 0, 0)"],borderWidth:0,width:({chart:f})=>(f.chartArea||{}).width/h-1,height:({chart:f})=>(f.chartArea||{}).height/c-1,datalabels:{formatter:function(f,l){f=l.chart.data.datasets[0].data[l.dataIndex].v;return"number"===typeof f?f.toLocaleString():f},color:"#FF533F",font:{weight:"bold",size:k}}}]},options:{plugins:{legend:!1,title:{text:a,display:!0,font:{size:18},color:"#3300ff"},tooltip:{callbacks:{title(){return""},label(f){f=f.dataset.data[f.dataIndex];return[f.x+" from "+f.y+
": "+f.v]}}}},scales:{x:{type:"category",labels:e,ticks:{display:!0,font:{size:13.5}},grid:{display:!1}},y:{type:"category",labels:d,offset:!0,ticks:{display:!0,font:{size:12.5}},grid:{display:!1}}}},plugins:[ChartDataLabels]},e=$("\x3ccanvas/\x3e"),b.find("canvas").remove(),b.html(e).addClass("event_matrix_active"),new Chart(e[0],a)};