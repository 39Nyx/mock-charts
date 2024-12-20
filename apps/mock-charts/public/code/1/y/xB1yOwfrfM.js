app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','广告营销','搜索引擎']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['0%', '40%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
               
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直接访问'},
               // {value:310, name:'邮件营销'},
               // {value:234, name:'联盟广告'},
               // {value:135, name:'视频广告'},
                {value:679, name:'广告营销'}, 
                {value:1548, name:'搜索引擎'}
            ]
        }
    ]
};