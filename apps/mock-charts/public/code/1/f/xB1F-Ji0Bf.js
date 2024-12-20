option = {
    tooltip: {},
    xAxis: {
        data: ["企业", "农专", "个体"],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false,
            textStyle: {
                color: '#e54035'
            }
        }
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [{
        name: '年报上报率1',
        type: 'pictorialBar',
        symbol: 'path://M47.5,58.5h-25h-12c6.6,0,12-5.4,12-12v-35h25v35c0,6.6,5.4,12,12,12H47.5z',
        barWidth: 100,
        symbolClip: true,
          silent: true,
        symbolBoundingData:100,
        animationDuration: 0,
        z: 10,
        itemStyle: {
            normal: {
                color: 'yellow'
            }
        },
        data: [95, 12, 34]
    },{
        name: '年报上报率',
        type: 'pictorialBar',
        symbol: 'path://M47.5,58.5h-25h-12c6.6,0,12-5.4,12-12v-35h25v35c0,6.6,5.4,12,12,12H47.5z',
        barWidth: 100,
        symbolClip: true,
        symbolBoundingData:100,
        z: 10,
        label: {
            normal: {
                show: true,
                position: ["100%", "100%"],
                //offset: [0, 20],
                formatter: '{b}\n' + '{c}%',
                textStyle: {
                    fontSize: 18,
                    fontFamily: 'Arial'
                }
            }
        },
        data: [85, 30, 10]
    }, {
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#ddd'
            }
        },
        silent: true,
        barWidth: 50,
        barGap: '-100%', // Make series be overlap
        data: [100, 100, 100]
    }]
};