op = {
    year: [2015, 2016, 2017, 2018],
    numArr: [1000, 900, 3800, 2500],
    moneyArr: [100000, 120000, 310000, 24000],
    maxN: 3900,
    maxM: 350000
}
option = {
    'color': '#384757',
    'tooltip': {
        'trigger': 'axis',
        'axisPointer': {
            'type': 'cross',
            'crossStyle': {
                'color': '#384757'
            }
        }
    },
    'legend': {
        left: 90,
        itemGap: 810,
        'data': [{
            'name': '数量',
            'textStyle': {
                'color': '#7d838b'
            }
        }, {
            'name': '金额',
            'textStyle': {
                'color': '#7d838b'
            }
        }],
        formatter: function(name) {
            return name === '数量' ? name + ': 个' : name + ': 万元'
        },
        'top': '10%',
        'textStyle': {
            'color': '#fff'
        }
    },
    'xAxis': [{
        'type': 'category',
        'data': op.year,
        axisLine: {
            lineStyle: {
                color: '#d7d7d7'
            }
        },
        axisTick: {
            alignWithLabel: true
        },
        'axisPointer': {
            'type': 'shadow'
        },
        'axisLabel': {
            'show': true,
            'textStyle': {
                'color': 'black'
            }
        }
    }],
    'yAxis': [{
            'type': 'value',
            'splitNumber': '4',
            'min': 0,
            'max': op.maxN,
            'interval': op.maxN / 4,
            axisTick: {
                show: false
            },
            'axisLabel': {
                'show': true,
                'textStyle': {
                    'color': 'black'
                }
            },
            'axisLine': {
                'show': false
            },
            'splitLine': {
                'lineStyle': {
                    'color': '#d7d7d7',
                    type: 'dashed'
                }
            }
        },
        {
            'type': 'value',
            'splitNumber': '4',
            'min': 0,
            'max': op.maxM,
            'interval': op.maxM / 4,
            axisTick: {
                show: false
            },
            'axisLabel': {
                'show': true,
                'textStyle': {
                    'color': 'black'
                }
            },
            'axisLine': {
                'show': false
            },
            'splitLine': {
                'lineStyle': {
                    'color': '#d7d7d7',
                    type: 'dashed'
                }
            }
        }
    ],
    'grid': {
        'top': '20%'
    },
    'series': [{
            'name': '数量',
            'type': 'bar',
            'data': op.numArr,
            'barWidth': '64',
            'itemStyle': {
                'normal': {
                    'color': {
                        'type': 'linear',
                        'x': 0,
                        'y': 0,
                        'x2': 0,
                        'y2': 1,
                        'colorStops': [{
                                'offset': 0,
                                'color': '#76D9E8'
                            },
                            {
                                'offset': 1,
                                'color': '#33B7CA'
                            }
                        ],
                        'globalCoord': false
                    }
                }
            }
        },
        {
            'name': '金额',
            'type': 'line',
            'yAxisIndex': 1,
            'data': op.moneyArr,
            'itemStyle': {
                'normal': {
                    'color': '#F96E3E'
                }
            },
            'smooth': true,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(249,110,62,0.5)'
                    }, {
                        offset: 1,
                        color: 'rgba(255,255,255,0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            }
        }
    ]
};