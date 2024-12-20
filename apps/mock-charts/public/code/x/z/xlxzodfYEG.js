// 测试随机数组生成
function random(len, start, end) {
    var arr = [];

    function _inner(start, end) {
        var span = end - start;
        return parseInt(Math.random() * span + start)
    }
    while (arr.length < len) {
        var num = _inner(start, end);
        if (arr.indexOf(num) == -1) {
            arr.push(num);
        }
    }
    return arr;
}


/**
 *
 * 通用线状/柱状图
 * @param {*} typeSelect  图表类型 line/bar
 * @param {*} ID  图表容器id
 * @param {*} xAxisArr  x轴文字数组
 * @param {*} nameArr   类别数组
 * @param {*} colorsArr  颜色数组
 * @param {*} dataArr  数据数组
 * @param {*} yAxisSet  是否双y轴
 * @param {*} yAxisUnit  y轴左右单位
 */
function echartLineOrBar(typeSelect, ID, xAxisArr, nameArr, colorsArr, dataArr, yAxisSet, yAxisUnit) {
    //  var myChart = echarts.init(document.getElementById(ID)); //echart容器======>取消注释这里
    var typeSelectArr = []; //类型数组  如果typeSelect为数组就用传进来的typeSelect 不为数组就循环typeSelect
    if (typeof typeSelect == "object") {
        typeSelectArr = typeSelect;
    } else {
        for (let k = 0; k < nameArr.length; k++) {
            typeSelectArr.push(typeSelect);
        }
    }
    var seriesArr = []; //图表详细数组
    var yAxisArr = []; //双y轴显示
    var offset_y; //y轴偏移
    var gird_r; //容器右侧距离
    var tipType = "" //tooltip划过显示方式
    if (yAxisSet && nameArr.length > 2) {
        offset_y = [0, 0, 60];
        gird_r = "5%";
    } else {
        offset_y = 0
        gird_r = "3%"
    }
    dataArr.forEach(function(item, index) {
        var labelSet = ""; //柱状图文字显示
        if (typeSelectArr[index] === "bar") {
            labelSet = {
                show: true,
                position: "top",
                color: "#333",
                fontSize: 12,
            };
        } else {
            labelSet = {
                show: false,
            };
        }

        if (yAxisSet) {
            seriesArr.push({
                name: nameArr[index],
                color: colorsArr[index],
                type: typeSelectArr[index],
                barWidth: "15%",
                yAxisIndex: index,
                // label: labelSet,
                data: item,
            });


            yAxisArr.push({
                type: "value",
                name: '单位:' + yAxisUnit[index],
                offset: offset_y[index],
                splitLine: {
                    //y轴网格线
                    lineStyle: {
                        color: "#eee",
                    },
                },
                axisLabel: {
                    //y轴文本
                     
                      formatter: function (value, index) {
                      if (value >= 100000000) {
                        return value / 100000000 + "亿";
                      } else if (value >= 10000) {
                        return value / 10000 + "万";
                      } else {
                        return value +"元";
                      }
                    },
                    showMinLabel: false, //y轴是否设置最小刻度0
                    textStyle: {
                        fontSize: 12,
                        color: colorsArr[index],
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    //y轴线
                    show: true,
                    lineStyle: {
                        color: colorsArr[index]
                    },
                },
            })

            tipType = "cross";

        } else {
            seriesArr.push({
                name: nameArr[index],
                color: colorsArr[index],
                type: typeSelectArr[index],
                barWidth: "15%",
                // label: labelSet,
                data: item,
            });

            yAxisArr = [{
                type: "value",
                name: '单位:' + yAxisUnit[0],
                splitLine: {
                    //y轴网格线
                    lineStyle: {
                        color: "#eee",
                    },
                },
                axisLabel: {
                      formatter: function (value, index) {
                      if (value >= 100000000) {
                        return value / 100000000 + "亿";
                      } else if (value >= 10000) {
                        return value / 10000 + "万";
                      } else {
                        return value +"元";
                      }
                    },
                    //y轴文本
                    showMinLabel: false, //y轴是否设置最小刻度0
                    color: "#333",
                    textStyle: {
                        fontSize: 12,
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    //y轴线
                    lineStyle: {
                        color: "#333",
                    },
                },
            }, ]
            tipType = "shadow"
        }
    });


    option = {
        backgroundColor:'#dbf6e9',
        tooltip: {
            trigger: "axis",
            textStyle: {
                fontSize: 14,
            },
            axisPointer: {
                type: tipType
            }
        },
        legend: {
            data: nameArr,
            left: "center",
            itemWidth: 20, // 设置宽度
            itemHeight: 15, // 设置高度
            top: 0,
            textStyle: {
                color: "#333",
                fontSize: 14,
                padding: [2, 0, 0, 0],
            },
        },
        grid: {
            left: "3%",
            right: gird_r,
            bottom: "3%",
            top: 50,
            containLabel: true,
        },

        xAxis: [{
            type: "category",

            axisLine: {
                lineStyle: {
                    color: "#333",
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                },
            },
            data: xAxisArr,
        }, ],
        yAxis: yAxisArr,
        series: seriesArr,
    }
}

echartLineOrBar(
    ["line", "bar", "bar"],
    "myeChart",
    ["上城区", "下城区", "江干区", "拱墅区", "西湖区", "滨江区", "萧山区", "余杭区", "桐庐县", "淳安县", "建德市", "富阳区", "临安区", "钱塘新区"],
    ["类型一", "类型二", "类型三"],
    ["#0076ef", "#f79427", "#6581f9"],
    [random(14, 500, 1000), random(14, 1500, 2000), random(14, 0, 100)], true,
    ["元", "万元", "个"]
);


//     echartLineOrBar(
//     ["line", "bar" ],
//     "myeChart",
//     ["上城区", "下城区", "江干区", "拱墅区", "西湖区", "滨江区", "萧山区", "余杭区", "桐庐县", "淳安县", "建德市", "富阳区", "临安区", "钱塘新区"],
//     ["类型一", "类型二"],
//     ["#0076ef", "#f79427"],
//     [random(14, 500, 1000), random(14, 1500, 2000)]
//     ,true,
//     ["元","万元"]
//   );

// ps：取消注释函数里的第一行！！！