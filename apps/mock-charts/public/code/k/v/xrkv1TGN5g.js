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
            value: 10,
            name: 'DeepEdge',
            itemStyle: {
                normal: {
                    color: '#c33430',
                }
            },


        }, {
            value: 10,
            name: 'TDA',
            itemStyle: {
                normal: {
                    color: '#2e4454',
                }
            },


        }, {
            value: 10,
            name: 'OfficeS',
            itemStyle: {
                normal: {
                    color: '#5fa1a8',
                }
            },

        }, {
            value: 10,
            name: 'DeepSecurity',
            itemStyle: {
                normal: {
                    color: '#d48363',
                }
            },


        }, {
            value: 10,
            itemStyle: {
                normal: {
                    color: '#91c7af',
                }
            },

            children: [{
                    name: 'NetScreen',
                    value: 4,

                }, {
                    name: 'Power',
                    value: 3,

                }, {
                    name: 'Fortigate',
                    value: 2,

                }, {
                    name: 'H3C',
                    value: 1,

                }

            ]
        }, {
            value: 10,
            name: 'P1600A',
            itemStyle: {
                normal: {
                    color: '#719d80',
                }
            }

        }]
    }]
};