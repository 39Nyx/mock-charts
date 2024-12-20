// var format = '{c}%';
var format = '{c}㎡';

var dataStyle = {
    normal: {
        formatter: format,
        position: 'center',
        show: true,
        textStyle: {
            fontSize: '24',
            fontWeight: 'normal',
            color: '#fff'
        }
    }
};
var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: "#787679",
        borderWidth: 0
    },
    emphasis: {
        color: "#787679",
        borderWidth: 0
    }
};
option = {
    backgroundColor: '#142058',
    title: [{
        text: '全国排名：21名',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#fc002f',
            fontSize: 20
        }
    }, {
                text: '海南省',
                left: '24%',
                top: '75%',
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    color: '#fff',
                    textAlign: 'center',
                },
            }, {
                text: '全国平均水平',
                left: '75%',
                top: '75%',
                textAlign: 'center',
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    textAlign: 'center',
                },
            }],
    series: [{
            center: [
                "25.0%",
                "50%"
            ],
            radius: [
                "65",
                "85"
            ],
            clockWise: false,
            hoverAnimation: false,
            type: "pie",
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            fontSize: 24,
                            fontWeight: "normal"
                        },
                        position: "center"
                    },
                    labelLine: {
                        show: false
                    },
                    color: "#168df5",
                    borderWidth: 0
                },
                emphasis: {
                    color: "#168df5",
                    borderWidth: 0
                }
            },
            data: [{
                    value: 0.16,
                    itemStyle: placeHolderStyle,
                },
                {
                    value: 0.17,
                    label: dataStyle,
                    name: '海南省',
                    // label: {
                    // normal: {
                        // formatter: '完成率',
                        // position: 'right',
                        // textStyle: {
                            // fontSize: 30
                        // }
                    // }
                // }
                    
                }
            ]
        },
        {
            center: [
                "75.0%",
                "50%"
            ],
            radius: [
                "65",
                "85"
            ],
            clockWise: false,
            hoverAnimation: false,
            type: "pie",
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            fontSize: 24,
                            fontWeight: "normal"
                        },
                        position: "center"
                    },
                    labelLine: {
                        show: false
                    },
                    color: "#10cf55",
                    borderWidth: 0
                },
                emphasis: {
                    color: "#10cf55",
                    borderWidth: 0
                }
            },
            data: [{
                    value: 25.71,
                    itemStyle: placeHolderStyle,
                },
                {
                    value: 23.88,
                    label: dataStyle,
                    name: '全国平均水平',
                }
            ]
        }
    ]
};