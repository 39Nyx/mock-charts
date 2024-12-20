app.title = '不等距效果';

option = {
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            var res = '<div><p>时间：' + params[0].name + '</p></div>'
            for (var i = 0; i < params.length; i++) {
                if (params[i].data !== 0) {
                    res += '<p>' + params[i].seriesName + '：' + params[i].data + 'ml</p>'
                }

            }
            return res;
        }
    },

    legend: {
        data: ['蒸发量']
    },
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
            type: 'value',
            name: '水量',
            min: 0,
            max: 75000,
            interval: 15000,
            axisLabel: {
                formatter: function(value) {
                    var texts = [];
                    if (value === 0) {
                        texts.push('0');
                    } else if (value <= 15000) {
                        texts.push('3000ml');
                    } else {
                        texts.push(value + 'ml');
                    }
                    return texts;

                }
            }
        },
        {
            type: 'value',
            name: '水量',
            show: false,
            min: 0,
            max: 15000,
            interval: 3000
        }
    ],
    series: [{
            name: '蒸发量',
            type: 'bar',
            stack: 'water',
            data: [20000, 49000, 0, 23200, 0, 0, 13560, 16220, 32600, 20000, 64000, 33000]
        },
        {
            name: '蒸发量',
            type: 'bar',
            stack: 'water',
            yAxisIndex: 1,
            data: [0, 0, 2000, 0, 1358, 2580, 0, 0, 0, 0, 0, 0]
        }
    ]
};