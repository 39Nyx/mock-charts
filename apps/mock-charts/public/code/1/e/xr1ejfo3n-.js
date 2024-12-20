option = {
    title: {
        text: '曲线热力图',
        x: 'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    visualMap: {
        show: true,
        min: 0,
        max: 1000,
        left: 'right',
        bottom: '20',
        text: ['高', '低'],
        calculable: false, //手柄
        color: ['red', 'yellow', 'lime','cyan'],
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '流量',
        type: 'line',
        smooth: true,
        data: [10, 12, 21, 54, 260, 830, 710]
    }]
};