app.title = '嵌套环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['政史地', '理化生', '地化生', '生史地', '生政史', '化史地',
            '理生地', '史化生', '化政生', '政地生', '理化地', '理化史', '理史地',
            '政化地', '理化政', '理生史', '理政地', '政史化', '理生政']
			},
    series: [{
        name: '选课',
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
            value: 158,
            name: '男生158',
            selected: true
        }, {
            value: 203,
            name: '女生203'
        }, ]
    }, {
        name: '选课',
        type: 'pie',
        radius: ['40%', '55%'],

        data: [{
                value: 81,
                name: '政史地'
            }, {
                value: 68,
                name: '理化生'
            }, {
                value: 47,
                name: '地化生'
            }, {
                value: 30,
                name: '生史地'
            }, {
                value: 21,
                name: '生史政'
            }, {
                value: 19,
                name: '化史地'
            }, {
                value: 17,
                name: '理生地'
            }, {
                value: 12,
                name: '史化生'
            }, {
                value: 10,
                name: '化政生'
            }, {
                value: 9,
                name: '政地生'
            }, {
                value: 8,
                name: '理化地'
            }, {
                value: 7,
                name: '理化史'
            }, {
                value: 6,
                name: '理史地'
            }, {
                value: 6,
                name: '政化地'
            }, {
                value: 6,
                name: '理化政'
            }, {
                value: 6,
                name: '理生史'
            }, {
                value: 4,
                name: '理政地'
            }, {
                value: 3,
                name: '政史化'
            }, {
                value: 1,
                name: '理生政'
            },

        ]
    }]
};