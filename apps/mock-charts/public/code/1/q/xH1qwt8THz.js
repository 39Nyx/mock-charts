var xAxisData = ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10','2018-11','2018-12'];
var legendData= ['投诉量','解决量','投诉解决率'];
var title = "多数据面积图";
var serieData = [];
var metaDate = [
    [20, 4, 10, 20, 30, 20, 10, 17,14, 12, 30, 23],
    [20, 20, 50, 20, 10, 30, 20, 18,20, 19, 30, 20],
    [10,20, 40, 30, 20, 10, 10, 30, 23, 13, 10 ,30]
]
for(var v=0; v < legendData.length ; v++){
    var serie = {
        name: legendData[v],type: 'line',stack: 'area',symbol:"circle",
        symbolSize:0,hoverAnimation:false,lineStyle:{normal:{width:0}},
        areaStyle: {normal: {}},
        data: metaDate[v]
    }
    serieData.push(serie)
}
var colors = ["#036BC8","#4A95FF","#5EBEFC","#2EF7F3","#FFFFFF"];
option = {
    backgroundColor: '#0f375f',
    title : {text: title,textAlign:'left',textStyle:{color:"#fff",fontSize:"16",fontWeight:"normal"}},
    legend: {
    	show:true,left:"right",data:legendData,y:"5%",
        itemWidth:18,itemHeight:12,textStyle:{color:"#fff",fontSize:14},
    },
    color:colors,
    grid: {left: '2%',top:"10%",bottom: "5%",right:"5%",containLabel: true},
    tooltip : { trigger: 'axis',axisPointer : { type : 'shadow'}},
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisTick: {show:false},
            splitLine: {show:false},
            axisLine: {show:true,lineStyle:{color:'#cfcfcf',} },
            axisLabel:{interval:0,textStyle:{color:'#9ea7c4',fontSize:14} },
            data : xAxisData
        }
    ],
    yAxis : [
        {
            type : 'value',max:100,
            axisTick: {show:false},
            splitLine: {show:false},
            axisLine: {show:true,lineStyle:{color:'#cfcfcf',} },
            axisLabel:{formatter:"{value}%",textStyle:{color:'#9ea7c4',fontSize:14} },
        }
    ],
    series:serieData
};