option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};        option = {
    title: {
        text: '14-16年空气质量指数按月统计'
    },
    tooltip: {},
    legend: {
        data: ['2014', '2015','2016']
    },
    radar: {
        // shape: 'circle',
        indicator: [
           { name: '1月', max: 150},
           { name: '2月', max: 150},
           { name: '3月', max: 150},
           { name: '4月', max: 150},
           { name: '5月', max: 150},
           { name: '6月', max: 150},
           { name: '7月', max: 150},
           { name: '8月', max: 150},
           { name: '9月', max: 150},
           { name: '10月', max: 150},
           { name: '11月', max: 150},
           { name: '12月', max: 150},
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [92, 130, 83, 55, 54, 48, 75, 56, 59, 103, 86, 58],
                name : '2014'
            },
             {
                value : [89, 83, 78, 63, 50, 52, 52, 40, 41, 60, 100, 134],
                name : '2015'
            },
             {
                value : [60, 46, 84, 58, 49, 53, 59, 40, 47, 70, 90, 105],
                name : '2016'
            }
        ]
    }]
};