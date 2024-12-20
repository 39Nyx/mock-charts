option = {
    title: {
        text: '趋势'
    },
    backgroundColor:'#000',
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false,
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true,
            },
        },
    },
    color: ['#63B8FF', '#708090'],
    xAxis: {
        data: ['201601', '201602', '201603', '201604', '201605', '201606', '201607', '201608', '201609', '201610', '201611', '201612']
    },
    yAxis: {
        show: false,
    },
    series: [{
        type: 'bar',
        name: '趋势1',
        data: [1220, 6182, 2191, 3234, 290, 330, 2310, 1234, 12345, 2345, 345, 678]
    }, {
        type: 'line',
        name: '趋势2',
        data: [1220, 182, 2191, 1234, 2903, 2330, 2310, 1234, 12345, 2345, 8345, 678]
    }, {
        type: 'line',
        name: '趋势2',
        data: [1220, 18234, 2191, 1234, 2903, 2330, 2310, 1234, 12345, 2345, 8345, 678]
    }]
};