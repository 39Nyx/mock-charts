option = {
   backgroundColor: 'rgb(41,121,255)',
        title: {
          text: '折现拐点样式及背景渐变色'
        },
    	grid: {  
		    left: '5%',  
		    right: '5%',  
		    bottom: '7%', 
		    top: '5%',
		    containLabel: true
		},  
    	xAxis: {
	        data: ['10.10', '10.11', '10.12', '10.13', '10.14', '10.15', '10.16','10.17'],
	        splitNumber: 7,
	        boundaryGap: false,
	        offset: '0',
	        axisLine: {
	            onZero: false,
	            show:false,
	            lineStyle: {
	            	color: '#fff'
	            }
	        },
	        axisTick: {
	            show: false  
			},
			axisLabel: {
				margin:2,	
			}
	    },
	    yAxis: {
	        show:false,
	        max:36,
	        axisLine: {
	            onZero: false,
	            show:false,
	            lineStyle: {
	            	color: '#fff'
	            },
	            fontSize: 10
	        },
	        axisTick: {
	            show: false  
			},
			axisLable: {
				show: false,
				margin: 0,
				padding: 0
			}
	    },
	    series: [{
	        type: 'line',
	        symbolSize:5,
	        //第六个拐点样式设置
	        data: [12, 15, 11, 23, 25, 12, {
				value: 18,
				symbolSize: 7,
				label: {
		           	normal: {
		               show: true,
		               formatter: '￥{c}.00',
		               fontSize: 12,
		               distance: 10
		            }
	          },
	          itemStyle: {
	          	normal: {
	          		borderColor: 'rgba(255,255,255,.3)',
	          		borderWidth: 7
	          	}
	         }
			},22],
	        lineStyle: {
	        	normal: {
	        		width:2,
	        		color: '#fff'
	        	}
	        },
	        itemStyle:{
                normal:{
                  color:'#fff' 
                }
           	},
//			           	label: {
//				           	normal: {
//				               show: true,
//				               formatter: '￥{c}.00',
//				               fontSize:10
//				            }
//			           	},
           	markArea: {
	            silent: true,
	            data: [
	                [{
	                    yAxis: 0,
	                    itemStyle: {
	                        normal: {
	                            color: {
								    type: 'linear',
								    x: 0,
								    y: 0,
								    x2: 0,
								    y2: 1,
								    colorStops: [{
								        offset: 0, color: 'rgba(41,129,253,0)'
								    }, {
								        offset: 1, color: 'rgb(44,129,253)'
								    }],
								    globalCoord: false 
								}
	                        }
	                    },
	               	}, {
	                    yAxis: 100
	                }]
	            ]
	        }
	    }]   
};