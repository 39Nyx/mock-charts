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
        name: '次数'
    },
    series: [
        {
            name:'广告发放',
            type:'line',
            stack: '总量',
            data:[20, 32, 10, 34]
        },
        {
            name:'会展',
            type:'line',
            stack: '总量',
            data:[20, 12, 11, 34]
        },
        {
            name:'走出去',
            type:'line',
            stack: '总量',
            data:[15, 32, 20, 15]
        },
        {
            name:'走进来',
            type:'line',
            stack: '总量',
            data:[32, 33, 30, 34]
        }
    ]
};
