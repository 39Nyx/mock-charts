option = {
    series : [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 20,
            roam: true,
            label: {
                position:'bottom',
                distance:10,
                show:true,
            },
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            data: [{
                name: '贵阳北站',
                x: 0,
                y: 0
            }, {
                name: '白鹭湖站',
                x: 200,
                y: 0
            }, {
                name: '阳关站',
                x: 400,
                y: 0
            }, {
                name: '国际生态\n\n会议中心站',
                x: 600,
                y: 0
            },{
                name: '新寨站',
                x: 800,
                y: 0
            },{
                name: '观山湖公园站',
                x: 1000,
                y: 0
            },{
                name: '林城西湖站',
                x: 1200,
                y: 0
            },{
                name: '阅山湖公园站',
                x: 1400,
                y: 0
            },{
                name: '老湾塘站',
                x: 1600,
                y: 0
            },{
                name: '下麦西站',
                x: 1800,
                y: 0
            }],
            links: [{
                source: 0,
                target: 1,
                label: {
                    show:true,
                    position:'middle',
                    formatter:'200'
                
                },
                lineStyle: {
                    width: 5,
                }
            },{
                source: 1,
                target: 2,
                label: {
                    show:true,
                    position:'middle',
                    formatter:'200'
                
                },
                lineStyle: {
                    width: 5,
                }
            },{
                source: 2,
                target: 3,
                label: {
                    show:true,
                    position:'middle',
                    formatter:'200'
                
                },
                lineStyle: {
                    width: 5,
                }
            },{
                source: 3,
                target: 4,
                label: {
                    show:true,
                    position:'middle',
                    formatter:'200'
                
                },
                lineStyle: {
                    width: 5,
                }
            },{
                source: 4,
                target: 5,
                label: {
                    show:true,
                    position:'middle',
                    formatter:'200'
                
                },
                lineStyle: {
                    width: 5,
                }
            },{
                source: 5,
                target: 6,
                label: {
                    show:true,
                    position:'middle',
                    formatter:'200'
                
                },
                lineStyle: {
                    width: 5,
                }
            },{
                source: 6,
                target: 7,
                label: {
                    show:true,
                    position:'middle',
                    formatter:'200'
                
                },
                lineStyle: {
                    width: 5,
                }
            },{
                source: 7,
                target: 8,
                label: {
                    show:true,
                    position:'middle',
                    formatter:'200'
                
                },
                lineStyle: {
                    width: 5,
                }
            },{
                source: 8,
                target: 9,
                label: {
                    show:true,
                    position:'middle',
                    formatter:'200'
                
                },
                lineStyle: {
                    width: 5,
                }
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