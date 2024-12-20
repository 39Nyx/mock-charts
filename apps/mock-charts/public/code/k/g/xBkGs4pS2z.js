var mapOption = {
    bmap: {
        zoom: 5,
        scaleLimit: {
            min: 1,
            max: 1
        },
        roam: false,
        //silent: true,
        mapStyle: {
            styleJson: [{
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": {
                        "color": "#044161"
                    }
                },
                {
                    "featureType": "land",
                    "elementType": "all",
                    "stylers": {
                        "color": "#004981"
                    }
                },
                {
                    "featureType": "boundary",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#064f85"
                    }
                },
                {
                    "featureType": "railway",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "highway",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#004981"
                    }
                },
                {
                    "featureType": "highway",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#005b96",
                        "lightness": 1
                    }
                },
                {
                    "featureType": "highway",
                    "elementType": "labels",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "arterial",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#004981"
                    }
                },
                {
                    "featureType": "arterial",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#00508b"
                    }
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "green",
                    "elementType": "all",
                    "stylers": {
                        "color": "#056197",
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "subway",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "manmade",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "local",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "arterial",
                    "elementType": "labels",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "boundary",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#029fd4"
                    }
                },
                {
                    "featureType": "building",
                    "elementType": "all",
                    "stylers": {
                        "color": "#1a5787"
                    }
                },
                {
                    "featureType": "label",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                }
            ]
        }
    },
    series: [{
        type: 'effectScatter',
        coordinateSystem: 'bmap',
        data: [],
        zlevel: 1,
        showEffectOn: 'emphasis',
        symbolSize: 35,
        rippleEffect: {
            brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: false
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#f4e925',
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
    }, {
        coordinateSystem: 'bmap',
        type: 'lines',
        lineStyle: {
            normal: {
                //color: '#ddd',
                width: 1.5,
                curveness: -0.2
            }
        },
        silent: true,
        data: []
    }, {
        coordinateSystem: 'bmap',
        type: 'lines',
        lineStyle: {
            normal: {
                //color: '#ddd',
                width: 0,
                curveness: -0.2
            }
        },
        silent: true,
        //zlevel: 1,
        effect: {
            show: true,
            symbolSize: 6,
            symbol: 'arrow',
            trailLength: 0,
        },
        data: []
    }, {
        name: 'label',
        type: 'effectScatter',
        symbol: 'roundRect',
        //hoverAnimation:false,
        symbolSize: [90, 25],
        coordinateSystem: 'bmap',
        zlevel: 1,
        tooltip: {
            formatter: '{b}'
        },
        rippleEffect: {
            scale: 1.25,
            //brushType:'stroke'
        },
        label: {
            normal: {
                show: true,
                formatter: [
                    '{title|{b}}{abg|}',
                ].join('\n'),
                rich: {
                    title: {
                        color: 'red',
                        align: 'center',
                        width: 100,
                    },
                    abg: {
                        //backgroundColor: 'rgba(255,255,255,0.4)',
                        width: '100%',
                        align: 'right',
                        height: 25,
                        borderRadius: 5
                    },
                }
            }
        },
        data: [],
    }]
}
var color = ['rgba(255,255,255,0.15)', 'rgba(255,255,255,0.2)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.45)'];
var labelName = ["a", 'b', 'c', 'd', 'e'];
var labelUrl = ["#", "#", "#", "#", "#"];
var positions = [
    [11.8, 0.47],
    [-11.7, 4.47],
    [-13.7, -5.03],
    [10.3, -9.03],
    [8.3, 7.97], 
];
var linesPositions = [
    [8.2, 0.97],
    [-11.7, 3.82],
    [-10.05, -5.03],
    [10.3, -8.23],
    [8.3, 7.37]
];
var virtualLinesPositions = [
    [-3.7, -11.73],
    [-1.7, 7.27]
];
var virtualColor = ['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.4)'];
var mapCenter = ["116.23","39.54"];
mapOption.bmap.center = mapCenter;
mapOption.series[0].data.push(mapCenter);
positions.forEach(function(item, index) {
    mapOption.series[3].data.push({
        itemStyle: {
            normal: {
                color: 'rgba(255,255,255,0.2)',
                borderColor: 'rgba(255,255,255,0.3)',
                borderWidth: 1,
                opacity: 0.9
            }
        },
        name: labelName[index],
        value: [(mapCenter[0] - 0) + item[0], (mapCenter[1] - 0) + item[1], labelUrl[index] + (localStorage.token ? '?token=' + localStorage.token : '')],
    });
});
linesPositions.forEach(function(item, index) {
    mapOption.series[1].data.push({
        coords: [
            [(mapCenter[0] - 0) + item[0], (mapCenter[1] - 0) + item[1]], mapCenter
        ],
        lineStyle: {
            normal: {
                color: color[index],
                opacity: 0.8
            }
        },
        opacity: 1
    });
    mapOption.series[2].data.push({
        coords: [
            [(mapCenter[0] - 0) + item[0], (mapCenter[1] - 0) + item[1]], mapCenter
        ],
        lineStyle: {
            normal: {
                color: color[index],
                opacity: 0.8
            }
        },
    });
});
virtualLinesPositions.forEach(function(item, index) {
    mapOption.series[1].data.push({
        coords: [
            [(mapCenter[0] - 0) + item[0], (mapCenter[1] - 0) + item[1]], mapCenter
        ],
        lineStyle: {
            normal: {
                type: 'dashed',
                color: virtualColor[index],
                opacity: 0.8
            }
        }
    });
    mapOption.series[2].data.push({
        lineStyle: {
            normal: {
                type: 'dashed',
                color: virtualColor[index]
            },
            opacity: 0.8
        },
        coords: [
            [(mapCenter[0] - 0) + item[0], (mapCenter[1] - 0) + item[1]], mapCenter
        ]
    });
});

myChart.setOption(mapOption);