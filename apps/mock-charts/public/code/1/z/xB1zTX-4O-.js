option = {
    title: {
        text: '折线图',
        subtext: '测试',
    },
    legend: {
        data: ['折线一', '折线二', '折线三', '折线四', '折线五', ]
    },
    xAxis: {
        name: 'x轴',
        type: 'category',
        data: ['one', 'two', 'three', 'four', 'five', 'four', 'six', ],
        boundaryGap: false,
    },
    yAxis: {
        name: 'y轴',
        type: 'value'
    },
    series: [{
        name: '折线一',
        type: 'line',
        data: [1, 2, 3, 4, 5, 6, 7]
    }, {
        name: '折线二',
        type: 'line',
        data: [2, 3, 4, 5, 6, 7, 8]
    }, {
        name: '折线三',
        type: 'line',
        data: [3, 4, 5, 6, 7, 8, 9, 10]
    }, {
        name: '折线四',
        type: 'line',
        data: [4, 5, 6, 7, 8, 9, 10, 11]
    }, {
        name: '折线五',
        type: 'line',
        data: [5, 6, 7, 8, 9, 10, 11, 12]
    }, ]




}