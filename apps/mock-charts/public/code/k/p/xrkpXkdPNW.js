var uploadedDataURL = "/asset/get/s/data-1499065722584-BJmt6vP4W.json";
option = {
    // 加载 bmap 组件
    bmap: {
        center: [109.076395, 34.387777], // 百度地图中心经纬度
        zoom: 5, // 百度地图缩放
        roam: true, // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
        mapStyle: {
            'styleJson': [{
                'featureType': 'water',
                'elementType': 'all',
                'stylers': {
                    'color': '#031628'
                }
            }, {
                'featureType': 'land',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#000102'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#000000'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry.stroke',
                'stylers': {
                    'color': '#0b3d51'
                }
            }, {
                'featureType': 'local',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#000000'
                }
            }, {
                'featureType': 'railway',
                'elementType': 'all',
                'stylers': {
                    "visibility": "off"
                }
            }, {
                'featureType': 'subway',
                'elementType': 'all',
                'stylers': {
                    "visibility": "off"
                }
            }, {
                'featureType': 'building',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#000000'
                }
            }, {
                'featureType': 'all',
                'elementType': 'labels.text.fill',
                'stylers': {
                    'color': '#857f7f'
                }
            }, {
                'featureType': 'all',
                'elementType': 'labels.text.stroke',
                'stylers': {
                    'color': '#000000'
                }
            }, {
                'featureType': 'building',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#022338'
                }
            }, {
                'featureType': 'green',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#062032'
                }
            }, {
                'featureType': 'boundary',
                'elementType': 'all',
                'stylers': {
                    'color': '#465b6c'
                }
            }, {
                "featureType": "poi",
                "elementType": "all",
                "stylers": {
                    "visibility": "off"
                }
            }, {
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'label',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }]
        }
    },
    series: [{
        name: '弱',
        type: 'scatterGL',
        coordinateSystem: 'bmap',
        symbolSize: 1,
        large: true,
        itemStyle: {
            normal: {
                shadowBlur: 2,
                shadowColor: 'rgba(37, 140, 249, 0.8)',
                color: 'rgba(37, 140, 249, 0.8)'
            }
        },
        data: []
    }, {
        name: '中',
        type: 'scatterGL',
        coordinateSystem: 'bmap',
        symbolSize: 1,
        large: true,
        itemStyle: {
            normal: {
                shadowBlur: 2,
                shadowColor: 'rgba(14, 241, 242, 0.8)',
                color: 'rgba(14, 241, 242, 0.8)'
            }
        },
        data: []
    }, {
        name: '强',
        type: 'scatterGL',
        coordinateSystem: 'bmap',
        symbolSize: 1,
        large: true,
        itemStyle: {
            normal: {
                shadowBlur: 2,
                shadowColor: 'rgba(255, 255, 255, 0.8)',
                color: 'rgba(255, 255, 255, 0.8)'
            }
        },
        data: []
    }]
};
$.getJSON(uploadedDataURL, function(data) {
    data = data.map(function(serieData, idx) {
        var px = serieData[0] / 1000;
        var py = serieData[1] / 1000;
        var res = [
            [px, py]
        ];
        for (var i = 2; i < serieData.length; i += 2) {
            var dx = serieData[i] / 1000;
            var dy = serieData[i + 1] / 1000;
            var x = px + dx;
            var y = py + dy;
            res.push([x.toFixed(2), y.toFixed(2), 1]);

            px = x;
            py = y;
        }
        return res;
    });
    option.series[0].data = data[0];
    option.series[1].data = data[1];
    option.series[2].data = data[2];
    myChart.setOption(option);
});