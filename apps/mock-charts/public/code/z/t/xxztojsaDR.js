// ！！！！！！！！百度地图的插件在脚本中！！！！！！！！

var geoCoordMap = {
    长芦街道: [118.791113, 32.247213],
    葛塘街道: [118.755419, 32.248077],
    大厂街道: [118.751156, 32.222373],
    盘城街道: [118.722429, 32.215786],
    沿江街道: [118.725344, 32.172766],
    泰山街道: [118.724802, 32.142327],
    顶山街道: [118.691899, 32.116769],
    江浦街道: [118.644439, 32.066636],
};
var data = [
    {
        name: '长芦街道',
        value: 3,
    },
    {
        name: '葛塘街道',
        value: 6,
    },
    {
        name: '大厂街道',
        value: 20,
    },
    {
        name: '盘城街道',
        value: 3,
    },
    {
        name: '沿江街道',
        value: 12,
    },
    {
        name: '泰山街道',
        value: 19,
    },
    {
        name: '顶山街道',
        value: 7,
    },
    {
        name: '江浦街道',
        value: 2,
    },
];
var max = 1000,
    min = 0; // todo
var maxSize4Pin = 100,
    minSize4Pin = 0;

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
            });
        }
    }
    return res;
};

option = {
    animation: false,
    bmap: {
        center: [118.761656, 32.142491],
        zoom: 12,
        roam: true,
        zlevel: 1,
    },
    tooltip: {
        trigger: 'axis',
    },
    series: [
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: convertData(data),
            symbolSize: 30,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke',
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true,
                    areaColor: '#065279',
                    fontFamily: 'TRENDS',
                    fontSize: 16,
                    padding: [0, 0, 0, 4],
                },
            },
            itemStyle: {
                normal: {
                    color: '#d55150',
                    shadowBlur: 10,
                    shadowColor: '#d55150',
                },
            },
            zlevel: 2,
        },
    ],
};
myChart.setOption(option);

var counts = option.series[0].data.length; //获取所有闪动圆环数量
var dataIndex = 0;
//让圆环的提示框自动触发轮播显示
function autoHoverTip() {
    for (var i = 0; i < counts; i++) {
        (function (i) {
            ts = setTimeout(function () {
                myChart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 1,
                    dataIndex: i,
                });
            }, 5000 * i);
        })(i);
    }
}

setTimeout(function () {
    autoHoverTip();
    tv = setInterval(autoHoverTip, counts * 1000);
}, 500);
