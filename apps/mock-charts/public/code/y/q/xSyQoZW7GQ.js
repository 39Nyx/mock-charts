var upColor = '#00da3c';
var downColor = '#ec0000';
var minDataURL = "/asset/get/s/data-1530189895288-Hyy8uIMMm.json";
var dayDataURL = "/asset/get/s/data-1530189882975-Bymr_UfGX.json";
  
// "time, open, high, low, close"
var minData = eval($.get({url:dayDataURL, async:false}).responseText);
var dayData = eval($.get({url:minDataURL, async:false}).responseText);

function splitData(rawData) {
    var categoryData = [];
    var values = []
    for (var i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i].splice(0, 1)[0]);
        values.push([rawData[i][0], rawData[i][3], rawData[i][1], rawData[i][2]])
    }
    return {
        categoryData: categoryData,
        values: values
    };
}

//依据提供的 X 轴 数组插入空值
function insertNullData(rawData, categoryData) {
    var dict = {}
    for (var i = 0; i < rawData.length; i++) {
        key = rawData[i].splice(0, 1)[0];
        key = key.slice(0,10) + ' 11:30:00';
        dict[key] = [rawData[i][0], rawData[i][3], rawData[i][1], rawData[i][2]]
    }
    var values = []    
    for (var k = 0; k < categoryData.length; k++) {
        if(categoryData[k] in dict){
            values.push(dict[categoryData[k]])
        }
        else{
            values.push([])
        }
    }
    return {
        categoryData: categoryData,
        values: values
    };
}

data = splitData(minData)
dayData = insertNullData(dayData, data.categoryData)
console.log(dayData)


option = {
    backgroundColor: '#fff',
    animation: false,
    legend: {
        bottom: 10,
        left: 'center',
        data: ['Dow-Jones index',]
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        textStyle: {
            color: '#000'
        },
        position: function (pos, params, el, elRect, size) {
            var obj = {top: 10};
            obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
            return obj;
        },
        formatter: function (param) {
            paramMin = param[1];
            paramDay = param[0];
            if(isNaN(paramDay.data[1])){
                for (var i = paramDay.data[0]; i < dayData.values.length; i++) {
                    if(isNaN(dayData.values[i][1])){
                        continue;
                    }
                    else{
                        paramDay.data[1] = dayData.values[i][0];
                        paramDay.data[2] = dayData.values[i][1];
                        paramDay.data[3] = dayData.values[i][2];
                        paramDay.data[4] = dayData.values[i][3];
                        break;
                    }
                }
            }
            return [
                'Date: ' + paramMin.name + '<hr size=1>',
                '1min K线' + '<br>',
                'Open: ' + paramMin.data[1] + '<br>',
                'Close: ' + paramMin.data[2] + '<br>',
                'Highest: ' + paramMin.data[3] + '<br>',
                'Lowest: ' + paramMin.data[4] + '<br>',
                '<hr size=1>',
                '日K线' + '<br>',
                'Open: ' + paramDay.data[1] + '<br>',
                'Close: ' + paramDay.data[2] + '<br>',
                'Highest: ' + paramDay.data[3] + '<br>',
                'Lowest: ' + paramDay.data[4] + '<br>',
            ].join('');
        }
        // extraCssText: 'width: 170px'
    },
    axisPointer: {
        link: {xAxisIndex: 'all'},
        label: {
            backgroundColor: '#777'
        }
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: false
            },
            brush: {
                type: ['lineX', 'clear']
            }
        }
    },
    brush: {
        xAxisIndex: 'all',
        brushLink: 'all',
        outOfBrush: {
            colorAlpha: 0.1
        }
    },
    visualMap: {
        show: false,
        seriesIndex: 5,
        dimension: 2,
        pieces: [{
            value: 1,
            color: downColor
        }, {
            value: -1,
            color: upColor
        }]
    },
    grid: [
        {
            left: '10%',
            right: '8%',
            height: '70%'
        },
        {
            left: '10%',
            right: '8%',
            top: '72%',
            height: '35%'
        }
    ],
    xAxis: [
        {
            type: 'category',
            data: data.categoryData,
            scale: true,
            boundaryGap : false,
            axisLine: {onZero: false},
            splitLine: {show: false},
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax',
            axisPointer: {
                z: 100
            }
        },
        {
            type: 'category',
            gridIndex: 1,
            data: data.categoryData,
            scale: true,
            boundaryGap : false,
            axisLine: {onZero: false},
            axisTick: {show: false},
            splitLine: {show: false},
            axisLabel: {show: false},
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax'
        }
    ],
    yAxis: [
        {
            scale: true,
            splitArea: {
                show: true
            }
        },
        {
            scale: true,
            gridIndex: 1,
            splitArea: {
                show: true
            }
        }
    ],
    dataZoom: [
        {
            type: 'inside',
            xAxisIndex: [0, 1],
            start: 98,
            end: 100
        },
        {
            show: true,
            xAxisIndex: [0, 1],
            type: 'slider',
            top: '85%',
            start: 98,
            end: 100
        }
    ],
    series: [
        {
            name: '1分钟K线',
            type: 'candlestick',
            data: data.values,
            itemStyle: {
                normal: {
                    color: upColor,
                    color0: downColor,
                    borderColor: null,
                    borderColor0: null
                }
            },
        },
        {
            name: '日K线',
            type: 'candlestick',
            data: dayData.values,
            barWidth: '23500%',
            itemStyle: {
                normal: {
                    color: upColor,
                    color0: downColor,
                    borderColor: null,
                    borderColor0: null,
                    opacity: 0.2
                }
            },
        }
    ]
};