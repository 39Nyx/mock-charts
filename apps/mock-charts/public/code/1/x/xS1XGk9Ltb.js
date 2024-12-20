//原文链接：http://blog.csdn.net/yin138/article/details/53730498
// 由于模拟数据较少，所以需要在图中滑动滚轮放大后才能看见效果
var data = [];

var data1 = [];

var anchor = [
    {
        name: getToday() + ' 00:00:00', 
        value: [
            getToday() + ' 00:00:00', 0
        ]
    },
    {
        name: getTomorrow() + ' 00:00:00', 
        value: [
            getTomorrow() + ' 00:00:00', 0
        ]
    }
];
    

option = {
    title: {
        text: '动态数据 + 时间坐标轴'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },
    legend: {
        data: ['模拟数据', '模拟数据1']
      },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [{
        name: '模拟数据',
        type: 'line',
        stack: '总量',
        smooth: true,
        areaStyle: {normal: {}},
        showSymbol: false,
        hoverAnimation: false,
        data: data
    }, 
    {
        name: '模拟数据1',
        type: 'line',
        stack: '总量',
        smooth: true,
        areaStyle: {normal: {}},
        showSymbol: false,
        hoverAnimation: false,
        data: data1
    },{
        name: 'anchor',
        type: 'line',
        showSymbol: false,
        data: anchor,
        itemStyle: {
            normal: {
                opacity: 0
            }
        },
        lineStyle: {
            normal: {
                opacity: 0
            }
        }
    }]
};

function randomData() {
    
    data.push({
        name: getToday() + ' ' + getSeconds(),
        value: [
            getToday() + ' ' + getSeconds(), Math.round(Math.random() * 1002)
        ]
    });
    
    data1.push({
        name: getToday() + ' ' + getSeconds(),
        value: [
            getToday() + ' ' + getSeconds(), Math.round(Math.random() * 32)
        ]
    });
    
}

function getToday() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    if (hour < 10 && hour > 0) hour = '0' + hour;
    var minute = now.getMinutes();
    if (minute < 10 && minute > 0) minute = '0' + minute;
    var seconds = now.getSeconds();
    if (seconds < 10 && seconds > 0) seconds = '0' + seconds;
    return year + '/' + month + '/' + date;
}

function getTomorrow() {
    var now = new Date();
    var oneday = 1000 * 3600 * 24;
    var tomorrow = new Date(+now + oneday);
    var year = tomorrow.getFullYear();
    var month = tomorrow.getMonth() + 1;
    var date = tomorrow.getDate();
    var hour = tomorrow.getHours();
    if (hour < 10 && hour > 0) hour = '0' + hour;
    var minute = tomorrow.getMinutes();
    if (minute < 10 && minute > 0) minute = '0' + minute;
    var seconds = tomorrow.getSeconds();
    if (seconds < 10 && seconds > 0) seconds = '0' + seconds;
    return year + '/' + month + '/' + date;
}

function getSeconds() {
    var now = new Date();
    var hour = now.getHours();
    if (hour < 10) hour = '0' + hour;
    var minute = now.getMinutes();
    if (minute < 10) minute = '0' + minute;
    var seconds = now.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    return hour + ':' + minute + ':' + seconds;
}

setInterval(function () {
    randomData();
    console.log(data);
    myChart.setOption({
        series: [
            {
                data: data
            }, 
            {
                data: data1
            }
        ]
    });
}, 1000);
