option = {
    color: ['#61D9D5', '#4283F7'],
    backgroundColor: '#FFF',
    grid: {
        left: '10%',
        right: '5%'
    },
    xAxis: {
        name: 'Attention Index',
        nameLocation: 'end',
        nameGap: '-100',
        nameTextStyle: {
            color: '#8E9098',
            padding: [0, 0, 30, 0]
        },
        axisLine: {
            lineStyle: {
                color: '#8E9098'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        name: 'Engagement Index',
        nameTextStyle: {
            color: '#8E9098'
        },
        axisLine: {
            lineStyle: {
                color: '#8E9098'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [{
        symbolSize: 18,
        data: [
            [10.0, 8.04, '演员的诞生 第一季'],
            [8.0, 6.95, 'b'],
            [13.0, 7.58, 'c'],
            [9.0, 8.81, '爸爸去哪儿 第三季'],
            [11.0, 8.33, '热血街舞团'],
            [14.0, 9.96, '爸爸去哪儿 第三季'],
            [6.0, 7.24, '爸爸去哪儿 第三季'],
            [4.0, 4.26, 'h'],
            [12.0, 10.84, 'i'],
            [7.0, 4.82, '爸爸去哪儿 第三季'],
            [5.0, 5.68, 'k']
        ],
        label: {
            show: true,
            color: '#8E9098',
            fontSize: 14,
            verticalAlign: 'bottom',
            offset: [0, -15],
            formatter: '{@[2]}'
        },
        type: 'scatter'
    }]
};