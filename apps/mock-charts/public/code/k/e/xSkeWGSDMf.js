option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        bottom: '0',
        data:['酒店','商超','流通','其他']
    },
    series: [
        {
            name:'自然网点分类',
            type:'pie',
            radius: ['50%', '60%'],
            center: ['50%','40%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'酒店'},
                {value:310, name:'商超'},
                {value:234, name:'流通'},
                {value:135, name:'其他'}
            ]
        }
    ]
};