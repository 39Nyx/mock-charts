option = {
    backgroundColor: '#444',
    dataZoom: {
        type: 'inside',
        startValue: 0,
        endValue: 5,
        zoomLock: true, //禁止缩放
        moveOnMouseMove: false,
        preventDefaultMouseMove: true,
        zoomOnMouseWheel: false
    },
    grid: {
        left: 0,
        right: 20,
        bottom: 25,
        top: 30,
    },
    tooltip: {
        trigger: 'axis',
        triggerOn: 'click',
        confine: true,
        paddingLeft: 10,
        paddingRight: 20,
        backgroundColor: '#FFFFFF', //提示框背景颜色
        textStyle: {
            fontSize: 10,
            color: '#666666',
            fontWeight: '500'
        },
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: '#23d2cc',
                width: 0.5,
                type: 'solid'
            },
        },
        formatter: "{b} <br/>{c}  "
    },

    toolbox: {
        show: false,
        feature: {
            mark: {
                show: false
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar', 'stack', 'tiled']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ["09-04", "09-05", "09-06", "09-07", "09-08", "09-09", "09-10", "09-11", "09-12", "09-13", "09-14", "09-14", ""],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            formatter: function (p) {
                if (p === '09-09') {
                    return '{b|' + p + '}';
                }
                else {
                    return '{a|' + p + '}';
                }
            },
            show: true,
            interval: 'auto', //坐标显示间隔
            textStyle: {
                color: '#666666',
                fontSize: 10,

            },
            align: 'left',
            rich: {
                a: {
                    padding: [2, 10],
                },
                b: {
                    padding: [2, -40],
                    position: 'left'
                }
            }
        }
    }, ],

    yAxis: [{
        type: 'value',
        show: true,
        max: 564,
        splitLine: { //分割线条样式
            show: true,
            lineStyle: {
                color: '#f6f7fb',
                type: 'dashed',
                width: 1,
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false,
        }

    }],
    series: [{
        name: '',
        type: 'line',
        smooth: true,
        symbol: 'emptyCircle',
        showSymbol: false,
        symbolSize: 3,
        stack: '总量',
        data: [434, 234, 123, 445, 433, 234, 455, 343, 564, 111, 222, 23],
        areaStyle: { //填充区颜色
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{ //填充区渐变色
                        offset: 0,
                        color: '#f898b3'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255, 0)'
                    }]
                }
            }
        },
        itemStyle: {
            normal: {
                //折线点颜色
                color: '#FA4577',
            },
        },
        lineStyle: {
            normal: {
                //曲线条颜色
                color: '#FA4577',
                width: 1,
                type: 'solid'
            }
        }
    }]
}