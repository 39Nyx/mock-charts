option = {
    backgroundColor: '#000',
    textStyle: {
        color: '#40E7F4',
        fontSize: 16,
        fontWeight: 'normal'
    },
    title : {
          left: '9%',
          top: 10,
          itemGap: 36,
          text: '每月融资额/还款额',
        subtext: '单位：万元',
          textStyle: {
            color: '#40E7F4',
            fontSize: 32,
            fontWeight: 'normal'
          },
          subtextStyle: {
            fontSize: 16,
            color: 'rgba(64, 231, 244, .59)',
          }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        }
    },
    dataset: {
        dimensions: ['month', '融资额', '还款额'],
        source: [
          ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          [49, 7.0, 23.2, 25.6, 76.7, 32.6, 26.4, 49, 7.0, 23.2, 25.6, 76.7],
          [23.2, 25.6, 28.7, 70.7, 48.7, 18.8, 16.4, 23.2, 25.6, 28.7, 70.7, 48.7]
        ]
    },
    legend: {
        right: '10%',
        top: 86,
        itemWidth: 16,
        itemHeight: 16,
        itemGap: 36,
        textStyle: {
          color: '#40E7F4',
          fontSize: 16
        }
      },
    calculable : true,
	grid: {
        left: '10%',
        right: '10%',
        bottom: '8%',
        top: '25%',
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
					opacity: 0.79
				}
			},
			splitLine: { //坐标轴在 grid 区域中的分隔线。
				show: false,
			},
			axisLabel: {
			    fontSize: 16
			}
        }
    ],
    yAxis : [
        {
            type : 'value',
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
			},
			axisLabel: {
                fontSize: 16,
                // verticalAlign: 'bottom',
            },
        }
    ],
    series : [
        {
            name: '',
            type:'bar',
            barWidth: '25%',
            seriesLayoutBy: 'row',
            itemStyle: {
                barBorderRadius: [30, 30, 0, 0],
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
            name: '',
            type:'bar',
            barWidth: '25%',
            seriesLayoutBy: 'row',
            itemStyle: {
                barBorderRadius: [30, 30, 0, 0],
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
