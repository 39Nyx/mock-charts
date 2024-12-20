option = {
    title: {
        text: "barGap:重叠;相同值的stack: '1'为叠加",

    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },

    legend: {
        data: ['蒸发量', '降水量', '平均温度']
    },
    yAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    xAxis: [{
        type: 'value',
        name: '水量',
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
            formatter: '{value} ml'
        }
    }],
    series: [{
            name: '蒸发量',
            type: 'bar',
            z: 2,
            stack: '1',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 60.7, 135.6, 162.2, 32.6, 20.0, 6.4, 7.3]
        },
        {
            name: '降水量',
            type: 'bar',
            z: 1,
            stack: '1',
            data: [2.6, 5.9, 9.0, 30.4, 28.7, 70.7, 175.6, 182.2, 48.7, 33.8, 8.0, 10.3]
        },
        {
            name: '平均温度',
            type: 'bar',
            stack: '1',
            // barGap: '-100%', //添加此配置项即为重叠效果
            z: 3,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 3.0, 6.2]
        }
    ]
};