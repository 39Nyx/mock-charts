option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['广告发放','会展','走出去','走进来']
    },
    grid: {
        left: '3%',
        right: '40%',
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
        data: ['2014','2015','2016','2017'],
        name: '年份'
    },
    yAxis: {
        type: 'value',
        name: '金额(元)'
    },
    series: [
        {
            name:'广告发放',
            type:'line',
            stack: '总量',
            data:[2000, 3200, 1000, 3400]
        },
        {
            name:'会展',
            type:'line',
            stack: '总量',
            data:[2000, 1200, 1100, 3400]
        },
        {
            name:'走出去',
            type:'line',
            stack: '总量',
            data:[1500, 3200, 2000, 1500]
        },
        {
            name:'走进来',
            type:'line',
            stack: '总量',
            data:[3200, 3300, 3000, 3400]
        }
    ]
};
