$.getJSON('/asset/get/s/data-1491887968120-rJODPy9ae.json', function(data) {
    data = data.filter(function(dataItem) {
        return dataItem[2] > 0;
    }).map(function(dataItem) {
        return [dataItem[0], dataItem[1], dataItem[2]];
    });
    myChart.setOption({
        tooltip: {},
        visualMap: {
            show: false,
            max: 1000,
            calculable: true,
            realtime: false,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
            outOfRange: {
                colorAlpha: 0
            }
        },
        maptalks3D: {
            center: [104.114129, 37.550339],
            zoom: 3,
            pitch: 50,
            bearing: -10,
            boxHeight: 100,
            altitudeScale: 3e2,
            postEffect: {
                enable: true,
                SSAO: {
                    enable: true,
                    radius: 2
                }
            },
            light: {
                main: {
                    intensity: 2,
                    shadow: true,
                    shadowQuality: 'high'
                },
                ambient: {
                    intensity: 0.
                },
                ambientCubemap: {
                    texture: '/asset/get/s/data-1514714925763-B18EwVU7G.hdr',
                    exposure: 2,
                    diffuseIntensity: 0.5
                }
            }
        },
        series: [{
            type: 'bar3D',
            coordinateSystem: 'maptalks3D',
            shading: 'lambert',
            minHeight: 0.1,
            barSize: 30,
            data: data,
            silent: false
        }]
    });
    myChart.on('click', function(e) {
        console.log(e)
    })
});

window.addEventListener('resize', function() {
    myChart.resize();
});