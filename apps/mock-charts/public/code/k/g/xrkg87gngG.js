var timeData = ['1601', '1602', '1603', '1604', '1605', '1606', '1607',
    '1608', '1609', '1610', '1611', '1612',
    '1701', '1702', '1703', '1704', '1705', '1706',
    '1707', '1708', '1709', '1710', '1711', '1712'
];

var planData = [67, 68, 67, 68, 69, 70, 71, 72, 73, 72, 70, 71, 70, 69, 68, 67, 67, 66, 65, 65, 66, 68, 70, 71];
var actualData = [55, 60, 70, 75, 73, 72, 70, 71, 70, 69, 68, 67, 67, 66, 65, 65, 66, 68, 70, 71, 66, 63, 66, 75];
var inventoryData = [55, 59, 66, 63, 60, 61, 57, 53, 66, 61, 55, 68, 65, 61, 58, 55, 64, 70, 66, 64, 60, 54, 53, 62];

planDataX=[{value: "67",textStyle: {color: "#FF0000"}},{value: "68",textStyle: {color: "#FF0000"}},{value: "67",textStyle: {color: "#FF0000"}},{value: "68",textStyle: {color: "#FF0000"}},{value: "69",textStyle: {color: "#FF0000"}},{value: "70",textStyle: {color: "#FF0000"}},{value: "71",textStyle: {color: "#FF0000"}},{value: "72",textStyle: {color: "#FF0000"}},{value: "73",textStyle: {color: "#FF0000"}},{value: "72",textStyle: {color: "#FF0000"}},{value: "70",textStyle: {color: "#FF0000"}},{value: "71",textStyle: {color: "#FF0000"}},{value: "70",textStyle: {color: "#FF0000"}},{value: "69",textStyle: {color: "#FF0000"}},{value: "68",textStyle: {color: "#FF0000"}},{value: "67",textStyle: {color: "#FF0000"}},{value: "67",textStyle: {color: "#FF0000"}},{value: "66",textStyle: {color: "#FF0000"}},{value: "65",textStyle: {color: "#FF0000"}},{value: "65",textStyle: {color: "#FF0000"}},{value: "66",textStyle: {color: "#FF0000"}},{value: "68",textStyle: {color: "#FF0000"}},{value: "70",textStyle: {color: "#FF0000"}},{value: "71",textStyle: {color: "#FF0000"}}];
actualDataX=[{value: "55",textStyle: {color: "#008C8C"}},{value: "60",textStyle: {color: "#008C8C"}},{value: "70",textStyle: {color: "#008C8C"}},{value: "75",textStyle: {color: "#008C8C"}},{value: "73",textStyle: {color: "#008C8C"}},{value: "72",textStyle: {color: "#008C8C"}},{value: "70",textStyle: {color: "#008C8C"}},{value: "71",textStyle: {color: "#008C8C"}},{value: "70",textStyle: {color: "#008C8C"}},{value: "69",textStyle: {color: "#008C8C"}},{value: "68",textStyle: {color: "#008C8C"}},{value: "67",textStyle: {color: "#008C8C"}},{value: "67",textStyle: {color: "#008C8C"}},{value: "66",textStyle: {color: "#008C8C"}},{value: "65",textStyle: {color: "#008C8C"}},{value: "65",textStyle: {color: "#008C8C"}},{value: "66",textStyle: {color: "#008C8C"}},{value: "68",textStyle: {color: "#008C8C"}},{value: "70",textStyle: {color: "#008C8C"}},{value: "71",textStyle: {color: "#008C8C"}},{value: "66",textStyle: {color: "#008C8C"}},{value: "63",textStyle: {color: "#008C8C"}},{value: "66",textStyle: {color: "#008C8C"}},{value: "75",textStyle: {color: "#008C8C"}}];
inventoryDataX=[{value: "55",textStyle: {color: "#FFCB00"}},{value: "59",textStyle: {color: "#FFCB00"}},{value: "66",textStyle: {color: "#FFCB00"}},{value: "63",textStyle: {color: "#FFCB00"}},{value: "60",textStyle: {color: "#FFCB00"}},{value: "61",textStyle: {color: "#FFCB00"}},{value: "57",textStyle: {color: "#FFCB00"}},{value: "53",textStyle: {color: "#FFCB00"}},{value: "66",textStyle: {color: "#FFCB00"}},{value: "61",textStyle: {color: "#FFCB00"}},{value: "55",textStyle: {color: "#FFCB00"}},{value: "68",textStyle: {color: "#FFCB00"}},{value: "65",textStyle: {color: "#FFCB00"}},{value: "61",textStyle: {color: "#FFCB00"}},{value: "58",textStyle: {color: "#FFCB00"}},{value: "55",textStyle: {color: "#FFCB00"}},{value: "64",textStyle: {color: "#FFCB00"}},{value: "70",textStyle: {color: "#FFCB00"}},{value: "66",textStyle: {color: "#FFCB00"}},{value: "64",textStyle: {color: "#FFCB00"}},{value: "60",textStyle: {color: "#FFCB00"}},{value: "54",textStyle: {color: "#FFCB00"}},{value: "53",textStyle: {color: "#FFCB00"}},{value: "62",textStyle: {color: "#FFCB00"}}];
//alert(inventoryDataX);

