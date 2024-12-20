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
        data: ['交易次数']
    },
    xAxis: [{
        type: 'category',
        data: ['A关区', 'B关区', 'C关区', 'D关区', 'E关区', 'F关区', 'G关区', 'H关区', 'I关区'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [

        {
            type: 'value',
            name: '交易次数',
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [{
            name: '交易次数',
            type: 'bar',
            yAxisIndex: 0,
            data: [261, 200, 180, 170, 160, 150, 140, 130, 120]
        }
    ]
};