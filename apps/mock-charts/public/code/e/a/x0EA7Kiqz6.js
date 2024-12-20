var uploadedDataURL = "/mock-charts/map/s/SkScnUTCW.json";

$.get(uploadedDataURL, function(geoJson) {
    console.log(geoJson);

    myChart.hideLoading();

    echarts.registerMap('江西', geoJson);

    var allData = {
        "citys": [{
                "name": "赣州市",
                "value": [114.940278, 25.85097],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F2F2F2"
                    }
                }
            },
            {
                "name": "吉安市",
                "value": [114.986373, 27.111699],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F2F2F2"
                    }
                }
            },
            {
                "name": "九江市",
                "value": [115.502811, 29.400034],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F2F2F2"
                    }
                }
            },
            {
                "name": "抚州市",
                "value": [116.358351, 27.48385],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F2F2F2"
                    }
                }
            },
            {
                "name": "宜春市",
                "value": [114.891136, 28.3446596717],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F2F2F2"
                    }
                }
            },
            {
                "name": "南昌市",
                "value": [115.992151, 28.676493],
                "symbolSize": 5,
                "itemStyle": {
                    "normal": {
                        "color": "#F2F2F2"
                    }
                }
            },
            {
                "name": "景德镇市",
                "value": [117.214664, 29.29256],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F2F2F2"
                    }
                }
            },
            {
                "name": "萍乡市",
                "value": [113.852186, 27.622946],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F2F2F2"
                    }
                }
            },
            {
                "name": "鹰潭市",
                "value": [117.033838, 28.238638],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F2F2F2"
                    }
                }
            },
            {
                "name": "新余市",
                "value": [114.930835, 27.810834],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F2F2F2"
                    }
                }
            },
            {
                "name": "上饶市",
                "value": [117.671185, 28.44442],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F2F2F2"
                    }
                }
            }

        ],

        "moveLines": [{
                "fromName": "南昌市",
                "toName": "赣州市",
                "coords": [
                    [115.992151, 28.676493],
                    [114.940278, 25.85097]
                ]
            },
            {
                "fromName": "南昌市",
                "toName": "吉安市",
                "coords": [
                    [115.992151, 28.676493],
                    [114.986373, 27.111699]
                ]
            },
            {
                "fromName": "南昌市",
                "toName": "九江市",
                "coords": [
                    [115.992151, 28.676493],
                    [115.502811, 29.400034]
                ]
            },
            {
                "fromName": "南昌市",
                "toName": "抚州市",
                "coords": [
                    [115.992151, 28.676493],
                    [116.358351, 27.48385]
                ]
            },
            {
                "fromName": "南昌市",
                "toName": "宜春市",
                "coords": [
                    [115.992151, 28.676493],
                    [114.891136, 28.3446596717]
                ]
            },
            {
                "fromName": "南昌市",
                "toName": "景德镇市",
                "coords": [
                    [115.992151, 28.676493],
                    [117.214664, 29.29256]
                ]
            },
            {
                "fromName": "南昌市",
                "toName": "萍乡市",
                "coords": [
                    [115.992151, 28.676493],
                    [113.852186, 27.622946]
                ]
            },
            {
                "fromName": "南昌市",
                "toName": "鹰潭市",
                "coords": [
                    [115.992151, 28.676493],
                    [117.033838, 28.238638]
                ]
            },
            {
                "fromName": "南昌市",
                "toName": "新余市",
                "coords": [
                    [115.992151, 28.676493],
                    [114.930835, 27.810834]
                ]
            },
            {
                "fromName": "南昌市",
                "toName": "上饶市",
                "coords": [
                    [115.992151, 28.676493],
                    [117.971185, 28.44442]
                ]
            },
        ]
    };
    option = {
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
            backgroundColor:'rgba(128, 128, 128, 0.1)', //rgba设置透明度0.1
        title: {
            text: '',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        legend: {
            show: false,
            orient: 'vertical',
            top: 'auto',
            left: 'right',
            data: ['地点', '线路'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: '江西',
            label: {
                //normal:{
                //show: true,
                //textStyle:{
                //color:'#fff',
                //}
                //},
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff',
                    }
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#0D74DD',
                    borderColor: '#F2F2F2'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: [{
            name: '地点',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 1,
            rippleEffect: {
                brushType: 'stroke',
                period: 7,
                scale: 26
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                    textStyle:{
                        fontSize:17
                    }
                },
                emphasis: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: 2,
            showEffectOn: 'render',
            itemStyle: {
                normal: {
                    color: '#46bee9'
                }
            },
            data: allData.citys
        }, {
            name: '线路',
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 2,
            large: true,
            effect: {
                show: true,
                constantSpeed: 50,
                symbol: 'pin', //ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                symbolSize: 10,
                trailLength: 0,
            },
            lineStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'RED'
                    }, {
                        offset: 1,
                        color: 'RED'
                    }], false),
                    width: 2,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: allData.moveLines
        }]
    };
    myChart.setOption(option);
});
