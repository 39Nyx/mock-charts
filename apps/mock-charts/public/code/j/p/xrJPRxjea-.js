option = {
    backgroundColor:'white' ,
    title : {
        text: '类目分布',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
        textStyle:{
            fontSize:200
        }
           
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '50%',
            center: ['50%', '60%'],
            data:[
                {value:58680, name:'党建团建'},
                {value:131211, name:'教育成长'},
                {value:267878, name:'人文科技'},
                {value:345576, name:'生活休闲'},
                {value:102734, name:'身心健康'},
                {value:51444, name:'创业就业'},
                {value:8888, name:'权益维护'},
                {value:51666, name:'政策法规'},
                {value:22222, name:'社团公益'},
                {value:37888, name:'情感家庭'},
                {value:47867, name:'理想信念'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
            },
            label: {
                normal: {
                    textStyle: {
                        fontSize:20
                    }
                }
            },
            
        }
    ]
};
