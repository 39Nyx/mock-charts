var startPoint = {
    x: 123.904129,
    y: 29.080339
};
// 地图自定义样式
var bmap = {
    center: [startPoint.x, startPoint.y],
    zoom: 8,
    roam: true,
    mapStyle: {
        styleJson: [{
            "featureType": "water",
            "elementType": "all",
            "stylers": {
                "color": "#044161"
            }
        }, {
            "featureType": "land",
            "elementType": "all",
            "stylers": {
                "color": "#004981"
            }
        }, {
            "featureType": "boundary",
            "elementType": "geometry",
            "stylers": {
                "color": "#064f85"
            }
        }, {
            "featureType": "railway",
            "elementType": "all",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "highway",
            "elementType": "geometry",
            "stylers": {
                "color": "#004981"
            }
        }, {
            "featureType": "highway",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#005b96",
                "lightness": 1
            }
        }, {
            "featureType": "highway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "arterial",
            "elementType": "geometry",
            "stylers": {
                "color": "#004981"
            }
        }, {
            "featureType": "arterial",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#00508b"
            }
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "green",
            "elementType": "all",
            "stylers": {
                "color": "#056197",
                "visibility": "off"
            }
        }, {
            "featureType": "subway",
            "elementType": "all",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "manmade",
            "elementType": "all",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "local",
            "elementType": "all",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "arterial",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "boundary",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#029fd4"
            }
        }, {
            "featureType": "building",
            "elementType": "all",
            "stylers": {
                "color": "#1a5787"
            }
        }, {
            "featureType": "label",
            "elementType": "all",
            "stylers": {
                "visibility": "off"
            }
        }]
    }
}

var geoCoordMap = {
    '中心站': [120.704129, 27.980339],
    '舟山雷达': [122.35847, 30.44269],
    '松兰山雷达': [121.96653, 29.43498],
    '临海古野雷达': [121.78729, 28.68618],
    '路桥潮位站': [121.61698, 28.54435],
    '大陈岛古野雷达': [121.90639, 28.45159],
    '东瓯海上平台雷达站': [121.15741, 27.83642],
    '石砰雷达':[120.6374, 27.40102],
    '温州渔寮雷达站':[120.5373, 27.24161]
};

var BJData = [
    [{
        name: '中心站'
    }, {
        name: '舟山雷达',
        value: 20
    }],
    [{
        name: '中心站'
    }, {
        name: '松兰山雷达',
        value: 20
    }],
    [{
        name: '中心站'
    }, {
        name: '临海古野雷达',
        value: 20
    }],
    [{
        name: '中心站'
    }, {
        name: '路桥潮位站',
        value: 20
    }],
    [{
        name: '中心站'
    }, {
        name: '大陈岛古野雷达',
        value: 20
    }],
    [{
        name: '中心站'
    }, {
        name: '东瓯海上平台雷达站',
        value: 20
    }],
    [{
        name: '中心站'
    }, {
        name: '石砰雷达',
        value: 20
    }],
    [{
        name: '中心站'
    }, {
        name: '温州渔寮雷达站',
        value: 20
    }]
];


var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[1].name];
        var toCoord = geoCoordMap[dataItem[0].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[1].name,
                toName: dataItem[0].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};

var color = ['#97FBFE'];
var series = [];
[
    ['中心站', BJData]
].forEach(function(item, i) {
        series.push({
            //中心站
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function(val) {
                return val[2] / 2;
            },
            showEffectOn: 'render',
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
            data: [{
                name: item[0],
                value: geoCoordMap[item[0]].concat(["50"])
            }]
        }, {
            name: item[0],
            type: 'lines',
            coordinateSystem: 'bmap',
            zlevel: 1,
            tooltip:{
                show:false
            },
            effect: {
                show: true,
                period: 4,
                trailLength: 0.9,
                color: '#ccc',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0],
            type: 'lines',
            coordinateSystem: 'bmap',
            zlevel: 2,
            tooltip:{
                show:false
            },
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                //symbol: planePath,
                symbolSize: 2
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.1,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function(val) {
                return val[2] / 3;
            },
            showEffectOn: 'render',
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
            data: item[1].map(function(dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        });
    });

option = {
    bmap: bmap,
    color: ['#fff'],
    backgroundColor: '#404a59',
    /*title: {
        text: '数据汇总',

        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },*/
    tooltip: {
        // trigger: 'item'
        formatter: '{b0}'
    },
    geo: {
        map: 'bmap',
        polyline: true,
        progressiveThreshold: 500,
        progressive: 200,
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