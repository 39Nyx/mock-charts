option = {
    title : {
        text: '人流量分析-服务区进店人数分析',
        subtext: '2017-12-20 服务区总顾客数2450人',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['洗手间','餐厅','便利店','加油站',
                '休息区']
    },
    series : [
        {
            name: '人数',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:300, name:'洗手间'},
                {value:350, name:'餐厅'},
                {value:200, name:'便利店'},
                {value:100, name:'休息区'},
                {value:1500, name:'加油站'}
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
