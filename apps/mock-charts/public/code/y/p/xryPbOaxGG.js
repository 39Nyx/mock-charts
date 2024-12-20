option = {
    title: {
        text: '江歌事件大众情感分析'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['正向', '负向', '中性'],
        align: 'right',
        right: 10
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['知乎', '澎湃', '微博']
    }],
    yAxis: [{
        type: 'value',
        name: '关注度（人次）',
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [{
        name: '正向',
        type: 'bar',
        data: [0, 0, 0]
    }, {
        name: '负向',
        type: 'bar',
        data: [82, 57, 94]
    }, {
        name: '中性',
        type: 'bar',
        data: [18, 43, 6]
    }]
};