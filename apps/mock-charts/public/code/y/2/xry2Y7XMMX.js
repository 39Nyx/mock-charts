let dataEmpty = {
    value: 0
};

let data = {
    value: 80
};

function getOption(data) {
    return {
        backgroundColor: '#00265f',
        title: {
            text: data.value + '%',
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 'normal',
                color: '#fff',
                fontSize: '30',
                textShadowColor: '#000',
                textShadowBlur: '2',
                textShadowOffsetX: '2',
                textShadowOffsetY: '2'
            }
        },
        color: ['rgb(139, 170, 204)'],
        legend: {
            show: false
        },

        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['60%', '72%'],
            animationDurationUpdate: 400,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                value: data.value,
                name: '01',
                itemStyle: {
                    normal: {
                        color: {
                            colorStops: [{
                                    offset: 0,
                                    color: '#FFFF33'
                                },
                                {
                                    offset: 1,
                                    color: '#33CC00'
                                }
                            ]
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    emphasis: {
                        color: {
                            colorStops: [{
                                    offset: 0,
                                    color: '#FFFF33'
                                },
                                {
                                    offset: 1,
                                    color: '#33CC00'
                                }
                            ]
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: '02',
                value: 100 - data.value,
                itemStyle: {
                    normal: {
                        color: 'rgb(139, 170, 204)',
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }]
        }]
    };
}

option = getOption(data);

setInterval(function() {
    myChart.setOption(getOption(dataEmpty));
    setTimeout(function() {
        myChart.setOption(getOption(data));
    }, 500);
}, 2000);