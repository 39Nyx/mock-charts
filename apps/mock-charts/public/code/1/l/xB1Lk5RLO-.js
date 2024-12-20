/**
 * 
 * 测试自动遍历源数据以整合成可以
 * 自动渲染的polyline的数据数组
 * 
 */

var coors1 = [
    [100, 220],
    [200, 182],
    [300, 191],
    [400, 234],
    [500, 290],
    [600, 330],
    [700, 310]
];

var coors2 = [
    [100, 420],
    [200, 382],
    [300, 391],
    [400, 434],
    [500, 490],
    [600, 530],
    [700, 510]
];

var coors3 = [
    [100, 620],
    [200, 582],
    [300, 591],
    [400, 634],
    [500, 690],
    [600, 730],
    [700, 710]
];
var c1 = [];
var c2 = [];
var c3 = [];
var newSet = [c1, c2, c3];

var coors = [coors1, coors2, coors3];

function filter(newSet, coors) {
    for (var i = 0; i < newSet.length; i++) {
        for (var j = 0; j < coors[i].length - 1; j++) {
            newSet[i][j] = [coors[i][j][0], coors[i][j][1], coors[i][j + 1][0], coors[i][j + 1][1]];
        }
    }
}
filter(newSet, coors);
console.log(newSet);
var optionSeries = [];
var legendData = [];
var renderLoop = function(sourceData, pointData, i) {

        var renderLineItem = function(params, api) {

            var point1 = api.coord([api.value(0), api.value(1)]);
            var point2 = api.coord([api.value(2), api.value(3)]);
            //console.log(point);
            return {
                type: 'line',
                shape: {
                    x1: point1[0],
                    x2: point2[0],
                    y1: point1[1],
                    y2: point2[1]
                },
                style: api.style({
                    fill: null,
                    stroke: api.visual('color'),
                    lineWidth: 2
                })
            };

        }
        var num = i + 1;
        legendData.push({
            name: 'Line' + num
        }, {
            name: 'EffectScatter' + num
        });
        optionSeries.push({
            type: 'custom',
            name: 'Polyline' + num,
            renderItem: renderLineItem,
            encode: {
                x: 0,
                y: 1
            },
            data: sourceData[i],
            animationDelay: function(idx) {
                return idx * 100;
            }
        }, {
            type: 'effectScatter',
            name: 'EffectScatter' + num,
            symbol: 'circle',
            symbolSize: 10,
            data: pointData[i],
            animationDelay: function(idx) {
                return idx * 100;
            }
        });
    }
    //遍历元数据，自动生成polyline
for (var i = 0; i < newSet.length; i++) {
    renderLoop(newSet, coors, i);
}

option = {
    title: {
        text: 'Line Chart with scatters'
    },
    legend: {
        data: legendData,
        left: 0,
        top: 50
    },
    grid: {
        top: 100
    },
    xAxis: {
        min: 0,
        max: 1000
    },
    yAxis: {
        min: 0,
        max: 1000
    },
    tooltip: {

    },
    series: optionSeries
};