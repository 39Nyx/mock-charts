var itemStyleExample = {
    normal: {
        color: 'red',
    },
};
var rasterColorscale = {
    stops: [
        [0, 'red'],
        [2, 'blue'],
        [5, 'grey'],
        [8, 'green'],
        [10, 'pink']
    ],
};

function getYMax() {
    if (rasterColorscale.max) {
        return rasterColorscale.max;
    }
    var length = rasterColorscale.stops.length;
    var max = rasterColorscale.stops[length - 1][0];
    // max += 1;
    return max;
}

function getYMin() {
    if (rasterColorscale.min) {
        return rasterColorscale.min;
    }
    var min = rasterColorscale.stops[0][0];
    return min;
}

function getFactor(value, max, min) {
    return (value - min) / (max - min);
}

function getIntervalSery(prepos, pos, value, color) {
    var max = getYMax();
    var min = getYMin();
    var name = prepos + "~" + pos;
    var handleValue = getFactor(value, max, min);
    var handlePos = getFactor(pos, max, min);
    return {
        type: 'bar',
        name: name,
        markLine: {
            data: [{
                yAxis: handlePos
            }],
        },
        data: [handleValue],
        stack: 'interval',
        itemStyle: {
            normal: {
                color: color,
            },
        },
    };
}

function getExponentialSery(prepos, pos, value, color, preColor) {
    var max = getYMax();
    var min = getYMin();
    var name = prepos + "~" + pos;
    var handleValue = getFactor(value, max, min);
    // const handlePos = getFactor(pos, max, min);
    return {
        type: 'bar',
        name: name,
        data: [handleValue],
        stack: 'exponential',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1,
                        color: preColor
                    },
                    {
                        offset: 0,
                        color: color
                    },
                ]),
            },
        },
    };
}
var series = rasterColorscale.stops.reduce(function(result, colorGroup, index) {
    var pos = colorGroup[0],
        color = colorGroup[1];
    if (index === 0) {
        // const prepos = getYMin();
        var prepos = 0;
        var value_1 = pos - prepos;
        result.push(getIntervalSery(prepos, pos, value_1, color));
        result.push(getExponentialSery(prepos, pos, value_1, color, color));
        return result;
    }
    var _a = rasterColorscale.stops[index - 1],
        prePos = _a[0],
        preColor = _a[1];
    var value = pos - prePos;
    result.push(getIntervalSery(prePos, pos, value, preColor));
    result.push(getExponentialSery(prePos, pos, value, color, preColor));
    if (index === rasterColorscale.stops.length - 1) {
        var max = getYMax();
        if (max === pos) {
            var value_2 = 1;
            var addPos = max + value_2;
            result.push(getIntervalSery(pos, addPos, value_2, color));
            result.push(getExponentialSery(pos, addPos, value_2, color, color));
        } else {
            var value_3 = max - pos;
            result.push(getIntervalSery(pos, max, value_3, color));
            result.push(getExponentialSery(pos, max, value_3, color, color));
        }
    }
    return result;
}, []);




option = {
    title: {
        text: 'raster-colorscale'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        // data: ['exponential', 'interval']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        // containLabel: true
    },
    // toolbox: {
    //     feature: {
    //         saveAsImage: {}
    //     }
    // },
    xAxis: {
        type: 'category',
        data: ['raster-colorscale']
    },
    yAxis: {
        type: 'value',
        max: 1.1
    },
    series: series
};