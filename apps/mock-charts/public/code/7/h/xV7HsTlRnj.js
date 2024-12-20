
	function getDate(n1,n2){
	    var data = [];
	    for(var i=0;i< 288; i++){
	        data.push(Math.floor(Math.random()*n1)+n2)
	    }
	    return data
	}
	var offsetValue = 40;
	var option = {
		title: {
			text: '网络请求',
			textStyle: {'fontSize':16},
			left: 'center',
		},
	     toolbox: {
            feature: {
                dataView: {
                    show: true,
                    readOnly: false
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
	    legend: {	
	    	left: '34%',
	    	top: '4%',
	    	width: 400,
	    	icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['内网访问量', '外网访问量', '专线访问量'],
            right: '4%',
            textStyle: {
                fontSize: 12,
                color: '#333'
            }
	    },		    
	    grid: [
		    {
		        left: 30,
		        right: 30,
		        top: '8%',
		        bottom: '60%',
		    }, 
		],
	    xAxis: [
	    	{
	    	    data:[ "02:50", "02:55", "03:00", "03:05", "03:10", "03:15", "03:20", "03:25", "03:30", "03:35", "03:40", "03:45", "03:50", "03:55", "04:00", "04:05", "04:10", "04:15", "04:20", "04:25", "04:30", "04:35", "04:40", "04:45", "04:50", "04:55", "05:00", "05:05", "05:10", "05:15", "05:20", "05:25", "05:30", "05:35", "05:40", "05:45", "05:50", "05:55", "06:00", "06:05", "06:10", "06:15", "06:20", "06:25", "06:30", "06:35", "06:40", "06:45", "06:50", "06:55", "07:00", "07:05", "07:10", "07:15", "07:20", "07:25", "07:30", "07:35", "07:40", "07:45", "07:50", "07:55",]

	    	},
	    ],
	    yAxis: [
	    	{
				position: 'left',
				max:25,
				min:0,
				splitNumber: 5,
	    	}				    	
	    ],
	    series: [
		    {
		    	name: '内网访问量',
		    	type: 'line',
				yAxisIndex: 0,
		    	data: getDate(9,10),
		  //  	smooth: true,
                lineStyle: {
                    normal: {
                        width: 1,
                        color: 'rgb(137,189,27)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(137, 189, 27, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(137, 189, 27, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(137,189,27)',
                    }
                },
                symbol: 'none',
		    },
		    {
		    	name: '外网访问量',
		    	type: 'line',
				yAxisIndex: 0,
		    	data: getDate(15,8),
        		  //  	smooth: true,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0, 136, 212, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(0, 136, 212, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(0,136,212)'
                    }
                },
	    		symbol: 'none',
		    },								    
		    {
		    	name: '专线访问量',
		    	type: 'line',
				yAxisIndex: 0,
		    	data: getDate(16,7),
		  //  	smooth: true,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(219, 50, 51, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(219, 50, 51, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(219,50,51)'
                    }
                },
        	    		symbol: 'none',
        		    },							    
        		],
        	};