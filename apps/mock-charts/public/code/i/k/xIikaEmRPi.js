option = {
    // backgroundColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //         offset: 0,
    //         color: '#BE7889'
    //     },
    //     {
    //         offset: 1,
    //         color: '#0AA0E6'
    //     }
    // ], false),
    
    backgroundColor: "#FFFFFF",
    legend: {
         x: '75%',
        top: '11%',
        textStyle: {
            color: '#808080',
            fontSize: 14,
        },

        data: ['日活跃量', '日新增量'],
 

    },
    title: {
        text: "Boss骑士新增/日活数据",
        left: "center",
        top: "6%",
        textStyle: {
            color: "#808080",
            fontSize: 20,

        }
    },
    grid: {
        top: '20%',
        left: '10%',
        right: '10%',
        bottom: '10%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        // boundaryGap: false,
        show:true,
        data: ['2020/7/1',
 '2020/7/2',
 '2020/7/3',
 '2020/7/4',
 '2020/7/5',
 '2020/7/6',
 '2020/7/7',
 '2020/7/8',
 '2020/7/9',
 '2020/7/10',
 '2020/7/11',
 '2020/7/12',
 '2020/7/13',
 '2020/7/14',
 '2020/7/15',
 '2020/7/16',
 '2020/7/17',
 '2020/7/18',
 '2020/7/19',
 '2020/7/20',
 '2020/7/21',
 '2020/7/22',
 '2020/7/23',
 '2020/7/24',
 '2020/7/25',
 '2020/7/26',
 '2020/7/27',],
        axisLabel: {
            show: true,
            textStyle: {
                color: '#808080'
            },
            margin: 30,
            color: '#808080',
            width: 1
        },
        axisLine: {
            show: true
        },
        axisTick: {
            show: false,
            length: 25,
            lineStyle: {
                color: "#808080",
                width: 1,
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#000000'
            }
        }
    },
    yAxis: [{
        type: 'value',
        name: '人数',
        position: 'left',
        axisLabel: {
            margin: 20,
            textStyle: {
                color: '#808080'
            },
        },


        axisTick: {
            show: true,
            length: 15,
            lineStyle: {
                color: "#808080",
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#000000'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#808080',
                width: 2
            }
        }
    }],
    series: [{
            name: '日活跃量',
            type: 'line',
            smooth: true, //是否平滑曲线显示
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 6,
            lineStyle: {
                normal: {
                    // color: "#35A6EB", // 线条颜色
                     color: "#54AFEB", // 线条颜色
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#35A6EB',
                }
            },
            itemStyle: {
                color: "#35A6EB",
                borderColor: "#35A6EB",
                borderWidth: 3
            },
            tooltip: {
                show: false
            },
            // areaStyle: {
            //     normal: {
            //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //                 offset: 0,
            //                 color: '#eb64fb'
            //             },
            //             {
            //                 offset: 1,
            //                 color: '#3fbbff0d'
            //             }
            //         ], false),
            //     }
            // },
            data: [5548,
 1786,
 2143,
 1560,
 1194,
 2217,
 1947,
 2583,
 1796,
 1864,
 1238,
 2301,
 3205,
 2920,
 3110,
 3587,
 3254,
 2615,
 2511,
 4439,
 3214,
 2895,
 3915,
 3560,
 3549,
 2771,
 3812,]
        },

        {
            name: '日新增量',
            type: 'line',
            smooth: true, //是否平滑曲线显示
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 6,
            lineStyle: {
                normal: {
                    // color: "#20B2AA", // 线条颜色
                    color: "#77E6C6", // 线条颜色

                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#20B2AA',
                }
            },
            itemStyle: {
                color: "#20B2AA",
                borderColor: "#20B2AA",
                borderWidth: 3
            },
            tooltip: {
                show: false
            },
            // areaStyle: {
            //     normal: {
            //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //                 offset: 0,
            //                 color: '#83DCD1'
            //             },
            //             {
            //                 offset: 1,
            //                 color: '#399CEE'
            //             }
            //         ], false),
            //     }
            // },
            data: [556,
 392,
 333,
 337,
 225,
 334,
 428,
 437,
 392,
 430,
 295,
 295,
 398,
 429,
 422,
 613,
 495,
 351,
 298,
 452,
 404,
 374,
 405,
 421,
 375,
 266,
 322,]
        }
    ]
};