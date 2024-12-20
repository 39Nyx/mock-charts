
option = {
    title: {
        //text: '付费失效单的客户数'
    },
    //backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: [{
                name: '银保'
            },
            {
                name: 'Affinity'
            },
            {
                name: 'DTC'
            }
        ],
        align: 'right',
        right: 10,
        top: '5%',
        textStyle: {
            color: "#555"
        }

        //itemWidth: 10,
        //itemHeight: 10,
        //itemGap: 35
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['有1张保单',
            '有2张保单',
            '有3张保单',
            '4张保单以上',
        ],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#8092f8",
                width: 2,
                type: "solid"
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#8092f8"
            }
        }

    }],
    yAxis: {
        type: 'value',
        min: 0,
        max: 1000000,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#8092f8",
                width: 1,
                type: "solid"
            }
        },
        splitLine: {
            lineStyle: {
                color: "#d4dbff",
            }
        }
    },
    series: [{
            name: '银保',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight',
                    shadowBlur: 0,
                    textBorderWidth:1,
                  
                }
            },
            data: [142615,
                23701,
                15749,
                12958,
               
            ],
            barWidth: 50, //柱子宽度
            barCategoryGap: '1%',
            barGap: '10%', //柱子之间间距
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#5d73f6'
                    }, {
                        offset: 1,
                        color: '#5d73f6'
                    }]),
                    opacity: 1,
                    barBorderRadius: [4, 4, 0, 0]
                }
            },

        },
       
       
       
       
       {
            name: 'Affinity',
            type: 'bar',
            //stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight',
                    shadowBlur: 0,
                    textBorderWidth:0
                }
            },
            data: [814058,
                245135,
                71878,
                53424,
            ],
            barWidth: 50, //柱子宽度
            barCategoryGap: '1%',
            barGap: '10%', //柱子之间间距
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#8092f8'
                    }, {
                        offset: 1,
                        color: '#8092f8'
                    }]),
                    opacity: 1,
                    barBorderRadius: [4, 4, 0, 0]
                }
            },

        },
       
       
       
        {
            name: 'DTC',
            type: 'bar',
            //stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight',
                    shadowBlur: 0,
                    textBorderWidth:0
                }
            },
            data: [54019,
                53998,
                53784,
                53224,
            ],
            barWidth: 50,
            barCategoryGap: '1%',
            barGap: '10%', //柱子之间间距
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#b6c1fc'
                    }, {
                        offset: 1,
                        color: '#b6c1fc'
                    }]),
                    opacity: 1,
                    barBorderRadius: [4, 4, 0, 0]
                }
            }
        }
        
        
        
        
    ]
};