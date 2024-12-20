//var uploadedDataURL = "/asset/get/s/data-1512110660728-SJpHqdAxf.json";
//'/asset/get/s/data-1512111272237-Syen3_CeG.jpg',
var geoCoordMap = {
    //"大劲灌区": [115.982640942, 24.2704764378],
    //"引隆灌区": [116.387490466, 24.5158740538]
    
    "大劲灌区": [115.982640942, 24.2604764378],
    "引隆灌区": [116.387490466, 24.4858740538]
}
var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    console.log(res)
    return res;
};
$.get('/asset/get/s/data-1512110660728-SJpHqdAxf.json', function(meixianJson) {
    echarts.registerMap('Meixian', meixianJson);
    myChart.setOption({
            title: {
                text: '梅 县 灌 区 动 态 监 控 系 统',
                x: 'left',
                top: "10",
                textStyle: {
                    //color: '#fff0b5',
                    color: '#fff',
                    fontSize: 30
                }
            },
            series: [
                
                {
                    type: 'map3D',
                    map: 'Meixian',
                itemStyle: {
                    //areaColor: '#90c1b6',
                    opacity: 1,
                    borderWidth: 1,
                    borderColor: '#0085d0'
                },
                label: {
                    show: true,
                    textStyle: {
                        fontSize: '15',
                        //backgroundColor: '#4073a6'
                    }
                },
                environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0.6, color: '#0085d0' // 天空颜色
                }, {
                    offset: 0.4, color: '#00b3ed' // 地面颜色
                }, {
                    offset: 0.9, color: '#49c6f5' // 地面颜色
                }], false),
                emphasis: { //当鼠标放上去  地区区域是否显示名称
                    label: {
                        show: false,
                        textStyle: {
                            color: '#000',
                            fontSize: 6,
                            backgroundColor: '#e2c671'
                        }
                    }
                },
                shading: 'lambert',
                light: { //光照阴影
                    main: {
                        //color: '#fff', //光照颜色
                        intensity:1.2, //光照强度
                        //shadowQuality: 'high', //阴影亮度
                        shadow: true, //是否显示阴影
                        alpha:45,
                        beta:70

                    }
                },
                groundPlane: {
                  show: true ,
                  color:'#0085d0'
                },
                    viewControl: {
                        distance: 160,
                        alpha: 50,
                        center: [-3,-36,-2],
                        rotateSensitivity: 0,
                        zoomSensitivity: 0,
                        panSensitivity: 0
                    },
                    data: [
                        {name: "松源", value:2, itemStyle: {
                            areaColor: '#a6dfb6'
                        }},
                        {name: "桃尧", value:4, itemStyle: {
                            areaColor: '#fff0b5'
                        }},
                        {name: "隆文", value:6, itemStyle: {
                            areaColor: '#fdc4e3'
                        }},
                        {name: "松口", value:8, itemStyle: {
                            areaColor: '#a3d2ff'
                        }},
                        {name: "白渡", value:10, itemStyle: {
                            areaColor: '#f8ba63'
                        }},
                        {name: "城东", value:2, itemStyle: {
                            areaColor: '#a3d2ff'
                        }},
                        {name: "石扇", value:4, itemStyle: {
                            areaColor: '#fff0b5'
                        }},
                        {name: "丙村", value:6, itemStyle: {
                            areaColor: '#fdc4e3'
                        }},
                        {name: "雁洋", value:8, itemStyle: {
                            areaColor: '#fff0b5'
                        }},
                        {name: "大坪", value:10, itemStyle: {
                            areaColor: '#f8ba63'
                        }},
                        {name: "梅西", value:6, itemStyle: {
                            areaColor: '#a6dfb6'
                        }},
                        {name: "石坑", value:8, itemStyle: {
                            areaColor: '#fff0b5'
                        }},
                        {name: "南口", value:2, itemStyle: {
                            areaColor: '#fdc4e3'
                        }},
                        {name: "梅州高新区", value:4, itemStyle: {
                            areaColor: '#fff0b5'
                        }},
                        {name: "梅南", value:2, itemStyle: {
                            areaColor: '#f8ba63'
                        }},
                        {name: "畲江", value:10, itemStyle: {
                            areaColor: '#a6dfb6'
                        }},
                        // color: ['#a6dfb6','#d5e6f6','#fcd5e8','#fff0b5', '#f8ba63']
                        {name: "程江", value:8, itemStyle: {
                            areaColor: '#a3d2ff'
                        }},
                        {name: "水车", value:4, itemStyle: {
                            areaColor: '#fff0b5'
                        }},
                        {name: "新城办事处", value:6, itemStyle: {
                            areaColor: '#fff0b5'
                        }}
                    ]

                }
            ]
    });
});