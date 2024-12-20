option = {
    title : {
        
        textStyle: {

fontSize: 34,
fontStyle: 'normal',
fontWeight: 'normal',
},
        text: '新世纪外语学生学习阶段分布',
        
        x:'center'
    
   
},
    
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    
    series : [
        {
            name: '新世纪外语学生学习阶段分布',
            type: 'pie',
            radius : '75%',
            center: ['50%', '60%'],
                
      
            data:[
                {value:135, name:'小学阶段'},
                {value:144, name:'初中阶段'},
                {value:26, name:'高中阶段'},
               
            ],
            
            itemStyle: {
                emphasis: {
                    shadowBlur: 40,
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