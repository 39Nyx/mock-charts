app.title = '嵌套环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['新浪微博', '百度贴吧', '天涯论坛']
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
            value: 109,
            name: '正向评论',
            selected: true
        }, {
            value: 12,
            name: '中立'
        }, {
            value: 273,
            name: '负向评论'
        }]
    }, {
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '55%'],

        data: [ {
            value: 132,
            name: '新浪微博'
        }, {
            value:128,
            name: '百度贴吧'
        }, {
            value:100,
            name: '天涯论坛'
        
        }]
    }]
};