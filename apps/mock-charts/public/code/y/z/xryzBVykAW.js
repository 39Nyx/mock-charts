var geoCoordMap = {
    '上海': [121.48, 31.22],
    '杭州': [120.19, 30.26],
    '温州': [120.65, 28.01]
};

var points = [
    [{ cityName: '上海', runTime: '120', unitCount: '196', onlineRate: '38%', errors: '432', preErrors: '85' }],
    [{ cityName: '杭州', runTime: '537', unitCount: '234', onlineRate: '42%', errors: '624', preErrors: '127' }],
    [{ cityName: '温州', runTime: '50', unitCount: '120', onlineRate: '32%', errors: '252', preErrors: '60' }]
];

var series = [];

[
    ["", points]
].forEach(function(v, i) {
    series.push({
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 3,
        rippleEffect: {
            period: 4,
            brushType: 'stroke',
            scale: 4
        },
        symbol: 'circle',
        symbolSize: function(val) {
            return 8 + val[1] / 10;
        },
        itemStyle: {
            normal: {
                show: false,
                color: 'rgba(0,255,0,1)'
            }
        },
        data: v[1].map(function(dataItem) {
            return {
                name: dataItem[0].cityName,
                value: geoCoordMap[dataItem[0].cityName],
                runTime: dataItem[0].runTime,
                unitCount: dataItem[0].unitCount,
                onlineRate: dataItem[0].onlineRate,
                errors: dataItem[0].errors,
                preErrors: dataItem[0].preErrors,
                proportion: dataItem[0].proportion,
            };
        }),
    });
});

console.log(series)

option = {
    tooltip: {
        trigger: 'item'
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        layoutCenter: ['50%', '53%'],
        layoutSize: "108%",
        itemStyle: {
            normal: {
                color: 'rgba(51, 69, 89, .5)',
                borderColor: 'rgba(100,149,237,1)',
                // areaColor: 'transparent'
            },
            emphasis: {
                color: 'rgba(37, 43, 61, .5)'
            }
        }
    },
    series: series,
};