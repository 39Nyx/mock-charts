option = {
    backgroundColor: '#fff',
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: '5%',
        left: '5%',
        right: '5%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        show: true,
        type: 'category',
        data: ['日调用', '周调用', '月调用'],
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            show: false,
        },
    },
    yAxis: {
        show: true,
        type: 'value',
        axisLine: {
            show: false,
            lineStyle: {
                color: '#c3c3c3',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#c3c3c3',
            }
        }
    },
    series: [{
        name: '平均响应时间',
        type: 'bar',
        barWidth: '20%',
        data: [10, 56, 150],
        itemStyle: {
            normal: {
                color: function(params) {
                    const colorList = [
                        '#6ecdfb',
                        '#07d7a6',
                        '#afa0fe'
                    ];
                    return colorList[params.dataIndex];
                },
            }
        }
    }, ]
};