myChart.showLoading();
var data = {
    nodes: [{
        name: '今日头条',
        value: 276127422,
        label: {
            color: 'transparent'
        },
        itemStyle: {
            normal: {
                color: 'transparent',
                borderColor: 'transparent'
            }
        }

    }, {
        name: '推荐量',
        value: 276127422,
        label: {
            fontSize: 15,
            position:'left',
            formatter: '{b}' + ':' + '{c}'
        },
        itemStyle: {
            normal: {
                color: '#009944',
                bordecolor: '#009944'

            }
        }

    }, {
        name: '阅读量',
        value: 13859450,
        label: {
            fontSize: 15,
            position:'top',
            formatter: '{b}' + ':' + '{c}'
        },
        itemStyle: {
            normal: {
                color: '#ea4d1c',
                bordecolor: '#ea4d1c'
            }
        }

    }, {
        name: '评论量',
        value: 6791,
        label: {
            fontSize: 15,
            position:'top',
            formatter: '{b}' + ':' + '{c}'
        },
        itemStyle: {
            normal: {
                color: '#3ca8d3'
            }
        }

    }, {
        name: '收益',
        value: 1518.31,
        label: {
            fontSize: 15,
            position:'top',
            formatter: '{b}' + ':' + '{c}'
        },
        itemStyle: {
            normal: {
                color: '#72ACD1'
            }
        }

    }, {
        name: '展示量',
        value: 1457389,
        label: {
            fontSize: 15,
            position:'top',
            formatter: '{b}' + ':' + '{c}'
        },
        itemStyle: {
            normal: {
                color: '#3ca8d3'
            }
        }

    }, {
        name: '点击量',
        value: 3042,
        label: {
            fontSize: 15,
            position:'top',
            formatter: '{b}' + ':' + '{c}'
        },
        itemStyle: {
            normal: {
                color: '#3ca8d3'
            }
        }

    }],
    links: [{
        source: '今日头条',
        target: '推荐量',
        value: 276127422
    }, {
        source: '推荐量',
        target: '阅读量',
        value: 13859450
    }, {
        source: '阅读量',
        target: '收益',
        value: 1518.31
    }, {
        source: '阅读量',
        target: '评论量',
        value: 6791
    }, {
        source: '阅读量',
        target: '展示量',
        value: 1457389
    }, {
        source: '展示量',
        target: '点击量',
        value: 3042
    }]


};
myChart.hideLoading();
myChart.setOption(option = {
    title: {
        text: 'sankey',
        subtext: 'test'
    },
    tooltip: {
        trigger: 'item',
        formatter: function(data) {
            return data.name + '：' + data.value; //提示框显示信息
        },
        triggerOn: 'mousemove'
    },
    color: ['#3ca8d3'],
    series: [{
        type: 'sankey',
        layout: 'none',
        nodeWidth: 30,
        nodeGap: 70,
        data: data.nodes,
        links: data.links,
        itemStyle: {
            normal: {
                borderWidth: 2,
                borderColor: '#aaa'
            }
        },
        lineStyle: {
            normal: {
                color: 'source',
                borderWidth: 1,
                curveness: 0.3
            }
        }
    }]
});