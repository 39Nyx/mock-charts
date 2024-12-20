option = {
    value: 20, //百分比,必填
    name: '及格率', //必填
    color: ['#00C5B3', '#d4effa'],
    title: {
        text: '占比',
        subtext: '20%',
        x: 'center',
        y: 'center'
    },
    series: {
        type: 'pie',
        radius: ['40%', '45%'],
        label: {
            normal: {
                formatter: '{{d}%}\n{{b}}',
            
            }
        },
        data: [{
            name: '绿色订单400',
            value: 400
        }, {
            name: '全部订单200',
            value: 200
        }]
    }
};