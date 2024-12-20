var allData = {
    "citys": [{
        "name": "临安",
        "value": [119.724733, 30.233873, 1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "天津",
        "value": [117.200983, 39.084158, 28],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "山东",
        "value": [117.020359, 36.66853, -6],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "辽宁",
        "value": [123.42944, 41.835441, -58],
        "symbolSize": 3,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }],
    "moveLines": [{
        "fromName": "山东",
        "toName": "临江",
        "coords": [
            [117.020359, 36.66853],
            [126.918087, 41.811979]
        ]
    }, {
        "fromName": "辽宁",
        "toName": "天津",
        "coords": [
            [123.42944, 41.835441],
            [117.200983, 39.084158]
        ]
    }]
};

option = {
    backgroundColor: '#404a59',
    title: {
        text: '朴姓人口迁徙图',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [{
        name: '线路',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 2,
        large: true,
        effect: {
            show: true,
            constantSpeed: 30,
            symbol: 'pin',
            symbolSize: 3,
            trailLength: 0,
        },
        lineStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#58B3CC'
                }, {
                    offset: 1,
                    color: '#F58158'
                }], false),
                width: 1,
                opacity: 0.2,
                curveness: 0.1
            }
        },
        data: allData.moveLines
    }]
};