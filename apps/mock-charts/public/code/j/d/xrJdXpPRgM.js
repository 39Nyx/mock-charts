labelTop = {
    normal: {
        label: {
            show: true,
            position: 'center',
            formatter: '{b}',
            textStyle: {
                baseline: 'bottom'
            }
        },
        labelLine: {
            show: false
        }
    }
};
var labelFromatter = {
    normal: {
        label: {
            formatter: function(params) {
                return 100 - params.value + '%'
            },
            textStyle: {
                baseline: 'top'
            }
        }
    },
}
var labelBottom = {
    normal: {
        color: '#ccc',
        label: {
            show: true,
            position: 'center'
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
var radius = [40, 55];
option = {
    legend: {
        x: 'center',
        y: 'center',
        data: [
            '天涯论坛', '新浪微博', '爱情', '知乎', '豆瓣'
        ]
    },
    title: {
        text: '评论主体为“抄袭”在各个平台的占比',
        textStyle: {
                fontSize: 30
            },

        x: 'center'
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        width: '20%',
                        height: '30%',
                        itemStyle: {
                            normal: {
                                label: {
                                    formatter: function(params) {
                                        return 'other\n' + params.value + '%\n'
                                    },
                                    textStyle: {
                                        baseline: 'middle'
                                    }
                                }
                            },
                        }
                    }
                }
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    series: [{
        type: 'pie',
        center: ['20%', '30%'],
        radius: radius,
        x: '0%', // for funnel
        itemStyle: labelFromatter,
        data: [{
            name: 'other',
            value: 69,
            itemStyle: labelBottom
        }, {
            name: '天涯论坛',
            value: 31,
            itemStyle: labelTop
        }]
    }, {
        type: 'pie',
        center: ['40%', '30%'],
        radius: radius,
        x: '20%', // for funnel
        itemStyle: labelFromatter,
        data: [{
            name: 'other',
            value: 46,
            itemStyle: labelBottom
        }, {
            name: '新浪微博',
            value: 54,
            itemStyle: labelTop
        }]
    }, {
        type: 'pie',
        center: ['60%', '30%'],
        radius: radius,
        x: '40%', // for funnel
        itemStyle: labelFromatter,
        data: [{
            name: 'other',
            value: 36.5,
            itemStyle: labelBottom
        }, {
            name: '知乎',
            value: 63.5,
            itemStyle: labelTop
        }]
    }, {
        type: 'pie',
        center: ['80%', '30%'],
        radius: radius,
        x: '60%', // for funnel
        itemStyle: labelFromatter,
        data: [{
            name: 'other',
            value: 35.5,
            itemStyle: labelBottom
        }, {
            name: '豆瓣',
            value: 64.5,
            itemStyle: labelTop
        }]

    }]
};