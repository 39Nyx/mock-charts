var data = [
    {name: '廊坊', value: 193},
    {name: '大庆', value: 279},
    {name: '校门', value: 139},
    {name: '图书馆', value: 124},
    {name: '食堂1', value: 125},
    {name: '食堂2', value: 129},
     {name: '小卖部', value: 314}
];

var geoCoordMap = {
    '廊坊':[116.7,39.53],
    '大庆':[125.03,46.58],
    '校门':[108.622163,21.89902],
    '图书馆':[1108.62217,21.903713],
    '食堂1':[108.623985,21.903479],
    '食堂2':[108.626084,21.901846],
    '小卖部':[108.626136,21.907171]
};


var convertData = function (data) {
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

function renderItem(params, api) {
    var coords = [
        [116.7,39.53],
        [103.73,36.03],
        [112.91,27.87],
        [120.65,28.01],
        [119.57,39.95]
    ];
    var points = [];
    for (var i = 0; i < coords.length; i++) {
        points.push(api.coord(coords[i]));
    }
    var color = api.visual('color');

    return {
        type: 'polygon',
        shape: {
            points: echarts.graphic.clipPointsByRect(points, {
                x: params.coordSys.x,
                y: params.coordSys.y,
                width: params.coordSys.width,
                height: params.coordSys.height
            })
        },
        style: api.style({
            fill: color,
            stroke: echarts.color.lift(color)
        })
    };
}

option = {
    // backgroundColor: '#404a59',
    title: {
        text: '北部湾大学轨迹分布图',
    },
    tooltip : {
        formatter: function(params) {
            var str = params.data['value'];
            return params.name+":"+"来过"+str[2]+"人";
        },
    },
    bmap: {
        center: [108.623609,21.903551],
        zoom: 17,
        roam: true,
    },
    series : [
        {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 10;
            },
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
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        }
    ]
};