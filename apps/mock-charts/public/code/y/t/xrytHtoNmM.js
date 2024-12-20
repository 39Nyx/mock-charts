option_ox = {
    name:'血氧',
    backgroundColor: '#abe2cd',
    title: {
        text: '95次', //最近一次血氧
        subtext: '      血氧',
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
        min: 90, //最低为临近BMI线减3
        max: 100, //最高为临近BMI线加3或最高值加3
    }],
    series: [{
        name: '血氧',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        //        symbolSize: 2,
        showSymbol: true,
        //       color:'#ffffff',
        lineStyle: {
            normal: {
                width: 5,
                color: '#50cfa0',
                shadowBlur: 6,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffsetY: 8,
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(1, 1, 1, 0, [{
                    offset: 0,
                    color: 'rgba(105,210,170, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(105,210,170, 0.3)'
                }]),
            }
        },
        itemStyle: {
            normal: {
                color: '#50cfa0',
                borderColor: '#ffffff',
                borderWidth: 12,
            }
        },
        label: {
            normal: {
                show: true,
                position: 'top',
                color: '#ffffff',
                fontSize: 24
            }
        },
        markLine: {
            //95%为界,
            lineStyle: {
                normal: {
                    color: 'rgba(0,0,0,0.5)',
                },
            },
            data: [{
                name: '正常值',
                label: {
                    normal: {
                        formatter: '正常范围 95%',
                        position: 'middle',
                        fontSize: 24,
                    }
                },
                yAxis: 95,//95%为界

            }]
        },
        data: [96, 97, 97, 97, 96, 95]
    }, ]
};