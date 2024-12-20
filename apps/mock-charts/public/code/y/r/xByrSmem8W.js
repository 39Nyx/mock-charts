function randomData() {
    return Math.round(Math.random() * 1000);
}

option = {
    title: {
        text: '较大及以上交通事故死亡人数',
        subtext: '2016年',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['iphone3', 'iphone4', 'iphone5']
    },
    visualMap: {
        min: 0,
        max: 200,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'], // 文本，默认为数值文本
        calculable: true
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    series: [{
            name: '2016年交通事故死亡人数',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                name: '北京',
                value: 0
            }, {
                name: '天津',
                value: 104
            }, {
                name: '上海',
                value: 0
            }, {
                name: '重庆',
                value: 15
            }, {
                name: '河北',
                value: 14
            }, {
                name: '河南',
                value: 52
            }, {
                name: '云南',
                value: 175
            }, {
                name: '辽宁',
                value: 180
            }, {
                name: '黑龙江',
                value: 95
            }, {
                name: '湖南',
                value: 134
            }, {
                name: '安徽',
                value: 161
            }, {
                name: '山东',
                value: 102
            }, {
                name: '新疆',
                value: 66
            }, {
                name: '江苏',
                value: 30
            }, {
                name: '浙江',
                value: 122
            }, {
                name: '江西',
                value: 88
            }, {
                name: '湖北',
                value: 50
            }, {
                name: '广西',
                value: 76
            }, {
                name: '甘肃',
                value: 52
            }, {
                name: '山西',
                value: 90
            }, {
                name: '内蒙古',
                value: 12
            }, {
                name: '陕西',
                value: 7
            }, {
                name: '吉林',
                value: 21
            }, {
                name: '福建',
                value: 74
            }, {
                name: '贵州',
                value: 106
            }, {
                name: '广东',
                value: 142
            }, {
                name: '青海',
                value: 15
            }, {
                name: '西藏',
                value: 22
            }, {
                name: '四川',
                value: 94
            }, {
                name: '宁夏',
                value: 11
            }, {
                name: '海南',
                value: 26
            }, {
                name: '台湾',
                value: 0
            }, {
                name: '香港',
                value: 0
            }, {
                name: '澳门',
                value: 0
            }]
        },

    ]
};