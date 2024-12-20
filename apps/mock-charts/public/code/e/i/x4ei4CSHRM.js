let value = 40;
let name = '统计';
option = {
    backgroundColor: '#061740',
    title: {
        // text: '{a|' + value + '}{c|%}',
        text: '{a|' + value + '%}{c|\n' + name + '}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontSize: 48,
                    color: '#29EEF3',
                },

                c: {
                    fontSize: 20,
                    color: '#fff',
                    // padding: [5,0]
                },
            },
        },
    },
    series: [
        {
            type: 'pie',
            name: '外圆环',
            radius: ['61%', '63%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: '#304867',
                },
            },
            label: {
                show: false,
            },
            data: [100],
        },
        {
            name: '吃猪肉频率',
            type: 'pie',
            radius: ['58%', '45%'],
            silent: true,
            clockwise: true,
            startAngle: 90,
            z: 0,
            zlevel: 0,
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: value,
                    name: '',
                    itemStyle: {
                        normal: {
                            color: 'red',
                        },
                    },
                },
                {
                    value: 100 - value,
                    name: '',
                    label: {
                        normal: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#173164',
                        },
                    },
                },
            ],
        },
        {
            name: '',
            type: 'gauge',
            radius: '58%',
            center: ['50%', '50%'],
            startAngle: 0,
            endAngle: 359.9,
            splitNumber: 60,
            hoverAnimation: true,
            axisTick: {
                show: false,
            },
            splitLine: {
                length: 60,
                lineStyle: {
                    width: 5,
                    color: '#061740',
                },
            },
            axisLabel: {
                show: false,
            },
            pointer: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    opacity: 0,
                },
            },
            detail: {
                show: false,
            },
            data: [
                {
                    value: 0,
                    name: '',
                },
            ],
        },
        {
            type: 'pie',
            name: '内环',
            radius: ['40%', '42%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: '#304867',
                },
            },
            label: {
                show: false,
            },
            data: [100],
        },
    ],
};
