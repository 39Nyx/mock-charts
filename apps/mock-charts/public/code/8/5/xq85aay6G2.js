option = {
    series: [{
        barWidth: 50,
        data: [120, 200, 150, 80, 70, 110, 130],
        itemStyle: {
            barBorderRadius: [4, 4, 0, 0],
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    {offset: 0, color: '#52b8e4'},
                    {offset: 0.5, color: '#4778dc'},
                    {offset: 1, color: '#3b30d4'},
                ]
            ),
        },
        type: 'bar',
    }],
    xAxis: {
        axisLabel: {
            color: '#51a1c6',
            fontSize: 14,
        },
        axisLine: {
            lineStyle: {
                color: '#1e6bb0',
            },
        },
        axisTick: {
          show: false,  
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        type: 'category',
        textStyle: {
            fontSize: 14,
        }
    },
    yAxis: {
        show: false,
    },
};
