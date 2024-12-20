echarts.registerMap('test', {
    features: [{
        type: 'Feature',
        properties: {
            name: 'test'  
        },
        geometry: {
            type: 'Polygon',
            coordinates: 
                [
                    [
                        [0, 0], [10, 0], [10, 10], [0, 10]
                    ].reverse(),
                    // Hole
                    [
                        [2, 2], [8, 2], [8, 8], [2, 8]
                    ]
                ]
        }
    }]
});

option = {
    geo: {
        map: 'test',
        itemStyle: {
            normal: {
                areaColor: '#000'
            }
        }
    }
}