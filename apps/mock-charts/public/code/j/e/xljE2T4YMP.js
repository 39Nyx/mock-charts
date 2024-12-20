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
        name: '调用成功率统计',
        type: 'line',
        symbol: 'circle',
        symbolSize: 15,
        data: [10, 75, 98],
        itemStyle: {
            normal: {
                color: ['#1496e4'],
                shadowColor: '#1496e4',
                // shadowBlur: 40,
                borderColor: '#b7e5ff',
                borderWidth: 8
                // shadowOffsetX:20,
                // shadowOffsetY:20,
                // opacity:1
            }
        },
        lineStyle: {
            normal: {
                color: '#acebfa'
            }
        },

    }, ]
};