option = {
    xAxis: {
        type: 'category',
        name: "mmHg",
        data: ['40', '50', '60', '70', '80', '90', '100', '110', '120', '130', '140', '150', '160', '170', '180', '190', '200', '210', '220', '230', '240', '250', '260', '270'],
        //splitNumber: 23,
    },
    yAxis: {
        name: '%',
        type: 'value',
        min: 0,
        max: 100,
        splitLine: {
            lineStyle: {
                type: 'dotted'
            }
        },
    },
    series: [{
        data: [10, 52, 80, 70, 60, 50, 20],
        type: 'bar',
    }]
};