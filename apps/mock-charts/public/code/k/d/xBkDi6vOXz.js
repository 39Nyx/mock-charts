var uploadedDataURL = "/asset/get/s/data-1514859094332-r1C8cvumf.json";

$.getJSON(uploadedDataURL, function(linedata) {

    myChart.hideLoading();
    myChart.setOption({

        visualMap: {
            max: linedata[1]
        },
        series: [{
            data: linedata[0]
        }]
    });
});

myChart.setOption(option = {
    title: {
        x: 'right',
        text: "公交站点可视化",
        subtext: '',
        textStyle: {
            color: '#fff',
            fontSize: 30
        }
    },
    tooltip: {
        trigger: 'item',
        transitionDuration: 0,
        formatter: function(params) {
            return params.name + ' : ' + params.value[2] + '人次';
        }
    },
    animation: true,
    bmap: {
        center: [117.978965, 28.42743],
        zoom: 14,
        roam: true,
        mapStyle: {
            'styleJson': [{
                "featureType": "water",
                "elementType": "all",
                "stylers": {
                    "color": "#021019"
                }
            }, {
                "featureType": "highway",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#000000"
                }
            }, {
                "featureType": "highway",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#147a92"
                }
            }, {
                "featureType": "arterial",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#000000"
                }
            }, {
                "featureType": "arterial",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#0b3d51"
                }
            }, {
                "featureType": "local",
                "elementType": "geometry",
                "stylers": {
                    "color": "#000000"
                }
            }, {
                "featureType": "land",
                "elementType": "all",
                "stylers": {
                    "color": "#08304b"
                }
            }, {
                "featureType": "railway",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#000000"
                }
            }, {
                "featureType": "railway",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#08304b"
                }
            }, {
                "featureType": "subway",
                "elementType": "geometry",
                "stylers": {
                    "lightness": -70
                }
            }, {
                "featureType": "building",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#000000"
                }
            }, {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#857f7f"
                }
            }, {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#000000"
                }
            }, {
                "featureType": "building",
                "elementType": "geometry",
                "stylers": {
                    "color": "#022338"
                }
            }, {
                "featureType": "green",
                "elementType": "geometry",
                "stylers": {
                    "color": "#062032"
                }
            }, {
                "featureType": "boundary",
                "elementType": "all",
                "stylers": {
                    "color": "#1e1c1c"
                }
            }, {
                "featureType": "manmade",
                "elementType": "all",
                "stylers": {
                    "color": "#022338"
                }
            }]
        }
    },
    visualMap: {
        //type: 'piecewise',
        top: '5%',
        splitNumber: 5,
        min: 100,
        max: 30000,
        seriesIndex: 0,
        calculable: true,
        inRange: {
            color: ['green', '#eac736', '#d94e5d']
        },
        textStyle: {
            color: '#fff',
            formatter: 'aaaa{value}bbbb{value2}' // 范围标签显示内容。
        }

    },
    series: [{
        type: 'scatter',
        coordinateSystem: 'bmap',
        symbolSize: 12,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            emphasis: {
                borderColor: '#fff',
                borderWidth: 3
            }
        }
    }]
});
if (!app.inNode) {
    // 添加百度地图插件
    var bmap = myChart.getModel().getComponent('bmap').getBMap();
    bmap.addControl(new BMap.MapTypeControl());
}


if (option && typeof option === "object") {
    myChart.setOption(option, true);
}