option = {
    title: {
        text: '用户兴趣分布'
    },
    tooltip: {},
    legend: {
        data: ['收视', '互动']
    },
    radar: {
        // shape: 'circle',
        indicator: [
           { name: '综艺', max: 6500},
           { name: '电视剧', max: 16000},
           { name: '新闻', max: 30000},
           { name: '电影',max: 38000},
           { name: '生活', max: 52000},
           { name: '旅游', max: 25000}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '收视'
            },
             {
                value : [5000, 14000, 28000, 31000, 42000, 21000],
                name : '互动'
            }
        ]
    }]
};