option = {
    title: {
        text: '情感倾向',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['1', '-1']
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
        data: ['新民网','头条新闻','微博','天涯论坛','腾讯新闻','网易新闻']
    },
    series: [
        {
            name: '1',
            type: 'bar',
            data: [4, 12, 5, 3, 15, 17]
        },
        {
            name: '-1',
            type: 'bar',
            data: [28, 40, 16, 14, 56, 33]
        }
    ]
};
