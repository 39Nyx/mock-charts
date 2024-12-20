app.title = '嵌套环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['明星蹭热度', '态度', '，专业', '微博', '贴吧', '搜狐']
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
            name: '明星蹭热度',
            selected: true
        }, {
            value: 30,
            name: '态度'
        }, {
            value:159,
            name: '专业'
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
            name: '搜狐'
        }, {
          
        }]
    }]
};