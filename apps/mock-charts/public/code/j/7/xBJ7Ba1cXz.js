myChart.setOption({

    globe: {

        environment: '/asset/get/s/data-1491837999815-H1_44Qtal.jpg',

        heightTexture: '/asset/get/s/data-1491837512042-rJlLfXYax.jpg',

        displacementScale: 0.05,
        displacementQuality: 'high',

        globeOuterRadius: 7,

        baseColor: '#000',

        shading: 'realistic',
        realisticMaterial: {
            roughness: 0.2,
            metalness: 0
        },

        postEffect: {
            enable: true,
            depthOfField: {
                focalRange: 15,
                enable: true,
                focalDistance: 100
            }
        },
        temporalSuperSampling: {
            enable: true
        },
        light: {
            ambient: {
                intensity: 0
            },
            main: {
                intensity: 0.1,
                shadow: false
            },
            ambientCubemap: {
                texture: '/asset/get/s/data-1491837984109-r1u7NmY6e.hdr',
                exposure: 1,
                diffuseIntensity: 0.5,
                specularIntensity: 2
            }
        },
        viewControl: {
            autoRotate: true,
            beta: 111111,
            alpha: 20,
            distance: 200
        }
    },
    series: {
        type: 'scatter3D',
        coordinateSystem: 'globe',
        blendMode: 'lighter',
        symbolSize: 2,
        itemStyle: {
            color: 'rgb(50, 50, 150)',
            opacity: 1
        },

    }
});