var geoCoordMap = {
    '上海': [121.4648, 31.2891],
    '尼日利亚': [-4.388361, 11.186148],
    '美国加州': [-121.910642, 41.38028],
    '澳大利亚墨尔本': [144.999416, -37.781726],
    '墨西哥': [-99.094092, 19.365711],
    '加拿大温哥华': [-123.023921, 49.311753]
};
var cityValue = {
    '上海': [10],
    '尼日利亚': [48],
    '美国加州': [28],
    '澳大利亚墨尔本': [726],
    '墨西哥': [711],
    '加拿大温哥华': [53]
}
var BJData = [
    [{name:'上海'}, {name:'加拿大温哥华',value:95}]
];
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push([{
                coord: fromCoord
            }, {
                coord: toCoord
            }]);
        }
    }
    return res;
};
var seriesData = [];

seriesData = [
    {
        name: ' Top10',
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#c70019',
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color: '#c70019',
                width: 0,
                curveness: 0.2
            }
        },
        data: convertData(BJData)
    },{
    type: 'scatter',
    coordinateSystem: 'geo',
    zlevel: 2,
    rippleEffect: { //涟漪特效
        period: 4, //动画时间，值越小速度越快
        brushType: 'stroke', //波纹绘制方式 stroke, fill
        scale: 2, //波纹圆环最大限制，值越大波纹越大
        trailLength: 0,
    },
    label: {
        normal: {
            show: true,
            position: 'right', //显示位置
            offset: [5, 0], //偏移设置
            formatter: '{b}' //圆环显示文字
        },
        emphasis: {
            show: true
        }
    },
    symbol: 'circle',
    symbolSize: 2,
    itemStyle: {
        normal: {
            show: false,
            color: '#c70019'
        }
    },
    data: [{
        name: '加拿大温哥华',
        value: [-123.023921, 49.311753, 3590]
    }]
},{
    type: 'effectScatter',
    coordinateSystem: 'geo',
    zlevel: 2,
    rippleEffect: { //涟漪特效
        period: 4, //动画时间，值越小速度越快
        brushType: 'stroke', //波纹绘制方式 stroke, fill
        scale: 2, //波纹圆环最大限制，值越大波纹越大
        trailLength: 0,
    },
    label: {
        normal: {
            show: true,
            position: 'right', //显示位置
            offset: [5, 0], //偏移设置
            formatter: '{b}' //圆环显示文字
        },
        emphasis: {
            show: true
        }
    },
    symbol: 'circle',
    symbolSize: 2,
    itemStyle: {
        normal: {
            show: false,
            color: '#c70019'
        }
    },
    data: [{
        name: '上海',
        value: [121.4648, 31.2891, 3590]
    }]
}]

option = {
    backgroundColor: '#404a59',
    title: {
        text: '世界地图',
        subtext: 'From Excel',
        left: 'center',
        top: 'top',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            var value = (params.value + '').split('.');
            value = value[1].split(',')[1];
            return params.name;
        }
    },
    visualMap: {
        show: false,
        min: 0,
        max: 150,
        inRange: {
            symbolSize: [1, 100]
        }
    },
    geo: {
        name: '世界地图',
        type: 'map',
        map: 'world',
        roam: true,
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#efefef',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#999'
            }
        }
    },
    series: seriesData
};