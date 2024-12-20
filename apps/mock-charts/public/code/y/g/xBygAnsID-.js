option = {
   
    tooltip : {
        trigger: 'axis',
		
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
		 
    },

    xAxis : [
        {
            type : 'category',
            data : [{value:'期刊量'},
			        {value:'独有刊'},
					{value:'现刊量'},
					{value:'重复量'},
			],
            axisTick: {
                alignWithLabel: true
            },
			axisTick: {
        show: false
    },
        }
    ],
    yAxis : [
        {
           type: 'value',
        axisLabel: {
            formatter: '{value}%'
        },
		axisTick: {
        show: false
    },
      max:'100'
	  
        }
		
    ],
    series : [
        {
           
            type:'bar',
            barWidth: '30%',
            
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:[{
				value:100,
				
		itemStyle:{
			normal:{color:'#C0C0C0'}
			}
			},
			{
				value:76.85,
				
		itemStyle:{
			normal:{color:'yellow'}
			}
			},
			{
				value:100,
				
		itemStyle:{
			normal:{color:'orange'}
			}
			},
			{
				value:29.63,
				
		itemStyle:{
			normal:{color:'#00CCFF'}
			}
			
			 }]
        }
    ]
};