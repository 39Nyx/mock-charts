var lineColor = '#2F5384';
	var labelColor = '#74BFE7';
	var fontSize = '30';
option = {
        backgroundColor:'#000',
        grid: {
            left: '5%',
            right: '10%',
            top: '15%',
            bottom: '10%',
            containLabel: true
        },
        tooltip: {
            show: true,
            trigger: 'item',
            textStyle:{
            	fontSize:fontSize
            }
        },
        legend: {
            show: true,
            x: 'center',
            y: '35',
            itemWidth: 45,
            itemHeight: 18,
            textStyle: {
                color: '#fff',
                fontSize: fontSize
            },
            data: ['完成率']
        },
        xAxis: [
            {
                type: 'category',
                axisLabel: {
                    color: labelColor,
                    fontSize: fontSize
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: lineColor,
                        width: 2
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#195384'
                    }
                },
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '(%)',
                nameTextStyle: {
                    fontSize: fontSize,
                    color:'#fff'
                },
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: labelColor,
                        fontSize: fontSize
                    }
                },
                axisLine: {
                    lineStyle: {
                        color:lineColor,
                        width: 2
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#142B57'
                    }
                }
            }
        ],
        series: [
            {
                name: '完成率',
                type: 'line',
                stack: '总量',
                symbol: 'circle',
                symbolSize: 10,
                smooth: true,
                itemStyle: {
                    normal: {
                        color: 'rgba(3,240,254,1)',
                        lineStyle: {
                            color: "rgba(3,240,254,1)",
                            width: 2
                        },
                        areaStyle: {
                            //color: '#94C9EC'
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(3,240,254,.7)'
                            }, {
                                offset: 1,
                                color: 'rgba(3,240,254,0)'
                            }])
                        },
                        shadowColor:'rgba(3,240,254,1)',
                        shadowBlur:20,
                    }
                },
                markPoint: {
                    itemStyle: {
                        normal: {
                            color: 'red'
                        }
                    }
                },
                data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
            }

        ]
    };