option = {

    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [
        {
        type: 'line',
        data: [220, 182, 191, 234, 290, 330, 310].map(function(val) {
            return val*2
        })
    },
            {
        type: 'bar',
        stack:'1',
        // barWidth:'30%',
        data: [220, 182, 191, 234, 290, 330, 310]
    },
            {
        type: 'bar',
        stack:'1',
        data: [220, 182, 191, 234, 290, 330, 310]
    }
    ]
};