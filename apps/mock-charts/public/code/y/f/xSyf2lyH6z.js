app.title = '歷年天貓雙十一銷售額及增長幅度';

option = {
    title: {
        //text: '歷年天貓雙十一銷售額及增長幅度'
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        containLabel: true
    },
    legend: {
        data: ['增幅/%','銷售額/億']
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
    }],
    yAxis: [{
        type: 'value',
        name: '增幅/%',
        min: 0,
        max: 1800,
        position: 'right',
        axisLabel: {
            formatter: '{value} %'
        }
    }, {
        type: 'value',
        name: '銷售額/億',
        min: 0,
        max: 1800,
        position: 'left'
    }],
    series: [{
        name: '增幅/%',
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
        data: [1700, 466.2, 260, 89.5, 57.7, 61.3, 32.3, 39.3]
    }, {
        name: '銷售額/億',
        type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
        data: [9.36, 53, 191, 362, 571, 912, 1207, 1682]
    }]
};