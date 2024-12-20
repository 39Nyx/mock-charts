app.title = '北京公交路线 - 百度地图';

$.get('data/asset/data/lines-bus.json', function(data) {
    var busLines = [].concat.apply([], data.map(function (busLine, idx) {
        var prevPt;
        var points = [];
        for (var i = 0; i < busLine.length; i += 2) {
            var pt = [busLine[i], busLine[i + 1]];
            if (i > 0) {
                pt = [
                    prevPt[0] + pt[0],
                    prevPt[1] + pt[1]
                ];
            }
            prevPt = pt;

            points.push([pt[0] / 1e4, pt[1] / 1e4]);
        }
        return {
            coords: points
        };
    }));
    myChart.setOption(option = {
        bmap: {
            center: [116.46, 39.92],
            zoom: 10,
            roam: true,
            mapStyle: {
              styleJson: [{
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": {
                        "color": "#021019"
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#000000"
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#147a92"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#000000"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#0b3d51"
                        }
                    },
                    {
                        "featureType": "local",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#000000"
                        }
                    },
                    {
                        "featureType": "land",
                        "elementType": "all",
                        "stylers": {
                            "color": "#08304b"
                        }
                    },
                    {
                        "featureType": "railway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#000000"
                        }
                    },
                    {
                        "featureType": "railway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#08304b"
                        }
                    },
                    {
                        "featureType": "subway",
                        "elementType": "geometry",
                        "stylers": {
                            "lightness": -70
                        }
                    },
                    {
                        "featureType": "building",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#000000"
                        }
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#857f7f"
                        }
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#000000"
                        }
                    },
                    {
                        "featureType": "building",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#022338"
                        }
                    },
                    {
                        "featureType": "green",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#062032"
                        }
                    },
                    {
                        "featureType": "boundary",
                        "elementType": "all",
                        "stylers": {
                            "color": "#1e1c1c"
                        }
                    },
                    {
                        "featureType": "manmade",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#022338"
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
                        "featureType": "all",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#2da0c6",
                            "visibility": "on"
                        }
                    }
                ]
            }
        },
        series: [{
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            data: busLines,
            silent: true,
            lineStyle: {
                normal: {
                    //color: '#c23531',
                    color: 'rgb(200, 35, 45)',
                    opacity: 0.2,
                    width: 1
                }
            },
            progressiveThreshold: 500,
            progressive: 200
        }]
    });
});