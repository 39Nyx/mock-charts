// var uploadedDataURL = "/asset/get/s/data-1604047514835-mdbmux2ib.json";

var uploadedDataURL = "/asset/get/s/data-1579080454733-kYPAgQMH.json";

app.title = '湖南省高速公路交通流分布 - 线特效';

$.getJSON(uploadedDataURL, function(data) {
    var hStep = 300 / (data.length - 1);
    var highway_flows = [].concat.apply([], data.map(function(flow, idx) {
        var prevPt; 
        var points = [];
        for (var i = 0; i < flow.length; i += 2) {
            var pt = [flow[i], flow[i + 1]]; //取出第一个数组中的元素
            if (i > 0) {
                pt = [
                    pt[0], //循环，得到每一个点的经度
                    pt[1] //得到点得到纬度
                ];
            }
            prevPt = pt; //将得到的新点赋值给prevPt

            points.push([pt[0], pt[1]]); //除以10000得到实际经纬度坐标,//将得到的经纬度入栈
        }
        return {
            coords: points,
            lineStyle: {
                normal: {
                    color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * idx)) //给每条线赋予颜色
                }
            }
        };
    }));
    myChart.setOption(option = { //地图设置
        bmap: {
            center: [111.8, 27.7],
            zoom: 8,
            roam: true,
            mapStyle: {
                'styleJson': [{
                        'featureType': 'water',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#031628'
                        }
                    },
                    {
                        'featureType': 'land',
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#000102'
                        }
                    },
                    {
                        'featureType': 'rialway',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    },
                    {
                        'featureType': 'arterial',
                        'elementType': 'geometry.fill',
                        'stylers': {
                            'color': '#000000'
                        }
                    },
                    {
                        'featureType': 'arterial',
                        'elementType': 'geometry.stroke',
                        'stylers': {
                            'color': '#0b3d51'
                        }
                    },
                    {
                        'featureType': 'local',
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#000000'
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            'visibility': 'off'
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "geometry",
                        "stylers": {
                            'visibility': 'off'
                        }
                    },
                    {
                        'featureType': 'railway',
                        'elementType': 'geometry',
                        'stylers': {
                            'visibility': 'off'
                        }
                    },
                    {
                        'featureType': 'subway',
                        'elementType': 'geometry',
                        'stylers': {
                            'visibility': 'off'
                        }
                    },
                    {
                        'featureType': 'building',
                        'elementType': 'geometry.fill',
                        'stylers': {
                            'color': '#000000'
                        }
                    },
                    {
                        'featureType': 'all',
                        'elementType': 'labels.text.fill',
                        'stylers': {
                            'color': '#857f7f'
                        }
                    },
                    {
                        'featureType': 'all',
                        'elementType': 'labels.text.stroke',
                        'stylers': {
                            'color': '#000000'
                        }
                    },
                    {
                        'featureType': 'building',
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#022338'
                        }
                    },
                    {
                        'featureType': 'green',
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#062032'
                        }
                    },
                    {
                        'featureType': 'boundary',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#465b6c',
                        }
                    },
                    {
                        'featureType': 'manmade',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#022338'
                        }
                    },
                    {
                        'featureType': 'label',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "provincialway",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    }
                ]
            }
        },
        series: [{ //地图线动画
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            data: highway_flows,
            silent: true,

            lineStyle: {
                normal: {
                    // color: '#c23531',
                    // color: 'rgb(200, 35, 45)',
                    opacity: 0.7, //轨迹线条透明度
                    width: 0.1 //轨迹线条宽度
                }
            },
            progressiveThreshold: 500,
            progressive: 200
        }, {
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            data: highway_flows,
            lineStyle: {
                normal: {
                    width: 0
                }
            },
            effect: {
                constantSpeed: 20,
                show: true,
                trailLength: 0.1,
                symbolSize: 2 //图标大小
            },
            zlevel: 1
        }]
    });
});