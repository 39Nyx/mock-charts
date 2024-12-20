option = {
    title: {
        text: ['{a|5}' + '{b|/13}\n' + '{c|待办}' + '{d|/已完成}'],
        textStyle: {
            rich: {
                a: {
                    color: '#000',
                    fontSize: 50,
                    width:100,
                    lineHeight:100
                },
                b: {
                    fontSize: 30,
                    color: '#9da1a7',
                    fontWeight: 600,
                    lineHeight:100
                },
                c: {
                    fontSize: 12,
                    color: '#000',
                    width:100,
                },
                d: {
                    fontSize: 12,
                    color: '#000',
                },
            }
        },
        left: '20%',
        top: '45%'

    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [{
        name: 'xxxx',
        type: 'pie',
        center: ['70%', '50%'],
        radius: ['30%', '45%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
                value: 5,
                name: '待办',
                label: {
                    normal: {
                        formatter: '{d}%',
                        textStyle: {
                            fontSize: 16,
                            fontWeight: 'bold'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f72e00'
                    },
                    emphasis: {
                        color: '#f72e00'
                    }
                }
            },
            {
                value: 13,
                name: '占位',
                label: {
                    normal: {
                        formatter: '\n待办',
                        textStyle: {
                            color: '#555',
                            fontSize: 12
                        }
                    }
                },

                itemStyle: {
                    normal: {
                        color: '#e1e3e4'
                    },
                    emphasis: {
                        color: '#e1e3e4'
                    }
                },
                hoverAnimation: false
            }
        ]
    }]
};