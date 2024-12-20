option = {
    legend: {
        // show: false
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        formatter: function(params) {
            var bmCode = {
                'time': '日期',
                'dycs': '调用次数',
                'sbcs': '失败次数'
            };
            var str = '<span class="text-warning">服务接口</span><br/>';
            for (var i = 0; i < params.length; i++) {
                if (!i) {
                    str += '日期：' + params[i].name + '<br/>';
                }
                str += bmCode[params[i].seriesName] + '：' + params[i].value[params[i].seriesName] + '<br/>';
            };
            return str;
        }
    },
    dataset: {
        dimensions: ['time', 'dycs', 'sbcs'],
        source: [
            {
                time: '2018-05-05',
                'dycs': 43.3,
                'sbcs': 85.8
            },
            {
                time: '2018-06-05',
                'dycs': 83.1,
                'sbcs': 73.4
            },
            {
                time: '2018-07-05',
                'dycs': 86.4,
                'sbcs': 65.2
            },
            {
                time: '2018-08-05',
                'dycs': 72.4,
                'sbcs': 53.9
            }
        ]
    },
    xAxis: {
        type: 'category',
        boundaryGap: false
    },
    yAxis: {},
    series: [
        {
            type: 'line',
            symbol: 'circle',
            symbolSize: 25,
            lineStyle: {
                opacity: 0
            }
        },
        {
            type: 'line',
            symbol: 'circle',
            symbolSize: 25,
            lineStyle: {
                opacity: 0
            }
        }
    ]
};