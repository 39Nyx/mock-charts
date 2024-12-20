option = {
    tooltip: {
        trigger: 'axis',
        formatter: function(params, ticket, callback) {

            var res = params[0].name;

            for (var i = 0, l = params.length; i < l; i++) {
                if (params[i].seriesType === 'line') {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + 'h';
                } else {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + '个';
                }
            }
            return res;

        }
    },
    grid: {
        containLabel: true
    },
    legend: {
        data: ['整体', ' pc', '移动']
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        data: ['9月5日', '9月6日', '9月7日', '9月8日内', '9月9日', '9月10日', '9月11日', '9月12日', '9月13日', '9月14日', '9月15日']
    }],
    dataZoom: [{
        type: 'slider',
        xAxisIndex: 0,
        filterMode: 'empty',
        start: 0,
        end: 100
    }, {
        type: 'slider',
        yAxisIndex: 0,
        filterMode: 'empty',
        start: 0,
        end: 100
    }, {
        type: 'inside',
        xAxisIndex: 0,
        filterMode: 'empty',
        start: 0,
        end: 100
    }, {
        type: 'inside',
        yAxisIndex: 0,
        filterMode: 'empty',
        start: 0,
        end: 100
    }],
    yAxis: [{
        type: 'value',
        name: '整体',
        min: 0,
        position: 'left',
        axisLabel: {
            formatter: '{value} 次'
        }
    }, {
        type: 'value',
        name: '教师节',
        min: 0,
        position: 'right',
        axisLabel: {
            formatter: '{value} 次'
        }
    }],
    series: [{
        name: '整体',
        type: 'line',
        label: {
            normal: {
                show: true,
                position: 'top',
            }
        },
        lineStyle: {
            normal: {
                width: 3,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            }
        },
        data: [23936, 99242, 53765, 111310, 143395, 1113233, 245796, 110936, 67257, 37931, 19669]
    }, {
        name: ' pc',
        type: 'bar',
        yAxisIndex: 1,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: [12286, 16399, 14209, 28228, 31274, 275084, 63054, 22860, 18312, 7344, 6128]
    }, {
        name: '移动',
        type: 'bar',
        yAxisIndex: 1,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: [11650, 82843, 39556, 83082, 112121, 838149, 182742, 88076, 48945, 30587, 13541]
    }]
};