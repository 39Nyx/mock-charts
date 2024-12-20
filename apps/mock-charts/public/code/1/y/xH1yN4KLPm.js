
var geoCoordMap = {
    '乌鲁木齐': [87.9236, 43.5883],
    '佛山': [112.8955, 23.1097],
    '保定': [115.0488, 39.0948],
    '兰州': [103.5901, 36.3043]
};
var k = 0;
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var data = [
    [{
        name: '乌鲁木齐'
    }, {
        name: '佛山',
        value: 5
    }],
    [{
        name: '佛山'
    }, {
        name: '保定',
        value: 5
    }],
    [{
        name: '保定'
    }, {
        name: '兰州',
        value: 5
    }],
    [{
        name: '兰州'
    }, {
        name: '乌鲁木齐',
        value: 5
    }]
];

var convertData = function(dataItem) {
    var res = [];
    var fromCoord = geoCoordMap[dataItem[0].name];
    var toCoord = geoCoordMap[dataItem[1].name];
    if (fromCoord && toCoord) {
        res.push({
            fromName: dataItem[0].name,
            toName: dataItem[1].name,
            coords: [fromCoord, toCoord]
        });
    }
 
    return res;
};

var series = [];

[data[k]].forEach(function(item, i) {
    series.push({
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color: 'red',
                width: 1,
                curveness: 0
            }
        },
        data: convertData(data[k])
    }, {
        type: 'effectScatter', //波纹效果
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke',
            scale: 3,
            period: 2
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        //终点
        symbol: 'circle',
        symbolSize: function(val) {
            return val[2] / 8;
        },
        itemStyle: {
            normal: {
                color: 'red'
            }
        },
        data: function() {
            return {
                name: item[1].name,
                value: geoCoordMap[item[1].name].concat([item[1].value])
            };
        }
    });
});


option = {
    backgroundColor: '#404a59',
    title: {
        text: '**之间的传输',
        subtext: '数据纯属虚构',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: [],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'single'
    },
    geo: {
        map: 'china',
        zoom: 1,
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: series
};


setInterval(function() {
    option.series[0].data = convertData(data[k]);
    myChart.setOption(option, true);
    k++;
    if (k > 3) {
        k = 0
    }
}, 3000);