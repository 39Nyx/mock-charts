
var data = [
    [116.520583, 39.772416, 1],
    [116.520583, 39.772416, 1],
    [116.520583, 39.772416, 1],
    [116.272011, 40.066031, 1],
    [116.303091, 39.891341, 1],
    [116.520583, 39.772416, 1],
    [116.304896, 39.987459, 1],
    [116.38633, 40.628111, 1],
    [116.472321, 39.927451, 1],
    [116.520583, 39.772416, 1],
    [116.418028, 39.904778, 1],
    [116.38633, 40.628111, 1],
    [116.252591, 40.235212, 1],
    [116.520583, 39.772416, 1],
    [116.418028, 39.904778, 1],
    [116.304896, 39.987459, 1],
    [116.199167, 39.891944, 1],
    [116.38633, 40.628111, 1],
    [116.520583, 39.772416, 1],
    [116.520583, 39.772416, 1],
    [116.391582, 39.901361, 1],
    [116.38633, 40.628111, 1],
    [116.520583, 39.772416, 1],
    [116.117861, 39.738641, 1],
    [116.446111, 39.885001, 1],
    [116.520583, 39.772416, 1],
    [116.520583, 39.772416, 1],
    [116.418028, 39.904778, 1],
    [116.520583, 39.772416, 1],
    [116.418028, 39.904778, 1],
    [116.140281, 39.755311, 1],
    [116.418028, 39.904778, 1],
    [116.520583, 39.772416, 1],
    [116.520583, 39.772416, 1],
    [116.520583, 39.772416, 1],
    [116.189641, 40.066211, 1],
    [116.520583, 39.772416, 1],
    [116.416971, 39.922051, 1],
    [116.418028, 39.904778, 1],
    [116.520583, 39.772416, 1],
    [116.418028, 39.904778, 1],
    [116.304896, 39.987459, 1],
    [116.520583, 39.772416, 1],
    [116.418028, 39.904778, 1],
    [116.520583, 39.772416, 1],
    [116.418028, 39.904778, 1]
];


option = {
    baseOption: {
        tooltip: {},
        timeline: {
            axisType: 'category',
            orient: 'vertical',
            autoPlay: true,
            inverse: true,
            playInterval: 1000,
            left: null,
            right: 0,
            top: 20,
            bottom: 20,
            width: 55,
            height: null,
            label: {
                normal: {
                    textStyle: {
                        color: '#999'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            symbol: 'none',
            lineStyle: {
                color: '#555'
            },
            checkpointStyle: {
                color: '#bbb',
                borderColor: '#777',
                borderWidth: 2
            },
            controlStyle: {
                showNextBtn: false,
                showPrevBtn: false,
                normal: {
                    color: '#666',
                    borderColor: '#666'
                },
                emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                }
            },
            data: []
        },
        visualMap: {

            show: true,
            top: 'top',
            min: 1,
            max: 20,
            splitNumber: 5,
            seriesIndex: 0,
            //calculable: true,

            color: ['red', 'blue', 'yellow', 'black', 'green'],

            //inRange: {
            //     color: ['blue','red','green','black','yellow']
            //}
        },
        series: [{
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: [

            ],
            pointSize: 100,
            symbolSize: 10,
            blurSize: 6
        }],

        bmap: {
            center: [116.46, 39.92],
            zoom: 11.8,
            roam: true,
            mapStyle: {
                styleJson: [{
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
                        'visibility': 'on'
                    }
                }, {
                    'featureType': 'highway',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#999999'
                    }
                }, {
                    'featureType': 'highway',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'on'
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
                        'visibility': 'on'
                    }
                }, {
                    'featureType': 'green',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'on'
                    }
                }, {
                    'featureType': 'subway',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'on'
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
                        'visibility': 'on'
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
                        'color': 'rgba(0,0,0,0)'
                    }
                }]
            }
        }
    },
    options: []
};

var array = [];
for (var n = 0; n < data.length; n++) {
    option.baseOption.timeline.data.push(n);
    array.push(data[n]);

    option.options.push({
        title: {
            show: true,
            'text': array
        },
        series: {
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: array,
            pointSize: 100,
            symbolSize: 50,
            blurSize: 6

        }
    });
    option.options.push({
        title: {
            show: true,
            'text': array + ''
        },
        series: {
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: [],
            pointSize: 10,
            symbolSize: 10,
            blurSize: 6

        }
    });
    var array = [];
}

// myChart.setOption(option);