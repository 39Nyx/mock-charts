app.title = '离合器问题分布图';

option = {
    title: {
        text: '离合器失效问题',
        subtext: '数据来自车质网'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['离合器']
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
        data: ['离合器失效','抖动','异响','打滑','松动','沉重','漏油','烧毁']
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [60,141,513,28,4,35,15,54]
        }
    ]
};