/*var inventoryDataX = inventoryData.map(function(str) {
    return '{value: "' + str + '",textStyle: {color: "#FFCB00"}}';
});*/
//时间格式化相关
/*timeData = timeData.map(function(str) {
    return str.replace('2017/', '');
});
*/
option = {
    title: {
        bottom: 5,
        text: '库存及订货情况',
        x: 'center',
        textStyle: {
            color: "#FFFFFF"
        }
    },
    backgroundColor: "#1A1A44",
    textStyle: {
        color: "#FFFFFF"
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            return 20 + params[0].name.substr(0, 2) + '年' + params[0].name.substr(2, 4) + '月' + '<br/>' +
                params[2].seriesName + ' : ' + params[2].value + '吨<br/>' +
                params[0].seriesName + ' : ' + params[0].value + '吨<br/>' +
                params[1].seriesName + ' : ' + params[1].value + '吨<br/>';
        },
        axisPointer: {
            animation: false
        }
    },
    legend: {
        data: ['预测订货量', '实际订货量', '库存量'],
        x: 'left',
        left: '3%',
        textStyle: {
            color: "#FFFFFF"
        }
    },
    dataZoom: [{
        type: 'slider',
        show: false,
        realtime: true,
        start: 0,
        end: 40,
        xAxisIndex: [0, 1, 2, 3],
        handleStyle: {
            color: "#d3dee5",

        },
        textStyle: {
            color: "#FFFFFF"
        },
        borderColor: "#FFFFFF"
    }, {
        type: 'inside',
        realtime: true,
        start: 30,
        end: 70,
        xAxisIndex: [0, 1, 2, 3]
    }],
    grid: [{
        left: 50,
        right: 50,
        height: '10%'
    }, {
        left: 50,
        right: 50,
        top: '15%',
        height: '75%'
    }],
    xAxis: [{
        gridIndex: 1,
        type: 'category',
        boundaryGap: true,
        axisLine: {
            onZero: true
        },
        data: timeData
    }, {
        gridIndex: 0,
        type: 'category',
        boundaryGap: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        position: 'top',
        offset: 0,
        data: planDataX
    }, {
        gridIndex: 0,
        type: 'category',
        boundaryGap: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        position: 'top',
        offset: -15,
        data: actualDataX
    }, {
        gridIndex: 0,
        type: 'category',
        boundaryGap: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        position: 'top',
        offset: -30,
        data: inventoryDataX
    }],
    yAxis: [{
        gridIndex: 1,
        name: '订货量',
        nameTextStyle: {
            padding: [0,5,20,0]
        },
        type: 'value',
        min: 0
    }, {
        gridIndex: 1,
        name: '库存量',
        nameTextStyle: {
            padding: [0,0,20,5]
        },
        type: 'value',
        min: 0
    }, {
        gridIndex: 0,
        name: '',
        type: 'value',
        min: 0
    }],
    graphic : [
        {
            type: 'text',
            z: 100,
            top: '1%',
            right: '3%',
            style: {
                fill: '#FFFFFF',
                text: '单位: 万吨',
                font: '12px Microsoft YaHei'
            }
        }
   	],
    series: [{
        name: '预测订货量',
        type: 'line',
        symbolSize: 8,
        yAxisIndex: 0,
        xAxisIndex: 0,
        hoverAnimation: false,
        data: planData,
        itemStyle: {
            normal: {
                barBorderRadius: 0,
            }
        }
    }, {
        name: '实际订货量',
        type: 'line',
        symbolSize: 8,
        yAxisIndex: 0,
        xAxisIndex: 0,
        hoverAnimation: false,
        data: actualData,
        itemStyle: {
            normal: {
                barBorderRadius: 0,
            }
        }
    }, {
        name: '库存量',
        type: 'bar',
        xAxisIndex: 0,
        yAxisIndex: 1,
        data: inventoryData
    }]
};