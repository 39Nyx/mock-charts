option = {
    title: {
        text: '近十年中国电影产业票房信息一览',
        subtext: '数据来源：国家统计局'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['全国电影票房收入(亿元)', '国产电影票房收入(亿元)', '海外电影票房收入(亿元)', '国产影片海外票房(亿元)'],
        left: 'right',
        right: '0%',
        bottom: '88%',

    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['2007年', '2008年', '2009年', '2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017上半年']

    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '全国电影票房收入(亿元)',
        type: 'line',
        stack: '总量',
        areaStyle: {
            normal: {}
        },
        data: [33.27, 43.41, 62.06, 101.72, 131.15, 170.73, 217.69, 296.39, 440.69, 457.12, 271.77]
    }, {
        name: '国产电影票房收入(亿元)',
        type: 'line',
        stack: '总量',
        areaStyle: {
            normal: {}
        },
        data: [18.01, 25.63, 35.13, 57.34, 70.31, 82.74, 127.67, 161.55, 271.36, 266.6, 104.56]
    }, {
        name: '海外电影票房收入(亿元)',
        type: 'line',
        stack: '总量',
        areaStyle: {
            normal: {}
        },
        data: [15.26, 17.78, 26.93, 44.38, 60.84, 87.99, 90.02, 134.84, 169.33, 190.52, 167.21]
    }, {
        name: '国产影片海外票房(亿元)',
        type: 'line',
        stack: '总量',
        areaStyle: {
            normal: {}
        },
        data: [20.2, 15.6, 27.7, 35.17, 20.46, 10.63, 14.14, 18.7, 27.7, 38.257]

    }]
};