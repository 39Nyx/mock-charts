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
                {value:	17322, name:'职场人际'},
                {value:	8108, name:'工作机会'},
                {value:7056, name:'求职面试'},
                {value:	6254, name:'创业资质'},
                {value:6210, name:'实习兼职'},
                {value:	3472, name:'创业就业方向'},
                {value:	1605, name:'创业投资'},
                {value:	1033, name:'创业项目'},
                {value:	397, name:'创业团队'},
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
