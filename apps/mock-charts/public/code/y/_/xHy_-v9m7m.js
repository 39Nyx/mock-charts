option = {
    title: {
        text: '男性女性身高体重分布',
        subtext: '抽样调查来自: Heinz  2003'
    },


    legend: {
        data: ['女性', '男性'],
        left: 'center'
    },
    xAxis: [{
        type: 'value',
        scale: true,
        axisLabel: {
            formatter: '{value} cm'
        },
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
        type: 'value',
        scale: true,
        axisLabel: {
            formatter: '{value} kg'
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
            name: '特别',
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true,
                }
            },
            type: 'scatter',
            data: [{
                name: '小明',
                value: [191, 60],
                itemStyle: {
                    color: 'green'
                }
            }]
        },
        {
            name: '女性',
            type: 'scatter',
            data: [
                [161.2, 51.6],
                [167.5, 59.0],
                [159.5, 49.2],
                [157.0, 63.0],
                [155.8, 53.6],
            ],

        },
        {
            name: '男性',
            type: 'scatter',
            data: [
                [174.0, 65.6],
                [175.3, 71.8],
                [193.5, 80.7],
                [186.5, 72.6],
                [187.2, 78.8],
            ],

        }
    ]
};