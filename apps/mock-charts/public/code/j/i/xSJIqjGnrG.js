var xAxisData = ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10','2018-11','2018-12'];
var title = "多横向折现与柱状图";
var barData = {
    "实际值":[209,236,325,439,507,576,722,879,938,1364,1806,1851],
    "目标值":[209,236,325,439,507,576,722,879,938,1364,1806,1851],
    //"法治":[209,236,325,439,507,576,722,879,938,1364,1806,1851],
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
var barColor = ["#ffffff"];
for(var key in lineData){
    legendData.push(key);
    var serie = {
        name:key,
        type: 'line',xAxisIndex: 0,yAxisIndex: 1,symbol:"circle",symbolSize:10,
        label: {normal: {show: false,color:"#fff"}},
        itemStyle:{normal:{color:"#fff"}},
        data: lineData[key]
    }
    serieData.push(serie);
}   

var option = {
    backgroundColor: '#0f375f',
    title : {text: title,textAlign:'left',textStyle:{color:"#fff",fontSize:"16",fontWeight:"normal"}},
    legend: {
    	show:true,left:"right",data:legendData,y:"5%",
        itemWidth:18,itemHeight:12,textStyle:{color:"#fff",fontSize:14},
    },
    grid: {left: '2%',top:"10%",bottom: 5,right:10,containLabel: true},
    tooltip : { trigger: 'axis',axisPointer : { type : 'shadow'}},
    xAxis: [
        {   
            type: 'category',
            axisLine: { show: true,lineStyle:{ color:'#6173A3' }},
            axisLabel:{interval:0,textStyle:{color:'#9ea7c4',fontSize:14} },
            axisTick : {show: false},
            data:xAxisData,
        },
    ],
    yAxis: [
        {   
            axisTick : {show: false},
            splitLine: {show:false},
            axisLabel:{textStyle:{color:'#9ea7c4',fontSize:14} },
            axisLine: { show: true,lineStyle:{ color:'#6173A3' }},
        },
        {   
            type: 'value',
            position: 'right',
            splitNumber:2,
            axisTick : {show: false},
            splitLine: {show:false},
            axisLine: {show: false},
            axisLabel: {show:true,formatter: '{value} %',textStyle:{color:'#9EA7C4'}}
        },
    ],
    series: serieData
};