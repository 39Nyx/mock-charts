app.title = '笛卡尔坐标系上的热力图';


var ydata = [];
for (i = 0; i < 20; i++) {
    ydata.push(i);
}

var xdata = [];
var data = [];
for (var i = 0; i < 800; i++) {
    var freq = 88 + i * 0.025;
    for (var n = 0; n < 5; n++) {
        var level = (Math.random() * 50).toFixed(1);
        data.push([i, n, level])
    }
    xdata.push(freq);
}

option = {
    tooltip: {
        position: 'top'
    },
    xAxis: {
        // scale: true,
        //    type: 'value'
        position: 'top',
        type: 'category',
        data: xdata
    },
    yAxis: {
        inverse: true,
        type: 'category',
        data: ydata
    },
    visualMap: {
        min: 0,
        max: 100,
        calculable: true,
        realtime: false,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
    },
    series: [{
        name: 'Punch Card',
        type: 'heatmap',
        data: data,
        itemStyle: {
            emphasis: {
                borderColor: '#333',
                borderWidth: 1
            }
        },
        showSymbol: false,
        hoverAnimation: false,
        progressive: 1000,
        animation: false
    }]
};
var index=5;

setInterval(function () {
    for (var i = 0; i < 800; i++) {
        var level = (Math.random() * 50).toFixed(1);
        data.push([i, index, level])
    }
   index++;
    
    myChart.setOption({
        series: [{
            data: data
        }]
    });
}, 1000);

