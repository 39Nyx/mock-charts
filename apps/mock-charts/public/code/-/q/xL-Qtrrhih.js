

option = {
    legend: {
        show: false
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
                str +="<div style='float: left; margin: 6px 5px 0 0;width: 10px; height: 10px; border-radius: 10px; border-color: #000;background-color:"+ params[i].color
                +";'></div>" + bmCode[params[i].seriesName] + '：' + params[i].value[params[i].seriesName].toFixed(1) + '<br/>';
            };
            return str;
        }
    },
    dataset: {
        dimensions: ['time', 'dycs', 'sbcs'],
        source: [
            {
                time: '2018-05-05',
                'dycs': 43.31111,
                'sbcs': 85.811111
            },
            {
                time: '2018-06-05',
                'dycs': 83.11111,
                'sbcs': 73.41111
            },
            {
                time: '2018-07-05',
                'dycs': 86.4111,
                'sbcs': 65.2111
            },
            {
                time: '2018-08-05',
                'dycs': 72.4111,
                'sbcs': 53.9111
            }
        ]
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [{
            type: 'line',
            areaStyle: {}
        },
        {
            type: 'line',
            areaStyle: {}
        }
    ]
};