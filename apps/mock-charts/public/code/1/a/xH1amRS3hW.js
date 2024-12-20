
option = {
    title : {
        text: '新世纪外语学生来源',
        subtext: '2017',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
   
    series : [
        {
            name: '学生来源',
            type: 'pie',
            radius : '75%',
            center: ['50%', '60%'],
            data:[
    {name:'六中', value:1},
    {name:'行知学校', value:1},
    {name:'营盘中学', value:1},
    {name:'友谊中学', value:1},
    {name:'地角中学', value:1},
    {name:'十小', value:1},
    {name:'高德小学', value:1},
    {name:'十一小', value:1},
    {name:'丰海小学', value:1},
    {name:'逸夫小学', value:1},
    {name:'北艺附小', value:1},
    {name:'银海一小', value:1},
    {name:'六小', value:2},
    {name:'十五小', value:2},
    {name:'八中', value:2},
    {name:'七中', value:3},
    {name:'外国语', value:3},
    {name:'五小', value:3},
    {name:'九中', value:3},
    {name:'北外实', value:4},
    {name:'一小', value:5},
    {name:'实验学校', value:12},
    {name:'五中', value:13},
    {name:'北师大', value:14},
    {name:'北中', value:15},
    {name:'九小', value:19},
    {name:'二实验', value:32},
    {name:'三中', value:35},
    {name:'三小', value:38},
    {name:'二小', value:38},
    {name:'一中', value:53},
    {name:'八小', value:102}
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



		
		
		// 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
		 window.onresize = myChart.resize;