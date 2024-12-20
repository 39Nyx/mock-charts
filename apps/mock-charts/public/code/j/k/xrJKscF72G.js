option = {
    legend: {
        orient: 'vertical',
        itemWidth: 12,
        itemHeight: 12,
        left: 'center',
        top: 'bottom',
        textStyle: {
            color: '#888'
        },
        icon: 'circle',
        formatter: function(name) {
            var data = option.series[0].data
            for (var i = 0; i < data.length; i++) {
                if (name == data[i].name) {
                    return name + '  ' + data[i].value
                }
            }

        },
        data: [{
            name: '未上报企业数'
        }, {
            name: '已上报企业数'
        }]

    },
    calculable: true,
    label: {
        normal: {
            show: false
        }
    },
    series: [{
        name: '隐患上报情况',
        type: 'pie',
        radius: ['50%', '70%'],
        center: ['50%', '40%'],
        label: {
            normal: {
                show: false
            }
        },
        data: [{
                value: 22,
                name: '已上报企业数',
                itemStyle: {
                    normal: {
                        color: '#479B17',
                        label: {
                            show: true,
                            position: 'center',
                            formatter: '隐患上报\n{d}%',
                            textStyle: {
                                color: '#479B17',
                                position: 'center',
                                fontSize: '14'
                            }
                        }
                    },
                    emphasis: {
                        label: {
                            show: true,
                            textStyle: {
                                fontSize: '18',
                                fontWeight: 'bold'
                            }
                        }
                    }
                }
            },
            {
                value: 11,
                name: '未上报企业数',
                itemStyle: {
                    normal: {
                        color: '#E7E6EC'
                    },
                    emphasis: {
                        color: '#E7E6EC'
                    }

                },
                labelLine: {
                    show: false
                }
            }
        ]
    }]
}