option = {
    xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
        axisTick:{
            show: false
        }
    },
    yAxis: {
        type: 'value',
        show: false
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
        label:{
            show: true
        }
    }]
};
