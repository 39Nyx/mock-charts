//修改源代码BMapCoordSys.js的enableMapClick为false取消兴趣点点击事件


let centerPoint =[113.303253, 23.101441]
var data = [{
    name: '中山大学',
    value: 25
}];
var geoCoordMap = {
    '中山大学': [113.303253, 23.101441]
};

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
                effectValue: data[i].value
            });
        }
    }
    return res;
};

option = {
    tooltip: {
        backgroundColor: '#fff',
        trigger: 'item',
        formatter: params => {
            console.log(params);
            return `<div style="color:#666666;padding-bottom:5px">地点名称：<span style="color:#10AF7A">${params.data.name}</span></div>
                    <div style="color:#666666">地点记录：<span style="color:#10AF7A">${params.data.effectValue}</span></div>`
        }
    },
    bmap: {
        center:centerPoint,
        zoom: 21,
        roam: true,
    },
    series: [
        {
            name: 'pointer',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: convertData(data.sort(function(a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function(val) {
                return val[2];
            },
            encode: {
                value: 2
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                formatter: '{b}',
                position: 'right',
                show: true
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0,
                            color: '#FF5555'
                        }, {
                            offset: 0.5,
                            color: '#FF5555'
                        }, {
                            offset: 0.6,
                            color: '#FFFFFF'
                        }, {
                            offset: 0.85,
                            color: '#FFFFFF'
                        }, {
                            offset: 1,
                            color: '#FF5555'
                        }],
                        global: false // 缺省为 false
                    },
                }

            },
            zlevel: 1
        },
    ]
};
myChart.setOption(option)