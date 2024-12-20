//圆环添加一些图标，图片可以自己加，这是固定效果，想要图标跟圆环走，还需要计算一些属性值了
option = {

    grid: {
        bottom: 50
    },

    yAxis: [{
        show: false
    }],
    series: [{
        name: '正常在校学生',
        center: [
            '20.0%',
            '50%'
        ],
        radius: [
            '20%',
            '25%'
        ],
        type: 'pie',
        labelLine: {
            normal: {
                show: false
            }
        },
        legendHoverLink: false,
        hoverAnimation: false,
        markPoint: {
            symbol: 'image:////www.bootcss.com/p/font-awesome/assets/img/contribution-sample.png',
            label: {
                normal: {
                    show: false

                }
            },
            data: [{
                value: ' ',
                x: 200,
                y: 220,
                symbolSize: 32
            }]
        },
        data: [{
            value: 30,
            name: '相似度',
            label: {
                normal: {
                    formatter: '{a}\n{d}%',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold',
                        color: '#000'
                    }
                }
            }
        }, {
            value: 70,
            name: '',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
            hoverAnimation: false
        }]
    }, {
        name: '在校学生',
        center: [
            '40.0%',
            '50%'
        ],
        radius: [
            '20%',
            '25%'
        ],
        type: 'pie',
        labelLine: {
            normal: {
                show: false
            }
        },
        legendHoverLink: false,
        hoverAnimation: false,
        markPoint: {
            symbol: 'image:////echarts.baidu.com/images/github.png',
            label: {
                normal: {
                    show: false

                }
            },
            data: [{
                value: ' ',
                x: 370,
                y: 200,
                symbolSize: 32
            }]
        },
        data: [{
            value: 30,
            name: '相似度',
            label: {
                normal: {
                    formatter: '{a}\n{d}%',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold',
                        color: '#000'
                    }
                }
            }
        }, {
            value: 70,
            name: '',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
            hoverAnimation: false
        }]
    }]
};