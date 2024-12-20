var data1 = ['三号线', [{
    "coords": [
        [
            113.32769,
            23.125212
        ],
        [
            113.328028,
            23.136921
        ],
        [
            113.3382,
            23.13898
        ],
        [
            113.346151,
            23.14054
        ],
        [
            113.351857,
            23.146269
        ],
        [
            113.358452,
            23.158306
        ],
        [
            113.350307,
            23.176045
        ]
    ]
}]];
var datapoint1 = [{
    "value": [
        113.32769,
        23.125212
    ],
    "name": "珠江新城"
}, {
    "value": [
        113.350307,
        23.176045
    ],
    "name": "天河客运站"
}]

var data2 = ['六号线', [{
    "coords": [
        [
            113.350307,
            23.176045
        ],
        [
            113.355914,
            23.184202
        ],
        [
            113.372236,
            23.196087
        ],
        [
            113.384183,
            23.197317
        ],
        [
            113.402365,
            23.199766
        ],
        [
            113.416819,
            23.197275
        ],
        [
            113.439609,
            23.194286
        ],
        [
            113.457791,
            23.186772
        ],
        [
            113.46672,
            23.178157
        ],
        [
            113.474517,
            23.176355
        ],
        [
            113.488503,
            23.181238
        ]
    ]
}]];
var datapoint2 = [{
    "value": [
        113.350307,
        23.176045
    ],
    "name": "天河客运站"
}, {
    "value": [
        113.488503,
        23.181238
    ],
    "name": "萝岗"
}]

var data3 = ['391路', [{
    "coords": [
        [113.5352066, 23.1698527],
        [113.5301390, 23.1695774],
        [113.5242051, 23.1710013],
        [113.5236076, 23.1726326],
        [113.5127640, 23.1778281],
        [113.5096090, 23.1803153],
        [113.5080335, 23.1808791],
        [113.5047048, 23.1824788],
        [113.4997247, 23.1826623],
        [113.4952235, 23.1829922],
        [113.4901282, 23.1846170],
        [113.4876787, 23.1811736],
        [113.4833532, 23.1801204],
        [113.4793212, 23.1784349],
        [113.4734506, 23.1700603],
        [113.4711015, 23.1686428],
        [113.4653959, 23.1694023],
        [113.4591097, 23.1698489],
        [113.4535153, 23.1703851],
        [113.4458190, 23.1713310],
        [113.4421358, 23.1713980],
        [113.4370798, 23.1715604],
        [113.4309212, 23.1717505],
        [113.4244679, 23.1726804],
        [113.4224563, 23.1739380]
    ]
}]];

var datapoint3 = [{
    "value": [113.5352066, 23.1698527],
    "name": "中海公寓站(北)"
}, {
    "value": [113.4876787, 23.1811736],
    "name": "地铁萝岗站"
}, {
    "value": [113.4224563, 23.1739380],
    "name": "科学大道口站"
}]

var data4 = ['548路', [{
    "coords": [
        [113.4222313, 23.1744197],
        [113.4204878, 23.1697276],
        [113.4198529, 23.1636295],
        [113.4166406, 23.1586654],
        [113.4144325, 23.1554801],
        [113.4173513, 23.1508492],
        [113.4126686, 23.1516326],
        [113.4129813, 23.1412616],
        [113.4068143, 23.1387582],
        [113.4001717, 23.1356509],
        [113.3981990, 23.1293344],
        [113.3971500, 23.1246249],
        [113.3954519, 23.1227628],
        [113.3902270, 23.1240886],
        [113.3862720, 23.1251337],
        [113.3770134, 23.1269386],
        [113.3734965, 23.1280926],
        [113.3653469, 23.1300478],
        [113.3522268, 23.1320371],
        [113.3462929, 23.1323772],
        [113.3361652, 23.1332102],
        [113.3294455, 23.1336229]
    ]
}]];
var datapoint4 = [{
    "value": [113.4224563, 23.1739380],
    "name": "科学大道口站"
}, {
    "value": [113.3294455, 23.1336229],
    "name": "人民日报华南分社站1"
}]

var ePoint = [{
    name: '天河客运站',
    value: [113.350307, 23.176045]
}, {
    name: '科学大道口站',
    value: [113.4224563, 23.1739380]
}, {
    name: '萝岗',
    value: [113.488503, 23.181238]
}]

