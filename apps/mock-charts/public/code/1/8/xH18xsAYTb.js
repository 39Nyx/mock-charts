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
        data:['笔数准确率','资金核准率','平均交易金额']
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
            name: '平均交易金额',
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
            name:'笔数准确率',
            type:'bar',
            data:[0.81, 0.82, 0.81, 0.81, 0.87, 0.78],
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
            name:'资金核准率',
            type:'bar',
            data:[0.65, 0.70, 0.61, 0.68, 0.91, 0.70],
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
            name:'平均交易金额',
            type:'line',
            yAxisIndex: 1,
            data:[6.83,3.78,8.91,13.8,8.8,0.91],
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

