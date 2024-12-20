option = {
    backgroundColor:'#ffffff',
    title: {
        text: '投诉举报处理情况分析'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['不予受理', '已撤销', '办理完成']
    },
    
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
         data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    }],
    yAxis: [{
        type: 'value',
        name: '投诉举报数',
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [{
        name: '不予受理',
        type: 'bar',
        data: [10, 20, 5, 9, 3,10, 20, 5, 9, 3,10, 20]
    }, {
        name: '已撤销',
        type: 'bar',
        data: [3, 2, 5, 9, 3,6, 2, 5, 9, 3,2, 1]
    }, {
        name: '办理完成',
        type: 'bar',
        data: [20, 12, 31, 34, 31,20, 12, 31, 34, 31,35,45]
    }]
};