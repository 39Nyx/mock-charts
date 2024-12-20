var geoCoordMap = [{
    name: '华润水泥（南宁）有限公司',
    value: [108.094042, 23.035801],
    product: '矿粉',
    sign:'起点'
}, {
    name: '华润水泥（上思）有限公司',
    value: [107.942726, 22.170369],
    product: '粉煤灰',
    sign:'终点'
}, {
    name: '华润水泥（田阳）有限公司',
    value: [106.769572, 23.757743],
    product: '矿粉',
    sign:'起点'
},{
    name: '贵港台泥水泥',
    value: [109.3646, 23.141027],
    product: '商品混凝土',
    sign:'中转'
}, {
    name: '武宣二塘码头',
    value: [109.659271, 23.694418],
    product: '矿粉',
    sign:'起点'
}, {
    name: '南宁港开发投资有限公司牛湾作业区',
    value: [108.537386, 22.788356],
    product: '矿粉',
    sign:'终点'
},{
    name: '贵港台泥水泥3',
    value: [107.3646, 23.141027],
    product: '水泥',
    sign:'起点'
}, {
    name: '武宣二塘码头3',
    value: [107.659271, 23.694418],
    product: '矿粉',
    sign:'中转'
}, {
    name: '南宁港开发投资有限公司牛湾作业区3',
    value: [107.537386, 22.788356],
    product: '铁粉',
    sign:'终点'
}];
var convertData = function (data,m) {
    var res = [];
    var j =0;
    for (var i = 0; i < data.length; i++) {
        if(data[i].sign==m){
            res[j]=data[i];
            j++;
        }

    }
    return res;
};
option = {
    title: {
        text: '起点--终点',
        subtext: 'aaaaaa',
        sublink: 'bbbbbb',
        left: 'center'
    },
    tooltip: { //鼠标悬浮交互时的信息提示 
        trigger: 'item',
       enterable: true,
    },
    legend: { //图例
        orient: 'vertical', //水平。横铺
        left: 'left', //位置
        data: ['起点', '终点', '中转'] //数据
    },
    bmap: {
        center: [108.876474, 23.826394],
        zoom: 8, //显示倍数
        roam: true, //是否可移动
        mapStyle: {
            styleJson: [{
                'featureType': 'water',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'land',
                'elementType': 'all',
                'stylers': {
                    'color': '#f3f3f3'
                }
            }, {
                'featureType': 'railway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'poi',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'green',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'subway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'local',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'boundary',
                'elementType': 'all',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'building',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'label',
                'elementType': 'labels.text.fill',
                'stylers': {
                    'color': '#999999'
                }
            }]
        }
    },
    series: [ //驱动图表生成的数据内容数组
        {
            name: '起点',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(geoCoordMap,'起点'), 
            symbolSize: 10,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: { //图形样式，可设置图表内图形的默认样式和强调样式
                normal: {
                    color: 'red'
                },
            }
        }, {
            name: '终点',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(geoCoordMap,'终点'), 
            symbolSize: 10,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: { //图形样式，可设置图表内图形的默认样式和强调样式
                normal: {
                    color: 'blue'
                },
            }
        }, {
            name: '中转',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(geoCoordMap,'中转'),  
            symbolSize: 10,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: { //图形样式，可设置图表内图形的默认样式和强调样式
                normal: {
                    color: 'green'
                },
            }
        }
    ]
};