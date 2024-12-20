var timelist = ['0:01', '0:02', '0:03', '0:04', '0:05', '0:06', '0:07', '0:08', '0:09', '1:00', '1:01', '1:02', '1:03', '1:04', '1:05', '1:06', '1:07', '1:08', '1:09', '1:10'];
var vallist = [0, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1, 1.5, 1.6, 2, 2.5, 2.3, -2.5, -1.5, -1.2, -0.8, -0.9, -1, -0];
var normalSpeed = 2.5;
var obj = {
    "timeList": ["13:42:26", "13:43:06", "13:42:30", "13:42:32", "13:42:34", "13:42:36", "13:42:38", "13:42:40", "13:42:42", "13:42:44", "13:42:28", "13:42:48", "13:42:50", "13:42:52", "13:42:54", "13:42:56", "13:42:58", "13:43:00", "13:43:02", "13:43:04", "13:42:46"],
    "dataList": [{
        "value": "0.37",
        "hasPeople": "无人",
        "floor": 3,
        "doorStr": "关门",
        "time": "13:42:26"
    }, {
        "value": "1.44",
        "hasPeople": "有人",
        "floor": 14,
        "doorStr": "正在开",
        "time": "13:43:06",
        "symbol": "circle"
    }, {
        "value": "2.37",
        "hasPeople": "有人",
        "floor": 23,
        "doorStr": "开门",
        "time": "13:42:30",
        "symbol": "circle"
    }, {
        "value": "1.89",
        "hasPeople": "有人",
        "floor": 18,
        "doorStr": "开门",
        "time": "13:42:32",
        "symbol": "circle"
    }, {
        "value": "0.61",
        "hasPeople": "无人",
        "floor": 6,
        "doorStr": "关门",
        "time": "13:42:34"
    }, {
        "value": "0.81",
        "hasPeople": "无人",
        "floor": 8,
        "doorStr": "正在关",
        "time": "13:42:36"
    }, {
        "value": "1.31",
        "hasPeople": "有人",
        "floor": 13,
        "doorStr": "正在开",
        "time": "13:42:38",
        "symbol": "circle"
    }, {
        "value": "2.35",
        "hasPeople": "有人",
        "floor": 23,
        "doorStr": "开门",
        "time": "13:42:40",
        "symbol": "circle"
    }, {
        "value": "1.25",
        "hasPeople": "无人",
        "floor": 12,
        "doorStr": "正在关",
        "time": "13:42:42"
    }, {
        "value": "1.61",
        "hasPeople": "有人",
        "floor": 16,
        "doorStr": "正在开",
        "time": "13:42:44",
        "symbol": "circle"
    }, {
        "value": "0.78",
        "hasPeople": "无人",
        "floor": 7,
        "doorStr": "正在关",
        "time": "13:42:28"
    }, {
        "value": "2.35",
        "hasPeople": "有人",
        "floor": 23,
        "doorStr": "开门",
        "time": "13:42:48",
        "symbol": "circle"
    }, {
        "value": "1.02",
        "hasPeople": "无人",
        "floor": 10,
        "doorStr": "正在关",
        "time": "13:42:50"
    }, {
        "value": "1.67",
        "hasPeople": "有人",
        "floor": 16,
        "doorStr": "正在开",
        "time": "13:42:52",
        "symbol": "circle"
    }, {
        "value": "0.84",
        "hasPeople": "无人",
        "floor": 8,
        "doorStr": "正在关",
        "time": "13:42:54"
    }, {
        "value": "1.14",
        "hasPeople": "无人",
        "floor": 11,
        "doorStr": "正在关",
        "time": "13:42:56"
    }, {
        "value": "0.21",
        "hasPeople": "无人",
        "floor": 2,
        "doorStr": "关门",
        "time": "13:42:58"
    }, {
        "value": "0.85",
        "hasPeople": "无人",
        "floor": 8,
        "doorStr": "正在关",
        "time": "13:43:00"
    }, {
        "value": "2.24",
        "hasPeople": "有人",
        "floor": 22,
        "doorStr": "开门",
        "time": "13:43:02",
        "symbol": "circle"
    }, {
        "value": "0.38",
        "hasPeople": "无人",
        "floor": 3,
        "doorStr": "关门",
        "time": "13:43:04"
    }, {
        "value": "2.27",
        "hasPeople": "有人",
        "floor": 22,
        "doorStr": "开门",
        "time": "13:42:46",
        "symbol": "circle"
    }],
    "markPointList": [{
        "value": 3,
        "coord": ["13:42:26", "0.37"]
    }, {
        "value": 14,
        "coord": ["13:43:06", "1.44"]
    }, {
        "value": 23,
        "coord": ["13:42:30", "2.37"]
    }, {
        "value": 18,
        "coord": ["13:42:32", "1.89"]
    }, {
        "value": 6,
        "coord": ["13:42:34", "0.61"]
    }, {
        "value": 8,
        "coord": ["13:42:36", "0.81"]
    }, {
        "value": 13,
        "coord": ["13:42:38", "1.31"]
    }, {
        "value": 23,
        "coord": ["13:42:40", "2.35"]
    }, {
        "value": 12,
        "coord": ["13:42:42", "1.25"]
    }, {
        "value": 16,
        "coord": ["13:42:44", "1.61"]
    }, {
        "value": 7,
        "coord": ["13:42:28", "0.78"]
    }, {
        "value": 23,
        "coord": ["13:42:48", "2.35"]
    }, {
        "value": 10,
        "coord": ["13:42:50", "1.02"]
    }, {
        "value": 16,
        "coord": ["13:42:52", "1.67"]
    }, {
        "value": 8,
        "coord": ["13:42:54", "0.84"]
    }, {
        "value": 11,
        "coord": ["13:42:56", "1.14"]
    }, {
        "value": 2,
        "coord": ["13:42:58", "0.21"]
    }, {
        "value": 8,
        "coord": ["13:43:00", "0.85"]
    }, {
        "value": 22,
        "coord": ["13:43:02", "2.24"]
    }, {
        "value": 3,
        "coord": ["13:43:04", "0.38"]
    }, {
        "value": 22,
        "coord": ["13:42:46", "2.27"]
    }, {
        "symbol": "rect",
        "coord": ["13:42:46", "0.37"],
        "symbolSize": [35, 20],
        "value": "有人"
    }]
}

