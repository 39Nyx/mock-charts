var seriesData = [10, 52, 200, 334, 390, 330, 220];
var seriesData2 = [400, 400, 400, 400, 400, 400, 400];
option = {
    grid: {
        top: 0,
        left: '4%',
        right: '11%',
        bottom: '40'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        nameGap: 15,
        data: [],
        offset: 50,
        axisLine: {
            lineStyle: {
                color: '#dbdbdb'
            }
        },
        axisLabel: {
            show: false,
            color: '#999999'
        },
        axisTick: {
            show: false,
            alignWithLabel: true
        }
    }],
    xAxis: [{
        type: 'value',
        position: 'bottom',
        interval: 25,
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#dbdbdb'
            }
        },
        axisLabel: {
            color: '#999999'
        },
        axisTick: {
            inside: true
        },
        max: seriesData2[0] || 100
    }],
    series: [{
        name: 'total',
        type: 'bar',
        silent: true,
        barGap: '-100%',
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: '#fff'
            }
        },
        data: seriesData2
    }, {
        name: 'my',
        type: 'bar',
        silent: true,
        barGap: '-100%',
        barWidth: '20px',
        label: {
            normal: {
                position: 'right',
                show: true,
                color: '#999'
            }
        },
        itemStyle: {
            normal: {
                color: '#dddddd'
            }
        },
        data: seriesData
    }]
}

function setChartSelected(idx) {
    var index = idx;
    for (var i = 0; i < seriesData.length; i++) {
        if (seriesData[i].value) {
            seriesData[i] = seriesData[i].value;
        }
        if (index == i) {
            seriesData[i] = {
                value: seriesData[i],
                itemStyle: {
                    normal: {
                        color: '#28bcac'
                    }
                },
                label: {
                    normal: {
                        color: '#28bcac'
                    }
                }
            }
        }
    }
    console.log(seriesData);

    option.series[1].data = seriesData
    myChart.setOption(option, true);
}
setChartSelected(2)