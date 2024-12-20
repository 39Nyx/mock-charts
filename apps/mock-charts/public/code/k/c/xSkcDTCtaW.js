//多Y轴，自定义气泡（折柱混合）
app.title = '折柱混合';

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    grid: {
		top:'8%', 
		right: '15%',
		left: '10%',
		bottom: '5%'
	},
    legend: {
        data:['笔数清查率','资金清查率','平均清查金额']
    },
    xAxis: [
        {
            type: 'category',
            data: ['工行', '农行', '中行', '建行', '兴业', '邮储'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
				interval: 0,
				rotate: 40,
				margin: 10,
				textStyle:{ fontSize:10, color:'red',},
			},
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '百分比',
            min: 0,
            max: 1,
            interval: 250,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '平均清查金额',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} 元'
            }
        },
    ],
    series: [
        {
            name:'笔数清查率',
            type:'bar',
            data:[0.79,0.89,0.78,0.74,0.78,0.91],
            markPoint : {
                data : [
                    {name : '笔数', value : 1323, xAxis: 3, yAxis: 1323,symbolSize:80},
                    {name : '笔数', value : 1676, xAxis: 5, yAxis: 1676,symbolSize:70},
                ],
                itemStyle:{  
                    normal:{
                    	label:{  
                            show: true,  
                            formatter:function (data) {
				                 var data = (data.value || 0).toString(), result = '';
				                 while (data.length > 3) {
				                 	result = ',' + data.slice(-3) + result;
				                 	data= data.slice(0,data.length - 3);
				                 }
				                 if (data) { result = data + result; }
				                 return result;
			                 },     
                          }  
                    }  
                },
            },
        },
        {
            name:'资金清查率',
            type:'bar',
            data:[0.79,0.56,0.85,0.77,0.77,1],
            markPoint : {
                data : [
                    {name : '资金', value : 1323, xAxis: 9, yAxis: 1218,symbolSize:120},
                ],
                itemStyle:{  
                    normal:{
                    	label:{  
                            show: true,  
                            formatter:function (data) {
				                 var data = (data.value || 0).toString(), result = '';
				                 while (data.length > 3) {
				                 	result = ',' + data.slice(-3) + result;
				                 	data= data.slice(0,data.length - 3);
				                 }
				                 if (data) { result = data + result; }
				                 return '资金\n\n'+result+'\n\nml';
			                 },     
                          }  
                    }  
                },
            },
        },
        {
            name:'平均清查金额',
            type:'line',
            yAxisIndex: 1,
            data:[18.68,8.38,27.26,13.17,8.87,3.99],
            markPoint : {
                data : [
                    {name : '年最高', value : 23.4, xAxis: 7, yAxis: 23.4,symbolSize:100},
                    {name : '年最低', value : 2.0, xAxis: 0, yAxis: 2.0}
                ],
                itemStyle:{  
                    normal:{
                    	label:{  
                            show: true,  
                            formatter:function (data) {
				                 return data.value+' °C';
			                 },     
                          }  
                    }  
                },
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            },
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 5,
                        type:'dotted',
                    }
            	},
            },
        },
       
    ]
};
