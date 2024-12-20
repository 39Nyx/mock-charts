
var color1='rgba(194,166,253,1)',
color2 = 'rgba(194,166,253,0.5)',
color3 =  'rgba(194,166,253,0.3)',
textData='网\n页\n平\n均\n首\n屏\n时\n延',
formatterData =  '{d}s',
data=4.1778,
zhname= '网页平均首屏时延';



 var dataStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            shadowBlur: 40,
            shadowColor: 'rgba(40, 40, 40, 0.5)'
        }
    };
    var placeHolderStyle1 = {
        normal: {
            color: color1,//未完成的圆环的颜色
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: color1//未完成的圆环的颜色
        }
    };
    var placeHolderStyle2 = {
        normal: {
            color: color2,//未完成的圆环的颜色
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: color2//未完成的圆环的颜色
        }
    };
    var placeHolderStyle3 = {
        normal: {
            color: color3,//未完成的圆环的颜色
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: color3 //未完成的圆环的颜色
        }
    };
    option = {
        title: {
            text: textData,
            x: '5%',
            y: 'middle',
            textStyle: {

                fontWeight: 'normal',
                color: '#fff',
                fontSize: 8
            }
        },
        color: ['#eb644b', '#313443', '#fff'],
        legend: {
            show: false,
            itemGap: 5,
            data: ['01']
        },
        toolbox: {
            show: false,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
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
            name: 'Line 1',
            type: 'pie',
            animation: false,
            clockWise: false,
            radius: ['56%', '64%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            avoidLabelOverlap: false,
            stillShowZeroSum: false,
            silent: true,
            tooltip: {
                show: false
            },
            data: [{
                value: data,
                name: '02',
                itemStyle: placeHolderStyle2
            }, {
                value: 100 - data,
                name: 'invisible',
                itemStyle: placeHolderStyle3
            }

            ]

        }, {
            name: 'Line 1',
            type: 'pie',
            animation: false,
            clockWise: false,
            radius: ['80%', '64%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            avoidLabelOverlap: false,
            silent: true,
            tooltip: {
                show: false
            },
            data: [{
                value: data,
                name: '02',
                label: {
                    normal: {
                        formatter: formatterData,
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '15',
                            fontWeight: 'normal',
                            color: color1
                        }
                    }
                },
                itemStyle: placeHolderStyle1
            }, {
                value: 100 - data,
                name: 'invisible',
                itemStyle: placeHolderStyle2
            }

            ]
        }]
    };