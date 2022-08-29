'use strict';const chartColorCodes="#58799D #0000FF #8B008B #D2691E #708090 #808080 #800080 #2F4F4F #9932CC #BC8F8F #117A65 #689F38 #D81B60 #33CC66 #336699 #000099 #9C27B0 #C62828 #00BCD4 #6D4C41 #9E9E9E #2196F3".split(" "),MAX_TO_LINE_CHART=chartColorCodes.length,journeyLabel5A=["AWARENESS","ATTRACTION","ASK","ACTION","ADVOCACY"];function randomInteger(b,c){return Math.floor(Math.random()*(c-b+1))+b}
function getColorCodeProfileFunnel(b){var c="#7A9F8D #5D897C #40736D #24585C #225059 #1F4360 #1A2E55 #161C4A #15113E #17202A".split(" ");return 0<=b&&10>=b?c[b-1]:c[0]}
const renderFunnelChart=function(b,c,e,d){var g=[];c.forEach(function(h){var a=h.orderIndex;g.push([h.name,"[Stage "+a+"]",d(a)])});(new D3Funnel(b)).draw(g,e)},renderJourneyFlowChart=function(b,c,e,d,g,h){c={margin:{top:5,left:95,right:45,bottom:5},nodes:{dynamicSizeFontNode:{enabled:!0,minSize:14,maxSize:26},fontSize:16,draggableX:!1,draggableY:!0,colors:d3.scaleOrdinal(d3.schemeCategory20)},links:{formatValue:function(a,f){d3.format(",.0f")(f);return""},unit:c},tooltip:{infoDiv:!0,labelSource:"Input:",
labelTarget:"Output:"}};sk.createSankey(b,c,{nodes:d,links:g});$(b+" g.sk-node text").each(function(){var a=$(this).text().trim(),f=h[a];"object"===typeof f?(a="["+f.journeyLevel+"] "+a,$(this).html(a)):console.error("touchpointHubMap[name] is NULL for name: "+a)})},renderSegmentSize=function(b,c,e,d,g,h,a){h=Math.floor(.97*h);h=d3.arc().outerRadius(h).innerRadius(110);var f=d3.pie().sort(null).value(function(k){return k.count});b=d3.select(b).append("svg").attr("width",d).attr("height",g).append("g").attr("transform",
"translate("+d/2+","+g/2+")").selectAll(".arc").data(f(c)).enter().append("g");b.append("path").attr("d",h).style("fill",function(k,l){return k.data.color});e='\x3ctspan y\x3d"0" \x3e Segment Size: '+e.toLocaleString()+"\x3c/tspan\x3e";a='\x3ctspan y\x3d"24" \x3e'+a+"% of Total Profile \x3c/tspan\x3e";b.append("text").attr("text-anchor","middle").attr("font-size","1.1em").attr("y",20).html(e);b.append("text").attr("text-anchor","middle").attr("font-size","1.1em").attr("y",20).html(a)},loadMediaTouchpoints=
function(){var b=venn.VennDiagram().width(500).height(400),c=d3.select("#venn_two").datum([{sets:["Email"],figure:27.92,label:"Email",size:27.92},{sets:["Direct Traffic"],figure:55.28,label:"Direct Traffic",size:55.28},{sets:["Search Engine"],figure:7.62,label:"Search Engine",size:7.62},{sets:["Email","Direct Traffic"],figure:3.03,label:"Email and Direct Traffic",size:3.03},{sets:["Email","Search Engine"],figure:1.66,label:"Email and Search Engine",size:1.66},{sets:["Direct Traffic","Search Engine"],
figure:2.4,label:"Direct Traffic and Search Engine",size:2.4},{sets:["Email","Direct Traffic","Search Engine"],figure:1.08,label:"Email, Direct Traffic, and Search Engine",size:1.08}]).call(b);c.selectAll("text").style("fill","white");c.selectAll(".venn-circle path").style("fill-opacity",.8).style("stroke-width",1).style("stroke-opacity",1).style("stroke","fff");var e=d3.select("body").append("div").attr("class","venntooltip");c.selectAll("g").on("mouseover",function(d,g){venn.sortAreas(c,d);e.transition().duration(40).style("opacity",
1);e.text(d.size+"% media touchpoint "+d.label);d3.select(this).transition("tooltip").duration(400).select("path").style("stroke-width",3).style("fill-opacity",1==d.sets.length?.8:0).style("stroke-opacity",1)}).on("mousemove",function(){e.style("left",d3.event.pageX+"px").style("top",d3.event.pageY-28+"px")}).on("mouseout",function(d,g){e.transition().duration(2500).style("opacity",0);d3.select(this).transition("tooltip").duration(400).select("path").style("stroke-width",3).style("fill-opacity",1==
d.sets.length?.8:0).style("stroke-opacity",1)})},personalityDiagram=function(){d3.select("chart_persornality").append("svg").attr("width",300).attr("height",300);RadarChart.draw("#chart_persornality",[[{area:"Openness",value:80},{area:"Conscientiousness",value:40},{area:"Extraversion",value:40},{area:"Agreeableness",value:90},{area:"Neuroticism",value:60}]],{w:300,h:300,maxValue:100,levels:5,ExtraWidthX:300})},loadProfileAttribution=function(){$("#profile_attribution").width();var b=d3.select("#profile_attribution").append("svg").attr("width",
800).attr("height",550).append("g").attr("transform","translate(140,30)"),c=d3.scaleBand().range([0,600]).domain(["Live_in_Saigon","Visited_Web","Installed_App","Used_Credit_Card","Buy_Product"]).padding(.01);b.append("g").attr("transform","translate(0,420)").attr("class","x_axis").call(d3.axisBottom(c)).selectAll("text").attr("transform","translate(-10,10)rotate(-30)").style("text-anchor","end").style("font-size",15).style("fill","#E91E0D");var e=d3.scaleBand().range([420,0]).domain(["Buy_Product",
"Used_Credit_Card","Installed_App","Visited_Web","Live_in_Saigon"]).padding(.01);b.append("g").attr("class","y_axis").call(d3.axisLeft(e)).selectAll("text").style("text-anchor","end").style("font-size",15).style("fill","#463CC4");var d=d3.scaleLinear().range(["white","#008748"]).domain([1,100]),g="/public/uploaded-files/sample-profile-attribution.csv?_\x3d"+(new Date).getTime();d3.csv(g,function(h){b.selectAll().data(h,function(a){return a.profile_attr+":"+a.persona_attr}).enter().append("rect").attr("id",
function(a){return"cell_"+a.profile_attr+"_"+a.persona_attr}).attr("x",function(a){return c(a.profile_attr)}).attr("y",function(a){return e(a.persona_attr)}).attr("width",c.bandwidth()).attr("height",e.bandwidth()).style("fill",function(a){return d(a.matching_score)}).on("click",function(a){var f=" [Profile attribute: "+a.profile_attr+" - Persona attribute: "+a.persona_attr+"] : Matching Score \x3d "+a.matching_score+" %";$("#attribution_description").text(f);b.select("#cell_"+a.profile_attr+"_"+
a.persona_attr);f=" [Profile attribute: "+a.profile_attr+" - Persona attribute: "+a.persona_attr+"] : Matching Score \x3d "+a.matching_score+" %";$("#attribution_description").text(f).effect("highlight",{color:"#5eeb34"},6E3)}).on("mouseover",function(a){console.log(a);b.select("#cell_"+a.profile_attr+"_"+a.persona_attr).style("fill","#5eeb34");a=" [Profile attribute: "+a.profile_attr+" - Persona attribute: "+a.persona_attr+"] : Matching Score \x3d "+a.matching_score+" %";$("#attribution_description").text(a)}).on("mouseout",
function(a){b.select("#cell_"+a.profile_attr+"_"+a.persona_attr).style("fill",d(a.matching_score))})})};
function loadCustomerVenn(){var b=venn.VennDiagram().width($("#customer_source").width()).height(360),c=d3.select("#customer_source").datum([{sets:["Email"],figure:27.92,label:"Email",size:27.92},{sets:["Social Media"],figure:55.28,label:"Social Media",size:55.28},{sets:["Search Engine"],figure:7.62,label:"Search Engine",size:7.62},{sets:["Email","Social Media"],figure:3.03,label:"",size:3.03},{sets:["Email","Search Engine"],figure:2.66,label:"",size:1.66},{sets:["Social Media","Search Engine"],figure:2.4,
label:"",size:2.4},{sets:["Email","Social Media","Search Engine"],figure:1.08,label:"",size:1.08}]).call(b);c.selectAll("text").style("fill","white");c.selectAll(".venn-circle path").style("fill-opacity",.8).style("stroke-width",1).style("stroke-opacity",1).style("stroke","fff");var e=d3.select("body").append("div").attr("class","venntooltip");c.selectAll("g").on("mouseover",function(d,g){venn.sortAreas(c,d);e.transition().duration(40).style("opacity",1);e.text(d.size+"% of Segment Two saw "+d.label);
d3.select(this).transition("tooltip").duration(400).select("path").style("stroke-width",3).style("fill-opacity",1==d.sets.length?.8:0).style("stroke-opacity",1)}).on("mousemove",function(){e.style("left",d3.event.pageX+"px").style("top",d3.event.pageY-28+"px")}).on("mouseout",function(d,g){e.transition().duration(2500).style("opacity",0);d3.select(this).transition("tooltip").duration(400).select("path").style("stroke-width",3).style("fill-opacity",1==d.sets.length?.8:0).style("stroke-opacity",1)})}
function loadChannelPerformance(){var b=[{channelName:"Ecommerce Website",lead:181},{channelName:"Ecommerce App",lead:189},{channelName:"Social Media Groups",lead:387},{channelName:"Retail Store",lead:187},{channelName:"Book Reseller",lead:52}],c=$("#chart").width()-180-20,e=d3.scaleBand().range([300,0]).padding(.1),d=d3.scaleLinear().range([0,c]);c=d3.select("#chart svg").attr("width",c+180+20).attr("height",350).append("g").attr("transform","translate(180,20)");b.forEach(function(g){g.lead=+g.lead});
d.domain([0,d3.max(b,function(g){return g.lead})]);e.domain(b.map(function(g){return g.channelName}));c.selectAll(".bar").data(b).enter().append("rect").attr("class","bar").attr("width",function(g){return d(g.lead)}).attr("y",function(g){return e(g.channelName)}).attr("height",e.bandwidth());c.append("g").attr("transform","translate(0,300)").call(d3.axisBottom(d));c.append("g").call(d3.axisLeft(e))}
var renderTimeseriesChart=function(b,c,e,d,g){var h={labels:[],datasets:[]},a=[],f=getRawDateFilterValues(),k=f.beginFilterDate;for(f=f.endFilterDate;k.isBefore(f,"day");)a.push(k.format("YYYY-MM-DD")),k.add(1,"days");h.labels=a;var l=0;Object.keys(c.reportMap).forEach(function(q){var m={};c.reportMap[q].forEach(function(n){var p=n.dateKey;n=n.dailyCount;m[p]=m[p]?m[p]:0;m[p]+=n});var r=[];h.labels.forEach(function(n){r.push(m[n]?m[n]:0)});var t=chartColorCodes[l];l+=1;var u=!0;l>=MAX_TO_LINE_CHART&&
(l=0,u=!1);var v=0<q.indexOf("view")||0<q.indexOf("click")||!0===g?!1:!0;h.datasets.push({label:q,backgroundColor:t,borderColor:t,fill:!1,borderWidth:1.5,tension:.2,showLine:u,hidden:v,data:r})});if(!0===e&&"object"===typeof d)d.data=h,d.update();else return e=(e=$("#"+b).data("chart-type"))?e:"line",b=document.getElementById(b).getContext("2d"),new Chart(b,{type:e,data:h,options:{tooltips:{mode:"index",intersect:!0},responsive:!0,interaction:{pointHoverRadius:10,intersect:!0,mode:"index"},scales:{xAxes:{stacked:!1},
yAxes:{stacked:!0}}}})};
const PluginCenterTextChartJS=function(){return{beforeDraw:function(b,c,e){var d=b.data.donutChartCenterData;if("object"===typeof d){c="number"===typeof d.value?d.value:0;e="number"===typeof d.marginTop?d.marginTop:30;d="string"===typeof d.suffix?d.suffix:"";var g=b.width,h=b.height;b=b.ctx;b.restore();var a=(h/114).toFixed(2);b.font=a+"em sans-serif";b.textBaseline="middle";a=c;g=Math.round((g-b.measureText(a).width)/2);"string"===typeof d&&(a+=d,g-=10);0<=c?b.fillStyle="#1EC900":(b.fillStyle="#E80015",
g+=4);b.fillText(a,g,h/2+e);b.save()}}}},renderDonutChartJs=function(b,c,e){c=document.getElementById(c).getContext("2d");return new Chart(c,{type:"doughnut",data:e,options:{title:{display:!1,text:b,fontSize:15},responsive:!0,maintainAspectRatio:!0,showDatapoints:!0,legend:{display:!0},plugins:{datalabels:{color:"black",formatter:function(d){return d+"%"},font:{weight:"bold",size:15}}}},plugins:[PluginCenterTextChartJS(),ChartDataLabels]})},renderStackedBarChart=function(b,c){b=document.getElementById(b).getContext("2d");
return new Chart(b,{type:"bar",data:c,options:{tooltips:{mode:"index",intersect:!1},responsive:!0,interaction:{mode:"index"},scales:{xAxes:{stacked:!0},yAxes:{stacked:!0}}}})},showProfileEventBubbleChart=function(b,c,e,d,g){c=0<d.length?d[0].profileCount+10:10;var h=[];d.forEach(function(a,f){var k=g?a[g]:a,l=a.profileCount;a=a.eventCount;k=textTruncate(null==k.name||""==k.name?"Unknown":k.name,70);h.push({label:k,backgroundColor:chartColorCodes[f],borderColor:"#107CC5",data:[{x:a,y:l,r:10}]})});
b={type:"bubble",data:{datasets:h},options:{plugins:{legend:{display:!0,position:"bottom",labels:{font:{size:12}}},title:{text:b,display:!0,font:{size:18},color:"#0000CD"},tooltip:{callbacks:{label:function(a){let f=a.dataset.label||"";f&&(f+=" | ");null!==a.parsed.y&&(f+="Profile: "+a.parsed.y);null!==a.parsed.x&&(f+=" | Event: "+a.parsed.x);return f}}}},responsive:!1,aspectRatio:1,showDatapoints:!1,scales:{y:{title:{text:"Profile",display:!0,font:{size:16},color:"#0000CD",align:"end"},beginAtZero:!0,
max:c,ticks:{stepSize:4,callback:function(a,f,k){return a}}},x:{title:{text:"Event",display:!0,font:{size:16},color:"#0000CD",align:"end"},beginAtZero:!0,ticks:{stepSize:4,callback:function(a,f,k){return a}}}}}};e=e[0].getContext("2d");new Chart(e,b)},renderHorizontalBarChart=function(b,c,e){var d=22*e.length+100;c={data:{labels:c,datasets:[{axis:"y",data:e,fill:!1,backgroundColor:chartColorCodes,borderColor:["rgb(0, 0, 0)"],borderWidth:1}]},type:"bar",options:{indexAxis:"y",plugins:{legend:{display:!1}},
maxBarThickness:22,responsive:!0,maintainAspectRatio:!0,scales:{x:{title:{text:"Event",display:!0,font:{size:16},color:"#0000CD",align:"end"},beginAtZero:!0,ticks:{stepSize:5}}}}};e=$("\x3ccanvas/\x3e");b=$("#"+b);b.find("canvas").remove();b.html(e);e.height(d).css("height",d+"px");new Chart(e[0],c)},renderDirectedGraph=function(b,c,e){const d=c.nodes.length;var g={directed:!0,fit:!0,roots:"#"+e,padding:10};if(1<d){g.name="avsdf";var h=10<d?d:10;20>d?h*=10:25>d?h*=8:50>d?h*=6:75>d?h*=4:100>d&&(h*=
2);g.nodeSeparation=h}b=document.getElementById(b);h=cytoscape.stylesheet().selector("node").style({label:"data(label)","text-valign":"center",color:"#000000","background-color":"#93C4F9"}).selector("node[weight \x3e\x3d 5]").style({"background-color":"#EF5B16",shape:"rectangle"}).selector("#"+e).style({"background-color":"#9EFA06",shape:"rectangle",height:44,width:55}).selector("edge").style({label:"data(weight)","background-color":"#61bffc","curve-style":"bezier","target-arrow-shape":"triangle",
width:3,"line-color":"#61bffc","target-arrow-color":"#61bffc"}).selector("edge[weight \x3e\x3d 5]").style({"line-color":"#F99633","target-arrow-color":"#F99633",width:5});c=cytoscape({container:b,boxSelectionEnabled:!0,autounselectify:!0,style:h,elements:c,minZoom:.1,maxZoom:120,layout:g});c.zoomingEnabled(!0);c.userZoomingEnabled(!0);10>d?(c.zoom(1.3),c.center(c.$("#"+e))):c.fit();c.panzoom({zoomFactor:.05,zoomDelay:45,minZoom:.1,maxZoom:120,fitPadding:50,panSpeed:10,panDistance:10,panDragAreaSize:75,
panMinPercentSpeed:.25,panInactiveArea:8,panIndicatorMinOpacity:.5,zoomOnly:!1,fitSelector:void 0,animateOnFit:function(){return!1},fitAnimationDuration:1E3,sliderHandleIcon:"fa fa-minus",zoomInIcon:"fa fa-plus",zoomOutIcon:"fa fa-minus",resetIcon:"fa fa-expand"});return c},renderMatrixChart=function(b,c,e,d,g){c=$("#"+c);var h=e.length,a=d.length;if(0===h||0===a)c.html("\x3ch4\x3e No data available \x3c/h4\x3e").removeClass("event_matrix_active");else return c.html('\x3cdiv class\x3d"loader"\x3e\x3c/div\x3e'),
b={type:"matrix",data:{datasets:[{label:"",data:g,backgroundColor(f){f=f.dataset.data[f.dataIndex];f="object"===typeof f?f.v:0;f=(0<f&&10>f?10:f)/200;return chroma("#313866").alpha(f).toString()},borderColor:["rgb(0, 0, 0)"],borderWidth:0,width:({chart:f})=>(f.chartArea||{}).width/h-1,height:({chart:f})=>(f.chartArea||{}).height/a-1,datalabels:{formatter:function(f,k){return k.chart.data.datasets[0].data[k.dataIndex].v},color:"#FF533F",font:{weight:"bold",size:20}}}]},options:{plugins:{legend:!1,
title:{text:b,display:!0,font:{size:18},color:"#3300ff"},tooltip:{callbacks:{title(){return""},label(f){f=f.dataset.data[f.dataIndex];return[f.x+" from "+f.y+": "+f.v]}}}},scales:{x:{type:"category",labels:e,ticks:{display:!0,font:{size:14}},grid:{display:!1}},y:{type:"category",labels:d,offset:!0,ticks:{display:!0,font:{size:13.5}},grid:{display:!1}}}},plugins:[ChartDataLabels]},e=$("\x3ccanvas/\x3e"),c.find("canvas").remove(),c.html(e).addClass("event_matrix_active"),new Chart(e[0],b)};