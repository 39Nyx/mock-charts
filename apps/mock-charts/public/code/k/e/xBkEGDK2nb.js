option = {
    title: {
        text: '10.1 00:00 - 10.2 00:00',
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
            "value": "67"
        }, {
            "name": "云南",
            "value": "20"
        }, {
            "name": "内蒙古",
            "value": "49"
        }, {
            "name": "北京",
            "value": "160"
        }, {
            "name": "台湾",
            "value": "1"
        }, {
            "name": "吉林",
            "value": "38"
        }, {
            "name": "四川",
            "value": "103"
        }, {
            "name": "天津",
            "value": "257"
        }, {
            "name": "宁夏",
            "value": "5"
        }, {
            "name": "安徽",
            "value": "281"
        }, {
            "name": "山东",
            "value": "83"
        }, {
            "name": "山西",
            "value": "294"
        }, {
            "name": "广东",
            "value": "1418"
        }, {
            "name": "广西",
            "value": "80"
        }, {
            "name": "新疆维吾尔",
            "value": "14"
        }, {
            "name": "江苏",
            "value": "397"
        }, {
            "name": "江西",
            "value": "136"
        }, {
            "name": "河北",
            "value": "468"
        }, {
            "name": "河南",
            "value": "218"
        }, {
            "name": "浙江",
            "value": "234"
        }, {
            "name": "海南",
            "value": "297"
        }, {
            "name": "湖北",
            "value": "139"
        }, {
            "name": "湖南",
            "value": "240"
        }, {
            "name": "甘肃",
            "value": "4"
        }, {
            "name": "福建",
            "value": "165"
        }, {
            "name": "贵州",
            "value": "163"
        }, {
            "name": "辽宁",
            "value": "238"
        }, {
            "name": "重庆",
            "value": "20"
        }, {
            "name": "陕西",
            "value": "95"
        }, {
            "name": "青海",
            "value": "1"
        }, {
            "name": "香港",
            "value": "7"
        }, {
            "name": "黑龙江",
            "value": "46"
        }]

    }, ]
};