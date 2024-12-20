option = {
    title: {
        text: '全流程监控'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
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
                name: '可研',

                x: 100,
                y: 300
            },

            {
                name: '初设',
                x: 250,
                y: 300
            }, {
                name: '招标',
                x: 400,
                y: 300
            }, {
                name: '施工图',
                x: 550,
                y: 300
            },


            {
                name: '施工',
                x: 800,
                y: 300
            }, {
                name: '竣工投产',
                x: 950,
                y: 300
            }, {
                name: '货到物质',
                x: 550,
                y: 100
            }, {
                name: '进场准备',
                x: 550,
                y: 500
            }
        ],
        // links: [],
        links: [{

            source: '可研',
            target: '初设'
        }, {
            source: '初设',
            target: '招标'
        }, {
            source: '招标',
            target: '施工图'
        }, {
            source: '招标',
            target: '货到物质'
        }, {
            source: '货到物质',
            target: '施工'
        }, {
            source: '招标',
            target: '进场准备'
        }, {
            source: '施工图',
            target: '施工'
        }, {
            source: '进场准备',
            target: '施工'
        }, {
            source: '施工',
            target: '竣工投产'
        }],
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 2,
                curveness: 0
            }
        }
    }]
};