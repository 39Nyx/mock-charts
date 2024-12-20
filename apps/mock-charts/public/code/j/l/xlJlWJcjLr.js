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
            data: [8.83, 8.36, 6.82, 6.13, 5.54, 5.37, 5.14, 4.76, 4.83, 5.03, 5.27]
        },
        {
            name: '溺水',
            type: 'line',
            step: 'middle',
            data: [1.31, 1.28,1.24, 1.18, 1.23,1.17, 1.18, 1.05, 1.09, 1.05, 1.18]
        },

        {
            name: '中毒',
            type: 'line',
            step: 'middle',
            data: [1.02, 1.17, 1.14, 0.99, 1.01,1.01, 0.84, 0.79, 0.77, 0.93, 1.04]
        },
        {
            name: '跌落',
            type: 'line',
            step: 'middle',
            data: [0.22, 0.22, 0.2, 0.18, 0.15, 0.17,0.16,0.15,0.13, 0.15, 0.14]
        },
        {
            name: '烧伤/火灾',
            type: 'line',
            step: 'middle',
            data: [0.6, 0.66,0.51, 0.47, 0.44, 0.39, 0.31, 0.41, 0.35, 0.32, 0.35]
        },



    ]
};