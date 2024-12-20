//var colors = ['orange', '#d14a61', '#1E90FF'];
option = {
    backgroundColor: '#ffffff',
    title: [{
        text: '',
        left: '28%',
        top: '1%',
        textAlign: 'center'
    }, {
        text: '',
        left: '28%',
        top: '34%',
        textAlign: 'center'
    }, {
        text: '',
        left: '28%',
        top: '66%',
        textAlign: 'center'
    }],
    tooltip: {
        trigger: 'axis'
    },
    grid: [{
        show: false,
        left: '5%',
        top: '5%',
        containLabel: true,
        width: '100%',
        height: '33%'
    }, {
        show: false,
        left: '2%',
        top: '35%',
        containLabel: true,
        width: '100%',
        height: '33%'
    }, {
        show: false,
        left: '5%',
        top: '68%',
        containLabel: true,
        width: '100%',
        height: '33%'
    }],
    // legend: [{
    //   data:['各幅值区间暂降频次', '暂降频次2'],
    //   x:'right',
    // },{data:['暂降频次3', '暂降频次4'],
    //      x:'right',
    // }],
    xAxis: [{
        gridIndex: 0,
        type: 'category',
        name: '暂降幅值区间',
        nameLocation: 'center',
        nameGap: '30',
        nameTextStyle: {
            fontSize: 16
        },
        //axisLabel:{  
        //             interval:0,//横轴信息全部显示  
        //            rotate:-30,//-30度角倾斜显示  
        //       }  ,
        axisTick: {
            alignWithLabel: true
        },
        data: ['0~10%', '10%~20%', '20%~30%', '30%~40%', '40%~50%', '50%~60%', '60%~70%', '70%~80%', '80%~90%', ]
    }, {
        gridIndex: 1,
        type: 'category',
        name: '暂降幅值',
        nameLocation: 'center',
        nameGap: '30',
        nameTextStyle: {
            fontSize: 16
        },
        boundaryGap: false,
        //axisLabel:{  
        //             interval:0,//横轴信息全部显示  
        //            rotate:-30,//-30度角倾斜显示  
        //       }  ,
        axisTick: {
            alignWithLabel: true
        },
        data: ['0', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%']
    }, {
        gridIndex: 2,
        type: 'category',
        //axisLabel:{  
        //         interval:0,//横轴信息全部显示  
        //         rotate:-30,//-30度角倾斜显示  
        //   }  ,
        name: '暂降持续时间（s）',
        nameLocation: 'center',
        nameGap: '30',
        nameTextStyle: {
            fontSize: 16
        },
        axisTick: {
            alignWithLabel: true
        },
        data: ['0~0.1', '0.1~0.25', '0.25~0.5', '0.5~1', '>1']

    }],
    yAxis: [{
        gridIndex: 0,
        type: 'value',
        name: '暂降频次(次/年)',
        nameLocation: 'center',
        nameGap: '30',
        nameTextStyle: {
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                //color: colors[1]
            }
        },
        splitLine: {
            show: false
        }
    }, {
        gridIndex: 1,
        type: 'value',
        name: '概率分布',
        nameLocation: 'center',
        nameGap: '40',
        nameTextStyle: {
            fontSize: 16
        },
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value} %'
        },
        //position: 'right',
        axisLine: {
            lineStyle: {
                //color: colors[0]
            }
        },
        splitLine: {
            show: false
        }
    }, {
        gridIndex: 2,
        type: 'value',
        name: '暂降频次(次/年)',
        nameLocation: 'center',
        nameGap: '30',
        nameTextStyle: {
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                //color: colors[0]
            }
        },
        splitLine: {
            show: false
        },
        position: 'left'
    }],
    series: [{
            name: '暂降幅值与暂降频次',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            label: {
                normal: {
                    show: true,
                    position: 'top',

                }
            },
            data: [3.5, 0.7, 0.6, 1.4, 1.8, 3, 5, 9.5, 24.6]
        },{
            name: '暂降幅值与暂降频次',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            label: {
                normal: {
                    show: true,
                    position: 'top',

                }
            },
            data: [4, 1.7,1.6, 2.4, 2.8, 3.8, 6, 10, 25.6]
        }, {

            name: '暂降幅值概率分布',
            type: 'line',
            smooth: true,
            barWidth: 25,
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8, //拐点大小
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    color: '#FAD860',
                }
            },
            lineStyle: {
                normal: {
                    width: 4,
                    color: '#FAD860'
                }
            },

            data: [0, 7, 8.4, 9.6, 12.4, 16, 22, 31.9, 50.9, 100]
        },{

            name: '暂降幅值概率分布',
            type: 'line',
            smooth: true,
            barWidth: 25,
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8, //拐点大小
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    color: '#FAD860',
                }
            },
            lineStyle: {
                normal: {
                    width: 4,
                    color: '#FAD860'
                }
            },

            data: [0, 17, 18.4, 29.6, 32.4, 26, 32, 41.9, 58.9, 110]
        }, {

            name: '持续时间与暂降频次',
            type: 'line',
            xAxisIndex: 2,
            yAxisIndex: 2,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },

            data: [36.1, 5.4, 2.4, 1, 5.2]
        }, {

            name: '持续时间与暂降频次',
            type: 'line',
            xAxisIndex: 2,
            yAxisIndex: 2,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },

            data: [46.1, 15.4, 12.4, 11, 15.2]
        }
    ]
};