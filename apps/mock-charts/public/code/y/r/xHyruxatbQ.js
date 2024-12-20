option = {
    title: {
        text: '定时控制与感应控制',
        subtext: '不同信号控制方式'
    },
    tooltip: {},
    legend: {
        data: ['定时控制', '感应控制']
    },
    toolbox: {
　　show: true,
　　feature: {
　　　　saveAsImage: {
　　　　show:true,
　　　　excludeComponents :['toolbox'],
　　　　pixelRatio: 2
    　　　　}
    　　}
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '西至东', max: 30},
           { name: '西至南', max: 25},
           { name: '西至北', max: 70},
           { name: '南至西', max: 80},
           { name: '南至北', max: 60},
           { name: '南至东', max: 20},
           { name: '东至南', max: 60},
           { name: '东至西', max: 30},
           { name: '东至西', max: 25},
           { name: '北至西', max: 40},
           { name: '北至南', max: 60},
           { name: '北至东', max: 65}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [24.35, 17.88, 64.69, 72.04, 54.13, 12.27, 53.24, 23.57, 19.34, 36.72, 56.46, 59.66],
                name : '定时控制'
            },
             {
                value : [14.92, 10.98, 18.21, 23.64, 18.93, 11.40, 23.01, 15.94, 11.70, 13.99, 20.69, 21.94],
                name : '感应控制'
            }
        ]
    }]
};