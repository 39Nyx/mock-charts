function getTableLine(num) {
    var list = [];
    var bottom = 142;
    var height = 20;
    for (var i = 0; i < num; i++) {
        list.push({
            type: 'line',
            bottom: bottom - i*height,
            right: 10,
            style: {
                fill: '#333'
            },
            shape: {
                x1: 0,
                y1: 0,
                x2: 3200,
                y2: 0
            }

        });
    }
    return list;
}
var lineList = getTableLine(6);

option = {
    title: [{
        text: ' \n计划投入数\n实际投入数\n实际产出数\n不良数\n在制数',
        bottom: 78,
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
    xAxis: {
        type: 'category',
        data: ['08:30', '08:30', '08:30', '08:30', '08:30', '08:30', '08:30'],
        axisTick: {
            length: 128
        },
        axisLabel: {
            formatter: function(value) {
                return '{table|' + value +
                    '}\n{table|' + value +
                    '}\n{table|' + value +
                    '}\n{table|' + value +
                    '}\n{table|' + value +
                    '}\n{table|' + value + '}';
            },
            rich: {
                table: {
                    lineHeight: 20,
                    align: 'center'
                }
            }
        }
    },
    grid: {
        bottom: 170,
        left: 100,
        right: 10,
    },
    dataZoom: [{
        type: 'slider',
        show: true,
        xAxisIndex: [0],
        start: 50,
        end: 100,
        bottom: 0
    }],
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
    }],
    graphic: lineList
};