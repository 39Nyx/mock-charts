var geoCoordMap = {
    '君景庭': [120.147096, 30.181319],
    '滨江·金色黎明二期': [120.231085, 30.313187],
    '翠苑五区': [120.127729, 30.289521],
    '清波苑小区': [120.170261, 30.250115]
};

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push(geoCoord.concat(data[i].value));
        }
    }
    return res;
};

option = {
    title: {
        text: '杭州房价分布图',
        backgroundColor: "rgba(255,255,255,0.8)",
        left: 'center',
        textStyle: {
            color: "#2B98DC",
            fontWeight: "bold"
        }
    },
    backgroundColor: '#404a59',
    visualMap: {
        min: 0,
        max: 20,
        pieces: [{
            min: 5
        }, {
            min: 4,
            max: 5
        }, {
            min: 3,
            max: 4
        }, {
            min: 2,
            max: 3
        }, {
            max: 2
        }],
        inRange: {
            color: ['#d94e5d', '#eac736', '#274e13'].reverse()
        },
        textStyle: {
            color: '#2B98DC'
        },
        orient: 'vertical',
        bottom: '50',
        left: "10",
        backgroundColor: "rgba(255,255,255,0.8)",
    },
    bmap: {
        center: [120.19, 30.26],
        zoom: 12,
        roam: true,
        mapStyle: {
            styleJson: [{
                "featureType": "all",
                "elementType": "all",
                "stylers": {
                    "lightness": 47,
                    "saturation": -100
                }
            }, {
                "featureType": "highway",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#ffffff"
                }
            }, {
                "featureType": "poi",
                "elementType": "labels.icon",
                "stylers": {
                    "visibility": "off"
                }
            }, {
                "featureType": "road",
                "elementType": "labels",
                "stylers": {
                    "visibility": "off"
                }
            }]
        }
    },
    series: [{
        name: '均价',
        type: 'heatmap',
        coordinateSystem: 'bmap',
        data: convertData([{
            name: '君景庭',
            value: 2.99
        }, {
            name: '滨江·金色黎明二期',
            value: 3.8
        }, {
            name: '翠苑五区',
            value: 2.96
        }, {
            name: '清波苑小区',
            value: 14.18
        }])
    }]
};