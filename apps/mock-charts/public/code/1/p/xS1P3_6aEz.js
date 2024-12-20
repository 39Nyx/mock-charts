option = {
    title: {
        text: '不同温度条件下气体涡轮流量计的示值误差曲线'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        x: 'right',
        data: ['20°', '10°', '0°']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    xAxis: {
         type: 'category',
         
        data: ['100', '40', '20', '10']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} %'
        }
    },
    series: [{
       name: '0°',
            type: 'line',
            data: [-0.67, -0.4, -1.45, -2.58],
            markPoint: {
                data: [{
                        name: '',
                        value: -0.67,
                        xAxis: 101.81,
                        yAxis: -0.67
                    },
                    {
                        name: '',
                        value: -0.4,
                        xAxis: 41.19,
                        yAxis: -0.4
                    },
                    {
                        name: '',
                        value: -1.45,
                        xAxis: 20.26,
                        yAxis: -1.45
                    },
                    {
                        name: '',
                        value: -2.58,
                        xAxis: 10.9,
                        yAxis: -2.58
                    }
                ]
            }
        },
        {
            name: '20°',
            type: 'line',
            data: [0.12, 0.35, 0.4, -0.28],
            markPoint: {
                data: [{
                        name: '',
                        value: 0.12,
                        xAxis: 99.57,
                        yAxis: 0.12
                    },
                    {
                        name: '',
                        value: 0.35,
                        xAxis: 40.35,
                        yAxis: 0.35
                    },
                    {
                        name: '',
                        value: 0.4,
                        xAxis: 19.83,
                        yAxis: 0.4
                    },
                    {
                        name: '',
                        value: -0.28,
                        xAxis: 10.06,
                        yAxis: -0.28
                    }
                ]
            }
        },

        {
            name: '10°',
            type: 'line',
            data: [-0.42, -0.22, -0.96, -1.98],
            markPoint: {
                data: [{
                        name: '',
                        value: -0.42,
                        xAxis: 101.36,
                        yAxis: -0.42
                    },
                    {
                        name: '',
                        value: -0.22,
                        xAxis: 40.97,
                        yAxis: -0.22
                    },
                    {
                        name: '',
                        value: -0.96,
                        xAxis: 20.14,
                        yAxis: -0.96
                    },
                    {
                        name: '',
                        value: -1.98,
                        xAxis: 10.84,
                        yAxis: -1.98
                    }
                ]
            }
    }]
};