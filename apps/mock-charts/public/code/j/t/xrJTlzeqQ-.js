var data = [];
var lineDataY = [];
var lineDataX = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].map(function(item, index) {
    return item + '月';
});
var lineIconName = [];
lineDataY = [];
lineIconName = [];
var srcData = {
    "code": "200",
    "data": [{
        "type": 1,
        "name": "柞水人",
        "value": [{
            "month": 1,
            "total": 301145,
            "expected": 301145
        }, {
            "month": 2,
            "total": 319987,
            "expected": 319987
        }, {
            "month": 3,
            "total": 365541,
            "expected": 365541
        }, {
            "month": 4,
            "total": 331235,
            "expected": 331235
        }, {
            "month": 5,
            "total": 361123,
            "expected": 361123
        }, {
            "month": 6,
            "total": 301346,
            "expected": 301346
        }, {
            "month": 7,
            "total": 0,
            "expected": 312246
        }, {
            "month": 8,
            "total": 0,
            "expected": 0
        }, {
            "month": 9,
            "total": 0,
            "expected": 0
        }, {
            "month": 10,
            "total": 0,
            "expected": 0
        }, {
            "month": 11,
            "total": 0,
            "expected": 0
        }, {
            "month": 12,
            "total": 0,
            "expected": 0
        }]
    }, {
        "type": 2,
        "name": "渭南人",
        "value": [{
            "month": 1,
            "total": 114622,
            "expected": 114622
        }, {
            "month": 2,
            "total": 121840,
            "expected": 121840
        }, {
            "month": 3,
            "total": 130402,
            "expected": 130402
        }, {
            "month": 4,
            "total": 114456,
            "expected": 114456
        }, {
            "month": 5,
            "total": 124589,
            "expected": 124589
        }, {
            "month": 6,
            "total": 133492,
            "expected": 133492
        }, {
            "month": 7,
            "total": 0,
            "expected": 123491
        }, {
            "month": 8,
            "total": 0,
            "expected": 0
        }, {
            "month": 9,
            "total": 0,
            "expected": 0
        }, {
            "month": 10,
            "total": 0,
            "expected": 0
        }, {
            "month": 11,
            "total": 0,
            "expected": 0
        }, {
            "month": 12,
            "total": 0,
            "expected": 0
        }]
    }, {
        "type": 3,
        "name": "宝鸡人",
        "value": [{
            "month": 1,
            "total": 415767,
            "expected": 0
        }, {
            "month": 2,
            "total": 441827,
            "expected": 0
        }, {
            "month": 3,
            "total": 495943,
            "expected": 0
        }, {
            "month": 4,
            "total": 445691,
            "expected": 0
        }, {
            "month": 5,
            "total": 485712,
            "expected": 0
        }, {
            "month": 6,
            "total": 434838,
            "expected": 434838
        }, {
            "month": 7,
            "total": 0,
            "expected": 435737
        }, {
            "month": 8,
            "total": 0,
            "expected": 0
        }, {
            "month": 9,
            "total": 0,
            "expected": 0
        }, {
            "month": 10,
            "total": 0,
            "expected": 0
        }, {
            "month": 11,
            "total": 0,
            "expected": 0
        }, {
            "month": 12,
            "total": 0,
            "expected": 0
        }]
    }],
    "message": "Successful"
}
var expectedValue = []; //预测值数据
var expectedMonth = 0; //预测月数据
for (var i = 0; i < srcData.data.length; i++) {
    var temp = srcData.data;
    var tempCount = [];
    var expectCount = [];
    for (var j = 0; j < temp[i].value.length; j++) {
        if (temp[i].value[j].total === 0) {
            if (temp[i].value[j].expected != 0) {
                expectedMonth = j;
                expectedValue.push(temp[i].value[j].expected);
            }
            tempCount.push("-");
        } else {
            tempCount.push(temp[i].value[j].total);
        }
        if (temp[i].value[j].expected === 0) {
            expectCount.push("-")
        } else {
            expectCount.push(temp[i].value[j].expected)
        }
    }
    lineIconName.push({
        name: temp[i].name,
        icon: 'rect'
    });
    lineDataY.push({
        type: 'line',
        data: tempCount,
        smooth: true,
        zlevel: 2,
        name: temp[i].name
    });
    lineDataY.push({
        type: 'line',
        data: expectCount,
        smooth: true,
        zlevel: 1,
        name: temp[i].name + "预测",
        lineStyle: {
            normal: {
                color: "#ccc",
                type: "dotted"
            }
        }
    });
}
option = {
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            var filterMap = params.filter(function(item, index) {
                if (item.seriesName.indexOf("预测") > -1) {
                    return false;
                }
                return true;
            });
            var html = filterMap[0].name + "<br>";
            for (var i = 0; i < filterMap.length; i++) {
                if (filterMap[i].value == "-" && expectedMonth == filterMap[i].dataIndex) {
                    filterMap[i].value = expectedValue[i];
                }
                html += filterMap[i].marker + filterMap[i].seriesName + ":" + filterMap[i].value + '<br>';
            }
            return html;
        }
    },
    grid: {
        show: false,
        zlevel: 0,
        z: 2,
        left: '5%',
        top: 20,
        right: '10%',
    },
    legend: {
        orient: 'horizontal',
        bottom: 10,
        align: 'left',
        data: lineIconName,
        itemHeight: 6,
        itemWidth: 20,

    },
    xAxis: {
        data: lineDataX,
        type: 'category',
        boundaryGap: false,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#666'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#666'
            }
        },
        axisLabel: {
            interval: function(number, value) {
                if (number === 0 || number === 2 || number === 5 || number === 8 || number === 11) {
                    return true;
                } else {
                    return false;
                }
            },
            formatter: function(params) {
                if (params == "1月") {
                    var myYear = new Date().getFullYear();
                    return myYear;
                }
                return params.replace("月", "")

            }
        }
    },
    interval: 3,
    yAxis: {
        axisLine: {
            show: true,
            lineStyle: {
                color: '#666'
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#666'
            }
        }
    },
    series: lineDataY,
    color: ['#209db3', '#55c2d6', '#83e624'],
};