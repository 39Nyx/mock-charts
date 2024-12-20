option = {
    tooltip: {
        showContent: false,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                opacity: 0
            }
        }
    },
    xAxis: [{
        type: 'value',
        max: 100,
        show: false
    }],
    yAxis: [{
        type: 'category',
        show: false,
        data: ['周一']
    }],
    series: [{
        name: 'process',
        type: 'bar',
        barWidth: 14,
        label: {
            normal: {
                show: true,
                color: '#FFFFFF',
                offset: [0, -1],
                position: 'insideRight'
            }
        },
        itemStyle: {
            normal: {
                color: '#00BB00',
                barBorderRadius: 4,
                shadowBlur: 7,
                shadowColor: '#00EE00'
            },
            emphasis: {
                color: '#00BB00',
                shadowBlur: 15,
                shadowColor: '#00EE00'
            }
        },
        markPoint: {
            symbol: 'pin',
            symbolSize: 25,
            symbolOffset: [0, 2],
            data: [{
                coord: [10, 'process'],
                label: {
                    show: true,
                    formatter: '保存'
                },
                itemStyle: {
                    normal: {
                        color: '#666666'
                    }
                }

            }, {
                coord: [20, 'process'],
                label: {
                    show: true,
                    formatter: '提交'
                },
                itemStyle: {
                    normal: {
                        color: '#666666'
                    }
                }
            }, {
                coord: [50, 'process'],
                label: {
                    show: true,
                    formatter: '源码已提供'
                },
                itemStyle: {
                    normal: {
                        color: '#666666'
                    }
                }
            }, {
                coord: [70, 'process'],
                label: {
                    show: true,
                    formatter: '已下载'
                },
                itemStyle: {
                    normal: {
                        color: '#666666'
                    }
                }
            }, {
                coord: [90, 'process'],
                label: {
                    show: true,
                    formatter: '已反馈待确认'
                },
                itemStyle: {
                    normal: {
                        color: '#666666'
                    }
                }
            }, {
                coord: [100, 'process'],
                label: {
                    show: true,
                    formatter: '已确认'
                },
                itemStyle: {
                    normal: {
                        color: '#666666'
                    }
                }
            }]
        },
        data: [40]
    }]
};