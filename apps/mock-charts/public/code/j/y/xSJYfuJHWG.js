option = {
    xAxis: {
        data: ['a', 'b', 'c', 'd']
    },
    yAxis: {
        
    },
    series: [{
        type: 'line',
        data:[1, 10, 4, 3],
        markPoint: {
            data: [{
                type: 'min',
                itemStyle: {
                    normal: {
                        color: 'green'
                    }
                }
            }]
        }
    }],
    markPoint: {
        z: -1 // 强制显示在底部
    }
};