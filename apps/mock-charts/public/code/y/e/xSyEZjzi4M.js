var uploadedDataURL = "/asset/get/s/data-1516083691989-HJVe5Gi4f.html";

option = {
    tooltip: {
        trigger: 'axis',
    },
    xAxis: [{
        show: false,
        type: 'category',
        boundaryGap: false,
        data: ['1', '2', '3', '4'],
    }],
    yAxis: [{
        show: false,
        type: 'value',
        min: 27,
        max: 45
    }],
    series: [{
        name: '迷你图模板',
        type: 'line',
        stack: '全部',
        symbol: 'circle',
        itemStyle: {
            normal: {
                color: '#56bdff'
            }
        },
        areaStyle: {
            normal: {
                color: '#91d4ff'
            }
        },
        data: [36, 35.5, 37, 36]
    }, ]
};