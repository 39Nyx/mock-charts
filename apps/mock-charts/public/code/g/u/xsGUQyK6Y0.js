// x轴数据
const xData = [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
]
// y轴数据
const yData = [12, 18, 32, 12, 43, 52, 12, 54, 75, 34, 12, 67];
// 色值
let colorArr = [
    ['rgba(247, 146, 38, 1)', 'rgba(255, 196, 87, 0.1)'],
    ['rgba(3, 140, 248,1)', 'rgba(87, 212, 151,0.1)'],
];
option = {
    title: {
        text: '| 圆角柱状图',
        top: 10,
        left: 20,
        textStyle: {
            color: colorArr[1][0],
            fontSize: 24
        },
    },
    legend: {
        show: true,
        itemWidth: 10,
    },
    grid: {
        top: '25%',
        left: '10%',
        bottom: '15%',
    },
    tooltip: {
        show: true,
        trigger: 'item',
    },
    // 工具箱
    toolbox: {
        top: 10,
        right: 30,
        iconStyle: {
            borderColor: 'rgba(87, 212, 151, 1)',
        },
        feature: {
            saveAsImage: {
                title: '保存为图片！', // 鼠标hover时的显示字段
                name: '圆角柱状图', // 下载时图片文件的名称
                excludeComponents: ['toolbox'],
            },
            // 图形切换组件
            magicType: {
                type: ['line', 'bar'],
                title: {
                    line: '切换为折线图',
                    bar: '切换为柱状图',
                },
            },
            // 还原
            restore: {}
        },
    },
    // 数据标签样式
    label: {
        show: true,
        borderColor: 'rgba(87, 212, 151,0.9)',
        borderWidth: 1,
        borderRadius: 2,
        position: 'top',
        padding: [2, 4],
        textBackgroundColor: 'red',
    },
    labelLine: {
        show: true,
        lineStyle: {
            color: 'rgba(87, 212, 151,0.6)',
        },
    },
    xAxis: {
        type: 'category',
        interval: 0,
        data: xData,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            color: 'rgba(0,0,0,.5)',
        },
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
                opacity: 0.5,
                width: 1.5,
            },
        },
        axisTick: {
            show: false,
            inside: true,
            length: 2,
            lineStyle: {
                width: 1.5,
                opacity: 0.8,
            },
        },
        axisLabel: {
            show: false,
        },
    },
    series: [{
        type: 'bar',
        barCategoryGap: 5, // 柱子之间的距离
        barWidth: 20, // 柱子宽度，不设置时宽度自适应
        smooth: true, // 切换成折线图之后的曲线平滑度
        symbolSize: 15,
        data: yData,
        itemStyle: {
            color: (arg) => {
                let targetColor = null;
                if (arg.data > 50) {
                    targetColor = colorArr[0];
                } else {
                    targetColor = colorArr[1];
                }
                return new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: targetColor[0]
                        },
                        {
                            offset: 1,
                            color: targetColor[1]
                        },
                    ]);
            },
            // v5版本建议使用borderRadius来设置柱子圆角
            barBorderRadius: [30, 30, 0, 0],
        },
        lineStyle: {
            color: 'rgba(255, 196, 87, 1)',
            width: 1.5,
        },
        // 设置切换为折线图之后的阴影样式
        areaStyle: {
            color: {
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [{
                        offset: 0,
                        color: 'rgba(255, 196, 87, 0.1)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(255, 196, 87, 1)',
                    },
                ],
            },
        },
        emphasis: {
            // 高亮图形时是否淡出剩余数据点, 5.0之后的版本支持
            focus: 'self', // self高亮本身，其余数据淡出；series聚焦当前高亮数据坐在的系列
            itemStyle: {
                color: 'rgba(87, 212, 151,0.9)',
            },
        },
    }, ],
}