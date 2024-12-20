option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true,
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
        },
    ],
    series: [
        {
            name: '背景',
            type: 'bar',
            data: [100, 100, 100, 100, 100],
            itemStyle: {
                normal: {
                    color: 'rgba(0, 255, 255,.3)',
                    borderColor: '#00ffff',
                },
            },
        },
        {
            name: '背景2',
            type: 'bar',
            data: [100, 100, 100, 100, 100],
            itemStyle: {
                normal: {
                    color: 'rgba(255, 204, 0,.3)',
                    borderColor: '#ffcc00',
                },
            },
        },
    ],
};
