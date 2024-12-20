option = {
    tooltip : {
      // trigger: 'axis'
        // formatter: function (params) {
        //     return '名称：' + params.name+' - 位置：'+params.data[0];
        // }
        formatter: "描述：<br/>位置 : {c}",
        // axisPointer: {
        //     type: 'cross'
        // }
    },
    toolbox: {
        show: true,
        top: 100,
        feature: {
            dataZoom: {},
            dataView: {readOnly: false},
            //magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    dataZoom: [
        {
            id: 'dataZoomX',
            type: 'slider',
            xAxisIndex: [0],
            filterMode: 'filter',
            bottom:40
        }
    ],
    xAxis: {
        min:-60,
        max:44,
        type : 'value',
        //position: 'top',
        interval: 2,
        axisTick:{
            inside:true,
        }
        
    },
    yAxis: {
        type : 'category',
        axisLine: {show: false},
        // splitLine:{show:true},
        axisLabel: {show: false},
        axisTick: {show: false},
    },
    grid: {
        top: 200,
        bottom: 100,
        left:10,
        right:10
    },
    series: [{
        symbolSize: 15,
        itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          'red','blue','#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            },
        data: [
            [12, "56"],
            [6, "57"],
            [-6, "65"],
            [-10, "66"],
            [-14, "67"],
            [-20, "68"],
            [-38, "58"],
            [-42, "59"],
            [-46, "60"],
            [-50, "63"],
        ],
        type: 'scatter',
        label: {
            normal: {
                show: true,
                position: [-5, -20],
                formatter: function (data) {
                    return data.value[1];
                },
                color: 'white',
                backgroundColor: 'black',
                borderRadius: 3,
                padding: [2, 2, 2, 2]
            }
        },
        markLine: {
			data: [
			    {name: 'FP:PU1', value: -50, xAxis: -50},
				{name: 'FP:VT', value: -35, xAxis: -35},
				{name: 'FP:OE', value:-30, xAxis: -30},
				{name: 'FP:FE', value:-25, xAxis: -25},
				{name: 'FP:PU', value:-20, xAxis: -20},
				{name: 'Start of Assy', value:0, xAxis: 0},
				
			],
			label:{
			    normal: {
			        show: true,
			        color:'red',
                    //position: [-5, -20],
                    formatter: function (data) {
                    return data.name;
                },
			    }
			}
			
				
		}
    }]
};
setInterval(function() {
    echarts.util.each(option.series[0].data, function(item) {
        item[0] += 1;
        if (item[0] > 44) {
            item[0] = -60;
        }
    });
    myChart.setOption(option);

}, 2000)
//对象点击事件
myChart.on('click', function (params) {
     if (params.name === "FP:PU1"||params.name === "FP:VT"||params.name === "FP:OE"
        ||params.name === "FP:FE"||params.name === "FP:PU"||params.name === "Start of Assy") {
         
     }else{
         //params.data[0]是x轴值，params.data[1]是y轴值
          window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
     }
   
});
