option = {
    backgroundColor:'#11283a',
    tooltip: {
        trigger: 'axis',
    },
    color:['#fcba62','#69f0ff'],
    legend: {
        x: 'left',
        top: '11%',
        left:'15%',
        textStyle: {
            color: '#68a9ff',
            fontSize: 14,
            padding:[0,8,0,8]
        }
    },
    grid: {
        top: '15%',
        left: '10%',
        right: '5%',
        bottom: '15%',
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#494e54'
                }
            },
            axisLabel: {
                color: '#d9d9d9',
            },
            splitLine: {
                show: false,
            },
            boundaryGap: false,
            data: ['2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26', '2020-06-27'], //this.$moment(data.times).format("HH-mm") ,
        },
    ],

    yAxis: [
        {
            type: 'value',
            name: '单位：m/s',
            nameTextStyle:{
                         color:"#b9bec6", 
                         fontSize:12,  
                     },
            axisLine: {
                lineStyle: {
                    color: '#494e54',
                    fontSize: 14
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#2d3b47',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#d9d9d9',

                },
            },
        },
    ],
    series: [
        {
            name: '抛物线',
            type: 'line',
            data: [1, 2, 3, 10, 5, 4, 2],
            smooth: true,
            symbol: 'none',
            itemStyle: {
                borderWidth: 2,
                normal: {
                    lineStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgba(39, 222, 172, 1)',
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(39, 222, 172, 0.7)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(39, 222, 172,0)',
                            },
                        ]),
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgba(39, 222, 172, 0.9)',
                            },
                            {
                                offset: 0.4,
                                color: 'rgba(39, 222, 172, 0.5)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(39, 222, 172, 0)',
                            },
                        ]),
                    },
                },
            },
        },
    ],
};
