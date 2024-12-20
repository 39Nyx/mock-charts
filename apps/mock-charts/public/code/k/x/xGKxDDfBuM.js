var rate = 10;

var option = {
    tooltip: {
        axisPointer: {
            type: 'cross'
        }
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
            show:true,
            lineStyle: {
                color: 'red',
                type: 'dashed'
            }
        },
        axisTick: {
            show: false
        }
    },
    yAxis: [
        {
            type: 'value',
            position: 'left',
            max: function(value) {
                return 10;
            },
            min: function(value) {
                return -10;
            },
            axisLabel: {
                color: 'red',
                inside: true
            },
            axisTick: {
                show: false
            }
        },
        {
            type: 'value',
            position: 'right',
            max: function(value) {
                return rate;
            },
            min: function(value) {
                return -rate;
            },
            axisLabel: {
                formatter: function(value) {
                    // return (value * 0.3) + '%'
                    return  value + ' %'
                },
                inside: true
            },
            axisTick: {
                show: false
            }
        }
    ],
    series: [{
        data: [5, 1, 2, 4, 7, 8, 2],
        type: 'line'
    }]
};