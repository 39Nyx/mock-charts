var data = [
     {name: 'id1西马小区', value: 555},
     {name: 'id2京通罗斯福', value: 716},
     {name: 'id3梨园农副产品', value: 636},
     {name: 'id4万达', value: 1774},
     {name: 'id5苏荷时代', value: 666},
     {name: 'id7物资学院路', value: 558},
     {name: 'id8通胡大街', value: 181},
     {name: 'id10国际文化城', value: 237},
     
];
var geoCoordMap = {
    'id1西马小区':[116.635241,39.918117],
    'id2京通罗斯福':[116.663699,39.895508],
    'id3梨园农副产品':[116.679644,39.884616],
    'id4万达':[116.642257,39.911124],
    'id5苏荷时代':[116.650503,39.899141],
    'id7物资学院路':[116.64612,39.93287],
    'id8通胡大街':[116.689607,39.918318],
    'id10国际文化城' :[116.63923,39.899224],
   
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
  /*             
  name: data[i].name,
  */
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option = {
    title: {
        text: '密集点 - 百度地图',
        subtext: '',
        sublink: '',
        left: 'center'
    },
    tooltip : {
        trigger: 'item'
    },
    bmap: {
        center: [116.664095,39.898518],
        zoom: 14,
         roam: true
        },  
            visualMap: {
            show: false,
            top: 'top',
            min: 0,
            max: 5,
            seriesIndex: 0,
            calculable: true,
            inRange: {
                color: ['blue', 'blue', 'green', 'yellow', 'red','purple']
            }
        },

    series : [
        {
            name: 'all',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 15;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'righr',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'purple'
                }
            }
        },
        {
            name: 'alld',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 9)),
            symbolSize: function (val) {
                return val[2] / 20;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'purple',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};


