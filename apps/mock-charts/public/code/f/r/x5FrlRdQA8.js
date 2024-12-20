option = {
    backgroundColor: '#fff',
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
                areaColor: '#1F40BD',
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
        symbolSize: 1,
        zoomScale: 0.002,
        blendMode: 'lighter',
        large: true,
        itemStyle: {
            color: 'red' || 'rgb(20, 15, 2)'
        },
        postEffect: {
            enable: true
        },
        silent: true,
        dimensions: ['lng', 'lat'],
        data: new Float32Array([121.47370, 31.23039, 121.47370, 31.23039,
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
    const data = new Float32Array(500);
    for (let i = 0; i < 500; i += 2) {
        const lat = (startLat + (Math.random() * (endLat - startLat))).toFixed(3);
        const lng = (startLng + (Math.random() * (endLng - startLng))).toFixed(3);
        data[i] = Number(lng);
        data[i + 1] = Number(lat);
    }
    return data;
}

setInterval(() => {
    const data = mockData();
    myChart.appendData({
        seriesIndex: 0,
        data
    });
}, 2000);