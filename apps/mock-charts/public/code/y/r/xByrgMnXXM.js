option = {
    name:'体重简化',
    backgroundColor: '#FFFFFF',
    title: {
        text: '体重\n79Kg', //最近一次体重
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24,
            color: '#0099ff',
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
        min: 75, //最低为最低值减3
        max: 85, //最高最高值加5
    }],
    series: [{
        name: '体重简化',
        type: 'line',
        smooth: true,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 5,
                color: '#0099ff',
            }
        },

        data: [83, 82, 80, 83, 80, 79]
    }, ]
};