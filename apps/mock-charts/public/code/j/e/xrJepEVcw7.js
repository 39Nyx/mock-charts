option = {
    series: [{
        name: '完成工作量',
        type: 'pie',
        radius: ['25%', '30%'],
        center: ['30%', '30%'],
        startAngle: 225,
        clockWise: false,
        hoverAnimation: false,
        itemStyle: {
            normal: {
                color: ['rgba(176, 212, 251, 1)'],
                label: {
                    position: 'center'
                },
                labelLine: {
                    show: false
                }
            }
        },
        data: [{
            value: 75,
            name: '完成工作量',
            label: {
                formatter: '完成比例',
                textStyle: {
                    color: '#f00',
                    fontSize: 16
                }
            },
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#367bec' // 100% 处的颜色
                        }]
                    },
                },
                emphasis: {
                    color: '#00cefc' // 鼠标悬浮上去完成的圆环的颜色
                }
            },
        }, {
            value: 25,
            name: '%',
            label: {
                normal: {
                    formatter: '\n55%',
                    textStyle: {
                        color: '#007ac6',
                        fontSize: 30

                    }
                }
            }
        }]
    }, ]
};