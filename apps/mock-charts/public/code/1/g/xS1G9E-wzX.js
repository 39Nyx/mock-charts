

const urls=[
    '/asset/get/s/data-1530495740858-rySbXZvfX.bin',
    '/asset/get/s/data-1530495753511-SyWMmbPfQ.bin',
    '/asset/get/s/data-1530495762854-B1jz7ZDMQ.bin',
    '/asset/get/s/data-1530495770336-SJzQ7-PGQ.bin',
    '/asset/get/s/data-1530495783787-S1gNXbvz7.bin',
    '/asset/get/s/data-1530495790584-ryw4QZwMQ.bin',
]
var CHUNK_COUNT = 6;

var dataCount = 0;

function fetchData(idx) {
    if (idx >= CHUNK_COUNT) {
        return;
    }
    var dataURL = urls[idx];
    var xhr = new XMLHttpRequest();
    xhr.open('GET', dataURL, true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = function (e) {
        var rawData = new Float32Array(this.response);
        var data = new Float64Array(rawData.length - 2);
        var offsetX = rawData[0];
        var offsetY = rawData[1];
        var off = 0;
        var addedDataCount = 0;
        for (var i = 2; i < rawData.length;) {
            var count = rawData[i++];
            data[off++] = count;
            for (var k = 0; k < count; k++) {
                var x = rawData[i++] + offsetX;
                var y = rawData[i++] + offsetY;
                data[off++] = x;
                data[off++] = y;

                addedDataCount++;
            }
        }

        myChart.appendData({
            seriesIndex: 0,
            data: data
        });

        dataCount += addedDataCount;

        fetchData(idx + 1);
    }

    xhr.send();
}

option = {
    progressive: 20000,
    bmap :{
       center: [-74.04327099998152, 40.86737600240287],
        zoom: 9,
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
    },
    series: [{
        type: 'lines',

        coordinateSystem: 'bmap',

        blendMode: 'lighter',

        dimensions: ['value'],

        data: new Float64Array(),
        polyline: true,
        large: true,

        lineStyle: {
            color: 'orange',
            opacity: 0.3
        }
    }]
}

fetchData(0);