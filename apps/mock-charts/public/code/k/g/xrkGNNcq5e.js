var weekCnt = 16;

var weeks = [];
var prices = [];
for (var i = 1; i < weekCnt + 1; ++i) {
    weeks.push(i);
    prices.push((Math.pow(i, 3) + i * 15) * 5);
}

option = {
    title: {
        text: '迟发请客金额'
    },
    xAxis: {
        data: weeks
    },
    yAxis: {
    },
    series: [{
        type: 'line',
        data: prices,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
    }]
};