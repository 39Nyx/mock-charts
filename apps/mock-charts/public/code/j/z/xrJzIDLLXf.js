$.getJSON('/asset/get/s/data-1491900403342-rkjxOfqTl.json', function(buildingsGeoJSON) {
    echarts.registerMap('buildings', buildingsGeoJSON);
    var regionsData = buildingsGeoJSON.features.map(function(feature) {
        return {
            name: feature.properties.name,
            value: Math.random(),
            height: +feature.properties.height * 10 + 10
        };
    });
    myChart.setOption({
        maptalks3D: {
            center: [13.409779, 52.520645],
            zoom: 13,
            pitch: 50,
            bearing: -10,
            // style: 'mapbox://styles/mapbox/dark-v9',
            baseLayer: {
                'urlTemplate': 'http://a.tiles.mapbox.com/v3/spatialdev.map-c9z2cyef/{z}/{x}/{y}.png',
                'subdomains': ['a', 'b', 'c', 'd']
            },
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
            silent: true,
            itemStyle: {
                borderColor: [0, 2, 10],
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