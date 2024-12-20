option = {
    title: {
        text: '习近平主席外访调研次数年度统计（数据来源：中国人民共和国外交部）'
    },
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
        data: ['外事访问次数', '外事访问天数', '考察调研次数', '考察调研天数'],
        left: 'center',
        right: '0%',
        bottom: '88%',
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: false
        },
        data: ['2012年', '2013年', '2014年', '2015年', '2016年', '2017年'],
        left: 'center',
        right: '8%',
        bottom: '0%',
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
        name: '次数',
        min: 0,
        position: 'left',
        axisLabel: {}
    }, {
        type: 'value',
        name: '天数',
        min: 0,
        position: 'right',
        axisLabel: {}
    }],
    series: [{
        name: '外事访问次数',
        type: 'line',
        label: {
            normal: {
                show: true,
                position: 'bottom',
            }
        },
        lineStyle: {
            normal: {
                width: 3,
                shadowColor: 'rgba(0,0,0,1.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            }
        },
        data: [0, 14, 21, 17, 14, 11]
    }, {
        name: '外事访问天数',
        type: 'bar',
        yAxisIndex: 1,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: [0, 33, 45, 42, 30, 24]
    }, {
        name: '考察调研次数',
        type: 'line',
        yAxisIndex: 1,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: [2, 9, 10, 6, 7, 6]
    }, {
        name: '考察调研天数',
        type: 'bar',
        yAxisIndex: 1,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: [7, 29, 19, 17, 20, 11]

    }]
};