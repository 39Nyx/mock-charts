option = {
    title: {
        text: '中美GDP',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
        left: 'left',
        data: ['中国的指数', '美国的指数']
    },
    xAxis: {
        type: 'category',
        name: 'x',
        splitLine: {show: false},
        data: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'log',
        name: 'y'
    },
    series: [
        {
            name: '美国的指数',
            type: 'line',
            data: [14594842181900, 14964372000000, 15204019634600, 15542161722300, 15802855301300, 16177455297100, 16640387258901.1, 16887543468524]
        },
        {
            name: '中国的指数',
            type: 'line',
            data: [5514129888591.98, 6100620488867.55, 6682402684926.16, 7207389755117.65, 7766512755882.13, 8333286913499.17, 8908300778495.9, 9504208187205.41]
        }
    ]
};
