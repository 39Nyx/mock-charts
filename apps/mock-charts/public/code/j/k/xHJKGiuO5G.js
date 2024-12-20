var colors = ['#52dee7', '#eac688'];

var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i + '月');
    }
    return data;
}();

//投诉举报数
var data1 = [761, 863, 745, 765, 641, 653, 634, 666, 519, 542, 522, 497];
//不受理投诉举报数
var data3 = [70, 60, 26, 44, 51, 31, 25, 19, 14, 21, 51, 41];

option         = {
backgroundColor:'#FFFFFF',
title          : {
text           : '',
left           : '1%',
top            : '0%'
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            textStyle: {
                color: "#fff"
            }
        },
    },
    grid: {
        top: 100,
        left: '20%',
        right:'30%',
        bottom: '55%'
    },
    legend: {
        width: '',
        left: '20%',
        top: 35,
        data: ['投诉举报受理数', '投诉举报不予受理数']
    },
    xAxis: {
        splitLine: {
            show: false
        },
        name: '      时间',
        type: 'category',
        axisLabel: {
            interval: 0
        },"axisLabel": {
            interval: {default: 0},
            rotate:50,
            formatter : function(params){
               var newParamsName = "";// 最终拼接成的字符串
                var paramsNameNumber = params.length;// 实际标签的个数
                var provideNumber = 4;// 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                /**
                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                 */
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                    /** 循环每一行,p表示行 */
                    var tempStr = "";
                    tempStr=params.substring(0,4);
                    newParamsName = tempStr+"...";// 最终拼成的字符串
                } else {
                    // 将旧标签的值赋给新标签
                    newParamsName = params;
                }
                //将最终的字符串返回
                return newParamsName
            }

        },
        data: xData
        /*splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }*/
    },
    yAxis: [{
            type: 'value',
            name: '',
            min: 0,
            max: 1000,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: '#000'
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        }
    ],
    series: [{
        name: '投诉举报受理数',
        color: colors[0],
        type: 'bar',
        barWidth: "35%",
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#56ADF1'
                }, {
                    offset: 1,
                    color: '#99D9EA'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        data: data1
    }, {
        name: '投诉举报不予受理数',
        color: colors[1],
        type: 'bar',
        barWidth: "35%",
        itemStyle: {
            normal: {
                // lineStyle: {
                //     width: 3, //折线宽度
                // },
            }
        },
        data: data3
    },  {
                name: '不予受理率',
                type: 'pie',
                radius: ['9%', '12%'],
                color: ['#ff0000', '#00EE76'],
                center: ['65%', '15%'],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: data3[0],
                    name: '投诉举报不予受理数',
                    label: {
                        normal: {
                            formatter: '{d} %',
                            textStyle: {
                                fontSize: 12
                            }
                        }
                    }
                }, {
                    value: data1[0] - data3[0],
                    name: '投诉举报受理数',
                    label: {
                        normal: {
                            formatter: '\不予受理率',
                            textStyle: {
                                color: '#555',
                                fontSize: 10
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#e9e9e9'
                        },
                        emphasis: {
                            color: '#e9e9e9'
                        }
                    },
                }]
            }]
};



myChart.on('mouseover', function(params) {
    if (params.componentType === 'series' && params.seriesType === 'bar') {
        dataIndex = params.dataIndex;
        myChart.setOption({
            series: [{
                name: '投诉举报受理数',
                color: colors[0],
                type: 'bar',
                barWidth: "35%",
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#56ADF1'
                        }, {
                            offset: 1,
                            color: '#99D9EA'
                        }]),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                data: data1
            }, {
                name: '投诉举报不予受理数',
                color: colors[1],
                type: 'bar',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 3, //折线宽度
                        },
                    }
                },
                data: data3
            }, {
                name: '不予受理率',
                type: 'pie',
                radius: ['9%', '12%'],
                color: ['#ff0000', '#00EE76'],
                center: ['65%', '15%'],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: data3[dataIndex],
                    name: '投诉举报不予受理数',
                    label: {
                        normal: {
                            formatter: '{d} %',
                            textStyle: {
                                fontSize: 12
                            }
                        }
                    }
                }, {
                    value: data1[dataIndex] - data3[dataIndex],
                    name: '投诉举报受理数',
                    label: {
                        normal: {
                            formatter: '\不予受理率',
                            textStyle: {
                                color: '#555',
                                fontSize: 10
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#E9E9E9'
                        },
                        emphasis: {
                            color: '#E9E9E9'
                        }
                    },
                }]
            }]
        })
    }
});