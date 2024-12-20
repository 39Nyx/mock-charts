var colors = ['#2978aa', '#3470a3'];
option = {
    backgroundColor: '#FFFFFF',
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }
        },
    },
    grid: {
        top: 80,
        left: '10%',
        right: '65%',
        bottom: '71%'
    },
    legend: {
        data: ['案件数', '同比率（同比上期）'],
        align: 'left',
        left: '10%',
        top: 10
    },
    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#000'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
        },
        "data": ['投诉举报', '咨询', '意见建议'],
    }],
    yAxis: [{
            type: 'value',
            name: '案件数（件）',
            min: 0,
            max: 1500,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '同比率（%）',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [{
            name: '案件数',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#60c9ed'
                    }, {
                        offset: 1,
                        color: '#a7d8e8'
                    }]),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            barWidth: '25%',
            data: [756, 1227, 998]

        },
        {
            name: '同比率（同比上期）',
            color: '#4594dd',
            yAxisIndex: 1,
            type: 'line',
            data: [4.5, 8.2, 6.5]
        },
    ]
};