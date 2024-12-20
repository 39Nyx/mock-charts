option = {
    visualMap: {
        max: 20,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
    },
    series: [{
        type: 'map3D',
        name: '人数',
        map: 'world',
        left: 0,
        boxWidth: 200,
        boxHeight: 1,
        instancing: false,
        silent: false,
        shading: 'realistic', // 真实感渲染
        realisticMaterial: {
            roughness: 0.6,
            textureTiling: 20
        },
        postEffect: {
            enable: true,
            bloom: {
                enable: false
            },
            SSAO: {
                enable: true,
                quality: 'medium',
                radius: 10,
                intensity: 1.2
            },
            depthOfField: {
                enable: false,
                focalRange: 5,
                fstop: 1,
                blurRadius: 6
            }
        },
        groundPlane: {
            show: true, //是否显示地面
            color: '#333',
        },
        light: {
            main: {
                intensity: 6,
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
                diffuseIntensity: 1,
                specularIntensity: 1
            }
        },
        viewControl: {
            minBeta: -360,
            maxBeta: 360
        },
        itemStyle: {
            areaColor: '#666',
        },
        data: [
            {name:'China',value:19,height:3.3},
            {name:'Brazil',value:1,height:2.3}
        ],
        
    }]
};