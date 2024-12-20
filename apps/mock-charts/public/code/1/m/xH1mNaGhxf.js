option = {
    title : {
        text: '2016年74城市环境比例',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: []
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:18.1, name:'轻度污染'},
                {value:4.7, name:'中度污染'},
                {value:2.4, name:'重度污染'},
                {value:0.6, name:'严重污染'},
                {value:21.8, name:'优'},
                {value:52.5, name:'良'}
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
