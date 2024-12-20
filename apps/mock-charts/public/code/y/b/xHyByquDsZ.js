var geodata = [{
    name: '广州市',
    value: [113.43, 23.26]
}, {
    name: '佛山市',
    value: [112.98, 23.01]
}, {
    name: '东莞市',
    value: [113.85, 23.01]
}, {
    name: '中山市',
    value: [113.38, 22.52]
}, {
    name: '江门市',
    value: [112.70, 22.31]
}, {
    name: '阳江市',
    value: [111.90, 21.95]
}, {
    name: '茂名市',
    value: [110.99, 21.68]
}, {
    name: '湛江市',
    value: [110.24, 21.25]
}, {
    name: '深圳市',
    value: [114.06, 22.68]
}];




var option = {
    title: {
        text: '深湛高铁线路',
        subtext: '数据来源百科',
        textStyle: {
            color: '#7bbfea'
        }
    },
    bmap: {
        roam: true,
        center: [112.275, 22.117],
        zoom: 7,
        mapStyle: {
            styleJson: [{
                    'featureType': 'land',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#081734'
                    }
                }, {
                    'featureType': 'building',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#04406F'
                    }
                }, {
                    'featureType': 'building',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'highway',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#081734'
                    }
                }, {
                    'featureType': 'highway',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#003051'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'green',
                    'elementType': 'geometry',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'water',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#044161'
                    }
                }, {
                    'featureType': 'subway',
                    'elementType': 'geometry.stroke',
                    'stylers': {
                        'color': '#003051'
                    }
                }, {
                    'featureType': 'subway',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'railway',
                    'elementType': 'geometry',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'railway',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'all',
                    'elementType': 'labels.text.stroke',
                    'stylers': {
                        //'color': '#313131'

                    }
                }, {
                    'featureType': 'all',
                    'elementType': 'labels.text.fill',
                    'stylers': {
                        //'color': '#FFFFFF'
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'manmade',
                    'elementType': 'geometry',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'manmade',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'local',
                    'elementType': 'geometry',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'local',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    "featureType": "boundary",
                    "elementType": "all",
                    "stylers": {
                        "color": "#6fa8dc"
                    }
                },

            ]
        }

    },

    series: [

        {
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            zlevel: 2,
            symbolSize: 5,
            rippleEffect: {
                brushType: 'fill',
                period: 2,
                scale: 5
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    offset: [1, 6],
                    show: true,
                    textStyle: {
                        color: "yellow"
                    }
                }
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: 'yellow'
                }
            },
            data: geodata
        }, {
            type: 'lines',
            coordinateSystem: 'bmap',
            //polyline:true,
            symbol: ['none', 'triangle'],
            zlevel: 1,
            effect: {
                show: true,
                symbol: 'roundRect',
                period: 2,
                delay: 100,
                trailLength: 0.6,
                symbolSize: 6,
            },
            lineStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#ed1941'
                        }, {
                            offset: 1,
                            color: '#ffce7b'
                        }],
                        globalCoord: false
                    },
                    width: 1,
                    opacity: 0.8,
                    //type: 'dotted',
                    curveness: 0.2,
                }
            },
            data: [{
                coords: [ //sz-东莞
                    [114.06, 22.68],
                    [113.85, 23.01],
                ]
            }, {
                coords: [ //dg-广州
                    [113.85, 23.01],
                    [113.43, 23.26],
                ]
            }, {
                coords: [ //sz-中山
                    [114.06, 22.68],
                    [113.38, 22.52],
                ]
            }, {
                coords: [ //gz-佛山
                    [113.43, 23.26],
                    [112.98, 23.01],
                ]
            }, {
                coords: [ //fs-江门
                    [112.98, 23.01],
                    [112.70, 22.31],
                ]
            }, {
                coords: [ //zs-江门
                    [113.38, 22.52],
                    [112.70, 22.31],
                ]
            }, {
                coords: [ //jm-阳江
                    [112.70, 22.31],
                    [111.90, 21.95],
                ]
            }, {
                coords: [ //yj-茂名
                    [111.90, 21.95],
                    [110.99, 21.68],
                ]
            }, {
                coords: [ //mm-湛江
                    [110.99, 21.68],
                    [110.24, 21.25],
                ]
            }]
        },

    ]

};
var gd = ['广州市', '深圳市', '东莞市', '中山市', '佛山市', '江门市', '阳江市', '茂名市', '湛江市'];




function getBoundary() {
    var bmap;
    bmap = myChart.getModel().getComponent('bmap').getBMap();
    var bdary = new BMap.Boundary();
    for (var i = 0; i < gd.length; i++) {
        bdary.get(gd[i], function(rs) { //获取行政区域
            //bmap.clearOverlays();        //清除地图覆盖物       
            var count = rs.boundaries.length; //行政区域的点有多少个
            for (var i = 0; i < count; i++) {
                var ply = new BMap.Polygon(rs.boundaries[i], {
                    strokeWeight: 1,
                    strokeColor: "#C6E2FF",
                    fillColor: "#B23AEE"
                }); //建立多边形覆盖物
                bmap.addOverlay(ply); //添加覆盖物
                //bmap.setViewport(ply.getPath());    //调整视野         
            }
        });
    }
}
setTimeout(getBoundary, 0);