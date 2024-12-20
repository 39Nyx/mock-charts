option = {
    text: {
        text: 'X轴折线图堆叠',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['宝马', '奥迪', '一汽', '大众'],
    },
    xAxis: {
        type: 'category',
        data: ['一月', '二月', '三月', '四月'],
        boundaryGap:false
    },
    yAxis: {
        type: 'value',
    },
    series: [{
        type: 'line',
        name: '宝马',
        areaStyle: {normal: {}},
        data: [12, 32, 45, 62],
        stack: '1'

    }, {
        type: 'line',
        name: '奥迪',
        areaStyle: {normal: {}},
        data: [12, 12, 32, 45],
        stack: '1'

    }, {
        type: 'line',
        name: 'line',
        areaStyle: {normal: {}},
        data: [12, 23, 12, 32],
        stack: '1'

    }, {
        type: 'line',
        name: '大众',
        areaStyle: {normal: {}},
        data: [12, 32, 45, 32],
        stack: '1'

    }, {
        type: 'line',
        name: '吉利',
        areaStyle: {normal: {}},
        data: [12, 32, 12, 32],
        stack: '1'

    }, ],
}