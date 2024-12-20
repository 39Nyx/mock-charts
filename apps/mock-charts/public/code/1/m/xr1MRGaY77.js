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
        data: ['A采购商', 'B采购商', 'C采购商', 'D采购商', 'E采购商', 'F采购商', 'G采购商', 'H采购商', 'I采购商', 'J采购商', 'K采购商', 'L采购商','M采购商','N采购商','O采购商','P采购商','Q采购商','R采购商','S采购商','T采购商'],
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