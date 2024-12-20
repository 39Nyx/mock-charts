option = {
    title: {
        text: '9.30 15:00 - 10.1 00:00',
        subtext: '',
        x: 'center'
    },
    tooltip: {
        trigger: 'item'
    },

    dataRange: {
        min: 0,
        max: 4000,
        x: 'left',
        y: 'bottom',

        text: ['高', '低'], // 文本，默认为数值文本
        calculable: false,

        splitNumber: 0,


        color: ['orangered', 'gold', 'yellow', 'green', 'lightgreen', 'lightgrey']
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        x: 'right',
        y: 'center',
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            dataZoom: {
                show: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    roamController: {
        show: true,
        x: 'right',
        mapTypeControl: {
            'china': true
        }
    },
    series: [{
        name: 'Number',
        type: 'map',
        mapType: 'china',
        roam: false,
        itemStyle: {
            normal: {
                label: {
                    show: true
                }
            },
            emphasis: {
                label: {
                    show: true
                }
            }
        },
        data: [{
            "name": "上海",
            "value": "563"
        }, {
            "name": "云南",
            "value": "271"
        }, {
            "name": "内蒙古",
            "value": "444"
        }, {
            "name": "北京",
            "value": "408"
        }, {
            "name": "台湾",
            "value": "2"
        }, {
            "name": "吉林",
            "value": "148"
        }, {
            "name": "四川",
            "value": "510"
        }, {
            "name": "天津",
            "value": "684"
        }, {
            "name": "宁夏",
            "value": "46"
        }, {
            "name": "安徽",
            "value": "1002"
        }, {
            "name": "山东",
            "value": "796"
        }, {
            "name": "山西",
            "value": "570"
        }, {
            "name": "广东",
            "value": "5335"
        }, {
            "name": "广西",
            "value": "314"
        }, {
            "name": "新疆维吾尔",
            "value": "44"
        }, {
            "name": "江苏",
            "value": "3605"
        }, {
            "name": "江西",
            "value": "600"
        }, {
            "name": "河北",
            "value": "894"
        }, {
            "name": "河南",
            "value": "794"
        }, {
            "name": "浙江",
            "value": "1858"
        }, {
            "name": "海南",
            "value": "123"
        }, {
            "name": "湖北",
            "value": "545"
        }, {
            "name": "湖南",
            "value": "1120"
        }, {
            "name": "澳门",
            "value": "4"
        }, {
            "name": "甘肃",
            "value": "30"
        }, {
            "name": "福建",
            "value": "1112"
        }, {
            "name": "西藏",
            "value": "3"
        }, {
            "name": "贵州",
            "value": "857"
        }, {
            "name": "辽宁",
            "value": "340"
        }, {
            "name": "重庆",
            "value": "212"
        }, {
            "name": "陕西",
            "value": "446"
        }, {
            "name": "青海",
            "value": "11"
        }, {
            "name": "香港",
            "value": "8"
        }, {
            "name": "黑龙江",
            "value": "98"
        }]

    }, ]
};