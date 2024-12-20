option = {
    backgroundColor: '#212121',
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        type: 'graph',
        layout: 'none',
        symbolSize: (value) => {
            return value * 2;
        },
        coordinateSystem: null,
        label: {
            normal: {
                show: true,
                position: 'bottom',
                color: '#ffffff'
            }
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: 8,
        categories: [{
            name: '资本',
            itemStyle: {
                normal: {
                    color: '#e43c59', //红
                }
            },
            label: {
                normal: {
                    fontSize: '14'
                }
            },
        }, {
            name: '大公司',
            itemStyle: {
                normal: {
                    color: 'yellow', //黄
                }
            },
            label: {
                normal: {
                    fontSize: '20'
                }
            },
        }, {
            name: '小公司',
            itemStyle: {
                normal: {
                    color: 'green', //绿
                }
            },
            label: {
                normal: {
                    fontSize: '14'
                }
            },
        }],
        data: [{
            name: '节点1',
            x: 300,
            y: 80,
            value: 20,
            category: 0
        }, {
            name: '节点2',
            x: 300,
            y: 150,
            value: 30,
            category: 0
        }, {
            name: '节点3',
            x: 550,
            y: 150,
            value: 40,
            category: 1
        }, {
            name: '节点4',
            x: 750,
            y: 80,
            value: 25,
            category: 2
        }, {
            name: '节点5',
            x: 750,
            y: 150,
            value: 25,
            category: 2
        }, {
            name: '节点6',
            x: 750,
            y: 220,
            value: 25,
            category: 2
        }],
        links: [{
            source: '节点1',
            target: '节点3',
            lineStyle: {
                normal: {
                    color: '#f5cb62',  //节点1到节点3的连线的颜色
                    curveness: -0.1,
                }
            },
        }, {
            source: '节点2',
            target: '节点3',
            lineStyle: {
                normal: {
                    curveness: 0,
                    color: '#f5cb62'
                }
            },
        }, {
            source: '节点3',
            target: '节点4',
            lineStyle: {
                normal: {
                    curveness: -0.1,
                    color: '#43a6f7'
                }
            }
        }, {
            source: '节点3',
            target: '节点5',
            lineStyle: {
                normal: {
                    curveness: 0,
                    color: '#43a6f7'
                }
            }
        }, {
            source: '节点3',
            target: '节点6',
            lineStyle: {
                normal: {
                    curveness: 0.1,
                    color: '#43a6f7'
                }
            }
        }]
    }]
};