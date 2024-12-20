option = {
    title : {
        text: '“榆林产妇坠楼”事件舆论来源',
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
        data: ['微博','知乎','百度贴吧','天涯论坛',]
    },
    series : [
        {
            name: '事件舆论来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:100, name:'微博'},
                {value:70, name:'知乎'},
                {value:110, name:'百度贴吧'},
                {value:135, name:'天涯论坛'},
               
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
