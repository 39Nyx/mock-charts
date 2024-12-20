/**
 * 1. 在globe上，世界地图和中国地图共存
 * 2. 中国地图暂不显示右下角的南海诸岛，但南海诸岛始终是中国领土
 */
const uploadedDataURL = "/asset/get/s/data-1517645039291-B1vgpymUz.json"; // http://gallery.echartsjs.com/editor.html?c=xB1COCy7UM
const canvas = document.createElement('canvas');
const mapChart = echarts.init(canvas, null, {
    width: 4096, height: 2048
});

$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('cn', geoJson);
    mapChart.setOption({
        geo : {
            type: 'map',
            map: 'world',
            // 绘制完整尺寸的 echarts 实例
            top: 0, left: 0,
            right: 0, bottom: 0,
            boundingCoords: [[-180, 90], [180, -90]],
        },
        series: [{
            type: 'map',
            map: 'cn',
            boundingCoords: [[-180, 90], [180, -90]],
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            itemStyle: {
                areaColor: 'red'
            },
        }]
    });
    
    option = {
        globe: {
            baseTexture: mapChart,
            viewControl: {
                autoRotate: false,
                targetCoord: [111, 31]
            }
        }
    };
    
    myChart.setOption(option); // 需要手动设置一次
});
