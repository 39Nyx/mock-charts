var data = 100;
let rate = '♥♥♥♥♥';
option = {
    //backgroundColor: 'transparent',
    backgroundColor: '#00111b',
    // 标题：【0】指数显示，【1】数值显示
    title: [{
        text: '身心能量指数\n' + rate,
        x: 'center',
        top: '54%',
        textStyle: {
            color: '#be8c3c',
            fontSize: 20,
            fontWeight: '100',
        }
    }, {
        text: data,
        x: 'center',
        top: '43%',
        textStyle: {
            fontSize: '90',
            color: '#be8c3c',
            fontFamily: 'SimHei',
            fontStyle: 'oblique',
            foontWeight: '500',
        },
    }],
    // 极坐标系
    polar: {
        radius: ['24%', '30%'],
        center: ['50%', '50%'],
    },
    // 极坐标系：角度轴
    angleAxis: {
        max: 100 * 360 / 270,
        show: false,
        type: 'value',
        startAngle: 225
    },
    // 极坐标系：径向轴
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
    },
    series: [
        // 第二层：数据以进度条的形式展示
        {
            type: 'bar',
            data: [{
                value: data
            }],
            itemStyle: {
                color: function() {
                    let obj = {
                        type: 'linear',
                        x: 0, //右
                        y: 0.5, //下
                        x2: 1, //左
                        y2: 0, //上
                        colorStops: [{
                            offset: 0,
                            color: '#8ac4d4'
                        }, {
                            offset: 1,
                            color: '#ec5e26'
                        }]
                    };

                    if (data >= 0 && data < 20) {
                        obj.colorStops[1].color = '#8ac4d4';
                    } else if (data >= 20 && data < 40) {
                        obj.y = 0.3;
                        obj.x2 = 2;
                    } else if (data >= 40 && data < 60) {
                        obj.y = 0.3;
                        obj.x2 = 1.5;
                    } else if (data >= 60 && data < 80) {
                        obj.y = 0.4;
                        obj.x2 = 1.1;
                    }
                    return obj;
                }
            },
            barGap: '-100%',
            coordinateSystem: 'polar',
            roundCap: true,
            cursor: 'auto',
            z: 2
        },
        // 第二层：进度条背景
        {
            type: 'bar',
            data: [{
                value: 100,
            }],
            itemStyle: {
                color: '#013f72'
            },
            barGap: '-100%',
            coordinateSystem: 'polar',
            roundCap: true,
            cursor: 'auto',
            emphasis: {
                itemStyle: {
                    color: '#013f72'
                }
            },
            z: 1
        },
        // 第一层：中心文字展示区
        {
            type: 'pie',
            radius: ['0%', '22%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            cursor: 'auto',
            itemStyle: {
                normal: {
                    labelLine: {
                        show: false
                    },
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0,
                            color: '#174869'
                        }, {
                            offset: 1,
                            color: '#08385c'
                        }]
                    }
                }
            },
            data: [{
                value: 100
            }],
            z: 2
        },
        // 第三层；仪表盘：只显示刻度
        {
            type: 'gauge',
            radius: '35%',
            startAngle: '225',
            endAngle: '-45',
            splitNumber: 10,
            center: ['50%', '50%'],
            min: 0,
            max: 100,
            pointer: {
                show: false
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
            data: [{
                value: 100,
                name: ''
            }],
            axisLine: {
                lineStyle: {
                    width: 20,
                    color: [
                        [0, '#5fa7ca'],
                        [1, '#5fa7ca']
                    ],
                    opacity: 0
                }
            },
            axisTick: {
                length: 14,
                lineStyle: {
                    color: 'auto'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: true,
                distance: 18, //距离刻度的距离
                lineHeight: -50,
                formatter: function(value) {
                    return value % 100 === 0 ? value : '';
                }
            }
        },
        // 第四层；背景圆：带阴影
        {
            type: 'pie',
            radius: ['0%', '40%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            cursor: 'auto',
            itemStyle: {
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0,
                        color: '#002e50'
                    }, {
                        offset: 0.9,
                        color: '#002e50'
                    }, {
                        offset: 1,
                        color: '#134568'
                    }]
                }
            },
            data: [{
                value: 100
            }],
            labelLine: {
                show: false
            },
            z: -1
        },
        // 第五层：视觉上类似于边框，带阴影
        {
            type: 'pie',
            radius: ['0', '40.4%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            cursor: 'auto',
            itemStyle: {
                color: '#146a90',
                shadowBlur: 50,
                shadowColor: '#146a90'
            },
            data: [{
                value: 100
            }],
            labelLine: {
                show: false
            },
            emphasis: {
                itemStyle: {
                    color: '#146a90'
                }
            },
            z: -2
        },
        // 第六层：看着类似一个边框，不细看，看不出来，此项目的在于突出立体感
        {
            type: 'pie',
            radius: ['46.7%', '47%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            cursor: 'auto',
            itemStyle: {
                color: '#07223b',
            },
            data: [{
                value: 100
            }],
            labelLine: {
                show: false
            },
            emphasis: {
                itemStyle: {
                    color: '#07223b'
                }
            },
            z: -2
        },
        // 第七层：
        {
            type: 'pie',
            radius: ['47%', '54%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            cursor: 'auto',
            itemStyle: {
                color: '#00182d',
            },
            data: [{
                value: 100
            }],
            labelLine: {
                show: false
            },
            emphasis: {
                itemStyle: {
                    color: '#00182d'
                }
            },
            z: -2
        },
        // 第八层：
        {
            type: 'pie',
            radius: ['54%', '60%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            cursor: 'auto',
            itemStyle: {
                color: '#011422',
            },
            data: [{
                value: 100
            }],
            labelLine: {
                show: false
            },
            emphasis: {
                itemStyle: {
                    color: '#011422'
                }
            },
            z: -2
        },
    ]
};

// 随机数据
function numb() {
    data = Math.floor(Math.random() * 100);
    if (data >= 0 && data < 20) {
        rate = '♡♡♡♡♡';
    } else if (data >= 20 && data < 40) {
        rate = '♥♡♡♡♡';
    } else if (data >= 40 && data < 60) {
        rate = '♥♥♡♡♡';
    } else if (data >= 60 && data < 80) {
        rate = '♥♥♥♡♡';
    } else if (data >= 80 && data <= 100) {
        rate = '♥♥♥♥♡';
    } else {
        rate = '♥♥♥♥♥';
    }
    option.title[0].text = '身心能量指数\n' + rate;
    option.title[1].text = data;
    option.series[0].data[0].value = data;
    myChart.setOption(option, true);
}
setInterval(function() {
    numb();
}, 1000);