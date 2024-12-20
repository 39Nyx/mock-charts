option = {
            color: ['#3398DB'],
            grid: {
                left: '3%',
                right: '4%',
                bottom: '145px',
                containLabel: true
            },
             xAxis: [{
                type: 'value',
                min: 0,
                max: 555,
                splitLine: {
                    show: false
                },
                 axisLine: {
                        show: false
                 },
                 axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
            }],
            yAxis: [{
                type: 'value',
                min: 0,
                max: 700,
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
            }],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '20px',
                    label: {
                        show: true,
                        position: 'top',
                        formatter: function (params) {
                            return params.value + "%"
                        }
                    },
                    data: [
                        {value: [100,150]},
                         {value: [200, 300]},
                          {value: [300, 210]},
                           {value: [400, 240]},
                        ]
                }, {
                    type: 'scatter',
                    coordinateSystem: 'cartesian2d',
                    zlevel: 3,
                    hoverAnimation: false,
                    symbolSize: 125,
                    itemStyle: {
                        opacity: 1
                    },
                    data: [{
                        name: '文字1',
                        value: [100, -80],
                        symbolSize: [80, 80],
                        symbol: 'circle',
                        itemStyle: {
                            color: 'rgba(0,89,255,0.08)',
                        },
                        label: {
                            show: true,
                            position: 'inside',
                            textStyle: {
                                color: '#fff',
                                fontSize: 0
                            },
                            offset: [0, 0],
                            formatter: '{a|测试}',
                            rich: {
                                a: {
                                    fontSize: 24,
                                    color: '#fff',
                                    align: 'left',
                                    lineHeight: 34,
                                    width: 50,
                                    verticalAlign: 'middle',
                                    fontWeight: 'bolder',
                                }
                            }
                        }
                    }, {
                        name: '文字2',
                        value: [200, -80],
                        symbolSize: [80, 80],
                        symbol: 'circle',
                        itemStyle: {
                            color: 'rgba(0,89,255,1)',
                        },
                        label: {
                            show: true,
                            position: 'inside',
                            textStyle: {
                                color: '#fff',
                                fontSize: 0
                            },
                            offset: [0, 0],
                            formatter: '{a|测试}',
                            rich: {
                                a: {
                                    fontSize: 24,
                                    color: '#ffbb00',
                                    align: 'left',
                                    lineHeight: 34,
                                    width: 50,
                                    verticalAlign: 'middle',
                                    fontWeight: 'bolder',
                                }
                            }
                        }
                    }, {
                        name: '文字2',
                        value: [300, -80],
                        symbolSize: [80, 80],
                        symbol: 'circle',
                        itemStyle: {
                            color: 'rgba(0,89,255,1)',
                        },
                        label: {
                            show: true,
                            position: 'inside',
                            textStyle: {
                                color: '#fff',
                                fontSize: 0
                            },
                            offset: [0, 0],
                            formatter: '{a|测试}',
                            rich: {
                                a: {
                                    fontSize: 24,
                                    color: '#ffbb00',
                                    align: 'left',
                                    lineHeight: 34,
                                    width: 50,
                                    verticalAlign: 'middle',
                                    fontWeight: 'bolder',
                                }
                            }
                        }
                    }, {
                        name: '文字2',
                        value: [400, -80],
                        symbolSize: [80, 80],
                        symbol: 'circle',
                        itemStyle: {
                            color: 'rgba(0,89,255,1)',
                        },
                        label: {
                            show: true,
                            position: 'inside',
                            textStyle: {
                                color: '#fff',
                                fontSize: 0
                            },
                            offset: [0, 0],
                            formatter: '{a|测试}',
                            rich: {
                                a: {
                                    fontSize: 24,
                                    color: '#ffbb00',
                                    align: 'left',
                                    lineHeight: 34,
                                    width: 50,
                                    verticalAlign: 'middle',
                                    fontWeight: 'bolder',
                                }
                            }
                        }
                    }]
                }, {
                    name: '线段',
                    type: 'lines',
                    coordinateSystem: 'cartesian2d',
                    zlevel: 1,
                    lineStyle: {
                        normal: {
                            width: 8,
                            type: 'solid',
                            color: '#46E7FF',
                            opacity: 0.1
                        }
                    },
                    itemStyle: {
                        normal: {
                            opacity: 1
                        }
                    },
                    data: [{
                        coords: [
                            [130, -80],
                            [400, -80]
                        ]
                    }]
                }, {
                    name: '线段动画',
                    type: 'lines',
                    coordinateSystem: 'cartesian2d',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 3,
                        trailLength: 0.2,
                        symbolSize: 6
                    },
                    lineStyle: {
                        normal: {
                            width: 6,
                            opacity: 0,
                            color: '#ffbb00'
                        }
                    },
                    data: [{
                        coords: [
                            [130, -80],
                            [400, -80]
                        ]
                    }]
                }
            ]
        };
