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
        data: ['A国', 'B国', 'C国', 'D国', 'E国', 'F国', 'G国', 'H国', 'I国', 'J国', 'K国', 'L国','M国','N国','O国','P国','Q国','R国','S国','其他'],
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