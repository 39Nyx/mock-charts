option = {
    title : {
        text: '各金融资产比重',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['股票','债券','基金','金融衍生品','现金及等价物']
    },
    series : [
        {
            name: '金融资产',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'债券'},
                {value:310, name:'基金'},
                {value:234, name:'现金及等价物'},
                {value:135, name:'金融衍生品'},
                {value:1548, name:'股票'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};