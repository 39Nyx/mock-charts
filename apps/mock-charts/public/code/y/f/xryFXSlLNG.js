 var option = {

                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            animation: false
                        },
                        formatter: function (a) {
                            return (
                                a[0]['axisValueLabel'] + "<br>" +
                                '<span style="display: inline-block; margin-right: 5px; border-radius: 10px; width: 9px; height: 9px; background-color: ' + a[0]['color'] + '"></span>' +
                                a[0]['seriesName'] + ': ' + a[0]['value'] + '万' + "<br>" +
                                '<span style="display: inline-block; margin-right: 5px; border-radius: 10px; width: 9px; height: 9px; background-color: ' + a[1]['color'] + '"></span>' +
                                a[1]['seriesName'] + ': ' + a[1]['value'] + '万小时'
                            );
                        }
                    },
                    color: ['#fbad0b','#4ecb73'],
                    axisPointer: {
                        link: {xAxisIndex: 'all'}
                    },
                    grid: [{
                        left: '3%',
                        right: '4%',
                        bottom: '14%',
                        top:'30',
                        height:'32%',
                        containLabel: true
                    }, {
                        left: '3%',
                        right: '4%',
                        bottom: '14%',
                        top:'60%',
                        height:'32%',
                        containLabel: true
                    }],
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: true,
                            axisLine: {
                                lineStyle: {
                                    color: '#888888'
                                }
                            },
                            data: ["8月","9月","10月","11月","12月","1月"],
                            axisLabel: {
                                textStyle: {
                                    color: '#888888',
                                    fontSize: '10'
                                },
                            },
                        },
                        {
                            gridIndex: 1,
                            type: 'category',
                            boundaryGap: true,
                            axisLine: {
                                lineStyle: {
                                    color: '#888888'
                                }
                            },
                            axisTick: {
                                alignWithLabel: true
                            },
                            position: 'bottom',
                            data: ["8月","9月","10月","11月","12月","1月"],
                            axisLabel: {
                                textStyle: {
                                    color: '#888888',
                                    fontSize: '10'
                                },
                            },
                        }
                    ],
                    yAxis: [
                        {
                            name: '',
                            type: 'value',
                            nameTextStyle:{
                                color:'#888888',
                                fontSize:10
                            },
                            splitLine: {
                                lineStyle: {
                                    type: 'dashed',
                                    color: '#e6e6e6'
                                }
                            },
                            axisLine: {
                                onZero: false,
                                lineStyle: {
                                    color: '#888888'
                                }
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#888888',
                                    fontSize: '10'
                                },
                            },
                        },
                        {
                            gridIndex: 1,
                            name: '',
                            type: 'value',
                            nameTextStyle:{
                                color:'#888888',
                                fontSize:10
                            },
                            inverse: false,
                            splitLine: {
                                lineStyle: {
                                    type: 'dashed',
                                    color: '#e6e6e6'
                                }
                            },
                            axisLine: {
                                onZero: false,
                                lineStyle: {
                                    color: '#888888'
                                }
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#888888',
                                    fontSize: '10'
                                },
                            },
                        }
                    ],
                    series: [
                        {
                            name: 'vv',
                            type: 'line',
                            symbolSize: 8,
                            data: [60,30,80,40,50,30],
                            areaStyle: {
                                normal: {
                                    color:new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                    [
                        {offset: 0, color: 'yellow'},   
                        {offset: 1, color: 'white'}
                    ]
                 ),
                                    opacity: 0.51
                                }
                            },

                        },
                        {
                            name: '使用时长',
                            type: 'bar',
                            xAxisIndex: 1,
                            barWidth: '20',
                            yAxisIndex: 1,
                            data: [60,30,80,40,50,30],
                        }
                    ]
                };