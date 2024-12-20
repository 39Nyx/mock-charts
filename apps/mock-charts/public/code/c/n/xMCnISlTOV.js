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
            data: [21.3, 20.4, 17.9, 16.1, 17.2, 14.6, 12.7, 10.9, 13, 10.1, 10]
        },
        {
            name: '溺水',
            type: 'line',
            step: 'middle',
            data: [4.6, 4.4,4.6, 3.2, 2.9,2.7, 3.3, 3, 3.1, 1.6, 2.1]
        },

        {
            name: '中毒',
            type: 'line',
            step: 'middle',
            data: [0.4, 0.2, 0.2, 0.3, 0.3,0.1, 0.1, 0.1, 0.1, 0, 0.1]
        },
        {
            name: '跌落',
            type: 'line',
            step: 'middle',
            data: [4.5, 3.5, 3.4, 2.8, 2.9, 2.8,3.2,3,2.9, 2, 1.7]
        },
        {
            name: '烧伤/火灾',
            type: 'line',
            step: 'middle',
            data: [1.7, 0.4,0.8, 0.4, 0.9, 0.9, 0.9, 1, 0.6, 0.7, 0.5]
        },



    ]
};