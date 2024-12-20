var count = 70;
var intervalCount = 67;
var baseTop = 70;
var gridHeight = 60;

var data = {
    cpu: [],
    memory: [],
    frame: [],
    main: [],
    fake: [],
    xMin: 0,
    xMax: count * 1000
};

for (var i = 0; i < count; i++) {
    var now = i * 1000;
    data.cpu.push([now, Math.floor(Math.random() * 1000)]);
    data.memory.push([now, Math.floor(Math.random() * 1000)]);
    data.frame.push([now, Math.floor(Math.random() * 1000)]);
    data.fake.push([now, 1]);
}

var ends = [];
for (var i = 0; i < intervalCount; i++) {
    ends.push(Math.floor(Math.random() * count * 1000));
}
ends.sort(function(a, b) {
    return a - b;
});

for (var i = 1; i < ends.length; i++) {
    !(i % 2) && data.main.push([{
        xAxis: ends[i - 1]
    }, {
        xAxis: ends[i]
    }]);
}



function makeXAxis(gridIndex, opt) {
    return echarts.util.merge({
        type: 'time',
        gridIndex: gridIndex,
        axisLine: {
            onZero: false,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#ddd'
            }
        },
        min: data.xMin,
        max: data.xMax,
        axisPointer: {
            lineStyle: {
                color: 'transparent'
            }
        }
    }, opt || {}, true);
}

function makeYAxis(gridIndex, opt) {
    return echarts.util.merge({
        type: 'value',
        gridIndex: gridIndex,
        nameLocation: 'middle',
        nameTextStyle: {
            color: '#333'
        },
        boundaryGap: ['30%', '30%'],
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    }, opt || {}, true);
}

function makeGrid(top, opt) {
    return echarts.util.merge({
        top: top,
        height: gridHeight
    }, opt || {}, true);
}

option = {
    "tooltip": {
        "trigger": "axis",
        "backgroundColor": "#fff",
        "borderColor": "rgba(0, 0, 200, 0.2)",
        "borderWidth": 1,
        "borderRadius": 0,
        "padding": 10
    },
    "axisPointer": {
        "link": [{
            "xAxisIndex": "all"
        }],
        "snap": true
    },
    "grid": [{
        "top": 0,
        "height": 150
    }, {
        "top": 150,
        "height": 150
    }, {
        "top": 300,
        "height": 150
    }, {
        "top": 450,
        "height": 150
    }, {
        "top": 600,
        "height": 150
    }],
    "xAxis": [{
        "type": "category",
        "gridIndex": 0,
        "data": ["2018/04/02~2018/04/02", "2018/04/03~2018/04/03", "2018/04/04~2018/04/04", "2018/04/05~2018/04/05", "2018/04/06~2018/04/06", "2018/04/07~2018/04/07", "2018/04/08~2018/04/08"]
    }, {
        "type": "category",
        "gridIndex": 1,
        "data": ["2018/04/02~2018/04/02", "2018/04/03~2018/04/03", "2018/04/04~2018/04/04", "2018/04/05~2018/04/05", "2018/04/06~2018/04/06", "2018/04/07~2018/04/07", "2018/04/08~2018/04/08"]
    }, {
        "type": "category",
        "gridIndex": 2,
        "data": ["2018/04/02~2018/04/02", "2018/04/03~2018/04/03", "2018/04/04~2018/04/04", "2018/04/05~2018/04/05", "2018/04/06~2018/04/06", "2018/04/07~2018/04/07", "2018/04/08~2018/04/08"]
    }, {
        "type": "category",
        "gridIndex": 3,
        "data": ["2018/04/02~2018/04/02", "2018/04/03~2018/04/03", "2018/04/04~2018/04/04", "2018/04/05~2018/04/05", "2018/04/06~2018/04/06", "2018/04/07~2018/04/07", "2018/04/08~2018/04/08"]
    }, {
        "type": "category",
        "gridIndex": 4,
        "data": ["2018/04/02~2018/04/02", "2018/04/03~2018/04/03", "2018/04/04~2018/04/04", "2018/04/05~2018/04/05", "2018/04/06~2018/04/06", "2018/04/07~2018/04/07", "2018/04/08~2018/04/08"]
    }],
    "yAxis": [{
        "name": "A",
        "type": "value",
        "gridIndex": 0,
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    }, {
        "name": "B",
        "type": "value",
        "gridIndex": 1
    }, {
        "name": "C",
        "type": "value",
        "gridIndex": 2
    }, {
        "name": "D",
        "type": "value",
        "gridIndex": 3
    }, {
        "name": "E",
        "type": "value",
        "gridIndex": 4
    }],
    "series": [{
        "name": "A",
        "type": "line",
        xAxisIndex: 0,
        yAxisIndex: 0,
        "data": [375222.08, 122022.4, 43060.86, 287421.35, 193349.3, 143732.32, 159652.51]
    }, {
        "name": "B",
        "type": "line",
        xAxisIndex: 1,
        yAxisIndex: 1,
        "data": [1083770.02, 1096171.42, 1014837.66, 1062109.3, 1434467.97, 1323917.54, 686076.25]
    }, {
        "name": "C",
        "type": "line",
        xAxisIndex: 2,
        yAxisIndex: 2,
        "data": [681, 731, 635, 666, 1045, 977, 462]
    }, {
        "name": "D",
        "type": "line",
        xAxisIndex: 3,
        yAxisIndex: 3,
        "data": [35, 31, 29, 24, 32, 29, 21]
    }, {
        "name": "E",
        "type": "line",
        xAxisIndex: 4,
        yAxisIndex: 4,
        "data": [0.346219, 0.111316, 0.042431, 0.270613, 0.134788, 0.108565, 0.232703]
    }]
};