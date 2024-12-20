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
            data: [11, 9.7, 8.7, 7.8, 7.6, 7.3, 6.4, 6.2, 5.8, 5.2, 5.1]
        },
        {
            name: '溺水',
            type: 'line',
            step: 'middle',
            data: [3.1, 3.2,3.6, 3.2, 2.6,2.3, 2.5, 2.2, 2.1, 2.4, 2.1]
        },

        {
            name: '中毒',
            type: 'line',
            step: 'middle',
            data: [0.2, 0.2, 0.3, 0.4, 0.3,0.3, 0.1, 0.1, 0.2, 0.1, 0.1]
        },
        {
            name: '跌落',
            type: 'line',
            step: 'middle',
            data: [1.2, 1, 1.4, 1.3, 1.2, 0.8,0.7,0.5, 0.9, 0.6, 0.6]
        },
        {
            name: '烧伤/火灾',
            type: 'line',
            step: 'middle',
            data: [1.1, 1.2,1.2, 0.6, 1, 0.60, 0.7, 0.4, 0.4, 0.4, 0.2]
        },



    ]
};