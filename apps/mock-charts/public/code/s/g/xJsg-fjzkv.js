$.getJSON('/asset/get/s/data-1491887968120-rJODPy9ae.json', function (data) {
    data = data
        .filter(function (dataItem) {
            return dataItem[2] > 0;
        })
        .map(function (dataItem) {
            return [dataItem[0], dataItem[1], Math.sqrt(dataItem[2])];
        });

    myChart.setOption({
        visualMap: {
            show: false,
            min: 0,
            max: 60,
            inRange: {
                symbolSize: [1.0, 10.0],
            },
        },
        globe: {
            show: false,
            baseTexture: '/asset/get/s/data-1491837049070-rJZtl7Y6x.jpg',
            heightTexture: 'data-gl/asset/world.topo.bathy.200401.jpg',
            globeOuterRadius: 100,
            // shading: 'color',
            // displacementScale: 0.05,
            // displacementQuality: 'high',
            // realisticMaterial: {
            //     // 纹理贴图相关
            //     roughness: 0.7, // 材质的粗糙度  越粗糙反光度越低
            //     metalness: 0.5, // 金属质感 0为金属  1为非金属, 在这之间设置
            // },
            environment: '/asset/get/s/data-1491837999815-H1_44Qtal.jpg',
            viewControl: {
                // autoRotate:true,
                // distance:150,
                // targetCoord: [123.38, 6.09]
            },

            light: {
                // main: {
                //     intensity: 5,
                //     shadow: false
                // },
                ambient: {
                    intensity: 2,
                },
                // ambientCubemap: {
                //     texture: 'data-gl/asset/pisa.hdr',
                //     diffuseIntensity: 5
                // }
            },
        },
        series: [
            {
                type: 'scatter3D',
                coordinateSystem: 'globe',
                // blendMode: 'lighter',
                symbolSize: 1,
                silent: true,
                itemStyle: {
                    color: '#0276f3',
                    opacity: 1,
                },
                data: data,
            },
        ],
    });
});
