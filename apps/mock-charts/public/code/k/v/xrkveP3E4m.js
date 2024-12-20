qxx = [
    [
        [113.208763, 23.314407],
        [113.273729, 23.13826], 28896
    ],
    [
        [113.288102, 23.309097],
        [113.273729, 23.13826], 35997
    ],
    [
        [113.389287, 23.280418],
        [113.273729, 23.13826], 26056
    ],
    [
        [113.498521, 23.197533],
        [113.273729, 23.13826], 29960
    ],
    [
        [113.511169, 23.131614],
        [113.273729, 23.13826], 33798
    ],
    [
        [113.450228, 23.018837],
        [113.273729, 23.13826], 28373
    ],
    [
        [113.396186, 22.996483],
        [113.273729, 23.13826], 42319
    ],
    [
        [113.295001, 22.970931],
        [113.273729, 23.13826], 29085
    ],
    [
        [113.23176, 22.987966],
        [113.273729, 23.13826], 31887
    ],
    [
        [113.083432, 23.057149],
        [113.273729, 23.13826], 36072
    ],
    [
        [113.02939, 23.21454],
        [113.273729, 23.13826], 35121
    ],

];
qxx_p = [
    [113.208763, 23.314407, 30],
    [113.288102, 23.309097, 30],
    [113.389287, 23.280418, 20],
    [113.498521, 23.197533, 30],
    [113.511169, 23.131614, 30],
    [113.450228, 23.018837, 20],
    [113.396186, 22.996483, 40],
    [113.295001, 22.970931, 30],
    [113.23176, 22.987966, 30],
    [113.083432, 23.057149, 30],
    [113.02939, 23.21454, 30],
    [113.273729, 23.13826, 80]
];

option = {
   
    bmap: {
        center: [113.273729, 23.13826],
        zoom: 14,
        roam: true,
        mapStyle: {
            styleJson: [{
                    "featureType": "district",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },

                {
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'land',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#f3f3f3'
                    }
                }, {
                    'featureType': 'railway',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'highway',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#fdfdfd'
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
                        'color': '#fefefe'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'geometry.fill',
                    'stylers': {
                        'color': '#fefefe'
                    }
                }, {
                    'featureType': 'poi',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'green',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'subway',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'manmade',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'local',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'boundary',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#fefefe'
                    }
                }, {
                    'featureType': 'building',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'label',
                    'elementType': 'labels.text.fill',
                    'stylers': {
                        'color': '#999999'
                    }
                }
            ]
        },
    },
    series: [{
            name: 'test',
            type: 'lines',
            coordinateSystem: 'bmap',
            geoIndex: 0,
            data: qxx,
            lineStyle: {
                normal: {
                    // color: '#c23531',
                    // color: 'rgb(200, 35, 45)',
                    opacity: 0.5,
                    width: 3,
                    curveness: -0.2

                }
            },

            progressiveThreshold: 500,
            progressive: 200
        },
        {
            name: 'test',
            type: 'lines',
            coordinateSystem: 'bmap',
            geoIndex: 0,
            data: qxx,
            lineStyle: {
                normal: {
                    width: 0,
                    curveness: -0.2
                }
            },
            effect: {
                constantSpeed: 100,
                show: true,
                trailLength: 0.1,
                symbolSize: 6
            },
            zlevel: 2
        },
        {
            name: 'test1',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            geoIndex: 0,
            data: qxx_p,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: 'purple',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            symbolSize: function (val) {
                return val[2] / 2;
            },

        }



    ],

};