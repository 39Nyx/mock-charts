option = {
    	grid:{
    		top:"10%",
    		bottom:"13%",
    		left:"7%",
    		right:"3%"
    	},
		tooltip : {
	        trigger: 'item',
	        enterable:true,
	        formatter:function(params) {	        	
	            var normal = '';           
	            normal = params.seriesName +':'+ params.value;           	
	            return normal;           
	        }
   		},
		
	    legend: {  
	    	x:"center",
	        data: ['全程','最优','最差'],     	           
		    textStyle:{
		    	color:'#000'
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
	        	"interval":0,
	        	textStyle: {
	                "color": "#000",
	                "fontSize": 5              
	           }
	        },
	        splitLine: {
	            show: false,
	        },
	        nameTextStyle: {
	            color: '#000',
	            fontStyle: 'normal',
	            fontWeight: 'normal',          
	            fontSize: 14,
	        },
	        data: ["沪宁高铁", "京沪高铁", "宁杭高铁", "宁安高铁","沪启高铁"]
		},
	   
	    yAxis: {
	        type: 'value',
	        axisLine: {
	            lineStyle: {
	                color: '#51627D'
	            }
	        },
	        axisLabel : {
	            formatter: '{value}',
	            textStyle: {
	                "color": "#000",
	                "fontSize": 5             
	            }
	        },
	        splitLine:{
	            lineStyle:{
	                color:"#51627D"
	            }
        	}
	        
		},
		   
	    series: [
	    	{		    	
		        itemStyle: {
		            normal: {
		                color: "#FFBA14"		                
		            }
		        },
		        name: "全程",
		        type: 'bar',
		        barWidth:15,
		        data:[{name:'宁',value:'12'},{name:'宁',value:'15'},{name:'宁',value:'17'},{name:'宁',value:'18'},{name:'宁',value:'14'}]
	       },
		    {		    	
		        itemStyle: {
		            normal: {
		                color: "#4DBFFF",
		                label: {
	                        show: true,
	                        position: 'top',
	                        textStyle: {
	                            fontSize: 15,
	                            color:"#000"
	                        },
	                        formatter:function(params) {					        	
					            var normal = '';           
					            normal = params.data.name;           	
					            return normal;           
	        				}
                    	}
		            }
		        },
		        name: "最优",
		        barWidth:15,
		        type: 'bar',
		        data:[{name:'宁',value:'2'},{name:'宁',value:'5'},{name:'宁',value:'7'},{name:'宁',value:'8'},{name:'宁',value:'4'}]
		    },
		    {		    	
		        itemStyle: {
		            normal: {
		                color: "#F8E71C",
		                label: {
	                        show: true,
	                        position: 'top',
	                        textStyle: {
	                            fontSize: 15,
	                            color:"#000"
	                        },
	                        formatter:function(params) {					        	
					            var normal = '';           
					            normal = params.data.name;           	
					            return normal;           
	        				}
                    	}
		            }
		        },
		        name: "最差",
		        type: 'bar',
		        barWidth:15,
		        data:[{name:'宁',value:'10'},{name:'苏',value:'8'},{name:'锡',value:'7'},{name:'扬',value:'8'},{name:'宁',value:'4'}]
		    }]
	};