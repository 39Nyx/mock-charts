option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: [
            {
                // type:'time',
                data: ['0', '1', '2', '3', '4', '6', '8'],
                position:'bottom'
            },
            {
                type:'value',
                // gridIndex:,
                minInterval:600,
                maxInterval:600,
                data: [100, 180, 500, 1222, 2500, 3100, 3600],
                position:'top'
            },
        ],
    
    // xAxis: {
        // type:'time',
        // data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    // },
    yAxis: {},
    series: [{
        type: 'line',
        xAxisIndex:1,
        // data:[220, 182, 191, 234, 290, 330, 310]
        data:[
            [110,220],
            [150,300],
            [600,240]
            ]
    }]
};