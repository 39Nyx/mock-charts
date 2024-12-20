var rawData = [
    {
        value: 3,
        children: [
            {
                name: '指标A1：\n10',
                value: 10,
                itemStyle: {
                    normal: {
                        color: '#fc2d2f'
                    }
                } }, 
            {
                name: '指标A2：\n22',
                value: 10,
                itemStyle: {
                    normal: {
                        color: '#fc3d2f'
                    }
                }},
            {
                name: '指标A3：\n16',
                value: 10,
                itemStyle: {
                    normal: {
                        color: '#fc4d2f'
                    }
                }
            }
        ]
    },
    {
        value: 7,
        children: [
            {
                name: '计算机病毒',
                value: 20,
                itemStyle: {
                    normal: {
                        color: '#ff0600'
                    }
                }}, 
            {
                name: '特洛伊木马',
                value: 10,
                itemStyle: {
                    normal: {
                        color: '#ec644b'
                    }
                }},
            {
                name: '混合攻击程序',
                value: 10,
                itemStyle: {
                    normal: {
                        color: '#d36c2c'
                    }
                }},
            {
                name: '指标B4：\n20',
                value: 10,
                itemStyle: {
                    normal: {
                        color: '#d37c3c'
                    }
                }},
            {
                name: '指标B5：\n12',
                value: 10,
                itemStyle: {
                    normal: {
                        color: '#d38c4c'
                    }
                }}, 
            {
                name: '指标B6：\n13',
                value: 10,
                itemStyle: {
                    normal: {
                        color: '#d39c5c'
                    }
                }
            }
        ]
    },
    {
        value: 3,
        children: [
            {
                name: '指标C1：\n10',
                value: 17,
                itemStyle: {
                    normal: {
                        color: '#71caa5'
                    }
                }}, 
            {
                name: '指标C2：\n20',
                value: 10,
                itemStyle: {
                    normal: {
                        color: '#71caa5'
                    }
                }},
            {
                name: '指标C3：\n26',
                value: 10,
                itemStyle: {
                    normal: {
                        color: '#71caa5'
                    }
                }},
            {
                name: '指标C4：\n11',
                value: 10,
                itemStyle: {
                    normal: {
                        color: '#71caa5'
                    }
                }
            }
        ]
    }
];


option = {
  
    tooltip: {
        trigger: 'item',
        formatter: "{b}"  //显示tooltip时，只显示name
    },

    calculable: false,
    series: [{
        name: '矩形图',
        type: 'treemap',
        width: 618,
        height: 290,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    //formatter: "{b}",
                    fontSize: 15
                },

                borderWidth: 1
            },
            emphasis: {
                label: {
                    show: true
                }
            }
        },
        label: {
            normal: {
                textStyle: {
                    fontSize: 15,
                    //formatter: "{b}"
                }
            }
        },
        breadcrumb: {//关闭面包屑路径
            show: false
        },
        roam: false,//关闭平移拖动
        nodeClick: false,//关闭节点点击
        silent: false,//关闭鼠标事件
        data: rawData
    }]
};