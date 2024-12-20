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
        axisLabel:{
            rotate:45
        },
        type: 'category',
        data: ['A港口', 'B港口', 'C港口', 'D港口', 'E港口', 'F港口', 'G港口', 'H港口', 'I港口', 'J港口', 'K港口', 'L港口','M港口','N港口','O港口','P港口','Q港口','R港口','S港口','T港口'],
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
            data: [261, 200, 180, 170, 160, 150, 140, 130, 120, 110, 100, 90,80,70,60,50,40,30,20,10]
        }
    ]
};