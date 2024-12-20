option = {
    title: {
        text: '12男童骑小黄车被撞身亡事件'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['小黄车责任',  '都有责任', '监护人责任'],
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
        data: ['微博', '贴吧', '知乎', '网页']
    }],
    yAxis: [{
        type: 'value',
        name: '百分比',
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [{
        name: '小黄车责任',
        type: 'bar',
        data: [4, 4, 1, 1]
    }, {
     
        name: '都有责任',
        type: 'bar',
        data: [11, 7, 2, 10]
    }, {
        name: '监护人责任',
        type: 'bar',
        data: [175, 39, 19, 25]
    }]
};