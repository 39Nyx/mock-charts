option = {
    title: {
        text: 'Awesome Chart'
    },
    yAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    xAxis: [{}, {}],
    series: [{
        type: 'bar',
        xAxisIndex: 1,
        itemStyle: {
            color: 'gray'
        },
        barWidth: '25%',
        data: [700, 700, 700, 700, 700, 700, 700],
        barGap: '-150%',
        silent: true
    }, {
        stack: 'xxx',
        type: 'bar',
        data: [220, 182, 191, 234, 290, 330, 310],
        itemStyle: {
            opacity: 0
        },
        barWidth: '50%',
        silent: true

    }, {
        stack: 'xxx',
        type: 'bar',
        data: [220, 182, 191, 234, 290, 330, 310],
        itemStyle:{
            color:'orange'
        }
    }, ],
};