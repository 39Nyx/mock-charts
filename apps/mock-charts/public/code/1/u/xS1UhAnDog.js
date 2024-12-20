var barData = [{
    name: 65, // 单数
    value: 45 // 所占百分比
}, {
    name: 20,
    value: 15
}, {
    name: 45,
    value: 30
}, {
    name: 15,
    value: 10
}];


//  颜色集合
var colorList = [
    '#59c5a7', '#51b8fe', '#fa827d', '#ffa55d', '#9c7de1', '#5d9eff', '#ffdb5d', '#ee82ed', '#8fca5f', '#b995f5'
];


option = {
    backgroundColor: '#ffffff',
    color: colorList,
    xAxis: {
        type: 'category',
        data: ['1-8h', '9-24h',
            '25-32h', '33-40h'
        ],
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#51b8fe',
                width: 2
            }
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    yAxis: {
        name: '[%]',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#999'
        },
        axisLine: {
            lineStyle: {
                color: '#51b8fe',
                width: 2
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#ddd'
            }
        }
    },
    series: [{
        name: '任务时长分布图',
        type: 'bar',
        itemStyle: {
            normal: {
                color: function(params) {
                    // build a color map as your need.
                    return colorList[params.dataIndex]
                }
            }
        },
        data: barData,
        label: {
            normal: {
                show: true,
                position: 'top',
                offset: [0, -5],
                textStyle: {
                    fontSize: 20
                },
                formatter: function(params) {
                    return params.data.name;
                }
            }
        }
    }],
    barCategoryGap: '55%'
};