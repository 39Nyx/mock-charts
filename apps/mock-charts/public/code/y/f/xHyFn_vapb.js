var option = {
    backgroundColor: '#001C69',
    title: {
        text: '武汉分公司全口径折扣分析',
        x: 'center',
        textStyle: {
            align: 'center',
            fontSize: '180%',
            color: '#ffffff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    grid: {
        x: '10%',
        y: '10%'
    },
    series: [{
        name: '全口径折扣',
        type: 'pie',
        selectedMode: 'single',
        center: ['55%', '55%'],
        radius: [0, '30%'],
        itemStyle: {
            normal: {

            },
        },
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
            value: 60,
            name: '消费折扣',
            selected: true
        }, {
            value: 10,
            name: '储值折扣'
        }, {
            value: 30,
            name: '挂牌直降折扣'
        }]
    }, {
        name: '折扣明细',
        type: 'pie',
        center: ['55%', '55%'],
        radius: ['40%', '55%'],
        legendHoverLink: true, // 是否启用图例 hover 时的联动高亮
        hoverAnimation: true, // 是否开启 hover 在扇区上的放大动画效果
        hoverOffset: 15, // 高亮扇区的偏移距离
        selectedMode: 'single', // 选中模式
        selectedOffset: 15, // 选中偏移距离
        animationType: 'scale', // 展开效果
        itemStyle: {
            normal: {

            },
        },
        label: {
            normal: {
                // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                formatter: '{a|{b}}\n{hr|}\n{c}  {per|{d}%}',
                // backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                    a: {
                        color: '#999',
                        fontSize: 10,
                        lineHeight: 20,
                        align: 'center'
                    },
                    // abg: {
                    //     backgroundColor: '#333',
                    //     width: '100%',
                    //     align: 'right',
                    //     height: 22,
                    //     borderRadius: [4, 4, 0, 0]
                    // },
                    hr: {
                        borderColor: '#aaa',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                    },
                    b: {
                        fontSize: 10,
                        lineHeight: 20
                    },
                    per: {
                        color: '#eee',
                        backgroundColor: '#334455',
                        padding: [2, 4],
                        borderRadius: 2
                    }
                }
            }
        },
        data: [{
            value: 40,
            name: '活动卡折扣',
            itemStyle: {
                normal: {
                    color: '#FF3300'
                }
            }
        }, {
            value: 20,
            name: '卡消费折扣',
            itemStyle: {
                normal: {
                    color: '#FFFF00'
                }
            }
        }, {
            value: 20,
            name: '电子券折扣',
            itemStyle: {
                normal: {
                    color: '#00FF00'
                }
            }
        }, {
            value: 10,
            name: '消费返利',
            itemStyle: {
                normal: {
                    color: '#1E90FF'
                }
            }
        }, {
            value: 10,
            name: '梯级优惠',
            itemStyle: {
                normal: {
                    color: '#ADFF2F'
                }
            }
        }]
    }]
};