var uploadedDataURL = "/asset/get/s/data-1495595908173-rk2KsOfWb.json";

$.getJSON(uploadedDataURL, function(linedata) {

    var rdataArr = [];
    var rlinks = [];
    var dataentryf = {
        name: '测试',
        symbolSize: 100,
        draggable: true,
        category: '测试'
    }
    rdataArr.push(dataentryf);
    for (var i = 0; i < 3000; i++) {
        var dataentry = {
            name: '测试' + i,
            draggable: true,
            category: '测试',
            symbolSize: 20,
        }
        rdataArr.push(dataentry);
        var datalink = {
            source: "测试",
            target: '测试' + i,
        }
        rlinks.push(datalink);
    }


    option = {

        series: [{
            name: '微博',
            type: 'graphGL',
            layout: 'force',
            data: rdataArr,
            edges: rlinks,
            categories: [{
                itemStyle: {
                    normal: {
                        color: 'black'
                    }
                }
            }],
            focusNodeAdjacency: true,
            roam: true,
            label: {
                normal: {
                    position: 'right',
                    formatter: '{b}'
                }
            },

            forceAtlas2: {
                steps: 10, //布局速度
                jitterTolerence: 1000,
                stopThreshold: 100, //停止布局的阈值，当布局的全局速度因子小于这个阈值时停止布局。设为 0 则永远不停止
                repulsionByDegree: true, //是否根据节点边的数量来计算节点的斥力因子
                gravity: 0.05, //节点受到的向心力。这个力会让节点像中心靠拢
                //gravityCenter:[0.1,10],//向心力中心的位置。默认去初始位置的中间点
                edgeWeight: [0.3, 4], //边的权重分布
                edgeWeightInfluence: 2, //边权重的影响因子。值越大，则边权重对于引力的影响也越大
                nodeWeight: [0.5, 4],
                scaling: 1, //布局的缩放因子，值越大则节点间的斥力越大
                preventOverlap: false, //是否开启防止节点重叠。
            }
        }]
    };
    myChart.setOption(option)
})