function normalDist(theta, x) {
    return 1 / (theta * Math.sqrt(2 * Math.PI)) * Math.exp(- x * x / 2 / theta / theta);
}

function generateData(theta, x0, x1) {
    var data = [];
    for (var i = 0; i <= 200; i++) {
        var x = (x1 - x0) * i / 200 + x0;
        data.push([x, normalDist(theta, x)]);
    }
    return data;
}

option = {
    xAxis: {
        type: 'value',
        min: -5,
        max: 5,
        interval: 1
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            type: 'line',
            showSymbol: false,
            data: generateData(0.3, -5, 5)
        },
        {
            type: 'line',
            showSymbol: false,
            data: generateData(0.5, -5, 5)
        },
        {
            type: 'line',
            showSymbol: false,
            data: generateData(1, -5, 5)
        },
        {
            type: 'line',
            showSymbol: false,
            data: generateData(2, -5, 5)
        }
    ]
};