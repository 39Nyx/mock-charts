option = {
    title: {
        text: null
    }, // 隐藏图表标题
    legend: {
        enabled: false
    }, // 隐藏图例
    tooltip: {
        trigger: 'axis'
    },
    calculable: true,
    polar: [{
        nameGap: 5, // 图中工艺等字距离图的距离
        center: ['50%', '50%'], // 图的位置
        name: {
            show: true, // 是否显示工艺等文字
            formatter: null, // 工艺等文字的显示形式
            textStyle: {
                color: '#a3a5b6' // 工艺等文字颜色
            }
        },
        indicator: [{
                text: '工艺',
                max: 100
            },
            {
                text: '设备',
                max: 100
            },
            {
                text: '安全',
                max: 100
            },
            {
                text: '工艺',
                max: 100
            },
            {
                text: '仪表',
                max: 100
            }
        ],
        axisLine: { // 坐标轴线
            show: false // 默认显示，属性show控制显示与否
        },
        axisLabel: { // 坐标轴文本标签，详见axis.axisLabel
            show: false,
            textStyle: {
                color: '#247bd7' // 坐标轴刻度文字的样式
            }
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ["#2a4a93"] // 图表背景网格的颜色
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                width: 1,
                color: '#286fbb' // 图表背景网格线的颜色
            }
        }
    }],
    series: [{
        name: '完全实况球员数据',
        type: 'radar',
        symbol: "none", // 去掉图表中各个图区域的边框线拐点
        itemStyle: {
            normal: {
                color: "rgba(0,0,0,0)", // 图表中各个图区域的边框线拐点颜色
                lineStyle: {
                    color: "white" // 图表中各个图区域的边框线颜色
                },
                areaStyle: {
                    type: 'default'
                }
            }
        },
        data: [{
                value: [50, 42, 88, 60, 90],
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default',
                            opacity: 0.8, // 图表中各个图区域的透明度
                            color: "#1686c2" // 图表中各个图区域的颜色
                        }
                    }
                },
                name: '重整'
            },
            {
                value: [90, 32, 74, 20, 60],
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default',
                            /*opacity: 1,*/
                            color: "#6eaf97" // 图表中各个图区域的颜色
                        }
                    }
                },
                name: '催化'
            }
        ]
    }]
};