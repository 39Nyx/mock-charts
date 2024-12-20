var data = {
    title: ['总计', '北京', '上海', '浙江', '深圳', '广东', '宁波', '云南', '江苏', '湖南', '其他'],
    plan_production: [500, 300, 490, 333, 346, 777, 888, 864, 789, 765, 500],
    actual_production: [300, 400, 500, 300, 400, 500, 300, 400, 500, 500, 500]
};

for (var pr in data) {
    data[pr] = data[pr].slice(1, -1);
}

function getTableLine(num) {
    var list = [];
    var bottom = 40; //控制线的位置
    var height = 20;
    for (var i = 0; i < num; i++) {
        list.push({
            type: 'line',
            bottom: bottom - i * height,
            right: 0,
            style: {
                fill: '#333'
            },
            shape: {
                x1: 0,
                y1: 0,
                x2: 3200,
                y2: 0,
            }

        });
    }
    return list;
}
var lineList = getTableLine(3);

option = {
    color: ['#4472c4', '#ed7d31', '#ffc000', '#5b9bd5', '#', '70ad47', '#264478', '#a5a5a5'],
    //表格位置
    title: [{
        text: '\n计划耗时\n实际耗时',
        bottom: -5, //控制表格Y轴方向
        left: 10,
        textStyle: {
            lineHeight: 20,
            fontSize: 13,
            fontWeight: 'normal',
            formatter: function(value) {
                return '{table|' + value + '}';
            },
            rich: {
                table: {
                    align: 'center'
                }
            }
        }
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    legend: {
        data: ['计划耗时', '实际耗时']
    },
    grid: {
        bottom: 70,
        left: 80,
        right: 1
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: data.title,
        axisTick: {
            length: 170 //竖线的长度
        },
        axisLabel: {
            axisPointer: {
            type: 'shadow'
        },
            formatter: function(value, index) {
                var indexNum = 0;
                for (var i = 0; i < data.title.length; i++) {
                    if (value == data.title[i]) {
                        indexNum = i;
                    }
                }
                return '{table|' + value +
                    '}\n{table|' + data.plan_production[indexNum] +
                    '}\n{table|' + data.actual_production[indexNum] +
                    '}';
            },
            rich: {
                table: {
                    lineHeight: 20,
                    align: 'center'
                }
            }
        }
    }],
    yAxis: [{
        type: 'value',
        scale: true,
        minInterval: 1,
        name: '数量',
        axisLine: {
            show: false
        },
        splitLine: {
            show: true,
            color: '#333'
        },
        min: function(v) {
            return 0;
        }
    }],
    series: [{
            name: '计划耗时',
            stack: 'aa',
            type: 'bar',
            barWidth: '20px',
            label: {
                show: true,
                position: 'top'
            },
            yAxisIndex: 0,
            data: data.plan_production
        },{
            name: '实际耗时',
            stack: 'bb',
            type: 'bar',
            barWidth: '20px',
            label: {
                show: true,
                position: 'top'
            },
            yAxisIndex: 0,
            data: data.actual_production
        },
        // {
        //     data: data.actual_production,
        //     type: 'line',
        //     smooth: true,
        //     name: '实际耗时',
        //     symbol: 'none',
        //     label: {
        //         show: true,
        //         position: 'top'
        //     },
        //     lineStyle: {
        //         color: '#ffc000',
        //         width: 4,
        //         shadowColor: 'rgba(0, 0, 0, 0.3)', //设置折线阴影
        //         shadowBlur: 15,
        //         shadowOffsetY: 20,
        //     }
        // }
    ],
    graphic: lineList
};