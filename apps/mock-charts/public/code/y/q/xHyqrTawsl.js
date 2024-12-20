var xd = [];
var date = new Date();
var count = 0;
var total = [];
for (var i = 0; i < 12; i++) {
    date.setMonth(i);
    date.setDate(1);
    var num = new Date(date.getFullYear(), (date.getMonth() + 1), 0).getDate();
    for (var j = 1; j <= num; j++) {
        if (j == 15) {
            xd[count] = (i + 1) + '月';
        } else {
            xd[count] = '';
        }
        // 		xd[count] = (i+1)+"-"+j;
        count++;
        total[count] = count;
    }
}

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
var now = new Date(2016, 0, 0);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 366; i++) {
    data.push(randomData());
}
option = {
    title: {
        text: '对数轴示例',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        left: 'left',
        data: ['2的指数', '3的指数']
    },
    xAxis: [{
        show: false,
        axisLabel: {
            interval: [new Date(2016, 2, 1), new Date(2016, 3, 1)]
        },
        type: 'time',
        name: 'x',
    }, {
        position: 'bottom',
        axisLabel: {
            interval: 0
        },
        axisTick: {
            show: false
        },
        scale: false,
        name: 'x',
        data: xd
    }],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'log',
        name: 'y'
    },
    series: [{
        name: '1/2的指数',
        type: 'line',
        data: data
    }]
};