/*
    @songcxa
    @2017-11-15
*/
option ={
                color: ["rgba(1,244,38,0.8)"],
                title: {
                    text: '酒店接待情况',
                    x: 'center', y: 0,
                    textStyle: {
                        color: '#c2c6c9', fontSize:13
                    }
                },
                tooltip: {
                    show: true,
                    trigger: 'item',
                    formatter: "{a}:<br />{c}万人"
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '2%',
                    top: "15%",
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            formatter: '{value}',
                            textStyle: {
                                fontSize: 10,
                                color: '#00a0e8'
                            }
                        },
                        data: ["特色客栈","星级酒店","经济型酒店"]
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#c050',
                            }
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            formatter: '{value}',
                            textStyle: {
                                fontSize: 10,
                                color: '#00a0e8'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#113557'
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '分时客流量',
                        type: 'bar',
                        barWidth:'30%',
                         itemStyle: {
                            normal: {
                                color: function(params) {
                                    // build a color map as your need.
                                    var colorList = [
                                      '#2bdeff','#1897fe','#9d50ff','#60C0DD','#27727B',
                                       '#FE8463','#9BCA63','#FAD860','#F3A43B', '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                                    ];
                                    return colorList[params.dataIndex]
                                },
                                label: {
                                    show: false,
                                    position: 'top',
                                    formatter: '{b}\n{c}'
                                }
                            }
                        },
                        data: [20,44.87,56.32],

                    },
                ]
            }