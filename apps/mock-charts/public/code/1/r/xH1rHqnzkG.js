option = {
    //backgroundColor: '#0f375f',
    title: {
        //text: '企业安全隐患情况分析',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
        left: 'center',
        bottom: '3%',
        textStyle:{
	            //color:'#fff'
	        },
        data: ['红色预警', '橙色预警', '黄色预警', '蓝色预警']
    },
    xAxis: {
        type: 'category',
        //name: '企业类型',
        splitLine: {show: false},
        axisLine: {
					show: true,
					lineStyle:{
						//color:'#fff'
					}
				},
        data: ['2016', '2017', '2018', '2019']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },
    yAxis: {
        //type: 'log',
        //name: '隐患数',
        axisLine: {
					show: true,
					lineStyle:{
						//color:'#fff'
					}
				} 
    },
    series: [
        {
            name: '红色预警',
            type: 'line',
            symbol: 'circle',
            lineStyle:{
				normal:{
					color:'#FF0000',//颜色
					width: 5,//线宽
					type: 'solid',//线型
					opacity:10//透明度0～10,0不显示
				}
			},
			itemStyle:{
				normal:{
                    color:'#FF0000'
                },//
                emphasis:{
                    color:'#FF0000'
                }//鼠标悬停样式
			},
			symbolSize: 10,
            data: [2.3, 4.4, 1.8, 2.9]
        },
        {
            name: '橙色预警',
            type: 'line',
            symbol: 'circle',
            lineStyle:{
				normal:{
					color:'#FF6600',//颜色
					width: 5,//线宽
					type: 'solid',//线型
					opacity:10//透明度0～10,0不显示
				}
			},
			itemStyle:{
				normal:{
                    color:'#FF6600'
                },//
                emphasis:{
                    color:'#FF6600'
                }//鼠标悬停样式
			},
			symbolSize: 10,
            data: [2, 2, 3, 5]
        },
        {
            name: '黄色预警',
            type: 'line',
            symbol: 'circle',
            lineStyle:{
				normal:{
					color:'#FFFF00',//颜色
					width: 5,//线宽
					type: 'solid',//线型
					opacity:10//透明度0～10,0不显示
				}
			},
			itemStyle:{
				normal:{
                    color:'#FFFF00'
                },//
                emphasis:{
                    color:'#FFFF00'
                }//鼠标悬停样式
			},
			symbolSize: 10,
            data: [1, 2, 1, 2]
        },
        {
            name: '蓝色预警',
            type: 'line',
            symbol: 'circle',
            lineStyle:{
				normal:{
					color:'#0000FF',//颜色
					width: 5,//线宽
					type: 'solid',//线型
					opacity:10//透明度0～10,0不显示
				}
			},
			itemStyle:{
				normal:{
                    color:'#0000FF'
                },//
                emphasis:{
                    color:'#0000FF'
                }//鼠标悬停样式
			},
			symbolSize: 10,
            data: [4.2, 2.7, 3.5, 4.5]
        }
    ]
};
