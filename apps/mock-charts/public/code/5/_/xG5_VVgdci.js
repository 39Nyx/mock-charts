let value = '62.65';
option = {
    backgroundColor: '#020f18',
    title: {
        text: '{a|' + value + '}{c|%}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontSize: 33,
                    color: '#fff',
                    fontWeight: '400',
                },
                c: {
                    fontSize: 20,
                    color: '#ffffff',
                },
            },
        },
    },
    xAxis: {
        data: [],
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    yAxis: {
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    grid: {
        top: '55%',
        left: '40%',
        bottom: '46%',
        right: '40%',
    },
    series: [
        {
            name: '外圆',
            type: 'pie',
            radius: ['36%', '42%'],
            silent: true,
            clockwise: true,
            startAngle: 90,
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: value,
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(24, 134, 144, 1)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(76, 228, 230, 1)', // 100% 处的颜色
                                    },
                                ],
                                global: false, // 缺省为 false
                            },
                        },
                    },
                },
                {
                    value: 100 - value,
                    itemStyle: {
                        normal: {
                            color: 'rgba(76, 228, 230, 0.1)',
                        },
                    },
                },
            ],
            z: 2,
            zlevel: 2,
        },
        {
             name: '内圆',
            type: 'pie',
            radius: [0, '25%'], //蓝色
            hoverAnimation:false,
            itemStyle: {
                normal: {
                    shadowBlur: 20,
                    shadowColor: '#000',
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(76, 228, 230, 1)', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(24, 134, 144, 0.8)', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
            },
            legendHoverLink: false,
            label: {
                show: false,
            },
            data: [100],
            z: 3,
        },
    ],
};
