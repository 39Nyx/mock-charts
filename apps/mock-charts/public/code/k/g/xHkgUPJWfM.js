option = {
    title: {
        text: '天涯平台的评论倾向'
    },
    tooltip: {},
    legend: {
        data: [ '评论量']
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
           { name: '产妇）', max: 50},
           { name: '家属', max: 50},
           { name: '医院', max: 50},
           { name: '双方（家属和医院）', max: 50},
           { name: '其它', max: 50}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
             {
                value : [6, 32, 42, 10, 10],
                name : '评论量'
            }
        ]
    }]
};