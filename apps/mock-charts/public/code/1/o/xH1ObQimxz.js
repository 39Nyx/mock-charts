app.title = '嵌套环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['小黄车责任', '都有责任', '监护人责任', '微博', '贴吧', '知乎', '网页']
    },
    series: [{
        name: '访问来源',
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
            value: 11,
            name: '小黄车责任',
            selected: true
        }, {
            value: 30,
            name: '都有责任'
        }, {
            value:159,
            name: '监护人责任'
        }]
    }, {
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '55%'],

        data: [ {
            value: 190,
            name: '微博'
        }, {
            value: 50,
            name: '贴吧'
        }, {
            value:22,
            name: '知乎'
        }, {
            value: 36,
            name: '网页'
        }]
    }]
};