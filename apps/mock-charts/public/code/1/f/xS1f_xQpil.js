isPie = 1
option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        text: '广州大学',
        subtext: '各学院人数分布图-Acring',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a}<br/>{b} : {d}%"
    },
    legend: {
        formatter: function(name) {
            return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
        },
        tooltip: {
            show: true
        },
        x: 'center',
        y: 'bottom',
        data: ['计算机科学与教育软件学院', '地理科学学院', '机械与电气工程学院', '经济与统计学院', '土木工程学院', '新闻与传播学院', '外国语学院', '人文学院', '数学与信息科学学院', '工商管理学院', '法学院', '公共管理学院', '卫斯理安学院', '政治与公民教育学院', '旅游学院', '教育学院', '环境科学与工程学院', '化学化工学院', '物理与电子工程学院', '建筑与城市规划学院', '美术与设计学院', '生命科学学院', '体育学院', '音乐舞蹈学院']
    },
    toolbox: {
        right: 30,
        show: true,
        feature: {

            mysetPie: {
                show: true,
                title: '显示大饼图',
                icon: "image://http://omudx2uw8.bkt.clouddn.com/ring0.jpg",
                onclick: function() {
                    if (isPie == 1) {
                        myChart.setOption({
                            series: [{
                                roseType: ""
                            }, {
                                roseType: ""
                            }, {
                                roseType: ""
                            }]
                        })
                        isPie = 0
                    } else {
                        myChart.setOption({
                            series: [{
                                roseType: "radius"
                            }, {
                                roseType: "radius"
                            }, {
                                roseType: "radius"
                            }]
                        })
                        isPie = 1
                    }
                }
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    series: [{
        name: '15届',
        type: 'pie',
        radius: [30, 150],
        center: ['25%', '65%'],
        roseType: 'radius',
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true,
            }
        },
        lableLine: {
            normal: {
                show: true
            },
            emphasis: {
                length: 5,
                show: false
            }
        },
        data: [{
            "name": "计算机科学与教育软件学院",
            "value": 232
        }, {
            "name": "地理科学学院",
            "value": 148
        }, {
            "name": "机械与电气工程学院",
            "value": 369
        }, {
            "name": "经济与统计学院",
            "value": 526
        }, {
            "name": "土木工程学院",
            "value": 341
        }, {
            "name": "新闻与传播学院",
            "value": 398
        }, {
            "name": "外国语学院",
            "value": 264
        }, {
            "name": "人文学院",
            "value": 259
        }, {
            "name": "数学与信息科学学院",
            "value": 162
        }, {
            "name": "工商管理学院",
            "value": 499
        }, {
            "name": "法学院",
            "value": 176
        }, {
            "name": "公共管理学院",
            "value": 163
        }, {
            "name": "卫斯理安学院",
            "value": 3
        }, {
            "name": "政治与公民教育学院",
            "value": 21
        }, {
            "name": "旅游学院",
            "value": 195
        }, {
            "name": "教育学院",
            "value": 202
        }, {
            "name": "环境科学与工程学院",
            "value": 95
        }, {
            "name": "化学化工学院",
            "value": 206
        }, {
            "name": "物理与电子工程学院",
            "value": 165
        }, {
            "name": "建筑与城市规划学院",
            "value": 140
        }, {
            "name": "美术与设计学院",
            "value": 282
        }, {
            "name": "生命科学学院",
            "value": 109
        }, {
            "name": "体育学院",
            "value": 98
        }, {
            "name": "音乐舞蹈学院",
            "value": 130
        }]
    }, {
        name: '14届',
        type: 'pie',
        radius: [30, 150],
        center: ['50%', '30%'],
        roseType: 'area',
        label: {
            normal: {
                show: true,
            },
            emphasis: {
                show: true,
            }
        },
        lableLine: {
            normal: {
                show: true
            },
            emphasis: {
                length: 10,
                show: false
            }
        },
        data: [{
            "name": "地理科学学院",
            "value": 174
        }, {
            "name": "机械与电气工程学院",
            "value": 359
        }, {
            "name": "工商管理学院",
            "value": 9
        }, {
            "name": "法学院",
            "value": 142
        }, {
            "name": "公共管理学院",
            "value": 165
        }, {
            "name": "数学与信息科学学院",
            "value": 163
        }, {
            "name": "环境科学与工程学院",
            "value": 130
        }, {
            "name": "化学化工学院",
            "value": 175
        }, {
            "name": "教育学院",
            "value": 166
        }, {
            "name": "计算机科学与教育软件学院",
            "value": 104
        }, {
            "name": "经济与统计学院",
            "value": 13
        }, {
            "name": "土木工程学院",
            "value": 247
        }, {
            "name": "物理与电子工程学院",
            "value": 183
        }, {
            "name": "建筑与城市规划学院",
            "value": 121
        }, {
            "name": "旅游学院",
            "value": 178
        }, {
            "name": "美术与设计学院",
            "value": 247
        }, {
            "name": "人文学院",
            "value": 201
        }, {
            "name": "生命科学学院",
            "value": 158
        }, {
            "name": "体育学院",
            "value": 104
        }, {
            "name": "外国语学院",
            "value": 185
        }, {
            "name": "新闻与传播学院",
            "value": 305
        }, {
            "name": "音乐舞蹈学院",
            "value": 111
        }]
    }, {
        name: '13届',
        type: 'pie',
        radius: [30, 150],
        center: ['75%', '65%'],
        roseType: 'radius',
        label: {
            normal: {
                show: true,
            },
            emphasis: {
                show: true,
            }
        },
        lableLine: {
            normal: {

                show: true
            },
            emphasis: {
                length: 10,
                show: false
            }
        },
        data: [{
            "name": "地理科学学院",
            "value": 143
        }, {
            "name": "法学院",
            "value": 137
        }, {
            "name": "教育学院",
            "value": 193
        }, {
            "name": "公共管理学院",
            "value": 165
        }, {
            "name": "环境科学与工程学院",
            "value": 156
        }, {
            "name": "工商管理学院",
            "value": 5
        }, {
            "name": "化学化工学院",
            "value": 219
        }, {
            "name": "物理与电子工程学院",
            "value": 216
        }, {
            "name": "计算机科学与教育软件学院",
            "value": 93
        }, {
            "name": "机械与电气工程学院",
            "value": 307
        }, {
            "name": "旅游学院",
            "value": 194
        }, {
            "name": "外国语学院",
            "value": 168
        }, {
            "name": "经济与统计学院",
            "value": 2
        }, {
            "name": "建筑与城市规划学院",
            "value": 132
        }, {
            "name": "数学与信息科学学院",
            "value": 146
        }, {
            "name": "美术与设计学院",
            "value": 263
        }, {
            "name": "人文学院",
            "value": 211
        }, {
            "name": "新闻与传播学院",
            "value": 283
        }, {
            "name": "生命科学学院",
            "value": 203
        }, {
            "name": "土木工程学院",
            "value": 285
        }, {
            "name": "体育学院",
            "value": 110
        }, {
            "name": "音乐舞蹈学院",
            "value": 108
        }]
    }]
};