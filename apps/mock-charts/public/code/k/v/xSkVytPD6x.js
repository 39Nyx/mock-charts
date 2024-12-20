option = {
    xAxis: {
      data: ['GPU', 'CPU'],
        axisLabel: {
            textStyle: {
                fontSize: 20
            }
        }
    },
    yAxis: {
        boundaryGap: [0, 0.3],
        axisLabel: {
            formatter: function (value) {
                return value + ' ms';
            },
            textStyle: {
                fontSize: 14
            }
        }
    },
    series: [{
        type: 'bar',
        data: [2, 286],
        barWidth: 100,
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: function (params) {
                    return params.value + ' ms';
                },
                textStyle: {
                    fontSize: 20
                }
            }
        }
    }]
}