var uploadedDataURL = "/asset/get/s/data-1505060166282-Hy0rHJ79Z.png";

var baseNumber = 1280;
var stepPrice = 1;

var maxValue = 1000;//Math.round(baseNumber * 1.1) - baseNumber;
var minValue = -1000;//-(baseNumber - Math.round(baseNumber * 0.9));

function format_w(v) {
    if (v == 'Mon') {
        return '';
    }
    return v;
}

function format_y(v) {
    if (v > 0) {
        return '{red|' + (baseNumber + v) + '}';
    }
    if (v == 0) {
        return (baseNumber + v);
    }
    return '{green|' + (baseNumber + v) + '}';
}

function format_price_percent(v) {
    if (v > 0) {
        return '{red|' + (v) / baseNumber + '}';
    }
    if (v == 0) {
        return (baseNumber + v);
    }
    return '{green|' + (v) / baseNumber + '}';
}

function generateTime() {
    var result = [];


    for (var j = 30; j < 60; j++) {
        result.push("09:" + j);
    }

    for (var j = 0; j < 60; j++) {
        result.push("10:" + j);
    }


    for (var j = 0; j < 30; j++) {
        result.push("11:" + j);
    }

    for (var i = 13; i < 15; i++) {
        for (var j = 0; j < 60; j++) {
            result.push(i + ":" + j);
        }
    }
    result.push("15:00");
    return result;
}

option = {
    title: {
        text: 'Awesome Chart'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    xAxis: {
        boundaryGap: false,

        data: generateTime(),
        axisLabel: {
            interval: 29,
            formatter: format_w

        },
        splitLine: {　　　　
            show: true,
            lineStyle: {
                type: 'dashed'
            }　　
        }
    },
    yAxis: [{
        type: 'value',
        min: minValue,
        max: maxValue,
        //interval:10,
        splitNumber: 10,
        //data: ['-1000', '-200', '0', '200', '1000' ],
        splitLine: {　　　　
            show: true,
            　　　　lineStyle: {
                type: 'dashed'
            }　　
        },
        axisLabel: {

            formatter: format_y,
            rich: {
                red: {
                    color: 'red',
                    lineHeight: 10
                },
                green: {
                    color: 'green',
                    lineHeight: 10
                }
            }

        }
        // data: ['-300','10', '30', '100', '500']
    }, {
        type: 'value',
        min: minValue,
        max: maxValue,
        splitNumber: 10,
        splitLine: {　　　　
            show: true,
            　　　　lineStyle: {
                type: 'dashed'
            }　　
        },
        axisLabel: {

            formatter: format_price_percent,
            rich: {
                red: {
                    color: 'red',
                    lineHeight: 10
                },
                green: {
                    color: 'green',
                    lineHeight: 10
                }
            }

        }
        // data: ['-300','10', '30', '100', '500']
    }],
    series: [{
            type: 'line',
            lineStyle: {
                size: 1
            },
            //showSymbol: false,
            symbol:'diamond',
            itemStyle: {
                normal: {
                  color: 'rgb(44, 80, 169)',
                  borderColor: 'rgba(44, 80, 169, 0.5)',
                  //borderType:'circle',
                  borderWidth: 12, // 标注边线线宽，单位px，默认为1
                }
              },
            //symbol: 'image://' + uploadedDataURL,// ['circle', 'arrow'],
            symbol: 'path://M-50 50a100 100 0 1 0 200 0a100 100 0 1 0 -200 0zM 100 100 L 300 100 L 200 300 z',
            opacity: '0.5',
            color: 'rgba(25,242, 123, 0.1)',
            colorAlpha: 0.1,
            data: [220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310
            ,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310]
        }
        /*, {
            type: 'line',
            show:false,
            showSymbol: false,
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',
                    lineStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                }
            },
            data: [-220, -182, -191, -234, -290, -330, -310]
        }*/
    ]
};