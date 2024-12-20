option = {
 

    title: [{
        text: '客流量',
        left: '30%',
        top: '1%',
        
    }, {
        text: '入住率',
        left: '83%',
        top: '1%',
        textAlign: 'center',


    }],
   
    
    grid: {
        left: '1%',
        right: '35%',
        top: '16%',
        bottom: '6%',
        containLabel: true
    },
   
    xAxis: {
        type: 'category',
        data: ['第1季度', '第2季度', '第3季度', '第4季度'],
       
    },
    yAxis: {
    	name: '',
        type: 'value'
    },
    series: [{
        name: '客流量',
        type: 'bar',
        symbolSize: 1,
        barWidth: '50%',
        itemStyle: {
            normal: {
                
                label: {
                    show: false,
                    position: 'top',
                    formatter: '{c}%'
                }
            }
        },
        data: [65000, 15000, 46000, 27000]
    },
    {
        type: 'pie',
        center: ['83%', '34%'],
        radius: ['35%', '15%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 335,
            name: '入住率',
            itemStyle: {
                normal: {
                    color: '#ffd285'
                }
            },
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        color: '#ffd285',
                        fontSize: 10

                    }
                }
            }
        }, {
            value: 180,
            name: '占位',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#87CEFA'
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#ffd285',
                    },
                    formatter: '\n入住率'
                }
            }
        }]
    },


    {
        type: 'pie',
        center: ['83%', '72%'],
        radius: ['35%', '15%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 435,
            name: '准点率',
            itemStyle: {
                normal: {
                    color: '#ff733f'
                }
            },
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        color: '#ff733f',
                        fontSize: 10

                    }
                }
            }
        }, {
            value: 100,
            name: '占位',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#87CEFA'


                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#FF4500',
                    },
                    formatter: '\n入住率'
                }
            }
        }]
    }]
}