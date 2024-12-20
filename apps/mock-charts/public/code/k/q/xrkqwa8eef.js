option = {
    title: {
        text: 'Graph 简单示例'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series : [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: true,
            label: {
                normal: {
                    show: true
                }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            data: [{
                name: '节点1',
                x: 300,
                y: 300,
                ignore:true,
                categories:-1,
                // itemStyle:{
                //     normal:{
                //         opacity:0
                //     }
                // }
            }, {
                name: '节点2',
                x: 800,
                y: 300,
                itemStyle:{
                    normal:{
                        color: {
    type: 'radial',
    x: 0.5,
    y: 0.5,
    r: 0.8,
    colorStops: [{
        offset: 0, color: 'red' // 0% 处的颜色
    }, {
        offset: 1, color: 'black' // 100% 处的颜色
    }],
    // globalCoord: true // 缺省为 false
},
                        // shadowColor: 'rgba(225, 225, 0, 0.5)',
                        // shadowBlur: 40
                    }
                }
            }, {
                name: '节点3',
                x: 550,
                y: 100,
                itemStyle:{
                    normal:{
                        // hadowBlur: 5,
                        // shadowOffsetX:5,
                        // shadowOffsetY:5,
                        borderColor : 'rgba(225, 205, 223, 0.7)',
                        borderWidth : 5
                    }
                }
            }, {
                name: '节点4',
                x: 550,
                y: 500,
                categories:'',
                itemStyle:{
                    normal:{
                        color:'red',
                        shadowColor: 'rgba(225, 225, 0, 0.)',
                        shadowBlur: 5,
                        shadowOffsetX:5,
                        shadowOffsetY:5,
                    }
                }
            }],
            // links: [],
            links: [{
                source: 0,
                target: 1,
                symbolSize: [5, 20],
                label: {
                    normal: {
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 5,
                        curveness: 0.2
                    }
                }
            }, {
                source: '节点2',
                target: '节点1',
                label: {
                    normal: {
                        show: true
                    }
                },
                lineStyle: {
                    normal: { 
                        curveness: 0.2,
                        borderType:'dashed'
                        }
                }
            }, {
                source: '节点1',
                target: '节点3'
            }, {
                source: '节点2',
                target: '节点3'
            }, {
                source: '节点2',
                target: '节点4'
            }, {
                source: '节点1',
                target: '节点4'
            }],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                }
            }
        }
    ]
};