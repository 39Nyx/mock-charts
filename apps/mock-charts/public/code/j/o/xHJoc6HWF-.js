var colors = {
    chrome: '#4aae48',
    safari: '#fe524f',
    ie: '#29b6f6',
    firefox: '#faa800',
    iphone: '#ff7196',
    note: '#6e71e2',
    hongmi: '#be6feb'
};
var borderWidth = 1;

option = {
    color: ['transparent'],
    title: [{
        text: 'ECharts 水球图性能测试'
    }, {
        text: 'Mac',
        left: '17.5%',
        bottom: 0
    }, {
        text: 'Windows',
        left: '47.5%',
        textStyle: {
            align: 'left'
        },
        bottom: 0
    }, {
        text: '手机',
        left: '81%',
        bottom: 0
    }],
    xAxis: [{
        data: [1, 2, 4, 8, 16],
        axisLine: {
            lineStyle: {
                color: '#888'
            }
        }
    }, {
        data: [1, 2, 4, 8, 16],
        name: '数据量',
        nameLocation: 'middle',
        nameGap: 20,
        axisLine: {
            lineStyle: {
                color: '#888'
            }
        },
        gridIndex: 1
    }, {
        data: [1, 2, 4, 8, 16],
        axisLine: {
            lineStyle: {
                color: '#888'
            }
        },
        gridIndex: 2
    }],
    yAxis: [{
        type: 'value',
        name: 'FPS',
        nameLocation: 'middle',
        nameGap: 25,
        axisLine: {
            lineStyle: {
                color: '#888'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#DDD'
            }
        }
    }, {
        type: 'value',
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#DDD'
            }
        },
        gridIndex: 1
    }, {
        type: 'value',
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#DDD'
            }
        },
        gridIndex: 2
    }],
    legend: {
        data: [{
                name: 'SVG',
                icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAArCAYAAAApMZsWAAAAAXNSR0IArs4c6QAAAJxJREFUaAXt2LERgDAMQ1HCsf9EnskrkDt6F+ok8mnjQtZLGlZ3v9cB333Ajt+KLPo3aUQRDW2AqxsKN8ZGdKwm9ADRULgxNqJjNaEHiIbCjbERHasJPXiqKjS6Fpurq/XlP42ov5GWcPFfVyvMfpo3ak8kBkRULMx+HFF7IjEgomJh9uOI2hOJAREVC7MfR9SeSAyIqFiY/fgxohuE0wod+Qqa1gAAAABJRU5ErkJggg=='
            },
            {
                name: 'Canvas',
                icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAArCAYAAAApMZsWAAAAAXNSR0IArs4c6QAAAKtJREFUaAXt2MENwyAUBFEcpRto3P1AG7SQSLl/7dGaML6yipZ9zsXX3vvTDnheB9zxd0Uv+m/SiioKXcBXFwpX1la0nAZ6oCgUrqytaDkN9EBRKFxZW9FyGujB+77vWL333sYYMTfnbGutmHvi93x1IwssoCgMLNa9/K4bN2IF/I+yvHJbRfNGrISiLK/cVtG8ESuhKMsrt1U0b8RKKMryym0VzRuxEseIfgEC/Rbpc7JxoAAAAABJRU5ErkJggg=='
            },
            'Chrome',
            'Safari',
            'Firefox',
            'IE',
            'iPhone',
            'Note3',
            '红米'
        ],
    },
    tooltip: {
        show: true
    },
    grid: [{
        left: '5%',
        top: 40,
        width: '30%'
    }, {
        left: '36%',
        top: 40,
        width: '30%'
    }, {
        left: '67%',
        top: 40,
        width: '30%'
    }],
    series: [{
        // For legend only
        name: 'Canvas',
        type: 'scatter',
        data: []
    }, {
        // For legend only
        name: 'SVG',
        type: 'scatter',
        data: []
    }, {
        name: 'Chrome',
        type: 'line',
        data: [46, 38, 26, 15, 8],
        itemStyle: {
            normal: {
                color: colors.chrome,
                borderWidth: borderWidth,
                borderColor: colors.chrome
            }
        },
        lineStyle: {
            normal: {
                type: 'dashed'
            }
        }
    }, {
        name: 'Chrome',
        type: 'line',
        data: [60, 59, 57, 36, 26],
        itemStyle: {
            normal: {
                color: colors.chrome
            }
        }
    }, {
        name: 'Safari',
        type: 'line',
        data: [37, 33, 24, 16, 9],
        itemStyle: {
            normal: {
                color: colors.safari,
                borderWidth: borderWidth,
                borderColor: colors.safari
            }
        },
        lineStyle: {
            normal: {
                type: 'dashed'
            }
        }
    }, {
        name: 'Safari',
        type: 'line',
        data: [55, 51, 33, 21, 12],
        itemStyle: {
            normal: {
                color: colors.safari
            }
        }
    }, {
        name: 'Firefox',
        type: 'line',
        data: [29, 23, 16, 8, 6],
        itemStyle: {
            normal: {
                color: colors.firefox,
                borderWidth: borderWidth,
                borderColor: colors.firefox
            }
        }
    }, {
        name: 'Firefox',
        type: 'line',
        data: [32, 22, 15, 9, 5],
        itemStyle: {
            normal: {
                color: colors.firefox
            }
        },
        lineStyle: {
            normal: {
                type: 'dashed'
            }
        }
        
        
        
    }, {
        name: 'Chrome',
        xAxisIndex: 1,
        yAxisIndex: 1,
        type: 'line',
        data: [58, 60, 60, 60, 45],
        itemStyle: {
            normal: {
                color: colors.chrome,
                borderWidth: borderWidth,
                borderColor: colors.chrome
            }
        },
        lineStyle: {
            normal: {
                type: 'dashed'
            }
        }
    }, {
        name: 'Chrome',
        xAxisIndex: 1,
        yAxisIndex: 1,
        type: 'line',
        data: [60, 60, 60, 56, 36],
        itemStyle: {
            normal: {
                color: colors.chrome
            }
        }
    }, {
        name: 'Firefox',
        xAxisIndex: 1,
        yAxisIndex: 1,
        type: 'line',
        data: [58, 60, 59, 51, 30],
        itemStyle: {
            normal: {
                color: colors.firefox,
                borderWidth: borderWidth,
                borderColor: colors.firefox
            }
        },
        lineStyle: {
            normal: {
                type: 'dashed'
            }
        }
    }, {
        name: 'Firefox',
        xAxisIndex: 1,
        yAxisIndex: 1,
        type: 'line',
        data: [60, 60, 59, 44, 24],
        itemStyle: {
            normal: {
                color: colors.firefox
            }
        }
    }, {
        name: 'IE',
        xAxisIndex: 1,
        yAxisIndex: 1,
        type: 'line',
        data: [60, 60, 60, 55, 30],
        itemStyle: {
            normal: {
                color: colors.ie,
                borderWidth: borderWidth,
                borderColor: colors.ie
            }
        },
        lineStyle: {
            normal: {
                type: 'dashed'
            }
        }
    }, {
        name: 'IE',
        xAxisIndex: 1,
        yAxisIndex: 1,
        type: 'line',
        data: [60, 38, 22, 12, 6],
        itemStyle: {
            normal: {
                color: colors.ie
            }
        }
    },
        
        
        
    {
        name: 'iPhone',
        xAxisIndex: 2,
        yAxisIndex: 2,
        type: 'line',
        data: [53, 59, 43, 26, 14],
        itemStyle: {
            normal: {
                color: colors.iphone,
                borderWidth: borderWidth,
                borderColor: colors.iphone
            }
        },
        lineStyle: {
            normal: {
                type: 'dashed'
            }
        }
    }, {
        name: 'iPhone',
        xAxisIndex: 2,
        yAxisIndex: 2,
        type: 'line',
        data: [59, 60, 60, 48, 32],
        itemStyle: {
            normal: {
                color: colors.iphone
            }
        }
    }, {
        name: 'Note3',
        xAxisIndex: 2,
        yAxisIndex: 2,
        type: 'line',
        data: [10, 6, 3, 2, 1],
        itemStyle: {
            normal: {
                color: colors.note,
                borderWidth: borderWidth,
                borderColor: colors.note
            }
        },
        lineStyle: {
            normal: {
                type: 'dashed'
            }
        }
    }, {
        name: 'Note3',
        xAxisIndex: 2,
        yAxisIndex: 2,
        type: 'line',
        data: [58, 58, 58, 57, 57],
        itemStyle: {
            normal: {
                color: colors.note
            }
        }
    }, {
        name: '红米',
        xAxisIndex: 2,
        yAxisIndex: 2,
        type: 'line',
        data: [1, 2, 2, 1, 1],
        itemStyle: {
            normal: {
                color: colors.hongmi,
                borderWidth: borderWidth,
                borderColor: colors.hongmi
            }
        },
        lineStyle: {
            normal: {
                type: 'dashed'
            }
        }
    }, {
        name: '红米',
        xAxisIndex: 2,
        yAxisIndex: 2,
        type: 'line',
        data: [44, 46, 51, 48, 20],
        itemStyle: {
            normal: {
                color: colors.hongmi
            }
        }
    }]
};