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
        top: '20%',
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
        left: '2%',
        right: '2%',
        bottom: '10%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        // boundaryGap: false,
        show:true,
        data: ['2020/10/1', 
'2020/10/2', 
'2020/10/3', 
'2020/10/4', 
'2020/10/5',
'2020/10/6', 
'2020/10/7', 
'2020/10/8', 
'2020/10/9', 
'2020/10/10', 
'2020/10/11', 
'2020/10/12', 
'2020/10/13', 
'2020/10/14', 
'2020/10/15', 
'2020/10/16', 
'2020/10/17',
'2020/10/18', 
'2020/10/19',
'2020/10/20',
'2020/10/21', 
'2020/10/22', 
'2020/10/23', 
'2020/10/24', 
'2020/10/25', 
 ],
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
        max: 12000,
        min: 100,
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
            data: [1585,2814,2507,2347,2222,2170,2064,2162,2929,2692,2240,2793,2584,2672,2719,2653,2226,2009,2761,4673,3158,3229,6211,2632,3133,
]
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
            data: [187,171,159,151,182,200,192,221,302,308,280,359,389,387,345,461,300,272,336,386,308,337,403,287,264,

]
        }
    ]
};