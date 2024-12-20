//tooltip 只显示选中点数据
//引用的基于echarts-3.6.2.js修改后的js，具体看“脚本”。此js对地图缩放也有修改(缩放被禁止)。
//雷达部分修改都是基于github上大佬们的代码。
//只需要雷达修改版的，留邮箱。

option = {
    title: {
        text: '基础雷达图'
    },
    tooltip: {},
    legend: {
        data: ['预算分配', '实际开销']
    },
    radar: {
        // shape: 'circle',
        indicator: [
           { name: '销售', max: 6500},
           { name: '管理', max: 16000},
           { name: '信息技术', max: 30000},
           { name: '客服', max: 38000},
           { name: '研发', max: 52000},
           { name: '市场', max: 25000}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '预算分配'
            },
             {
                value : [5000, 14000, 28000, 31000, 42000, 21000],
                name : '实际开销'
            }
        ]
    }]
};