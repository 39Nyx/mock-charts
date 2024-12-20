option = {
  tooltip: {
	        show: true,
	        formatter: "{b} <br> {c}"
	    },
	    yAxis: [{
	        min:0,
	        max:500,
	        position:'left',
	        offset:-95,
	        axisTick: {
	            show: false,
	        },
	        axisLine: {
	            show: false,
	        },
	        axisLabel: {
	            show: false,
	            formatter:function(value,index){
	                return value;
	            }
	        },
	        splitLine: {
	            show: false,
	        },
	        splitNumber :6,
	    }],
	    xAxis: [{
	        type: 'category',
	        data: ['仓容容量'],
	        axisTick: {
	            show: false,
	        },
	        axisLine: {
	            show: false,
	        },
	        axisLabel: {
	            textStyle: {
	                color: '#333',
	            }
	        }
	
	    }],
	    series: [{
	        type: 'bar',
	        barWidth: 50,
	        silent: true,
	        itemStyle: {
	            normal: {
	                color: 'white',
	                borderColor:'lightskyblue',
	                borderWidth:'2',
	                barBorderRadius: [0, 0, 0, 0],
	            }
	        },
	        barGap: '-100%',
	        data: [50].map(function(d) {
	            return 500
	        }),
	    
	    },{
	        name: ' ',
	        type: 'bar',
	        barWidth: 50,
	        silent: true,//禁掉鼠标移动显示事件
	        label: {
	            normal: {
	                show: true,
	                position: 'top',
	                formatter: function(o){
	                    return o.value;
	                },
	            }
	        },
	        data: [{
	            value: 500,
	            itemStyle: {
	                normal: {
	                    barBorderRadius: [0, 0, 0, 0],
	                    color: {
	                        type: 'bar',
	                        x: 0,
							y: 0,
							x2: 0,
							y2: 1,
	                        colorStops: [{
	                            offset: 0,
	                            color: 'white' // 0% 处的颜色
	                        }, {
	                            offset: 1,
	                            color: 'white' // 100% 处的颜色
	                        }],
	                        globalCoord: false, // 缺省为 false
	
	                    }
	                }
	            }
	        } ],
	    }, {
	        name: ' ',
	        type: 'bar',
	        barWidth: 50,
	        label: {
	            normal: {
	                show: true,
	                position: 'top',
	                formatter: function(o){
	                    return o.value;
	                },
	            }
	        },
	        data: [{
	            value: 320,
	            itemStyle: {
	                normal: {
	                    barBorderRadius: [0, 0, 0, 0],
	                    color: {
	                        type: 'bar',
	                        x: 0,
							y: 0,
							x2: 0,
							y2: 1,
	                        colorStops: [{
	                            offset: 0,
	                            color: 'yellow' // 0% 处的颜色
	                        }, {
	                            offset: 1,
	                            color: 'lightgreen' // 100% 处的颜色
	                        }],
	                        globalCoord: false, // 缺省为 false
	
	                    }
	                }
	            }
	        } ],
	    }]
};