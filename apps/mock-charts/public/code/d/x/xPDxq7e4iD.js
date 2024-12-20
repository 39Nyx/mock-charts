var pie_color = ['#00A5B9', '#FFD71D', '#F76464', '#56A3FF', '#32D790', '#F4B561', '#7080DB', '#DF7A90',
    '#3CC4EF', '#EF7F3C', '#EF3C81', '#0DBF8C', '#2F73C0', '#C55E18', '#C899FF', '#C6D727',
    '#FF688F', '#87A0DC', '#00D9F7', '#A24EED'
];
var legendList = [];
var pieData = [{
    name: 'A 农、林、牧、渔业',
    value: 290
}, {
    name: 'B 采矿业',
    value: 40
}, {
    name: 'C 制造业',
    value: 320
}, {
    name: 'D 电力、热力、燃气及水生产和供应业',
    value: 540
}, {
    name: 'E 建筑业',
    value: 25
}, {
    name: 'F 批发和零售业',
    value: 90
}, {
    name: 'G 交通运输、仓储和邮政业',
    value: 450
}, {
    name: 'H 住宿和餐饮业',
    value: 120
}, {
    name: 'I 信息传输、软件和信息技术服务业',
    value: 288
}, {
    name: 'J 金融业',
    value: 344
}, {
    name: 'K 房地产业',
    value: 571
}, {
    name: 'L 租赁和商务服务业',
    value: 842
}, {
    name: 'M 科学研究和技术服务业',
    value: 120
}, {
    name: 'N 水利、环境和公共设施管理业',
    value: 430
}, {
    name: 'O 居民服务、修理和其他服务业',
    value: 403
}, {
    name: 'Q 卫生和社会工作',
    value: 600
}, {
    name: 'R 文化、体育和娱乐业',
    value: 787
}, {
    name: 'S 公共管理、社会保障和社会组织',
    value: 91
}, {
    name: 'T 国际组织',
    value: 34
}];
for (var i = 0; i < pieData.length; i++) {
    legendList.push(pieData[i].name);
}
option = {
    color: pie_color,
    title: {
        show: false,
        text: '',
        textStyle: {
            color: '#333333',
            fontSize: 16,
        },
    },
    grid: {
        show: false,
        left: '2%',
        right: '50%',
        bottom: 0,
        top: '2%',
        containLabel: true
    },
    legend: {
        bottom: '4%',
        right: '10%',
        orient: 'vertical',
        width: 540,
        height: 240,
        padding: [14, 20],
        backgroundColor: 'rgba(236,246,255,0.30)',
        borderWidth: 1,
        borderColor: '#E7F2FB',
        borderRadius: 4,
        icon: 'circle',
        itemWidth: 8,
        itemHeight: 8,
        textStyle: {
            color: '#333333',
            fontSize: 12,
        },
        data: legendList,
    },
    xAxis: {
        type: 'value',
        gridIndex: 0,
        name: '家',
        nameTextStyle: {
            color: '#9B9B9B',
            fontSize: 14
        },
        axisLabel: {
            color: '#727272',
            fontSize: 14,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#333333',
                opacity: 0.35,
            }
        },
        axisTick: {
            show: true,
            inside: true,
            lineStyle: {
                color: '#333333',
                opacity: 0.35,
            }
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        gridIndex: 0,
        data: legendList,
        inverse: true,
        axisLabel: {
            color: '#727272',
            fontSize: 14,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#333333',
                opacity: 0.35,
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [{
        name: '柱状图',
        type: 'bar',
        xAxisIndex: 0,
        yAxisIndex: 0,
        data: pieData,
        label: {
            show: true,
            position: 'right',
            color: '#4A4A4A',
            fontSize: 14,
        },
        barWidth: 20,
        itemStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x1: 0,
                y1: 1,
                colorStops: [{
                    offset: 0,
                    color: '#FF9A91'
                }, {
                    offset: 1,
                    color: '#F8B44F'
                }],
                global: false
            },
            barBorderRadius: [0, 10, 10, 0]
        }
    }, {
        type: 'pie',
        radius: ['10%', '36%'],
        center: ['75%', '30%'],
        data: pieData,
        hoverAnimation: false,
        label: {
            show: true,
            position: 'outside',
            formatter: '{b}：{d}%',

        },
        zlevel: 2
    }, {
        name: '外圈',
        type: 'pie',
        radius: ['36%', '37.5%'],
        center: ['75%', '30%'],
        hoverAnimation: false,
        itemStyle: {
            color: 'rgb(21 132 214 / 0.1)',
        },
        emphasis: {
            itemStyle: {
                color: 'rgb(21 132 214 / 0.1)'
            }
        },
        labelLine: {
            show: false
        },
        data: [{
            value: 1
        }],
        zlevel: 1
    }, {
        name: '内圈',
        type: 'pie',
        radius: ['8.5%', '10%'],
        center: ['75%', '30%'],
        hoverAnimation: false,
        itemStyle: {
            color: 'rgb(21 132 214 / 0.1)',
        },
        emphasis: {
            itemStyle: {
                color: 'rgb(21 132 214 / 0.1)'
            }
        },
        labelLine: {
            show: false
        },
        data: [{
            value: 1
        }],
        zlevel: 1
    }]
}