var data = [{
    name: '各类营业执照',
    value: 25116
}, {
    name: '食品经营许可证',
    value: 1603
}, {
    name: '酒类商品零售许可证',
    value: 606
}, {
    name: '其他',
    value: 161
}];

option = {
    backgroundColor: '#fff',
    color: ['#3398DB'],
    tooltip: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: data.map(item=>item.name),
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '',
        type: 'bar',
        barWidth: '60%',
        data:  data.map(item=>item.value)
    }]
};