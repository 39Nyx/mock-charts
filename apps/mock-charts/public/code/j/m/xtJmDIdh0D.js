 var xData = ['6:00~9:00', '9:00~12:00', '12:00~15:00', '15:00~18:00', '18:00~21:00', '21:00~24:00']
    var lineData = [100, 100, 100, 100, 100, 100, 100]
    var arriveData = [540, 939, 850, 704, 1033, 329];
    var leaveData = [515, 952, 943, 677, 1018, 280];
    var arriveData2 = [71, 411, 547, 441, 519, 137];
    var leaveData2 = [96, 339, 455, 438, 564, 184];
    var timeLineData = [1];
    let legend=['到达正点', '出发正点','到达晚点','出发晚点'];
    var background = "#0e2147"; //背景 
    let textColor = "#fff";
    let lineColor="rgba(255,255,255,0.2)";
    let colors = [{
            borderColor: "rgba(227,161,96,1)",
            start: "rgba(227,161,96,0.8)",
            end: "rgba(227,161,96,0.3)"
        },
        {
            borderColor: "rgba(0,222,255,1)",
            start: "rgba(0,222,255,0.3)",
            end: "rgba(0,222,255,0.8)"
        },
    ];
    let borderData = [];
    let scale = 2;
    borderData = xData.map(item => {
        return scale;
    });
    var option = {
        baseOption: {
            timeline: {
                show: false,
                top: 0,
                data: []
            },
            title: {
                 text: '义乌站各时段到达/出发晚点情况分布',
                 left: 'center',
                 color:'green',
            },
            backgroundColor: background,
            legend: {
                top: '5%',
                right: '5%',
                itemWidth: 20,
                itemHeight: 5,
                // itemGap: 343,
                icon: 'horizontal',
                textStyle: {
                    color: '#ffffff',
                    fontSize: 16,
                },
                data: legend
            },
            grid: [{
                show: false,
                left: '5%',
                top: '10%',
                bottom: '8%',
                containLabel: true,
                width: '37%'
            }, {
                show: false,
                left: '51%',
                top: '10%',
                bottom: '8%',
                width: '0%'
            }, {
                show: false,
                right: '2%',
                top: '10%',
                bottom: '8%',
                containLabel: true,
                width: '37%'
            }],
            xAxis: [{
                type: 'value',
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'top',
                axisLabel: {
                    show: true,
                    color: textColor
                },
                splitLine:{
                     show: true,
                    lineStyle:{
                        color:lineColor
                    }
                },
            }, {
                gridIndex: 1,
                show: false
            }, {
                gridIndex: 2,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'top',
                axisLabel: {
                    show: true,
                    color: textColor
                },
                 splitLine:{
                     show: true,
                    lineStyle:{
                        color:lineColor
                    }
                },
            }],
            yAxis: [{
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                    show: true,
                    lineStyle:{
                        color:lineColor
                    }
                },
               
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                data: xData
            }, {
                gridIndex: 1,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    padding:[30,0,0,0],
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 20
                    },
                    align: "center"

                },
                data: xData.map(function(value) {
                    return {
                        value: value,
                        textStyle: {
                            align: 'center'
                        }
                    }
                })
            }, {
                gridIndex: 2,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                     show: true,
                    lineStyle:{
                        color:lineColor
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false

                },
                data: xData
            }],
            series: []

        },
        options: []
    }

    option.baseOption.timeline.data.push(timeLineData[0])
    option.options.push({
        series: [{
                name: "到达正点",
                type: "bar",
                barWidth: 25,
                stack: "1",
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: colors[0].start
                            },
                            {
                                offset: 1,
                                color: colors[0].end
                            }
                        ]),
                    }
                },
                label: {
                    normal: {
                        show: false,
                    }
                },
                data: arriveData,
                animationEasing: "elasticOut"
            },
            {
                name: "到达晚点",
                type: "bar",
                barWidth: 25,
                stack: "1",
                itemStyle: {
                    normal: {
                        color: colors[0].borderColor

                    }
                },
                data: arriveData2
            },
            {
                name: "出发正点",
                type: "bar",
                stack: "2",
                barWidth: 25,
                xAxisIndex: 2,
                yAxisIndex: 2,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: colors[1].start
                            },
                            {
                                offset: 1,
                                color: colors[1].end
                            }
                        ]),
                    }
                },
                label: {
                    normal: {
                        show: false,
                    }
                },
                data: leaveData,
                animationEasing: "elasticOut"
            },
            {
                name: "出发晚点",
                type: "bar",
                xAxisIndex: 2,
                yAxisIndex: 2,
                barWidth: 25,
                stack: "2",
                itemStyle: {
                    normal: {
                        color: colors[1].borderColor

                    }
                },
                data: arriveData2
            },
        ]
    });