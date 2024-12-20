option = {
    tooltip: {},
    graphic: [{
        type: 'group',
        left: 0,
        top: 0,
        children: [
            // 生产区
            {
                type: 'rect',
                z: 1,
                left: 0,
                top: 0,
                shape: {
                    width: 400,
                    height: 400
                },
                style: {
                    fill: '#fff',
                    stroke: '#8EC9EB',
                    lineWidth: 1,
                    shadowBlur: 0,

                }
            }, {
                type: 'text',
                z: 2,
                left: 10,
                top: 10,
                style: {
                    fill: '#8EC9EB',
                    text: "生产区",
                    font: '14px Microsoft YaHei'
                }
            },
            // 内网核心
            {
                type: 'rect',
                z: 1,
                left: 400,
                top: 0,
                shape: {
                    width: 400,
                    height: 600
                },
                style: {
                    fill: '#fff',
                    stroke: '#8EC9EB',
                    lineWidth: 1,
                    shadowBlur: 0,

                }
            }, {
                type: 'text',
                z: 2,
                left: 410,
                top: 10,
                style: {
                    fill: '#8EC9EB',
                    text: "内网核心",
                    font: '14px Microsoft YaHei'
                }
            },
            // 灾备中心
            {
                type: 'rect',
                z: 1,
                left: 800,
                top: 0,
                shape: {
                    width: 400,
                    height: 200
                },
                style: {
                    fill: '#fff',
                    stroke: '#8EC9EB',
                    lineWidth: 1,
                    shadowBlur: 0,

                }
            }, {
                type: 'text',
                z: 2,
                left: 810,
                top: 10,
                style: {
                    fill: '#8EC9EB',
                    text: "灾备中心",
                    font: '14px Microsoft YaHei'
                }
            },
            // 办公区
            {
                type: 'rect',
                z: 1,
                left: 0,
                top: 400,
                shape: {
                    width: 400,
                    height: 400
                },
                style: {
                    fill: '#fff',
                    stroke: '#8EC9EB',
                    lineWidth: 1,
                    shadowBlur: 0,

                }
            }, {
                type: 'text',
                z: 2,
                left: 10,
                top: 410,
                style: {
                    fill: '#8EC9EB',
                    text: "办公区",
                    font: '14px Microsoft YaHei'
                }
            },
            // 隔离区
            {
                type: 'rect',
                z: 1,
                left: 400,
                top: 600,
                shape: {
                    width: 400,
                    height: 200
                },
                style: {
                    fill: '#fff',
                    stroke: '#8EC9EB',
                    lineWidth: 1,
                    shadowBlur: 0,

                }
            }, {
                type: 'text',
                z: 2,
                left: 410,
                top: 610,
                style: {
                    fill: '#8EC9EB',
                    text: "隔离区",
                    font: '14px Microsoft YaHei'
                }
            },
            // 网管区
            {
                type: 'rect',
                z: 1,
                left: 800,
                top: 200,
                shape: {
                    width: 400,
                    height: 600
                },
                style: {
                    fill: '#fff',
                    stroke: '#8EC9EB',
                    lineWidth: 1,
                    shadowBlur: 0,

                }
            }, {
                type: 'text',
                z: 2,
                left: 810,
                top: 610,
                style: {
                    fill: '#8EC9EB',
                    text: "网管区",
                    font: '14px Microsoft YaHei'
                }
            }

        ]

    }],
    // xAxis: {
    //     show: false,
    //     // type : 'category',
    //     // boundaryGap : false,
    //     // data : axisData
    //     type: 'value'
    // },
    // yAxis: {
    //     show: false,
    //     type: 'value'
    // },
    // legend: [{
    //     data: ['正常', '异常']
    // }],
    series: [{
        type: 'graph',
        // coordinateSystem: 'cartesian2d',
        layout: 'none',
        // symbol: 'image://img/img1.png',
        roam: 'move',
        left: 50,
        top: 50,
        width: 1600,
        height: 810,
        // width: '100%',
        // height: '100%',
        // coordinateSystem: 'cartesian2d',
        edgeLabel: {
            normal: {
                show: false
            },
            emphasis: {
                textStyle: {
                    fontSize: 20 //边节点显示的字体大小
                }
            }
        },
        lineStyle: {
            normal: {
                show: true,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'red' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'blue' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },

                // curveness: 0.2

            },
            emphasis: {
                color: 'red',
                width: 3,
                type: 'dashed', //虚线

            }
        },
        // 节点信息
        data: [{
            name: '交换机1',
            x: 0,
            y: 0,
            // symbol: 'image://img/img1.png',
            symbol: 'circle',
            symbolSize: 50,
            label: {
                normal: {
                    show: true,
                    color: '#000',
                    offset: [10, 20]
                }
            }
            // symbolOffset: [0, 0]
        }, {
            name: '交换机2',
            x: 40,
            y: 80,
            // symbol: 'image://img/img2.png',
            symbol: 'circle',
            symbolSize: 50
                // symbolOffset: [0, 0]
        }, {
            name: '交换机3',
            x: 100,
            y: 100,
            // symbol: 'image://img/img2.png',
            symbol: 'circle',
            symbolSize: 50
                // symbolOffset: [0, 0]
        }, {
            name: '交换机4',
            x: 50,
            y: 50,
            // symbol: 'image://img/img2.png',
            symbol: 'circle',
            symbolSize: 50
                // symbolOffset: [0, 0]
        }],
        links: [{
            source: '交换机1',
            target: '交换机2',
            name: '连接1'
        }, {
            source: '交换机2',
            target: '交换机3',
            name: '连接2'
        }, {
            source: '交换机3',
            target: '交换机4',
            name: '连接3'
        }]

    }]
};