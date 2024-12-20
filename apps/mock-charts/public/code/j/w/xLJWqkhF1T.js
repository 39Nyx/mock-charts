let Chart = {
    Config: {
        y_font_color: '#60F194',
        x_font_color: '#fff',
        y_line_color: '#184483',
        x_line_color: '#184483',
        split_line_color: 'rgba(0,53,115,0.6)'
    },
    chart_color: ['#5EF0FE', '#E91346'],
};

let row = {
    value: 32, //设置值
    percent: 0.1 //设置颜色弧度占比
}

// 实现两个圆弧拼接在一起，形成一个整圆，两个圆弧可以单独设置样式
options = [{
        backgroundColor: '#008989',
        title: {
            text: row.value + 'mg/m³',
            subtext: "入水量",
            x: 'center',
            top: '41%',
            itemGap: 30,
            textStyle: {
                color: Chart.chart_color[0],
                fontSize: '200%',
                fontWeight: 'normal'
            },
            subtextStyle: {
                color: '#fff',
                fontSize: '160%',
                fontWeight: 'normal'
            }
        },
        series: [{
                name: 'frontCircle',
                hoverAnimation: false,
                type: 'pie',
                clockWise: true,
                radius: [110, 130],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        color: Chart.chart_color[0]
                    }
                },
                data: [{
                        value: 360 * row.percent
                    },
                    {
                        value: 360 * (1 - row.percent),
                        itemStyle: {
                            normal: {
                                color: 'rgba(0,0,0,0)',
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            emphasis: {
                                color: 'rgba(0,0,0,0)'
                            }
                        }
                    }
                ]
            },
            {
                name: 'backCircle',
                hoverAnimation: false,
                type: 'pie',
                clockWise: false,
                radius: [115, 125],
                itemStyle: {
                    normal: {
                        color: 'rgba(200,200,200,.2)',
                        label: {
                            show: true
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                data: [{
                        value: 360 * (1-row.percent),
                    },
                    {
                        value: 360 * row.percent, //注意调整此处，实现真实开口的背景色的开口值
                        itemStyle: {
                            normal: {
                                color: 'rgba(0,0,0,0)',
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            emphasis: {
                                color: 'rgba(0,0,0,0)'
                            }
                        }
                    }
                ]
            }
        ]
    },
    {
        backgroundColor: '#265E96',
        title: {
            text: row.value + 'mg/m³',
            subtext: '出水量',
            x: 'center',
            top: '41%',
            //设置主标题和副标题之间的间隔
            itemGap: 30,
            textStyle: {
                color: Chart.chart_color[1],
                fontSize: '200%',
                fontWeight: 'normal'
            },
            //副标题文字样式设置
            subtextStyle: {
                color: '#fff',
                fontSize: '160%',
                fontWeight: 'normal'
            }
        },
        series: [{
                name: 'frontCircle',
                hoverAnimation: false,
                type: 'pie',
                //顺时针方向加载
                clockWise: true,
                radius: [110, 130],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        color: Chart.chart_color[1]
                    }
                },
                //注意，data的两个元素,value的总和等于360,一个加，另一个减
                //可以实现两个弧度拼合成一个整圆，针对每个圆弧都可以单独的调整
                //其显示的样式。
                data: [{
                        value: 360 * row.percent
                    },
                    {
                        value: 360 * (1 - row.percent),
                        itemStyle: {
                            normal: {
                                color: 'rgba(0,0,0,0)',
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            //设置高亮部分是透明的，鼠标悬浮在上面时候就感觉没有颜色变化的效果
                            emphasis: {
                                color: 'rgba(0,0,0,0)'
                            }
                        }
                    }
                ]
            },
            
            //绘制一个底圆弧
            {
                name: 'backCircle',
                hoverAnimation: false,
                type: 'pie',
                //逆时针加载
                clockWise: false,
                radius: [115, 125],
                itemStyle: {
                    normal: {
                        color: 'rgba(200,200,200,.2)',
                        label: {
                            show: true
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                data: [{
                        value: 360 * (1-row.percent),
                    },
                    {
                        value: 360 * row.percent,
                        itemStyle: {
                            normal: {
                                color: 'rgba(0,0,0,0)',
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            emphasis: {
                                color: 'rgba(0,0,0,0)'
                            }
                        }
                    }
                ]
            }
        ]
    }
];