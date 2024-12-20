var brandData = ['X1 Carbon系列', 'Yoga 系列','','X1系列', 'Yoga Yoga系列'];
var storeData = ['KKONE', '高新万达', '世欧广场', '缤纷城'];
var salesData = [   
    [100, 236, 325, 439],
    [209, 236, 325, 439],
    [209, 236, 325, 439],
    [209, 236, 325, 439]
]; //销量数据
var ratioData = [
    [90, 80, 70, 75],
    [95, 60, 75, 78],
    [95, 60, 75, 78],
    [95, 60, 75, 78]
]; //达成率数据

var smin = Number.MAX_VALUE;
var smax = 0;
for (var i = 0; i < salesData[0].length; i ++) {
    var sum = 0;
    var nsum = 0;
    for (var j = 0; j < salesData.length; j ++) {
        if (salesData[j][i] >= 0) {
            sum += salesData[j][i];
        } else {
            nsum += salesData[j][i];
        }
    }
    if (sum > smax) {
        smax = sum;
    }
    if (nsum < smin) {
        smin = nsum;
    }
}

var rmin = Number.MAX_VALUE;
var rmax = 0;
for (var i = 0; i < ratioData.length; i ++) {
    for (var j = 0; j < ratioData[i].length; j ++) {
        if (ratioData[i][j] > rmax) {
            rmax = ratioData[i][j];
        }
        if (ratioData[i][j] < rmin) {
            rmin = ratioData[i][j];
        }
    }
}

if (smin >= 0) {
    smin = 0;
}

var smax = (smax - smin) / 2 * 3 + smin;
var rmin = rmax - (rmax - rmin) * 3;

option = {
    title: {},
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: function (params) {
            var result = params[0].name + ': <br />';
            var circle = "";
            for (var i = 0; i < params.length; i ++) {
                if (i < params.length / 2) {
                    circle = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;border:1px solid' + params[i].color + ';background-color:' + params[i].color + '"></span>';
                    result += circle;
                    result += params[i].seriesName + '销量：' + params[i].data + '<br />';
                } else {
                    circle = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;border:1px solid' + params[i].color + '"></span>';
                    result += circle;
                    result += params[i].seriesName + '达成率：' + params[i].data + '%<br />';
                }
            }
            return result;
        }
    },
    grid: {
        containLabel: true
    },
    legend: {
        data: brandData,
        formatter: function(name) {
             return '{space|' + name + '}';
        },
        textStyle: {
            rich:{
                space: {
                    width: 100
                }
            }
        }
    },
    xAxis: [{
        type: 'category',
        data: storeData
    }],
    yAxis: [{
        type: 'value',
        position: 'left',
        max: smax,
        min: smin,
        interval: (smax - smin) / 6
    }, {
        type: 'value',
        position: 'right',
        max: rmax,
        min: rmin,
        interval: (rmax - rmin) / 6
    }],
    series: [{
        name: brandData[0],
        type: 'bar',
        stack: 'a',
        data: salesData[0]
    }, {
        name: brandData[1],
        type: 'bar',
        stack: 'a',
        data: salesData[1]
    }, {
        name: brandData[3],
        type: 'bar',
        stack: 'a',
        data: salesData[2]
    }, {
        name: brandData[4],
        type: 'bar',
        stack: 'a',
        data: salesData[3]
    }, {
        name: brandData[0],
        type: 'line',
        yAxisIndex: 1,
        data: ratioData[0]
    }, {
        name: brandData[1],
        type: 'line',
        yAxisIndex: 1,
        data: ratioData[1]
    }]
};