//var uploadedDataURL = "/asset/get/s/data-1530863617806-Hy5bejnMX.json";//规划区

//var uploadedDataURL = "/asset/get/s/data-1530802138825-HJXkghjzX.json";//茂名市

var uploadedDataURL = "/asset/get/s/data-1530799116666-r1rM4jsGm.json"; //广东省


$.get(uploadedDataURL, function(geoJson) {

    myChart.hideLoading();

    echarts.registerMap('茂名市', geoJson);
   

    var allData = {
        "citys": [{
                "name": "森林公园\n2124",
                "value": [110.829658, 21.632181, 1],
                "symbolSize": 1.5,
                "itemStyle": {
                    "normal": {
                        "color": "#FF4500"
                    }
                }
            },
            {
                "name": "中国第一滩\n24982",
                "value": [111.043506, 21.470883, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#FF0000"
                    }
                }
            },
            {
                "name": "放鸡岛\n1297",
                "value": [111.19494, 21.386227, 1],
                "symbolSize": 1.5,
                "itemStyle": {
                    "normal": {
                        "color": "#FF4500"
                    }
                }
            },
            {
                "name": "浪漫海岸\n69",
                "value": [111.149082, 21.469867, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "莲头岭\n75",
                "value": [111.284348, 21.430672, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
        ],
        "moveLines": [{
                "fromName": "森林公园",
                "toName": "中国第一滩",
                "coords": [
                    [110.829658, 21.632181],
                    [111.043506, 21.470883]
                ]
            },
            {
                "fromName": "森林公园",
                "toName": "浪漫海岸",
                "coords": [
                    [110.829658, 21.632181],
                    [111.149082, 21.469867]
                ]
            },
            {
                "fromName": "森林公园",
                "toName": "放鸡岛",
                "coords": [
                    [110.829658, 21.632181],
                    [111.19494, 21.386227]
                ]
            },
            {
                "fromName": "森林公园",
                "toName": "莲头岭",
                "coords": [
                    [110.829658, 21.632181],
                    [111.284348, 21.430672]
                ]
            },
            {
                "fromName": "中国第一滩",
                "toName": "浪漫海岸",
                "coords": [
                    [111.043506, 21.470883],
                    [111.149082, 21.469867]
                ]
            },
            {
                "fromName": "中国第一滩",
                "toName": "放鸡岛",
                "coords": [
                    [111.043506, 21.470883],
                    [111.19494, 21.386227]
                ]
            },
            {
                "fromName": "中国第一滩",
                "toName": "莲头岭",
                "coords": [
                    [111.043506, 21.470883],
                    [111.284348, 21.430672]
                ]
            },
            {
                "fromName": "浪漫海岸",
                "toName": "放鸡岛",
                "coords": [
                    [111.149082, 21.469867],
                    [111.19494, 21.386227]
                ]
            },
            {
                "fromName": "浪漫海岸",
                "toName": "莲头岭",
                "coords": [
                    [111.149082, 21.469867],
                    [111.284348, 21.430672]
                ]
            },
            {
                "fromName": "放鸡岛",
                "toName": "莲头岭",
                "coords": [
                    [111.19494, 21.386227],
                    [111.284348, 21.430672]
                ]
            },
        ]
    };

    option = {
        backgroundColor: '#404a59',
        title: {
            text: '茂名市旅游景点迁徙图',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        legend: {
            show: true,
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data: ['地点', '线路'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: '茂名市',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#404a59'
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
            zlevel: 2,
            rippleEffect: {
                brushType: 'fill',
                period: 7,
                scale: 26
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    distance:15,
                    formatter: '{b}',
                    fontSize:15
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
            zlevel: 3,
            large: true,
            effect: {
                show: true,
                constantSpeed: 30,
                symbol: 'arrow', //ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                symbolSize: 6,
                trailLength: 0,
            },
            lineStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#58B3CC'
                    }, {
                        offset: 1,
                        color: '#F58158'
                    }], false),
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: allData.moveLines
        }]
    };
    myChart.setOption(option);
});
