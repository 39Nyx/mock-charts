option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['在线', '离线', '模块A', '模块B', '模块C', '模块D', '模块E', '模块F']
    },
    series: [{
        name: '用户状态',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],

        label: {
            normal: {
                position: 'inner'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 335,
            name: '在线',
            selected: true
        }, {
            value: 679,
            name: '离线'
        }]
    }, {
        name: '用户状态',
        type: 'pie',
        radius: ['40%', '55%'],

        data: [{
            value: 335,
            name: '模块A'
        }, {
            value: 310,
            name: '模块B'
        }, {
            value: 234,
            name: '模块C'
        }, {
            value: 135,
            name: '模块D'
        }, {
            value: 1048,
            name: '模块E'
        }, {
            value: 251,
            name: '模块F'
        }]
    }]
};