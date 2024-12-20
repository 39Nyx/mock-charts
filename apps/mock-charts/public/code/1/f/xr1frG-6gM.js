option = {
    title: {
        text: '流量增大压力变化分析',
        left: '50%',
        textAlign: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#000'
            }
        },
        backgroundColor: 'rgba(255,255,255,1)',
        padding: [5,2],
        textStyle: {
            color: '#999999',
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
    },
    backgroundColor: '#ffffff',
    legend: {
        right: 10,
        orient: 'vertical',
        data: ['出口压力','进口压力']
    },
    xAxis: {
        type: 'category',
        data: ["2017-12-01","2017-12-02","2017-12-03","2017-12-04","2017-12-05","2017-12-06","2017-12-07","2017-12-08","2017-12-09","2017-12-10","2017-12-11","2017-12-12","2017-12-13","2017-12-14","2017-12-15","2017-12-16","2017-12-17","2017-12-18","2017-12-19","2017-12-20","2017-12-21","2017-12-22","2017-12-23","2017-12-24","2017-12-25","2017-12-26","2017-12-27","2017-12-28","2017-12-29","2017-12-30","2017-12-31"],
        boundaryGap: false,
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: ['#fff']
            }
        },
        axisTick: {
            lineStyle: {
                color: '#707070'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#707070'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12
            }
        }
    },
    yAxis: {
        type: 'value',
        
        splitLine: {
            lineStyle: {
                color: ['#f2f2f2']
            }
        },
 lineStyle: {
                color: '#707070'
            },
        axisLine: {
            lineStyle: {
                color: '#707070'
            }
        },
        axisLabel: {
            margin: 10,
            
            textStyle: {
                fontSize: 12
            }
        }
    },
    series: [{
        name: '今日',
        type: 'line',
        smooth: true,
        show:true,
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 6,
        data: ["2584210","3488395","3446670","2372069","2388200","2449144","2493639","2774681","3549176","3541622","2571683","2555353","2593066","2644456","2943874","3756723","3634948","2599308","2612824","2612044","2645947","3012402","3875237","3846838","2816796","2814792","2841176","2927091","3289902","4185449","4213794"],
        
        itemStyle: {
            normal: {
                color: '#f7b851'
            }
        },
        lineStyle: {
            normal: {
                width: 2
            }
        }
     }
   // , {
    //     name: '昨日',
    //     type: 'line',
    //     smooth: true,
    //     showSymbol: false,
    //     symbol: 'circle',
    //     symbolSize: 6,
    //     data: [105,125,148,152,149,152,150,150,150,150,150,150,150,150,150,150,155],
        
    //     itemStyle: {
    //         normal: {
    //             color: '#67aaf5'
    //         }
    //     },
    //     lineStyle: {
    //         normal: {
    //             width: 2
    //         }
    //     }
    // }
    ]
};