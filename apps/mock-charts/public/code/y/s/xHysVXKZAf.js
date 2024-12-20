var uploadedDataURL = "/asset/get/s/data-1525940145802-rJ5h1FZAG.json";

$.getJSON(uploadedDataURL, function(populationData) {

    var max = -Infinity;
    var min = Infinity;
    populationData.forEach(function(item) {
        max = Math.max(Math.log(item.value), max);
        min = Math.min(Math.log(item.value), min);
    });

    var regions = populationData.map(function(item) {
        return {
            name: item.name,
            height: (Math.log(item.value) - min) / (max - min) * 3
        };
    })

    myChart.setOption(option = {
        backgroundColor: '#cdcfd5',
        geo3D: {
            map: 'china',
            shading: 'lambert',

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
                    intensity: .5
                },

            },
            viewControl: {
                distance: 85
            },


            regionHeight: 4,

            regions: regions
        }
    });

});