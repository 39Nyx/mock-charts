var data = [{
        name: '点击总人数',
        value: 18492966,
        label: "100%"
    },
    {
        name: '购买人数',
        value: 245829,
        label: "1.329%"
    }
];
var data2 = [{
        name: '点击总人数',
        value: 18492966,
        label: "100%"
    },
    {
        name: '点击，收藏人数',
        value: 309560,
        label: "1.674%"
    },
    {
        name: '点击，收藏，购买人数',
        value: 23256,
        label: "7.513%"
    }
];
var data3 = [{
        name: '点击总人数',
        value: 18492966,
        label: "100%"
    },
    {
        name: '点击，加购人数',
        value: 688761,
        label: "3.724%"
    },
    {
        name: '点击，加购，购买人数',
        value: 66683,
        label: "9.682%"
    }
];
var data4 = [{
        name: '点击总人数',
        value: 18492966,
        label: "100%"
    },
    {
        name: '点击，收藏并加购人数',
        value: 22052,
        label: "0.119%"
    },
    {
        name: '点击，收藏并加购，购买人数',
        value: 3502,
        label: "15.881%"
    }
];

function space_arr(data) {
    var space = [];
    data.forEach((item, index) => {
        space.push((18492966 - item.value) / 2);
    });
    return space;
}
data_space = space_arr(data);

getArrByKey = (data, k) => {
    let key = k || "value";
    let res = [];
    if (data) {
        data.forEach(function(t) {
            res.push(t[key]);
        });
    }
    return res;
};

option = {
    title: {
        text: 'pv -> buy 漏斗图'
    },
    toolbox: {
        show: true,
        iconStyle: {
            color: '#666',
            borderWidth: 0
        },
        emphasis: {
            iconStyle: {
                textFill: '#666',
                textPadding: 10
            },
        },
        left: 0,
        top: 30,
        itemSize: 20,
        itemGap: 20,
        feature: {
            myTool1: {
                show: true,
                title: 'pv -> buy',
                icon: 'path://M0 26h32v4h-32zM4 18h4v6h-4zM10 10h4v14h-4zM16 16h4v8h-4zM22 4h4v20h-4z',
                onclick: function() {
                    option.series[0].data = space_arr(data);
                    option.series[1].data = data;
                    option.series[2].data = space_arr(data);
                    option.yAxis[0].data = getArrByKey(data, 'name');
                    option.title.text = 'pv -> buy 漏斗图';
                    myChart.setOption(option);
                }
            },
            myTool2: {
                show: true,
                title: 'pv -> fav -> buy',
                icon: 'path://M0 26h32v4h-32zM4 18h4v6h-4zM10 10h4v14h-4zM16 16h4v8h-4zM22 4h4v20h-4z',
                onclick: function() {
                    option.series[0].data = space_arr(data2);
                    option.series[1].data = data2;
                    option.series[2].data = space_arr(data2);
                    option.yAxis[0].data = getArrByKey(data2, 'name');
                    option.title.text = 'pv -> fav -> buy 漏斗图';
                    myChart.setOption(option);
                }
            },
            myTool3: {
                show: true,
                title: 'pv -> cart -> buy',
                icon: 'path://M0 26h32v4h-32zM4 18h4v6h-4zM10 10h4v14h-4zM16 16h4v8h-4zM22 4h4v20h-4z',
                onclick: function() {
                    option.series[0].data = space_arr(data3);
                    option.series[1].data = data3;
                    option.series[2].data = space_arr(data3);
                    option.yAxis[0].data = getArrByKey(data3, 'name');
                    option.title.text = 'pv -> cart -> buy 漏斗图';
                    myChart.setOption(option);
                }
            },
            myTool4: {
                show: true,
                title: 'pv -> fav,cart -> buy',
                icon: 'path://M0 26h32v4h-32zM4 18h4v6h-4zM10 10h4v14h-4zM16 16h4v8h-4zM22 4h4v20h-4z',
                onclick: function() {
                    option.series[0].data = space_arr(data4);
                    option.series[1].data = data4;
                    option.series[2].data = space_arr(data4);
                    option.yAxis[0].data = getArrByKey(data4, 'name');
                    option.title.text = 'pv -> fav,cart -> buy 漏斗图';
                    myChart.setOption(option);
                }
            },
        }
    },
    grid: {
        top: '30%',
        bottom: '30%',
        right: 30,
        left: 30,
        containLabel: true
    },
    tooltip: {
        show: false,
        formatter: '{b} : {c}%'
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        show: true,
        inverse: true,
        data: getArrByKey(data, 'name'),
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 16,
        },
        max: 3.5
    }],
    series: [{
        name: '百分比条',
        stack: 'data',
        type: 'bar',
        data: data_space,
        itemStyle: {
            opacity: 0.03
        },
    }, {
        name: '百分比条',
        stack: 'data',
        type: 'bar',
        yAxisIndex: 0,
        data: data,
        barWidth: 35,
        label: {
            normal: {
                show: true,
                position: 'right',
                textStyle: {
                    fontSize: 14,
                    lineHeight: 18
                },
                formatter: function(a) {
                    return a.data.value + '\n' + a.data.label;
                }
            }
        },
    }, {
        name: '百分比条',
        stack: 'data',
        type: 'bar',
        data: data_space,
        itemStyle: {
            opacity: 0.03
        }
    }]
};