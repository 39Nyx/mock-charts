option = {
    title : {
        text: '薛之谦事件的情感倾向',
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
        data: ['支持','反对','中立',]
    },
    series : [
        {
            name: '倾向',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:159, name:'支持'},
                {value:123, name:'反对'},
                {value:18, name:'中立'},
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
