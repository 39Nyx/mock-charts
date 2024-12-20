app.title = '双均线图';

var colors = ['#5d8bc3', '#76b981'];
var names = ['2B持仓/2', 'BTC价格'];
var leftData = [7346, 7499, 7550, 7560, 7600, 7730, 7710, 7720, 7699, 7700, 7750, 7770, 7823, 7799, 7845, 7950, 7988, 8000, 8010, 8020, 8028, 8000, 8023, 8025, 8088, 8100, 8110, 8112, 8080, 8099, 8180, 8200, 8210, 8222, 8300, 8310, 8311, 8320, 8400, 8422, 8450, 8500, 8511, 8600, 8400, 8422, 8588, 8620];
var rightData = [7345, 7493, 7517, 7346, 7540, 7506, 7403, 7479, 7352, 7451, 7490, 7409, 7510, 7480, 7393, 7394, 7436, 7487, 7527, 7340, 7477, 7463, 7535, 7498, 7473, 7412, 7487, 7368, 7508, 7425, 7416, 7473, 7433, 7360, 7479, 7398, 7390, 7448, 7379, 7513, 7492, 7411, 7480, 7538, 7523, 7526, 7495, 7399];
var leftMin = 7300;
var leftMax = 8800;
var rightMin = 7300;
var rightMax = 7800;


option = {
    color: colors,
    grid: {
        left: 50,
        right: 50,
        bottom: 30,
        top: 50,
    },
    legend: {
        data: names
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        data: ['00:00', '', '', '', '02:00', '', '', '', '04:00', '', '', '', '06:00', '', '', '', '08:00', '', '', '', '10:00', '', '', '', '12:00', '', '', '', '14:00', '', '', '', '16:00', '', '', '', '18:00', '', '', '', '20:00', '', '', '', '22:00', '', '', ''],
        axisLine: {
            lineStyle: {
                color: "#b5b5b5"
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                fontFamily: "PingFang-SC-Medium",
                fontSize: 12,
                color: "#666666"
            }
        }
    }],
    yAxis: [{
            type: 'value',
            name: names[0],
            min: leftMin,
            max: leftMax,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            }
        },
        {
            id: 1,
            type: 'value',
            name: names[1],
            min: rightMin,
            max: rightMax,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            }
        },

    ],
    series: [{
            name: names[0],
            type: 'line',
            data: leftData,
            itemStyle: {
                normal: {
                    color: colors[1],
                },
            }
        },
        {
            name: names[1],
            data: rightData,
            type: 'line',
            yAxisIndex: 1,
            lineStyle: {
                normal: {
                    width: 1,
                    color: colors[0]
                }
            }
        },
    ]
};