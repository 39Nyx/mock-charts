app.title = '收入收支条形图';

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['收支', '收入']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: [{
        type: 'value'
    }],
    xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            data: ['一月', '二月', '三月', '四月', '五月', '六月']
        },
        {
            type: 'category',
            axisTick: {
                show: false
            },
            data: ['一月', '二月', '三月', '四月', '五月', '六月']
        }
    ],
    series: [{
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'right'
                }
            },
            xAxisIndex: '0',
            data: [7, 6, 22, 6, 14, 6, ]
        },
        {
            name: '收入同比',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'right'
                }
            },
            xAxisIndex: '1',
            data: [5, 3, 12, 6, 18, 7, ]
        },
        {
            name: '收支',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left'
                }
            },
            xAxisIndex: '0',
            data: [-17, -5, -22, -24, -14, -6, ]
        },
        {
            name: '收支同比',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left'
                }
            },
            xAxisIndex: '1',
            data: [-11, -5, -12, -14, -14, -6, ]
        }
    ]
};