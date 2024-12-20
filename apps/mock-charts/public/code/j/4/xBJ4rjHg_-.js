var time = [];
var data = [];
for (var i = 0; i < 7; ++i) {
    time.push(new Date(new Date() - 1000 * 60 * 60 * 24 * i));
    data.push(Math.ceil(Math.random() * 100));
}

option = {
    xAxis: {
        data: time,
        type: 'category',
        axisLabel: {
            formatter: function(value) {
                return moment(value).format('LL');;
            }
        }
    },
    yAxis: {
    },
    series: [{
        type: "line",
        data: data
    }]
};
