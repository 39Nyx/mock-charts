var geoCoordMap = {
    '宝安区':[113.888821,22.560663],
    '南山区':[113.935121,22.538606],
    '福田区':[114.059878,22.527924],
    '罗湖区':[114.138551,22.555724],
    '龙华区':[114.04148,22.75794],
    '盐田区':[114.242126,22.563172],
    '坪山区':[114.35366,22.715809],
    '龙岗区':[114.252474,22.72701]
};
//模拟数据
var attackedData1 = [
    [{ name: '南山区' }, { name: '宝安区', value: 95 }],
    [{ name: '南山区' }, { name: '福田区', value: 90 }],
    [{ name: '南山区' }, { name: '罗湖区', value: 80 }],
    [{ name: '南山区' }, { name: '龙华区', value: 70 }],
    [{ name: '南山区' }, { name: '盐田区', value: 50 }],
    [{ name: '南山区' }, { name: '坪山区', value: 40 }],
    [{ name: '南山区' }, { name: '龙岗区', value: 30 }]
];
var planePath = 'path://M410.642 383.967l-119.088 42.143c-34.382 12.167-47.186-3.357-27.037-35.227l219.78-347.616c19.906-31.486 52.821-31.872 72.969 0l219.78 347.617c19.906 31.486 8.045 47.642-27.037 35.227l-119.088-42.143-89.078 559.012c-11.632 72.997-30.474 73.105-42.123 0l-89.078-559.012z';
 /**
 * lines的数据格式化
 *
 * @param    {object}  geoData     中心城市对应的地理坐标数据
 * @param    {object}  data        
 * @param    {boolean}  origin  false(default)-> 中心点作为终点;true -> 中心点作为起点;
 * @returns  {object} {origin:起点，destination:终点，coord：对应的坐标}
 *
 */
function convertLinesData(geoData, data, origin) {
    var tGeoDt = [];
    var centerName,therName;
    var i = 0, 
    len = data.length;
    if (origin) {
        for (i; i < len; i++) {
            centerName = data[i][0].name;
            otherName= data[i][1].name;
            if (centerName != otherName) {
                tGeoDt.push({
                    origin:centerName,
                    destination:otherName,
                    coords: [geoData[centerName], geoData[otherName]]//[起点，终点]
                });
                
            }
        }
    } else {
        for (i; i < len; i++) {
            centerName = data[i][0].name;
            otherName= data[i][1].name;
            if (centerName != otherName) {
                tGeoDt.push({
                    origin:otherName,
                    destination:centerName,
                    coords: [geoData[otherName], geoData[centerName]]//[起点，终点]
                });
                
            }
        }
    }
    return tGeoDt;
}

/**
 * scatter的数据格式化
 *
 * @param    {object}  geoData     中心城市对应的地理坐标数据
 * @param    {object}  data        
 * @param    {string}  centerName    中心点
 * @returns  {object}
 *
 */
function convertScatterData(geoData, data, centerName) {
    var tGeoDt = [];
    for (var i = 0, len = data.length; i < len; i++) {
        var tName = data[i][1].name
        if (centerName != tName) {
            tGeoDt.push({
                name: tName,
                value: [geoData[tName][0],geoData[tName][1],data[i][1].value]
            });
        }

    }
    tGeoDt.push({
        name: centerName,
        value: geoData[centerName],
        symbolSize: 15,
        itemStyle: {
            normal: {
                color: '#ff0000',
                borderColor: '#000'
            }
        }
    });
    return tGeoDt;
}
 
//多个被攻击点颜色设置
var color = ['#ffffff', '#ffa022', '#46bee9'];
var series = [];
[['南山区', attackedData1]].forEach(function (item, i) {
    series.push(
        //设置尾迹效果
        {
            name: item[0],
            type: 'lines',
             coordinateSystem: 'bmap',
            zlevel: 1,
            //线特效的配置
            effect: {
                show: true,
                //特效动画的时间
                period: 6,
                //特效尾迹的长度
                trailLength: 0.7,
                //特效尾迹的顔色
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    //边的曲度
                    curveness: 0.2
                }
            },
            data: convertLinesData(geoCoordMap, item[1])
        },
        //设置飞机图标
        {
            name: item[0],
            //用于带有起点和终点信息的线数据的绘制
            type: 'lines',
             coordinateSystem: 'bmap',
            zlevel: 2,
            //线两端的标记类型
            symbol: ['none', 'none'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                //特效图形的标记
                symbol: planePath,
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    color: '#00ffff',
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: convertLinesData(geoCoordMap, item[1])
        },
        {
            name: item[0],
            //带有涟漪特效动画
            type: 'effectScatter',
            //该系列使用的坐标系
            coordinateSystem: 'bmap',
            zlevel: 2,
            //涟漪特效相关配置
            rippleEffect: {
                //波纹的绘制方式
                brushType: 'stroke'
            },
            //图形上的文本标签
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return val[2] / 5; ////比例
            },
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    color: color[i]
                }
            },
            data: convertScatterData(geoCoordMap, item[1], item[0])
        }
    );
}); 
console.log(series);
var option = {
    title: {
        text: '深圳市攻击图 - 基于百度地图',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    bmap: {
        center: [114.059781,22.65369], // 中心位置坐标
        zoom: 11, // 地图缩放比例
        roam: true, // 开启用户缩放
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
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#000000'
                }
            }, {
                'featureType': 'railway',
                'elementType': 'geometry.stroke',
                'stylers': {
                    'color': '#08304b'
                }
            }, {
                'featureType': 'subway',
                'elementType': 'geometry',
                'stylers': {
                    'lightness': -70
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
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                    'color': '#022338'
                }
            }, {
                'featureType': 'label',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            },{
                    "featureType": "district",
                    "elementType": "labels.text.fill",
                    "stylers": {
                              "color": "#ffffffff"
                    }
          },
          {
                    "featureType": "district",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                              "color": "#ff0000ff"
                    }
          }]
        }
    },
    series: series
};