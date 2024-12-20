var schema = [
    {name: 'date', index: 0, text: '日'},
    {name: 'AQIindex', index: 1, text: '同比增长'},
    {name: 'PM25', index: 2, text: '市场份额'},
    {name: 'PM10', index: 3, text: '销售'},
];
option = {
    xAxis: {},
    yAxis: {},
    series: [{
        symbolSize: 20,
        data: [
            [10.21, 8.04, 'aaaaa', '478', '126'],
            [2.12, 3.95, '孙俪', '124', '215'],
            [3.12, 5.05, '孙俪', '124', '215'],
            [4.12, 4.95, '孙俪', '124', '215'],
            [5.12, 8.95, '孙俪', '124', '215'],
            [6.12, 7.95, '孙俪', '124', '215'],
            [7.12, 9.95, '孙俪', '124', '215'],
        ],
        type: 'scatter'
    }],
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (obj) {
            var value = obj.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + value[2] + ''
                + '</div>'
                + schema[1].text + '：' + value[1] + '%<br>'
                + schema[2].text + '：' + value[3] + '<br>'
                + schema[3].text + '：' + value[4] + '<br>';
        }
    },
};
