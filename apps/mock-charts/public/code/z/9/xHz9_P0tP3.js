option = {
    backgroundColor: '#4ba4ba',
    title: {
        text: '年度招生/毕业人数',
        textStyle: {
            color: '#fff',
        },
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: [{
                name: '就业',
                textStyle: {
                    color: '#fff'
                }
            },
            {
                name: '考研',
                textStyle: {
                    color: '#fff'
                }
            },
        ],
    },

    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017'],
        axisLine: {
            lineStyle: {
                color: '#024'
            }
        },
        boundaryGap: false,
    }],
    yAxis: [{
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#024'
            }
        },
        name: '',
        min: 0,
        max: 700,
        interval: 100,
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [{
            name: '就业',
            type: 'line',
            data: [500, 600, 467, 422, 600, 548, 666],

        },
        {
            name: '考研',
            type: 'line',
            data: [111, 135, 133, 128, 134, 156, 140],

        }
    ]
};