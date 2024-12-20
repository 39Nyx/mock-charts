let { color, time, datas, total, legend, category } = {
    category: [
        { name: '国家移民管理机构民警公共基础训练示范片——擒敌术', value: 100, time: 0 },
        { name: '基础训练：基础体能', value: 57, time: 52 },
        { name: '基础训练：基础射击', value: 70, time: 36 },
        { name: '基础训练：擒敌术', value: 90, time: 12 },
        { name: '基础训练：日常养成', value: 70, time: 36 },
    ],
    color: [
        '#16bafc',
        '#0851cf',
        '#10e9e4',
        '#07a39e',
        '#fed700',
        '#fe8201',
        '#f18437',
        '#dd3d0c',
        '#3bd293',
        '#3b8523',
    ],
    datas: [100, 80, 70, 60, 60],
    legend: [
        '国家移民管理机构民警公共基础训练示范片——擒敌术',
        '基础训练：基础体能',
        '基础训练：基础射击',
        '基础训练：擒敌术',
        '基础训练：日常养成',
    ],
    time: 2,
    total: 100,
};

var dataStyle = {
    normal: {
        label: {
            show: false,
        },
        labelLine: {
            show: false,
        },
        shadowBlur: 40,
        borderWidth: 10,
        shadowColor: 'rgba(0, 0, 0, 0)', //边框阴影
    },
};
var placeHolderStyle = {
    normal: {
        color: 'transparent',
        label: {
            show: false,
        },
        labelLine: {
            show: false,
        },
    },
    emphasis: {
        color: 'transparent',
    },
};

option = {
    backgroundColor:'blurScope',
    title: {
        text: '总时长' + '\n{a|' + time + '小时' + '}',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 14,
            color: '#fff',
            rich: {
                a: {
                    fontSize: 14,
                    padding: [0, 0, 10, 0],
                },
            },
        },
    },
    // grid: {
    //   x: 80,
    //   left: "20%",
    // },
    tooltip: {
        trigger: 'item',
        show: true,
        // formatter: "{b} : <br/>{d}%",
        formatter: function (params) {
            let name = '';
            if (params.name.length > 15) {
                name += params.name.slice(0, 15) + '<br/>';
                name += params.name.slice(15, params.name.length - 1);
            } else {
                name = params.name;
            }
            return name + ':<br/>' + params.value + '%';
        },
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
    },
    legend: {
        show: true,
        orient: 'vertical',
        // icon: 'circle',
        right: '40',
        top: 20,
        // itemGap: 5,
        data: legend,
        textStyle: {
            rich: {
                a: {
                    color: '#fff',
                    padding: [0, 0, 6, 0],
                    fontSize: 14,
                },
                b: {
                    fontSize: 14,
                    color: 'rgba(255,255,255,.5)',
                    padding: [0, 0, 3, 0],
                },
            },
        },
        formatter: function (params, i) {
            let str = '';
            category.forEach((item) => {
                if (item.name === params) {
                    // str = `{a|${params} ${item.value}%}`;
                    if (params.length > 3) {
                        params = params.slice(0, 3) + '...';
                    }
                    str = `{a|${params} ${item.value}%}\n{b|未学习${item.time}分钟}`;
                }
            });
            return str;
        },
    },
    series: [
        {
            name: 'Line 3',
            type: 'pie',
            clockWise: false,
            radius: ['60%', '66%'],
            center: ['50%', '50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [
                {
                    value: datas[0],
                    name: legend[0],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: color[0],
                                },
                                {
                                    offset: 1,
                                    color: color[1],
                                },
                            ]),
                        },
                    },
                },
                {
                    value: total - datas[0],
                    name: '',
                    tooltip: {
                        show: false,
                    },
                    itemStyle: placeHolderStyle,
                },
            ],
        },
        {
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: ['50%', '56%'],
            center: ['50%', '50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            label: {
                borderRadius: '10',
            },
            data: [
                {
                    value: datas[1],
                    name: legend[1],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: color[2],
                                },
                                {
                                    offset: 1,
                                    color: color[3],
                                },
                            ]),
                        },
                    },
                },
                {
                    value: total - datas[1],
                    name: '',
                    tooltip: {
                        show: false,
                    },
                    itemStyle: placeHolderStyle,
                },
            ],
        },
        {
            name: 'Line 2',
            type: 'pie',
            clockWise: false,
            radius: ['40%', '46%'],
            center: ['50%', '50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [
                {
                    value: datas[2],
                    name: legend[2],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: color[4],
                                },
                                {
                                    offset: 1,
                                    color: color[5],
                                },
                            ]),
                        },
                    },
                },
                {
                    value: total - datas[2],
                    name: '',
                    tooltip: {
                        show: false,
                    },
                    itemStyle: placeHolderStyle,
                },
            ],
        },
        {
            name: 'Line 3',
            type: 'pie',
            clockWise: false,
            radius: ['30%', '36%'],
            center: ['50%', '50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [
                {
                    value: datas[3],
                    name: legend[3],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: color[6],
                                },
                                {
                                    offset: 1,
                                    color: color[7],
                                },
                            ]),
                        },
                    },
                },
                {
                    value: total - datas[3],
                    name: '',
                    tooltip: {
                        show: false,
                    },
                    itemStyle: placeHolderStyle,
                },
            ],
        },
        {
            name: 'Line 3',
            type: 'pie',
            clockWise: false,
            radius: ['20%', '26%'],
            center: ['50%', '50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [
                {
                    value: datas[4],
                    name: legend[4],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: color[8],
                                },
                                {
                                    offset: 1,
                                    color: color[9],
                                },
                            ]),
                        },
                    },
                },
                {
                    value: total - datas[4],
                    name: '',
                    tooltip: {
                        show: false,
                    },
                    itemStyle: placeHolderStyle,
                },
            ],
        },
    ],
};
