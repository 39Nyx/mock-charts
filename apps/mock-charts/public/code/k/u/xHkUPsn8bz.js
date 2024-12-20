option = {
    title: {
        text: '热词搜索分布'
    },
    tooltip: {},
    legend: {
        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
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
           { name: '地震', max: 5000},
           { name: '人民', max: 16000},
           { name: '我们', max: 30000},
           { name: '四川', max: 38000},
           { name: '希望', max: 52000},
           { name: '九寨沟', max: 25000}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            
             {
                value : [5000, 14000, 28000, 31000, 42000, 21000],
               
            }
        ]
    }]
};