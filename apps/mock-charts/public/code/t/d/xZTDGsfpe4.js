option = {
    backgroundColor: '#010f1c',
    title: {
        text: '单位 /L',
        textStyle: {
            fontSize: 12,
            fontWeight: 'normal',
            color: '#aabdcc', //标题颜色
        },
        top: '5px',
        left: '3%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985',
            },
        },
    },

    grid: {
        left: '3%',
        top: '40px',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisTick: {
                show: false,
            },
            axisLine: {
                
                lineStyle: {
                    color: '#242a3c',
                },
            },
            axisLabel: {
                interval: 0, //设置x轴的标签显示可自适应
                show: true,
                textStyle: {
                    color: '#aabdcc',
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: ['#242a3c'],
                    width: 1,
                    type: 'solid',
                },
            },
            //
            data: ['1月', '2月', '3月', '4月 ', '5月', ' 6月', ' 7月'],
        },
    ],
    yAxis: [
        {
            type: 'value',

            axisTick: {
                show: false,
            },
            axisLine: {
                show: false, //y轴线
                lineStyle: {
                    color: '#242a3c',
                },
            },
            axisLabel: {
                // margin: 10,
                textStyle: {
                    fontSize: 12,
                    color: '#aabdcc',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#242a3c'],
                    width: 1,
                    type: 'solid',
                },
            },
        },
    ],
    series: [
        {
            name: '进入',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 3,
                    color: '#3bb5fe',
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(0,192,255,0.4)',
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(0,192,255,0.4)',
                            },
                            {
                                offset: 0.8,
                                color: 'transparent',
                            },
                        ],
                        false
                    ),
                    // shadowColor: 'rgba(232,246,254,0.2)',
                    shadowBlur: 30,
                },
            },
            itemStyle: {
                normal: {
                    color: '#1ee0e4',
                    borderColor: '#1ee0e4',
                    borderWidth: 0,
                },
            },

            data: [50, 80, 40, 90, 60, 80, 50],
        },
    ],
};
