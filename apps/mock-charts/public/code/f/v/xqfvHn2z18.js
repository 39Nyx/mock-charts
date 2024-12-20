option = {
    title: {
        text: '基础雷达图'
    },
    legend: {
        right: 0,
        top: 'center',
        width: "16%",
    },
    radar: {
        // shape: 'circle',
        indicator: [
            { name: '销售（Sales）', max: 6500},
            { name: '管理（Administration）', max: 16000},
            { name: '信息技术（Information Technology）', max: 30000},
            { name: '客服（Customer Support）', max: 38000},
            { name: '研发（Development）', max: 52000},
            { name: '市场（Marketing）', max: 25000}
        ]
    },
    color: ['#3196FA', '#F55857'],
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
            areaStyle: {
                opacity: 0.5
            },
        data: [
            {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: '2020年'
            },
            {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: '2021年'
            }
        ]
    }]
};