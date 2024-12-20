option = {
    backgroundColor: '#f86c6b', //背景色
    grid: {
        left: 'left',
        right: '0',
        bottom: '0'
    },
    xAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
        show: false
    },
    yAxis: {
        type: 'value',
        show: false
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130, 50, 70, 90, 99, 190, 177, 166],
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#fff',
                lineStyle: {
                    color: '#fff',
                    opacity: 0.4
                },
                opacity: 0.4
            },
        },
    }]
};