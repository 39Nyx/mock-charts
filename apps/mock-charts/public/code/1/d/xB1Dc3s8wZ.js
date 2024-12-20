option = {
    tooltip: {
        trigger:'axis',
  
        formatter: "保障率&占比 : {c}%",
            
        axisPointer: {
            type: 'cross',
            
            crossStyle: {
                color: '#999'
            }
        }
    },

    xAxis: [
        {
            type: 'category',
			show:true,
            data: ['2013','2014','2015','2016','2017'],
            axisPointer: {
                type: 'shadow'
            },
			axisTick: {
        show: false
    },
        }
    ],
	
    yAxis: [
        {
            type: 'value',
            name: '保障率',
            min: 0,
            max:100,
            interval: 20,
            axisLabel: {
                formatter: '{value}%'
            },
			axisTick: {
        show: false
    }
        },
     
    ],
    series: [
        {
            name:'保障率',
            type:'bar',
            barWidth: '30%',
            data:[{value:30,
			  itemStyle:{
				  normal:{
					color:'#33FFFF' 
					  
					  }
				  }
			},
			{value:60,
			  itemStyle:{
				  normal:{
					color:'yellow' 
					  
					  }
				  }
			},
			{value:70,
			  itemStyle:{
				  normal:{
					color:'orange' 
					  
					  }
				  }
			},{value:80,
			  itemStyle:{
				  normal:{
					color:'#00CCFF' 
					  
					  }
				  }
			},{value:20,
			  itemStyle:{
				  normal:{
					color:'#C0C0C0' 
					  
					  }
				  }
			}
			
			]
        },
       
        { 
             
            
            type:'line',
             name:'占比',
            data:[30,60, 70,80, 20]
        }
    ]
};
