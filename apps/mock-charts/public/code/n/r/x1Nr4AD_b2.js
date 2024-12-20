option = {
        legend: {
            data: [
                {
                    name: '公共资源交易',
                    icon: 'rect',
                    textStyle: {
                        color: 'red'// 图例文字颜色
                    }
                }, {
                    name: '政务服务大厅',
                    icon: 'rect',
                    textStyle: {
                        color: '3399FE'// 图例文字颜色
                    }
                }
            ],
            right: '10%'
        },

        calculable: true,
        xAxis: [
            {
                type: 'category',
                axisLabel: {
                    interval: 0,
                    rotate: -50,//x轴数据倾斜的角度-90-90
                },

                show: true,
                areaStyle: {
                    color: ['#D72526']
                },
                data: ['郑州市', '开封市', '洛阳市', '平顶山市', '安阳市', '鹤壁市', '新乡市', '焦作市', '濮阳市', '许昌市', '周口市', '南阳市', '信阳市', '漯河市', '商丘市', '济源市', '驻马店市', '三门峡市']
            }
        ],
        yAxis: [
            {
                splitNumber: 3,
                data: ['是否对接', '统计嵌入', '是否反馈'],
                type: 'value',
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['#DFDFDF']
                    }
                },
                splitLine: {  //分割线
                    show: true,
                    lineStyle: {
                        color: '#FFFFFF',
                        type: 'solid',
                        width: 2
                    }
                },
                axisLabel: {
                    formatter: function (value) {
                        var texts = [];
                        if (value == 1) {
                            texts.push('是否对接');
                        }
                        else if (value == 2) {
                            texts.push('统计嵌入');
                        }
                        else if (value == 3) {
                            texts.push('是否反馈');
                        }

                        return texts;
                    },
                    rotate: 90,
                    margin: 10,
                    rich: {
                        value: {
                            lineHeight: 30,
                            align: 'center'
                        },
                        是否对接: {
                            height: 40,
                            align: 'center'

                        },
                        统计嵌入: {
                            height: 40,
                            align: 'center',

                        },
                        是否反馈: {
                            height: 40,
                            align: 'center',

                        }
                    }
                },

            }
        ],
        series: [
            {
                name: '政务服务大厅',
                type: 'pictorialBar',
                barWidth: 25,
                symbol: 'path://M174.978,477.005V127.158H183L167.5,101,152,127.158h8.024V477.005h14.956Z',
                symbolClip: true,
                data: [1, 2, 2, 3, 3, 3, 2, 2, 1, 1, 1, 2, 2, 3, 3, 3, 2, 2],
                itemStyle: {
                    normal: {
                        color: '#3399FE',

                    }
                }

            },
            {
                name: '公共资源交易',
                type: 'pictorialBar',
                barWidth: 25,
                symbol: 'path://M174.978,477.005V127.158H183L167.5,101,152,127.158h8.024V477.005h14.956Z',
                symbolClip: true,
                barGap: '-1.5', // Make series be overlap
                data: [2, 2, 1, 1, 1, 2, 2, 3, 3, 3, 2, 2, 1, 2, 2, 3, 3, 3],
                itemStyle: {
                    normal: {
                        color: '#FF3334',

                    }
                }

            }
        ]
    };