option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        data: ['0~2h', '2~4h', '4~8h', '>8h'],
        axisTick: {
            show: false,
            alignWithLabel: true
        }
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80],
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}',
                textStyle: {
                    //color: 'blue'
                }
            }
        },
        itemStyle: {
            normal: {
                // 定制显示（按顺序）
                color: function(params) {
                    var colorList = [
                        ['rgba(122,141,250, 0.1', 'rgba(122,141,250, 1'],
                        ['rgba(237,205,97, 0.1)', 'rgba(237,205,97, 1)'],
                        ['rgba(235,148,66, 0.1)', 'rgba(235,148,66, 1)'],
                        ['rgba(235,76,37, 0.1)', 'rgba(235,76,37, 1)']
                    ];
                    var index = params.dataIndex;
                    if (params.dataIndex >= colorList.length) {
                        index = params.dataIndex - colorList.length;
                    }
                    return new echarts.graphic.LinearGradient(0, 0, 0, 1, 　　　　　　　　　　　　　 [　　　　　　　　　　　　　　{
                        offset: 0,
                        color: colorList[index][0]
                    }, 　　　　　　　　　　　　　　 {
                        offset: 1,
                        color: colorList[index][1]
                    }　　　　　　　　　　　　　])
                },

                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        }

    }]
};