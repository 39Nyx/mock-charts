option = {
    name:'心率',
    backgroundColor: '#ffc3a5',
    title: {
        text: '88次', //最近一次体重
        subtext: '      心率',
        textStyle: {
            fontWeight: 'bolder',
            fontSize: 48,
            color: '#FFFFFF',
        },
        subtextStyle: {
            fontWeight: 'bolder',
            fontSize: 24,
            color: '#fa8d55',
        },
        right: '5%',
        top: '5%'
    },
    grid: {
        left: '1%',
        right: '5%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['9.23', '10.3', '10.11', '10.15', '10.26', '12.26'],
        axisLabel: {
            show: true,
			interval:0,
            fontSize: 20,
            color: '#ffffff',
            fontWeight: 'bold'

        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        show: false,
        min: 80, //最低为最低减5
        max: 92, //最高为最高值加5
    }],
    series: [{
        name: '心率',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        //        symbolSize: 2,
        showSymbol: true,
        //       color:'#ffffff',
        lineStyle: {
            normal: {
                width: 5,
                color: '#fa8d55',
                shadowBlur: 6,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffsetY: 8,
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(1, 1, 1, 0, [{
                    offset: 0,
                    color: 'rgba(251,153,102, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(251,153,102, 0.3)'
                }]),
            }
        },
        itemStyle: {
            normal: {
                color: '#fa8d55',
                borderColor: '#ffffff',
                borderWidth: 12,
            }
        },
        label: {
            normal: {
                show: true,
                position: 'top',
                color: '#ffffff',
                fontSize: 24,
            }
        },
        markLine: {
            lineStyle: {
                normal: {
                    color: 'rgba(0,0,0,0.3)',
                },
            },
            data: [{
                name: '最高',
                label: {
                    normal: {
                        formatter: '正常心率 100次/分',
                        position: 'middle',
                        fontSize:18,
                    }
                },
                yAxis: 100,//高100为界
            },
           {
                name: '最低',
                label: {
                    normal: {
                        formatter: '正常心率 60次/分',
                        position: 'middle',
                        fontSize:18,
                    }
                },
                yAxis: 60,//高100为界

            }]
        },
        data: [86, 87, 87, 87, 86, 85]
    }, ]
};