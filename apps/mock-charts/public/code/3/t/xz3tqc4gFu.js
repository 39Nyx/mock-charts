option = {
    title: {
        text: 'Awesome Chart'
    },
    legend:{data:['父母世界','肌萌','jiama']},
    xAxis: {
        data: ['PV', '进商', '渠道转化']
    },
    yAxis: {},
    series: [{
        type: 'bar',
        name:'父母世界',
        data:[220, 182, 191,]
    },
    {
        type: 'bar',
        name:'肌萌',
        stack:'qt',
        data:[220, 182, 191,]
    },
    {
        type: 'bar',
        name:'jiama',
        stack:'qt',
        data:[220, 182, 191,]
    }]
};