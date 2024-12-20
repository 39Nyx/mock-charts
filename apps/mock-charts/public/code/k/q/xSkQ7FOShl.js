var dataBJ = [
    [72, 99, 82],
    [92, 118, 104],
    [130, 158, 115],
    [83, 115, 121],
    [55, 90, 89],
    [54, 85, 82],
    [48, 74, 27],
    [75, 105, 33],
    [56, 83, 31],
    [59, 84, 35],
    [103, 132, 68],
    [86, 116, 102],
    [58, 87, 81],
    [89, 118, 70],
    [83, 116, 65],
    [78, 112, 122],
    [63, 93, 83],
    [50, 80, 73],
    [52, 81, 45],
    [52, 77, 44],
    [40, 64, 47],
    [41, 63, 43],
    [60, 87, 54],
    [100, 121, 39],
    [134, 167, 68],
    [60, 88, 50],
    [46, 68, 45],
    [84, 116, 93],
    [258, 90, 87],
    [49, 80, 66],
    [53, 80, 42],
    [59, 84, 33],
    [40, 62, 37],
    [47, 69, 40],
    [70, 102, 49],
    [90, 121, 94],
    [105, 133, 66]
];



var schema = [
    {name: 'PM2.5', index: 0, text: 'PM2.5'},
    {name: 'AQIindex', index: 1, text: 'AQI'},
    {name: 'PM10', index: 2, text: 'PM10'},

];

var lineStyle = {
    normal: {
        width: 1,
        opacity: 0.5
    }
};

option = {
    backgroundColor: '#333',
    legend: {
        bottom: 30,
        data: ['北京'],
        itemGap: 20,
        textStyle: {
            color: '#fff',
            fontSize: 14
        }
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (obj) {
            var value = obj[0].value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                
                + value[7]
                + '</div>'
                + schema[0].text + '：' + value[0] + '<br>'
                + schema[1].text + '：' + value[1] + '<br>'
                + schema[2].text + '：' + value[2] + '<br>'
;
        }
    },
    // dataZoom: {
    //     show: true,
    //     orient: 'vertical',
    //     parallelAxisIndex: [0]
    // },
    parallelAxis: [
        {dim: 0, name: schema[0].text},
        {dim: 1, name: schema[1].text},
        {dim: 2, name: schema[2].text},


    ],
    visualMap: {
        show: true,
        min: 0,
        max: 150,
        dimension: 2,
        inRange: {
            color: ['#d94e5d'].reverse(),
            // colorAlpha: [0, 1]
        }
    },
    parallel: {
        left: '5%',
        right: '18%',
        bottom: 100,
        parallelAxisDefault: {
            type: 'value',
            name: 'AQI指数',
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
                color: '#fff',
                fontSize: 12
            },
            axisLine: {
                lineStyle: {
                    color: '#aaa'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#777'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }
        }
    },
    series: [
        {
            name: '北京',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataBJ
        },

    ]
};