var szRoad = {
    success: true,
    errorCode: 0,
    errorMsg: "成功",
    data: [


]
}

var busLines = [];
var data = szRoad.data;
var hStep = 400 / (data.length - 1);

var i = 0;
for (var x in data) {
    // i++;
    // if(i<5000)
    //     continue;
    var line = data[x];
    // if(busLines.length>500)
    //     break;
    // var pointString = line.ROAD_LINE;
    // var pointArr = pointString.split(';');
    // var lnglats = [];
    var lnglats1 = line.coords;
    // for (var j in pointArr) {
    //     lnglats.push(pointArr[j].split(','))
    // }
    console.log(lnglats1);

    busLines.push({
        coords: lnglats1,
       
        lineStyle: {
            normal: {
                color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * Math.random()*1000))
            }
        }
    })
}

option = {
    bmap: {
        center: [113.38297451894945, 23.134513401253393],
        zoom: 11,
        roam: true,
        mapStyle: {
            'styleJson': [{
                'featureType': 'water',
                'elementType': 'all',
                'stylers': {
                    'color': '#031628'
                }
            }, {
                'featureType': 'land',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#000102'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#000000'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry.stroke',
                'stylers': {
                    'color': '#0b3d51'
                }
            }, {
                'featureType': 'local',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#000000'
                }
            }, {
                'featureType': 'railway',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#000000'
                }
            }, {
                'featureType': 'railway',
                'elementType': 'geometry.stroke',
                'stylers': {
                    'color': '#08304b'
                }
            }, {
                'featureType': 'subway',
                'elementType': 'geometry',
                'stylers': {
                    'lightness': -70
                }
            }, {
                'featureType': 'building',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#000000'
                }
            }, {
                'featureType': 'all',
                'elementType': 'labels.text.fill',
                'stylers': {
                    'color': '#857f7f'
                }
            }, {
                'featureType': 'all',
                'elementType': 'labels.text.stroke',
                'stylers': {
                    'color': '#000000'
                }
            }, {
                'featureType': 'building',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#022338'
                }
            }, {
                'featureType': 'green',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#062032'
                }
            }, {
                'featureType': 'boundary',
                'elementType': 'all',
                'stylers': {
                    'color': '#465b6c'
                }
            }, {
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                    'color': '#022338'
                }
            }, {
                'featureType': 'label',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }]
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
                // color: '#c23531',
                // color: 'rgb(200, 35, 45)',
                opacity: 0.2,
                width: 1
            }
        },
        progressiveThreshold: 500,
        progressive: 200
    }, {
        type: 'lines',
        coordinateSystem: 'bmap',
        polyline: true,
        data: busLines,
        lineStyle: {
            normal: {
                width: 0
            }
        },
        effect: {
            constantSpeed: 50,
            show: true,
            trailLength: 0.5,
            symbolSize: 1.5
        },
        zlevel: 1
    }]
};