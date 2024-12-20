 var xData = ["已完成", "进行中", "未启动"];
            var chartData = [{ name: "已完成", value: 30, symbol1: "image://../img/dj_ycw.png"},
                { name: "进行中", value: 25, symbol1: "image://../img/dj_wwc.png"},
                { name: "未启动", value: 27, symbol1: "image://../img/1.png"},
            ];
            var itemData = [];//分割条（数据）
            // 取出每一条数据value,作为显示数据
            chartData.forEach(function (items, index) {
                itemData.push(items.value);
            });
            var maxValue = Math.max.apply(null, itemData);
            //富文本配置
            var rich = {
                unit: {
                    color: '#67ddff',
                    fontSize: 14,
                    fontFamily: 'Noto Sans CJK SC'
                }
            };
          option = {
                grid: {
                    left: '20',
                    right: '20',
                    bottom: '30',
                    top: '50'
                },
                xAxis: [{
                    type: 'category',
                    data: xData,
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        interval: 0,
                        margin: 5,
                        textStyle: {
                            color: '#67ddff',
                            fontSize: 18,
                            fontFamily: 'Noto Sans CJK SC'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            color: 'rgb(53,88,108)'
                        }
                    }
                }],
                yAxis: [{
                    type: 'value',
                    max: maxValue,
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: ['#8e070c', '#1b70a1', '#7c7a39', '#986001'],
                            type: 'dashed',
                            width: 2
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false

                    },
                    axisLabel: {
                        show: false,
                        interval: 0,
                        margin: 15,
                        textStyle: {
                            color: '#85d7f9',
                            fontSize: 20,
                            fontFamily: 'Noto Sans CJK SC'
                        }
                    }
                }],
                series: [//需要背景得自己另行增加一个层
                    {
                        type: 'pictorialBar',
                        stack: "总量",
                        silent: false,
                        label: {
                            normal: {
                                show: false,
                            }
                        },
                        symbolClip: true,
                        symbolBoundingData: maxValue,
                        symbolSize: [50, "100%"],
                        symbol: 'rect',
                        itemStyle: {//控制每个柱子颜色
                            normal: {
                                color: (params) => {
                                    let colors = ['rgb(7,163,182)', 'rgb(184,143,61)', 'rgb(47,58,65)']
                                    return colors[params.dataIndex]
                                }
                            }
                        },
                        symbolRepeat: true,
                        symbolSize: [58, 6],//宽度
                        symbolMargin: 5,//间隔
                        data: chartData
                    },//象形柱状图
                    {
                        type: "bar",
                        barWidth: '58',
                        stack: "总量",
                        label: {
                            normal: {
                                show: true,
                                position: "top",
                                width: 58,
                                color: "#cfefff",
                                fontSize: 18,
                                fontFamily: 'ZHSCNMT-GBK',
                                color: "rgba(165, 220, 251, 1)",
                                formatter: function (params) {
                                    return params.value;
                                }
                            }

                        },
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        data: itemData
                    }//文字lable
                ]
            };