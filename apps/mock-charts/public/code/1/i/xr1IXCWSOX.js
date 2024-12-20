// 地图数据
var chinaDataURL = "/asset/get/s/data-1517645039291-B1vgpymUz.json";

$.getJSON(chinaDataURL, function(geoJson) {
    echarts.registerMap('china', geoJson)

    option = {
        backgroundColor: '#030303',
        title: {
            text: '中国地图',
            textStyle: {
                color: '#fff'
            }
        },
        series: [{
            name: '中国地图',
            type: 'map',
            mapType: 'china', // 自定义扩展图表类型
            aspectScale: 0.75, //长宽比
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        color: '#fff'
                    },
                    areaColor: 'rgb(19, 91, 153)',
                    borderColor: 'rgb(9, 54, 95)'
                },
                emphasis: {
                    label: {
                        color: '#80c4ff'
                    },
                    areaColor: 'rgb(10, 105, 187)'
                }
            }
        }]
    }

    myChart.setOption(option);

})