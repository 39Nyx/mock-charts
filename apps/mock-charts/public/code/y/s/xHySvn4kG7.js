option = {
    title: {
        text: '总体进展情况',
    },
    tooltip: {

        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['完成', '延期', '进行中','未开始']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'value'
    }],
    yAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        data: ['可研', '初设', '招标', '施工图', '物资到货', '进场准备', '施工', '竣工投产']
    }],
    series: [{
            name: '完成',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            color: ['#749f83'],
            data: [20, 17, 20, 4, 10, 22, 21, 19]
        },
        {
            name: '进行中',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            color: ['#61a0a8'],
            data: [3, 3, 1, 4, 3, 5, 2, 6]
        },        {
            name: '未开始',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            color: ['#f0a0a8'],
            data: [4, 6, 2, 7, 3, 1, 4, 3]
        },
        {
            name: '延期',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left'
                }
            },
            color: ['#c23531'],
            data: [-9, -6, -5, -3, -7, -4, -2, -1]
        }
    ]
};