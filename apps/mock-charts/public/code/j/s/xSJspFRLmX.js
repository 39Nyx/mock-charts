var option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '20%'
    },
    legend: {
        bottom: '3%',
        icon: 'circle',
        textStyle: {
            color: '#000'
        },
        data: ['需上报数', '已上报数', '已审批数']
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,0,0, 1)',
            }
        },
        axisLabel:{
           rotate: 45, 
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#EFEFEF',
            }
        },
        data: ['2018年8月', '2018年9月', '2018年10月', '2018年11月', '2018年12月', '2019年1月', '2019年2月', '2019年3月','2019年4月','2019年5月','2019年6月','2019年7月','2019年8月']
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,0,0, 1)',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#EFEFEF',
            }
        },
        axisLabel: {
            color:'#000',
            formatter: '{value}'
        }
    },
    series: [{
            name: '需上报数',
            type: 'line',
            //是否显示平滑曲线
            smooth: true,
            itemStyle: {
                normal: {
                    color: '#F64837',
                    borderWidth: 5
                },
            },
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(246,72,55, 0.5)',
                        }, {
                            offset: 1,
                            color: 'rgba(246,72,55, 0.1)',
                        }],
                        globalCoord: false
                    },
                }
            },
            data: [135, 124, 153, 148, 174, 150, 167, 136,150,123,166,173,188],
            markPoint: {
                data: [{
                        type: 'max',
                        name: '最大值',
                        itemStyle: {
                            normal: {
                                color: '#d90051',
                            },
                        },
                    },
                    {
                        type: 'min',
                        name: '最小值',
                        itemStyle: {
                            normal: {
                                color: '#01bc8f',
                            },
                        },
                    }
                ]
            }
        },
        {
            name: '已上报数',
            type: 'line',
            //是否显示平滑曲线
            smooth: true,
            itemStyle: {
                normal: {
                    color: '#1089E6',
                    borderWidth: 5
                },
            },
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(16,137,230, 0.5)',
                        }, {
                            offset: 1,
                            color: 'rgba(16,137,230, 0.1)',
                        }],
                        globalCoord: false
                    },
                }
            },
            data: [98, 88, 123, 126, 100, 116, 127, 99,110,87,96,90,125],
            markPoint: {
                data: [{
                        type: 'max',
                        name: '最大值',
                        itemStyle: {
                            normal: {
                                color: '#d90051',
                            },
                        },
                    },
                    {
                        type: 'min',
                        name: '最小值',
                        itemStyle: {
                            normal: {
                                color: '#01bc8f',
                            },
                        },
                    }
                ]
            }
        },
        {
            name: '已审批数',
            type: 'line',
            //是否显示平滑曲线
            smooth: true,
            itemStyle: {
                normal: {
                    color: '#F9B44A',
                    borderWidth: 5
                },
            },
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(249,180,74, 0.5)',
                        }, {
                            offset: 1,
                            color: 'rgba(249,180,74, 0.1)',
                        }],
                        globalCoord: false
                    },
                }
            },
            data: [67, 76, 98, 112, 69, 87, 90, 76,56,67,68,73,96],
            markPoint: {
                data: [{
                        type: 'max',
                        name: '最大值',
                        itemStyle: {
                            normal: {
                                color: '#d90051',
                            },
                        },
                    },
                    {
                        type: 'min',
                        name: '最小值',
                        itemStyle: {
                            normal: {
                                color: '#01bc8f',
                            },
                        },
                    }
                ]
            }
        }
    ]
};