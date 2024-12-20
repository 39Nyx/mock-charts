option = {
    backgroundColor: '#000',
    textStyle: {
        color: '#40E7F4',
        fontSize: 16,
        fontWeight: 'normal'
    },
    title : {
        text: '本周-上周运单数据对比图',
        left: '10%',
        top: '7%',
        textStyle: {
            color: '#40E7F4',
            fontSize: 22,
            fontWeight: 'normal'
        }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        }
    },
    dataset: {
        source: [
            ['week', '本周','上周'],
            ['周一', 49, 7.0],
            ['周二', 23.2, 25.6],
            ['周三', 76.7, 32.6],
            ['周四', 26.4, 28.7],
            ['周五', 28.7, 70.7],
            ['周六', 48.7, 18.8],
            ['周日', 5.9, 26.4]
        ]
    },
    legend: {
        right: '10%',
        top: '8%',
        itemWidth: 14,
        itemHeight: 14,
        textStyle: {
            color: '#40E7F4',
            fontSize: 14
        }
    },
    calculable : true,
	grid: {
		left: '10%',
		right: '10%',
		bottom: '6%',
		top: '20%',
		containLabel: true,
	},
    xAxis : [
        {
            type : 'category',
            boundaryGap: true, //坐标轴两边留白
            axisTick:{//坐标轴刻度相关设置。
				show: false,
			},
			axisLine:{//坐标轴轴线相关设置
				lineStyle:{
					color: '#81D8D0',
					opacity: 0.2
				}
			},
			splitLine: { //坐标轴在 grid 区域中的分隔线。
				show: false,
			}
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel: {
                fontSize: 14,
                verticalAlign: 'bottom',
                margin: -16
            },
			axisLine:{
				show: false
			},
			axisTick:{
				show: false
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#81D8D0',
					opacity: 0.2
				}
			}
        }
    ],
    series : [
        {
            name:'本周',
            type:'bar',
            barWidth: 10,
            itemStyle: {
                barBorderRadius: [5, 5, 0, 0],
                color: {
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [
                            {offset: 0, color: '#57FFE0'},
                            {offset: 0.3, color: '#3AA5C7'},
                            {offset: 1, color: '#3469E2'}
                        ]
                    }
            }
        },
        {
            name:'上周',
            type:'bar',
            barWidth: 10,
            itemStyle: {
                barBorderRadius: [5, 5, 0, 0],
                color: {
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [
                            {offset: 0, color: '#F78678'},
                            {offset: 0.5, color: '#C359D0'},
                            {offset: 1, color: '#963EF5'}
                        ]
                    }
            }
        }
    ]
};
