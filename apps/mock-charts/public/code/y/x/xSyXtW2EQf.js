option = {
    name:'BMI',
    backgroundColor: '#aec4fa',
    title: {
        text: '25', //最近一次体重
        subtext: 'BMI',
        textStyle: {
            fontWeight: 'bolder',
            fontSize: 48,
            color: '#FFFFFF',
        },
        subtextStyle: {
            fontWeight: 'bolder',
            fontSize: 24,
            color: '#6b94ff',
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
        min: 27.7, //最低为临近BMI线减0.3
        max: 29, //最高为临近BMI线加0.3或最高值加0.5
    }],
    series: [{
        name: 'BMI',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        showSymbol: true,
        lineStyle: {
            normal: {
                width: 5,
                color: '#6b94ff',
                shadowBlur: 6,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffsetY: 8,
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(1, 1, 1, 0, [{
                    offset: 0,
                    color: 'rgba(133,165,250, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(133,165,250, 0.3)'
                }]),
            }
        },
        itemStyle: {
            normal: {
                color: '#6b94ff',
                borderColor: '#ffffff',
                borderWidth: 12,
            }
        },
        label: {
            normal: {
                show: true,
                position: 'top',
                color: '#ffffff',
                fontSize: 20
            }
        },
        markLine: {
            //体质指数（BMI）=体重（kg）÷身高^2（m）
            //BMI指数过轻：低于18.5
            //正常：18.5-23.9
            //过重：24-27
            //肥胖：28-32
            //非常肥胖, 高于32
            lineStyle: {
                normal: {
                    color: 'rgba(0,0,0,0.5)',
                },
            },
            data: [{
                name: '超胖32',
                label: {
                    normal: {
                        formatter: '超胖 BMI:32',
                        position: 'middle',
                fontSize: 24
                    }
                },
                yAxis: 32,//体质指数（BMI32））
            }, {
                name: '肥胖28',
                label: {
                    normal: {
                        formatter: '肥胖 BMI:28',
                        position: 'middle',
                fontSize: 24
                    }
                },
                yAxis: 28,//体质指数（BMI）28
            }, {
                name: '过重24',
                label: {
                    normal: {
                        formatter: '过重 BMI:24',
                        position: 'middle',
                fontSize: 24
                    }
                },
                yAxis: 24,//体质指数（BMI）24
            }, {
                name: '正常18.5',
                label: {
                    normal: {
                        formatter: '正常 BMI:18.5',
                        position: 'middle',
                fontSize: 24
                    }
                },
                yAxis: 18.5,//体质指数（BMI）18.5
            }]
        },
        data: [28, 28.3, 28, 28.3, 28, 27.9]
    }, ]
};