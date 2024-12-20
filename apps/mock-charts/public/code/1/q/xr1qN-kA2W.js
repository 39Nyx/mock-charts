var option = {
    color: ['#f3c567'],
    grid: {
        left: '8%',
        right: '10%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['白兔', '青蛙', '乌龟', '金鱼'],
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#7992ab',
                    fontSize: 12
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#7992ab'
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {show: false},//去除网格线
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#7992ab',
                    fontSize: '12px'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#7992ab'
                }
            }
        }
    ],
    series: [
        {
            name: '设备类型值',
            type: 'bar',
            stack: '数量',
            barWidth: '23%',
            itemStyle: {
                emphasis: {color: '#f3c567'}
            },
            data: [330, 75, 200, 124]
        },
        {
            name: '总量',
            type: 'bar',
            stack: '数量',
            itemStyle: {
                normal: {color: '#ccc'},
                emphasis: {color: '#ccc'}
            },
            data: [70, 325, 200, 276]
        }
    ]
};