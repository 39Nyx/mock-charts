option = {
    title: {
        text: '控制x抽刻度显示',
        left: '50%',
        textAlign: 'center'
    },
    legend: {
        right: 20,
        data: ['今日','昨日']
    },
    xAxis: {
        type: 'category',
        axisLabel:{
            interval:2
        }, // 设置间隔多少个标签显示
        data: ['00:00','2:00','4:00','6:00','8:00','10:00','12:00','14:00','16:00','18:00','20:00',"22:00"]
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '今日',
        type: 'line',
        data: ['1200', '1400', '1008', '1411', '1026', '1288', '1300', '800', '1100', '1000', '1118', '1322']
    }, {
        name: '昨日',
        type: 'line',
        data: ['1200', '1400', '808', '811', '626', '488', '1600', '1100', '500', '300', '1998', '822']
    }]
};