var dataCount = 0;
var CHUNK_COUNT = 230;
// https://blog.openstreetmap.org/2012/04/01/bulk-gps-point-data/
function fetchData(idx) {
    if (idx >= CHUNK_COUNT) {
        return;
    }
    var dataURL = `data/asset/data/gps/gps_${idx}.bin`;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', dataURL, true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = function(e) {
        var rawData = new Int32Array(this.response);
        var data = new Float32Array(rawData.length);
        var addedDataCount = rawData.length / 2;
        for (var i = 0; i < rawData.length; i += 2) {
            data[i] = rawData[i + 1] / 1e7;
            data[i + 1] = rawData[i] / 1e7;
        }

        myChart.appendData({
            seriesIndex: 0,
            data: data
        });

        fetchData(idx + 1);
    }

    xhr.send();
}

option = {
    backgroundColor: '#000',
    title: {
        show: false,
    },
    geo: {
        map: 'china',
        roam: false,
        label: {
            emphasis: {
                show: false
            }
        },
        silent: true,
        itemStyle: {
            normal: {
                areaColor: '#1F40BD' || '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [{
        name: '弱',
        type: 'scatterGL',
        progressive: 1e6,
        coordinateSystem: 'geo',
        symbolSize: 2,
        zoomScale: 0.002,
        blendMode: 'lighter',
        large: true,
        itemStyle: {
            color: 'rgb(20, 15, 2)'
        },
        postEffect: {
            enable: true
        },
        silent: true,
        dimensions: ['lng', 'lat'],
        data: new Float32Array()||new Float32Array([121.47370, 31.23039, 121.47370, 31.23039,
            121.47370, 31.23039, 121.47370, 31.23039, 121.47370, 31.23039,
            121.47370, 31.23039, 121.47370, 31.23039, 121.47370, 31.23039,
            121.47370, 31.23039, 121.47370, 31.23039, 121.47370, 31.23039
        ])
    }]
};
const startLng = 108.1539;
const endLng = 121.5405;
const startLat = 24.1306;
const endLat = 39.9042;
function mockData() {
    const ret = [];
    for (let i = 0; i < 500; i += 2) {
        const lat = (startLat + (Math.random() * (endLat - startLat))).toFixed(3);
        const lng = (startLng + (Math.random() * (endLng - startLng))).toFixed(3);
        ret[i] = Number(lng);
        ret[i + 1] = Number(lat);
    }
    return ret;
}
setInterval(() => {
    const data = mockData();
    myChart.appendData({
        seriesIndex: 0,
        data: data
    });
    console.log('interval');
},2000);
console.log(echarts);
// fetchData(0);