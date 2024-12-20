var data = [{
        name: '海西州组织部',
        value: 415
    },
    {
        name: '海北州组织部',
        value: 205
    },
    {
        name: '海东州组织部',
        value: 245
    },
    {
        name: '海南州组织部',
        value: 215
    },

];
var geoCoordMap = {
    "海西州组织部": [94.092372, 37.024624],
    "海北州组织部": [99.574767, 37.787801],
    "海东州组织部": [102.242375, 36.580772],
    "海南州组织部": [99.225218, 35.880204],

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
    title: {
        text: '青海省人才分布',
        left: 'center',
        padding: [20, 20, 20, 20]
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            console.log(params.value[2])
            return params.name + ':' + params.value[2]
        }
        // formatter: '{b0}: {c0}<br />{b1}: {c1}'
    },
    bmap: {
        center: [104.114129, 37.550339],
        zoom: 6,
        roam: true,
        mapStyle: {

        }
    },
    series: [{
        name: '总人数',
        type: 'effectScatter',
        coordinateSystem: 'bmap',
        data: convertData(data.sort(function(a, b) {
            return b.value - a.value;
        }).slice(0, 6)),
        symbolSize: function(val) {
            return val[2] / 10;
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
    }]
};