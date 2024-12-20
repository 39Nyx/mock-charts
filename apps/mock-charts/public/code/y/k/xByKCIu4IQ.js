option = {
    title: {
        text: 'skd第一星光大道销售图',
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['成交','预购'],
        icon:'rect',
        bottom: 0
    },
    toolbox: {
        show: true,
        feature: {
            magicType: {show: true, type: ['stack', 'tiled']},
            saveAsImage: {show: true}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        color:'#F22',
        name: '成交',
        type: 'line',
        smooth: true,
        symbol:'none',
        data: [130, 112, 111, 154, 60, 90, 110]
    },
    {
        name: '预购',
        color:'yellow',
        type: 'line',
        smooth: true,
        data: [130, 182, 124, 91, 90, 30, 10]
    }]
};