option = {
    title : {
        text: '格斗孤儿事件的浏览量',
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
        data: ['视频','新闻','微博','微信','论坛']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:360000, name:'视频'},
                {value:372000, name:'新闻'},
                {value:69900, name:'微博'},
                {value:58700, name:'微信'},
                {value:362000, name:'论坛'}
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
