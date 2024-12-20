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
        data: ['A供应商', 'B供应商', 'C供应商', 'D供应商', 'E供应商', 'F供应商', 'G供应商', 'H供应商', 'I供应商', 'J供应商', 'K供应商', 'L供应商','M供应商','N供应商','O供应商','P供应商','Q供应商','R供应商','S供应商','T供应商'],
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