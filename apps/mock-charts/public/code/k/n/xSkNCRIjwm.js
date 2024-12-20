var stationData = [	
{name:'01',value:27326},
{name:'04',value:7472},
{name:'06',value:18422},
{name:'11',value:4504},
{name:'19',value:4884},
{name:'63',value:12735},
{name:'65',value:7757},
{name:'71',value:9966},
{name:'72',value:5281},
{name:'17',value:3167},
{name:'08',value:984},
{name:'15',value:2839},
{name:'20',value:2623},
{name:'21',value:2649},
{name:'40',value:3788},
{name:'48',value:3564},
{name:'39',value:3080},
{name:'53',value:2787},


 ];

var geoCoordMap = {


    
'01':[91.1379756348,29.6556957902],
'04':[91.1412807337,29.661397959],
'06':[91.1239333667,29.6607435916],
'11':[91.1358556584,29.6671428349],
'19':[91.1086829272,29.6585810926],
'63':[91.1448057927,29.6466139631],
'65':[91.116608,29.649384],
'71':[91.0788329215,29.6312077685],
'72':[91.0939520985,29.6199853429],
'17':[91.1578848102,29.6562696505],
'08':[91.1185954843,29.6644696158],
'15':[91.1559203982,29.6614522249],
'20':[91.1122866814,29.6632291326],
'21':[91.1128774427,29.6677190021],
'40':[91.1455375397,29.6749487621],
'48':[91.1714663593,29.6551073807],
'39':[91.136101152,29.6751735317],
'53':[91.180434697,29.6458998517],

    
};

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
    return res;
};

option = {
    visualMap: { //图例值控制
        min: 0,
        max: 10000,
        calculable: true,
        color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
        textStyle: {
            color: '#fff'
        }
    },
    
    bmap: {
        center: [91.125038, 29.660346],
        zoom: 13.8,
        roam: true,
        mapStyle: {
            styleJson: [{
                    "featureType": "land",
                    "elementType": "all",
                    "stylers": {
                        "color": "#0f0f10ff"
                    }
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": {
                        "color": "#112542ff"
                    }
                },
                {
                    "featureType": "green",
                    "elementType": "all",
                    "stylers": {
                        "color": "#0f262dff"
                    }
                },
                {
                    "featureType": "highway",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "railway",
                    "elementType": "all",
                    "stylers": {
                        "color": "#259699ff",
                        "weight": "1.7",
                        "visibility": "on"
                    }
                },
                {
                    "featureType": "highway",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "arterial",
                    "elementType": "all",
                    "stylers": {
                        "color": "#333333ff"
                    }
                },
                {
                    "featureType": "manmade",
                    "elementType": "all",
                    "stylers": {
                        "color": "#092728ff"
                    }
                },
                {
                    "featureType": "subway",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "local",
                    "elementType": "all",
                    "stylers": {
                        "color": "#484a4cff"
                    }
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                        "color": "#313131"
                    }
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#8b8787"
                    }
                }
            ],
        },
    },
 
    series: [{
            type: 'lines',
            mapType: 'china',
            coordinateSystem: 'bmap',
            zlevel: 1,
            data: [
{coords:[geoCoordMap['01'], geoCoordMap['04']]},
{coords:[geoCoordMap['01'], geoCoordMap['06']]},
{coords:[geoCoordMap['01'], geoCoordMap['11']]},
{coords:[geoCoordMap['01'], geoCoordMap['19']]},
{coords:[geoCoordMap['01'], geoCoordMap['63']]},
{coords:[geoCoordMap['01'], geoCoordMap['65']]},
{coords:[geoCoordMap['01'], geoCoordMap['71']]},
{coords:[geoCoordMap['04'], geoCoordMap['01']]},
{coords:[geoCoordMap['06'], geoCoordMap['01']]},
{coords:[geoCoordMap['06'], geoCoordMap['04']]},
{coords:[geoCoordMap['06'], geoCoordMap['11']]},
{coords:[geoCoordMap['06'], geoCoordMap['19']]},
{coords:[geoCoordMap['06'], geoCoordMap['63']]},
{coords:[geoCoordMap['06'], geoCoordMap['65']]},
{coords:[geoCoordMap['06'], geoCoordMap['71']]},
{coords:[geoCoordMap['11'], geoCoordMap['01']]},
{coords:[geoCoordMap['11'], geoCoordMap['06']]},
{coords:[geoCoordMap['19'], geoCoordMap['01']]},
{coords:[geoCoordMap['63'], geoCoordMap['01']]},
{coords:[geoCoordMap['63'], geoCoordMap['06']]},
{coords:[geoCoordMap['63'], geoCoordMap['65']]},
{coords:[geoCoordMap['65'], geoCoordMap['01']]},
{coords:[geoCoordMap['65'], geoCoordMap['06']]},
{coords:[geoCoordMap['65'], geoCoordMap['63']]},
{coords:[geoCoordMap['65'], geoCoordMap['71']]},
{coords:[geoCoordMap['71'], geoCoordMap['01']]},
{coords:[geoCoordMap['71'], geoCoordMap['06']]},
{coords:[geoCoordMap['71'], geoCoordMap['65']]},
{coords:[geoCoordMap['71'], geoCoordMap['72']]},
{coords:[geoCoordMap['72'], geoCoordMap['71']]},
{coords:[geoCoordMap['01'], geoCoordMap['08']]},
{coords:[geoCoordMap['01'], geoCoordMap['15']]},
{coords:[geoCoordMap['01'], geoCoordMap['17']]},
{coords:[geoCoordMap['01'], geoCoordMap['20']]},
{coords:[geoCoordMap['01'], geoCoordMap['21']]},
{coords:[geoCoordMap['01'], geoCoordMap['40']]},
{coords:[geoCoordMap['01'], geoCoordMap['48']]},
{coords:[geoCoordMap['06'], geoCoordMap['39']]},
{coords:[geoCoordMap['17'], geoCoordMap['01']]},
{coords:[geoCoordMap['40'], geoCoordMap['01']]},
{coords:[geoCoordMap['48'], geoCoordMap['01']]},
{coords:[geoCoordMap['53'], geoCoordMap['01']]},
{coords:[geoCoordMap['01'], geoCoordMap['53']]},
{coords:[geoCoordMap['15'], geoCoordMap['01']]},
 ],

            effect: {
                show: true,
                period: 3,
                trailLength: 0,
                color: 'rgba(255,255,255,0.5)',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    width: '1',
                    color: 'rgba(165,248,245,1)',
                    curveness: 0.2,
                }
            }
        }, {
            type: 'effectScatter',
            mapType: 'china',
            coordinateSystem: 'bmap',
            zlevel: 1,
            symbolSize: function (val) {
            return val[2] / 2000;
        },

            label: {
                normal: {
                    show: false,
                    position: 'right',
                    formatter: ' {b}'
                }
            },
            rippleEffect: {
                period: 5,
                scale: 6,
                brushType: 'stroke',
            },
            itemStyle: {
                normal: {
                    color: 'rgba(62,172,229,0.5)',
                }
            },
            data: convertData(stationData),
        },
        //白色effect点开始
    ]
    
};
//白色effect点结束

myChart.setOption(option);

