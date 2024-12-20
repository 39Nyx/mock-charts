option = {
    bmap: {
        center: [116.118, 40.225],
        zoom: 10,
        roam: true,
    },
    color: ['gold', 'aqua', 'lime'],
    backgroundColor: '#404a59',
    title: {
        text: '模拟迁徙+百度地图',
        subtext: 'data-visual.cn',
        sublink: 'http://data-visual.cn',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['北京 Top10', '上海 Top10', '广州 Top10'],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'single'
    },
    geo: {
        map: 'bmap',
        polyline: true,
        progressiveThreshold: 500,
        progressive: 200,
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
        type: 'lines',
        coordinateSystem: 'bmap',
        zlevel: 2,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                width: 1,
                opacity: 0.4,
                curveness: 0.2
            }
        },
        data: [{
            "coords": [
                [116.118, 40.225],
                [116.789, 40.481]
            ],
            "fromName": "北京",
            "toName": "上海",
            "realDisName": "上海",
            "value": "95.000000"
        }]

    }]
}