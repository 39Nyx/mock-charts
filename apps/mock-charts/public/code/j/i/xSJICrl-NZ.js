let dataMap = {};
dataMap.country = {
    'Vietnam': '越南',
    'Myanmar': '缅甸',
    'Thailand': '泰国',
    'Indonesia': '印度尼西亚',
    'India': '印度',
    'Maldives': '马尔代夫',
    'Malaysia': '马来西亚',
    'Nepal': '尼泊尔',
}

dataMap.blood = {
    'Vietnam': {
        'town': 99.1,
        'village': 96.9
    },
    'India': {
        'town': 97.1,
        'village': 92.6
    },
    'Myanmar': {
        'town': 92.7,
        'village': 74.4
    },
    'Thailand': {
        'town': 97.6,
        'village': 98
    },
    'Indonesia': {
        'town': 94.2,
        'village': 79.5
    }
};

dataMap.values = {
    'Vietnam': {
        'town': 97.3,
        'village': 88.6
    },
    'India': {
        'town': 95.7,
        'village': 87.9
    },
    'Myanmar': {
        'town': 91.4,
        'village': 72
    },
    'Thailand': {
        'town': 97.4,
        'village': 95.6
    },
    'Indonesia': {
        'town': 93.2,
        'village': 75.7
    }
}

