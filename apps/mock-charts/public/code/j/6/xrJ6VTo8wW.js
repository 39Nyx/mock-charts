option = {
    tooltip: {
        trigger: 'item',
         formatter: "{b}:{c}({d}%)"
    },
   graphic:{
	 
		    type: 'text',
            left: 'center', // 相对父元素居中
            top: 'middle',  // 相对父元素居中
            style: {
                fill: '#777',
                text: [
                    '10%'
                ],
				
		 font: '40px Microsoft YaHei'
		   }
	   },
    series: [
	   {
           
            type:'pie',
            selectedMode: 'single',
            radius: [0, '50%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            
        },
	
        {
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
                    show: false,
		
                }
            },
            data:[
                {value:2000000,
				name:'总费用',
				itemStyle:{
			normal:{color:'#C0C0C0'}
			}	},
                {value:200000,	
					name:'经费',
				itemStyle:{
			normal:{color:'yellow'}
			}
				}
				
            ]
        }
    ]
};