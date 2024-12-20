var date = new Date('2018-10-23');
var Ymd = date.toLocaleDateString();

option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        type: 'time',
        min: Ymd + ' 00:00:00',
        max: Ymd + ' 24:00:00',
        interval: 2 * 60 * 60 * 1000,
        axisLabel: {
            formatter: function(v) {
                var date = new Date(v);
                return `${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`;
            }
        },
        // X轴 竖线坐标指示线
        splitLine: {
            show: true
        }
    },
    yAxis: {
        // y轴坐标线隐藏
        axisLine: {
            show: false
        },
        // y轴刻度线隐藏
        axisTick: {
            show: false
        },
    },
    tooltip: {
        // formatter: '{c}',
        formatter: event => {
            // event.value: ['2018-10-23 01:30:00', 11]
            if(event.value && event.value[0])
                var match = event.value[0].match(/.*\s(\w{2}:\w{2}):\w{2}/);
            if(match) return [match[1],event.value[1]].join('<br>')
            return event.value;
        },
    },
    series: [{
        type: 'line',
        data: [
            [Ymd + ' 00:00:00', 5],
            [Ymd + ' 01:30:00', 11],
            [Ymd + ' 02:00:00', 57],
            [Ymd + ' 03:30:00', 23],
            [Ymd + ' 04:00:00', 43],
            [Ymd + ' 05:30:00', 83],
            [Ymd + ' 12:30:00', 183],
            [Ymd + ' 14:00:00', 66],
            [Ymd + ' 15:30:00', 83],
            [Ymd + ' 19:30:00', 83],
            [Ymd + ' 21:30:00', 23],
        ]
    }]
};