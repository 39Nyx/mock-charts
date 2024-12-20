config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'bottom',
    distance: 140 ,
}


var labelOption = {
    normal: {
        show: true,
        position: config.position,
        distance: config.distance,
        align: config.align,
        verticalAlign: config.verticalAlign,
        rotate: config.rotate,
        formatter: '{b}',
        fontSize: 12,
      	  textStyle:{
            color:'black',
        },
    }
};
option = {
    title : {
        text: 'ESI学科基线比较量',
        
    },
      grid: {
        bottom: 170
    },
	tooltip : {
        trigger: 'axis'
    },
   
    legend: {
        data:['机构最低被引量','本校被引量']
    },
   
    calculable : true,
    xAxis : [
        {    
		interval:0,
		 axisLabel:{
		  show:false,   
		  
		 },
            type : 'category',
			boundaryGap:true,
	
       
            data : ['Space Science', 'Social Sciences,\n general','Psychiatry/Psycho\nlogy','Plant & Animal\nScience','Physics','Pharmacology\n& Toxicology','Neuroscience\n& Behavior','Multidisciplinary','Molecular Biology\n& Genetics','Microbiology','Mathematics','Materials Science','Immunology','Geosciences','Environment/Eco\nlogy','Engineering','Economics\n& Business','Computer Science','Clinical Medicine','Chemistry','Biology\n& Biochemistry','Agricultural\nSciences']
        }
    ],
    yAxis : [
        {
            type : 'value'
			
			
        }
    ],
    series : [
        {
            name:'机构最低被引量',
            type:'bar',
			label:labelOption,
            data:[2300,500,4000,2000,10000,2500,4000,9000,9500,22000,100,4000,3000,10000,3500,4500,8000,9000,4500,8500,9000,4500],
			itemStyle:{
			normal:{color:'#33FFFF'}
			}	
           
    
        },
        {
            name:'本校被引量',
            type:'bar',
			 
            data:[200, 500, 900, 200, 200, 700, 100, 100, 400, 100, 600, 200,100,200,300,500,100,500,200,300,400,500],
           itemStyle:{
			normal:{color:'#003333'}
			}	 
        }
    ]
};