var option = {
    grid: {
        left: '1%',
        right: '10%',
        bottom: '3%',
        top: '4%',
        containLabel: true
    },
    dataZoom: {
        maxValueSpan: 2,
        minValueSpan: 2,
        startValue: obj.timeList[0],
        endValue: obj.timeList[2],
    },
    xAxis: {
        type: 'category',
        name: '时间',
        boundaryGap: false,
        nameGap: 5,
        axisLine: {
            onZero: false,
        },
        splitLine: {
            show: false
        },
        // data: timelist
        data:obj.timeList,
    },
    yAxis: {
        type: 'value',
        name: '速度\n m/s',
        boundaryGap: false,
        nameGap: 5,
        min: (-normalSpeed*1.25).toFixed(2),
        max: (normalSpeed*1.25).toFixed(2),
        splitLine: {
            show: false
        },
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: [{
        type: 'line',
        lineStyle: {
            normal: {
                color: "blue",
            }
        },
        itemStyle: {
            normal: {
                color: "red",
            }
        },
        data:obj.dataList,
        markPoint: {
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside',
                        distance: 0,
                        fontSize: 12,
                        color:'#000',
                        //backgroundColor: 'transparent',
                        formatter: function(param) {
                            if (param.value)
                                return param.value;
                            else
                                return 'B';
                        }
                    }
                }
            },
            data: [],
        }
    }, ]
};

myChart.on('dataZoom', function(param) {
    var i = Math.ceil(param.start / 100 *obj.timeList.length)
    var e = parseInt(param.end / 100 *obj.timeList.length)
    console.log(e)
    console.log([obj.timeList[e], obj.dataList[e]]);
    myChart.setOption({
        series: [{
            markPoint: {
                data: [{
                    coord: [obj.timeList[i], obj.dataList[i].value],
                    value: obj.dataList[i].floor,
                    symbol: 'circle',
                    symbolSize: 20,
                    itemStyle:{
                        normal:{
                            borderColor:'rgb(255,0,0)',
                            color:obj.dataList[i].hasPeople=='有人'?'rgba(255,0,0,1)':'rgba(255,255,255,1)',
                        }
                    }
                },{
                    coord: [obj.timeList[e], (normalSpeed*1.25).toFixed(2)],
                    value:obj.dataList[e].doorStr,
                    symbol: 'rect',
                    symbolSize: [40,25],
                }]
            }
        }]
    })
})