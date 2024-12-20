option = {
    visualMap: {
        max: 10,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
    },
    geo3D: {
        show: true,
        map: 'world',
        boxWidth: 100,
        boxHeight: 5,
        environment: '#000',//环境贴图，支持純颜色值，渐变色，全景贴图的 url
        instancing: false,//开启instancing后场景不再具备选择，hover等交互的功能
        shading: 'lambert',//color只显示颜色,lambert着色表现光照带来的明暗,realistic真实感渲染
        lambertMaterial: {//lambert 材质相关的配置项，在 shading 为'lambert'时有效。
            baseTexture: 'asset/earth.jpg',
            textureTiling: 1,
        },
        groundPlane: {//地面可以让整个组件有个“摆放”的地方show: false,
            show:true,//是否显示地面
            color: '#000',//地面颜色
        },
        label: {
            show: false,
            distance: 10,
            textStyle: {
                color: '#f00',
                borderWidth: 0,
            },
        },
        itemStyle: {
            opacity: 0.8,
        },
        light: { //光照相关的设置。在 shading 为 'color' 的时候无效。
            main: {
                color: '#fff',
                intensity: 10, //主光源的强度
                shadow: true, //主光源是否投射阴影。默认关闭
                shadowQuality: 'high', //阴影的质量。可选'low', 'medium', 'high', 'ultra'
                alpha: 0, //主光源绕 x 轴
                beta: 0, //主光源绕 y 轴
            },
            ambient: {
                color: '#fff',
                intensity: 0.5
            },
            ambientCubemap: {
                texture: '', // 解析 hdr 时使用的曝光值
                diffuseIntensity: 1.5,
                specularIntensity: 1.5,
            },
        },
        viewControl: {
            autoRotate: true,//是否开启视角绕物体的自动旋转查看
        },
        regions: [{//地图区域的设置
            name: 'China',
            regionHeight: 2,
            itemStyle: {
                areaColor: '#02Fafa',
            },
        }],
    },
    series: [{
        type: 'bar3D',
        name: '人数',
        coordinateSystem:'geo3D',
        bevelSize: 0,//柱子的倒角尺寸
        bevelSmoothness: 0,//柱子倒角的光滑/圆润度，数值越大越光滑/圆润。
        maxHeight: 10,
        itemStyle: {
            opacity: 0.5
        },
        shading:'realistic',//'color'只显示颜色,'lambert' 着色表现光照带来的明暗,'realistic' 真实感渲染
        data: [[55.54,20.45,2],[-130,10,2],[-140,20,4],[50,3,5],[30,40,6],[-70,5,7],[80,6,8]],
    }]
};