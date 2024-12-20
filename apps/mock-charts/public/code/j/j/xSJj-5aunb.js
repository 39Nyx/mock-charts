option = {
    backgroundColor: '#0E2A43',
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['18岁以下', '18-35岁', '35-60岁','60岁以上'],
        top: 'bottom',
        textStyle: {
            color: '#fff'
        },
    },
    grid: {
        left: '3%',
        right: '4%',
       
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['30秒', '1分钟', '1分30秒', '2分钟', '2分30秒'],
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        }

    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        splitLine: {
            lineStyle: {
                // 使用深浅的间隔色
                color: ['#aaa', '#ddd'],
                type :'dashed'
            }
        },

    },
    series: [{
        name: '18岁以下',
        type: 'line',
        data: [7, 4, 3, 0, 0]
    }, {
        name: '18-35岁',
        type: 'line',
        data: [3, 9, 10, 8, 0]
    }, {
        name: '35-60岁',
        type: 'line',

        data: [1, 9, 6, 8, 0]
    },{
        name: '60岁以上',
        type: 'line',
        data: [3, 7, 5, 1, 0]
    }]
};