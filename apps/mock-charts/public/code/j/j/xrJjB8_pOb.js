option = {			
    	legend: {	
    		icon:'rect',
	    	itemWidth:20,
	    	itemHeight:10,
	    	itemGap:13,
	    	left:"center",
	        data: ['AA', 'BB','CC','DD'], 	           
		    textStyle:{
		    	color:'#fff'
		    }		        		       	
	    },
	    tooltip: {	       
	    	trigger: 'axis',
	    	/*axisPointer: {type: 'cross'},*/
	        formatter: function(params) {	            	            
	            return params[0].name + '<br/>BB:' + params[0].value+            	
	            '<br/>AA:' + -params[1].value + '<br/>CC:' + params[2].value+"%" + '<br/>DD:' + -params[3].value+'%';	            	
	        }	
		    
	    },
	    xAxis: {
	        type: 'category',
	        axisLine: {
	            lineStyle: {
	                color: '#51627D'
	            }
	        },
	        axisLabel: {
	        	interval :0,
	        	rotate:50,
	        	margin:5,
	        	textStyle: {
	                "color": "#000",
	                "fontSize": 4              
	           }
	        },
	        data: ["南京", "无锡", "徐州", "常州","苏州","南通","连云港","淮安","盐城","扬州","镇江","泰州","宿迁"]	
	    },	 
	    yAxis: [{	
	    	name:'数量',
	    	type:'value',	    	
	    	position: 'left',	    	
	        inverse: true,	
	        nameLocation: 'start',	  
	        axisLine: {
	            lineStyle: {
	                color: '#000'
	            }
	        },        
	        splitLine:{
	            show:false
        	},	        
	        axisLabel: {
	        	textStyle: {
	                "color": "#000",
	                "fontSize": 5             
	            },
	            formatter: function(value) {
	                if (value < 0) {
	                    return -value
	                } else {
	                    return value
	                }
	            }
	        }
	
	    },
	    {   
	    	name:'完成率',
	    	type:'value',	    
	    	position:'right',	    	
	        inverse: true,	
	        nameLocation: 'start',	  
	        axisLine: {
	           lineStyle: {
	                color: '#fff'
	            }
	        },        
	        splitLine:{
	            show:false
        	},	        
	        axisLabel: {
	        	textStyle: {
	                "color": "#fff",
	                "fontSize": 5             
	            },
	            formatter: function(v) {
	                if (v < 0) {
	                    return -v+'%'
	                } else {
	                    return v+'%'
	                }
	            }
	        }
	
	    }],
	    series: [{	        
	        type: 'bar',
	        stack: 'one',	
	        name: "BB",
	        yAxisIndex:0,
	        itemStyle: {
	        	normal: {
	                color: "#4DBFFF"
	            }
	        },
	        data: [200, 250, 290, 450, 590, 700, 600,100,123,250,330,345,430]
	       
	    },{	        
	        type: 'bar',
	        stack: 'one',	       	
	        name: "AA",
	         yAxisIndex:0,
	        itemStyle:{
	        	normal: {
	                color: "#FFCA6A"
	            }
	        },
	        barWidth : 15,
	        data: [-200, -250, -290, -450, -590, -700, -600,-100,-123,-250,-330,-345,-430]
	    },{
	    	type: 'line',
	        stack: 'two',
	         yAxisIndex:1,
	        name: "DD",
	        itemStyle: {
	        	normal: {
	                color: "#FA4D41"
	            }
	        },
	         data: [10,20,30,40,50,60,40,20,10,5,10,40,65]
	    },{
	    	type: 'line',
	        stack: 'two',
	        yAxisIndex:1,
	        name: "CC",
	        itemStyle: {
	        	normal: {
	                color: "#28EFFF"
	            }
	        },
	        data:[-10,-20,-30,-40,-50,-60,-40,-20,-10,-5,-10,-40,-65]
	    }]
	};
	