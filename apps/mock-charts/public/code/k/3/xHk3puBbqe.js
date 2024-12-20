option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
        scale: true,
        axisLabel: {
            textStyle: {
                color: function(val) {
                    if (val > 2500) {
                        return 'red';
                    }
                    else {
                        return 'green';
                    }
                }
            }
        }
    },
    series: [{
        type: 'line',
        data:[2200, 1820, 1910, 2340, 2900, 3300, 3100]
    }]
};