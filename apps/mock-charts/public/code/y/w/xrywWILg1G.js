var color = "#189cbb";
//'rgba(80,224,255,0.3)'
var xAxisData = ['0','15%', '20%', '20%-35%', '35%-45%', '45%-65%', '100%'];
var seriesData = [85, 70, 60, 45, 20, 25,15];
var scale = 1;
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#185164'
            }
        }
    },
    backgroundColor: '#031f2d',
    color: ['#766c2e'],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            showMinLabel:false,
            textStyle: {
                color: color,
                fontSize: 13*scale,
            }
        },
        axisTick: {
            inside:true,
            lineStyle: {
                color: color,
            }
        },
        axisLine: {
            lineStyle: {
                color: color,
            }
        },
        splitLine: {
            lineStyle: {
                color: color,
                type: 'dashed',
            }
        },
        name: '时长排名(%)',
        nameTextStyle: {
            color: color,
            fontSize: 13*scale,
            padding: [0, 0, 50, -100]
        },
        data: xAxisData
    },
    yAxis: {
        type: 'value',
        max:100,
        axisLabel: {
            textStyle: {
                color: color,
                fontSize: 13*scale,
            }
        },
        axisTick: {
            lineStyle: {
                color: color,
            }
        },
        axisLine: {
            lineStyle: {
                color: color,
            }
        },
        splitLine: {
            lineStyle: {
                color: color,
                type: 'dashed',
            },
            show: false
        },
        name: '通过率(%)',
        nameTextStyle: {
            color: color,
            fontSize: 13*scale,
            padding: [0, 0, 15, 0]
        },
    },
    series: [{
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        smooth: true, //这句就是让曲线变平滑的
        data: seriesData,
        symbol: 'circle', //拐点样式
        symbolSize: 10*scale, //拐点大小
        areaStyle: {
            normal: {}
        },
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(232,183,43,0.6)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(232,183,43,0.6)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                }
            }
        }
    }, ]
};