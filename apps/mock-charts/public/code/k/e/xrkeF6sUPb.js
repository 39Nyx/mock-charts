option = {
			 tooltip: {
        trigger: 'item',
        formatter: "{a}<br/>{b}:{c}({d}%)"
    },
	
            
     graphic:{
	 
		    type: 'text',
            left: 'center', // 相对父元素居中
            top: 'middle',  // 相对父元素居中
            style: {
                fill: '#777',
                text: '  389万\n经费总计',
				
              
		 font: '30px Microsoft YaHei',
		
		   }
	   },
	  
    series: [
        {
            name:'类型',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
               
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:900,name:'外文期刊'},
                {value:900,name:'外文图书'},
                {value:600,name:'中文期刊'},
                {value:300,name:'中文图书'},
                {value:300,name:'其他'}
            ]
        }
    ]
};