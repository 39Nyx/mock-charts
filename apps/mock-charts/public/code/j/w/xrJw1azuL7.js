var tianjin = "/asset/get/s/data-1534760935441-SJJlOzOL7.json";

$.get(tianjin, function(tjJson) {
    echarts.registerMap('tianjin', tjJson);
    myChart.setOption({
        series: [{
            type: 'map',
            map: 'tianjin'
        }]
    });

var geoCoordMap = {
    '大同': [113.295259,40.09031],

    '朔州': [112.433387,39.331261],

    '太原': [112.549248,37.857014]

};

var goData = [
    [{
        name: '大同'
    }, {
        id: 1,
        name: '朔州',
        value: 75
    }],
    [{
        name: '太原'
    }, {
        id: 1,
        name: '大同',
        value: 35
    }],

    //  [{name:'蓟县'}, {name:'宁河',value:95}],
];
//值控制圆点大小
var backData = [
    [{
        name: '朔州'
    }, {
        id: 2,
        name: '太原',
        value: 75
    }],
    [{
        name: '大同'
    }, {
        id: 2,
        name: '太原',
        value: 95
    }]
];

var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
var arcAngle = function(data) {
    var j, k;
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        if (dataItem[1].id == 1) {
            j = 0.2;
            return j;
        } else if (dataItem[1].id == 2) {
            k = -0.2;
            return k;
        }
    }
}

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (dataItem[1].id == 1) {
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord,
                }, {
                    coord: toCoord,
                    value: dataItem[1].value //线条颜色

                }]);
            }
        } else if (dataItem[1].id == 2) {
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord,
                }, {
                    coord: toCoord
                }]);
            }
        }
    }
    return res;
};

var color = ['#fff', '#FF1493', '#0000FF'];
var series = [];
[
    ['1', goData],
    ['2', backData]
].forEach(function(item, i) {
    series.push({
        name: item[0],
        type: 'lines',
        zlevel: 2,
        //线特效配置
        effect: {
            show: true,
            period: 6,
            trailLength: 0.1,
            symbol: planePath, //标记类型
            symbolSize: 10
        },
        lineStyle: {
            normal: {
                width: 1,
                opacity: 0.4,
                curveness: arcAngle(item[1]), //弧线角度
                color: '#fff'
            }
        },
        data: convertData(item[1])
    }, {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        //波纹效果
        rippleEffect: {
            period: 2,
            brushType: 'stroke',
            scale: 3
        },
        label: {
            normal: {
                show: true,
                color: '#fff',
                position: 'right',
                formatter: '{b}'
            }
        },
        //终点形象
        symbol: 'circle',
        //圆点大小
        symbolSize: function(val) {
            return val[2] / 8;
        },
        itemStyle: {
            normal: {
                show: true
            }
        },
        data: item[1].map(function(dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })

    });

});

option = {
    backgroundColor: '#404a59',
    title: {
       show:false
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}"
    },
    //线颜色及飞行轨道颜色
    visualMap: {
        show: false,
        min: 0,
        max: 100,
        color: ['#fff', '#0000ff', '#000000']
    },
    //地图相关设置
    geo: {
        map: 'tianjin',
        //视角缩放比例
        zoom: 1,
        //显示文本样式
        label: {
            normal: {
                show: false,
                textStyle: {
                    color: '#fff'
                }
            },
            emphasis: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        //鼠标缩放和平移
        roam: true,
        itemStyle: {
            normal: {
                //          	color: '#ddd',
                borderColor: 'rgba(147, 235, 248, 1)',
                borderWidth: 1,
                areaColor: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(175,238,238, 0)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(	47,79,79, .2)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(128, 217, 248, 1)',
                // shadowColor: 'rgba(255, 255, 255, 1)',
                shadowOffsetX: -2,
                shadowOffsetY: 2,
                shadowBlur: 10
            },
            emphasis: {
                areaColor: '#389BB7',
                borderWidth: 0
            }
        }
    },
    series: series
};
 myChart.setOption(option);
})