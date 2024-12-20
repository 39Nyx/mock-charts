option = {
    backgroundColor: '#000',
    globe: {
        show: true,
        globeRadius: 100, //地球的半径
        environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ //环境贴图
            offset: 0,
            color: '#00aaff' // 天空颜色
        }, {
            offset: 0.7,
            color: '#998866' // 地面颜色
        }, {
            offset: 1,
            color: '#998866' // 地面颜色
        }], false),
        baseTexture: '/asset/get/s/data-1491889019097-rJQYikcpl.jpg', //地球的纹理
        displacementQuality: 'high', //地球顶点位移的质量。支持设置成 'low', 'medium', 'high', 'ultra' 
        shading: 'realistic', //'color' 只显示颜色。'lambert' 通过经典的 lambert 着色表现光照带来的明暗。'realistic' 真实感渲染，配合 light.ambientCubemap 和 postEffect 使用
        light: { //光照相关的设置。在 shading 为 'color' 的时候无效。
            main: {
                color: '#fff',
                intensity: 0.1, //主光源的强度
                shadow: true, //主光源是否投射阴影。默认关闭
                shadowQuality: 'medium', //阴影的质量。可选'low', 'medium', 'high', 'ultra'
                alpha: 0, //主光源绕 x 轴
                beta: 0, //主光源绕 y 轴
                time: 1831 //日照的时间
            },
            ambient: {
                color: '#fff',
                intensity: 0.5
            },
            ambientCubemap: {
                texture: '', // 解析 hdr 时使用的曝光值
                exposure: 1.0,
                diffuseIntensity: 1.5,
                specularIntensity: 1.5,
            },
        },
        postEffect: { //后处理特效的相关配置
            enable: true,
            bloom: {
                enable: true,
                bloomIntensity: 0.1,
            },
            depthOfField: {
                enable: true,
                focalDistance: 10,
                focalRange: 10,
                fstop: 0.8,
                blurRadius: 0.1,
            },
        },
        viewControl: { //鼠标的旋转，缩放等视角控制
            autoRotate: false,
            center: [0, 0, 0],
            targetCoord: [116.46, 39.92]
        }
    },
    series: [{
        type: 'lines3D',
        name: '人数',
        coordinateSystem: 'globe',
        globeIndex: 0,
        polyline: false, //默认为 false，只能用于绘制只有两个端点的线段
        effect: { //飞线的尾迹特效
            show: true,
            constantSpeed: 30,//固定速度
            trailWidth: 4,
            trailLength: 0.5,
            trailColor: '#fff',
            trailOpacity: 0.1,
        },
        lineStyle: { //飞线的线条样式。
            color: 'rgb(70, 50, 200)',
            width: 1,
            opacity: 0.5
        },
        distanceToGlobe: 1, //线的点距离 globe 表面的距离
        blendMode: 'lighter',//混合模式，目前支持'source-over'，'lighter'
        data: [
            [[120, 66],[182, 67]],
            [[120, 66], [212,77]],
            [[120, 66],[302, 87]],
            [[120, 66], [522,97]],
            [[120, 66], [212,107]],
            [[120, 66],[302, 117]],
            [[120, 66], [222,127]],
        ]
    }],
};