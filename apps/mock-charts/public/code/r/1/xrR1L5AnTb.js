option = {
    color: ['#4183D7', '#FF9D8E', '#C1DCF9', '#FFE1D1', '#395469'],
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['交通事故', '溺水', '中毒', '跌落', '烧伤/火灾']
    },
    grid: {
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
        data: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
            name: '交通事故',
            type: 'line',
            step: 'middle',
            data: [18.1, 20.65, 12.91, 15.71, 24.56, 15.42, 17.75, 23.47, 22.61, 21.58, 16.44]
        },
        {
            name: '溺水',
            type: 'line',
            step: 'middle',
            data: [14.72, 18.08, 13.14, 17.03, 21.98, 16.85, 22.75, 22.20, 18.76, 16.99, 15.98]
        },

        {
            name: '中毒',
            type: 'line',
            step: 'middle',
            data: [2.54, 2.14, 2.10, 2.35, 3.11, 1.37, 2.12, 3.17, 2.35, 2.47, 2.51]
        },
        {
            name: '跌落',
            type: 'line',
            step: 'middle',
            data: [4.58, 6.80, 3.51, 4.26, 7.05, 5.33, 7.53, 7.45, 6.09, 6.32, 6.18]
        },
        {
            name: '烧伤/火灾',
            type: 'line',
            step: 'middle',
            data: [0.95, 1.24, 0.48, 0.39, 0.34, 0.60, 0.74, 0.66, 0.57, 0.59, 0.86]
        },



    ]
};