app.title = '堆叠条形图';

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['状态0', '状态1', '状态2', '状态3'],
        show:false
    },
    toolbox:{
        show:true
    },
    backgroundColor:'rgba(0, 0, 0, 0.5)',
    tooltip:{
        show:false
    },
    
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        max: 24,
        inverse: true
    },
    xAxis: {
        type: 'category',
        data: ['系统一', '系统二', '系统三', '系统四', '系统五', '系统六','系统七', '系统八', '系统九', '系统十']
    },
    series: [{
        name: '状态0',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: false,
                position: 'insideRight'
            }
        },
        barWidth: 10,
        data: [{
            value: 0,
            itemStyle: {
                normal: {
                    color: 'gray'
                }
            }
        }, {
            value: 0,
            itemStyle: {
                normal: {
                    color: 'gray'
                }
            }
        }, {
            value: 0,
            itemStyle: {
                normal: {
                    color: 'gray'
                }
            }
        }, {
            value: 0,
            itemStyle: {
                normal: {
                    color: 'gray'
                }
            }
        }, {
            value: 0,
            itemStyle: {
                normal: {
                    color: 'gray'
                }
            }
        }, {
            value: 18,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        }, {
            value: 8,
            itemStyle: {
                normal: {
                    color: '#03BEFF'
                }
            }
        }, {
            value: 9,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        }, {
            value: 10,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        }, {
            value: 11,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        }]
    }, {
        name: '状态1',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: false,
                position: 'insideRight'
            }
        },
        itemStyle: {
            normal: {
                color: 'red',


            }
        },
        barWidth: 10,
        data: [{
            value: 5,
            itemStyle: {
                normal: {
                    color: '#03BEFF'
                }
            }
        }, {
            value: 4,
            itemStyle: {
                normal: {
                    color: '#E2CC01'
                }
            }
        }, {
            value: 6,
            itemStyle: {
                normal: {
                    color: '#F5291A'
                }
            }
        }, {
            value: 7,
            itemStyle: {
                normal: {
                    color: '#4FE400'
                }
            }
        }, {
            value: 4,
            itemStyle: {
                normal: {
                    color: '#F5291A'
                }
            }
        }, {
            value: 6,
            itemStyle: {
                normal: {
                    color: '#03BEFF'
                }
            }
        }, {
            value: 0,
            itemStyle: {
                normal: {
                    color: '#03BEFF'
                }
            }
        }, {
            value: 4,
            itemStyle: {
                normal: {
                    color: '#4FE400'
                }
            }
        }, {
            value: 6,
            itemStyle: {
                normal: {
                    color: '#F5291A'
                }
            }
        }, {
            value: 5,
            itemStyle: {
                normal: {
                    color: '#E2CC01'
                }
            }
        }]






        // data: [5,4,6,7,4,6,0]
    }, {
        name: '状态2',
        type: 'bar',
        stack: '总量',
        itemStyle: {
            normal: {
                color: 'transparent',
            }
        },
        label: {
            normal: {
                show: false,
                position: 'insideRight'
            }
        },
        data: [{
            value: 13,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        }, {
            value: 11,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        }, {
            value: 5,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        }, {
            value: 8,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        }, {
            value: 11,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        }, {
            value: 0,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        }, {
            value: 0,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        }, {
            value: 0,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        }, {
            value: 0,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        }, {
            value: 0,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        }],
        // data: [13,11,5,8,11,0,0]
    }, {
        name: '状态3',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: false,
                position: 'insideRight'
            }
        },
        data: [{
            value: 6,
            itemStyle: {
                normal: {
                    color: '#A0A0A0'
                }
            }
        }, {
            value: 9,
            itemStyle: {
                normal: {
                    color: '#F5291A'
                }
            }
        }, {
            value: 13,
            itemStyle: {
                normal: {
                    color: '#E2CC01'
                }
            }
        }, {
            value: 9,
            itemStyle: {
                normal: {
                    color: '#03BEFF'
                }
            }
        }, {
            value: 9,
            itemStyle: {
                normal: {
                    color: '#4FE400'
                }
            }
        }, {
            value: 0,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        }, {
            value: 0,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        }, {
            value: 0,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        }, {
            value: 0,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        }, {
            value: 0,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        }],
        // data: [6,9,13,9,9,0,0]
    }]
};