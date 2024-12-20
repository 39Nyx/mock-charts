var uploadedDataURL = "/asset/get/s/data-1511515908164-B13-wwBgM.json";

$.get(uploadedDataURL, function(data) {
    option = {
        bmap: {
            center: [125.35, 43.86],
            zoom: 12,
            roam: true,
            mapStyle: {},
        },
        series: [{
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            data: data,
            silent: true,
            lineStyle: {
                normal: {
                    opacity: 0.2,
                    width: 1
                }
            },
            progressiveThreshold: 500,
            progressive: 100
        }, {
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            data: data,
            lineStyle: {
                normal: {
                    width: 0.02
                }
            },
            effect: {
                constantSpeed: 40,
                show: true,
                trailLength: 0.02,
                symbolSize: 2
            },
            zlevel: 1
        }]
    };
})