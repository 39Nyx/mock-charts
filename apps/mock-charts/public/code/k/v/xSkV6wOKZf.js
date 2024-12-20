option = {

    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c}"
    },

    calculable: true,
    series: [{

        name: '资产接入',
        type: 'treemap',
        width: '90%',
        height: '90%',
        roam: true, //是否开启拖拽漫游（移动和缩放）
        nodeClick: false, //点击节点后的行为,false无反应
        label: {
            normal: {
                textStyle: {
                    fontWeight: 'bold',
                    fontSize: '16',
                }

            }

        },
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    formatter: "{b}"
                },
                borderWidth: 0.51,
                borderColor: '#ccc'
            },
            /* emphasis: {
                 label: {
                     show: true
                 },
                 color: '#cc99cc',
                 borderWidth: 3,
                 borderColor: '#996699'
             }*/
        },
        data: [{
            value: 4,
            name: '哲学',
            itemStyle: {
                normal: {
                    color: '#c33430',
                }
            },
}, {
            value: 33,
            name: '法学',
            itemStyle: {
                normal: {
                    color: '#2e4454',
                }
            },
}, {
            value: 6,
            name: '历史学',
            itemStyle: {
                normal: {
                    color: '#B7B7B7',
                }
            },
        
        
 }, {
            value: 44,
            name: '医学',
            itemStyle: {
                normal: {
                    color: '#D8BFD8',
                }
            },
 }, {
            value: 25,
            name: '管理学',
            itemStyle: {
                normal: {
                    color: '#FFB6C1',
                }
            },
 }, {
            value: 33,
            name: '艺术学',
            itemStyle: {
                normal: {
                    color: '#6B8E23',
                }
            },
            
        }, {
            value: 198,
            name: '理学',
            itemStyle: {
                normal: {
                    color: '#d48363',
                }
            },


        }, {
            value: 17,
            itemStyle: {
                normal: {
                    color: '#EEC591',
                }
            },

            children: [{
                    name: '经济学类',
                    value: 6,

                }, {
                    name: '金融学类',
                    value: 7,

                }, {
                    name: '财政学类',
                    value: 2,

                }, {
                    name: '经济与贸易学类',
                    value: 2,

                }

            ]
        }, {
            value: 76,
            itemStyle: {
                normal: {
                    color: '#A2B5CD',
                }
            },

            children: [{
                    name: '中国语言文学系',
                    value: 7,

                }, {
                    name: '外国语言文学系',
                    value: 62,

                }, {
                    name: '新闻传播系',
                    value: 7,
                }

            ]
 }, {
            value: 16,
            itemStyle: {
                normal: {
                    color: '#DAA520',
                }
            },

            children: [{
                    name: '教育学类',
                    value: 9,
                }, {
                    name: '体育学类',
                    value: 7,
                }

            ]
        }, {
            value: 28,
            name: '农学',
            itemStyle: {
                normal: {
                    color: '#719d80',
                }
            }

        }]
    }]
};