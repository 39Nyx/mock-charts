var custMonth=["7月",
               "8月",
               "9月",               
               "10月",               
               "11月"  
               ];
var custMonthValue=[860,600,1200,1300,900];

var yearCompletedValue=85;
var yearNotCompletedValue=85;

var custColor=["#f845f1",
		               "#ad46f3",
		               "#5045f6",               
		               "#4777f5",               
		               "#44aff0",               
		               "#45dbf7",               
		               "#f6d54a",               
		               "#f69846",               
		               "#ff4343"   
		               ];
var pieData=[];

for (var i = 0; i < custMonth.length; i++) {
    //var custHave={};
    var custHave={
                    value: custMonthValue[i],
                    name: custMonth[i],
                    
                    itemStyle: {
                        normal: {
                            color: custColor[i]
                        }
                    }
                };
    
    pieData.push(custHave);
}


option = {
        //backgroundColor: '#00264d',
        //backgroundColor: 'transparent',
        title: {
		        text: "交期订单占比分析",
		        top: 0,
		        left:0,
		        textStyle: {
		            color: "#ccc"
		        }
		    },
        series: [
            /*仪表盘图，做中间刻度线*/
            {
                type: 'gauge',
                name: '业务指标',
                radius: '60%',
                center: ['50%', '55%'],
                startAngle: '0',
                endAngle: '-359.99',
                splitNumber: '100',
                pointer: {
                    show: false
                },
                title: {
                    show: false
                },
                detail: {
                    show: false
                },
                data: [{ value: 95, name: '完成率' }],
                axisLine: {
                    lineStyle: {
                        color: [[1, new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                            offset: 0,
                            color: 'rgba(4, 234,255, 1)'
                        }, {
                            offset: 0.5,
                            color: 'rgba(74, 87,254, 1)'
                        }, {
                            offset: 1,
                            color: 'rgba(59, 119,254, 1)'
                        }])]],
                        width: 20,
                        opacity: 1
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    length: 20,
                    lineStyle: {
                        color: 'rgba(255,255,255,1)',
                        width: 2,
                        type: 'solid',
                    },
                },
                axisLabel: {
                    show: false
                }
            },
            /*内心原型图，展示整体数据概览*/
            {
                name: 'pie',
                type: 'pie',
                clockWise: true,
                startAngle: -270,
                radius: ['45%', '50%'],
                hoverAnimation: false,
                center: ['50%', '55%'],
                data: [{
                    value: yearCompletedValue,
                    label: {
                        normal: {
                            formatter: '完成率{d}%',
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '15',
                                fontWeight: 'normal',
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#f74369',
                            shadowColor: '#f74369',
                            shadowBlur: 10
                        }
                    }
                }, {
                    value: yearNotCompletedValue,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: 'rgba(247,67,105,0)', // 未完成的圆环的颜色
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        },
                        emphasis: {
                            color: 'rgba(44,59,70,1)' // 未完成的圆环的颜色
                        }
                    }
                }]
            },
            /*外层环形图，展示详细占比*/
            {
                name: 'pie',
                type: 'pie',
                clockWise: true,
                startAngle: -270,
                radius: ['60%', '70%'],
                hoverAnimation: false,
                center: ['50%', '55%'],
                data: pieData,
                label: {
                    normal: {
                        formatter: '{b|{b}}\n{hr|}\n{d|{c}}\/{d|{d}%}',
                        rich: {
                            b: {
                                fontSize: 15,
                                color: '#fff',
                                align: 'left',
                                padding: 4
                            },
                            hr: {
                                borderColor: '#12EABE',
                                width: '100%',
                                borderWidth: 2,
                                height: 0
                            },
                            d: {
                                fontSize: 10,
                                color: '#fff',
                                align: 'left',
                                padding: 4
                            },
                            c: {
                                fontSize: 10,
                                color: '#fff',
                                align: 'center',
                                padding: 4
                            }
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#00264d'
                    }
                }
            }
        ]
    };