data = [
    [23.9627, 26.4315, 29.917, 27.5934, 26.8672],
    [18.1535, 18.5892, 13.9419, 22.9461, 23.9627],
    [8.7137, 10.4564, 10.166, 6.2448, 4.6473],
    [11.1826, 16.8465, 22.6556, 22.3651, 28.9004],
    [23.527, 15.249, 13.5062, 12.0539, 8.1328],
    [13.361, 11.3278, 9.4398, 7.9876, 6.5353],
]

colors = ["#4C72B0", "#55A868", "#C44E52", "#8172B2", "#CCB974", "#64B5CD"],
    deemph_color = 'rgb(165,165,165)'

option = {
    title: [{
        text: '三星在2011-2012年间，成功成为智能手机市场领跑者',
        textStyle: {
            fontSize: 25,
        },
        left: -2,
        subtext: '苹果被成功阻击，诺基亚、HTC等持续下跌',
        subtextStyle: {
            color: 'rgb(10,10,10)',
            fontSize: 18,
        },
    }, {
        text: '市场份额',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 12
        },
        top: 70
    }, {
        text: '来源：IDC',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 11
        },
        bottom: 15
    }],
    grid: {
        right: '20%',
        top: 100,
        left: 40
    },
    legend: {
        show: false,
        data: [{
            name: 'Apple',
            icon: 'rect'
        }, {
            name: 'Samsung',
            icon: 'rect'
        }, {
            name: 'Nokia',
            icon: 'rect'
        }, {
            name: 'HTC',
            icon: 'rect'
        }, ]
    },
    tooltip: {
        trigger: 'axis',
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1Q11 ', '2Q11', '3Q11', '4Q11', '1Q12']
    },
    yAxis: {
        // name: '市场份额 （%）',
        // nameLocation: 'middle',
        // nameGap: 30,
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            formatter: '{value}%',
        }
    },
    series: [{
        name: 'Apple',
        data: ['-', '-', '-', '-', 23.9627],
        itemStyle: {
            normal: {
                color: colors[0]
            }

        },
        label: {
            normal: {
                show: true,
                position: [20, 0],
                formatter: '{a}',
                textStyle: {
                    fontSize: 20,
                },
            }
        },
        type: 'scatter'
    }, {
        data: ['-', '-', '-', '-', 4.6473],
        itemStyle: {
            normal: {
                color: deemph_color
            }

        },
        label: {
            normal: {
                show: true,
                position: [20, 0],
                formatter: 'HTC',
                textStyle: {
                    fontSize: 20,
                },
            }
        },
        type: 'scatter'
    }, {
        data: ['-', '-', '-', '-', 28.9004],
        itemStyle: {
            normal: {
                color: colors[1]
            }

        },
        label: {
            normal: {
                show: true,
                position: [20, 0],
                formatter: 'Samsung',
                textStyle: {
                    fontSize: 20,
                },
            }
        },
        type: 'scatter'
    }, {
        data: ['-', '-', '-', '-', 8.1328],
        itemStyle: {
            normal: {
                color: deemph_color
            }

        },
        label: {
            normal: {
                show: true,
                position: [20, 0],
                formatter: 'Nokia',
                textStyle: {
                    fontSize: 20,
                },
            }
        },
        type: 'scatter'
    }, {
        data: ['-', '-', '-', '-', 6.5353],
        itemStyle: {
            normal: {
                color: deemph_color
            }

        },
        label: {
            normal: {
                show: true,
                position: [20, 0],
                formatter: 'RIM',
                textStyle: {
                    fontSize: 20,
                },
            }
        },
        type: 'scatter'
    }, {
        name: 'Apple',
        type: 'line',
        data: data[1],
        symbol: 'none',
        lineStyle: {
            normal: {
                width: 3,
                color: colors[0],
            }
        }
    }, {
        name: 'HTC',
        type: 'line',
        data: data[2],
        symbol: 'none',
        itemStyle: {
            normal: {
                color: deemph_color
            }
        },
        lineStyle: {
            normal: {
                width: 3,
            }
        }
    }, {
        name: 'Samsung',
        type: 'line',
        data: data[3],
        symbol: 'none',
        lineStyle: {
            normal: {
                width: 3,
                color: colors[1],
            }
        }
    }, {
        name: 'Nokia',
        type: 'line',
        data: data[4],
        symbol: 'none',
        itemStyle: {
            normal: {
                color: deemph_color
            }
        },
        lineStyle: {
            normal: {
                width: 3,
            }
        }
    }, {
        name: 'RIM',
        type: 'line',
        data: data[5],
        symbol: 'none',
        itemStyle: {
            normal: {
                color: deemph_color
            }
        },
        lineStyle: {
            normal: {
                width: 3,
            }
        }
    }]
};