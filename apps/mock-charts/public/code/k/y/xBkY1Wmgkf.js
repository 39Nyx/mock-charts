var generateData = function() {
    return Array.apply(null, {
        length: 7
    }).map(function(item, index) {
        return Math.round(Math.random() * 25 + 5);
    });
}
option = {
    legend: {
        data: ['内部数据', '外部数据']
    },
    xAxis: {
        boundaryGap: false,
        data: ['06-15', '06-16', '06-17', '06-18', '06-19', '06-20', '06-21']
    },
    yAxis: {
        axisLabel: {
            formatter: function(value) {
                return value ? value + 'GB' : ''
            }
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    series: [{
        name: '内部数据',
        type: 'line',
        itemStyle: {
            normal: {
                color: 'rgba(30,202,204,1)'
            }
        },
        areaStyle: {
            normal: {
                color: 'rgba(30,202,204,0.9)'
            }
        },
        data: generateData()
    }, {
        name: '外部数据',
        type: 'line',
        itemStyle: {
            normal: {
                color: 'rgba(187,166,287,1)'
            }
        },
        areaStyle: {
            normal: {
                color: 'rgba(187,166,287,0.9)'
            }
        },
        data: generateData()
    }]
};