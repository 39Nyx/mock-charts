option = {
    title : {
        text: '江歌案件话题主体',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:301, name:'刘鑫'},
                {value:300, name:'江歌'},
                {value:169, name:'江母'},
                {value:165, name:'陈世峰'},
                {value:23, name:'警察'},
                {value:55, name:'舆论压力'},
                {value:13, name:'日本'},
                {value:20, name:'法律'},
                {value:56, name:'朋友'}
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
