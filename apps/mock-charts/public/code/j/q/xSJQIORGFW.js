option = {
								baseOption: {
									backgroundColor:'#fff',
								    title: {
								        text: '价格走势',
								        textStyle:{
								        	fontSize:'14'
								        }
								    },
								    tooltip: {
								        trigger: 'axis',
								        axisPointer: {
								            type: 'cross',
								            label: {
								                backgroundColor: '#283b56'
								            }
								        }
								    },
								    legend: {
								        data:['最新成交价', '成交量']
								    },
								    grid: {
								        left: '10%',
								        top: 70,
								        right: '15%',
								        bottom: 30
								    },
								    dataZoom: {
								        show: false,
								        start: 0,
								        end: 100
								    },
								    xAxis: [
								        {
								            type: 'category',
								            boundaryGap: true,
								            lineStyle:{
								            	color:{
								            		type:'linear',
								            		x:0,
								            		y:0,
								            		x2:0,
								            		y2:1
								            	}
								            },
								            data: (function (){
								                var now = new Date();
								                var res = [];
								                var len = 10;
								                while (len--) {
								                    res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
								                    now = new Date(now - 2000);
								                }
								                return res;
								            })()
								        },
								        {
								            type: 'category',
								            boundaryGap: true,
								            data: (function (){
								                var res = [];
								                var len = 10;
								                while (len--) {
								                    res.push(len + 1);
								                }
								                return res;
								            })()
								        }
								    ],
								    yAxis: [
								        {
								            type: 'value',
								            scale: true,
								            name: '价格',
								            nameLocation:'end',
								            nameGap:20,
								            max: 30,
								            min: 0,
								            boundaryGap: [0.2, 1]
								        },
								        {
								            type: 'value',
								            scale: true,
								            name: '成交量',
								            nameGap:20,
								            max: 1200,
								            min: 0,
								            boundaryGap: [0.2, 1]
								        }
								    ],
								    series: [
								        {
								            name:'成交量',
								            type:'bar',
								            xAxisIndex: 1,
								            yAxisIndex: 1,
								            itemStyle :{
									            normal:{
									                color:'#02b5d5',
								                    opacity: 0.2
								                },
								            },
								            data:(function (){
								                var res = [];
								                var len = 10;
								                while (len--) {
								                    res.push(Math.round(Math.random() * 1000));
								                }
								                return res;
								            })(),
								            markPoint: {
								             	data: [
								             	        {type: 'max', name: '最大值',
								             	            itemStyle :{
								             	                normal :{
								             	                    color:'#02b5d5',
								             	                },
								             	            },
								             	        },
								             	        {type: 'min', name: '最小值',
								             	            itemStyle :{
								             	                normal :{
								             	                    color:'#02b5d5',
								             	                },
								             	            },
								             	        }
								             	    ]
								            },
								            markLine: {
								                data: [
								                    {type: 'average', name: '平均值'}
								                ]
								            }
								        },
								        {
								            name:'最新成交价',
								            type:'line',
								            itemStyle :{
								                normal :{
								                    color:'#a173ed',
								                },
								            },
								            data:(function (){
								                var res = [];
								                var len = 0;
								                while (len < 10) {
								                    res.push((Math.random()*10 + 5).toFixed(1) - 0);
								                    len++;
								                }
								                return res;
								            })(),
								            markPoint: {
								             	data: [
								             	        {type: 'max', name: '最大值',
								             	            itemStyle :{
								             	                normal :{
								             	                    color:'#a173ed',
								             	                },
								             	            },
								             	        },
								             	        {type: 'min', name: '最小值',
								             	            itemStyle :{
								             	                normal :{
								             	                    color:'#a173ed',
								             	                },
								             	            },
								             	        }
								             	    ]
								            },
								            markLine: {
								                data: [
								                    {type: 'average', name: '平均值'}
								                ]
								            }
								        }
								    ]
								},
								media:[
									{
									    option: {
									    	title:{
									    		top:'top',
									    	},
									        legend: {
									            right: 'center',
									            top:0,
									            orient: 'horizontal'
									        },
									        grid:{
									        	left:'5%',
									        	top:100,
									        	right:'25%',
									        	bottom:100
									        }
									    }
									},
									{
									    query: {
									        minAspectRatio: 1
									    },
									    option: {
									        legend: {
									            right: 'center',
									            top: 'top',
									            orient: 'horizontal'
									        },
									    },
									    grid:{
									        	left:'10%',
									        	top:100,
									        	right:'15%',
									        	bottom:100
									        }
									},
									{
									    query: {
									        maxWidth: 500, 
									        minWidth: 320
									    },
									    option: {
									        legend: {
									        	left:'right',
									            right: 10,
									            top:'top',
									            orient: 'horizontal'
									        },
									        grid: {
									            left: '7%',
									            top: 100,
									            right: '12%',
									            bottom: 100
									        }
									    }
									}
								]
							};

							app.count = 11;
							setInterval(function (){
							    axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

							    var data0 = option.baseOption.series[0].data;
							    var data1 = option.baseOption.series[1].data;
							    data0.shift();
							    data0.push(Math.round(Math.random() * 1000));
							    data1.shift();
							    data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

							    option.baseOption.xAxis[0].data.shift();
							    option.baseOption.xAxis[0].data.push(axisData);
							    option.baseOption.xAxis[1].data.shift();
							    option.baseOption.xAxis[1].data.push(app.count++);

							    myChart.setOption(option.baseOption);
							}, 2100);
							
							if (option.baseOption && typeof option.baseOption === "object") {
							    myChart.setOption(option.baseOption, true);
							}