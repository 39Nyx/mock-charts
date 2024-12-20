option = {
    title : {
        text: 'ESI学科基线比较量',
        
    },
	tooltip : {
        trigger: 'axis'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['issn','olissn','贡献值']
    },
   
    calculable : true,
    xAxis : [
        {    
		interval:0,
		
            type : 'category',
			boundaryGap:true,
            data : ['1月','2月','3月','4月','5月']
        }
    ],
    yAxis : [
        {
            type : 'value'
			
			
        }
    ],
    series : [
        {
            name:'issn',
            type:'bar',
			barGap:0,
            data:[2300,500,4000,2000,10000],
			itemStyle:{
			normal:{color:'#33FFFF'},
			
			}	
           
    
        },
        {
            name:'olissn',
            type:'bar',
			 barGap:0,
            data:[200, 500, 900, 200, 200],
           itemStyle:{
			normal:{color:'yellow'},
			
			}	 
        },
        {
            name:'贡献值',
            type:'bar',
			barGap:0,
            data:[200, 500, 900, 200, 200],
           itemStyle:{
			normal:{color:'#003333'},
			
			}	 
        }
    ]
};