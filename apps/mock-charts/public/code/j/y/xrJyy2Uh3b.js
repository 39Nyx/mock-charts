option = {
    title : {
        
        textStyle: {

fontSize: 34,
fontStyle: 'normal',
fontWeight: 'normal',
},
        text: '新世纪外语学生年级分布',
        
        x:'center'
    
   
},

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    
    series : [
        {
            name: '新世纪外语学生年级分布',
            type: 'pie',
            radius : '75%',
            center: ['50%', '60%'],
            data:[
                {value:22, name:'二年级'},
                {value:24, name:'三年级'},
                {value:60, name:'四年级'},
                {value:70, name:'五年级'},
                {value:53, name:'六年级'},
                {value:62, name:'初一'},
                {value:52, name:'初二'},
                {value:30, name:'初三'},
                {value:13, name:'高一'},
                {value:11, name:'高二'},
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
;
             

		
		
		// 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
		 window.onresize = myChart.resize;