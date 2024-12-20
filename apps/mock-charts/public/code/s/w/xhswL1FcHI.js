var labelData = [];
var labelData1 = [];
for (var i = 0; i < 150; ++i) {
    labelData.push({
        value: 1,
        name: i,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,
                    [{
                            offset: 0,
                            color: '#6dfbff'
                        },
                        {
                            offset: 1,
                            color: '#02aeff'
                        }
                    ]
                )
            }
        }
    });
}
option = {
    backgroundColor: '#1f1e26',
    title: [{
        text: '49/50件',
        x: '50%',
        y: '43%',
        textAlign: 'center',
        textStyle: {
            fontSize: '30',
            fontWeight: '100',
            color: '#FCAA31',
            textAlign: 'center',
        },
    }, {
        text: '受理量/举报数',
        left: '50%',
        top: '52%',
        textAlign: 'center',
        textStyle: {
            fontSize: '18',
            fontWeight: '400',
            color: '#FFFFFF',
            textAlign: 'center',
        },
    } ],
    polar: {
        radius: ['51%', '47%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        max: 100,
        show: false,
        startAngle: 0,
    },
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
    series: [{
            name: '',
            type: 'bar',
            roundCap: true,
            barWidth: 60,
            showBackground: true,
            backgroundStyle: {
                color: '#464451',
            },
            data: [98],
            coordinateSystem: 'polar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: '#0ff'
                    }, {
                        offset: 1,
                        color: '#02aeff'
                    }]),
                }
            }
        },
        {
            hoverAnimation: false,
            type: 'pie',
            z: 2,
            data: labelData,
            radius: ['52%', '59%'],
            zlevel: -2,
            itemStyle: {
                normal: {
                    borderColor: '#1f1e26',
                    borderWidth: 4,
                }
            },
            label: {
                normal: {
                    position: 'inside',
                    show: false,
                }
            },
        }

    ]
};