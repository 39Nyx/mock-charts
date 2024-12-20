option = {
    color: ['#16abfe','#ff7070'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        data: ['人数', '转化率']
    },
    xAxis: [{
        type: 'category',
        data: ['1月2日', '1月3日', '1月4日', '1月5日', '1月6日', '1月7日', '1月8日', '1月9日', '1月10日', '1月11日', '1月12日', '1月13日'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [

        {
            type: 'value',
            name: '人数',
            axisLabel: {
                formatter: '{value}'
            }
        }, {
            type: 'value',
            name: '转化率',
            axisLabel: {
                formatter: '{value} %'
            }
        },
    ],
    series: [{
            name: '人数',
            type: 'bar',
            yAxisIndex: 0,
            data: [261, 259, 290, 264, 287, 707, 756, 182, 487, 188, 260, 230]
        },

        {
            name: '转化率',
            type: 'line',
            yAxisIndex: 1,
            smooth: true,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};