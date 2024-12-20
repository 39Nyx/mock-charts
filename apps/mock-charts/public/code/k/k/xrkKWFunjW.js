option = {
    title: {
        text: 'iphone销量',
        subtext: '纯属虚构',
        left: 'center'
    },
    visualMap: {
        min: 0,
        max: 2500,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'], // 文本，默认为数值文本
        calculable: true
    },
    series: [{
        name: 'iphone5',
        type: 'map',
        mapType: 'china',
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: true
            }
        },
        data: [{
            name: '北京',
            value: Math.round(Math.random() * 1000)
        }, {
            name: '山东',
            value: Math.round(Math.random() * 1000)
        }]
    }]
};