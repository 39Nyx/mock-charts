app.title = '堆叠条形图';

option = {
    //主标题
    title: {
        text: '业务数量/个',
        textStyle: {
            color: ["#333333"],
            fontStyle: ["微软雅黑"],
            fontSize: ['14'],
        },
        left: 90,
        top: 30,
    },

    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        //计算平均值 
        formatter: function(params) {
            //取整
            var str = (params[0].value / params[1].value);
            str = str.toFixed(1);
            return params[0].name + '<br/>' + params[0].seriesName + ' : ' + params[0].value + '<br/>' + params[1].seriesName + ' : ' + params[1].value + '<br/>' +
                //业务占比
                params[3].seriesName + ' : ' + (str) * 0.5 + '%' + '<br/>' +
                //全部任务
                params[2].seriesName + ' : ' + (params[0].value + params[1].value);

        }
    },
    color: ['#22a0d3', '#a7d9ed'],
    legend: {
        data: ['土地', '房产']
    },

    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    grid: {
        backgroundColor: {
            color: ['#000000'],
        },
        width: '800px',
        height: '540px'
    },
    xAxis: [{
        type: 'value',
        show: true,
        //线的颜色
        axisLine: {
            lineStyle: {
                color: ['#f2f2f2'],
            },
        },
        boundaryGap: false,
        //分隔线颜色
        splitLine: {
            lineStyle: {
                color: ["#f2f2f2"]
            },
        },
        //字的颜色
        axisLabel: {
            textStyle: {
                color: ["#ffffff"],
            }
        },
        axisTick: {
            inside: {
                default: true,
            },
            show: false,
        },
    }],
    yAxis: [{
            //线的颜色
            axisLine: {
                lineStyle: {
                    color: ['#f2f2f2'],
                },
            },
            //字的颜色
            axisLabel: {
                textStyle: {
                    color: ["#333333"],
                }
            },
            //刻度的颜色
            axisTick: {
                lineStyle: {
                    color: ["#000000"],
                }
            },
            type: 'category',
            show: true,
            data: ['评估师1', '评估师2', '评估师3', '评估师4', '评估师5', '评估师6', '评估师7']
        }

    ],

    series: [{
        name: '房产',
        type: 'bar',
        stack: '总量',
        barWidth: 30,
        label:{
            normal:{
                formatter:function(d){
                    return d.value>0?d.value:"";
                }
            }
        },
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'insideRight'
                }
            }
        },
        data: [8, 10, 20, 20, 10, 10, 20]
    }, {
        name: '土地',
        type: 'bar',
        stack: '总量',
        label:{
            normal:{
                formatter:function(d){
                    return d.value>0?d.value:"";
                }
            }
        },
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'insideRight',
                }
            }
        },
        data: [0, 20, 10, 10, 20, 20, 30]
    }, {
        name: '全部任务',
        type: 'bar',
        stack: '总量',
        label:{
            normal:{
                formatter:function(d){
                    return d.value>0?d.value:"";
                }
            }
        },
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'insideRight',
                }
            }
        },
        data: []
    }, {
        name: '业务占比',
        type: 'bar',
        stack: '总量',
        label:{
            normal:{
                formatter:function(d){
                    return d.value>0?d.value:"";
                }
            }
        },
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'insideRight',

                }
            }
        },
        data: []
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);