var option = {
    backgroundColor: '#fff',
tooltip: {
        trigger: 'axis',
        backgroundColor:'rgba(255,255,255,0.8)',
        extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
        textStyle:{
            color:'#6a717b',
        },
    }, 
    toolbox: {
            'show': true,
           // orient: 'vertical',
            //x: 'right',
            //y: 'center',
            'feature': {
                'magicType': {
                    'show': true,
                    'type': ['stack', 'line']
                },
                'restore': {
                    'show': true
                },
                'saveAsImage': {
                    'show': true
                }
            }
        },
	grid: {
        top: '100',
        left: '3%',
        right: '4%',
        bottom: '50',
        containLabel: true
    },
    legend: {
        top: '10',//图例组件，颜色和名字
        data:['零售量','零售额'],
        textStyle:{
            color:'#6a717b',
        },
    },
	xAxis: [
		{
			type: 'category',
			boundaryGap: true,//坐标轴两边留白
			data: ['种类','种类','种类','种类','种类','种类','种类','种类','种类','种类','种类','种类','种类','种类','种类','种类','种类','种类','种类',],
			axisLabel: { //坐标轴刻度标签的相关设置。
				interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
			    rotate:-30,
				textStyle: {
					color: '#666',
					fontStyle: 'normal',
				}
			},
		axisLine:{//坐标轴轴线相关设置
				lineStyle:{
					color:'#666',
					opacity:1
				}
			},
		splitLine: { //坐标轴在 grid 区域中的分隔线。
				show: false,
			}
		}
     ],
    yAxis: [
	   	   {   
		    name: '零售量（%）',
			type: 'value',
			axisLabel: {
            
			textStyle: {
			color: '#666',
				}
			},
			axisLine:{
				show: false
			},
			axisTick:{
				show: false
			},
			splitLine: {
				show: false,
			}
		},{   
		    name: '零售额（%）',
			type: 'value',
			position: 'right',
			axisLabel: {
				textStyle: {
					color: '#666',
					fontStyle: 'normal',
				}
			},
			axisLine:{
				show: false
			},
			axisTick:{
				show: false
			},
			splitLine: {
				show: false,
			}
		}
	],
    series : [
        {
            name:'零售量',
            type:'bar',
            data:[61, 48, 45,23, 11, 3, 28, 4, 11, 49, 13, 24, 23, 11, 3, 28, 4, 11, 24, ],
            barGap:0,//柱间距离
            label: {//图形上的文本标签
                normal: {
                   show: false,
                   position: 'top',
                   textStyle: {
                       color: '#a8aab0',
                       fontStyle: 'normal',
                   },
                },
            },
            itemStyle: {
            normal: {
                //barBorderRadius: 15,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#229aff'},
                        //{offset: 1, color: '#13bfe8'}
                    ]
                )
            }}
        },
        {
            name:'零售额',
            type:'bar',
            'yAxisIndex': 1,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 12,
            data:[ 49, 13, 24, 23, 11, 3, 28, 4, 11, 24, 61, 48, 45,23, 11, 3, 28, 4, 11],
            barGap:0.2,//柱间距离
            label: {//图形上的文本标签
                normal: {
                   show: false,
                   position: 'top',
                   textStyle: {
                       color: '#a8aab0',
                       fontStyle: 'normal',
                   },
                },
            },
           itemStyle: {
                normal: {
                color:'#fdb94e'},
            },
        }
    ]
};