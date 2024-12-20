option = {
    title: {
        text: '基础雷达图'
    },
    tooltip: {},
    legend: {
        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    },
    radar: {
        // shape: 'circle',
        indicator: [
           { name: '灾难', max: 100},
           { name: '严重', max: 100},
           { name: '一般严重', max: 100},
           { name: '警告', max: 100}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        label:{
            normal:{
             show:true,
             position : 'outside',
             //  position : 'insideRight',
            }
        
        },

        // areaStyle: {normal: {}},
        data : [
            {
                value : [13, 13, 72, 19],
                name : '监控看板'
            }
        ]
    }]
};