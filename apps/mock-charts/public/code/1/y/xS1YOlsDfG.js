option = {
    title: {
        text: '经营系统-成交转化率分析',
        x:'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data:['零售店','餐馆']
    },
    grid: {
        top: '15%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['12月18日','12月19日','12月20日','12月21日',
            '12月22日','12月23日','12月24日']
    },
    yAxis: {
        type: 'value',
        name: '（%）',
        mix:0,
        max:100
    },
    series: [
        {
            name:'零售店',
            type:'line',
            data:[20, 32, 26, 34, 27, 23, 27]
        },
        {
            name:'餐馆',
            type:'line',
            data:[26, 22, 31, 34, 29, 33, 28]
        }
    ]
};
