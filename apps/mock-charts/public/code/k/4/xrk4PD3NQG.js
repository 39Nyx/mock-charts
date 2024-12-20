option = {
    title : {
        text: '幼儿园按投保险种分布情况',
        subtext: '内部数据',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['实习生责任险','校园方责任险','学意险']
    },
    series : [
        {
            name: '投保量',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:0, name:'实习生责任险 0%'},
                {value:58, name:'校园方责任险 15.34%'},
                {value:320, name:'学意险 84.66%'},

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
