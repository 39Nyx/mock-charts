option = {
    title: {
        text: ''
    },
    tooltip: {},
    legend: {
        data: ['入学时', '现在']
    },
    radar: {
        // shape: 'circle',
        indicator: [{
            name: '道德品质与公民素养',
            max: 20
        }, {
            name: '学习态度与能力',
            max: 20
        }, {
            name: '实践与创新',
            max: 20
        }, {
            name: '运动与健康',
            max: 20
        }, {
            name: '审美与表现',
            max: 20
        }, {
            name: '无关联维度',
            max: 20
        }]
    },
    series: [{
        name: '',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [{
            value: [11, 1, 1, 9, 10,20],
            name: ''
        }]
    }]
};