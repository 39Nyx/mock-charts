var data = {
    name: 'tree',
    children: [{
        name: 'b1',
        children: [{
                name: 'c1',
                children: [{
                    name: 'd1',
                    value: 1
                }]
            },
            {
                name: 'c2',
                children: [{
                    name: 'd4',
                    value: 1
                }, {
                    name: 'd5',
                    value: 1
                }, {
                    name: 'd6',
                    value: 1
                }]
            },
            {
                name: 'c3',
                children: [{
                    name: 'd11',
                    value: 1
                }, {
                    name: 'd12',
                    value: 1
                }, {
                    name: 'd13',
                    value: 1
                }, {
                    name: 'd14',
                    value: 1
                }, {
                    name: 'd15',
                    value: 1
                }]
            },
            {
                name: 'c4',
                children: [{
                    name: 'd7',
                    value: 1
                }, {
                    name: 'd8',
                    value: 1
                }, {
                    name: 'd9',
                    value: 1
                }, {
                    name: 'd10',
                    value: 1
                }]
            },
            {
                name: 'c5',
                children: [{
                    name: 'd2',
                    value: 1
                }, {
                    name: 'd3',
                    value: 1
                }]
            }
        ]
    }, {
        name: 'b21',
        children: [{
                name: 'c21',
                children: [{
                    name: '2d1',
                    value: 100
                }]
            },
            {
                name: 'c22',
                children: [{
                    name: '2d4',
                    value: 120
                }, {
                    name: '2d5',
                    value: 320
                }, {
                    name: '2d6',
                    value: 140
                }]
            },
            {
                name: 'c23',
                children: [{
                    name: '2d11',
                    value: 80
                }, {
                    name: '2d12',
                    value: 60
                }, {
                    name: '2d13',
                    value: 150
                }, {
                    name: '2d14',
                    value: 220
                }, {
                    name: '2d15',
                    value: 130
                }]
            },
            {
                name: 'c24',
                children: [{
                    name: '2d7',
                    value: 320
                }, {
                    name: '2d8',
                    value: 40
                }, {
                    name: '2d9',
                    value: 190
                }, {
                    name: '2d10',
                    value: 310
                }]
            },
            {
                name: 'c25',
                children: [{
                    name: '2d2',
                    value: 40
                }, {
                    name: '2d3',
                    value: 160
                }]
            }
        ]
    }]
}
option = {
    tooltip: {
        trigger: 'item',
        formatter:'{c}'
    },
    series: [{
        type: 'tree',

        data: [data],

        top: '18%',
        bottom: '14%',

        layout: 'radial',

        symbol: 'circle',

        symbolSize: 7,

        initialTreeDepth: 3,

        animationDurationUpdate: 750,
        itemStyle: {
            color: '#fb5b2f',
            borderWidth:0
        }

    }]
}