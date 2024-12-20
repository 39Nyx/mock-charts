var option = {
    title: {
        x: "center",
        top: 0,
        text: '风速/风向模拟',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: "#333"
        }
    },
    tooltip: {
        show: true,
        backgroundColor: '#fff',
        borderColor: '#f60',
        borderWidth: '1px',
        textStyle: {
            color: '#333'
        },
        formatter: function(param) {
            if(param.seriesIndex == 2){
               return '<em style="color:' + param.color + ';">当前风向:' + param.value + '</em> °' 
            }
            if(param.seriesIndex == 3){
               return '<em style="color:' + param.color + ';">当前风速:' + param.value + '</em> m/s' 
            }
        }
    },
    series: [{
        name: '',
        type: 'gauge',
        radius: '83%',
        min: 0,
        max: 360,
        startAngle: 90,
        endAngle: 449.9,
        splitNumber: 0,
        axisLine: {
            lineStyle: {
                color: [
                    [0.5, '#ccc'],
                    [1, '#ccc']
                ],
                width: 4
            }
        },
        axisLabel: {
            show: false
        },
        detail: {
            show: false
        }
    }, {
        type: 'gauge',
        radius: '80%',
        splitNumber: 1,
        min: 0,
        max: 360,
        startAngle: 90,
        endAngle: 449.9,
        axisLine: {
            show: false,
            lineStyle: {
                width: 2,
                shadowBlur: 0,
                color: [
                    [1, '#8f8f8f']
                ]
            }
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: '#8f8f8f',
                width: 1
            },
            length: '-2%',
            splitNumber: 60
        },
        splitLine: {
            show: true,
            length: 12,
            lineStyle: {
                color: '#8f8f8f',
            }
        },
        axisLabel: {
            show: false
        },
        detail: {
            show: false
        }
    }, {
        name: '',
        type: 'gauge',
        min: 0,
        max: 360,
        startAngle: 90,
        endAngle: -269.9999,
        radius: '80%',
        splitNumber: 12,
        axisLine: {
            lineStyle: {
                width: 5,
                shadowBlur: 0,
                color: [
                    [0.25, '#DDBD4D'],
                    [0.5, '#E43F3D'],
                    [0.75, '#7CBB55'],
                    [1, '#9CD6CE']
                ]
            }
        },
        axisTick: {
            show: true,
            splitNumber: 1
        },
        splitLine: {
            length: 10,
            lineStyle: {
                width: 2
            }
        },
        axisLabel: {
            formatter: function(e) {
                switch (e + "") {
                    case "0":
                        return "正北";
                    case "360":
                        return "正北";
                    case "180":
                        return "正南";
                    case "90":
                        return "正东";
                    case "270":
                        return "正西";
                    default:
                        return e;
                }
            },
            textStyle: {
                fontSize: 12,
                fontWeight: ""
            }
        },
        pointer: {
            show: true,
        },
        detail: {
            formatter: function(param) {
                var level = '';
                if (param > 0 && param < 90) {
                    level = '东北'
                } else if (param > 90 && param < 180) {
                    level = '东南'
                } else if (param > 180 && param < 270) {
                    level = '西南'
                } else if (param > 270 && param < 360) {
                    level = '西北'
                } else if (param == 360) {
                    level = '正北'
                } else if (param == 270) {
                    level = '正西'
                } else if (param == 90) {
                    level = '正东'
                } else if (param == 180) {
                    level = '正南'
                }
                return "当前风向:"+level + "(" + param + "°)";
            },
            offsetCenter: [0, 140],
            textStyle: {
                fontSize: 40
            }
        },
        data: [{
            value: 279,
            name: ''
        }]
    }, { 
        name: '风速',
        type: 'gauge',
        center: ['60%', '35%'],
        radius: '22%',
        min: 0,
        max: 60,
        startAngle: 90,
        endAngle: -269.9999,
        splitNumber: 12,
        animation: 0,
        pointer: { 
            show: 1,
            length: '60%',
            width: 3
        },
        itemStyle: {
            normal: {
                color: '#00b0b0',
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10,
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        },
        axisLine: {
            lineStyle: {
                color: [
                    [1, '#337ab7']
                ],
                width: 6
            }
        },
        splitLine: {
            show: 1,
            length: 6,
            lineStyle: {
                width: 1
            }
        },
        axisTick: {
            show: false
        }, 
        axisLabel: { 
            show: 1,
            distance: 1, 
            textStyle: {
                color: '#0000ff'
            },
            formatter: function(t) {
                switch (t + '') {
                    case '10':
                        return '10';
                    case '20':
                        return '20';
                    case '30':
                        return '30';
                    case '40':
                        return '40';
                    case '50':
                        return '50';
                    case '60':
                        return '60';
                }
            }
        },
        detail: {
            formatter: function(param) {
                return "当前风速:" + param + "m/s";
            },
            offsetCenter: [0, 60],
            textStyle: {
                fontSize: 12
            }
        },
        data: [{
            value: 3.2,
            name: ''
        }]
    }]
};

setInterval(function() {
    var datavalue = (Math.random() * 360).toFixed(2);
    var datavalue2 = (Math.random() * 60).toFixed(2);
    option.series[2].data[0].value = datavalue;
    option.series[3].data[0].value = datavalue2;
    myChart.setOption(option, true);
}, 1000);