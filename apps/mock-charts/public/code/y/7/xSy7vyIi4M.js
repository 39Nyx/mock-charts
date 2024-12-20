option = {
    toolbox:{
        show:'true',
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    backgroundColor: 'rgba(0,0,0,0)',
    title: {
        text: '请求数',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3'
        },
        left: '6%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['移动', '电信', '联通'],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#292f39'
        }
    },
    grid: {
        left: '10%',
        right: '4%',
        bottom: '3%',
   
          "containLabel": false,
        width: 1088,
        height: 354,
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#c5deff'
            }
        },
         splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: ['#5ca0fa']
            }
        },
        data: ["2017-12-01","2017-12-02","2017-12-03","2017-12-04","2017-12-05","2017-12-06","2017-12-07","2017-12-08","2017-12-09","2017-12-10","2017-12-11","2017-12-12","2017-12-13","2017-12-14","2017-12-15","2017-12-16","2017-12-17","2017-12-18","2017-12-19","2017-12-20","2017-12-21","2017-12-22","2017-12-23","2017-12-24","2017-12-25","2017-12-26","2017-12-27","2017-12-28","2017-12-29","2017-12-30","2017-12-31"]
    }],
    yAxis: [{
        type: 'value',
        name: '单位（%）',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#c5deff '
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12
            }
        },
        splitLine: {
            lineStyle: {
                color: '#5ca0fa'
            }
        }
    }],
    series: [{
        name: '移动',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(247,184,81, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(247,184,81, 0.3)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
       itemStyle: {
                normal: {
                    
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(247,184,81,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(247,184,81,1)'
                    }])
                },
                emphasis: {
                color: 'rgb(0,196,132)',
                borderColor: 'rgba(0,196,132,0.2)',
                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                borderWidth: 10
            }
            },
        data: ["2584210","3488395","3446670","2372069","2388200","2449144","2493639","2774681","3549176","3541622","2571683","2555353","2593066","2644456","2943874","3756723","3634948","2599308","2612824","2612044","2645947","3012402","3875237","3846838","2816796","2814792","2841176","2927091","3289902","4185449","4213794"]
    }]
};