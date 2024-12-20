option = {
    name:'心率简化',
    backgroundColor: '#FFFFFF',
    title: {
        text: '心率\n88次', //最近一次体重
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24,
            color: '#fa8d55',
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
        min: 80, //最低为最低减5
        max: 97, //最高为最高值加10
    }],
    series: [{
        name: '心率',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 5,
                color: '#fa8d55',
            }
        },

        data: [86, 87, 87, 87, 86, 85]
    }, ]
};