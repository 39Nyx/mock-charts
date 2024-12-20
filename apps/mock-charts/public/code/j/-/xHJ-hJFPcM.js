var data1=[29,31,31,25,29,26,33,34,34,28,34,32];
var data2= [10,5,15,6,6,6,7,13,14,5,6,11];
option = {
    backgroundColor: '#ffffff',
    title:{
        left:'left'
    },
    legend: {
        top:'12%',
        left: '35%',
        textStyle: {
            color: '#000000',
        },
        data: ['检查主体数','违法违规主体数']
    },
    grid: {
        left: '25%',
        right: '30%',
        top:'20%',
         bottom: '50%',
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    yAxis: {
        type: 'value',
        max:40,
        axisTick: {
            show: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#000',
            }
        },
        splitLine: {
            show: true
        },
    },
    xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },"axisLabel": {
            "interval": 0,
            rotate:40,
            textStyle: {
                fontSize: 10
            },formatter : function(params){
               var newParamsName = "";// 最终拼接成的字符串
                var paramsNameNumber = params.length;// 实际标签的个数
                var provideNumber = 5;// 每行能显示的字的个数
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
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#000000',
                }
            },data: ['1月', '2月', '3月', '4月','5月', '6月','7月', '8月','9月', '10月','11月', '12月']


        }

    ],
    
    series: [{
            name: '检查主体数',
            type: 'bar',
            barWidth : 15,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#91b6c2',
                    barBorderRadius: 10,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            //var colors = ['#91b6c2', '#81d0d7']，
            barGap: '0%',
            barCategoryGap: '50%',
            data:data1
        },{
            name: '违法违规主体数',
            type: 'bar',
            barWidth : 15,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#81d0d7',
                    barBorderRadius: 10,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: data2
        },
        {
            name: '违法违规率',
            type: 'pie',
            radius: ['8%', '10%'],
            color: ['#FF4500'],
            center: ['70%', '20%'],
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
                value: data2[0],
                name: '违法违规主体数',

                label: {
                    normal: {
                        formatter: '{d} %',
                        textStyle: {
                            fontSize: 12
                        }
                    }
                }
            }, {
                value: data1[0] - data2[0],
                name: '未违法违规主体数',

                label: {
                    normal: {
                        formatter: '\违法违规率',
                        textStyle: {
                            color: '#555',
                            fontSize: 10
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#E6E6E6'
                    },
                    emphasis: {
                        color: '#E6E6E6'
                    }
                },
            }]
        }]
};
myChart.on('mouseover', function(params) {
    if (params.componentType === 'series' && params.seriesType === 'bar') {
        var dataIndex = params.dataIndex;
        myChart.setOption({
            series: [{
            name: '检查主体数',
            type: 'bar',
            barWidth : 15,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#91b6c2',
                    barBorderRadius: 10,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            //var colors = ['#91b6c2', '#81d0d7']，
            barGap: '0%',
            barCategoryGap: '50%',
            data:data1
        },{
            name: '违法违规主体数',
            type: 'bar',
            barWidth : 15,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#81d0d7',
                    barBorderRadius: 10,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: data2
        },
        {
            name: '违法违规率',
            type: 'pie',
            radius: ['8%', '10%'],
            color: ['#FF4500'],
            center: ['70%', '20%'],
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
                value: data2[dataIndex],
                name: '违法违规主体数',

                label: {
                    normal: {
                        formatter: '{d} %',
                        textStyle: {
                            fontSize: 12
                        }
                    }
                }
            }, {
                value: data1[dataIndex] - data2[dataIndex],
                name: '未违法违规主体数',

                label: {
                    normal: {
                        formatter: '\违法违规率',
                        textStyle: {
                            color: '#555',
                            fontSize: 6
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#E6E6E6'
                    },
                    emphasis: {
                        color: '#E6E6E6'
                    }
                },
            }]
        }]
        })
    }
});