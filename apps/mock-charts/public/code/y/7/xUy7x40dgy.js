let value = 55.33;
let title = '超期率';
let int = value.toFixed(2).split('.')[0];
let float = value.toFixed(2).split('.')[1];

option = {
    backgroundColor: '#051F54',
    title: {
        text: '{a|' + int + '}{b|.' + float + '}\n{c|' + title + '}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontSize: 48,
                    color: '#29EEF3'
                },
                b: {
                    fontSize: 20,
                    color: '#29EEF3',
                    padding: [0, 0, 14, 0]
                },
                c: {
                    fontSize: 20,
                    color: '#ffffff',
                    padding: [5, 0]
                }
            }
        }
    },
    series: [{
            type: 'gauge',
            radius: '60%',
            clockwise: true,
            startAngle: '90',
            endAngle: '-269.9999',
            splitNumber: 50,
            detail: {
                offsetCenter: [0, -20],
                formatter: ' '
            },
            pointer: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [0.1, '#e2e14f'],
                        [0.3, '#00a7fb'],
                        [0.5, '#00e0fb'],
                        [1, '#00ffb4']
                    ],
                    width: 30
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 32,
                lineStyle: {
                    color: '#051F54',
                    width: 6
                }
            },
            axisLabel: {
                show: false
            }
        },
        {
            type: 'pie',
            name: '内层细圆环',
            radius: ['43%', '45%'],
            hoverAnimation: false,
            startAngle: 200,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#00a7fb' // 0% 处的颜色
                        }, {
                            offset: 0.3,
                            color: '#00a7fb80' // 100% 处的颜色
                        }, {
                            offset: 0.4,
                            color: '#00a7fb50' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: '#00a7fb10' // 100% 处的颜色
                        }],
                    }
                }
            },
            label: {
                show: false
            },
            data: [100]
        }
    ]
};