option = {
    title: {
        text: '情感倾向统计表'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['正向评论', '负向评论', '中立'],
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
        data: ['程序员', '程序员妻子', '舅舅', '警方', '世纪佳缘']
    }],
    yAxis: [{
        type: 'value',
        name: '评论（条）',
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [{
        name: '正向评论',
        type: 'bar',
        data: [40, 9, 28, 32, 0]
    }, {
        name: '负向评论',
        type: 'bar',
        data: [61, 186, 1, 12,13]
    }, {
        name: '中立',
        type: 'bar',
        data: [8, 3, 0, 1, 0]
  
    }]
};