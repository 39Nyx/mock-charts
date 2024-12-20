option = {
    color:['#02CB99','#FF9900'],
             title: {
		        text: '人数',
		      //  top:'9%',
		        textStyle:{
		        	fontWeight:'normal',
		        	fontSize:'12'
		        }
		    },
		    grid: {
		    	top:'26%',
		        left: '3%',
		        right: '4%',
		        bottom: '6%',        
		        containLabel: true
		    },
			legend: {
				left:'38%',
		        data:['登录人数','在学人数']
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
			xAxis: {
		        type: 'category',
		        data: ['08-05', '08-06', '08-07', '08-08', '08-09', '08-10', '08-11'],
		        
		    },
		    yAxis: {
		        type: 'value',
		        minInterval:1,
		        splitLine: {     //网格线
				   show: false
			    },
		    },
		    series: [
		    	{name:'登录人数',
		            type:'line',
		            data:[82, 60, 80,60,80,60,80]
		        },
		    	{name:'在学人数',
		            type:'line',
		            data:[70,50,70,50,70,50,70]
		        }
            ]
};