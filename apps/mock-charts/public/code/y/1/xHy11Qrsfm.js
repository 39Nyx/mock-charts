var geoCoordMap = {
    '通辽': [122.27, 43.6],
    '乌兰浩特': [122.05, 46.08],
    '呼和浩特': [111.68, 40.82],
    '乌海': [106.8, 39.8],
    '海拉尔': [119.75, 49.22],
    '包头': [109.88, 40.53],
    '临河': [107.42, 40.75],
    '集宁': [113.07, 41.03],
    '东胜': [109.98, 39.08],
    '阿拉善左旗': [105.07, 38.08],
    '锡林浩特': [116.12, 43.95],
    '赤峰': [118.93, 42.27]
};

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (typeof data[i].value == 'undefined') {
            data[i].value = -1;
        }
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
    backgroundColor: '#E1E1E1',
    title: {
        text: '内蒙古主要城市空气质量(AQI)预报',
        subtext: 'data from PM25.in',
        sublink: 'http://www.pm25.in',
        x: 'center',
        textStyle: {
            color: 'black'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            return params.name + ' : ' + params.value[2];
        }
    },
    toolbox: {
        show: true,
        orient: 'horizontal',
        x: '20',
        y: '20',
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true,
                name: '全区主要城市空气质量(AQI)预报'
            }
        }
    },
    visualMap: {
        type: 'piecewise',
        inverse: true,
        pieces: [{
                lte: -1,
                gte: -1,
                color: 'grey',
                label: '-',
                symbol: 'circle',
                show: false
            },
            {
                gte: 0,
                lte: 1,
                label: '优',
                color: 'green',
                symbol: 'circle'
            },
            {
                gt: 1,
                lte: 2,
                label: '良',
                color: 'yellow',
                symbol: 'circle'
            },
            {
                gt: 2,
                lte: 3,
                label: '轻度污染',
                color: 'orange',
                symbol: 'circle'
            },
            {
                gt: 3,
                lte: 4,
                label: '中度污染',
                color: 'red',
                symbol: 'circle'
            },
            {
                gt: 4,
                lte: 5,
                label: '重度污染',
                color: 'purple',
                symbol: 'circle'
            },
            {
                gt: 5,
                label: '严重污染',
                color: 'maroon',
                symbol: 'circle'
            }
        ],

        textStyle: {
            color: 'black'
        },
        x: 'left'
    },
    geo: {
        map: 'nmg'
    },
    label: {
        normal: {
            show: true,
            position: 'right',
            textStyle: {
                color: 'black'
            }
        },
        emphasis: {
            show: true
        }
    },
    series: [{
        name: '随机数据',
        //type:'map',
        //mapType: 'nmg',
        type: 'scatter',
        coordinateSystem: 'geo',
        geoCoord: geoCoordMap,
        data: convertData([{
                name: "通辽",
                value: 1.1
            },
            {
                name: "呼和浩特",
                value: 5.3
            },
            {
                name: "乌兰浩特",
                value: 4.3
            },
            {
                name: "乌海",
                value: 3.3
            },
            {
                name: "海拉尔",
                value: 2.3
            },
            {
                name: "包头",
                value: 7
            },
            {
                name: "临河",
                value: 6
            },
            {
                name: "集宁",
                value: 4
            },
            {
                name: "东胜",
                value: 3
            },
            {
                name: "阿拉善左旗",
                value: 0.1
            },
            {
                name: "锡林浩特"
            },
            {
                name: "赤峰",
                value: 0
            }
        ]),
        symbolSize: 12,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            emphasis: {
                borderColor: '#fff',
                borderWidth: 1
            }
        }
    }]
}