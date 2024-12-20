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
                text: [
                    '   4385\n资源总计'
					
                ],
		 font: '40px Microsoft YaHei',
		
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
                {value:30,name:'外文期刊',
			  itemStyle:{
				  normal:{
					color:'#33FF00' 
					  
					  }
				  }
			},
			{value:30,name:'外文图书',
			  itemStyle:{
				  normal:{
					color:'#330000' 
					  
					  }
				  }
			},
			{value:20,name:'中文期刊',
			  itemStyle:{
				  normal:{
					color:'#CC66CC' 
					  
					  }
				  }
			},
			{value:10,name:'中文图书',
			  itemStyle:{
				  normal:{
					color:'#33FF99' 
					  
					  }
				  }
			},
			{value:10,name:'其他',
			  itemStyle:{
				  normal:{
					color:'#CC66CC' 
					  
					  }
				  }
			},
               
            ]
        }
    ]
};
