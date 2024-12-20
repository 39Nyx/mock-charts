option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['城区','城关','建制镇','建制乡','治安','水上']
    },
    series: [
        {
            type:'pie',
            radius: ['35%', '55%'],

            data:[
                {value:335, name:'城区',itemStyle:{normal:{color:'#b6a2de'}}},
                {value:310, name:'城关',itemStyle:{normal:{color:'#5ab1ef'}}},
                {value:234, name:'建制镇',itemStyle:{normal:{color:'#ffb980'}}},
                {value:135, name:'建制乡',itemStyle:{normal:{color:'#d87a80'}}},
                {value:1048, name:'治安',itemStyle:{normal:{color:'#2ec7c9'}}},
                {value:251, name:'水上',itemStyle:{normal:{color:'#7092be'}}}
            ]
        }
    ]
};