var datas = [{
            name: '云米电器科技',
            value: 200
        }, {
            name: '陈小平',
            value: 80
        }, {
            name: '沈月仙',
            value: 100
        }, {
            name: '邹洛',
            value: 100
        }, {
            name: '刘新宇',
            value: 100,
        }, {
            name: '小鲜互联电器科技',
            value: 100,
        }, {
            name: '去探索电器科技',
            value: 100,
        }, {
            name: '绿云智控智能科技',
            value: 100,
        }
];

option = {
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 12
            },
        }
    },
    series: [{
        type: 'graph',
        layout: 'force',
        roam: true,
        force: {
            repulsion: 5000,
            gravity:0.0001,
            layoutAnimation: false
        },
        symbol: 'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
        symbolSize: 50,
        focusNodeAdjacency:true,
        edgeSymbol: ['arrow', 'none'],
        edgeSymbolSize: [20, 0],
        label: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 16,
                    color: 'skyblue'
                },
            }
        },
        lineStyle: {
            normal: {
                color: 'pink',
                width: 4
            },
            emphasis:{
                color: 'blue',
                width: 4
            }
        },
        data: datas,
        links: [{
            source: 0,
            target: 1,
        }, {
            source: 0,
            target: 2,
        }, {
            source: 0,
            target: 3,
        }, {
            source: 0,
            target: 4,
        }, {
            source: 0,
            target: 5,
        }, {
            source: 0,
            target: 6,
        }, {
            source: 0,
            target: 7,
        }]
    }]
};
