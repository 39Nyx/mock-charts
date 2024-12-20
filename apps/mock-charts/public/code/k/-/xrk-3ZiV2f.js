$.getJSON('/asset/get/s/data-1524042235022-Sym-9YNhf.json', function(buildingsGeoJSON) {
    var builds = buildingsGeoJSON.map(function(feature) {
        return {
            "type": "Feature",
            "properties": {
                "name": Math.random().toString(),
                "height": Math.random() * 250
            },
            "geometry": feature.geometry
        }
    })
    var map = {
        "features": builds
    }
    console.log(map)
    echarts.registerMap('buildings', map);
    var regionsData = builds.map(function(feature) {
        return {
            name: feature.properties.name,
            value: Math.random() * 200,
            height: +feature.properties.height * 10 + 0.1,
            itemStyle: {
                color: '#000000',
                borderColor: 'red'
            }
        };
    });
    console.log(regionsData)
    myChart.setOption({
        tooltip: {},
        visualMap: {
            show: true,
            min: 0.4,
            max: 200,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            }
        },
        maptalks3D: {
            center: [116.32736206054689, 39.84861229610178],
            zoom: 13,
            pitch: 50,
            bearing: -10,
            'urlTemplate': 'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}',
            postEffect: {
                // enable: true,
                // SSAO: {
                //     enable: true,
                //     intensity: 1.2,
                //     radius: 10
                // },
                // screenSpaceReflection: {
                //     enable: true
                // }
            },
            light: {
                main: {
                    intensity: 1,
                    shadow: false,
                    shadowQuality: 'high'
                },
                ambient: {
                    intensity: 0.
                },
                ambientCubemap: {
                    texture: '/asset/get/s/data-1491838644249-ry33I7YTe.hdr',
                    exposure: 1,
                    diffuseIntensity: 0.5,
                    specularIntensity: 2
                }
            }
        },
        series: [{
            type: 'map3D',
            coordinateSystem: 'maptalks3D',
            map: 'buildings',
            data: regionsData,
            shading: 'realistic',
            instancing: true,
            silent: false,
            itemStyle: {
                color: '#000000',
                // borderColor: [0, 2, 10],
                borderWidth: 1
            },
            realisticMaterial: {
                metalness: 1,
                roughness: 0.4
            }
        }]
    });
});

window.addEventListener('resize', function() {
    myChart.resize();
});