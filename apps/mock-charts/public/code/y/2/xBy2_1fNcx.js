option = {
    color: ['#04A3AA'],
    backgroundColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: 'red' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'green' // 100% 处的颜色
    }], false),
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c}",
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '5%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: [],
        nameTextStyle: {
            color: "#fff", // 刻度颜色
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: "#fff",
                // 刻度颜色

            },
            formatter: function(val) {
                var reval = '';
                for (var i = 0, len = val.length; i < len; i++) {
                    reval += val.charAt(i) + '\n';
                }
                return reval.substring(0, reval.length - 1);
            }
        }
    }],
    yAxis: [{
        type: 'value',
        nameTextStyle: {
            color: "#fff", // 刻度颜色
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#082335'
            }
        },
        minInterval: 1,
        axisLabel: {
            textStyle: {
                color: "#083D4D", // 刻度颜色
            }
        }
    }],
    series: [{
        name: '数量',
        type: 'bar',
        barWidth: '60%',
        data: []
    }]
};

function formatBarData(data) {
    var ctAData = [];
    var serData = [];

    for (var i = 0; i < data.length; i++) {
        ctAData.push(data[i].name || "");
        serData.push({
            name: data[i].name,
            value: data[i].value || 0
        });
    }

    return {
        ctAData: ctAData,
        serData: serData
    };
}
//数据处理
var tData = [{
    name: 'Mon',
    value: 30
}, {
    name: 'Tue',
    value: 52
}, {
    name: 'Wed',
    value: 60
}, {
    name: 'Thu',
    value: 78
}, {
    name: 'Fri',
    value: 96
}, {
    name: 'Sat',
    value: 246
}, {
    name: 'Sun',
    value: 98
}];
var sData = tData.sort(function(a, b) {
    return b.value - a.value;
});
var fData = formatBarData(sData);
option.xAxis[0].data = fData.ctAData;
option.series[0].data = fData.serData;