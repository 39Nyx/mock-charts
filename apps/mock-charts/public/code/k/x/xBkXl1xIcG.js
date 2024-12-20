option = {
    title: {
        text: '历年发展趋势'
    },
    grid: {
        right: '50%',
        bottom: '70%'
    },
    xAxis: {
        type: "category",
        name: '时间',
        axisLine: {
            lineStyle: {
                color: '#000'
            }
        },
        data: [2013, 2014, 2015, 2016, 2017, 2018]
    },
    yAxis: {
        type: 'value',
        name: '持证企业数',
        min: 0,
        max: 10000,
        position: 'left',
    },
    series: [{
        name: '持证企业数',
        color: ['#d82c26'],
        type: 'line',
        itemStyle: {
            normal: {
                lineStyle: {
                    width: 5, //折线宽度
                },
                color: '#35a17a',
                opacity: 0.4
            }
        },
        data: [3379, 4300, 3018, 3793, 3835, 3923, 3041, 3270, 3111, 4474, 4294, 3826]

    }]
};