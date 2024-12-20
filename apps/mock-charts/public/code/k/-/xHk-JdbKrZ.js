
$.getJSON('/asset/get/s/data-1500217391986-S1O4lWKBb.json', function (populationData) {

    var max = -Infinity;
    var min = Infinity;
    populationData.forEach(function (item) {
        max = Math.max(Math.log(item.value), max);
        min = Math.min(Math.log(item.value), min);
    });

    var regions = populationData.map(function (item) {
        return {
            name: item.name,
            height: Math.log(item.value)/2
        };
    })

    myChart.setOption(option = {
        backgroundColor: '#cdcfd5',
        geo3D: {
            map: 'world',
            shading: 'lambert',

            lambertMaterial: {
                detailTexture: '/asset/get/s/data-1491896059428-B1QbPbq6e.jpg',
                textureTiling: 20
            },

            postEffect: {
                enable: true,
                SSAO: {
                    enable: true,
                    radius: 3,
                    quality: 'high'
                }
            },
            groundPlane: {
                show: true
            },
            light: {
                main: {
                    intensity: 1,
                    shadow: true,
                    shadowQuality: 'high',
                    alpha: 30
                },
                ambient: {
                    intensity: 0
                },
                ambientCubemap: {
                    texture: '/asset/get/s/data-1491896094618-H1DmP-5px.hdr',
                    exposure: 2,
                    diffuseIntensity: 0.3
                }
            },
            viewControl: {
                distance: 50
            },

            regionHeight: 0.5,

            regions: regions
        }
    });

});