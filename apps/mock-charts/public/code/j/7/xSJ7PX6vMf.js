app.title = '折柱混合';

option = {
    title: {
        text: '复合对比分析-年人流量与年成单数',
        subtext: '2017年-便利店成单量',
        left: 'center'
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
        data: ['人流量', '成单量'],
        x: 'left'
    },
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
        type: 'value',
        name: '人流量',
        min: 0,
        max: 5000,
        interval: 500
    }, {
        type: 'value',
        name: '成单量',
        min: 0,
        max: 500,
        interval: 50
    }],
    series: [{
        name: '人流量',
        color: 'blue',
        type: 'line',
        data: [3621, 4192, 3926, 3865, 4012, 3785, 3865, 3912, 4086, 4301, 3961, 3741]
    }, {
        name: '成单量',
        type: 'bar',
        yAxisIndex: 1,
        data: [260, 321, 293, 287, 312, 295, 308, 330, 322, 348, 289, 281]
    }]
};