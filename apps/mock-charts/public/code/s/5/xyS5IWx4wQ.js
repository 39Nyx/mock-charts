var data = [{
    name: '20-30岁',
    value: 40
}, {
    name: '30-40岁',
    value: 56
}, {
    name: '40-50岁',
    value: 49
}, {
    name: '50-60岁',
    value: 41
}, {
    name: '60岁以上',
    value: 66
}];

var colors = ['rgba(253,0,0,1)', 'rgba(253,0,0,.5)']

option = {
    grid: {
        left: '2%',
        right: '2%',
        bottom: '1%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: data.map(item => item.name),
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value',
        name: '单位（人）',
    }],
    series: [{
        name: '年龄分布',
        type: 'bar',
        barWidth: '60%',
        label: {
            normal: {
                show: true,
                position: 'top',
                textStyle: {
                    fontSize: 30,
                    color: '#666'
                }
            },
            emphasis: {
                textStyle: {
                    fontSize: 30,
                    color: '#000'
                }
            }
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0.2,
                    color: colors[1]
                }, {
                    offset: 1,
                    color: 'transparent'
                }]),
            },
            emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0.2,
                    color: colors[0]
                }, {
                    offset: 1,
                    color: 'transparent'
                }]),
            }
        },
        data: data.map(item => {
            return {
                value: item.value,
                name: item.name,

            }
        })
    }]
};