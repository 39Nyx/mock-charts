var aSeries = {
    type: 'bar',
    data: [1, 2, 3]
};

var bSeries = {
    type: 'bar',
    data: [2, 3, 4]
};

option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [aSeries, bSeries]
};

setTimeout(function() {
    option.series = [bSeries]; // remove aSeries
    myChart.setOption(option, true); // `true` for not merge
}, 3000);
