var placeHolderStyle = {
    normal: {
        color: '#17315b', //未完成的圆环的颜色
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: '#17315b' //未完成的圆环的颜色
    }
};

var option = {
    title : {
        text: '订单利润与亏损占比',
        subtext: '纯属虚构',
        x:'center',
        textStyle:{
            color:'#fff'
        },
        subtextStyle:{
            color:'#fff'
        }
    },
    backgroundColor: {
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 1,
        colorStops: [{
            offset: 0,
            color: '#00498a' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#142541' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['亏损', '利润'],
        textStyle:{
            color:'#fff'
        }
    },
    color: ['#2dfa7a', '#f15987'],
    calculable: true,
    tooltip: {
        trigger: 'item',
        formatter: "{a}<br/>{b}: {c} ({d}%)"
    },
    series: [{
            name: '订单利润与亏损占比',
            type: 'pie',
            silent: true,
            animation: false,
            radius: 220,
            center: ['50%', '50%'],
            hoverAnimation: false,
            tooltip: {
                show: false
            },
            data: [{
                value: 0,
                itemStyle: placeHolderStyle,
            }]
        }, {
            name: '订单利润与亏损占比',
            type: 'pie',
            hoverAnimation: false,
            labelLine: {
                normal: {
                    show: true
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside', //标签的位置
                    formatter: "{b}:{d}%",
                    textStyle: {
                        color: '#fff',
                        fontSize: 14,
                    }
                }
            },
            radius: 200,
            center: ['50%', '50%'],
            data: [{
                value: 350,
                name: '亏损'
            }, {
                value: 3150,
                name: '利润'
            }]
        }

    ]
};