var option = {
    baseOption: {
        timeline: {
            axisType: 'category',
            orient: 'vertical',
            autoPlay: true,
            inverse: true,
            left: null,
            right: '50%',
            top: 20,
            bottom: 20,
            width: 46,
            height: null,
            label: {
                normal: {
                    textStyle: {
                        color: '#00ccfe',
                        fontSize: 16
                    }
                }
            },
            symbol: 'none',
            lineStyle: {
                show: false
            },
            checkpointStyle: {
                borderWidth: 0,
                symbolSize: 0
            },
            controlStyle: {
                show: false
            },
            data: ['1 越南', '2 印度', '3 缅甸', '4 泰国', '5 印尼']
        },
        tooltip: {
            trigger: 'item',
        },
        calculable: true,
        grid: {
            top: 80,
            bottom: 100,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        show: true,
                        formatter: function(params) {
                            return params.value.replace('\n', '');
                        }
                    }
                }
            }
        },
        title: {
            show: false,
            text: '饮水情况',
            left: 'center'
        },
        color: ['#3db5f5', '#db8776'],
        series: [{
                name: '饮水情况',
                type: 'pie',
                center: ['20%', '50%'],
                clockWise: true,
                hoverAnimation: false,
                radius: ['35%', '32%'],
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: 1,
                    label: {
                        normal: {
                            formatter: '饮水情况',
                            textStyle: {
                                color: '#3db5f5',
                                fontSize: 16
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#3db5f5',
                            borderColor: '#3db5f5',
                            borderWidth: 2
                        }
                    },
                    tooltip: {
                        show: false,
                        backgroundColor: 'rgba(0,0,0,0)',
                        textStyle: {
                            color: 'rgba(0,0,0,0)'
                        }
                    }
                }]
            }, {
                type: 'pie',
                center: ['20%', '50%'],
                radius: ['40%', '50%'],
                avoidLabelOverlap: true,
                label: {
                    normal: {
                        formatter: '{b} {d}%',
                        textStyle: {
                            fontSize: 18,
                            color: '#3db5f5'
                        }
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#3db5f5'
                        }
                    }
                },
                data: [{
                    name: '城镇',
                    itemStyle: {
                        normal: {
                            color: '#3db5f5'
                        }
                    }
                }, {
                    name: '农村',
                    itemStyle: {
                        normal: {
                            color: '#ee8064'
                        }
                    }
                }]
            },
            //此处新增一个饼状图
            {
                name: '贫血病',
                type: 'pie',
                center: ['75%', '50%'],
                radius: ['40%', '50%'],
                avoidLabelOverlap: true,
                label: {
                    normal: {
                        formatter: '{b} {d}%',
                        textStyle: {
                            fontSize: 18,
                            color: '#00ccfe'
                        }
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#00ccfe'
                        }
                    }
                },
                data: [

                ]
            },
            //此处再新增一个饼状图
            {
                name: '贫血病',
                type: 'pie',
                center: ['75%', '50%'],
                clockWise: true,
                hoverAnimation: false,
                radius: ['28%', '32%'],
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: 1,
                    label: {
                        normal: {
                            formatter: '贫血病',
                            textStyle: {
                                color: '#00ccfe',
                                fontSize: 16
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#00ccfe',
                            borderColor: '#00ccfe',
                            borderWidth: 2
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0)',
                        textStyle: {
                            color: 'rgba(0,0,0,0)'
                        }
                    }
                }]
            },
            //再加

        ]
    },
    options: [{
        series: [{}, {
            startAngle: 15,
            name: dataMap.country.Vietnam,
            data: [{
                value: dataMap.values.Vietnam.town,
                name: '城镇',
                itemStyle: {
                    normal: {
                        color: '#3db5f5'
                    }
                }
            }, {
                value: dataMap.values.Vietnam.village,
                name: '农村',
                itemStyle: {
                    normal: {
                        color: '#ee8064'
                    }
                }
            }]
        }, {
            startAngle: 178,
            name: dataMap.country.Vietnam,
            data: [{
                value: dataMap.blood.Vietnam.town,
                name: '妇女'
            }, {
                value: dataMap.blood.Vietnam.village,
                name: '儿童'
            }]
        }, {}]
    }, {
        series: [{}, {
                name: dataMap.country.India,

                data: [{
                    value: dataMap.values.India.town,
                    name: '城镇',
                    itemStyle: {
                        normal: {
                            color: '#3db5f5'
                        }
                    }
                }, {
                    value: dataMap.values.India.village,
                    name: '农村',
                    itemStyle: {
                        normal: {
                            color: '#ee8064'
                        }
                    }
                }]
            }, {

                name: dataMap.country.India,
                data: [{
                    value: dataMap.blood.India.town,
                    name: '妇女'
                }, {
                    value: dataMap.blood.India.village,
                    name: '儿童'
                }]
            }, {}


        ]
    }, {
        series: [{}, {
                name: dataMap.country.Myanmar,
                data: [{
                    value: dataMap.values.Myanmar.town,
                    name: '城镇',
                    itemStyle: {
                        normal: {
                            color: '#3db5f5'
                        }
                    }
                }, {
                    value: dataMap.values.Myanmar.village,
                    name: '农村',
                    itemStyle: {
                        normal: {
                            color: '#ee8064'
                        }
                    }
                }]
            }, {
                name: dataMap.country.Myanmar,
                data: [{
                    value: dataMap.blood.Myanmar.town,
                    name: '妇女'
                }, {
                    value: dataMap.blood.Myanmar.village,
                    name: '儿童'
                }]
            }, {}


        ]
    }, {
        series: [{}, {
                name: dataMap.country.Thailand,
                data: [{
                    value: dataMap.values.Thailand.town,
                    name: '城镇',
                    itemStyle: {
                        normal: {
                            color: '#3db5f5'
                        }
                    }
                }, {
                    value: dataMap.values.Thailand.village,
                    name: '农村',
                    itemStyle: {
                        normal: {
                            color: '#ee8064'
                        }
                    }
                }]
            }, {
                name: dataMap.country.Thailand,
                data: [{
                    value: dataMap.blood.Thailand.town,
                    name: '妇女'
                }, {
                    value: dataMap.blood.Thailand.village,
                    name: '儿童'
                }]
            }, {}


        ]
    }, {
        series: [{}, {
                name: dataMap.country.Indonesia,
                data: [{
                    value: dataMap.values.Indonesia.town,
                    name: '城镇',
                    itemStyle: {
                        normal: {
                            color: '#3db5f5'
                        }
                    }
                }, {
                    value: dataMap.values.Indonesia.village,
                    name: '农村',
                    itemStyle: {
                        normal: {
                            color: '#ee8064'
                        }
                    }
                }]
            }, {
                name: dataMap.country.Indonesia,
                data: [{
                    value: dataMap.blood.Indonesia.town,
                    name: '妇女'
                }, {
                    value: dataMap.blood.Indonesia.village,
                    name: '儿童'
                }]
            }, {}


        ]
    }]
};