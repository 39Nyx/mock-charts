option = {
    text: {
        text: 'X轴柱状图堆叠',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },

    xAxis: {
        type: 'category',
        data: ['统计因素', '计量因素', '技术因素', '营配贯通因素','窃电因素','未处理']
    },
    yAxis: {
        type: 'value',
    },
    series: [{
        type: 'bar',
        name: '户变关系错误',
        data: [12, 0, 0, 0,0,0],
        stack: '1'

    }, {
        type: 'bar',
        name: '无表用户未统计',
        data: [12, 0, 0, 0,0,0],
        stack: '1'

    }, {
        type: 'bar',
        name: '退补电量未统计',
        data: [12, 0, 0, 0,0,0],
        stack: '1'

    }, {
        type: 'bar',
        name: '小电量未抄回',
        data: [12, 0, 0, 0,0,0],
        stack: '1'

    }, {
        type: 'bar',
        name: '空载台区',
        data: [12, 0, 0, 0,0,0],
        stack: '1'

    }, {
        type: 'bar',
        name: '接线错误',
        data: [0, 32, 0, 0,0,0],
        stack: '1'

    }, {
        type: 'bar',
        name: '表计故障',
        data: [0, 12, 0, 0,0,0],
        stack: '1'

    }, {
        type: 'bar',
        name: 'CT故障',
        data: [0, 23, 0, 0,0,0],
        stack: '1'

    }, {
        type: 'bar',
        name: 'CT倍率错误',
        data: [0, 32, 0, 0,0,0],
        stack: '1'

    }, {
        type: 'bar',
        name: '采集不成功或采集数据异常',
        data: [0, 12, 0, 0,0,0],
        stack: '1'

    }, {
        type: 'bar',
        name: '供电半径大',
        data: [0, 0, 12, 0,0,0],
        stack: '1'

    }, {
        type: 'bar',
        name: '线路迂回',
        data: [0, 0, 45, 0,0,0],
        stack: '1'

    }, {
        type: 'bar',
        name: '三相负载不平衡',
        data: [0, 0, 12, 0,0,0],
        stack: '1'

    }, {
        type: 'bar',
        name: '台区设备老旧',
        data: [0, 0, 12, 0,0,0],
        stack: '1'

    }, {
        type: 'bar',
        name: '线径相对小',
        data: [0, 0, 45, 0,0,0],
        stack: '1'

    }, {
        type: 'bar',
        name: '公用线路、设备绝缘差或漏电',
        data: [0, 0, 32, 0,0,0],
        stack: '1'

    }, {
        type: 'bar',
        name: '窃电',
        data: [0, 0, 0, 32,0,0],
        stack: '1'

    }, {
        type: 'bar',
        name: '台区-用户关系错误',
        data: [0, 0, 0, 0,23,0],
        stack: '1'

    }, {
        type: 'bar',
        name: '其他',
        data: [0, 0, 0, 0,0,12],
        stack: '1'

    },  ],
    
}