var linepoint1 = [{
    "coords": [
        [113.32195, 23.134856],
        [113.32195, 23.120233],
        [113.340329, 23.118937],
        [113.33988, 23.132181],
        [113.32195, 23.134856]
    ]
}]

var linepoint2 = [{
    "coords": [
        [113.529358, 23.16898],
        [113.532664, 23.161969],
        [113.543516, 23.162933],
        [113.54251, 23.174611],
        [113.529358, 23.16898]
    ]
}]

var sePoint = [{
    name: '起点',
    value: [113.5352066, 23.1698527],
    itemStyle: {
        normal: {
            color: '#00B2EE'
        }
    }
}, {
    "value": [113.32769, 23.125212],
    "name": "终点",
    itemStyle: {
        normal: {
            color: '#CD3333'
        }
    }
}]




myChart.setOption({
    animation: true,
    bmap: {
        center: [113.37751, 23.212117],
        zoom: 13,
        roam: true,
        mapStyle: {
            styleJson: [{
                "featureType": "land",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on",
                    "color": "#f5f5f5ff"
                }
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on",
                    "color": "#bedbf9ff"
                }
            }, {
                "featureType": "green",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on",
                    "color": "#d0edccff"
                }
            }, {
                "featureType": "building",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "building",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#ffffffb3"
                }
            }, {
                "featureType": "building",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#dadadab3"
                }
            }, {
                "featureType": "subwaystation",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on",
                    "color": "#b15454B2"
                }
            }, {
                "featureType": "education",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on",
                    "color": "#e4f1f1ff"
                }
            }, {
                "featureType": "medical",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on",
                    "color": "#f0dedeff"
                }
            }, {
                "featureType": "scenicspots",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on",
                    "color": "#e2efe5ff"
                }
            }, {
                "featureType": "highway",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "off",
                    "weight": 4
                }
            }, {
                "featureType": "highway",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#f7c54dff"
                }
            }, {
                "featureType": "highway",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#fed669ff"
                }
            }, {
                "featureType": "highway",
                "elementType": "labels",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "highway",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#8f5a33ff"
                }
            }, {
                "featureType": "highway",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#ffffffff"
                }
            }, {
                "featureType": "highway",
                "elementType": "labels.icon",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "arterial",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on",
                    "weight": 2
                }
            }, {
                "featureType": "arterial",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#d8d8d8ff"
                }
            }, {
                "featureType": "arterial",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#ffeebbff"
                }
            }, {
                "featureType": "arterial",
                "elementType": "labels",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "arterial",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#525355ff"
                }
            }, {
                "featureType": "arterial",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#ffffffff"
                }
            }, {
                "featureType": "local",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on",
                    "weight": 1
                }
            }, {
                "featureType": "local",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#d8d8d8ff"
                }
            }, {
                "featureType": "local",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#ffffffff"
                }
            }, {
                "featureType": "local",
                "elementType": "labels",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "local",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#979c9aff"
                }
            }, {
                "featureType": "local",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#ffffffff"
                }
            }, {
                "featureType": "railway",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on",
                    "weight": 1
                }
            }, {
                "featureType": "railway",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#949494ff"
                }
            }, {
                "featureType": "railway",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#ffffffff"
                }
            }, {
                "featureType": "subway",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on",
                    "weight": 1
                }
            }, {
                "featureType": "subway",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#d8d8d8ff"
                }
            }, {
                "featureType": "subway",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#ffffffff"
                }
            }, {
                "featureType": "subway",
                "elementType": "labels",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "subway",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#979c9aff"
                }
            }, {
                "featureType": "subway",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#ffffffff"
                }
            }, {
                "featureType": "continent",
                "elementType": "labels",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "continent",
                "elementType": "labels.icon",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "continent",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#333333ff"
                }
            }, {
                "featureType": "continent",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#ffffffff"
                }
            }, {
                "featureType": "city",
                "elementType": "labels.icon",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "city",
                "elementType": "labels",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "city",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#454d50ff"
                }
            }, {
                "featureType": "city",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#ffffffff"
                }
            }, {
                "featureType": "town",
                "elementType": "labels.icon",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "town",
                "elementType": "labels",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "town",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#454d50ff"
                }
            }, {
                "featureType": "town",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#ffffffff"
                }
            }]
        }
    },
    tooltip: {},
    series: [{
        type: 'lines',
        coordinateSystem: 'bmap',
        data: data1[1],
        polyline: 'false',
        name: data1[0],
        lineStyle: {
            normal: {
                color: '#FF0000',
                width: 6,
                opacity: 0.8,
            }
        }
    }, {
        type: 'lines',
        coordinateSystem: 'bmap',
        data: data2[1],
        polyline: 'false',
        name: data2[0],
        lineStyle: {
            normal: {
                color: '#FF0000',
                width: 6,
                opacity: 0.8,
            }
        }
    }, {
        type: 'lines',
        coordinateSystem: 'bmap',
        data: data3[1],
        polyline: 'false',
        name: data3[0],
        lineStyle: {
            normal: {
                color: '#9400D3',
                width: 6,
                opacity: 0.8,
            }
        }
    }, {
        type: 'lines',
        coordinateSystem: 'bmap',
        data: data4[1],
        polyline: 'false',
        name: data4[0],
        lineStyle: {
            normal: {
                color: '#9400D3',
                width: 6,
                opacity: 0.8,
            }
        }
    }, {
        type: 'scatter',
        coordinateSystem: 'bmap',
        symbolSize: [10, 5],
        label: {
            normal: {
                textStyle: {
                    fontWeight: 'bold',
                    color: 'red'
                },
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        itemStyle: {
            normal: {
                color: 'black',
                borderWidth: 1,
                borderColor: '#fff'
            }
        },
        data: datapoint1
    }, {
        type: 'scatter',
        coordinateSystem: 'bmap',
        symbolSize: [10, 5],
        label: {
            normal: {
                textStyle: {
                    fontWeight: 'bold',
                    color: 'red'
                },
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        itemStyle: {
            normal: {
                color: 'black',
                borderWidth: 1,
                borderColor: '#fff'
            }
        },
        data: datapoint2
    }, {
        type: 'scatter',
        coordinateSystem: 'bmap',
        symbolSize: [10, 5],
        label: {
            normal: {
                textStyle: {
                    fontWeight: 'bold',
                    color: '#9400D3'
                },
                show: true,
                position: 'left',
                formatter: '{b}'
            }
        },
        itemStyle: {
            normal: {
                color: 'black',
                borderWidth: 1,
                borderColor: '#fff'
            }
        },
        data: datapoint3
    }, {
        type: 'scatter',
        coordinateSystem: 'bmap',
        symbolSize: [10, 5],
        label: {
            normal: {
                textStyle: {
                    fontWeight: 'bold',
                    color: '#9400D3'
                },
                show: true,
                position: 'left',
                formatter: '{b}'
            }
        },
        itemStyle: {
            normal: {
                color: 'black',
                borderWidth: 1,
                borderColor: '#fff'
            }
        },
        data: datapoint4
    }, {
        type: 'effectScatter',
        coordinateSystem: 'bmap',
        symbolSize: 15,
        data: ePoint,
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: 'purple',
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        zlevel: 1
    }, {
        type: 'scatter',
        coordinateSystem: 'bmap',
        symbolSize: 80,
        symbol: 'pin',
        label: {
            normal: {
                textStyle: {
                    fontWeight: 'bold',
                    color: '#fff'
                },
                show: true,
                position: 'inside',
                formatter: '{b}',
                fontSize: 15,
            }
        },
        data: sePoint
    }]
});


var bmap = myChart.getModel().getComponent('bmap').getBMap();
//创建圆对象
circle1 = new BMap.Circle(new BMap.Point(113.32769, 23.125212), 2000, {
    strokeColor: "red",
    strokeWeight: 3,
    fillColor: "#E2E8F1",
    fillOpacity: 0.3
});
//创建圆对象
circle2 = new BMap.Circle(new BMap.Point(113.5352066, 23.1698527), 2000, {
    strokeColor: "red",
    strokeWeight: 3,
    fillColor: "#E2E8F1",
    fillOpacity: 0.3
});
//画到地图上面
bmap.addOverlay(circle1);
bmap.addOverlay(circle2);