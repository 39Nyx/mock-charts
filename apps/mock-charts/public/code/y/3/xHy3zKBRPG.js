var data ={
    first:[],
    second:[]
};

var now = new Date();
var date,num;
for(var i = 0,leni=750;i<leni;i++){
    date = now.getTime()+i*1000*60*60;
    num = Math.round(153*Math.random());
    data.first.push({
        name:date,
        value: [date,num]
    });
    num = Math.round(153*Math.random());
    data.second.push({
        name:date,
        value: [date,num]
    });
}

var timeFormat = function(num) {
    if (num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}
var gauge_value = data.first[data.first.length-1].value[1];
var gauge_value2 = data.second[data.second.length-1].value[1];
var gauge_name = '温度';
var min = 0;
var max = 100;
var unit = '℃';

function getcolor(value) {
    let color;
    let percent = value / max;
    if (percent < 0.2) {
        color = '#9CD6CE';
    } else if (percent < 0.4) {
        color = '#7CBB55';
    } else if (percent < 0.6) {
        color = '#DDBD4D';
    } else if (percent < 0.8) {
        color = '#E98E2C';
    } else {
        color = '#E43F3D';
    }
    return [percent, color];
}
var gaugeColor = getcolor(gauge_value);
var gaugeColor2 = getcolor(gauge_value2);
var lineColor = '#9CD6CE';
var color = ['#e29304','#75b228'];
var seriesName = ['装药机1','装药机2'];

option = {
    title: {
        text: '动态数据 + 时间坐标轴',
        show: false
    },
    grid: {
        right: 20,
        left: 20,
        top: 200
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        }
    },
    yAxis: {
        show: false,
        type: 'value',
        boundaryGap: [0, '5%'],
        splitLine: {
            show: false
        }
    },
    color:color,
    series: [
        {
            name: seriesName[0],
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data.first,
            lineStyle: {
                normal: {
                    width: 2
                }
            }
        },
        {
            name: seriesName[1],
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data.second,
            lineStyle: {
                normal: {
                    width: 2
                }
            }
        },
        {
            name: gauge_name,
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            radius: 120,
            splitNumber: 1,
            center: ['35%', '45%'], // 默认全局居中  
            min: min,
            max: max,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 45,
                    shadowBlur: 0,
                    color: [
                        [1, '#ccc']
                    ]
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                length: 20,

            },
            axisLabel: {
                show: true,
                padding: [20, 0, 0, 0],
                fontSize: 12,
                distance: -2
            },
            pointer: {
                show: false
            },
            detail: {
                offsetCenter: [0, -15],
                textStyle: {
                    fontSize: 40,
                    fontWeight: '',
                    color: '#ccc'
                },
                formatter: function(value) {
                    return value + unit;
                }

            },
            itemStyle: {
                normal: {
                    color: "#323232",
                }
            },
            data: [{
                name: "",
                value: Math.floor(gauge_value)
            }]
        },
        {
            name: gauge_name,
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            radius: 120,
            center: ['35%', '45%'], // 默认全局居中  
            min: min,
            max: max,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 45,
                    shadowBlur: 0,
                    color: [
                        gaugeColor, [1, '#ccc']
                    ]
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            pointer: {
                show: false
            },
            detail: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: "#323232",
                }
            },
            data: [{
                name: "",
                value: Math.floor(gauge_value)
            }]
        },
        {
            name: gauge_name,
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            radius: 120,
            splitNumber: 1,
            center: ['65%', '45%'], // 默认全局居中  
            min: min,
            max: max,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 45,
                    shadowBlur: 0,
                    color: [
                        [1, '#ccc']
                    ]
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                length: 20,

            },
            axisLabel: {
                show: true,
                padding: [20, 0, 0, 0],
                fontSize: 12,
                distance: -2
            },
            pointer: {
                show: false
            },
            detail: {
                offsetCenter: [0, -15],
                textStyle: {
                    fontSize: 40,
                    fontWeight: '',
                    color: '#ccc'
                },
                formatter: function(value) {
                    return value + unit;
                }

            },
            itemStyle: {
                normal: {
                    color: "#323232",
                }
            },
            data: [{
                name: "",
                value: Math.floor(gauge_value2)
            }]
        },
        {
            name: gauge_name,
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            radius: 120,
            center: ['65%', '45%'], // 默认全局居中  
            min: min,
            max: max,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 45,
                    shadowBlur: 0,
                    color: [
                        gaugeColor2, [1, '#ccc']
                    ]
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            pointer: {
                show: false
            },
            detail: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: "#323232",
                }
            },
            data: [{
                name: "",
                value: Math.floor(gauge_value2)
            }]
        }
    ]
};