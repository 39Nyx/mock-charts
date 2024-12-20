var category = []; //当前前12个月每月月份
var lineData = []; //扶贫收益
// var barData = []; //扶贫企业

var dottedBase = new Date();
dottedBase.setMonth(dottedBase.getMonth() - 12);
dottedBase.setDate(dottedBase.getDate() - dottedBase.getDate() + 1);
// var t_s=dottedBase.getTime();//转化为时间戳毫秒数
// dottedBase.setTime(t_s-1000 * 3600 * 24 *7 *21);//设置新时间
// dottedBase.setDate(dottedBase.getDate() + 1);

var date = dottedBase;
for (var i = 0; i < 12; i++) {
    // var date = new Date(dottedBase + 1000 * 3600 * i);
    date.setMonth(date.getMonth() + 1);
    category.push([date.getFullYear(), date.getMonth() + 1,
        date.getDate()
    ].join('-'));
    var b = Math.random() * 20;
    var d = Math.random() * 20;
    var h = d + b;
    // barData.push(b.toFixed(2));
    lineData.push(h.toFixed(2));
}

// option
option = {
    // backgroundColor: '#0f375f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#333'
            }
        },
        formatter: '{a}: {c}'
    },
    legend: {
        // data: ['投资收益', '扶贫企业'],
        textStyle: {
            color: '#ccc'
        }
    },
    xAxis: {
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#dFdbDC'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#333',
                fontWeight: 'normal',
                fontSize: '12',
            },
            formatter: '{value}',
        },
    },
    yAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#dFdbDC'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#dFdbDC ',
            }
        },
        axisLabel: {
            textStyle: {
                color: '#333',
                fontWeight: 'normal',
                fontSize: '12',
            },
            formatter: '{value}',
        },
        axisTick: {
            show: false
        },
    },
    series: [{
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: '#06B4CE'
            }
        },
        symbolRepeat: true,
        symbolSize: [3, 14],
        symbolMargin: 1,
        z: -10,
        data: lineData
    }]
};