app.title = '世界人口总量 - 条形图';

option = {
   
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['申请次数', '发放次数']
    },
    grid: {
        left: '3%',
        right: '20%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        name: '次数',
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        name: '年份',
        type: 'category',
        data: ['2014','2015','2016','2017']
    },
    series: [
        {
            name: '申请次数',
            type: 'bar',
            data: [25, 39, 64, 46]
            
        },
        {
            name: '发放次数',
            type: 'bar',
            data: [23, 30, 50, 44]
        }
    ]
};
