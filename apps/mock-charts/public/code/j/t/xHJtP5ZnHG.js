var yAxisData = ['原因1','原因2','原因3','原因4','原因5','原因6','原因7','原因8','原因9','原因10'];
var title = "横向多柱状图";
var barData = {
    "实际值":[209,236,325,439,507,576,722,879,938,1364],
    "目标值":[209,236,325,439,507,576,722,879,938,1364],
}
var lineData = {
    "完成率":[13,37,35,15,13,25,21,6,45,32,2,4]
}
var legendData= [];
var barColor = ["#4DA8EC","#86C9F4"];
var serieData = [] ;
var b = 0;
for(var key in barData){
    legendData.push(key);
    var serie = {
        name: key,type: 'bar', xAxisIndex: 0,yAxisIndex: 0,
        itemStyle:{normal:{color:barColor[b]}},
        label:{normal:{show:false,position:"top",textStyle:{color:"#ffffff"}}},
        data: barData[key]
    }
    serieData.push(serie);
    b++;
}
var colors = ["#036BC8","#4A95FF","#5EBEFC","#2EF7F3","#FFFFFF"];
var option = {
    backgroundColor: '#0f375f',
    title:[
        {text:title,x: '5%', y: '1%',textStyle:{color:"#fff",fontSize:16}},
    ],
    legend: {
    	show:true,left:"right",data:legendData,y:"5%",
        itemWidth:18,itemHeight:12,textStyle:{color:"#fff",fontSize:14},
    },
    color:colors,
    grid: [{x: '10%', y: '10%', width: '80%', height: '85%'},],
    tooltip: {
        formatter: '{b} ({c})'
    },
    xAxis: [
        {gridIndex: 0, axisTick: {show:false},axisLabel: {show:false},splitLine: {show:false},axisLine: {show:false }},
    ],
    yAxis: [
         {  gridIndex: 0, interval:0,data:yAxisData.reverse(),
            axisTick: {show:false}, axisLabel: {show:true},splitLine: {show:false},
            axisLine: {show:true,lineStyle:{color:'#9ea7c4',fontSize:14}},
        }
    ],
    series: serieData
};