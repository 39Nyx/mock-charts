option = {
    title : {
        text: '参与抽奖人数(2022)',
            x:'center',
            top:130
            
    },
    grid:{height:'40%',width:'60%', containLabel: true},
    backgroundColor:'#ffffff',
    series : [
        {
          
            type: 'pie',
            radius : '25%',
            center: ['50%', '50%'],
            data:[
                {value:35, name:'5100西藏冰川水（1桶 ）'},
                {value:3, name:'5100西藏冰川水（1瓶 ）'},
                {value:1984, name:'商城组合券包'}
                
            ],
            label:{shwo:true,formatter:'{b} : {c}'},
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
