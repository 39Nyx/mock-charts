/*
交互说明：
    0. 北上广深四个城市轮播，每1分钟切换一次城市；
    1. 轨迹从产生到展现延迟不超过10秒钟；
    2. 在早8点到晚8点之间，要保证每10秒内至少一条轨迹，可以利用历史数据或掺杂假数据；
    3. 每条轨迹巡航两次后消失，每次巡航耗时1秒；
*/






















var PointColors = [{
    type: 'radial',
    x: 0.5,
    y: 0.5,
    r: 0.3,
    colorStops: [{
        offset: 0,
        color: '#FFFFFF' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgba(45, 224, 242, 1)' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}, {
    type: 'radial',
    x: 0.5,
    y: 0.5,
    r: 0.3,
    colorStops: [{
        offset: 0,
        color: '#FFFFFF' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgba(241, 249, 44, 1)' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}, {
    type: 'radial',
    x: 0.5,
    y: 0.5,
    r: 0.3,
    colorStops: [{
        offset: 0,
        color: '#FFFFFF' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgba(234, 77, 222, 1)' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}, {
    type: 'radial',
    x: 0.5,
    y: 0.5,
    r: 0.3,
    colorStops: [{
        offset: 0,
        color: '#FFFFFF' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgba(66, 242, 98, 1)' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}, ];

var TrackerColors = [{
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#FFFFFF' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#2de0f2' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}, {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#FFFFFF' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#f1f92c' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}, {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#FFFFFF' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#ea4dde' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}, {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#FFFFFF' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#42f262' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}, ];

option = {
    title: [
        {
            textAlign: 'left',
            text: '当前热门商圈',
            bottom:230,
            left:27,
            textStyle: {
                fontSize:16,
                color: '#EEEEEE',
                fontWeight:'bolder',
            },
        }, {
        text: '上海下单轨迹',
        x: 'left',
        left: 210,
        top: 10,
        padding: [15, 10, 15, 10],
        textStyle: {
            fontSize:22,
            color: '#FFFFFF',
        },
        borderColor: '#DDDDDD',
        borderWidth: 2,
        borderRadius: 4,
    }],
    tooltip: {
        trigger: 'item'
    },
    yAxis: [{
        type: 'category',
        boundaryGap: true,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            color: '#DDDDDD',
        },
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].reverse(),
    }],
    grid: [{
        show: true,
        left: 10,
        bottom: 30,
        width: 150,
        height: 200,
        containLabel: true,
        borderWidth: 0
    }],
    xAxis: [{
        name: '',
        type: 'value',
        axisTick: {
            show: false,
        },
        axisLabel: {
            formatter: '{value}'
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false,
        }
    }],
    bmap: {
        center: [121.4737, 31.2304],
        zoom: 10,
        roam: true,
        mapStyle: {
            styleJson: [{
                "featureType": "water",
                "elementType": "all",
                "stylers": {
                    "color": "#0772ab",
                    "lightness": 10
                }
            }, {
                "featureType": "land",
                "elementType": "all",
                "stylers": {
                    "color": "#004981"
                }
            }, {
                "featureType": "boundary",
                "elementType": "geometry",
                "stylers": {
                    "color": "#064f85"
                }
            }, {
                "featureType": "railway",
                "elementType": "all",
                "stylers": {
                    "visibility": "off"
                }
            }, {
                "featureType": "highway",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#004981"
                }
            }, {
                "featureType": "highway",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#006bb3",
                }
            }, {
                "featureType": "highway",
                "elementType": "labels",
                "stylers": {
                    "visibility": "off"
                }
            }, {
                "featureType": "arterial",
                "elementType": "geometry",
                "stylers": {
                    "color": "#004981"
                }
            }, {
                "featureType": "arterial",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#00508b"
                }
            }, {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": {
                    "visibility": "off"
                }
            }, {
                "featureType": "green",
                "elementType": "all",
                "stylers": {
                    "color": "#056197",
                    "visibility": "off"
                }
            }, {
                "featureType": "subway",
                "elementType": "all",
                "stylers": {
                    "visibility": "off",
                }
            }, {
                "featureType": "manmade",
                "elementType": "all",
                "stylers": {
                    "visibility": "off"
                }
            }, {
                "featureType": "local",
                "elementType": "all",
                "stylers": {
                    "visibility": "off"
                }
            }, {
                "featureType": "arterial",
                "elementType": "labels",
                "stylers": {
                    "visibility": "off"
                }
            }, {
                "featureType": "boundary",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#029fd4"
                }
            }, {
                "featureType": "building",
                "elementType": "all",
                "stylers": {
                    "color": "#1a5787",
                }
            }, {
                "featureType": "label",
                "elementType": "labels",
                "stylers": {
                    "visibility": "off"
                }
            }]
        }
    },
    series : [],
    graphic: [
        {
            type: 'image',
            id: 'logo',
            right: 20,
            bottom: 45,
            z: -10,
            bounding: 'raw',
            origin: [75, 75],
            style: {
                width:150,
                //height:50,
                image: 'http://img3.mwee.cn/oa/upload/201710/1017/59dc9340445cf.png',
            }
        },
    ]
};

series = [{
    type: 'lines',
    zlevel: 2,
    symbol: ['none', 'none'],
    coordinateSystem: 'bmap',
    symbolSize: 0,

    effect: {
        show: true,
        period: 1,
        symbol: 'circle', //ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        symbolSize: 3,
        trailLength: 0.1,
        delay: function(i) {
            return i * 1500;
        },
        loop: true,
    },
    z:1,
    lineStyle: {
        normal: {
            color: function(params) {
                return TrackerColors[Math.round(params.data.coords[1][0] * 1000) % PointColors.length];
            },
            width: 0,
            opacity: 0.5,
            curveness: 0,
            type: 'dotted',
        }
    },
    data: [{
        coords: [
            [121.585543, 31.200221],
            [121.11592, 31.14846]
        ]
    }, {
        coords: [
            [121.477135, 31.270813],
            [121.587208, 31.27021]
        ]
    }, {
        coords: [
            [121.162796, 31.28816],
            [121.489695, 31.26328813]
        ]
    }, {
        coords: [
            [121.346756, 31.157954],
            [121.4734914, 31.27279441]
        ]
    }, {
        coords: [
            [121.21849, 31.038462],
            [121.40729, 31.21219873]
        ]
    }, {
        coords: [
            [121.4600335, 31.2480633],
            [121.5198383, 31.2091026]
        ]
    }, {
        coords: [
            [121.522508, 31.224617],
            [121.5234428, 31.16326698]
        ]
    }, ],
    animationDelay: function(i) {
        return i * 1500;
    },
    animationDuration: 4000,
    animationDurationUpdate: 0,
}, {
    type: 'scatter',
    coordinateSystem: 'bmap',
    data: [
        [121.11592, 31.14846],
        [121.587208, 31.27021],
        [121.489695, 31.26328813],
        [121.4734914, 31.27279441],
        [121.40729, 31.21219873],
        [121.5198383, 31.2091026],
        [121.5234428, 31.16326698],
    ],
    itemStyle: {
        normal: {
            color: function(params) {
                return PointColors[Math.round(params.data[0] * 1000) % PointColors.length];
            },
        }
    },
    symbol: 'circle',
    symbolSize: 10,
    label: {
        normal: {
            color: '#FFFFFF',
            show: true,
            formatter: '某某门店',
            position: 'bottom',
        },
    },
    animationDelay: function(i) {
        return i * 1500 + 1000;
    },
    animationDurationUpdate: 0,
    z:0,
}, {
    type: 'bar',
    data: [{
        value: 11,
        name: '人民广场',
    }, {
        value: 15,
        name: '陆家嘴',
    }, {
        value: 13,
        name: '南京西路',
    }, {
        value: 12,
        name: '龙阳路',
    }, {
        value: 10,
        name: '静安寺',
    }, {
        value: 12,
        name: '中山公园',
    }, {
        value: 34,
        name: '五角场',
    }, {
        value: 55,
        name: '打浦桥',
    }, {
        value: 34,
        name: '金科路',
    }, {
        value: 56,
        name: '浦东机场',
    }].sort(function(a, b) {
        return a.value - b.value;
    }),
    itemStyle: {
        normal: {
            color: function(p) {
                var GradientColors = ["#8790fa","#949cde","#a2a9c2","#afb5a7","#bcc18b","#cace6f","#d7da53","#e4e638","#f2f31c","#ffff00"];
                return GradientColors[p.dataIndex];
            },
        }
    },
    label: {
        normal: {
            show:true,
            color:'#DDDDDD',
            position:'right',
            formatter:function(p){
                return p.data.name;
            },
        }
    }
},];

option.series = series;

function fadeOut(){
    series[0].data.splice(0,1);
    series[1].data.splice(0,1);
    
    var New = {series : series};

    myChart.setOption({series : series});
    
}

setInterval(fadeOut, 2000);