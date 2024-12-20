myChart.setOption(option = {
    // color: ['#f00', '#00f', '#eda02d', '#ccc', '#00f', '#0f0'],
    title: {
        show: false,
        text: 'Sankey Diagram'
    },
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
        formatter:function(e) {
            console.log(e)
            return e.name +': ' +e.value +'%'
        }

    },
    series: [{
        type: 'sankey',
        layout: 'none',
        nodeWidth: '50',
        // layoutIterations:0,
        label: {
            normal: {
                show: true,
                position: 'insideLeft',
                formatter: function(e) {
                    var str = e.data.name + '\n' + e.data.aaa;
                    return str;
                }
            }
        },
        data: [{
            name: '生产',
            aaa: '30万头',


        }, {
            name: '供本市',
            aaa: '30万头',
        }, {
            name: '外销',
            aaa: '30万头',
        }, {
            name: '外地菜',
            aaa: '30万头',
        }, {
            name: '批发',
            aaa: '30万头',
        }, {
            name: '配送',
            aaa: '30万头',
        }, {
            name: '菜市场',
            aaa: '30万头',
        }, {
            name: '超市',
            aaa: '30万头',
        }, {
            name: '专卖店',
            aaa: '30万头',
        }, {
            name: '消费',
            aaa: '30万头',
        }, {
            name: '空1',
            value: 1,
            itemStyle: {
                normal: {
                    opacity: 0
                }
            },
            lineStyle: {
                normal: {
                    opacity: 0
                }
            }
        }, {
            name: '空2',
            value: 1,
            itemStyle: {
                normal: {
                    opacity: 0
                }
            },

        },
         {
            name: '空3',
            value: 1,
            itemStyle: {
                normal: {
                    opacity: 0
                }
            },

        }],
        links: [{
            source: '生产',
            target: '供本市',
            value: 7
        }, {
            source: '生产',
            target: '外销',
            value: 3
        }, {
            source: '外销',
            target: '空2',
            value: 0.001,
            lineStyle: {
                normal: {
                    opacity: 0
                }
            }
        }, {
            source: '生产',
            target: '空1',
            value: 0.001,
            lineStyle: {
                normal: {
                    opacity: 0
                }
            }
        }, {
            source: '空1',
            target: '外地菜',
            value: 0.001,
            lineStyle: {
                normal: {
                    opacity: 0
                }
            }
        }, {
            source: '供本市',
            target: '空3',
            value: 7
        },  {
            source: '供本市',
            target: '空3',
            value: 7
        },{
            source: '空3',
            target: '批发',
            value: 3
        },{
            source: '空3',
            target: '配送',
            value: 3
        },{
            source: '外销',
            target: '',

        }, {
            // source: '屠宰',
            // target: '批发',
            // value: 4
        }, {
            source: '外地菜',
            target: '批发',
            value: 2
        }, {
            // source: '屠宰',
            // target: '配送',
            // value: 3
        }, {
            source: '外地菜',
            target: '配送',
            value: 1
        }, {
            source: '批发',
            target: '菜市场',
            value: 2
        }, {
            source: '批发',
            target: '超市',
            value: 2
        }, {
            source: '批发',
            target: '专卖店',
            value: 1
        }, {
            source: '配送',
            target: '菜市场',
            value: 1
        }, {
            source: '配送',
            target: '超市',
            value: 2
        }, {
            source: '配送',
            target: '专卖店',
            value: 2
        }, {
            source: '菜市场',
            target: '消费',
            value: 3
        }, {
            source: '超市',
            target: '消费',
            value: 4
        }, {
            source: '专卖店',
            target: '消费',
            value: 3
        }],
        lineStyle: {
            normal: {
                color: 'source',
                curveness: 0.5
            }
        }


    }]
});
myChart.setOption(option);