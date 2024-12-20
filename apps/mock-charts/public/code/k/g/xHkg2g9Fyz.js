option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        text: "陕西理工大学数据分析",
        subtext: "各学院专业关系（注：此数据来源于百度百科，仅做部分数据关系）",
        top: "top",
        left: "left"
    },
    tooltip: {},
    legend: [{
        formatter: function(name) {
            return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
        },
        tooltip: {
            show: true
        },
        itemWidth: 10,
        itemHeight: 10,
        selectedMode: 'false',
        bottom: 15,
        data: ['经济与法学学院',
            '体育学院',
            '文学院',
            '艺术学院',
            '化学与环境科学学院',
            '机械工程学院',
            '材料科学与工程学院',
            '生物科学与工程学院',
            '数学与计算机科学学院',
            '管理学院',
            '教育科学学院',
            '外国语学院',
            '物理与电信工程学院',
            '电气工程学院',
            '土木工程与建筑学院',
            '历史文化与旅游学院'
        ]
    }],
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    animationDuration: 3000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '陕西理工大学',
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 50
        },
        data: [{
                "name": "陕西理工大学",
                "draggable": "true",
                "symbolSize": 20,
                "value": 27
            }, {
                "name": "外国语学院",
                "value": 6,
                "symbolSize": 10,
                "category": "外国语学院",
                "draggable": "true"
            }, {
                "name": "英语专业",
                "symbolSize": 5,
                "category": "外国语学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "日语专业",
                "symbolSize": 5,
                "category": "外国语学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "历史文化与旅游学院",
                "value": 6,
                "symbolSize": 10,
                "category": "历史文化与旅游学院",
                "draggable": "true"
            }, {
                "name": "历史学",
                "symbolSize": 5,
                "category": "历史文化与旅游学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "地理学",
                "symbolSize": 5,
                "category": "历史文化与旅游学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "旅游管理学",
                "symbolSize": 5,
                "category": "历史文化与旅游学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "图书馆学",
                "symbolSize": 5,
                "category": "历史文化与旅游学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "经济与法学学院",
                "value": 6,
                "symbolSize": 10,
                "category": "经济与法学学院",
                "draggable": "true"
            }, {
                "name": "体育学院",
                "value": 6,
                "symbolSize": 10,
                "category": "体育学院",
                "draggable": "true"
            }, {
                "name": "文学院",
                "value": 6,
                "symbolSize": 10,
                "category": "文学院",
                "draggable": "true"
            }, {
                "name": "艺术学院",
                "value": 6,
                "symbolSize": 10,
                "category": "艺术学院",
                "draggable": "true"
            }, {
                "name": "化学与环境科学学院",
                "value": 6,
                "symbolSize": 10,
                "category": "化学与环境科学学院",
                "draggable": "true"
            }, {
                "name": "土木工程与建筑学院",
                "value": 6,
                "symbolSize": 10,
                "category": "土木工程与建筑学院",
                "draggable": "true"
            }, {
                "name": "电气工程学院",
                "value": 6,
                "symbolSize": 10,
                "category": "电气工程学院",
                "draggable": "true"
            }, {
                "name": "物理与电信工程学院",
                "value": 6,
                "symbolSize": 10,
                "category": "物理与电信工程学院",
                "draggable": "true"
            }, {
                "name": "教育科学学院",
                "value": 6,
                "symbolSize": 10,
                "category": "教育科学学院",
                "draggable": "true"
            }, {
                "name": "管理学院",
                "value": 6,
                "symbolSize": 10,
                "category": "管理学院",
                "draggable": "true"
            }, {
                "name": "数学与计算机科学学院",
                "value": 6,
                "symbolSize": 10,
                "category": "数学与计算机科学学院",
                "draggable": "true"
            }, {
                "name": "生物科学与工程学院",
                "value": 6,
                "symbolSize": 10,
                "category": "生物科学与工程学院",
                "draggable": "true"
            }, {
                "name": "材料科学与工程学院",
                "value": 6,
                "symbolSize": 10,
                "category": "材料科学与工程学院",
                "draggable": "true"
            }, {
                "name": "机械工程学院",
                "value": 6,
                "symbolSize": 10,
                "category": "机械工程学院",
                "draggable": "true"
            }, {
                "name": "法学",
                "value": 6,
                "symbolSize": 5,
                "category": "经济与法学学院",
                "draggable": "true"
            }, {
                "name": "国际经济与贸易",
                "value": 6,
                "symbolSize": 5,
                "category": "经济与法学学院",
                "draggable": "true"
            }, {
                "name": "经济学",
                "value": 6,
                "symbolSize": 5,
                "category": "经济与法学学院",
                "draggable": "true"
            }, {
                "name": "政教",
                "value": 6,
                "symbolSize": 5,
                "category": "经济与法学学院",
                "draggable": "true"
            }, {
                "name": "体育教育",
                "value": 6,
                "symbolSize": 5,
                "category": "体育学院",
                "draggable": "true"
            }, {
                "name": "运动训练",
                "value": 6,
                "symbolSize": 5,
                "category": "体育学院",
                "draggable": "true"
            }, {
                "name": "社会体育指导与管理",
                "value": 6,
                "symbolSize": 5,
                "category": "体育学院",
                "draggable": "true"
            }, {
                "name": "汉语言文学",
                "value": 6,
                "symbolSize": 5,
                "category": "文学院",
                "draggable": "true"
            }, {
                "name": "广播电视学",
                "value": 6,
                "symbolSize": 5,
                "category": "文学院",
                "draggable": "true"
            }, {
                "name": "秘书学",
                "value": 6,
                "symbolSize": 5,
                "category": "文学院",
                "draggable": "true"
            }, {
                "name": "汉语国际教育",
                "value": 6,
                "symbolSize": 5,
                "category": "文学院",
                "draggable": "true"
            },






        ],
        links: [{
                "source": "陕西理工大学",
                "target": "经济与法学学院"
            }, {
                "source": "陕西理工大学",
                "target": "体育学院"
            }, {
                "source": "陕西理工大学",
                "target": "文学院"
            }, {
                "source": "陕西理工大学",
                "target": "艺术学院"
            }, {
                "source": "陕西理工大学",
                "target": "化学与环境科学学院"
            }, {
                "source": "陕西理工大学",
                "target": "机械工程学院"
            }, {
                "source": "陕西理工大学",
                "target": "材料科学与工程学院"
            }, {
                "source": "陕西理工大学",
                "target": "生物科学与工程学院"
            }, {
                "source": "陕西理工大学",
                "target": "数学与计算机科学学院"
            }, {
                "source": "陕西理工大学",
                "target": "管理学院"
            }, {
                "source": "陕西理工大学",
                "target": "教育科学学院"
            }, {
                "source": "陕西理工大学",
                "target": "外国语学院"
            }, {
                "source": "陕西理工大学",
                "target": "物理与电信工程学院"
            }, {
                "source": "陕西理工大学",
                "target": "电气工程学院"
            }, {
                "source": "陕西理工大学",
                "target": "土木工程与建筑学院"
            }, {
                "source": "陕西理工大学",
                "target": "历史文化与旅游学院"
            }, {
                "source": "外国语学院",
                "target": "英语专业"
            }, {
                "source": "外国语学院",
                "target": "日语专业"
            }, {
                "source": "历史文化与旅游学院",
                "target": "历史学"
            }, {
                "source": "历史文化与旅游学院",
                "target": "地理学"
            }, {
                "source": "历史文化与旅游学院",
                "target": "旅游管理学"
            }, {
                "source": "历史文化与旅游学院",
                "target": "图书馆学"
            }, {
                "source": "外国语学院",
                "target": "政教"
            }, {
                "source": "外国语学院",
                "target": "经济学"
            }, {
                "source": "外国语学院",
                "target": "国际经济与贸易"
            }, {
                "source": "外国语学院",
                "target": "法学"
            }, {
                "source": "体育学院",
                "target": "体育教育"
            }, {
                "source": "体育学院",
                "target": "运动训练"
            }, {
                "source": "体育学院",
                "target": "社会体育指导与管理"
            }, {
                "source": "文学院",
                "target": "汉语言文学"
            }, {
                "source": "文学院",
                "target": "广播电视学"
            }, {
                "source": "文学院",
                "target": "秘书学"
            }, {
                "source": "文学院",
                "target": "汉语国际教育"
            },

        ],
        categories: [{
            'name': '经济与法学学院'
        }, {
            'name': '体育学院'
        }, {
            'name': '文学院'
        }, {
            'name': '艺术学院'
        }, {
            'name': '化学与环境科学学院'
        }, {
            'name': '机械工程学院'
        }, {
            'name': '材料科学与工程学院'
        }, {
            'name': '生物科学与工程学院'
        }, {
            'name': '数学与计算机科学学院'
        }, {
            'name': '管理学院'
        }, {
            'name': '教育科学学院'
        }, {
            'name': '外国语学院'
        }, {
            'name': '物理与电信工程学院'
        }, {
            'name': '电气工程学院'
        }, {
            'name': '土木工程与建筑学院'
        }, {
            'name': '历史文化与旅游学院'
        }],
        focusNodeAdjacency: true,
        roam: true,
        label: {
            normal: {

                show: true,
                position: 'top',

            }
        },
        lineStyle: {
            normal: {
                color: 'source',
                curveness: 0,
                type: "solid"
            }
        }
    }]
};