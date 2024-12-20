option_pluss = {
    name: '血压简化',
    backgroundColor: '#FFFFFF',
    title: {
        text: '血压\n80/120', //最近一次血压
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24,
            color: '#ff6666',
        },
        left: '2%',
        top: '5%'
    },
    grid: {
        left: '0%',
        right: '3%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['9.23', '10.3', '10.11', '10.15', '10.26', '11.2'],
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        show: false,
        min: 74, //最低为低压减5
        max: 140, //最高为高压加10
    }],
    series: [{
            name: '收缩压',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            //        symbolSize: 2,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 5,
                    color: '#ff6666',
                }
            },




            data: [120, 130, 120, 125, 130, 129]

        }, {
            name: '舒张压',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            //        symbolSize: 2,
            showSymbol: false,
            //       color:'#ffffff',
            lineStyle: {
                normal: {
                    width: 5,
                    color: '#6666ff',
                }
            },


            data: [83, 82, 80, 83, 80, 79]
        },

    ]

};