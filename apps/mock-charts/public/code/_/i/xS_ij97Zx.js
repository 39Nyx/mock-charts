var option = {
    title:{
        text:'各门站日输气量计划/完成对比',
        textStyle:{
            align:'center',
            color:'#333',
            fontSize:20
        },
        top:"1%",
        left:'center'
    },
    backgroundColor: '#FBF9F9',
	tooltip: { //提示框组件
		trigger: 'axis',
		formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
		axisPointer: {
			type: 'shadow',
			label: {
				backgroundColor: '#333'
			}
		},
		textStyle: {
			color: '#fff',
			fontStyle: 'normal',
			fontFamily: '微软雅黑',
			fontSize: 12,
		}
	},
	grid: {
		left: '1%',
		right: '4%',
		top:'10%',
		bottom:"2%",
		padding:'0 0 10 0',
		containLabel: true,
	},
    legend: {//图例组件，颜色和名字
        right:10,
		top:'5%',
		itemGap: 16,
		itemWidth: 18,
		itemHeight: 10,
        data:[{
            name:'计划日输气量',
            //icon:'image://../wwwroot/js/url2.png', //路径
        },
        {
            name:'实际日输气量',
        }],
        textStyle: {
			color: '#333',
			fontStyle: 'normal',
			fontFamily: '微软雅黑',
			fontSize: 16,            
        }
    },
	xAxis: [
		{
			type: 'category',
			boundaryGap: true,//坐标轴两边留白
			data: ['城区城东站', '信阳银高一期站', '信阳银高二期站', '城区黄八站', '秦皇台站', '沾化城东站', '利国站门站'],
			axisLabel: { //坐标轴刻度标签的相关设置。
				interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
				margin:15,
				textStyle: {
					color: '#333',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 16,
				}
			},
			axisTick:{//坐标轴刻度相关设置。
				show: true,
			},
			axisLine:{//坐标轴轴线相关设置
				lineStyle:{
					color:'#333',
				//	opacity:0.5
				}
			},
			splitLine: { //坐标轴在 grid 区域中的分隔线。
				show: false,
			}
		}
	],
	yAxis: [
		{
			type: 'value',
			name:'Nm³',
			splitNumber: 5,
			axisLabel: {
				textStyle: {
					color: '#333',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 16,
				}
			},
			axisLine:{
				show: true,
					lineStyle:{
					color:'#333',
					//opacity:0.5
				}
			},
			axisTick:{
				show: true
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#333'],
					opacity:0.2
				}
			}

		}
	],
    series : [
        {
            name:'计划日输气量',
            type:'bar',
            data:[290, 300, 250, 270, 240, 350, 220, 255, 290, 310],
            barWidth: 18,
            barGap:0,//柱间距离
            label: {//图形上的文本标签
                normal: {
                   show: false,//柱状上方是否显示数据
                   position: 'top',
                   textStyle: {
                       color: '#a8aab0',
                       fontStyle: 'normal',
                       fontFamily: '微软雅黑',
                       fontSize: 12,   
                   },
                },
            },
            itemStyle: {//图形样式
                normal: {
					barBorderRadius: [5, 5, 0, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1, color: 'rgba(127, 128, 225, 0.7)'
                    },{
                        offset: 0.9, color: 'rgba(72, 73, 181, 0.7)'
                    },{
                        offset: 0.25, color: 'rgba(226, 99, 74, 0.7)'
                    }, {
                        offset: 0, color: 'rgba(253, 200, 106, 0.7)'
                    }], false),
                },
            },
        },
        {
            name:'实际日输气量',
            type:'bar',
            data:[330, 420, 360, 300, 270, 410, 310, 370, 340, 355],
            barWidth: 18,
            barGap:0.5,//柱间距离
            label: {//图形上的文本标签
                normal: {
                   show: false,
                   position: 'top',
                   textStyle: {
                       color: '#a8aab0',
                       fontStyle: 'normal',
                       fontFamily: '微软雅黑',
                       fontSize: 12,   
                   },
                },
            },
            itemStyle: {//图形样式
                normal: {
					barBorderRadius: [5, 5, 0, 0],
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1, color: 'rgba(127, 128, 225, 0.7)'
                    },{
                        offset: 0.9, color: 'rgba(72, 73, 181, 0.7)'
                    },{
                        offset: 0.31, color: 'rgba(0, 208, 208, 0.7)'
                    },{
                        offset: 0.15, color: 'rgba(0, 208, 208, 0.7)'
                    }, {
                        offset: 0, color: 'rgba(104, 253, 255, 0.7)'
                    }], false),
					
                },
            },
        }
    ]
};