function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
        ]
    }
}

var data = [];
var now = +new Date(1997, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
    data.push(randomData());
}

option = {
     backgroundColor: "#344b58",
    title: {
        text: '动态数据 + 时间坐标轴'
    },
    grid: {
                show: true,
                borderWidth: 0,
                top: '15%',
                left: window.smallGridLeft,
                right: window.smallGridRight,
                // backgroundColor: window.smallGridBackgroundColor
            },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        axisLine: {
                lineStyle: {
                        color: 'rgba(239,159,15,.5)'
                    }
                },
        splitLine: {
            show: false
        }
        
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
         splitLine: {
                    lineStyle: {
                        type: 'solid',
                        color: 'rgba(239,159,15,.5)'
                    }
                },
         axisLine: {
                    show: false
                },
    },
    series: [{
        name: '模拟数据',
        type: 'line',
         lineStyle: {
                    normal: {
                        color: '#ffffd1'
                    }
                },
        showSymbol: false,
        hoverAnimation: false,
        data: data
    }]
};

setInterval(function () {

    for (var i = 0; i < 5; i++) {
        // data.shift();
        data.push(randomData());
    }

    myChart.setOption({
        series: [{
            data: data
        }]
    });
}, 200);