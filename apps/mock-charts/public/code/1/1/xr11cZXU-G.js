option = {
    title: {
        text: '香港中文大学热议指数',
        subtext: '微博'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['香港中文大学','港独']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['2017-9-5','2017-9-6','20179-7','2017-9-8','2017-9-9','2017-9-10','2017-9-11']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} k'
        }
    },
    series: [
        {
            name:'香港中文大学',
            type:'line',
            data:[156, 234, 150, 176, 100, 150, 100],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'港独',
            type:'line',
            data:[66, 55, 57, 60, 63, 33, 50],
            markPoint: {
                data: [
                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'},
                    [{
                        symbol: 'none',
                        x: '90%',
                        yAxis: 'max'
                    }, {
                        symbol: 'circle',
                        label: {
                            normal: {
                                position: 'start',
                                formatter: '最大值'
                            }
                        },
                        type: 'max',
                        name: '最高点'
                    }]
                ]
            }
        }
    ]
};
