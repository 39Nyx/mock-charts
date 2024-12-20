option = {
    title: {
        text: '',
        subtext: ''
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['华为', '小米', '魅族', '华为荣耀', 'OPPO']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['屏幕', '速度', '内存', '拍照', '电池', '价格']
    },
    series: [{
        name: '华为',
        type: 'bar',
        data: [60, 100, 90, 60, 60, 90]
    }, {
        name: '小米',
        type: 'bar',
        data: [100, 100, 90, 90, 60, 80]
    }, {
        name: '魅族',
        type: 'bar',
        data: [100, 100, 60, 90, 100, 80]
    }, {
        name: '华为荣耀',
        type: 'bar',
        data: [60, 60, 90, 60, 60, 70]
    }, {
        name: 'OPPO',
        type: 'bar',
        data: [30, 30, 60, 95, 60, 70]
    }]
};