const itemColor= {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'red' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'blue' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    };
option = {
    backgroundColor: '#0a3766',
    textStyle: {
        color: '#fff'
    },
    series: [{
        type: 'pie',
        silent: true,
        animation: false,
        hoverAnimation: false,
        radius: ['50%', '90%'],
        data: [{
                value: 0,
                itemStyle: {
                    normal: {
                        color: '#17315b'
                    }
                }
            },

        ]
    }, {
        type: 'pie',
        radius: ['50%', '85%'],
        hoverAnimation: false,
        legendHoverLink: false,
        startAngle: 90,
        data: [{
            value: 335,
            name: '占有率',
            label: {
                normal: {
                    show:false,
                    color: '#3bcdff'
                }
            },
            labelLine:{
              normal:{
                  show:false
              },
              emphasis:{
                  show:false
              }
            },
            itemStyle: {
                normal: {
                    color:itemColor
                },
                emphasis: {
                    color:itemColor
                }
            }
        }, {
            value: 310,
            name: '占位',
            labelLine: {
                normal: {
                    show: false,
                },
                emphasis:{
                    show:false
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis:{
                    show:false
                }
            },
            itemStyle: {
                normal: {
                    color: '#17315b'
                },
                emphasis: {
                    color: '#17315b'
                }
            }
        }]
    }]
};